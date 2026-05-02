import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userFavorite`: Exposes CRUD operations for the **UserFavorite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserFavorites
      * const userFavorites = await prisma.userFavorite.findMany()
      * ```
      */
    get userFavorite(): Prisma.UserFavoriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.event.findMany()
      * ```
      */
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.liveEventConsentRequest`: Exposes CRUD operations for the **LiveEventConsentRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LiveEventConsentRequests
      * const liveEventConsentRequests = await prisma.liveEventConsentRequest.findMany()
      * ```
      */
    get liveEventConsentRequest(): Prisma.LiveEventConsentRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.featuredRequest`: Exposes CRUD operations for the **FeaturedRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FeaturedRequests
      * const featuredRequests = await prisma.featuredRequest.findMany()
      * ```
      */
    get featuredRequest(): Prisma.FeaturedRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.country`: Exposes CRUD operations for the **Country** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Countries
      * const countries = await prisma.country.findMany()
      * ```
      */
    get country(): Prisma.CountryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deliveryZone`: Exposes CRUD operations for the **DeliveryZone** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeliveryZones
      * const deliveryZones = await prisma.deliveryZone.findMany()
      * ```
      */
    get deliveryZone(): Prisma.DeliveryZoneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.city`: Exposes CRUD operations for the **City** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cities
      * const cities = await prisma.city.findMany()
      * ```
      */
    get city(): Prisma.CityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dealCategory`: Exposes CRUD operations for the **DealCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DealCategories
      * const dealCategories = await prisma.dealCategory.findMany()
      * ```
      */
    get dealCategory(): Prisma.DealCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deal`: Exposes CRUD operations for the **Deal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Deals
      * const deals = await prisma.deal.findMany()
      * ```
      */
    get deal(): Prisma.DealDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.leisureCategory`: Exposes CRUD operations for the **LeisureCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LeisureCategories
      * const leisureCategories = await prisma.leisureCategory.findMany()
      * ```
      */
    get leisureCategory(): Prisma.LeisureCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.leisureItem`: Exposes CRUD operations for the **LeisureItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LeisureItems
      * const leisureItems = await prisma.leisureItem.findMany()
      * ```
      */
    get leisureItem(): Prisma.LeisureItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.leisureFavorite`: Exposes CRUD operations for the **LeisureFavorite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LeisureFavorites
      * const leisureFavorites = await prisma.leisureFavorite.findMany()
      * ```
      */
    get leisureFavorite(): Prisma.LeisureFavoriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tickets
      * const tickets = await prisma.ticket.findMany()
      * ```
      */
    get ticket(): Prisma.TicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deliveryAddress`: Exposes CRUD operations for the **DeliveryAddress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeliveryAddresses
      * const deliveryAddresses = await prisma.deliveryAddress.findMany()
      * ```
      */
    get deliveryAddress(): Prisma.DeliveryAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventController`: Exposes CRUD operations for the **EventController** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventControllers
      * const eventControllers = await prisma.eventController.findMany()
      * ```
      */
    get eventController(): Prisma.EventControllerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BlogCategories
      * const blogCategories = await prisma.blogCategory.findMany()
      * ```
      */
    get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BlogPosts
      * const blogPosts = await prisma.blogPost.findMany()
      * ```
      */
    get blogPost(): Prisma.BlogPostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Transactions
      * const transactions = await prisma.transaction.findMany()
      * ```
      */
    get transaction(): Prisma.TransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transactionStatusHistory`: Exposes CRUD operations for the **TransactionStatusHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TransactionStatusHistories
      * const transactionStatusHistories = await prisma.transactionStatusHistory.findMany()
      * ```
      */
    get transactionStatusHistory(): Prisma.TransactionStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wallets
      * const wallets = await prisma.wallet.findMany()
      * ```
      */
    get wallet(): Prisma.WalletDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.walletLedger`: Exposes CRUD operations for the **WalletLedger** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WalletLedgers
      * const walletLedgers = await prisma.walletLedger.findMany()
      * ```
      */
    get walletLedger(): Prisma.WalletLedgerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payouts
      * const payouts = await prisma.payout.findMany()
      * ```
      */
    get payout(): Prisma.PayoutDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payoutTransaction`: Exposes CRUD operations for the **PayoutTransaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PayoutTransactions
      * const payoutTransactions = await prisma.payoutTransaction.findMany()
      * ```
      */
    get payoutTransaction(): Prisma.PayoutTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payoutStatusHistory`: Exposes CRUD operations for the **PayoutStatusHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PayoutStatusHistories
      * const payoutStatusHistories = await prisma.payoutStatusHistory.findMany()
      * ```
      */
    get payoutStatusHistory(): Prisma.PayoutStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more IdempotencyKeys
      * const idempotencyKeys = await prisma.idempotencyKey.findMany()
      * ```
      */
    get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.platformSetting`: Exposes CRUD operations for the **PlatformSetting** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PlatformSettings
      * const platformSettings = await prisma.platformSetting.findMany()
      * ```
      */
    get platformSetting(): Prisma.PlatformSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyProfile`: Exposes CRUD operations for the **LoyaltyProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyProfiles
      * const loyaltyProfiles = await prisma.loyaltyProfile.findMany()
      * ```
      */
    get loyaltyProfile(): Prisma.LoyaltyProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pointsLedger`: Exposes CRUD operations for the **PointsLedger** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PointsLedgers
      * const pointsLedgers = await prisma.pointsLedger.findMany()
      * ```
      */
    get pointsLedger(): Prisma.PointsLedgerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyReward`: Exposes CRUD operations for the **LoyaltyReward** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyRewards
      * const loyaltyRewards = await prisma.loyaltyReward.findMany()
      * ```
      */
    get loyaltyReward(): Prisma.LoyaltyRewardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyRedemption`: Exposes CRUD operations for the **LoyaltyRedemption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyRedemptions
      * const loyaltyRedemptions = await prisma.loyaltyRedemption.findMany()
      * ```
      */
    get loyaltyRedemption(): Prisma.LoyaltyRedemptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyMission`: Exposes CRUD operations for the **LoyaltyMission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyMissions
      * const loyaltyMissions = await prisma.loyaltyMission.findMany()
      * ```
      */
    get loyaltyMission(): Prisma.LoyaltyMissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.missionProgress`: Exposes CRUD operations for the **MissionProgress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MissionProgresses
      * const missionProgresses = await prisma.missionProgress.findMany()
      * ```
      */
    get missionProgress(): Prisma.MissionProgressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyPartner`: Exposes CRUD operations for the **LoyaltyPartner** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyPartners
      * const loyaltyPartners = await prisma.loyaltyPartner.findMany()
      * ```
      */
    get loyaltyPartner(): Prisma.LoyaltyPartnerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dailyShareRecord`: Exposes CRUD operations for the **DailyShareRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DailyShareRecords
      * const dailyShareRecords = await prisma.dailyShareRecord.findMany()
      * ```
      */
    get dailyShareRecord(): Prisma.DailyShareRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.partnerSpending`: Exposes CRUD operations for the **PartnerSpending** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PartnerSpendings
      * const partnerSpendings = await prisma.partnerSpending.findMany()
      * ```
      */
    get partnerSpending(): Prisma.PartnerSpendingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CommunityPosts
      * const communityPosts = await prisma.communityPost.findMany()
      * ```
      */
    get communityPost(): Prisma.CommunityPostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.communityEngagement`: Exposes CRUD operations for the **CommunityEngagement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CommunityEngagements
      * const communityEngagements = await prisma.communityEngagement.findMany()
      * ```
      */
    get communityEngagement(): Prisma.CommunityEngagementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ambassadorBadge`: Exposes CRUD operations for the **AmbassadorBadge** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AmbassadorBadges
      * const ambassadorBadges = await prisma.ambassadorBadge.findMany()
      * ```
      */
    get ambassadorBadge(): Prisma.AmbassadorBadgeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyBonus`: Exposes CRUD operations for the **LoyaltyBonus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyBonuses
      * const loyaltyBonuses = await prisma.loyaltyBonus.findMany()
      * ```
      */
    get loyaltyBonus(): Prisma.LoyaltyBonusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventZone`: Exposes CRUD operations for the **EventZone** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventZones
      * const eventZones = await prisma.eventZone.findMany()
      * ```
      */
    get eventZone(): Prisma.EventZoneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.participantCategory`: Exposes CRUD operations for the **ParticipantCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ParticipantCategories
      * const participantCategories = await prisma.participantCategory.findMany()
      * ```
      */
    get participantCategory(): Prisma.ParticipantCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.zoneAccessRight`: Exposes CRUD operations for the **ZoneAccessRight** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ZoneAccessRights
      * const zoneAccessRights = await prisma.zoneAccessRight.findMany()
      * ```
      */
    get zoneAccessRight(): Prisma.ZoneAccessRightDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.accessBadge`: Exposes CRUD operations for the **AccessBadge** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AccessBadges
      * const accessBadges = await prisma.accessBadge.findMany()
      * ```
      */
    get accessBadge(): Prisma.AccessBadgeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.accessLog`: Exposes CRUD operations for the **AccessLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AccessLogs
      * const accessLogs = await prisma.accessLog.findMany()
      * ```
      */
    get accessLog(): Prisma.AccessLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.suspectBadgeReport`: Exposes CRUD operations for the **SuspectBadgeReport** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SuspectBadgeReports
      * const suspectBadgeReports = await prisma.suspectBadgeReport.findMany()
      * ```
      */
    get suspectBadgeReport(): Prisma.SuspectBadgeReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.vipAccessLog`: Exposes CRUD operations for the **VipAccessLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VipAccessLogs
      * const vipAccessLogs = await prisma.vipAccessLog.findMany()
      * ```
      */
    get vipAccessLog(): Prisma.VipAccessLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map