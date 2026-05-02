import type { TransactionStatus, Prisma } from "../generated/prisma/client.js";
export interface CreateTransactionData {
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise: string;
    tauxTVA: number;
    tauxCommission: number;
    paymentMethod?: string;
    paymentProviderTransactionId?: string;
    metadata?: Record<string, unknown>;
    checksum: string;
}
export interface TransactionFilters {
    organizerId?: string;
    buyerId?: string;
    eventId?: string;
    status?: TransactionStatus;
    dateFrom?: Date;
    dateTo?: Date;
    devise?: string;
    page?: number;
    limit?: number;
}
export declare const transactionRepository: {
    create(data: CreateTransactionData): Promise<{
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
    findById(id: string): Promise<({
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
    }) | null>;
    findByIdempotencyKey(key: string): Promise<{
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
    } | null>;
    findByTicketId(ticketId: string): Promise<{
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
    } | null>;
    updateStatus(id: string, newStatus: TransactionStatus, extra?: {
        completedAt?: Date;
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
    addStatusHistory(data: {
        transactionId: string;
        fromStatus?: TransactionStatus;
        toStatus: TransactionStatus;
        reason?: string;
        actorId?: string;
        actorRole?: string;
        metadata?: Record<string, unknown>;
    }): Promise<{
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        fromStatus: TransactionStatus | null;
        toStatus: TransactionStatus;
        reason: string | null;
        actorId: string | null;
        actorRole: string | null;
        transactionId: string;
    }>;
    findMany(filters: TransactionFilters): Promise<{
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
    aggregateByOrganizer(organizerId: string, dateFrom?: Date, dateTo?: Date): Promise<Prisma.GetTransactionAggregateType<{
        where: {
            createdAt?: {
                gte: Date | undefined;
                lte: Date | undefined;
            } | undefined;
            organizerId: string;
            status: {
                in: ("completed" | "paid")[];
            };
        };
        _sum: {
            montantTTC: true;
            montantHT: true;
            tva: true;
            commission: true;
            netOrganisateur: true;
        };
        _count: {
            id: true;
        };
    }>>;
    aggregateByEvent(eventId: string): Promise<(Prisma.PickEnumerable<Prisma.TransactionGroupByOutputType, "status"[]> & {
        _count: {
            id: number;
        };
        _sum: {
            montantTTC: number | null;
            netOrganisateur: number | null;
            tva: number | null;
        };
    })[]>;
    findCompletedNotInPayout(organizerId: string): Promise<{
        id: string;
        netOrganisateur: number;
        devise: string;
        completedAt: Date | null;
    }[]>;
    getTVAReport(dateFrom: Date, dateTo: Date, organizerId?: string): Promise<Prisma.GetTransactionAggregateType<{
        where: {
            organizerId?: string | undefined;
            status: {
                in: ("completed" | "paid")[];
            };
            createdAt: {
                gte: Date;
                lte: Date;
            };
        };
        _sum: {
            tva: true;
            montantHT: true;
            montantTTC: true;
        };
        _count: {
            id: true;
        };
    }>>;
};
//# sourceMappingURL=transaction.repository.d.ts.map