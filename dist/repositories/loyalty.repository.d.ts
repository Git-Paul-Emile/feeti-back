import type { LoyaltyLevel, PointsActionType, Prisma } from "../generated/prisma/client.js";
export declare const loyaltyRepository: {
    getOrCreateProfile(userId: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
        };
        missionProgress: ({
            mission: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                isActive: boolean;
                points: number;
                actionType: PointsActionType;
                target: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            completed: boolean;
            profileId: string;
            missionId: string;
            progress: number;
            rewardPaid: boolean;
        })[];
    } & {
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    }>;
    getProfileByUserId(userId: string): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
        };
        missionProgress: ({
            mission: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                isActive: boolean;
                points: number;
                actionType: PointsActionType;
                target: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            completed: boolean;
            profileId: string;
            missionId: string;
            progress: number;
            rewardPaid: boolean;
        })[];
    } & {
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    }) | null>;
    getProfileByReferralCode(code: string): Promise<{
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    } | null>;
    updatePoints(profileId: string, delta: number, action: PointsActionType, description: string, referenceId?: string, referenceType?: string): Promise<{
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    }>;
    getLedger(profileId: string, page?: number, limit?: number): Promise<{
        items: {
            id: string;
            createdAt: Date;
            description: string;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
            action: PointsActionType;
            points: number;
            profileId: string;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getAllLedger(filters?: {
        page?: number;
        limit?: number;
        action?: PointsActionType;
    }): Promise<{
        items: ({
            profile: {
                user: {
                    email: string;
                    name: string;
                };
                userId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
            action: PointsActionType;
            points: number;
            profileId: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getRewards(activeOnly?: boolean): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    }[]>;
    getRewardById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    } | null>;
    createReward(data: Prisma.LoyaltyRewardCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    }>;
    updateReward(id: string, data: Prisma.LoyaltyRewardUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    }>;
    deleteReward(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    }>;
    createRedemption(profileId: string, rewardId: string, points: number): Promise<{
        reward: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            image: string;
            category: string;
            isActive: boolean;
            points: number;
            stock: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        points: number;
        profileId: string;
        rewardId: string;
    }>;
    decrementRewardStock(rewardId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        image: string;
        category: string;
        isActive: boolean;
        points: number;
        stock: number;
    }>;
    getMissions(activeOnly?: boolean): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: PointsActionType;
        target: number;
    }[]>;
    getMissionProgressForUser(profileId: string): Promise<({
        mission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            isActive: boolean;
            points: number;
            actionType: PointsActionType;
            target: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        profileId: string;
        missionId: string;
        progress: number;
        rewardPaid: boolean;
    })[]>;
    upsertMissionProgress(profileId: string, missionId: string, increment: number): Promise<{
        mission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            isActive: boolean;
            points: number;
            actionType: PointsActionType;
            target: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        profileId: string;
        missionId: string;
        progress: number;
        rewardPaid: boolean;
    }>;
    markMissionRewardPaid(progressId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        profileId: string;
        missionId: string;
        progress: number;
        rewardPaid: boolean;
    }>;
    createMission(data: Prisma.LoyaltyMissionCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: PointsActionType;
        target: number;
    }>;
    updateMission(id: string, data: Prisma.LoyaltyMissionUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: PointsActionType;
        target: number;
    }>;
    deleteMission(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: PointsActionType;
        target: number;
    }>;
    getPartners(activeOnly?: boolean): Promise<{
        id: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        category: string;
        isActive: boolean;
        address: string;
        website: string;
        discount: string;
        discountByLevel: import("@prisma/client/runtime/library").JsonValue;
        bonusPoints: number;
        logo: string;
    }[]>;
    getPartnerById(id: string): Promise<{
        id: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        category: string;
        isActive: boolean;
        address: string;
        website: string;
        discount: string;
        discountByLevel: import("@prisma/client/runtime/library").JsonValue;
        bonusPoints: number;
        logo: string;
    } | null>;
    createPartner(data: Prisma.LoyaltyPartnerCreateInput): Promise<{
        id: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        category: string;
        isActive: boolean;
        address: string;
        website: string;
        discount: string;
        discountByLevel: import("@prisma/client/runtime/library").JsonValue;
        bonusPoints: number;
        logo: string;
    }>;
    updatePartner(id: string, data: Prisma.LoyaltyPartnerUpdateInput): Promise<{
        id: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        category: string;
        isActive: boolean;
        address: string;
        website: string;
        discount: string;
        discountByLevel: import("@prisma/client/runtime/library").JsonValue;
        bonusPoints: number;
        logo: string;
    }>;
    deletePartner(id: string): Promise<{
        id: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        category: string;
        isActive: boolean;
        address: string;
        website: string;
        discount: string;
        discountByLevel: import("@prisma/client/runtime/library").JsonValue;
        bonusPoints: number;
        logo: string;
    }>;
    recordPartnerSpending(data: {
        userId: string;
        partnerId: string;
        amountFCFA: number;
        pointsEarned: number;
        description: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        description: string;
        pointsEarned: number;
        amountFCFA: number;
        partnerId: string;
    }>;
    getPartnerSpendingStats(filters?: {
        page?: number;
        limit?: number;
        partnerId?: string;
    }): Promise<{
        items: ({
            partner: {
                name: string;
                category: string;
            };
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            description: string;
            pointsEarned: number;
            amountFCFA: number;
            partnerId: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        totals: {
            amountFCFA: number | null;
            pointsEarned: number | null;
        };
    }>;
    getCommunityPosts(filters?: {
        status?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            engagements: {
                id: string;
                createdAt: Date;
                type: string;
                userId: string;
                content: string;
                postId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            title: string;
            image: string;
            isFeatured: boolean;
            eventId: string | null;
            content: string;
            authorId: string;
            likesCount: number;
            commentsCount: number;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createCommunityPost(data: {
        authorId: string;
        title: string;
        content: string;
        image?: string;
        eventId?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        image: string;
        isFeatured: boolean;
        eventId: string | null;
        content: string;
        authorId: string;
        likesCount: number;
        commentsCount: number;
    }>;
    updateCommunityPost(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        image: string;
        isFeatured: boolean;
        eventId: string | null;
        content: string;
        authorId: string;
        likesCount: number;
        commentsCount: number;
    }>;
    deleteCommunityPost(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        image: string;
        isFeatured: boolean;
        eventId: string | null;
        content: string;
        authorId: string;
        likesCount: number;
        commentsCount: number;
    }>;
    getCommunityPostById(id: string): Promise<({
        engagements: {
            id: string;
            createdAt: Date;
            type: string;
            userId: string;
            content: string;
            postId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        image: string;
        isFeatured: boolean;
        eventId: string | null;
        content: string;
        authorId: string;
        likesCount: number;
        commentsCount: number;
    }) | null>;
    engagePost(userId: string, postId: string, type: "like" | "comment", content?: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        userId: string;
        content: string;
        postId: string;
    }>;
    hasEngaged(userId: string, postId: string, type: string): Promise<boolean>;
    getBadgesForUser(userId: string): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        badgeType: string;
        earnedAt: Date;
    }[]>;
    awardBadge(data: {
        userId: string;
        badgeType: string;
        title: string;
        description: string;
    }): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        badgeType: string;
        earnedAt: Date;
    }>;
    getAllBadges(filters?: {
        page?: number;
        limit?: number;
    }): Promise<{
        items: {
            id: string;
            userId: string;
            title: string;
            description: string;
            badgeType: string;
            earnedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getActiveBonuses(actionType?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        value: number;
        actionType: string | null;
        bonusType: string;
        minLevel: string | null;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        startDate: Date;
        endDate: Date;
    }[]>;
    getAllBonuses(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        value: number;
        actionType: string | null;
        bonusType: string;
        minLevel: string | null;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        startDate: Date;
        endDate: Date;
    }[]>;
    createBonus(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        value: number;
        actionType: string | null;
        bonusType: string;
        minLevel: string | null;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        startDate: Date;
        endDate: Date;
    }>;
    updateBonus(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        value: number;
        actionType: string | null;
        bonusType: string;
        minLevel: string | null;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        startDate: Date;
        endDate: Date;
    }>;
    deleteBonus(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        value: number;
        actionType: string | null;
        bonusType: string;
        minLevel: string | null;
        conditions: import("@prisma/client/runtime/library").JsonValue;
        startDate: Date;
        endDate: Date;
    }>;
    logVipAccess(data: {
        userId: string;
        eventId: string;
        accessType: string;
        ticketId?: string;
    }): Promise<{
        id: string;
        userId: string;
        eventId: string;
        ticketId: string | null;
        accessType: string;
        grantedAt: Date;
    }>;
    getVipAccessLogs(filters?: {
        eventId?: string;
        userId?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: {
            id: string;
            userId: string;
            eventId: string;
            ticketId: string | null;
            accessType: string;
            grantedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getLeaderboard(limit?: number): Promise<({
        user: {
            id: string;
            name: string;
        };
    } & {
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    })[]>;
    getAdminStats(): Promise<{
        totalUsers: number;
        pointsDistributed: number;
        pointsUsed: number;
        activeUsers: number;
        levelCounts: (Prisma.PickEnumerable<Prisma.LoyaltyProfileGroupByOutputType, "level"[]> & {
            _count: {
                id: number;
            };
        })[];
        communityStats: (Prisma.PickEnumerable<Prisma.CommunityPostGroupByOutputType, "status"[]> & {
            _count: {
                id: number;
            };
        })[];
        partnerSpendingTotal: number;
        partnerPointsTotal: number;
        partnerTransactions: number;
    }>;
    getFraudAlerts(): Promise<{
        shareAbuse: {
            id: string;
            date: string;
            userId: string;
            count: number;
        }[];
        recentManual: ({
            profile: {
                user: {
                    email: string;
                    name: string;
                };
                userId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
            action: PointsActionType;
            points: number;
            profileId: string;
        })[];
    }>;
    getAllProfiles(filters?: {
        search?: string;
        level?: LoyaltyLevel;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            level: LoyaltyLevel;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            referralCode: string;
            points: number;
            pointsEarned: number;
            pointsSpent: number;
            eventsAttended: number;
            totalSpent: number;
            referredById: string | null;
            referralSignupBonusPaid: boolean;
            referralFirstEventBonusPaid: boolean;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    manualAdjustPoints(profileId: string, delta: number, description: string, adminId: string): Promise<{
        level: LoyaltyLevel;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        referralCode: string;
        points: number;
        pointsEarned: number;
        pointsSpent: number;
        eventsAttended: number;
        totalSpent: number;
        referredById: string | null;
        referralSignupBonusPaid: boolean;
        referralFirstEventBonusPaid: boolean;
    }>;
    getTodayShareCount(userId: string): Promise<number>;
    incrementShareCount(userId: string): Promise<{
        id: string;
        date: string;
        userId: string;
        count: number;
    }>;
};
//# sourceMappingURL=loyalty.repository.d.ts.map