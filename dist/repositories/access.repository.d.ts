import type { ZoneAccessLevel, BadgeStatus, AccessResult } from "../generated/prisma/client.js";
export declare const accessRepository: {
    createZone(data: {
        eventId: string;
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
    findZonesByEvent(eventId: string): Promise<({
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
    findZoneById(id: string): Promise<({
        accessRights: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            zoneId: string;
            categoryId: string;
            accessLevel: ZoneAccessLevel;
        }[];
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
    }) | null>;
    findZoneByCode(eventId: string, code: string): Promise<{
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
    } | null>;
    updateZone(id: string, data: Partial<{
        name: string;
        description: string;
        color: string;
        isActive: boolean;
        maxCapacity: number;
        currentCount: number;
    }>): Promise<{
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
    deleteZone(id: string): Promise<{
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
    incrementZoneCount(zoneId: string, delta: number): Promise<{
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
    createCategory(data: {
        eventId: string;
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
    findCategoriesByEvent(eventId: string): Promise<({
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
    findCategoryById(id: string): Promise<({
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
    }) | null>;
    updateCategory(id: string, data: Partial<{
        name: string;
        description: string;
        color: string;
    }>): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    }>;
    deleteCategory(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        eventId: string;
        color: string;
    }>;
    upsertAccessRight(categoryId: string, zoneId: string, accessLevel: ZoneAccessLevel): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        zoneId: string;
        categoryId: string;
        accessLevel: ZoneAccessLevel;
    }>;
    bulkUpsertAccessRights(rights: {
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
    getAccessRightsByCategory(categoryId: string): Promise<({
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
    })[]>;
    getAccessRight(categoryId: string, zoneId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        zoneId: string;
        categoryId: string;
        accessLevel: ZoneAccessLevel;
    } | null>;
    createBadge(data: {
        eventId: string;
        ticketId?: string;
        categoryId: string;
        holderName: string;
        holderEmail: string;
        qrCode: string;
        qrSecret: string;
    }): Promise<{
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
        status: BadgeStatus;
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
    findBadgeById(id: string): Promise<({
        category: {
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
        };
        event: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: string;
            status: string;
            title: string;
            description: string;
            time: string;
            location: string;
            image: string;
            price: number;
            vipPrice: number | null;
            ticketTypes: string | null;
            currency: string;
            category: string;
            maxAttendees: number;
            attendees: number;
            duration: string | null;
            salesBlocked: boolean;
            isLive: boolean;
            eventType: import("../generated/prisma/enums.js").EventType;
            isFeatured: boolean;
            isFavorite: boolean;
            streamUrl: string | null;
            videoUrl: string | null;
            promotionType: string | null;
            promotionStatus: string | null;
            promotionStartDate: Date | null;
            promotionEndDate: Date | null;
            countryCode: string | null;
            organizerId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: BadgeStatus;
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
    }) | null>;
    findBadgeByQrCode(qrCode: string): Promise<({
        category: {
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
        };
        event: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: string;
            status: string;
            title: string;
            description: string;
            time: string;
            location: string;
            image: string;
            price: number;
            vipPrice: number | null;
            ticketTypes: string | null;
            currency: string;
            category: string;
            maxAttendees: number;
            attendees: number;
            duration: string | null;
            salesBlocked: boolean;
            isLive: boolean;
            eventType: import("../generated/prisma/enums.js").EventType;
            isFeatured: boolean;
            isFavorite: boolean;
            streamUrl: string | null;
            videoUrl: string | null;
            promotionType: string | null;
            promotionStatus: string | null;
            promotionStartDate: Date | null;
            promotionEndDate: Date | null;
            countryCode: string | null;
            organizerId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: BadgeStatus;
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
    }) | null>;
    findBadgesByEvent(eventId: string): Promise<({
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
        status: BadgeStatus;
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
    updateBadge(id: string, data: Partial<{
        status: BadgeStatus;
        sentAt: Date;
        revokedAt: Date;
        revokedById: string;
        qrCode: string;
        qrSecret: string;
    }>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: BadgeStatus;
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
    createAccessLog(data: {
        badgeId: string;
        zoneId: string;
        eventId: string;
        scannedById: string;
        result: AccessResult;
        refusalReason?: string;
        offlineSync?: boolean;
        scannedAt?: Date;
    }): Promise<{
        id: string;
        result: AccessResult;
        eventId: string;
        scannedById: string;
        zoneId: string;
        refusalReason: string | null;
        offlineSync: boolean;
        scannedAt: Date;
        badgeId: string;
    }>;
    bulkCreateAccessLogs(logs: {
        badgeId: string;
        zoneId: string;
        eventId: string;
        scannedById: string;
        result: AccessResult;
        refusalReason?: string;
        offlineSync: boolean;
        scannedAt: Date;
    }[]): Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    findLogsByEvent(eventId: string, filters?: {
        zoneId?: string;
        result?: AccessResult;
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
        result: AccessResult;
        eventId: string;
        scannedById: string;
        zoneId: string;
        refusalReason: string | null;
        offlineSync: boolean;
        scannedAt: Date;
        badgeId: string;
    })[]>;
    countLogsByZone(eventId: string): Promise<(import("../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../generated/prisma/models.js").AccessLogGroupByOutputType, "zoneId"[]> & {
        _count: {
            _all: number;
        };
    })[]>;
    createSuspectReport(data: {
        badgeId: string;
        reportedById: string;
        reason: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        reason: string;
        badgeId: string;
        reportedById: string;
        resolved: boolean;
    }>;
    findSuspectReportsByEvent(eventId: string): Promise<({
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
};
//# sourceMappingURL=access.repository.d.ts.map