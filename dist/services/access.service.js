import { StatusCodes } from "http-status-codes";
import { createHmac, randomUUID } from "crypto";
import { AppError } from "../utils/AppError.js";
import { accessRepository } from "../repositories/access.repository.js";
import { eventRepository } from "../repositories/event.repository.js";
import { emailService } from "./email.service.js";
import { getIO } from "../config/socket.js";
const BADGE_SECRET = process.env.BADGE_SECRET || "feeti-access-badge-secret";
// ─── Templates de zones prédéfinies ────────────────────────────────────────
export const ZONE_TEMPLATES = [
    { code: "Z1", name: "Accès Général", description: "Entrée principale, sortie, zone publique", color: "#22C55E" },
    { code: "Z2", name: "Contrôle Billets", description: "Point de scan entrée, pré-filtrage", color: "#F59E0B" },
    { code: "Z3", name: "Zone Publique Étendue", description: "Stands, food court, sponsors, animations", color: "#3B82F6" },
    { code: "Z4", name: "Zone Scène", description: "Devant scène — semi-restrictive", color: "#8B5CF6" },
    { code: "Z5", name: "VIP", description: "Espace VIP, loges VIP, lounge", color: "#F97316" },
    { code: "Z6", name: "Backstage", description: "Derrière scène, loges artistes, production", color: "#EF4444" },
    { code: "Z7", name: "Média / Presse", description: "Zone interview, zone captation", color: "#06B6D4" },
    { code: "Z8", name: "Zone Technique", description: "Régie son/lumière, zone équipements", color: "#6B7280" },
    { code: "Z9", name: "Sécurité / Staff", description: "Poste de commandement, accès surveillance", color: "#1F2937" },
    { code: "Z10", name: "Logistique", description: "Parking staff, accès livraison, montage", color: "#92400E" },
];
// Matrice d'accès par défaut (document section 3C)
// Clé: nom_catégorie, Valeur: map code_zone → niveau
const DEFAULT_ACCESS_MATRIX = {
    "Public Standard": { Z1: "OUI", Z2: "NON", Z3: "OUI", Z4: "NON", Z5: "NON", Z6: "NON", Z7: "NON", Z8: "NON", Z9: "NON", Z10: "NON" },
    "VIP": { Z1: "OUI", Z2: "OUI", Z3: "OUI", Z4: "COND", Z5: "OUI", Z6: "NON", Z7: "NON", Z8: "NON", Z9: "NON", Z10: "NON" },
    "VVIP / Invités spéciaux": { Z1: "OUI", Z2: "OUI", Z3: "OUI", Z4: "OUI", Z5: "OUI", Z6: "COND", Z7: "NON", Z8: "NON", Z9: "NON", Z10: "NON" },
    "Artistes": { Z1: "COND", Z2: "OUI", Z3: "OUI", Z4: "OUI", Z5: "OUI", Z6: "OUI", Z7: "NON", Z8: "NON", Z9: "NON", Z10: "NON" },
    "Staff Organisateur": { Z1: "OUI", Z2: "COND", Z3: "OUI", Z4: "COND", Z5: "COND", Z6: "COND", Z7: "NON", Z8: "COND", Z9: "COND", Z10: "COND" },
    "Média / Presse": { Z1: "OUI", Z2: "OUI", Z3: "OUI", Z4: "COND", Z5: "COND", Z6: "NON", Z7: "OUI", Z8: "NON", Z9: "NON", Z10: "NON" },
    "Équipe Technique": { Z1: "NON", Z2: "NON", Z3: "NON", Z4: "COND", Z5: "NON", Z6: "OUI", Z7: "NON", Z8: "OUI", Z9: "NON", Z10: "COND" },
    "Sécurité": { Z1: "OUI", Z2: "OUI", Z3: "OUI", Z4: "OUI", Z5: "OUI", Z6: "OUI", Z7: "OUI", Z8: "OUI", Z9: "OUI", Z10: "OUI" },
    "Partenaires / Sponsors": { Z1: "OUI", Z2: "OUI", Z3: "OUI", Z4: "NON", Z5: "OUI", Z6: "NON", Z7: "NON", Z8: "NON", Z9: "NON", Z10: "NON" },
    "Logistique": { Z1: "NON", Z2: "NON", Z3: "NON", Z4: "NON", Z5: "NON", Z6: "COND", Z7: "NON", Z8: "COND", Z9: "NON", Z10: "OUI" },
};
// ─── Helpers QR ────────────────────────────────────────────────────────────
function generateQrPayload(badgeId, eventId, categoryId, secret) {
    const issuedAt = Date.now();
    const payload = JSON.stringify({ badgeId, eventId, categoryId, issuedAt });
    const sig = createHmac("sha256", secret).update(payload).digest("hex");
    return JSON.stringify({ badgeId, eventId, categoryId, issuedAt, sig });
}
function verifyQrPayload(qrCode, secret) {
    try {
        const { badgeId, eventId, categoryId, issuedAt, sig } = JSON.parse(qrCode);
        const payload = JSON.stringify({ badgeId, eventId, categoryId, issuedAt });
        const expected = createHmac("sha256", secret).update(payload).digest("hex");
        if (sig !== expected)
            return null;
        return { badgeId, eventId, categoryId };
    }
    catch {
        return null;
    }
}
// ─── Helpers QR rotatif (TOTP window 30s) ─────────────────────────────────
const QR_WINDOW_SECONDS = 30;
function currentWindow() {
    return Math.floor(Date.now() / (QR_WINDOW_SECONDS * 1000));
}
function generateRotatingQrPayload(badgeId, secret) {
    const w = currentWindow();
    const sig = createHmac("sha256", secret).update(`${badgeId}:${w}`).digest("hex");
    return JSON.stringify({ badgeId, w, sig });
}
function verifyRotatingQrPayload(qrCode, secret, badgeId) {
    try {
        const { w, sig } = JSON.parse(qrCode);
        if (typeof w !== "number")
            return false;
        if (Math.abs(currentWindow() - w) > 1)
            return false; // allow ±30s drift
        const expected = createHmac("sha256", secret).update(`${badgeId}:${w}`).digest("hex");
        return sig === expected;
    }
    catch {
        return false;
    }
}
// ─── Helpers permissions ────────────────────────────────────────────────────
async function assertOrganizerOrAdmin(eventId, userId, role) {
    const event = await eventRepository.findById(eventId);
    if (!event)
        throw new AppError("Événement introuvable", StatusCodes.NOT_FOUND);
    const isAdmin = role === "admin" || role === "super_admin";
    if (!isAdmin && event.organizerId !== userId) {
        throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
    }
    return event;
}
// ─── Service ───────────────────────────────────────────────────────────────
export const accessService = {
    // ── ZONES ──────────────────────────────────────────────────────────────
    async createZone(eventId, userId, role, data) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const validCodes = ZONE_TEMPLATES.map((z) => z.code);
        if (!validCodes.includes(data.code)) {
            throw new AppError(`Code zone invalide. Valeurs acceptées : ${validCodes.join(", ")}`, StatusCodes.BAD_REQUEST);
        }
        const existing = await accessRepository.findZoneByCode(eventId, data.code);
        if (existing)
            throw new AppError(`La zone ${data.code} existe déjà pour cet événement`, StatusCodes.CONFLICT);
        return accessRepository.createZone({ eventId, ...data });
    },
    async applyDefaultZones(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const existing = await accessRepository.findZonesByEvent(eventId);
        const existingCodes = new Set(existing.map((z) => z.code));
        const toCreate = ZONE_TEMPLATES.filter((t) => !existingCodes.has(t.code));
        await Promise.all(toCreate.map((t) => accessRepository.createZone({ eventId, ...t })));
        return accessRepository.findZonesByEvent(eventId);
    },
    async getZones(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findZonesByEvent(eventId);
    },
    async updateZone(eventId, zoneId, userId, role, data) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const zone = await accessRepository.findZoneById(zoneId);
        if (!zone || zone.eventId !== eventId)
            throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
        return accessRepository.updateZone(zoneId, data);
    },
    async deleteZone(eventId, zoneId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const zone = await accessRepository.findZoneById(zoneId);
        if (!zone || zone.eventId !== eventId)
            throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
        return accessRepository.deleteZone(zoneId);
    },
    // ── CATÉGORIES ──────────────────────────────────────────────────────────
    async createCategory(eventId, userId, role, data) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.createCategory({ eventId, ...data });
    },
    async applyDefaultCategories(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const defaults = Object.keys(DEFAULT_ACCESS_MATRIX);
        const existing = await accessRepository.findCategoriesByEvent(eventId);
        const existingNames = new Set(existing.map((c) => c.name));
        await Promise.all(defaults
            .filter((name) => !existingNames.has(name))
            .map((name) => accessRepository.createCategory({ eventId, name })));
        return accessRepository.findCategoriesByEvent(eventId);
    },
    async getCategories(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findCategoriesByEvent(eventId);
    },
    async updateCategory(eventId, categoryId, userId, role, data) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const cat = await accessRepository.findCategoryById(categoryId);
        if (!cat || cat.eventId !== eventId)
            throw new AppError("Catégorie introuvable", StatusCodes.NOT_FOUND);
        return accessRepository.updateCategory(categoryId, data);
    },
    async deleteCategory(eventId, categoryId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const cat = await accessRepository.findCategoryById(categoryId);
        if (!cat || cat.eventId !== eventId)
            throw new AppError("Catégorie introuvable", StatusCodes.NOT_FOUND);
        return accessRepository.deleteCategory(categoryId);
    },
    // ── DROITS D'ACCÈS ──────────────────────────────────────────────────────
    async setAccessRights(eventId, userId, role, rights) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.bulkUpsertAccessRights(rights);
    },
    async applyDefaultMatrix(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const [zones, categories] = await Promise.all([
            accessRepository.findZonesByEvent(eventId),
            accessRepository.findCategoriesByEvent(eventId),
        ]);
        if (zones.length === 0 || categories.length === 0) {
            throw new AppError("Créez d'abord des zones et des catégories (ou utilisez /apply-defaults)", StatusCodes.BAD_REQUEST);
        }
        const zoneByCode = Object.fromEntries(zones.map((z) => [z.code, z]));
        const rights = [];
        for (const cat of categories) {
            const matrix = DEFAULT_ACCESS_MATRIX[cat.name];
            if (!matrix)
                continue;
            for (const [code, level] of Object.entries(matrix)) {
                const zone = zoneByCode[code];
                if (zone)
                    rights.push({ categoryId: cat.id, zoneId: zone.id, accessLevel: level });
            }
        }
        if (rights.length === 0)
            throw new AppError("Aucune correspondance avec la matrice par défaut", StatusCodes.BAD_REQUEST);
        await accessRepository.bulkUpsertAccessRights(rights);
        return { applied: rights.length };
    },
    async getAccessMatrix(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const [zones, categories] = await Promise.all([
            accessRepository.findZonesByEvent(eventId),
            accessRepository.findCategoriesByEvent(eventId),
        ]);
        return { zones, categories };
    },
    // ── BADGES ──────────────────────────────────────────────────────────────
    async generateBadge(eventId, userId, role, data) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const cat = await accessRepository.findCategoryById(data.categoryId);
        if (!cat || cat.eventId !== eventId)
            throw new AppError("Catégorie introuvable", StatusCodes.NOT_FOUND);
        const badgeId = randomUUID();
        const secret = randomUUID();
        const qrCode = generateQrPayload(badgeId, eventId, data.categoryId, secret);
        const badge = await accessRepository.createBadge({
            eventId,
            categoryId: data.categoryId,
            holderName: data.holderName,
            holderEmail: data.holderEmail,
            qrCode,
            qrSecret: secret,
            ...(data.ticketId && { ticketId: data.ticketId }),
        });
        // Patch l'id réel dans le QR (on recalcule avec l'id Prisma généré)
        const finalQr = generateQrPayload(badge.id, eventId, data.categoryId, secret);
        return accessRepository.updateBadge(badge.id, { qrCode: finalQr });
    },
    async getBadges(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findBadgesByEvent(eventId);
    },
    async sendBadgeByEmail(eventId, badgeId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const badge = await accessRepository.findBadgeById(badgeId);
        if (!badge || badge.eventId !== eventId)
            throw new AppError("Badge introuvable", StatusCodes.NOT_FOUND);
        if (badge.status === "revoked")
            throw new AppError("Badge révoqué", StatusCodes.BAD_REQUEST);
        await emailService.send(badge.holderEmail, `Votre badge d'accès — ${badge.event.title}`, `<div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2>Votre badge Feeti Access</h2>
        <p>Bonjour <strong>${badge.holderName}</strong>,</p>
        <p>Voici votre badge d'accès pour l'événement <strong>${badge.event.title}</strong>.</p>
        <p><strong>Catégorie :</strong> ${badge.category.name}</p>
        <p>Présentez le QR code ci-dessous à l'entrée de chaque zone :</p>
        <div style="background:#f5f5f5;padding:16px;border-radius:8px;word-break:break-all;font-size:12px">
          ${badge.qrCode}
        </div>
        <p style="color:#888;font-size:12px">Ce badge est personnel et non transférable.</p>
      </div>`);
        return accessRepository.updateBadge(badgeId, { sentAt: new Date() });
    },
    async revokeBadge(eventId, badgeId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const badge = await accessRepository.findBadgeById(badgeId);
        if (!badge || badge.eventId !== eventId)
            throw new AppError("Badge introuvable", StatusCodes.NOT_FOUND);
        if (badge.status === "revoked")
            throw new AppError("Badge déjà révoqué", StatusCodes.BAD_REQUEST);
        return accessRepository.updateBadge(badgeId, { status: "revoked", revokedAt: new Date(), revokedById: userId });
    },
    async regenerateBadge(eventId, badgeId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const badge = await accessRepository.findBadgeById(badgeId);
        if (!badge || badge.eventId !== eventId)
            throw new AppError("Badge introuvable", StatusCodes.NOT_FOUND);
        const newSecret = randomUUID();
        const newQr = generateQrPayload(badge.id, eventId, badge.categoryId, newSecret);
        return accessRepository.updateBadge(badgeId, { qrCode: newQr, qrSecret: newSecret, status: "active" });
    },
    // ── SCAN ────────────────────────────────────────────────────────────────
    async scanBadge(agentId, data) {
        // 1. Parser le QR pour extraire badgeId et détecter le format
        let parsedBadgeId = null;
        let isRotating = false;
        try {
            const raw = JSON.parse(data.qrCode);
            parsedBadgeId = typeof raw.badgeId === "string" ? raw.badgeId : null;
            isRotating = typeof raw.w === "number";
        }
        catch {
            return { result: "denied", refusalReason: "QR code invalide" };
        }
        if (!parsedBadgeId) {
            return { result: "denied", refusalReason: "QR code invalide" };
        }
        // 2. Récupérer le badge par ID
        const badgeRaw = await accessRepository.findBadgeById(parsedBadgeId);
        if (!badgeRaw) {
            return { result: "denied", refusalReason: "Badge introuvable" };
        }
        // 3. Vérifier la signature selon le format
        if (isRotating) {
            if (!verifyRotatingQrPayload(data.qrCode, badgeRaw.qrSecret, badgeRaw.id)) {
                await accessRepository.createAccessLog({
                    badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
                    scannedById: agentId, result: "denied", refusalReason: "QR rotatif invalide ou expiré",
                });
                return { result: "denied", refusalReason: "QR rotatif invalide ou expiré" };
            }
        }
        else {
            // Format statique : le qrCode doit correspondre au qrCode stocké
            if (badgeRaw.qrCode !== data.qrCode) {
                await accessRepository.createAccessLog({
                    badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
                    scannedById: agentId, result: "denied", refusalReason: "QR code invalide",
                });
                return { result: "denied", refusalReason: "QR code invalide" };
            }
            if (!verifyQrPayload(data.qrCode, badgeRaw.qrSecret)) {
                await accessRepository.createAccessLog({
                    badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
                    scannedById: agentId, result: "denied", refusalReason: "Signature QR invalide",
                });
                return { result: "denied", refusalReason: "Signature QR invalide" };
            }
        }
        // 4. Vérifier le statut du badge
        if (badgeRaw.status === "revoked") {
            await accessRepository.createAccessLog({
                badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
                scannedById: agentId, result: "denied", refusalReason: "Badge révoqué",
            });
            return { result: "denied", refusalReason: "Badge révoqué", holder: { name: badgeRaw.holderName } };
        }
        if (badgeRaw.status === "expired") {
            await accessRepository.createAccessLog({
                badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
                scannedById: agentId, result: "denied", refusalReason: "Badge expiré",
            });
            return { result: "denied", refusalReason: "Badge expiré", holder: { name: badgeRaw.holderName } };
        }
        // 5. Vérifier le droit d'accès pour cette zone
        const right = await accessRepository.getAccessRight(badgeRaw.categoryId, data.zoneId);
        const level = right?.accessLevel ?? "NON";
        let result;
        let refusalReason;
        if (level === "OUI") {
            result = "granted";
            await accessRepository.incrementZoneCount(data.zoneId, 1);
        }
        else if (level === "COND") {
            result = "conditional";
        }
        else {
            result = "denied";
            refusalReason = `Accès non autorisé pour la catégorie "${badgeRaw.category.name}" dans cette zone`;
        }
        await accessRepository.createAccessLog({
            badgeId: badgeRaw.id, zoneId: data.zoneId, eventId: badgeRaw.eventId,
            scannedById: agentId, result,
            ...(refusalReason && { refusalReason }),
        });
        // 6. Émettre la mise à jour de zone via WebSocket
        if (result === "granted") {
            try {
                const zone = await accessRepository.findZoneById(data.zoneId);
                if (zone) {
                    const logCounts = await accessRepository.countLogsByZone(badgeRaw.eventId);
                    const countMap = Object.fromEntries(logCounts.map((c) => [c.zoneId, c._count._all]));
                    getIO().to(`event:${badgeRaw.eventId}`).emit("zone:update", {
                        zoneId: zone.id, code: zone.code, name: zone.name, color: zone.color,
                        currentCount: zone.currentCount,
                        totalEntries: countMap[zone.id] ?? 0,
                        maxCapacity: zone.maxCapacity,
                        isOverCapacity: zone.maxCapacity != null && zone.currentCount > zone.maxCapacity,
                    });
                }
            }
            catch { /* socket non initialisé ou erreur non bloquante */ }
        }
        // 7. Droits de la catégorie sur toutes les zones (affichage agent)
        const allRights = await accessRepository.getAccessRightsByCategory(badgeRaw.categoryId);
        return {
            result,
            refusalReason,
            holder: {
                name: badgeRaw.holderName,
                email: badgeRaw.holderEmail,
                category: badgeRaw.category.name,
                authorizedZones: allRights
                    .filter((r) => r.accessLevel === "OUI" || r.accessLevel === "COND")
                    .map((r) => ({ zoneId: r.zoneId, zoneName: r.zone.name, level: r.accessLevel })),
            },
        };
    },
    async syncOfflineScans(agentId, scans) {
        const logs = [];
        for (const scan of scans) {
            // Extraire badgeId du payload JSON (supporte format statique et rotatif)
            let badgeId = null;
            try {
                const raw = JSON.parse(scan.qrCode);
                badgeId = typeof raw.badgeId === "string" ? raw.badgeId : null;
            }
            catch {
                continue;
            }
            if (!badgeId)
                continue;
            const badge = await accessRepository.findBadgeById(badgeId);
            if (!badge)
                continue;
            // Pour les scans offline on bypasse la vérification de fenêtre temporelle
            const right = await accessRepository.getAccessRight(badge.categoryId, scan.zoneId);
            const level = right?.accessLevel ?? "NON";
            const result = level === "OUI" ? "granted" : level === "COND" ? "conditional" : "denied";
            const refusalReason = result === "denied"
                ? `Accès non autorisé pour la catégorie "${badge.category.name}"`
                : undefined;
            logs.push({
                badgeId: badge.id, zoneId: scan.zoneId, eventId: badge.eventId,
                scannedById: agentId, result, offlineSync: true,
                scannedAt: new Date(scan.scannedAt),
                ...(refusalReason && { refusalReason }),
            });
        }
        await accessRepository.bulkCreateAccessLogs(logs);
        return { synced: logs.length };
    },
    // ── TRACKING & REPORTING ─────────────────────────────────────────────────
    async getTracking(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const zones = await accessRepository.findZonesByEvent(eventId);
        const counts = await accessRepository.countLogsByZone(eventId);
        const countMap = Object.fromEntries(counts.map((c) => [c.zoneId, c._count._all]));
        return zones
            .filter((z) => z.isActive)
            .map((z) => ({
            zoneId: z.id,
            code: z.code,
            name: z.name,
            color: z.color,
            currentCount: z.currentCount,
            totalEntries: countMap[z.id] ?? 0,
            maxCapacity: z.maxCapacity,
            isOverCapacity: z.maxCapacity != null && z.currentCount > z.maxCapacity,
        }));
    },
    async getAccessLogs(eventId, userId, role, filters) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findLogsByEvent(eventId, filters);
    },
    async getRefusedAttempts(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findLogsByEvent(eventId, { result: "denied" });
    },
    async exportCsv(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const logs = await accessRepository.findLogsByEvent(eventId);
        const header = "badgeId,holderName,holderEmail,category,zone,result,refusalReason,offlineSync,scannedAt";
        const rows = logs.map((l) => [
            l.badgeId,
            l.badge.holderName,
            l.badge.holderEmail,
            l.badge.category?.name ?? "",
            `${l.zone.code} - ${l.zone.name}`,
            l.result,
            l.refusalReason ?? "",
            l.offlineSync ? "oui" : "non",
            l.scannedAt.toISOString(),
        ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","));
        return [header, ...rows].join("\n");
    },
    // ── SIGNALEMENT SUSPECT ──────────────────────────────────────────────────
    async reportSuspectBadge(badgeId, reportedById, reason) {
        const badge = await accessRepository.findBadgeById(badgeId);
        if (!badge)
            throw new AppError("Badge introuvable", StatusCodes.NOT_FOUND);
        return accessRepository.createSuspectReport({ badgeId, reportedById, reason });
    },
    async getSuspectReports(eventId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        return accessRepository.findSuspectReportsByEvent(eventId);
    },
    // ── QR ROTATIF ──────────────────────────────────────────────────────────
    async getCurrentQr(eventId, badgeId, userId, role) {
        await assertOrganizerOrAdmin(eventId, userId, role);
        const badge = await accessRepository.findBadgeById(badgeId);
        if (!badge || badge.eventId !== eventId)
            throw new AppError("Badge introuvable", StatusCodes.NOT_FOUND);
        if (badge.status !== "active")
            throw new AppError("Badge inactif", StatusCodes.BAD_REQUEST);
        const w = currentWindow();
        return {
            qr: generateRotatingQrPayload(badge.id, badge.qrSecret),
            windowSeconds: QR_WINDOW_SECONDS,
            nextRefreshAt: (w + 1) * QR_WINDOW_SECONDS * 1000,
        };
    },
};
//# sourceMappingURL=access.service.js.map