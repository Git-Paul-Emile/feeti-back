/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE DE GESTION DES TRANSACTIONS FINANCIÈRES
 *  State Machine ACID avec Event Sourcing
 * ═══════════════════════════════════════════════════════════════════════
 */
import { prisma } from "../config/database.js";
import { transactionRepository } from "../repositories/transaction.repository.js";
import type { TransactionStatus } from "../generated/prisma/client.js";
export declare function lireTauxConfigures(): Promise<{
    tauxTVA_bp: number;
    tauxCommission_bp: number;
}>;
export declare const transactionService: {
    /**
     * Crée une transaction financière pour un achat de billet.
     * Opération atomique ACID — rollback complet en cas d'erreur.
     */
    creerTransaction(data: {
        idempotencyKey: string;
        eventId: string;
        organizerId: string;
        buyerId: string;
        ticketId: string;
        prixTTCCentimes: number;
        devise: string;
        paymentMethod?: string;
        metadata?: Record<string, unknown>;
        actorIp?: string;
        actorUserAgent?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
    /**
     * Effectue une transition d'état validée avec audit complet.
     */
    changerStatut(transactionId: string, newStatus: TransactionStatus, actor: {
        id: string;
        role: string;
        ip?: string;
        userAgent?: string;
    }, options?: {
        reason?: string;
        refundAmount?: number;
        refundReason?: string;
        paymentProviderTransactionId?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
    /** Applique les effets sur le wallet lors d'une transition */
    _appliquerEffetWallet(tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0], transaction: {
        id: string;
        organizerId: string;
        netOrganisateur: number;
        refundAmount?: number | null;
    }, oldStatus: TransactionStatus, newStatus: TransactionStatus, options?: {
        refundAmount?: number;
    }): Promise<void>;
    getTransactionById(id: string, userId: string, userRole: string): Promise<{
        organizer: {
            id: string;
            email: string;
            name: string;
        };
        event: {
            id: string;
            title: string;
        };
        buyer: {
            id: string;
            email: string;
            name: string;
        };
        statusHistory: {
            id: string;
            createdAt: Date;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            fromStatus: TransactionStatus | null;
            toStatus: TransactionStatus;
            reason: string | null;
            actorId: string | null;
            actorRole: string | null;
            transactionId: string;
        }[];
        payoutTransactions: ({
            payout: {
                id: string;
                completedAt: Date | null;
                statut: import("../generated/prisma/enums.js").PayoutStatus;
            };
        } & {
            id: string;
            createdAt: Date;
            transactionId: string;
            payoutId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
    listerTransactions(filters: Parameters<typeof transactionRepository.findMany>[0], userId: string, userRole: string): Promise<{
        data: ({
            organizer: {
                id: string;
                name: string;
            };
            event: {
                id: string;
                title: string;
            };
            buyer: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: TransactionStatus;
            organizerId: string;
            eventId: string;
            ticketId: string;
            tva: number;
            commission: number;
            netOrganisateur: number;
            tauxTVA: number;
            tauxCommission: number;
            idempotencyKey: string;
            montantTTC: number;
            montantHT: number;
            devise: string;
            paymentMethod: string | null;
            paymentProviderTransactionId: string | null;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            refundAmount: number | null;
            refundReason: string | null;
            checksum: string;
            completedAt: Date | null;
            buyerId: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    confirmerPaiement(transactionId: string, providerTransactionId: string, actor: {
        id: string;
        role: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
    completerTransaction(transactionId: string, actor: {
        id: string;
        role: string;
        ip?: string;
        userAgent?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
    initierRemboursement(transactionId: string, montantRemboursement: number, raison: string, actor: {
        id: string;
        role: string;
        ip?: string;
        userAgent?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: TransactionStatus;
        organizerId: string;
        eventId: string;
        ticketId: string;
        tva: number;
        commission: number;
        netOrganisateur: number;
        tauxTVA: number;
        tauxCommission: number;
        idempotencyKey: string;
        montantTTC: number;
        montantHT: number;
        devise: string;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        completedAt: Date | null;
        buyerId: string;
    }>;
};
//# sourceMappingURL=transaction.service.d.ts.map