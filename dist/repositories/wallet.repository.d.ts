import type { LedgerEntryType, LedgerOperationType } from "../generated/prisma/client.js";
export interface WalletUpdateData {
    soldeTotal?: number;
    soldeDisponible?: number;
    soldeEnAttente?: number;
    soldeRetirable?: number;
    totalRetire?: number;
    totalEnLitige?: number;
    checksum?: string;
    version?: number;
}
export interface LedgerEntryData {
    walletId: string;
    entryType: LedgerEntryType;
    operationType: LedgerOperationType;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string;
    referenceType?: string;
    actorId?: string;
    metadata?: Record<string, unknown>;
    checksum: string;
}
export declare const walletRepository: {
    findByOrganizerId(organizerId: string): Promise<{
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
    } | null>;
    findByIdWithLock(organizerId: string): Promise<{
        id: string;
        organizerId: string;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeTotal: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
        devise: string;
        version: number;
    }[]>;
    createForOrganizer(organizerId: string, devise?: string): Promise<{
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
    upsertForOrganizer(organizerId: string, devise?: string): Promise<{
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
    updateWithOptimisticLock(walletId: string, expectedVersion: number, data: WalletUpdateData): Promise<boolean>;
    update(walletId: string, data: WalletUpdateData): Promise<{
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
    addLedgerEntry(entry: LedgerEntryData): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        checksum: string;
        walletId: string;
        actorId: string | null;
        entryType: LedgerEntryType;
        operationType: LedgerOperationType;
        amount: number;
        balanceBefore: number;
        balanceAfter: number;
        referenceId: string | null;
        referenceType: string | null;
    }>;
    getLedgerEntries(walletId: string, options?: {
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
            entryType: LedgerEntryType;
            operationType: LedgerOperationType;
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
    replayLedger(walletId: string): Promise<number>;
    getWalletSummaryByOrganizer(organizerId: string): Promise<{
        id: string;
        updatedAt: Date;
        devise: string;
        soldeTotal: number;
        soldeDisponible: number;
        soldeEnAttente: number;
        soldeRetirable: number;
        totalRetire: number;
        totalEnLitige: number;
    } | null>;
};
//# sourceMappingURL=wallet.repository.d.ts.map