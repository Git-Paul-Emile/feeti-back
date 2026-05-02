import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly UserFavorite: "UserFavorite";
    readonly Event: "Event";
    readonly LiveEventConsentRequest: "LiveEventConsentRequest";
    readonly FeaturedRequest: "FeaturedRequest";
    readonly Category: "Category";
    readonly Country: "Country";
    readonly DeliveryZone: "DeliveryZone";
    readonly City: "City";
    readonly DealCategory: "DealCategory";
    readonly Deal: "Deal";
    readonly LeisureCategory: "LeisureCategory";
    readonly LeisureItem: "LeisureItem";
    readonly LeisureFavorite: "LeisureFavorite";
    readonly Ticket: "Ticket";
    readonly DeliveryAddress: "DeliveryAddress";
    readonly EventController: "EventController";
    readonly BlogCategory: "BlogCategory";
    readonly BlogPost: "BlogPost";
    readonly Transaction: "Transaction";
    readonly TransactionStatusHistory: "TransactionStatusHistory";
    readonly Wallet: "Wallet";
    readonly WalletLedger: "WalletLedger";
    readonly Payout: "Payout";
    readonly PayoutTransaction: "PayoutTransaction";
    readonly PayoutStatusHistory: "PayoutStatusHistory";
    readonly AuditLog: "AuditLog";
    readonly IdempotencyKey: "IdempotencyKey";
    readonly PlatformSetting: "PlatformSetting";
    readonly LoyaltyProfile: "LoyaltyProfile";
    readonly PointsLedger: "PointsLedger";
    readonly LoyaltyReward: "LoyaltyReward";
    readonly LoyaltyRedemption: "LoyaltyRedemption";
    readonly LoyaltyMission: "LoyaltyMission";
    readonly MissionProgress: "MissionProgress";
    readonly LoyaltyPartner: "LoyaltyPartner";
    readonly DailyShareRecord: "DailyShareRecord";
    readonly PartnerSpending: "PartnerSpending";
    readonly CommunityPost: "CommunityPost";
    readonly CommunityEngagement: "CommunityEngagement";
    readonly AmbassadorBadge: "AmbassadorBadge";
    readonly LoyaltyBonus: "LoyaltyBonus";
    readonly EventZone: "EventZone";
    readonly ParticipantCategory: "ParticipantCategory";
    readonly ZoneAccessRight: "ZoneAccessRight";
    readonly AccessBadge: "AccessBadge";
    readonly AccessLog: "AccessLog";
    readonly SuspectBadgeReport: "SuspectBadgeReport";
    readonly VipAccessLog: "VipAccessLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly interests: "interests";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserFavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly eventId: "eventId";
    readonly createdAt: "createdAt";
};
export type UserFavoriteScalarFieldEnum = (typeof UserFavoriteScalarFieldEnum)[keyof typeof UserFavoriteScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly date: "date";
    readonly time: "time";
    readonly location: "location";
    readonly image: "image";
    readonly price: "price";
    readonly vipPrice: "vipPrice";
    readonly ticketTypes: "ticketTypes";
    readonly currency: "currency";
    readonly category: "category";
    readonly maxAttendees: "maxAttendees";
    readonly attendees: "attendees";
    readonly duration: "duration";
    readonly salesBlocked: "salesBlocked";
    readonly isLive: "isLive";
    readonly eventType: "eventType";
    readonly isFeatured: "isFeatured";
    readonly isFavorite: "isFavorite";
    readonly streamUrl: "streamUrl";
    readonly videoUrl: "videoUrl";
    readonly status: "status";
    readonly countryCode: "countryCode";
    readonly organizerId: "organizerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly promotionType: "promotionType";
    readonly promotionStatus: "promotionStatus";
    readonly promotionStartDate: "promotionStartDate";
    readonly promotionEndDate: "promotionEndDate";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const LiveEventConsentRequestScalarFieldEnum: {
    readonly id: "id";
    readonly organizerEmail: "organizerEmail";
    readonly eventName: "eventName";
    readonly eventType: "eventType";
    readonly consentGiven: "consentGiven";
    readonly pdfRequestedAt: "pdfRequestedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LiveEventConsentRequestScalarFieldEnum = (typeof LiveEventConsentRequestScalarFieldEnum)[keyof typeof LiveEventConsentRequestScalarFieldEnum];
export declare const FeaturedRequestScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly organizerId: "organizerId";
    readonly status: "status";
    readonly message: "message";
    readonly adminNote: "adminNote";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeaturedRequestScalarFieldEnum = (typeof FeaturedRequestScalarFieldEnum)[keyof typeof FeaturedRequestScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly icon: "icon";
    readonly createdAt: "createdAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const CountryScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly flag: "flag";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const DeliveryZoneScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly countryCode: "countryCode";
    readonly fee: "fee";
    readonly currency: "currency";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DeliveryZoneScalarFieldEnum = (typeof DeliveryZoneScalarFieldEnum)[keyof typeof DeliveryZoneScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly countryCode: "countryCode";
    readonly zoneId: "zoneId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const DealCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly icon: "icon";
    readonly createdAt: "createdAt";
};
export type DealCategoryScalarFieldEnum = (typeof DealCategoryScalarFieldEnum)[keyof typeof DealCategoryScalarFieldEnum];
export declare const DealScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly originalPrice: "originalPrice";
    readonly discountedPrice: "discountedPrice";
    readonly discount: "discount";
    readonly validUntil: "validUntil";
    readonly location: "location";
    readonly image: "image";
    readonly isPopular: "isPopular";
    readonly merchantName: "merchantName";
    readonly tags: "tags";
    readonly availableQuantity: "availableQuantity";
    readonly maxQuantity: "maxQuantity";
    readonly rating: "rating";
    readonly reviewCount: "reviewCount";
    readonly contactPhone: "contactPhone";
    readonly contactEmail: "contactEmail";
    readonly contactWebsite: "contactWebsite";
    readonly status: "status";
    readonly countryCode: "countryCode";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DealScalarFieldEnum = (typeof DealScalarFieldEnum)[keyof typeof DealScalarFieldEnum];
export declare const LeisureCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
};
export type LeisureCategoryScalarFieldEnum = (typeof LeisureCategoryScalarFieldEnum)[keyof typeof LeisureCategoryScalarFieldEnum];
export declare const LeisureItemScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly categorySlug: "categorySlug";
    readonly location: "location";
    readonly address: "address";
    readonly phone: "phone";
    readonly website: "website";
    readonly priceRange: "priceRange";
    readonly openingHours: "openingHours";
    readonly image: "image";
    readonly rating: "rating";
    readonly reviewCount: "reviewCount";
    readonly features: "features";
    readonly tags: "tags";
    readonly status: "status";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly countryCode: "countryCode";
    readonly isFeatured: "isFeatured";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly leisureOfferType: "leisureOfferType";
    readonly leisurePackType: "leisurePackType";
    readonly leisurePackStatus: "leisurePackStatus";
    readonly leisurePackStartDate: "leisurePackStartDate";
    readonly leisurePackEndDate: "leisurePackEndDate";
};
export type LeisureItemScalarFieldEnum = (typeof LeisureItemScalarFieldEnum)[keyof typeof LeisureItemScalarFieldEnum];
export declare const LeisureFavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly leisureItemId: "leisureItemId";
    readonly createdAt: "createdAt";
};
export type LeisureFavoriteScalarFieldEnum = (typeof LeisureFavoriteScalarFieldEnum)[keyof typeof LeisureFavoriteScalarFieldEnum];
export declare const TicketScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly userId: "userId";
    readonly category: "category";
    readonly price: "price";
    readonly currency: "currency";
    readonly holderName: "holderName";
    readonly holderEmail: "holderEmail";
    readonly qrData: "qrData";
    readonly status: "status";
    readonly orderId: "orderId";
    readonly usedAt: "usedAt";
    readonly scannedById: "scannedById";
    readonly deliveryMethod: "deliveryMethod";
    readonly deliveryStatus: "deliveryStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];
