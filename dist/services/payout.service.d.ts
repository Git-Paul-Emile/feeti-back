/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE PAYOUT — Versements aux organisateurs
 *  Double validation admin, traçabilité complète, ledger obligatoire
 * ═══════════════════════════════════════════════════════════════════════
 */
import { payoutRepository } from "../repositories/payout.repository.js";
import type { PayoutStatus } from "../generated/prisma/client.js";
export declare const payoutService: {
    /**
     * Initie un payout pour un organisateur.
     * L'admin sélectionne les transactions à couvrir.
     */
    initierPayout(data: {
        organizerId: string;
        transactionIds: string[];
        methodePaiement: string;
        referenceBancaire?: string;
        notes?: string;
        adminId: string;
        adminRole: string;
        adminIp?: string;
        adminUserAgent?: string;
    }): Promise<{
        payout: {
            organizer: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizerId: string;
            devise: string;
            completedAt: Date | null;
            walletId: string;
            montant: number;
            methodePaiement: string;
            referenceBancaire: string | null;
            statut: PayoutStatus;
            approvedById: string | null;
            processedById: string | null;
            notes: string | null;
            attachments: string | null;
            initiatedAt: Date;
            approvedAt: Date | null;
            processedAt: Date | null;
        };
        requiresDoubleValidation: boolean;
        threshold: number;
    }>;
    /**
     * Approuve un payout (1ère ou 2ème validation selon seuil).
     */
    approuverPayout(payoutId: string, admin: {
        id: string;
        role: string;
        ip?: string;
        userAgent?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        completedAt: Date | null;
        walletId: string;
        montant: number;
        methodePaiement: string;
        referenceBancaire: string | null;
        statut: PayoutStatus;
        approvedById: string | null;
        processedById: string | null;
        notes: string | null;
        attachments: string | null;
        initiatedAt: Date;
        approvedAt: Date | null;
        processedAt: Date | null;
    }>;
    /**
     * Exécute le payout : débit du wallet + ledger.
     * À appeler une fois le virement effectué en dehors du système.
     */
    executerPayout(payoutId: string, admin: {
        id: string;
        role: string;
        ip?: string;
    }, referenceBancaire?: string, attachmentUrl?: string): Promise<{
        payout: {
            organizer: {
                id: string;
                email: string;
                name: string;
            };
            transactions: ({
                transaction: {
                    id: string;
                    netOrganisateur: number;
                    montantTTC: number;
                    devise: string;
                    completedAt: Date | null;
                };
            } & {
                id: string;
                createdAt: Date;
                transactionId: string;
                payoutId: string;
            })[];
            statusHistory: {
                id: string;
                createdAt: Date;
                fromStatus: PayoutStatus | null;
                toStatus: PayoutStatus;
                reason: string | null;
                actorId: string | null;
                actorRole: string | null;
                payoutId: string;
            }[];
            approvedBy: {
                id: string;
                name: string;
            } | null;
            processedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizerId: string;
            devise: string;
            completedAt: Date | null;
            walletId: string;
            montant: number;
            methodePaiement: string;
            referenceBancaire: string | null;
            statut: PayoutStatus;
            approvedById: string | null;
            processedById: string | null;
            notes: string | null;
            attachments: string | null;
            initiatedAt: Date;
            approvedAt: Date | null;
            processedAt: Date | null;
        };
        nouveauSolde: number;
    }>;
    /**
     * Confirme la réception du payout (virement reçu par l'organisateur).
     */
    confirmerPayout(payoutId: string, admin: {
        id: string;
        role: string;
        ip?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        completedAt: Date | null;
        walletId: string;
        montant: number;
        methodePaiement: string;
        referenceBancaire: string | null;
        statut: PayoutStatus;
        approvedById: string | null;
        processedById: string | null;
        notes: string | null;
        attachments: string | null;
        initiatedAt: Date;
        approvedAt: Date | null;
        processedAt: Date | null;
    }>;
    annulerPayout(payoutId: string, raison: string, admin: {
        id: string;
        role: string;
        ip?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        completedAt: Date | null;
        walletId: string;
        montant: number;
        methodePaiement: string;
        referenceBancaire: string | null;
        statut: PayoutStatus;
        approvedById: string | null;
        processedById: string | null;
        notes: string | null;
        attachments: string | null;
        initiatedAt: Date;
        approvedAt: Date | null;
        processedAt: Date | null;
    }>;
    getPayoutById(id: string, userId: string, userRole: string): Promise<{
        organizer: {
            id: string;
            email: string;
            name: string;
        };
        transactions: ({
            transaction: {
                id: string;
                netOrganisateur: number;
                montantTTC: number;
                devise: string;
                completedAt: Date | null;
            };
        } & {
            id: string;
            createdAt: Date;
            transactionId: string;
            payoutId: string;
        })[];
        statusHistory: {
            id: string;
            createdAt: Date;
            fromStatus: PayoutStatus | null;
            toStatus: PayoutStatus;
            reason: string | null;
            actorId: string | null;
            actorRole: string | null;
            payoutId: string;
        }[];
        approvedBy: {
            id: string;
            name: string;
        } | null;
        processedBy: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        completedAt: Date | null;
        walletId: string;
        montant: number;
        methodePaiement: string;
        referenceBancaire: string | null;
        statut: PayoutStatus;
        approvedById: string | null;
        processedById: string | null;
        notes: string | null;
        attachments: string | null;
        initiatedAt: Date;
        approvedAt: Date | null;
        processedAt: Date | null;
    }>;
    listerPayouts(filters: Parameters<typeof payoutRepository.findMany>[0], userId: string, userRole: string): Promise<{
        data: ({
            organizer: {
                id: string;
                email: string;
                name: string;
            };
            _count: {
                transactions: number;
            };
            approvedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizerId: string;
            devise: string;
            completedAt: Date | null;
            walletId: string;
            montant: number;
            methodePaiement: string;
            referenceBancaire: string | null;
            statut: PayoutStatus;
            approvedById: string | null;
            processedById: string | null;
            notes: string | null;
            attachments: string | null;
            initiatedAt: Date;
            approvedAt: Date | null;
            processedAt: Date | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
};
//# sourceMappingURL=payout.service.d.ts.map