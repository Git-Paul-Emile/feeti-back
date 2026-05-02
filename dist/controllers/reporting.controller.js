import { StatusCodes } from "http-status-codes";
import { reportingService } from "../services/reporting.service.js";
import { auditService } from "../services/audit.service.js";
import { AppError } from "../utils/AppError.js";
// Retourne une plage de dates à partir des query params (défaut: 30 derniers jours)
function parsePeriode(req) {
    const now = new Date();
    const dateFrom = req.query.dateFrom
        ? new Date(req.query.dateFrom)
        : new Date(now.getFullYear(), now.getMonth(), 1); // 1er du mois courant
    const dateTo = req.query.dateTo ? new Date(req.query.dateTo) : now;
    if (isNaN(dateFrom.getTime()) || isNaN(dateTo.getTime())) {
        throw new AppError("Dates invalides", StatusCodes.BAD_REQUEST);
    }
    if (dateFrom > dateTo) {
        throw new AppError("dateFrom doit être antérieure à dateTo", StatusCodes.BAD_REQUEST);
    }
    return { dateFrom, dateTo };
}
export const reportingController = {
    // GET /api/reporting/dashboard — Dashboard organisateur connecté
    async dashboardOrganisateur(req, res) {
        if (!["organizer", "admin", "super_admin"].includes(req.user.role)) {
            throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
        }
        const periode = parsePeriode(req);
        const organizerId = req.user.role === "organizer"
            ? req.user.userId
            : req.query.organizerId ?? req.user.userId;
        const dashboard = await reportingService.getDashboardOrganisateur(organizerId, periode);
        res.status(StatusCodes.OK).json({ status: "success", data: dashboard });
    },
    // GET /api/reporting/admin/dashboard — Dashboard admin
    async dashboardAdmin(req, res) {
        const periode = parsePeriode(req);
        const dashboard = await reportingService.getDashboardAdmin(periode);
        res.status(StatusCodes.OK).json({ status: "success", data: dashboard });
    },
    // GET /api/reporting/tva — Rapport TVA
    async rapportTVA(req, res) {
        const periode = parsePeriode(req);
        const isAdmin = ["admin", "super_admin"].includes(req.user.role);
        const organizerId = isAdmin
            ? req.query.organizerId
            : req.user.userId;
        const rapport = await reportingService.getRapportTVA(periode, organizerId);
        res.status(StatusCodes.OK).json({ status: "success", data: rapport });
    },
    // GET /api/reporting/tendances — Tendances de ventes
    async tendances(req, res) {
        const mois = req.query.mois ? parseInt(req.query.mois) : 6;
        const isAdmin = ["admin", "super_admin"].includes(req.user.role);
        // Admin sans organizerId spécifié → vue plateforme complète
        const organizerId = isAdmin
            ? req.query.organizerId
            : req.user.userId;
        const data = await reportingService.getTendancesVentes(organizerId, mois);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // GET /api/reporting/remboursements
    async remboursements(req, res) {
        const periode = parsePeriode(req);
        const isAdmin = ["admin", "super_admin"].includes(req.user.role);
        const organizerId = isAdmin
            ? req.query.organizerId ?? req.user.userId
            : req.user.userId;
        const data = await reportingService.getRapportRemboursements(organizerId, periode);
        res.status(StatusCodes.OK).json({ status: "success", data });
    },
    // GET /api/reporting/audit — Journal d'audit (admin uniquement)
    async journalAudit(req, res) {
        const { userId, action, resource, resourceId, page, limit } = req.query;
        const periode = parsePeriode(req);
        const result = await auditService.query({
            userId: userId,
            action: action,
            resource: resource,
            resourceId: resourceId,
            dateFrom: periode.dateFrom,
            dateTo: periode.dateTo,
            page: page ? parseInt(page) : undefined,
            limit: limit ? parseInt(limit) : undefined,
        });
        res.status(StatusCodes.OK).json({ status: "success", ...result });
    },
    // GET /api/reporting/audit/:resource/:resourceId — Historique d'une ressource
    async auditRessource(req, res) {
        const { resource, resourceId } = req.params;
        const history = await auditService.getResourceHistory(resource, resourceId);
        res.status(StatusCodes.OK).json({ status: "success", data: history });
    },
    // GET /api/reporting/audit/integrity — Vérification intégrité du log
    async integritéAudit(req, res) {
        const result = await auditService.verifierIntegriteLog();
        res.status(StatusCodes.OK).json({ status: "success", data: result });
    },
    // GET /api/reporting/export/csv
    async exportCSV(req, res) {
        const { dateFrom, dateTo, status } = req.query;
        const isAdmin = ["admin", "super_admin"].includes(req.user.role);
        const csv = await reportingService.exportTransactionsCSV({
            organizerId: isAdmin ? undefined : req.user.userId,
            dateFrom: dateFrom ? new Date(dateFrom) : undefined,
            dateTo: dateTo ? new Date(dateTo) : undefined,
            status: status,
        });
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", `attachment; filename="rapport_transactions_${new Date().toISOString().slice(0, 10)}.csv"`);
        res.status(StatusCodes.OK).send("\uFEFF" + csv);
    },
};
//# sourceMappingURL=reporting.controller.js.map