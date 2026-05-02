import { prisma } from "../config/database.js";
export const ticketRepository = {
    async create(data) {
        return prisma.ticket.create({ data });
    },
    async findByUser(userId) {
        return prisma.ticket.findMany({
            where: { userId },
            include: { event: true },
            orderBy: { createdAt: "desc" },
        });
    },
    async findById(id) {
        return prisma.ticket.findUnique({
            where: { id },
            include: { event: true, user: true },
        });
    },
    async findByQrData(qrData) {
        return prisma.ticket.findFirst({
            where: { qrData },
            include: { event: true, user: true },
        });
    },
    async findByEvent(eventId) {
        return prisma.ticket.findMany({
            where: { eventId },
            include: { user: true },
            orderBy: { createdAt: "desc" },
        });
    },
    async countByEvent(eventId) {
        return prisma.ticket.count({ where: { eventId } });
    },
    async updateStatus(id, status, usedAt) {
        return prisma.ticket.update({
            where: { id },
            data: { status, ...(usedAt && { usedAt }) },
        });
    },
};
//# sourceMappingURL=ticket.repository.js.map