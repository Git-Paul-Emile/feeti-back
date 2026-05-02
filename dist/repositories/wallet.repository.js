import { prisma } from "../config/database.js";
export const walletRepository = {
    async findByOrganizerId(organizerId) {
        return prisma.wallet.findUnique({
            where: { organizerId },
        });
    },
    async findByIdWithLock(organizerId) {
        // Prisma ne supporte pas SELECT FOR UPDATE nativement
        // On utilise une transaction raw pour le verrouillage pessimiste
        return prisma.$queryRaw `
      SELECT id, "organizerId", "soldeDisponible", "soldeEnAttente",
             "soldeTotal", "soldeRetirable", "totalRetire", "totalEnLitige",
             devise, version
      FROM "Wallet"
      WHERE "organizerId" = ${organizerId}
      FOR UPDATE
    `;
    },
    async createForOrganizer(organizerId, devise = "XOF") {
        return prisma.wallet.create({
            data: {
                organizerId,
                devise,
                checksum: "",
            },
        });
    },
    async upsertForOrganizer(organizerId, devise = "XOF") {
        return prisma.wallet.upsert({
            where: { organizerId },
            create: { organizerId, devise, checksum: "" },
            update: {},
        });
    },
    // Mise à jour avec verrouillage optimiste (version check)
    async updateWithOptimisticLock(walletId, expectedVersion, data) {
        const result = await prisma.wallet.updateMany({
            where: { id: walletId, version: expectedVersion },
            data: {
                ...data,
                version: expectedVersion + 1,
            },
        });
        return result.count > 0;
    },
    async update(walletId, data) {
        return prisma.wallet.update({
            where: { id: walletId },
            data: {
                ...data,
                version: { increment: 1 },
            },
        });
    },
    async addLedgerEntry(entry) {
        return prisma.walletLedger.create({
            data: {
                walletId: entry.walletId,
                entryType: entry.entryType,
                operationType: entry.operationType,
                amount: entry.amount,
                balanceBefore: entry.balanceBefore,
                balanceAfter: entry.balanceAfter,
                description: entry.description,
                referenceId: entry.referenceId,
                referenceType: entry.referenceType,
                actorId: entry.actorId,
                metadata: entry.metadata,
                checksum: entry.checksum,
            },
        });
    },
    async getLedgerEntries(walletId, options) {
        const page = options?.page ?? 1;
        const limit = Math.min(options?.limit ?? 50, 200);
        const skip = (page - 1) * limit;
        const where = {
            walletId,
            ...(options?.dateFrom || options?.dateTo
                ? {
                    createdAt: {
                        ...(options.dateFrom && { gte: options.dateFrom }),
                        ...(options.dateTo && { lte: options.dateTo }),
                    },
                }
                : {}),
        };
        const [data, total] = await Promise.all([
            prisma.walletLedger.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.walletLedger.count({ where }),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) } };
    },
    // Rejouer le ledger pour vérifier la cohérence du solde
    async replayLedger(walletId) {
        const entries = await prisma.walletLedger.findMany({
            where: { walletId },
            orderBy: { createdAt: "asc" },
        });
        let balance = 0;
        for (const entry of entries) {
            if (entry.entryType === "credit") {
                balance += entry.amount;
            }
            else {
                balance -= entry.amount;
            }
        }
        return balance;
    },
    async getWalletSummaryByOrganizer(organizerId) {
        return prisma.wallet.findUnique({
            where: { organizerId },
            select: {
                id: true,
                soldeTotal: true,
                soldeDisponible: true,
                soldeEnAttente: true,
                soldeRetirable: true,
                totalRetire: true,
                totalEnLitige: true,
                devise: true,
                updatedAt: true,
            },
        });
    },
};
//# sourceMappingURL=wallet.repository.js.map