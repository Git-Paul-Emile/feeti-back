/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE DE REPORTING & ANALYTICS FINANCIERS
 *  Tableaux de bord, KPIs, exports CSV/PDF, rapports TVA
 * ═══════════════════════════════════════════════════════════════════════
 */
export interface PeriodFilter {
    dateFrom: Date;
    dateTo: Date;
}
export interface OrganizerDashboard {
    kpis: {
        totalGagne: number;
        totalGagneFormatted: string;
        soldeDisponible: number;
        soldeDisponibleFormatted: string;
        totalBilletsVendus: number;
        totalTransactions: number;
        tauxRemboursement: number;
        croissance: number;
    };
    revenusParEvenement: Array<{
        eventId: string;
        eventTitle: string;
        billets: number;
        montantTTC: number;
        montantHT: number;
        tva: number;
        commission: number;
        netOrganisateur: number;
        formatted: {
            net: string;
            ttc: string;
        };
    }>;
    tvaCollectee: {
        total: number;
        formatted: string;
        periodeLabel: string;
    };
    commissionsPayees: {
        total: number;
        formatted: string;
    };
    topEvenements: Array<{
        eventId: string;
        titre: string;
        revenus: number;
        billets: number;
    }>;
}
export interface AdminDashboard {
    fluxFinanciers: {
        totalEntrees: number;
        totalTVACollectee: number;
        totalCommissions: number;
        totalVersesOrganisateurs: number;
        soldesPlateforme: number;
    };
    topOrganisateurs: Array<{
        organizerId: string;
        nom: string;
        totalTransactions: number;
        totalTTC: number;
        totalNet: number;
    }>;
    transactionsEnLitige: number;
    alertes: string[];
    repartitionParStatut: Array<{
        status: string;
        count: number;
        totalTTC: number;
    }>;
}
export declare const reportingService: {
    getDashboardOrganisateur(organizerId: string, periode: PeriodFilter): Promise<OrganizerDashboard>;
    getDashboardAdmin(periode: PeriodFilter): Promise<AdminDashboard>;
    getRapportTVA(periode: PeriodFilter, organizerId?: string): Promise<{
        periode: {
            debut: string;
            fin: string;
            label: string;
        };
        totalTTC: number;
        totalHT: number;
        totalTVA: number;
        nombreTransactions: number;
        parTaux: {
            tauxTVA: string;
            devise: string;
            totalHT: number;
            totalTVA: number;
            totalTTC: number;
            nombre: number;
        }[];
    }>;
    exportTransactionsCSV(filters: {
        organizerId?: string;
        dateFrom?: Date;
        dateTo?: Date;
        status?: string;
    }, devise?: string): Promise<string>;
    getTendancesVentes(organizerId: string | undefined, mois?: number): Promise<{
        label: string;
        totalTTC: number;
        net: number;
        count: number;
        mois: string;
    }[]>;
    getRapportRemboursements(organizerId: string, periode: PeriodFilter): Promise<{
        remboursements: ({
            event: {
                title: string;
            };
            buyer: {
                email: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../generated/prisma/enums.js").TransactionStatus;
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
        total: number;
        count: number;
    }>;
};
//# sourceMappingURL=reporting.service.d.ts.map