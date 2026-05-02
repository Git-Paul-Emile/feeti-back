import { prisma } from "../config/database.js";
export const payoutRepository = {
    async create(data) {
        return prisma.payout.create({
            data: {
                organizerId: data.organizerId,
                walletId: data.walletId,
                montant: data.montant,
                devise: data.devise,
                methodePaiement: data.methodePaiement,
                referenceBancaire: data.referenceBancaire,
                notes: data.notes,
                transactions: {
                    create: data.transactionIds.map((tid) => ({
                        transactionId: tid,
                    })),
                },
            },
            include: {
                organizer: { select: { id: true, name: true, email: true } },
                transactions: { include: { transaction: { select: { id: true, montantTTC: true } } } },
            },
        });
    },
    async findById(id) {
        return prisma.payout.findUnique({
            where: { id },
            include: {
                organizer: { select: { id: true, name: true, email: true } },
                approvedBy: { select: { id: true, name: true } },
                processedBy: { select: { id: true, name: true } },
                transactions: {
                    include: {
                        transaction: {
                            select: {
                                id: true,
                                montantTTC: true,
                                netOrganisateur: true,
                                devise: true,
                                completedAt: true,
                            },
                        },
                    },
                },
                statusHistory: { orderBy: { createdAt: "asc" } },
            },
        });
    },
    async findMany(filters) {
        const page = filters.page ?? 1;
        const limit = Math.min(filters.limit ?? 20, 100);
        const skip = (page - 1) * limit;
        const where = {
            ...(filters.organizerId && { organizerId: filters.organizerId }),
            ...(filters.statut && { statut: filters.statut }),
            ...((filters.dateFrom || filters.dateTo) && {
                initiatedAt: {
                    ...(filters.dateFrom && { gte: filters.dateFrom }),
                    ...(filters.dateTo && { lte: filters.dateTo }),
                },
            }),
        };
        const [data, total] = await Promise.all([
            prisma.payout.findMany({
                where,
                skip,
                take: limit,
                orderBy: { initiatedAt: "desc" },
                include: {
                    organizer: { select: { id: true, name: true, email: true } },
                    approvedBy: { select: { id: true, name: true } },
                    _count: { select: { transactions: true } },
                },
            }),
            prisma.payout.count({ where }),
        ]);
        return {
            data,
            meta: { total, page, limit, pages: Math.ceil(total / limit) },
        };
    },
    async updateStatus(id, newStatus, extra) {
        return prisma.payout.update({
            where: { id },
            data: {
                statut: newStatus,
                ...(extra?.approvedById && { approvedById: extra.approvedById }),
                ...(extra?.approvedAt && { approvedAt: extra.approvedAt }),
                ...(extra?.processedById && { processedById: extra.processedById }),
                ...(extra?.processedAt && { processedAt: extra.processedAt }),
                ...(extra?.completedAt && { completedAt: extra.completedAt }),
                ...(extra?.referenceBancaire && { referenceBancaire: extra.referenceBancaire }),
                ...(extra?.attachments && { attachments: extra.attachments }),
            },
        });
    },
    async addStatusHistory(data) {
        return prisma.payoutStatusHistory.create({ data });
    },
    async aggregateForOrganizer(organizerId) {
        return prisma.payout.aggregate({
            where: { organizerId, statut: "completed" },
            _sum: { montant: true },
            _count: { id: true },
        });
    },
};
//# sourceMappingURL=payout.repository.js.map