export declare const DeliveryAddressScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly recipientName: "recipientName";
    readonly recipientPhone: "recipientPhone";
    readonly zoneId: "zoneId";
    readonly additionalInfo: "additionalInfo";
    readonly deliveryFee: "deliveryFee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DeliveryAddressScalarFieldEnum = (typeof DeliveryAddressScalarFieldEnum)[keyof typeof DeliveryAddressScalarFieldEnum];
export declare const EventControllerScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly controllerId: "controllerId";
    readonly assignedAt: "assignedAt";
};
export type EventControllerScalarFieldEnum = (typeof EventControllerScalarFieldEnum)[keyof typeof EventControllerScalarFieldEnum];
export declare const BlogCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly icon: "icon";
    readonly createdAt: "createdAt";
};
export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum];
export declare const BlogPostScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly excerpt: "excerpt";
    readonly content: "content";
    readonly featuredImage: "featuredImage";
    readonly categorySlug: "categorySlug";
    readonly tags: "tags";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly views: "views";
    readonly comments: "comments";
    readonly readTime: "readTime";
    readonly authorId: "authorId";
    readonly publishDate: "publishDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly idempotencyKey: "idempotencyKey";
    readonly eventId: "eventId";
    readonly organizerId: "organizerId";
    readonly buyerId: "buyerId";
    readonly ticketId: "ticketId";
    readonly montantTTC: "montantTTC";
    readonly montantHT: "montantHT";
    readonly tva: "tva";
    readonly commission: "commission";
    readonly netOrganisateur: "netOrganisateur";
    readonly devise: "devise";
    readonly tauxTVA: "tauxTVA";
    readonly tauxCommission: "tauxCommission";
    readonly status: "status";
    readonly paymentMethod: "paymentMethod";
    readonly paymentProviderTransactionId: "paymentProviderTransactionId";
    readonly metadata: "metadata";
    readonly refundAmount: "refundAmount";
    readonly refundReason: "refundReason";
    readonly checksum: "checksum";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly completedAt: "completedAt";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const TransactionStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly transactionId: "transactionId";
    readonly fromStatus: "fromStatus";
    readonly toStatus: "toStatus";
    readonly reason: "reason";
    readonly actorId: "actorId";
    readonly actorRole: "actorRole";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type TransactionStatusHistoryScalarFieldEnum = (typeof TransactionStatusHistoryScalarFieldEnum)[keyof typeof TransactionStatusHistoryScalarFieldEnum];
