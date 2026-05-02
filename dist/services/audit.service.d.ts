/**
 * ═══════════════════════════════════════════════════════════════════════
 *  SERVICE D'AUDIT — Journal immuable append-only
 *  Conformité RGPD, traçabilité complète, détection d'anomalies
 * ═══════════════════════════════════════════════════════════════════════
 */
export interface AuditEntry {
    userId: string;
    userRole: string;
    action: string;
    resource: string;
    resourceId?: string;
    ipAddress?: string;
    userAgent?: string;
    dataBefore?: Record<string, unknown>;
    dataAfter?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
export declare const auditService: {
    log(entry: AuditEntry): Promise<void>;
    query(filters: {
        userId?: string;
        action?: string;
        resource?: string;
        resourceId?: string;
        dateFrom?: Date;
        dateTo?: Date;
        page?: number;
        limit?: number;
    }): Promise<{
        data: {
            id: string;
            createdAt: Date;
            userId: string;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            checksum: string;
            userRole: string;
            action: string;
            resource: string;
            resourceId: string | null;
            ipAddress: string | null;
            userAgent: string | null;
            dataBefore: import("@prisma/client/runtime/library").JsonValue | null;
            dataAfter: import("@prisma/client/runtime/library").JsonValue | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getResourceHistory(resource: string, resourceId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        checksum: string;
        userRole: string;
        action: string;
        resource: string;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        dataBefore: import("@prisma/client/runtime/library").JsonValue | null;
        dataAfter: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    /**
     * Vérifie l'intégrité des checksums du journal d'audit.
     * Détecte toute altération des entrées.
     */
    verifierIntegriteLog(limit?: number): Promise<{
        total: number;
        corrupted: number;
        corruptions: Array<{
            id: string;
            expectedChecksum: string;
            storedChecksum: string;
        }>;
    }>;
};
//# sourceMappingURL=audit.service.d.ts.map