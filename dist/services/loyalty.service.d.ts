export declare const POINT_VALUE_FCFA = 20;
export declare const loyaltyService: {
    getMyProfile(userId: string): Promise<{
        badges: {
            id: string;
            userId: string;
            title: string;
            description: string;
            badgeType: string;
            earnedAt: Date;
        }[];
        id: any;
        userId: any;
        name: any;
        email: any;
        points: any;
        pointsEarned: any;
        pointsSpent: any;
        level: any;
        eventsAttended: any;
        totalSpent: any;
        referralCode: any;
        referrals: any;
        createdAt: any;
    }>;
    getMyLedger(userId: string, page: number, limit: number): Promise<{
        items: {
            id: string;
            createdAt: Date;
            description: string;
            balanceBefore: number;
            balanceAfter: number;
            referenceId: string | null;
            referenceType: string | null;
            action: import("../generated/prisma/enums.js").PointsActionType;
            points: number;
            profileId: string;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    onTicketPurchase(userId: string, amountFCFA: number, ticketId: string): Promise<void>;
    onEventAttendance(userId: string, eventId: string): Promise<void>;
    onEventShare(userId: string, eventId: string): Promise<{
        points: number;
    }>;
    applyReferralCode(newUserId: string, referralCode: string): Promise<{
        message: string;
        pointsGiven: number;
    }>;
    simulatePointsPayment(userId: string, amountFCFA: number): Promise<{
        pointsAvailable: number;
        pointsUsable: number;
        discountFCFA: number;
        amountToPay: number;
        amountFCFA: number;
        pointValueFCFA: number;
        maxPointsUsable: number;
    }>;
    applyPointsPayment(userId: string, pointsToUse: number, ticketId: string, amountFCFA: number): Promise<{
        pointsUsed: number;
        discountFCFA: number;
        amountToPay: number;
    }>;
    getVipBenefits(userId: string): Promise<{
        level: string;
        points: number;
        nextLevel: string | null | undefined;
        pointsToNext: number;
        benefits: {
            partnerDiscounts: string[];
            eventAccess: string[];
            exclusivePerks: string[];
        } | undefined;
    }>;
    getAmbassadorStatus(userId: string): Promise<{
        ambassadorTier: "Bronze" | "Silver" | "Gold" | "Platinum";
        score: number;
        stats: {
            postCount: number;
            referralCount: number;
            eventsAttended: number;
            vipLogs: number;
        };
        badges: {
            id: string;
            userId: string;
            title: string;
            description: string;
            badgeType: string;
            earnedAt: Date;
        }[];
        level: import("../generated/prisma/enums.js").LoyaltyLevel;
        points: number;
    }>;
    getRewards(): Promise<{
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
    redeemReward(userId: string, rewardId: string): Promise<{
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
    getMissionsForUser(userId: string): Promise<{
        progress: number;
        completed: boolean;
        rewardPaid: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: import("../generated/prisma/enums.js").PointsActionType;
        target: number;
    }[]>;
    getLeaderboard(userId: string): Promise<{
        rank: number;
        userId: string;
        name: string;
        points: number;
        level: import("../generated/prisma/enums.js").LoyaltyLevel;
        isCurrentUser: boolean;
    }[]>;
    getPublicPartners(): Promise<{
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
    recordPartnerSpending(userId: string, partnerId: string, amountFCFA: number, description: string): Promise<{
        pointsEarned: number;
        partner: string;
    }>;
    getPartnerDiscountForUser(userId: string, partnerId: string): Promise<{
        partner: {
            id: string;
            name: string;
            category: string;
        };
        userLevel: import("../generated/prisma/enums.js").LoyaltyLevel;
        discount: string;
        bonusPoints: number;
    }>;
    getPartnerSpendingStats(filters: any): Promise<{
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
    getCommunityPosts(filters: {
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
    createCommunityPost(userId: string, data: {
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
    engageCommunityPost(userId: string, postId: string, type: "like" | "comment", content?: string): Promise<{
        pointsEarned: number;
    }>;
    moderateCommunityPost(postId: string, status: "approved" | "rejected"): Promise<{
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
    getMyBadges(userId: string): Promise<{
        id: string;
        userId: string;
        title: string;
        description: string;
        badgeType: string;
        earnedAt: Date;
    }[]>;
    getActiveBonuses(): Promise<{
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
    grantVipAccess(userId: string, eventId: string, accessType: string, ticketId?: string): Promise<{
        id: string;
        userId: string;
        eventId: string;
        ticketId: string | null;
        accessType: string;
        grantedAt: Date;
    }>;
    getVipAccessLogs(filters: any): Promise<{
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
    getAdminStats(): Promise<{
        totalUsers: number;
        pointsDistributed: number;
        pointsUsed: number;
        activeUsers: number;
        levelCounts: (import("../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../generated/prisma/models.js").LoyaltyProfileGroupByOutputType, "level"[]> & {
            _count: {
                id: number;
            };
        })[];
        communityStats: (import("../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../generated/prisma/models.js").CommunityPostGroupByOutputType, "status"[]> & {
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
            action: import("../generated/prisma/enums.js").PointsActionType;
            points: number;
            profileId: string;
        })[];
    }>;
    getAllUsers(filters: {
        search?: string;
        level?: any;
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
            level: import("../generated/prisma/enums.js").LoyaltyLevel;
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
    getAllLedger(filters: {
        page?: number;
        limit?: number;
        action?: any;
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
            action: import("../generated/prisma/enums.js").PointsActionType;
            points: number;
            profileId: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    manualAdjustPoints(profileId: string, delta: number, description: string, adminId: string): Promise<{
        level: import("../generated/prisma/enums.js").LoyaltyLevel;
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
    getAdminRewards(): Promise<{
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
    createReward(data: any): Promise<{
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
    updateReward(id: string, data: any): Promise<{
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
    getAdminPartners(): Promise<{
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
    createPartner(data: any): Promise<{
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
    updatePartner(id: string, data: any): Promise<{
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
    getAdminMissions(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: import("../generated/prisma/enums.js").PointsActionType;
        target: number;
    }[]>;
    createMission(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: import("../generated/prisma/enums.js").PointsActionType;
        target: number;
    }>;
    updateMission(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        isActive: boolean;
        points: number;
        actionType: import("../generated/prisma/enums.js").PointsActionType;
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
        actionType: import("../generated/prisma/enums.js").PointsActionType;
        target: number;
    }>;
    getAdminBadges(filters: any): Promise<{
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
    getAdminCommunityPosts(filters: any): Promise<{
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
    adminUpdateCommunityPost(postId: string, data: any): Promise<{
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
    adminDeleteCommunityPost(postId: string): Promise<{
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
    exportLedgerCSV(filters: any): Promise<string>;
    exportPartnerSpendingCSV(): Promise<string>;
};
//# sourceMappingURL=loyalty.service.d.ts.map