export declare const WalletScalarFieldEnum: {
    readonly id: "id";
    readonly organizerId: "organizerId";
    readonly soldeTotal: "soldeTotal";
    readonly soldeDisponible: "soldeDisponible";
    readonly soldeEnAttente: "soldeEnAttente";
    readonly soldeRetirable: "soldeRetirable";
    readonly totalRetire: "totalRetire";
    readonly totalEnLitige: "totalEnLitige";
    readonly devise: "devise";
    readonly version: "version";
    readonly checksum: "checksum";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];
export declare const WalletLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly walletId: "walletId";
    readonly entryType: "entryType";
    readonly operationType: "operationType";
    readonly amount: "amount";
    readonly balanceBefore: "balanceBefore";
    readonly balanceAfter: "balanceAfter";
    readonly description: "description";
    readonly referenceId: "referenceId";
    readonly referenceType: "referenceType";
    readonly actorId: "actorId";
    readonly metadata: "metadata";
    readonly checksum: "checksum";
    readonly createdAt: "createdAt";
};
export type WalletLedgerScalarFieldEnum = (typeof WalletLedgerScalarFieldEnum)[keyof typeof WalletLedgerScalarFieldEnum];
export declare const PayoutScalarFieldEnum: {
    readonly id: "id";
    readonly organizerId: "organizerId";
    readonly walletId: "walletId";
    readonly montant: "montant";
    readonly devise: "devise";
    readonly methodePaiement: "methodePaiement";
    readonly referenceBancaire: "referenceBancaire";
    readonly statut: "statut";
    readonly approvedById: "approvedById";
    readonly processedById: "processedById";
    readonly notes: "notes";
    readonly attachments: "attachments";
    readonly initiatedAt: "initiatedAt";
    readonly approvedAt: "approvedAt";
    readonly processedAt: "processedAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum];
export declare const PayoutTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly payoutId: "payoutId";
    readonly transactionId: "transactionId";
    readonly createdAt: "createdAt";
};
export type PayoutTransactionScalarFieldEnum = (typeof PayoutTransactionScalarFieldEnum)[keyof typeof PayoutTransactionScalarFieldEnum];
export declare const PayoutStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly payoutId: "payoutId";
    readonly fromStatus: "fromStatus";
    readonly toStatus: "toStatus";
    readonly reason: "reason";
    readonly actorId: "actorId";
    readonly actorRole: "actorRole";
    readonly createdAt: "createdAt";
};
export type PayoutStatusHistoryScalarFieldEnum = (typeof PayoutStatusHistoryScalarFieldEnum)[keyof typeof PayoutStatusHistoryScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly userRole: "userRole";
    readonly action: "action";
    readonly resource: "resource";
    readonly resourceId: "resourceId";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly dataBefore: "dataBefore";
    readonly dataAfter: "dataAfter";
    readonly metadata: "metadata";
    readonly checksum: "checksum";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const IdempotencyKeyScalarFieldEnum: {
    readonly key: "key";
    readonly resource: "resource";
    readonly resourceId: "resourceId";
    readonly response: "response";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum];
export declare const PlatformSettingScalarFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly updatedAt: "updatedAt";
    readonly updatedBy: "updatedBy";
};
export type PlatformSettingScalarFieldEnum = (typeof PlatformSettingScalarFieldEnum)[keyof typeof PlatformSettingScalarFieldEnum];
export declare const LoyaltyProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly points: "points";
    readonly pointsEarned: "pointsEarned";
    readonly pointsSpent: "pointsSpent";
    readonly level: "level";
    readonly eventsAttended: "eventsAttended";
    readonly totalSpent: "totalSpent";
    readonly referralCode: "referralCode";
    readonly referredById: "referredById";
    readonly referralSignupBonusPaid: "referralSignupBonusPaid";
    readonly referralFirstEventBonusPaid: "referralFirstEventBonusPaid";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyProfileScalarFieldEnum = (typeof LoyaltyProfileScalarFieldEnum)[keyof typeof LoyaltyProfileScalarFieldEnum];
