import { prisma } from "../config/database.js";
// ─── Zones ────────────────────────────────────────────────────────────
export const accessRepository = {
    // ── Zones ────────────────────────────────────────────────────────────
    async createZone(data) {
        return prisma.eventZone.create({ data });
    },
    async findZonesByEvent(eventId) {
        return prisma.eventZone.findMany({
            where: { eventId },
            include: { accessRights: { include: { category: true } } },
            orderBy: { code: "asc" },
        });
    },
    async findZoneById(id) {
        return prisma.eventZone.findUnique({
            where: { id },
            include: { accessRights: true },
        });
    },
    async findZoneByCode(eventId, code) {
        return prisma.eventZone.findUnique({ where: { eventId_code: { eventId, code } } });
    },
    async updateZone(id, data) {
        return prisma.eventZone.update({ where: { id }, data });
    },
    async deleteZone(id) {
        return prisma.eventZone.delete({ where: { id } });
    },
    async incrementZoneCount(zoneId, delta) {
        return prisma.eventZone.update({
            where: { id: zoneId },
            data: { currentCount: { increment: delta } },
        });
    },
    // ── Catégories ───────────────────────────────────────────────────────
    async createCategory(data) {
        return prisma.participantCategory.create({ data });
    },
    async findCategoriesByEvent(eventId) {
        return prisma.participantCategory.findMany({
            where: { eventId },
            include: { accessRights: { include: { zone: true } } },
            orderBy: { name: "asc" },
        });
    },
    async findCategoryById(id) {
        return prisma.participantCategory.findUnique({
            where: { id },
            include: { accessRights: { include: { zone: true } } },
        });
    },
    async updateCategory(id, data) {
        return prisma.participantCategory.update({ where: { id }, data });
    },
    async deleteCategory(id) {
        return prisma.participantCategory.delete({ where: { id } });
    },
    // ── Droits d'accès ───────────────────────────────────────────────────
    async upsertAccessRight(categoryId, zoneId, accessLevel) {
        return prisma.zoneAccessRight.upsert({
            where: { categoryId_zoneId: { categoryId, zoneId } },
            create: { categoryId, zoneId, accessLevel },
            update: { accessLevel },
        });
    },
    async bulkUpsertAccessRights(rights) {
        return Promise.all(rights.map((r) => prisma.zoneAccessRight.upsert({
            where: { categoryId_zoneId: { categoryId: r.categoryId, zoneId: r.zoneId } },
            create: r,
            update: { accessLevel: r.accessLevel },
        })));
    },
    async getAccessRightsByCategory(categoryId) {
        return prisma.zoneAccessRight.findMany({
            where: { categoryId },
            include: { zone: true },
        });
    },
    async getAccessRight(categoryId, zoneId) {
        return prisma.zoneAccessRight.findUnique({
            where: { categoryId_zoneId: { categoryId, zoneId } },
        });
    },
    // ── Badges ───────────────────────────────────────────────────────────
    async createBadge(data) {
        return prisma.accessBadge.create({
            data,
            include: { category: true },
        });
    },
    async findBadgeById(id) {
        return prisma.accessBadge.findUnique({
            where: { id },
            include: { category: { include: { accessRights: { include: { zone: true } } } }, event: true },
        });
    },
    async findBadgeByQrCode(qrCode) {
        return prisma.accessBadge.findUnique({
            where: { qrCode },
            include: { category: { include: { accessRights: { include: { zone: true } } } }, event: true },
        });
    },
    async findBadgesByEvent(eventId) {
        return prisma.accessBadge.findMany({
            where: { eventId },
            include: { category: true },
            orderBy: { createdAt: "desc" },
        });
    },
    async updateBadge(id, data) {
        return prisma.accessBadge.update({ where: { id }, data });
    },
    // ── Logs d'accès ─────────────────────────────────────────────────────
    async createAccessLog(data) {
        return prisma.accessLog.create({ data });
    },
    async bulkCreateAccessLogs(logs) {
        return prisma.accessLog.createMany({ data: logs });
    },
    async findLogsByEvent(eventId, filters) {
        return prisma.accessLog.findMany({
            where: { eventId, ...(filters?.zoneId && { zoneId: filters.zoneId }), ...(filters?.result && { result: filters.result }) },
            include: {
                badge: { select: { holderName: true, holderEmail: true, category: { select: { name: true } } } },
                zone: { select: { name: true, code: true } },
            },
            orderBy: { scannedAt: "desc" },
        });
    },
    async countLogsByZone(eventId) {
        return prisma.accessLog.groupBy({
            by: ["zoneId"],
            where: { eventId, result: "granted" },
            _count: { _all: true },
        });
    },
    // ── Signalements suspects ─────────────────────────────────────────────
    async createSuspectReport(data) {
        return prisma.suspectBadgeReport.create({ data });
    },
    async findSuspectReportsByEvent(eventId) {
        return prisma.suspectBadgeReport.findMany({
            where: { badge: { eventId } },
            include: { badge: { select: { holderName: true, holderEmail: true, category: true } } },
            orderBy: { createdAt: "desc" },
        });
    },
};
//# sourceMappingURL=access.repository.js.map