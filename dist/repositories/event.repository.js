import { prisma } from "../config/database.js";
export const eventRepository = {
    async create(data) {
        return prisma.event.create({ data });
    },
    async findByOrganizer(organizerId) {
        return prisma.event.findMany({
            where: { organizerId },
            orderBy: { createdAt: "desc" },
        });
    },
    async findAll(countryCode, featuredOnly, interests) {
        const now = new Date();
        const events = await prisma.event.findMany({
            where: {
                status: "published",
                isLive: false,
                ...(countryCode ? { countryCode } : {}),
                ...(featuredOnly ? { isFeatured: true } : {}),
            },
            include: { organizer: { select: { name: true } } },
            orderBy: { createdAt: "desc" },
        });
        // Priorité promotion : OR=4, ARGENT=3, BRONZE=2, LITE=1, aucun=0
        const PROMO_RANK = { OR: 4, ARGENT: 3, BRONZE: 2, LITE: 1 };
        const withRank = events.map(e => {
            const isActive = e.promotionStatus === "active" &&
                e.promotionType &&
                (!e.promotionStartDate || e.promotionStartDate <= now) &&
                (!e.promotionEndDate || e.promotionEndDate >= now);
            return { ...e, _promoRank: isActive ? (PROMO_RANK[e.promotionType] ?? 0) : 0 };
        });
        // Trier : d'abord par rang promotion desc
        withRank.sort((a, b) => b._promoRank - a._promoRank);
        // Si l'utilisateur a des intérêts, mettre en avant les événements correspondants
        // (uniquement parmi les non-promus)
        if (interests && interests.length > 0) {
            const promoted = withRank.filter(e => e._promoRank > 0);
            const rest = withRank.filter(e => e._promoRank === 0);
            const matching = rest.filter(e => interests.includes(e.category));
            const others = rest.filter(e => !interests.includes(e.category));
            // Supprimer le champ de tri interne avant le retour
            return [...promoted, ...matching, ...others].map(({ _promoRank, ...e }) => e);
        }
        return withRank.map(({ _promoRank, ...e }) => e);
    },
    async findAllAdmin() {
        return prisma.event.findMany({
            include: { organizer: { select: { name: true } } },
            orderBy: { createdAt: "desc" },
        });
    },
    async findById(id) {
        return prisma.event.findUnique({
            where: { id },
            include: { organizer: { select: { name: true } } },
        });
    },
    async update(id, data) {
        return prisma.event.update({ where: { id }, data });
    },
    async delete(id) {
        return prisma.event.delete({ where: { id } });
    },
    // ── Favoris ──────────────────────────────────────────────────────────────
    async isFavorited(userId, eventId) {
        const fav = await prisma.userFavorite.findUnique({
            where: { userId_eventId: { userId, eventId } },
        });
        return fav !== null;
    },
    async toggleFavorite(userId, eventId) {
        const existing = await prisma.userFavorite.findUnique({
            where: { userId_eventId: { userId, eventId } },
        });
        if (existing) {
            await prisma.userFavorite.delete({ where: { id: existing.id } });
            return false;
        }
        else {
            await prisma.userFavorite.create({ data: { userId, eventId } });
            return true;
        }
    },
    async findFavoritesByUser(userId) {
        const favs = await prisma.userFavorite.findMany({
            where: { userId },
            include: {
                event: {
                    include: { organizer: { select: { name: true } } },
                },
            },
            orderBy: { createdAt: "desc" },
        });
        return favs.map(f => f.event);
    },
};
//# sourceMappingURL=event.repository.js.map