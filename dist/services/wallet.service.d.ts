/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE WALLET ORGANISATEUR — Grand livre comptable en partie double
 * ═══════════════════════════════════════════════════════════════════════
 */
export declare const walletService: {
    getOrCreateWallet(organizerId: string, devise?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        checksum: string;
        soldeTotal: number;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
        version: number;
    }>;
    getWalletByOrganizerId(organizerId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        checksum: string;
        soldeTotal: number;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
        version: number;
    }>;
    getWalletSummary(organizerId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizerId: string;
        devise: string;
        checksum: string;
        soldeTotal: number;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
        version: number;
    } | {
        formatted: {
            soldeTotal: string;
            soldeDisponible: string;
            soldeEnAttente: string;
            soldeRetirable: string;
            totalRetire: string;
            totalEnLitige: string;
        };
        id: string;
        updatedAt: Date;
        devise: string;
        soldeTotal: number;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
    }>;
    getLedger(organizerId: string, options?: {
        page?: number;
        limit?: number;
        dateFrom?: Date;
        dateTo?: Date;
    }): Promise<{
        data: {
            id: string;
            createdAt: Date;
            description: string;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            checksum: string;
            walletId: string;
            actorId: string | null;
            entryType: import("../generated/prisma/enums.js").LedgerEntryType;
            operationType: import("../generated/prisma/enums.js").LedgerOperationType;
            amount: number;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    /**
     * Vérifie la cohérence du solde par rejeu complet du ledger.
     * Opération d'audit — à utiliser pour vérification externe.
     */
    verifierIntegrite(organizerId: string): Promise<{
        coherent: boolean;
        soldeEnregistre: number;
        soldeCalcule: number;
        ecart: number;
        message: string;
    }>;
    /**
     * Ajustement manuel admin avec entrée de ledger obligatoire.
     * Nécessite un motif et une traçabilité complète.
     */
    ajustementAdmin(organizerId: string, montantCentimes: number, type: "credit" | "debit", motif: string, adminId: string, adminRole: string): Promise<{
        wallet: {
            soldeDisponible: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizerId: string;
            devise: string;
            checksum: string;
            soldeTotal: number;
            soldeEnAttente: number;
            soldeRetirable: number;
            totalRetire: number;
            totalEnLitige: number;
            version: number;
        };
        ledgerEntry: {
            id: string;
            createdAt: Date;
            description: string;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            checksum: string;
            walletId: string;
            actorId: string | null;
            entryType: import("../generated/prisma/enums.js").LedgerEntryType;
            operationType: import("../generated/prisma/enums.js").LedgerOperationType;
            amount: number;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
        };
    }>;
};
//# sourceMappingURL=wallet.service.d.ts.map