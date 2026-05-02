import { StatusCodes } from "http-status-codes";
import { loyaltyService } from "../services/loyalty.service.js";
export const loyaltyController = {
    // ─── Profil utilisateur ────────────────────────────────────────────────────
    async getMyProfile(req, res) {
        const data = await loyaltyService.getMyProfile(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async getMyLedger(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const data = await loyaltyService.getMyLedger(req.user.userId, page, limit);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Classement ─────────────────────────────────────────────────────────────
    async getLeaderboard(req, res) {
        const data = await loyaltyService.getLeaderboard(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Récompenses ────────────────────────────────────────────────────────────
    async getRewards(req, res) {
        const data = await loyaltyService.getRewards();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async redeemReward(req, res) {
        const { rewardId } = req.body;
        const data = await loyaltyService.redeemReward(req.user.userId, rewardId);
        res.status(StatusCodes.OK).json({ status: "success", message: "Récompense échangée avec succès", data });
    },
    // ─── Missions ───────────────────────────────────────────────────────────────
    async getMissions(req, res) {
        const data = await loyaltyService.getMissionsForUser(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Événements déclencheurs ─────────────────────────────────────────────
    async onEventShare(req, res) {
        const { eventId } = req.body;
        const data = await loyaltyService.onEventShare(req.user.userId, eventId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async onEventAttendance(req, res) {
        const { userId, eventId } = req.body;
        await loyaltyService.onEventAttendance(userId, eventId);
        res.status(StatusCodes.OK).json({ status: "success", message: "Points de présence attribués" });
    },
    async onTicketPurchase(req, res) {
        const { userId, amountFCFA, ticketId } = req.body;
        await loyaltyService.onTicketPurchase(userId, amountFCFA, ticketId);
        res.status(StatusCodes.OK).json({ status: "success", message: "Points d'achat attribués" });
    },
    // ─── Paiement partiel avec points ──────────────────────────────────────────
    async simulatePointsPayment(req, res) {
        const amountFCFA = parseInt(req.query.amount);
        if (!amountFCFA || amountFCFA <= 0) {
            res.status(StatusCodes.BAD_REQUEST).json({ status: "error", message: "Paramètre 'amount' invalide" });
            return;
        }
        const data = await loyaltyService.simulatePointsPayment(req.user.userId, amountFCFA);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async applyPointsPayment(req, res) {
        const { pointsToUse, ticketId, amountFCFA } = req.body;
        const data = await loyaltyService.applyPointsPayment(req.user.userId, pointsToUse, ticketId, amountFCFA);
        res.status(StatusCodes.OK).json({ status: "success", message: "Points appliqués au paiement", data });
    },
    // ─── Avantages VIP + ambassadeur ─────────────────────────────────────────
    async getVipBenefits(req, res) {
        const data = await loyaltyService.getVipBenefits(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async getAmbassadorStatus(req, res) {
        const data = await loyaltyService.getAmbassadorStatus(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Parrainage ─────────────────────────────────────────────────────────────
    async applyReferralCode(req, res) {
        const { referralCode } = req.body;
        const data = await loyaltyService.applyReferralCode(req.user.userId, referralCode);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Partenaires marchands ───────────────────────────────────────────────────
    async getPublicPartners(req, res) {
        const data = await loyaltyService.getPublicPartners();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async getPartnerDiscount(req, res) {
        const data = await loyaltyService.getPartnerDiscountForUser(req.user.userId, req.params.id);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async recordPartnerSpending(req, res) {
        const { partnerId, amountFCFA, description } = req.body;
        const data = await loyaltyService.recordPartnerSpending(req.user.userId, partnerId, amountFCFA, description ?? "");
        res.status(StatusCodes.OK).json({ status: "success", message: "Dépense enregistrée", data });
    },
    // ─── Communauté ─────────────────────────────────────────────────────────────
    async getCommunityPosts(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const data = await loyaltyService.getCommunityPosts({ status: "approved", page, limit });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async createCommunityPost(req, res) {
        const { title, content, image, eventId } = req.body;
        const data = await loyaltyService.createCommunityPost(req.user.userId, { title, content, image, eventId });
        res.status(StatusCodes.CREATED).json({ status: "success", message: "Publication soumise pour modération", data });
    },
    async engageCommunityPost(req, res) {
        const { type, content } = req.body;
        const data = await loyaltyService.engageCommunityPost(req.user.userId, req.params.id, type, content);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Badges ─────────────────────────────────────────────────────────────────
    async getMyBadges(req, res) {
        const data = await loyaltyService.getMyBadges(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Bonus actifs ───────────────────────────────────────────────────────────
    async getActiveBonuses(req, res) {
        const data = await loyaltyService.getActiveBonuses();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── VIP ────────────────────────────────────────────────────────────────────
    async grantVipAccess(req, res) {
        const { userId, eventId, accessType, ticketId } = req.body;
        const data = await loyaltyService.grantVipAccess(userId, eventId, accessType, ticketId);
        res.status(StatusCodes.OK).json({ status: "success", message: "Accès VIP accordé", data });
    },
    async getMyVipAccess(req, res) {
        const data = await loyaltyService.getVipAccessLogs({ userId: req.user.userId });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // ─── Administration ─────────────────────────────────────────────────────────
    async getAdminStats(req, res) {
        const data = await loyaltyService.getAdminStats();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async getFraudAlerts(req, res) {
        const data = await loyaltyService.getFraudAlerts();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async getAllUsers(req, res) {
        const search = req.query.search;
        const level = req.query.level;
        const pageQ = req.query.page;
        const limitQ = req.query.limit;
        const data = await loyaltyService.getAllUsers({
            search,
            level: level,
            page: pageQ ? parseInt(pageQ) : undefined,
            limit: limitQ ? parseInt(limitQ) : undefined,
        });
        res.status(StatusCodes.OK).json({ status: "success", ...data });
    },
    async getAllLedger(req, res) {
        const pageQ = req.query.page;
        const limitQ = req.query.limit;
        const action = req.query.action;
        const data = await loyaltyService.getAllLedger({
            page: pageQ ? parseInt(pageQ) : undefined,
            limit: limitQ ? parseInt(limitQ) : undefined,
            action: action,
        });
        res.status(StatusCodes.OK).json({ status: "success", ...data });
    },
    async manualAdjustPoints(req, res) {
        const { profileId, delta, description } = req.body;
        const data = await loyaltyService.manualAdjustPoints(profileId, delta, description, req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", message: "Points ajustés", data });
    },
    async exportLedgerCSV(req, res) {
        const action = req.query.action;
        const csv = await loyaltyService.exportLedgerCSV({ action });
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", `attachment; filename="feeti-na-feeti-ledger-${Date.now()}.csv"`);
        res.status(StatusCodes.OK).send(csv);
    },
    async exportPartnerSpendingCSV(req, res) {
        const csv = await loyaltyService.exportPartnerSpendingCSV();
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", `attachment; filename="feeti-partenaires-${Date.now()}.csv"`);
        res.status(StatusCodes.OK).send(csv);
    },
    // Admin: Récompenses
    async getAdminRewards(req, res) {
        const data = await loyaltyService.getAdminRewards();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async createReward(req, res) {
        const data = await loyaltyService.createReward(req.body);
        res.status(StatusCodes.CREATED).json({ status: "success", data });
    },
    async updateReward(req, res) {
        const data = await loyaltyService.updateReward(String(req.params.id), req.body);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async deleteReward(req, res) {
        await loyaltyService.deleteReward(String(req.params.id));
        res.status(StatusCodes.OK).json({ status: "success", message: "Récompense supprimée" });
    },
    // Admin: Partenaires
    async getAdminPartners(req, res) {
        const data = await loyaltyService.getAdminPartners();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async createPartner(req, res) {
        const data = await loyaltyService.createPartner(req.body);
        res.status(StatusCodes.CREATED).json({ status: "success", data });
    },
    async updatePartner(req, res) {
        const data = await loyaltyService.updatePartner(String(req.params.id), req.body);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async deletePartner(req, res) {
        await loyaltyService.deletePartner(String(req.params.id));
        res.status(StatusCodes.OK).json({ status: "success", message: "Partenaire supprimé" });
    },
    async getAdminPartnerSpendings(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const partnerId = req.query.partnerId;
        const data = await loyaltyService.getPartnerSpendingStats({ page, limit, partnerId });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // Admin: Missions
    async getAdminMissions(req, res) {
        const data = await loyaltyService.getAdminMissions();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async createMission(req, res) {
        const data = await loyaltyService.createMission(req.body);
        res.status(StatusCodes.CREATED).json({ status: "success", data });
    },
    async updateMission(req, res) {
        const data = await loyaltyService.updateMission(String(req.params.id), req.body);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async deleteMission(req, res) {
        await loyaltyService.deleteMission(String(req.params.id));
        res.status(StatusCodes.OK).json({ status: "success", message: "Mission supprimée" });
    },
    // Admin: Bonus / campagnes
    async getAllBonuses(req, res) {
        const data = await loyaltyService.getAllBonuses();
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async createBonus(req, res) {
        const data = await loyaltyService.createBonus(req.body);
        res.status(StatusCodes.CREATED).json({ status: "success", data });
    },
    async updateBonus(req, res) {
        const data = await loyaltyService.updateBonus(String(req.params.id), req.body);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async deleteBonus(req, res) {
        await loyaltyService.deleteBonus(String(req.params.id));
        res.status(StatusCodes.OK).json({ status: "success", message: "Bonus supprimé" });
    },
    // Admin: Communauté
    async getAdminCommunityPosts(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const status = req.query.status;
        const data = await loyaltyService.getAdminCommunityPosts({ page, limit, status });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async moderateCommunityPost(req, res) {
        const { status } = req.body;
        const data = await loyaltyService.moderateCommunityPost(req.params.id, status);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    async adminDeleteCommunityPost(req, res) {
        await loyaltyService.adminDeleteCommunityPost(req.params.id);
        res.status(StatusCodes.OK).json({ status: "success", message: "Publication supprimée" });
    },
    // Admin: Badges
    async getAdminBadges(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const data = await loyaltyService.getAdminBadges({ page, limit });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // Admin: VIP
    async getAdminVipLogs(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const eventId = req.query.eventId;
        const data = await loyaltyService.getVipAccessLogs({ page, limit, eventId });
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
};
//# sourceMappingURL=loyalty.controller.js.map