export declare const PointsLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly action: "action";
    readonly points: "points";
    readonly balanceBefore: "balanceBefore";
    readonly balanceAfter: "balanceAfter";
    readonly description: "description";
    readonly referenceId: "referenceId";
    readonly referenceType: "referenceType";
    readonly createdAt: "createdAt";
};
export type PointsLedgerScalarFieldEnum = (typeof PointsLedgerScalarFieldEnum)[keyof typeof PointsLedgerScalarFieldEnum];
export declare const LoyaltyRewardScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly points: "points";
    readonly category: "category";
    readonly image: "image";
    readonly stock: "stock";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyRewardScalarFieldEnum = (typeof LoyaltyRewardScalarFieldEnum)[keyof typeof LoyaltyRewardScalarFieldEnum];
export declare const LoyaltyRedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly rewardId: "rewardId";
    readonly points: "points";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyRedemptionScalarFieldEnum = (typeof LoyaltyRedemptionScalarFieldEnum)[keyof typeof LoyaltyRedemptionScalarFieldEnum];
export declare const LoyaltyMissionScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly points: "points";
    readonly actionType: "actionType";
    readonly target: "target";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyMissionScalarFieldEnum = (typeof LoyaltyMissionScalarFieldEnum)[keyof typeof LoyaltyMissionScalarFieldEnum];
export declare const MissionProgressScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly missionId: "missionId";
    readonly progress: "progress";
    readonly completed: "completed";
    readonly rewardPaid: "rewardPaid";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MissionProgressScalarFieldEnum = (typeof MissionProgressScalarFieldEnum)[keyof typeof MissionProgressScalarFieldEnum];
export declare const LoyaltyPartnerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly category: "category";
    readonly discount: "discount";
    readonly discountByLevel: "discountByLevel";
    readonly bonusPoints: "bonusPoints";
    readonly logo: "logo";
    readonly address: "address";
    readonly phone: "phone";
    readonly website: "website";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyPartnerScalarFieldEnum = (typeof LoyaltyPartnerScalarFieldEnum)[keyof typeof LoyaltyPartnerScalarFieldEnum];
export declare const DailyShareRecordScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly date: "date";
    readonly count: "count";
};
export type DailyShareRecordScalarFieldEnum = (typeof DailyShareRecordScalarFieldEnum)[keyof typeof DailyShareRecordScalarFieldEnum];
export declare const PartnerSpendingScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly partnerId: "partnerId";
    readonly amountFCFA: "amountFCFA";
    readonly pointsEarned: "pointsEarned";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type PartnerSpendingScalarFieldEnum = (typeof PartnerSpendingScalarFieldEnum)[keyof typeof PartnerSpendingScalarFieldEnum];
