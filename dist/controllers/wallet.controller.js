import { StatusCodes } from "http-status-codes";
import { walletService } from "../services/wallet.service.js";
import { AppError } from "../utils/AppError.js";
export const walletController = {
    // GET /api/wallet/me — Solde du wallet de l'organisateur connecté
    async monWallet(req, res) {
        const summary = await walletService.getWalletSummary(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data: summary });
    },
    // GET /api/wallet/:organizerId — Admin : wallet d'un organisateur
    async getByOrganizer(req, res) {
        const { organizerId } = req.params;
        const isAdmin = ["admin", "super_admin"].includes(req.user.role);
        const isSelf = req.user.userId === organizerId;
        if (!isAdmin && !isSelf) {
            throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
        }
        const summary = await walletService.getWalletSummary(organizerId);
        res.status(StatusCodes.OK).json({ status: "success", data: summary });
    },
    // GET /api/wallet/me/ledger — Grand livre de l'organisateur connecté
    async monLedger(req, res) {
        const { page, limit, dateFrom, dateTo } = req.query;
        const ledger = await walletService.getLedger(req.user.userId, {
            page: page ? parseInt(page) : undefined,
            limit: limit ? parseInt(limit) : undefined,
            dateFrom: dateFrom ? new Date(dateFrom) : undefined,
            dateTo: dateTo ? new Date(dateTo) : undefined,
        });
        res.status(StatusCodes.OK).json({ status: "success", ...ledger });
    },
    // GET /api/wallet/:organizerId/ledger — Admin : grand livre d'un org
    async ledgerByOrganizer(req, res) {
        const { page, limit, dateFrom, dateTo } = req.query;
        const { organizerId } = req.params;
        const ledger = await walletService.getLedger(organizerId, {
            page: page ? parseInt(page) : undefined,
            limit: limit ? parseInt(limit) : undefined,
            dateFrom: dateFrom ? new Date(dateFrom) : undefined,
            dateTo: dateTo ? new Date(dateTo) : undefined,
        });
        res.status(StatusCodes.OK).json({ status: "success", ...ledger });
    },
    // GET /api/wallet/me/integrity — Vérification d'intégrité
    async verifierIntegrite(req, res) {
        const result = await walletService.verifierIntegrite(req.user.userId);
        res.status(StatusCodes.OK).json({ status: "success", data: result });
    },
    // POST /api/wallet/:organizerId/adjustment — Ajustement admin
    async ajustement(req, res) {
        const { montantCentimes, type, motif } = req.body;
        const { organizerId } = req.params;
        if (!["credit", "debit"].includes(type)) {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: "error",
                message: "Type d'ajustement invalide: 'credit' ou 'debit' requis",
            });
            return;
        }
        if (!motif) {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: "error",
                message: "Le motif de l'ajustement est obligatoire",
            });
            return;
        }
        const result = await walletService.ajustementAdmin(organizerId, montantCentimes, type, motif, req.user.userId, req.user.role);
        res.status(StatusCodes.OK).json({ status: "success", data: result });
    },
};
//# sourceMappingURL=wallet.controller.js.map