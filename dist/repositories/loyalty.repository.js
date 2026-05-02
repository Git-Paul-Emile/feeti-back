import { prisma } from "../config/database.js";
// ─── Profil ─────────────────────────────────────────────────────────────────
export const loyaltyRepository = {
    // Obtenir ou créer le profil d'un utilisateur
    async getOrCreateProfile(userId) {
        let profile = await prisma.loyaltyProfile.findUnique({
            where: { userId },
            include: {
                user: { select: { id: true, name: true, email: true } },
                missionProgress: { include: { mission: true } },
            },
        });
        if (!profile) {
            const code = `FNF-${userId.slice(-8).toUpperCase()}`;
            profile = await prisma.loyaltyProfile.create({
                data: { userId, referralCode: code },
                include: {
                    user: { select: { id: true, name: true, email: true } },
                    missionProgress: { include: { mission: true } },
                },
            });
        }
        return profile;
    },
    async getProfileByUserId(userId) {
        return prisma.loyaltyProfile.findUnique({
            where: { userId },
            include: {
                user: { select: { id: true, name: true, email: true } },
                missionProgress: { include: { mission: true } },
            },
        });
    },
    async getProfileByReferralCode(code) {
        return prisma.loyaltyProfile.findUnique({ where: { referralCode: code } });
    },
    async updatePoints(profileId, delta, action, description, referenceId, referenceType) {
        return prisma.$transaction(async (tx) => {
            const profile = await tx.loyaltyProfile.findUniqueOrThrow({ where: { id: profileId } });
            const balanceBefore = profile.points;
            const balanceAfter = balanceBefore + delta;
            const isEarning = delta > 0;
            const updated = await tx.loyaltyProfile.update({
                where: { id: profileId },
                data: {
                    points: balanceAfter,
                    pointsEarned: isEarning ? { increment: delta } : undefined,
                    pointsSpent: !isEarning ? { increment: Math.abs(delta) } : undefined,
                    level: computeLevel(balanceAfter),
                },
            });
            await tx.pointsLedger.create({
                data: {
                    profileId,
                    action,
                    points: delta,
                    balanceBefore,
                    balanceAfter,
                    description,
                    referenceId,
                    referenceType,
                },
            });
            return updated;
        });
    },
    // ─── Ledger ────────────────────────────────────────────────────────────────
    async getLedger(profileId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            prisma.pointsLedger.findMany({
                where: { profileId },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.pointsLedger.count({ where: { profileId } }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    async getAllLedger(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 50;
        const skip = (page - 1) * limit;
        const where = filters.action ? { action: filters.action } : {};
        const [items, total] = await Promise.all([
            prisma.pointsLedger.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: { profile: { select: { userId: true, user: { select: { name: true, email: true } } } } },
            }),
            prisma.pointsLedger.count({ where }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    // ─── Récompenses ───────────────────────────────────────────────────────────
    async getRewards(activeOnly = true) {
        return prisma.loyaltyReward.findMany({
            where: activeOnly ? { isActive: true } : undefined,
            orderBy: { points: "asc" },
        });
    },
    async getRewardById(id) {
        return prisma.loyaltyReward.findUnique({ where: { id } });
    },
    async createReward(data) {
        return prisma.loyaltyReward.create({ data });
    },
    async updateReward(id, data) {
        return prisma.loyaltyReward.update({ where: { id }, data });
    },
    async deleteReward(id) {
        return prisma.loyaltyReward.delete({ where: { id } });
    },
    async createRedemption(profileId, rewardId, points) {
        return prisma.loyaltyRedemption.create({
            data: { profileId, rewardId, points, status: "confirmed" },
            include: { reward: true },
        });
    },
    async decrementRewardStock(rewardId) {
        return prisma.loyaltyReward.update({
            where: { id: rewardId },
            data: { stock: { decrement: 1 } },
        });
    },
    // ─── Missions ──────────────────────────────────────────────────────────────
    async getMissions(activeOnly = true) {
        return prisma.loyaltyMission.findMany({
            where: activeOnly ? { isActive: true } : undefined,
            orderBy: { points: "asc" },
        });
    },
    async getMissionProgressForUser(profileId) {
        return prisma.missionProgress.findMany({
            where: { profileId },
            include: { mission: true },
        });
    },
    async upsertMissionProgress(profileId, missionId, increment) {
        return prisma.$transaction(async (tx) => {
            const existing = await tx.missionProgress.findUnique({
                where: { profileId_missionId: { profileId, missionId } },
                include: { mission: true },
            });
            if (existing && existing.completed)
                return existing;
            const mission = await tx.loyaltyMission.findUniqueOrThrow({ where: { id: missionId } });
            const currentProgress = existing?.progress ?? 0;
            const newProgress = currentProgress + increment;
            const completed = newProgress >= mission.target;
            return tx.missionProgress.upsert({
                where: { profileId_missionId: { profileId, missionId } },
                update: { progress: newProgress, completed },
                create: { profileId, missionId, progress: newProgress, completed },
                include: { mission: true },
            });
        });
    },
    async markMissionRewardPaid(progressId) {
        return prisma.missionProgress.update({ where: { id: progressId }, data: { rewardPaid: true } });
    },
    async createMission(data) {
        return prisma.loyaltyMission.create({ data });
    },
    async updateMission(id, data) {
        return prisma.loyaltyMission.update({ where: { id }, data });
    },
    async deleteMission(id) {
        return prisma.loyaltyMission.delete({ where: { id } });
    },
    // ─── Partenaires ───────────────────────────────────────────────────────────
    async getPartners(activeOnly = true) {
        return prisma.loyaltyPartner.findMany({
            where: activeOnly ? { isActive: true } : undefined,
            orderBy: { name: "asc" },
        });
    },
    async getPartnerById(id) {
        return prisma.loyaltyPartner.findUnique({ where: { id } });
    },
    async createPartner(data) {
        return prisma.loyaltyPartner.create({ data });
    },
    async updatePartner(id, data) {
        return prisma.loyaltyPartner.update({ where: { id }, data });
    },
    async deletePartner(id) {
        return prisma.loyaltyPartner.delete({ where: { id } });
    },
    // ─── Dépenses partenaires ──────────────────────────────────────────────────
    async recordPartnerSpending(data) {
        return prisma.partnerSpending.create({ data });
    },
    async getPartnerSpendingStats(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 50;
        const skip = (page - 1) * limit;
        const where = filters.partnerId ? { partnerId: filters.partnerId } : {};
        const [items, total, agg] = await Promise.all([
            prisma.partnerSpending.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: { partner: { select: { name: true, category: true } } },
            }),
            prisma.partnerSpending.count({ where }),
            prisma.partnerSpending.aggregate({ where, _sum: { amountFCFA: true, pointsEarned: true } }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit), totals: agg._sum };
    },
    // ─── Communauté ───────────────────────────────────────────────────────────
    async getCommunityPosts(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 20;
        const skip = (page - 1) * limit;
        const where = {};
        if (filters.status)
            where.status = filters.status;
        const [items, total] = await Promise.all([
            prisma.communityPost.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: {
                    engagements: { where: { type: "comment" }, take: 5, orderBy: { createdAt: "desc" } },
                },
            }),
            prisma.communityPost.count({ where }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    async createCommunityPost(data) {
        return prisma.communityPost.create({ data });
    },
    async updateCommunityPost(id, data) {
        return prisma.communityPost.update({ where: { id }, data });
    },
    async deleteCommunityPost(id) {
        return prisma.communityPost.delete({ where: { id } });
    },
    async getCommunityPostById(id) {
        return prisma.communityPost.findUnique({
            where: { id },
            include: { engagements: { orderBy: { createdAt: "desc" } } },
        });
    },
    async engagePost(userId, postId, type, content = "") {
        return prisma.$transaction(async (tx) => {
            const engagement = await tx.communityEngagement.upsert({
                where: { userId_postId_type: { userId, postId, type } },
                update: { content },
                create: { userId, postId, type, content },
            });
            if (type === "like") {
                await tx.communityPost.update({
                    where: { id: postId },
                    data: { likesCount: { increment: 1 } },
                });
            }
            else {
                await tx.communityPost.update({
                    where: { id: postId },
                    data: { commentsCount: { increment: 1 } },
                });
            }
            return engagement;
        });
    },
    async hasEngaged(userId, postId, type) {
        const e = await prisma.communityEngagement.findUnique({
            where: { userId_postId_type: { userId, postId, type } },
        });
        return !!e;
    },
    // ─── Badges ambassadeur ────────────────────────────────────────────────────
    async getBadgesForUser(userId) {
        return prisma.ambassadorBadge.findMany({ where: { userId }, orderBy: { earnedAt: "desc" } });
    },
    async awardBadge(data) {
        return prisma.ambassadorBadge.upsert({
            where: { userId_badgeType: { userId: data.userId, badgeType: data.badgeType } },
            update: {},
            create: data,
        });
    },
    async getAllBadges(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 50;
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            prisma.ambassadorBadge.findMany({ orderBy: { earnedAt: "desc" }, skip, take: limit }),
            prisma.ambassadorBadge.count(),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    // ─── Bonus / campagnes ─────────────────────────────────────────────────────
    async getActiveBonuses(actionType) {
        const now = new Date();
        const where = { isActive: true, startDate: { lte: now }, endDate: { gte: now } };
        if (actionType)
            where.actionType = { in: [actionType, null] };
        return prisma.loyaltyBonus.findMany({ where, orderBy: { value: "desc" } });
    },
    async getAllBonuses() {
        return prisma.loyaltyBonus.findMany({ orderBy: { startDate: "desc" } });
    },
    async createBonus(data) {
        return prisma.loyaltyBonus.create({ data });
    },
    async updateBonus(id, data) {
        return prisma.loyaltyBonus.update({ where: { id }, data });
    },
    async deleteBonus(id) {
        return prisma.loyaltyBonus.delete({ where: { id } });
    },
    // ─── Accès VIP ─────────────────────────────────────────────────────────────
    async logVipAccess(data) {
        return prisma.vipAccessLog.create({ data });
    },
    async getVipAccessLogs(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 50;
        const skip = (page - 1) * limit;
        const where = {};
        if (filters.eventId)
            where.eventId = filters.eventId;
        if (filters.userId)
            where.userId = filters.userId;
        const [items, total] = await Promise.all([
            prisma.vipAccessLog.findMany({ where, orderBy: { grantedAt: "desc" }, skip, take: limit }),
            prisma.vipAccessLog.count({ where }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    // ─── Classement ────────────────────────────────────────────────────────────
    async getLeaderboard(limit = 20) {
        return prisma.loyaltyProfile.findMany({
            orderBy: { points: "desc" },
            take: limit,
            include: { user: { select: { id: true, name: true } } },
        });
    },
    // ─── Stats admin ───────────────────────────────────────────────────────────
    async getAdminStats() {
        const [totalUsers, pointsAgg, activeUsers, levelCounts, communityStats, partnerStats,] = await Promise.all([
            prisma.loyaltyProfile.count(),
            prisma.loyaltyProfile.aggregate({
                _sum: { pointsEarned: true, pointsSpent: true },
            }),
            prisma.loyaltyProfile.count({ where: { points: { gt: 0 } } }),
            prisma.loyaltyProfile.groupBy({
                by: ["level"],
                _count: { id: true },
            }),
            prisma.communityPost.groupBy({ by: ["status"], _count: { id: true } }),
            prisma.partnerSpending.aggregate({ _sum: { amountFCFA: true, pointsEarned: true }, _count: { id: true } }),
        ]);
        return {
            totalUsers,
            pointsDistributed: pointsAgg._sum.pointsEarned ?? 0,
            pointsUsed: pointsAgg._sum.pointsSpent ?? 0,
            activeUsers,
            levelCounts,
            communityStats,
            partnerSpendingTotal: partnerStats._sum.amountFCFA ?? 0,
            partnerPointsTotal: partnerStats._sum.pointsEarned ?? 0,
            partnerTransactions: partnerStats._count.id,
        };
    },
    async getFraudAlerts() {
        const today = new Date().toISOString().slice(0, 10);
        const [shareAbuse, recentManual] = await Promise.all([
            // Utilisateurs ayant atteint la limite de partages aujourd'hui
            prisma.dailyShareRecord.findMany({
                where: { date: today, count: { gte: 10 } },
                orderBy: { count: "desc" },
                take: 20,
            }),
            // Ajustements manuels récents (24h)
            prisma.pointsLedger.findMany({
                where: {
                    action: "manual_adjustment",
                    createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
                },
                orderBy: { createdAt: "desc" },
                take: 20,
                include: { profile: { select: { userId: true, user: { select: { name: true, email: true } } } } },
            }),
        ]);
        return { shareAbuse, recentManual };
    },
    async getAllProfiles(filters = {}) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 50;
        const skip = (page - 1) * limit;
        const where = {
            ...(filters.level && { level: filters.level }),
            ...(filters.search && {
                user: {
                    OR: [
                        { name: { contains: filters.search, mode: "insensitive" } },
                        { email: { contains: filters.search, mode: "insensitive" } },
                    ],
                },
            }),
        };
        const [items, total] = await Promise.all([
            prisma.loyaltyProfile.findMany({
                where,
                orderBy: { points: "desc" },
                skip,
                take: limit,
                include: { user: { select: { id: true, name: true, email: true } } },
            }),
            prisma.loyaltyProfile.count({ where }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    },
    async manualAdjustPoints(profileId, delta, description, adminId) {
        return loyaltyRepository.updatePoints(profileId, delta, "manual_adjustment", `[Admin ${adminId}] ${description}`);
    },
    // ─── Anti-fraude partage ───────────────────────────────────────────────────
    async getTodayShareCount(userId) {
        const today = new Date().toISOString().slice(0, 10);
        const record = await prisma.dailyShareRecord.findUnique({
            where: { userId_date: { userId, date: today } },
        });
        return record?.count ?? 0;
    },
    async incrementShareCount(userId) {
        const today = new Date().toISOString().slice(0, 10);
        return prisma.dailyShareRecord.upsert({
            where: { userId_date: { userId, date: today } },
            update: { count: { increment: 1 } },
            create: { userId, date: today, count: 1 },
        });
    },
};
// ─── Helpers ──────────────────────────────────────────────────────────────────
function computeLevel(points) {
    if (points >= 4000)
        return "Boboto";
    if (points >= 3000)
        return "Mwana";
    if (points >= 2000)
        return "Momi";
    if (points >= 1000)
        return "Elengi";
    return "Mobembo";
}
//# sourceMappingURL=loyalty.repository.js.map