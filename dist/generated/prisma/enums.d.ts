export declare const EventType: {
    readonly PRESENTIEL: "PRESENTIEL";
    readonly STREAMING_LIVE: "STREAMING_LIVE";
    readonly MIXTE: "MIXTE";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
export declare const DeliveryMethod: {
    readonly email: "email";
    readonly physical: "physical";
};
export type DeliveryMethod = (typeof DeliveryMethod)[keyof typeof DeliveryMethod];
export declare const DeliveryStatus: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly shipped: "shipped";
    readonly delivered: "delivered";
    readonly failed: "failed";
};
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
export declare const Role: {
    readonly user: "user";
    readonly organizer: "organizer";
    readonly controller: "controller";
    readonly moderator: "moderator";
    readonly admin: "admin";
    readonly super_admin: "super_admin";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const FeaturedRequestStatus: {
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type FeaturedRequestStatus = (typeof FeaturedRequestStatus)[keyof typeof FeaturedRequestStatus];
export declare const TransactionStatus: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly paid: "paid";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly refunded: "refunded";
    readonly partially_refunded: "partially_refunded";
    readonly disputed: "disputed";
    readonly cancelled: "cancelled";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const PayoutStatus: {
    readonly initiated: "initiated";
    readonly approved: "approved";
    readonly processing: "processing";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly reversed: "reversed";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
export declare const LedgerEntryType: {
    readonly credit: "credit";
    readonly debit: "debit";
};
export type LedgerEntryType = (typeof LedgerEntryType)[keyof typeof LedgerEntryType];
export declare const LedgerOperationType: {
    readonly ticket_purchase: "ticket_purchase";
    readonly refund: "refund";
    readonly payout: "payout";
    readonly dispute_hold: "dispute_hold";
    readonly dispute_release: "dispute_release";
    readonly adjustment: "adjustment";
};
export type LedgerOperationType = (typeof LedgerOperationType)[keyof typeof LedgerOperationType];
export declare const LoyaltyLevel: {
    readonly Mobembo: "Mobembo";
    readonly Elengi: "Elengi";
    readonly Momi: "Momi";
    readonly Mwana: "Mwana";
    readonly Boboto: "Boboto";
};
export type LoyaltyLevel = (typeof LoyaltyLevel)[keyof typeof LoyaltyLevel];
export declare const PointsActionType: {
    readonly ticket_purchase: "ticket_purchase";
    readonly event_attendance: "event_attendance";
    readonly event_share: "event_share";
    readonly referral_signup: "referral_signup";
    readonly referral_first_event: "referral_first_event";
    readonly mission_complete: "mission_complete";
    readonly manual_adjustment: "manual_adjustment";
    readonly reward_redemption: "reward_redemption";
    readonly partner_spending: "partner_spending";
    readonly community_post: "community_post";
    readonly community_engagement: "community_engagement";
    readonly ambassador_bonus: "ambassador_bonus";
    readonly activity_bonus: "activity_bonus";
};
export type PointsActionType = (typeof PointsActionType)[keyof typeof PointsActionType];
export declare const ZoneAccessLevel: {
    readonly OUI: "OUI";
    readonly NON: "NON";
    readonly COND: "COND";
};
export type ZoneAccessLevel = (typeof ZoneAccessLevel)[keyof typeof ZoneAccessLevel];
export declare const BadgeStatus: {
    readonly active: "active";
    readonly revoked: "revoked";
    readonly expired: "expired";
};
export type BadgeStatus = (typeof BadgeStatus)[keyof typeof BadgeStatus];
export declare const AccessResult: {
    readonly granted: "granted";
    readonly denied: "denied";
    readonly conditional: "conditional";
};
export type AccessResult = (typeof AccessResult)[keyof typeof AccessResult];
//# sourceMappingURL=enums.d.ts.map