export declare const CommunityPostScalarFieldEnum: {
    readonly id: "id";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly content: "content";
    readonly image: "image";
    readonly eventId: "eventId";
    readonly likesCount: "likesCount";
    readonly commentsCount: "commentsCount";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum];
export declare const CommunityEngagementScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly postId: "postId";
    readonly type: "type";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type CommunityEngagementScalarFieldEnum = (typeof CommunityEngagementScalarFieldEnum)[keyof typeof CommunityEngagementScalarFieldEnum];
export declare const AmbassadorBadgeScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly badgeType: "badgeType";
    readonly title: "title";
    readonly description: "description";
    readonly earnedAt: "earnedAt";
};
export type AmbassadorBadgeScalarFieldEnum = (typeof AmbassadorBadgeScalarFieldEnum)[keyof typeof AmbassadorBadgeScalarFieldEnum];
export declare const LoyaltyBonusScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly bonusType: "bonusType";
    readonly value: "value";
    readonly actionType: "actionType";
    readonly minLevel: "minLevel";
    readonly conditions: "conditions";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyBonusScalarFieldEnum = (typeof LoyaltyBonusScalarFieldEnum)[keyof typeof LoyaltyBonusScalarFieldEnum];
export declare const EventZoneScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly color: "color";
    readonly isActive: "isActive";
    readonly maxCapacity: "maxCapacity";
    readonly currentCount: "currentCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventZoneScalarFieldEnum = (typeof EventZoneScalarFieldEnum)[keyof typeof EventZoneScalarFieldEnum];
export declare const ParticipantCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly name: "name";
    readonly description: "description";
    readonly color: "color";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParticipantCategoryScalarFieldEnum = (typeof ParticipantCategoryScalarFieldEnum)[keyof typeof ParticipantCategoryScalarFieldEnum];
export declare const ZoneAccessRightScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly zoneId: "zoneId";
    readonly accessLevel: "accessLevel";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ZoneAccessRightScalarFieldEnum = (typeof ZoneAccessRightScalarFieldEnum)[keyof typeof ZoneAccessRightScalarFieldEnum];
export declare const AccessBadgeScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly ticketId: "ticketId";
    readonly categoryId: "categoryId";
    readonly holderName: "holderName";
    readonly holderEmail: "holderEmail";
    readonly qrCode: "qrCode";
    readonly qrSecret: "qrSecret";
    readonly status: "status";
    readonly sentAt: "sentAt";
    readonly revokedAt: "revokedAt";
    readonly revokedById: "revokedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccessBadgeScalarFieldEnum = (typeof AccessBadgeScalarFieldEnum)[keyof typeof AccessBadgeScalarFieldEnum];
export declare const AccessLogScalarFieldEnum: {
    readonly id: "id";
    readonly badgeId: "badgeId";
    readonly zoneId: "zoneId";
    readonly eventId: "eventId";
    readonly scannedById: "scannedById";
    readonly result: "result";
    readonly refusalReason: "refusalReason";
    readonly offlineSync: "offlineSync";
    readonly scannedAt: "scannedAt";
};
export type AccessLogScalarFieldEnum = (typeof AccessLogScalarFieldEnum)[keyof typeof AccessLogScalarFieldEnum];
export declare const SuspectBadgeReportScalarFieldEnum: {
    readonly id: "id";
    readonly badgeId: "badgeId";
    readonly reportedById: "reportedById";
    readonly reason: "reason";
    readonly resolved: "resolved";
    readonly createdAt: "createdAt";
};
export type SuspectBadgeReportScalarFieldEnum = (typeof SuspectBadgeReportScalarFieldEnum)[keyof typeof SuspectBadgeReportScalarFieldEnum];
export declare const VipAccessLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly eventId: "eventId";
    readonly accessType: "accessType";
    readonly ticketId: "ticketId";
    readonly grantedAt: "grantedAt";
};
export type VipAccessLogScalarFieldEnum = (typeof VipAccessLogScalarFieldEnum)[keyof typeof VipAccessLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map