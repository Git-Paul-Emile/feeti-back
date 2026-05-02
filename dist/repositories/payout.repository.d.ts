import type { PayoutStatus, Prisma } from "../generated/prisma/client.js";
export interface CreatePayoutData {
    organizerId: string;
    walletId: string;
    montant: number;
    devise: string;
    methodePaiement: string;
    referenceBancaire?: string;
    notes?: string;
    transactionIds: string[];
}
export interface PayoutFilters {
    organizerId?: string;
    statut?: PayoutStatus;
    dateFrom?: Date;
    dateTo?: Date;
    page?: number;
    limit?: number;
}
export declare const payoutRepository: {
    create(data: CreatePayoutData): Promise<{
        organizer: {
            id: string;
            email: string;
            name: string;
        };
        transactions: ({
            transaction: {
                id: string;
                montantTTC: number;
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
    findById(id: string): Promise<({
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
    }) | null>;
    findMany(filters: PayoutFilters): Promise<{
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
    updateStatus(id: string, newStatus: PayoutStatus, extra?: {
        approvedById?: string;
        approvedAt?: Date;
        processedById?: string;
        processedAt?: Date;
        completedAt?: Date;
        referenceBancaire?: string;
        attachments?: string;
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
    addStatusHistory(data: {
        payoutId: string;
        fromStatus?: PayoutStatus;
        toStatus: PayoutStatus;
        reason?: string;
        actorId?: string;
        actorRole?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        fromStatus: PayoutStatus | null;
        toStatus: PayoutStatus;
        reason: string | null;
        actorId: string | null;
        actorRole: string | null;
        payoutId: string;
    }>;
    aggregateForOrganizer(organizerId: string): Promise<Prisma.GetPayoutAggregateType<{
        where: {
            organizerId: string;
            statut: "completed";
        };
        _sum: {
            montant: true;
        };
        _count: {
            id: true;
        };
    }>>;
};
//# sourceMappingURL=payout.repository.d.ts.map