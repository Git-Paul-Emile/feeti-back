import type { ZoneAccessLevel } from "../generated/prisma/client.js";
export declare const ZONE_TEMPLATES: readonly [{
    readonly code: "Z1";
    readonly name: "Accès Général";
    readonly description: "Entrée principale, sortie, zone publique";
    readonly color: "#22C55E";
}, {
    readonly code: "Z2";
    readonly name: "Contrôle Billets";
    readonly description: "Point de scan entrée, pré-filtrage";
    readonly color: "#F59E0B";
}, {
    readonly code: "Z3";
    readonly name: "Zone Publique Étendue";
    readonly description: "Stands, food court, sponsors, animations";
    readonly color: "#3B82F6";
}, {
    readonly code: "Z4";
    readonly name: "Zone Scène";
    readonly description: "Devant scène — semi-restrictive";
    readonly color: "#8B5CF6";
}, {
    readonly code: "Z5";
    readonly name: "VIP";
    readonly description: "Espace VIP, loges VIP, lounge";
    readonly color: "#F97316";
}, {
    readonly code: "Z6";
    readonly name: "Backstage";
    readonly description: "Derrière scène, loges artistes, production";
    readonly color: "#EF4444";
}, {
    readonly code: "Z7";
    readonly name: "Média / Presse";
    readonly description: "Zone interview, zone captation";
    readonly color: "#06B6D4";
}, {
    readonly code: "Z8";
    readonly name: "Zone Technique";
    readonly description: "Régie son/lumière, zone équipements";
    readonly color: "#6B7280";
}, {
    readonly code: "Z9";
    readonly name: "Sécurité / Staff";
    readonly description: "Poste de commandement, accès surveillance";
    readonly color: "#1F2937";
}, {
    readonly code: "Z10";
    readonly name: "Logistique";
    readonly description: "Parking staff, accès livraison, montage";
    readonly color: "#92400E";
}];
export declare const accessService: {
    createZone(eventId: string, userId: string, role: string, data: {
        code: string;
        name: string;
        description?: string;
        color?: string;
        maxCapacity?: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        isActive: boolean;
        code: string;
        color: string;
        maxCapacity: number | null;
        currentCount: number;
    }>;
    applyDefaultZones(eventId: string, userId: string, role: string): Promise<({
        accessRights: ({
            category: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                eventId: string;
                color: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            zoneId: string;
            categoryId: string;
            accessLevel: ZoneAccessLevel;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        isActive: boolean;
        code: string;
        color: string;
        maxCapacity: number | null;
        currentCount: number;
    })[]>;
    getZones(eventId: string, userId: string, role: string): Promise<({
        accessRights: ({
            category: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                eventId: string;
                color: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            zoneId: string;
            categoryId: string;
            accessLevel: ZoneAccessLevel;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        isActive: boolean;
        code: string;
        color: string;
        maxCapacity: number | null;
        currentCount: number;
    })[]>;
    updateZone(eventId: string, zoneId: string, userId: string, role: string, data: {
        name?: string;
        description?: string;
        color?: string;
        isActive?: boolean;
        maxCapacity?: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        isActive: boolean;
        code: string;
        color: string;
        maxCapacity: number | null;
        currentCount: number;
    }>;
    deleteZone(eventId: string, zoneId: string, userId: string, role: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        isActive: boolean;
        code: string;
        color: string;
        maxCapacity: number | null;
        currentCount: number;
    }>;
    createCategory(eventId: string, userId: string, role: string, data: {
        name: string;
        description?: string;
        color?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    }>;
    applyDefaultCategories(eventId: string, userId: string, role: string): Promise<({
        accessRights: ({
            zone: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                eventId: string;
                isActive: boolean;
                code: string;
                color: string;
                maxCapacity: number | null;
                currentCount: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            zoneId: string;
            categoryId: string;
            accessLevel: ZoneAccessLevel;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    })[]>;
    getCategories(eventId: string, userId: string, role: string): Promise<({
        accessRights: ({
            zone: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                eventId: string;
                isActive: boolean;
                code: string;
                color: string;
                maxCapacity: number | null;
                currentCount: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            zoneId: string;
            categoryId: string;
            accessLevel: ZoneAccessLevel;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    })[]>;
    updateCategory(eventId: string, categoryId: string, userId: string, role: string, data: {
        name?: string;
        description?: string;
        color?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    }>;
    deleteCategory(eventId: string, categoryId: string, userId: string, role: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    }>;
    setAccessRights(eventId: string, userId: string, role: string, rights: {
        categoryId: string;
        zoneId: string;
        accessLevel: ZoneAccessLevel;
    }[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        zoneId: string;
        categoryId: string;
        accessLevel: ZoneAccessLevel;
    }[]>;
    applyDefaultMatrix(eventId: string, userId: string, role: string): Promise<{
        applied: number;
    }>;
    getAccessMatrix(eventId: string, userId: string, role: string): Promise<{
        zones: ({
            accessRights: ({
                category: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string | null;
                    eventId: string;
                    color: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                zoneId: string;
                categoryId: string;
                accessLevel: ZoneAccessLevel;
            })[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            eventId: string;
            isActive: boolean;
            code: string;
            color: string;
            maxCapacity: number | null;
            currentCount: number;
        })[];
        categories: ({
            accessRights: ({
                zone: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string | null;
                    eventId: string;
                    isActive: boolean;
                    code: string;
                    color: string;
                    maxCapacity: number | null;
                    currentCount: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                zoneId: string;
                categoryId: string;
                accessLevel: ZoneAccessLevel;
            })[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            eventId: string;
            color: string;
        })[];
    }>;
    generateBadge(eventId: string, userId: string, role: string, data: {
        categoryId: string;
        holderName: string;
        holderEmail: string;
        ticketId?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BadgeStatus;
        eventId: string;
        holderName: string;
        holderEmail: string;
        ticketId: string | null;
        categoryId: string;
        qrCode: string;
        qrSecret: string;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
    }>;
    getBadges(eventId: string, userId: string, role: string): Promise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            eventId: string;
            color: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BadgeStatus;
        eventId: string;
        holderName: string;
        holderEmail: string;
        ticketId: string | null;
        categoryId: string;
        qrCode: string;
        qrSecret: string;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
    })[]>;
    sendBadgeByEmail(eventId: string, badgeId: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BadgeStatus;
        eventId: string;
        holderName: string;
        holderEmail: string;
        ticketId: string | null;
        categoryId: string;
        qrCode: string;
        qrSecret: string;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
    }>;
    revokeBadge(eventId: string, badgeId: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BadgeStatus;
        eventId: string;
        holderName: string;
        holderEmail: string;
        ticketId: string | null;
        categoryId: string;
        qrCode: string;
        qrSecret: string;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
    }>;
    regenerateBadge(eventId: string, badgeId: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BadgeStatus;
        eventId: string;
        holderName: string;
        holderEmail: string;
        ticketId: string | null;
        categoryId: string;
        qrCode: string;
        qrSecret: string;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
    }>;
    scanBadge(agentId: string, data: {
        qrCode: string;
        zoneId: string;
    }): Promise<{
        result: "denied";
        refusalReason: string;
        holder?: undefined;
    } | {
        result: "denied";
        refusalReason: string;
        holder: {
            name: string;
            email?: undefined;
            category?: undefined;
            authorizedZones?: undefined;
        };
    } | {
        result: "granted" | "denied" | "conditional";
        refusalReason: string | undefined;
        holder: {
            name: string;
            email: string;
            category: string;
            authorizedZones: {
                zoneId: string;
                zoneName: string;
                level: ZoneAccessLevel;
            }[];
        };
    }>;
    syncOfflineScans(agentId: string, scans: {
        qrCode: string;
        zoneId: string;
        scannedAt: string;
    }[]): Promise<{
        synced: number;
    }>;
    getTracking(eventId: string, userId: string, role: string): Promise<{
        zoneId: string;
        code: string;
        name: string;
        color: string;
        currentCount: number;
        totalEntries: number;
        maxCapacity: number | null;
        isOverCapacity: boolean;
    }[]>;
    getAccessLogs(eventId: string, userId: string, role: string, filters?: {
        zoneId?: string;
        result?: "granted" | "denied" | "conditional";
    }): Promise<({
        zone: {
            name: string;
            code: string;
        };
        badge: {
            category: {
                name: string;
            };
            holderName: string;
            holderEmail: string;
        };
    } & {
        id: string;
        result: import("../generated/prisma/enums.js").AccessResult;
        eventId: string;
        scannedById: string;
        zoneId: string;
        refusalReason: string | null;
        offlineSync: boolean;
        scannedAt: Date;
        badgeId: string;
    })[]>;
    getRefusedAttempts(eventId: string, userId: string, role: string): Promise<({
        zone: {
            name: string;
            code: string;
        };
        badge: {
            category: {
                name: string;
            };
            holderName: string;
            holderEmail: string;
        };
    } & {
        id: string;
        result: import("../generated/prisma/enums.js").AccessResult;
        eventId: string;
        scannedById: string;
        zoneId: string;
        refusalReason: string | null;
        offlineSync: boolean;
        scannedAt: Date;
        badgeId: string;
    })[]>;
    exportCsv(eventId: string, userId: string, role: string): Promise<string>;
    reportSuspectBadge(badgeId: string, reportedById: string, reason: string): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        badgeId: string;
        reportedById: string;
        resolved: boolean;
    }>;
    getSuspectReports(eventId: string, userId: string, role: string): Promise<({
        badge: {
            category: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                eventId: string;
                color: string;
            };
            holderName: string;
            holderEmail: string;
        };
    } & {
        id: string;
        createdAt: Date;
        reason: string;
        badgeId: string;
        reportedById: string;
        resolved: boolean;
    })[]>;
    getCurrentQr(eventId: string, badgeId: string, userId: string, role: string): Promise<{
        qr: string;
        windowSeconds: number;
        nextRefreshAt: number;
    }>;
};
//# sourceMappingURL=access.service.d.ts.map