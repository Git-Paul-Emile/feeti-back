import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.2
 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userFavorite" | "event" | "liveEventConsentRequest" | "featuredRequest" | "category" | "country" | "deliveryZone" | "city" | "dealCategory" | "deal" | "leisureCategory" | "leisureItem" | "leisureFavorite" | "ticket" | "deliveryAddress" | "eventController" | "blogCategory" | "blogPost" | "transaction" | "transactionStatusHistory" | "wallet" | "walletLedger" | "payout" | "payoutTransaction" | "payoutStatusHistory" | "auditLog" | "idempotencyKey" | "platformSetting" | "loyaltyProfile" | "pointsLedger" | "loyaltyReward" | "loyaltyRedemption" | "loyaltyMission" | "missionProgress" | "loyaltyPartner" | "dailyShareRecord" | "partnerSpending" | "communityPost" | "communityEngagement" | "ambassadorBadge" | "loyaltyBonus" | "eventZone" | "participantCategory" | "zoneAccessRight" | "accessBadge" | "accessLog" | "suspectBadgeReport" | "vipAccessLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserFavorite: {
            payload: Prisma.$UserFavoritePayload<ExtArgs>;
            fields: Prisma.UserFavoriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFavoriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFavoriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                findFirst: {
                    args: Prisma.UserFavoriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFavoriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                findMany: {
                    args: Prisma.UserFavoriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>[];
                };
                create: {
                    args: Prisma.UserFavoriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                createMany: {
                    args: Prisma.UserFavoriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserFavoriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>[];
                };
                delete: {
                    args: Prisma.UserFavoriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                update: {
                    args: Prisma.UserFavoriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                deleteMany: {
                    args: Prisma.UserFavoriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserFavoriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserFavoriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>[];
                };
                upsert: {
                    args: Prisma.UserFavoriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserFavoritePayload>;
                };
                aggregate: {
                    args: Prisma.UserFavoriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserFavorite>;
                };
                groupBy: {
                    args: Prisma.UserFavoriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserFavoriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserFavoriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserFavoriteCountAggregateOutputType> | number;
                };
            };
        };
        Event: {
            payload: Prisma.$EventPayload<ExtArgs>;
            fields: Prisma.EventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findFirst: {
                    args: Prisma.EventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findMany: {
                    args: Prisma.EventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                create: {
                    args: Prisma.EventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                createMany: {
                    args: Prisma.EventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                delete: {
                    args: Prisma.EventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                update: {
                    args: Prisma.EventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                deleteMany: {
                    args: Prisma.EventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                upsert: {
                    args: Prisma.EventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.EventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        LiveEventConsentRequest: {
            payload: Prisma.$LiveEventConsentRequestPayload<ExtArgs>;
            fields: Prisma.LiveEventConsentRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LiveEventConsentRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LiveEventConsentRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                findFirst: {
                    args: Prisma.LiveEventConsentRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LiveEventConsentRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                findMany: {
                    args: Prisma.LiveEventConsentRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>[];
                };
                create: {
                    args: Prisma.LiveEventConsentRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                createMany: {
                    args: Prisma.LiveEventConsentRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LiveEventConsentRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>[];
                };
                delete: {
                    args: Prisma.LiveEventConsentRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                update: {
                    args: Prisma.LiveEventConsentRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.LiveEventConsentRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LiveEventConsentRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LiveEventConsentRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>[];
                };
                upsert: {
                    args: Prisma.LiveEventConsentRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiveEventConsentRequestPayload>;
                };
                aggregate: {
                    args: Prisma.LiveEventConsentRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLiveEventConsentRequest>;
                };
                groupBy: {
                    args: Prisma.LiveEventConsentRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiveEventConsentRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LiveEventConsentRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiveEventConsentRequestCountAggregateOutputType> | number;
                };
            };
        };
        FeaturedRequest: {
            payload: Prisma.$FeaturedRequestPayload<ExtArgs>;
            fields: Prisma.FeaturedRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeaturedRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeaturedRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                findFirst: {
                    args: Prisma.FeaturedRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeaturedRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                findMany: {
                    args: Prisma.FeaturedRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>[];
                };
                create: {
                    args: Prisma.FeaturedRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                createMany: {
                    args: Prisma.FeaturedRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeaturedRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>[];
                };
                delete: {
                    args: Prisma.FeaturedRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                update: {
                    args: Prisma.FeaturedRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.FeaturedRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeaturedRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeaturedRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>[];
                };
                upsert: {
                    args: Prisma.FeaturedRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturedRequestPayload>;
                };
                aggregate: {
                    args: Prisma.FeaturedRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeaturedRequest>;
                };
                groupBy: {
                    args: Prisma.FeaturedRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeaturedRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeaturedRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeaturedRequestCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Country: {
            payload: Prisma.$CountryPayload<ExtArgs>;
            fields: Prisma.CountryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findFirst: {
                    args: Prisma.CountryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findMany: {
                    args: Prisma.CountryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                create: {
                    args: Prisma.CountryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                createMany: {
                    args: Prisma.CountryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                delete: {
                    args: Prisma.CountryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                update: {
                    args: Prisma.CountryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                upsert: {
                    args: Prisma.CountryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                aggregate: {
                    args: Prisma.CountryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountry>;
                };
                groupBy: {
                    args: Prisma.CountryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryCountAggregateOutputType> | number;
                };
            };
        };
        DeliveryZone: {
            payload: Prisma.$DeliveryZonePayload<ExtArgs>;
            fields: Prisma.DeliveryZoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeliveryZoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                findFirst: {
                    args: Prisma.DeliveryZoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeliveryZoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                findMany: {
                    args: Prisma.DeliveryZoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[];
                };
                create: {
                    args: Prisma.DeliveryZoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                createMany: {
                    args: Prisma.DeliveryZoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeliveryZoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[];
                };
                delete: {
                    args: Prisma.DeliveryZoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                update: {
                    args: Prisma.DeliveryZoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                deleteMany: {
                    args: Prisma.DeliveryZoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeliveryZoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[];
                };
                upsert: {
                    args: Prisma.DeliveryZoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryZonePayload>;
                };
                aggregate: {
                    args: Prisma.DeliveryZoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeliveryZone>;
                };
                groupBy: {
                    args: Prisma.DeliveryZoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryZoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeliveryZoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryZoneCountAggregateOutputType> | number;
                };
            };
        };
        City: {
            payload: Prisma.$CityPayload<ExtArgs>;
            fields: Prisma.CityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findFirst: {
                    args: Prisma.CityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findMany: {
                    args: Prisma.CityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                create: {
                    args: Prisma.CityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                createMany: {
                    args: Prisma.CityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                delete: {
                    args: Prisma.CityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                update: {
                    args: Prisma.CityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                deleteMany: {
                    args: Prisma.CityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                upsert: {
                    args: Prisma.CityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                aggregate: {
                    args: Prisma.CityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCity>;
                };
                groupBy: {
                    args: Prisma.CityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityCountAggregateOutputType> | number;
                };
            };
        };
        DealCategory: {
            payload: Prisma.$DealCategoryPayload<ExtArgs>;
            fields: Prisma.DealCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DealCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DealCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.DealCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DealCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                findMany: {
                    args: Prisma.DealCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>[];
                };
                create: {
                    args: Prisma.DealCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                createMany: {
                    args: Prisma.DealCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DealCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>[];
                };
                delete: {
                    args: Prisma.DealCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                update: {
                    args: Prisma.DealCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.DealCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DealCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DealCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.DealCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.DealCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDealCategory>;
                };
                groupBy: {
                    args: Prisma.DealCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DealCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Deal: {
            payload: Prisma.$DealPayload<ExtArgs>;
            fields: Prisma.DealFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DealFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DealFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                findFirst: {
                    args: Prisma.DealFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DealFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                findMany: {
                    args: Prisma.DealFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                create: {
                    args: Prisma.DealCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                createMany: {
                    args: Prisma.DealCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DealCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                delete: {
                    args: Prisma.DealDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                update: {
                    args: Prisma.DealUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                deleteMany: {
                    args: Prisma.DealDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DealUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DealUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                upsert: {
                    args: Prisma.DealUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                aggregate: {
                    args: Prisma.DealAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeal>;
                };
                groupBy: {
                    args: Prisma.DealGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DealCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealCountAggregateOutputType> | number;
                };
            };
        };
        LeisureCategory: {
            payload: Prisma.$LeisureCategoryPayload<ExtArgs>;
            fields: Prisma.LeisureCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeisureCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeisureCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.LeisureCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeisureCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                findMany: {
                    args: Prisma.LeisureCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>[];
                };
                create: {
                    args: Prisma.LeisureCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                createMany: {
                    args: Prisma.LeisureCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeisureCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>[];
                };
                delete: {
                    args: Prisma.LeisureCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                update: {
                    args: Prisma.LeisureCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.LeisureCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeisureCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeisureCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.LeisureCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.LeisureCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeisureCategory>;
                };
                groupBy: {
                    args: Prisma.LeisureCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeisureCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureCategoryCountAggregateOutputType> | number;
                };
            };
        };
        LeisureItem: {
            payload: Prisma.$LeisureItemPayload<ExtArgs>;
            fields: Prisma.LeisureItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeisureItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeisureItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                findFirst: {
                    args: Prisma.LeisureItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeisureItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                findMany: {
                    args: Prisma.LeisureItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>[];
                };
                create: {
                    args: Prisma.LeisureItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                createMany: {
                    args: Prisma.LeisureItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeisureItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>[];
                };
                delete: {
                    args: Prisma.LeisureItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                update: {
                    args: Prisma.LeisureItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                deleteMany: {
                    args: Prisma.LeisureItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeisureItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeisureItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>[];
                };
                upsert: {
                    args: Prisma.LeisureItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureItemPayload>;
                };
                aggregate: {
                    args: Prisma.LeisureItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeisureItem>;
                };
                groupBy: {
                    args: Prisma.LeisureItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeisureItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureItemCountAggregateOutputType> | number;
                };
            };
        };
        LeisureFavorite: {
            payload: Prisma.$LeisureFavoritePayload<ExtArgs>;
            fields: Prisma.LeisureFavoriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeisureFavoriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeisureFavoriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                findFirst: {
                    args: Prisma.LeisureFavoriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeisureFavoriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                findMany: {
                    args: Prisma.LeisureFavoriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>[];
                };
                create: {
                    args: Prisma.LeisureFavoriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                createMany: {
                    args: Prisma.LeisureFavoriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeisureFavoriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>[];
                };
                delete: {
                    args: Prisma.LeisureFavoriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                update: {
                    args: Prisma.LeisureFavoriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                deleteMany: {
                    args: Prisma.LeisureFavoriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeisureFavoriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeisureFavoriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>[];
                };
                upsert: {
                    args: Prisma.LeisureFavoriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeisureFavoritePayload>;
                };
                aggregate: {
                    args: Prisma.LeisureFavoriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeisureFavorite>;
                };
                groupBy: {
                    args: Prisma.LeisureFavoriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureFavoriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeisureFavoriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeisureFavoriteCountAggregateOutputType> | number;
                };
            };
        };
        Ticket: {
            payload: Prisma.$TicketPayload<ExtArgs>;
            fields: Prisma.TicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                findFirst: {
                    args: Prisma.TicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                findMany: {
                    args: Prisma.TicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>[];
                };
                create: {
                    args: Prisma.TicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                createMany: {
                    args: Prisma.TicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>[];
                };
                delete: {
                    args: Prisma.TicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                update: {
                    args: Prisma.TicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                deleteMany: {
                    args: Prisma.TicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>[];
                };
                upsert: {
                    args: Prisma.TicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketPayload>;
                };
                aggregate: {
                    args: Prisma.TicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTicket>;
                };
                groupBy: {
                    args: Prisma.TicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketCountAggregateOutputType> | number;
                };
            };
        };
        DeliveryAddress: {
            payload: Prisma.$DeliveryAddressPayload<ExtArgs>;
            fields: Prisma.DeliveryAddressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeliveryAddressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeliveryAddressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                findFirst: {
                    args: Prisma.DeliveryAddressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeliveryAddressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                findMany: {
                    args: Prisma.DeliveryAddressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>[];
                };
                create: {
                    args: Prisma.DeliveryAddressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                createMany: {
                    args: Prisma.DeliveryAddressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeliveryAddressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>[];
                };
                delete: {
                    args: Prisma.DeliveryAddressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                update: {
                    args: Prisma.DeliveryAddressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                deleteMany: {
                    args: Prisma.DeliveryAddressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeliveryAddressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeliveryAddressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>[];
                };
                upsert: {
                    args: Prisma.DeliveryAddressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeliveryAddressPayload>;
                };
                aggregate: {
                    args: Prisma.DeliveryAddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeliveryAddress>;
                };
                groupBy: {
                    args: Prisma.DeliveryAddressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryAddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeliveryAddressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveryAddressCountAggregateOutputType> | number;
                };
            };
        };
        EventController: {
            payload: Prisma.$EventControllerPayload<ExtArgs>;
            fields: Prisma.EventControllerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventControllerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventControllerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                findFirst: {
                    args: Prisma.EventControllerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventControllerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                findMany: {
                    args: Prisma.EventControllerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>[];
                };
                create: {
                    args: Prisma.EventControllerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                createMany: {
                    args: Prisma.EventControllerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventControllerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>[];
                };
                delete: {
                    args: Prisma.EventControllerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                update: {
                    args: Prisma.EventControllerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                deleteMany: {
                    args: Prisma.EventControllerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventControllerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventControllerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>[];
                };
                upsert: {
                    args: Prisma.EventControllerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventControllerPayload>;
                };
                aggregate: {
                    args: Prisma.EventControllerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventController>;
                };
                groupBy: {
                    args: Prisma.EventControllerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventControllerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventControllerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventControllerCountAggregateOutputType> | number;
                };
            };
        };
        BlogCategory: {
            payload: Prisma.$BlogCategoryPayload<ExtArgs>;
            fields: Prisma.BlogCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                findMany: {
                    args: Prisma.BlogCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[];
                };
                create: {
                    args: Prisma.BlogCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                createMany: {
                    args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[];
                };
                delete: {
                    args: Prisma.BlogCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                update: {
                    args: Prisma.BlogCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BlogCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.BlogCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.BlogCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlogCategory>;
                };
                groupBy: {
                    args: Prisma.BlogCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BlogCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogCategoryCountAggregateOutputType> | number;
                };
            };
        };
        BlogPost: {
            payload: Prisma.$BlogPostPayload<ExtArgs>;
            fields: Prisma.BlogPostFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlogPostFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                findFirst: {
                    args: Prisma.BlogPostFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                findMany: {
                    args: Prisma.BlogPostFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>[];
                };
                create: {
                    args: Prisma.BlogPostCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                createMany: {
                    args: Prisma.BlogPostCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>[];
                };
                delete: {
                    args: Prisma.BlogPostDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                update: {
                    args: Prisma.BlogPostUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                deleteMany: {
                    args: Prisma.BlogPostDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlogPostUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>[];
                };
                upsert: {
                    args: Prisma.BlogPostUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlogPostPayload>;
                };
                aggregate: {
                    args: Prisma.BlogPostAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlogPost>;
                };
                groupBy: {
                    args: Prisma.BlogPostGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogPostGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BlogPostCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlogPostCountAggregateOutputType> | number;
                };
            };
        };
        Transaction: {
            payload: Prisma.$TransactionPayload<ExtArgs>;
            fields: Prisma.TransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findFirst: {
                    args: Prisma.TransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findMany: {
                    args: Prisma.TransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                create: {
                    args: Prisma.TransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                createMany: {
                    args: Prisma.TransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                delete: {
                    args: Prisma.TransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                update: {
                    args: Prisma.TransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                upsert: {
                    args: Prisma.TransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction>;
                };
                groupBy: {
                    args: Prisma.TransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionCountAggregateOutputType> | number;
                };
            };
        };
        TransactionStatusHistory: {
            payload: Prisma.$TransactionStatusHistoryPayload<ExtArgs>;
            fields: Prisma.TransactionStatusHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransactionStatusHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransactionStatusHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.TransactionStatusHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransactionStatusHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                findMany: {
                    args: Prisma.TransactionStatusHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>[];
                };
                create: {
                    args: Prisma.TransactionStatusHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                createMany: {
                    args: Prisma.TransactionStatusHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransactionStatusHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>[];
                };
                delete: {
                    args: Prisma.TransactionStatusHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                update: {
                    args: Prisma.TransactionStatusHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.TransactionStatusHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransactionStatusHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransactionStatusHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.TransactionStatusHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionStatusHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionStatusHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransactionStatusHistory>;
                };
                groupBy: {
                    args: Prisma.TransactionStatusHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionStatusHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransactionStatusHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionStatusHistoryCountAggregateOutputType> | number;
                };
            };
        };
        Wallet: {
            payload: Prisma.$WalletPayload<ExtArgs>;
            fields: Prisma.WalletFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WalletFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                findFirst: {
                    args: Prisma.WalletFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                findMany: {
                    args: Prisma.WalletFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                create: {
                    args: Prisma.WalletCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                createMany: {
                    args: Prisma.WalletCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                delete: {
                    args: Prisma.WalletDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                update: {
                    args: Prisma.WalletUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                deleteMany: {
                    args: Prisma.WalletDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WalletUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                upsert: {
                    args: Prisma.WalletUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                aggregate: {
                    args: Prisma.WalletAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWallet>;
                };
                groupBy: {
                    args: Prisma.WalletGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WalletCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletCountAggregateOutputType> | number;
                };
            };
        };
        WalletLedger: {
            payload: Prisma.$WalletLedgerPayload<ExtArgs>;
            fields: Prisma.WalletLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WalletLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WalletLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.WalletLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WalletLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                findMany: {
                    args: Prisma.WalletLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[];
                };
                create: {
                    args: Prisma.WalletLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                createMany: {
                    args: Prisma.WalletLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WalletLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[];
                };
                delete: {
                    args: Prisma.WalletLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                update: {
                    args: Prisma.WalletLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.WalletLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WalletLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WalletLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.WalletLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.WalletLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWalletLedger>;
                };
                groupBy: {
                    args: Prisma.WalletLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WalletLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletLedgerCountAggregateOutputType> | number;
                };
            };
        };
        Payout: {
            payload: Prisma.$PayoutPayload<ExtArgs>;
            fields: Prisma.PayoutFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayoutFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findFirst: {
                    args: Prisma.PayoutFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findMany: {
                    args: Prisma.PayoutFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                create: {
                    args: Prisma.PayoutCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                createMany: {
                    args: Prisma.PayoutCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayoutCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                delete: {
                    args: Prisma.PayoutDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                update: {
                    args: Prisma.PayoutUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                deleteMany: {
                    args: Prisma.PayoutDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayoutUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayoutUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                upsert: {
                    args: Prisma.PayoutUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                aggregate: {
                    args: Prisma.PayoutAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayout>;
                };
                groupBy: {
                    args: Prisma.PayoutGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayoutCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutCountAggregateOutputType> | number;
                };
            };
        };
        PayoutTransaction: {
            payload: Prisma.$PayoutTransactionPayload<ExtArgs>;
            fields: Prisma.PayoutTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayoutTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayoutTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.PayoutTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayoutTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                findMany: {
                    args: Prisma.PayoutTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>[];
                };
                create: {
                    args: Prisma.PayoutTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                createMany: {
                    args: Prisma.PayoutTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayoutTransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>[];
                };
                delete: {
                    args: Prisma.PayoutTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                update: {
                    args: Prisma.PayoutTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.PayoutTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayoutTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayoutTransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>[];
                };
                upsert: {
                    args: Prisma.PayoutTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.PayoutTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayoutTransaction>;
                };
                groupBy: {
                    args: Prisma.PayoutTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayoutTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutTransactionCountAggregateOutputType> | number;
                };
            };
        };
        PayoutStatusHistory: {
            payload: Prisma.$PayoutStatusHistoryPayload<ExtArgs>;
            fields: Prisma.PayoutStatusHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayoutStatusHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayoutStatusHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.PayoutStatusHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayoutStatusHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                findMany: {
                    args: Prisma.PayoutStatusHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>[];
                };
                create: {
                    args: Prisma.PayoutStatusHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                createMany: {
                    args: Prisma.PayoutStatusHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayoutStatusHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>[];
                };
                delete: {
                    args: Prisma.PayoutStatusHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                update: {
                    args: Prisma.PayoutStatusHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.PayoutStatusHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayoutStatusHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayoutStatusHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.PayoutStatusHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutStatusHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.PayoutStatusHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayoutStatusHistory>;
                };
                groupBy: {
                    args: Prisma.PayoutStatusHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutStatusHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayoutStatusHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutStatusHistoryCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        IdempotencyKey: {
            payload: Prisma.$IdempotencyKeyPayload<ExtArgs>;
            fields: Prisma.IdempotencyKeyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                findFirst: {
                    args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                findMany: {
                    args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                create: {
                    args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                createMany: {
                    args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                delete: {
                    args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                update: {
                    args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                deleteMany: {
                    args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                upsert: {
                    args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                aggregate: {
                    args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIdempotencyKey>;
                };
                groupBy: {
                    args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdempotencyKeyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IdempotencyKeyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdempotencyKeyCountAggregateOutputType> | number;
                };
            };
        };
        PlatformSetting: {
            payload: Prisma.$PlatformSettingPayload<ExtArgs>;
            fields: Prisma.PlatformSettingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlatformSettingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlatformSettingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                findFirst: {
                    args: Prisma.PlatformSettingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlatformSettingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                findMany: {
                    args: Prisma.PlatformSettingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                create: {
                    args: Prisma.PlatformSettingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                createMany: {
                    args: Prisma.PlatformSettingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlatformSettingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                delete: {
                    args: Prisma.PlatformSettingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                update: {
                    args: Prisma.PlatformSettingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                deleteMany: {
                    args: Prisma.PlatformSettingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlatformSettingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlatformSettingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                upsert: {
                    args: Prisma.PlatformSettingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                aggregate: {
                    args: Prisma.PlatformSettingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlatformSetting>;
                };
                groupBy: {
                    args: Prisma.PlatformSettingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformSettingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlatformSettingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformSettingCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyProfile: {
            payload: Prisma.$LoyaltyProfilePayload<ExtArgs>;
            fields: Prisma.LoyaltyProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>[];
                };
                create: {
                    args: Prisma.LoyaltyProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                update: {
                    args: Prisma.LoyaltyProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyProfilePayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyProfile>;
                };
                groupBy: {
                    args: Prisma.LoyaltyProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyProfileCountAggregateOutputType> | number;
                };
            };
        };
        PointsLedger: {
            payload: Prisma.$PointsLedgerPayload<ExtArgs>;
            fields: Prisma.PointsLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PointsLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PointsLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.PointsLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PointsLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                findMany: {
                    args: Prisma.PointsLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>[];
                };
                create: {
                    args: Prisma.PointsLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                createMany: {
                    args: Prisma.PointsLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PointsLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>[];
                };
                delete: {
                    args: Prisma.PointsLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                update: {
                    args: Prisma.PointsLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.PointsLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PointsLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PointsLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.PointsLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointsLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.PointsLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePointsLedger>;
                };
                groupBy: {
                    args: Prisma.PointsLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointsLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PointsLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointsLedgerCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyReward: {
            payload: Prisma.$LoyaltyRewardPayload<ExtArgs>;
            fields: Prisma.LoyaltyRewardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyRewardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyRewardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyRewardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyRewardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyRewardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyRewardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyRewardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyRewardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyRewardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                update: {
                    args: Prisma.LoyaltyRewardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyRewardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyRewardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyRewardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyRewardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRewardPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyRewardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyReward>;
                };
                groupBy: {
                    args: Prisma.LoyaltyRewardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyRewardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyRewardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyRewardCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyRedemption: {
            payload: Prisma.$LoyaltyRedemptionPayload<ExtArgs>;
            fields: Prisma.LoyaltyRedemptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyRedemptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyRedemptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyRedemptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyRedemptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyRedemptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyRedemptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyRedemptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyRedemptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyRedemptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                update: {
                    args: Prisma.LoyaltyRedemptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyRedemptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyRedemptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyRedemptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyRedemptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyRedemptionPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyRedemptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyRedemption>;
                };
                groupBy: {
                    args: Prisma.LoyaltyRedemptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyRedemptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyRedemptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyRedemptionCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyMission: {
            payload: Prisma.$LoyaltyMissionPayload<ExtArgs>;
            fields: Prisma.LoyaltyMissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyMissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyMissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyMissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyMissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyMissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyMissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyMissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyMissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyMissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                update: {
                    args: Prisma.LoyaltyMissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyMissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyMissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyMissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyMissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyMissionPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyMissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyMission>;
                };
                groupBy: {
                    args: Prisma.LoyaltyMissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyMissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyMissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyMissionCountAggregateOutputType> | number;
                };
            };
        };
        MissionProgress: {
            payload: Prisma.$MissionProgressPayload<ExtArgs>;
            fields: Prisma.MissionProgressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MissionProgressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MissionProgressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                findFirst: {
                    args: Prisma.MissionProgressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MissionProgressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                findMany: {
                    args: Prisma.MissionProgressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>[];
                };
                create: {
                    args: Prisma.MissionProgressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                createMany: {
                    args: Prisma.MissionProgressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MissionProgressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>[];
                };
                delete: {
                    args: Prisma.MissionProgressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                update: {
                    args: Prisma.MissionProgressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                deleteMany: {
                    args: Prisma.MissionProgressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MissionProgressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MissionProgressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>[];
                };
                upsert: {
                    args: Prisma.MissionProgressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MissionProgressPayload>;
                };
                aggregate: {
                    args: Prisma.MissionProgressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMissionProgress>;
                };
                groupBy: {
                    args: Prisma.MissionProgressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MissionProgressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MissionProgressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MissionProgressCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyPartner: {
            payload: Prisma.$LoyaltyPartnerPayload<ExtArgs>;
            fields: Prisma.LoyaltyPartnerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyPartnerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyPartnerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyPartnerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyPartnerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyPartnerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyPartnerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyPartnerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyPartnerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyPartnerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                update: {
                    args: Prisma.LoyaltyPartnerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyPartnerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyPartnerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyPartnerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyPartnerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyPartnerPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyPartnerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyPartner>;
                };
                groupBy: {
                    args: Prisma.LoyaltyPartnerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyPartnerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyPartnerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyPartnerCountAggregateOutputType> | number;
                };
            };
        };
        DailyShareRecord: {
            payload: Prisma.$DailyShareRecordPayload<ExtArgs>;
            fields: Prisma.DailyShareRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DailyShareRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DailyShareRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                findFirst: {
                    args: Prisma.DailyShareRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DailyShareRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                findMany: {
                    args: Prisma.DailyShareRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>[];
                };
                create: {
                    args: Prisma.DailyShareRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                createMany: {
                    args: Prisma.DailyShareRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DailyShareRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>[];
                };
                delete: {
                    args: Prisma.DailyShareRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                update: {
                    args: Prisma.DailyShareRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.DailyShareRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DailyShareRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DailyShareRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>[];
                };
                upsert: {
                    args: Prisma.DailyShareRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DailyShareRecordPayload>;
                };
                aggregate: {
                    args: Prisma.DailyShareRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDailyShareRecord>;
                };
                groupBy: {
                    args: Prisma.DailyShareRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DailyShareRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DailyShareRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DailyShareRecordCountAggregateOutputType> | number;
                };
            };
        };
        PartnerSpending: {
            payload: Prisma.$PartnerSpendingPayload<ExtArgs>;
            fields: Prisma.PartnerSpendingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerSpendingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerSpendingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerSpendingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerSpendingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                findMany: {
                    args: Prisma.PartnerSpendingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>[];
                };
                create: {
                    args: Prisma.PartnerSpendingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                createMany: {
                    args: Prisma.PartnerSpendingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerSpendingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>[];
                };
                delete: {
                    args: Prisma.PartnerSpendingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                update: {
                    args: Prisma.PartnerSpendingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerSpendingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerSpendingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerSpendingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerSpendingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerSpendingPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerSpendingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerSpending>;
                };
                groupBy: {
                    args: Prisma.PartnerSpendingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerSpendingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerSpendingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerSpendingCountAggregateOutputType> | number;
                };
            };
        };
        CommunityPost: {
            payload: Prisma.$CommunityPostPayload<ExtArgs>;
            fields: Prisma.CommunityPostFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                findFirst: {
                    args: Prisma.CommunityPostFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                findMany: {
                    args: Prisma.CommunityPostFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>[];
                };
                create: {
                    args: Prisma.CommunityPostCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                createMany: {
                    args: Prisma.CommunityPostCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>[];
                };
                delete: {
                    args: Prisma.CommunityPostDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                update: {
                    args: Prisma.CommunityPostUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                deleteMany: {
                    args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommunityPostUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>[];
                };
                upsert: {
                    args: Prisma.CommunityPostUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityPostPayload>;
                };
                aggregate: {
                    args: Prisma.CommunityPostAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommunityPost>;
                };
                groupBy: {
                    args: Prisma.CommunityPostGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommunityPostGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommunityPostCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommunityPostCountAggregateOutputType> | number;
                };
            };
        };
        CommunityEngagement: {
            payload: Prisma.$CommunityEngagementPayload<ExtArgs>;
            fields: Prisma.CommunityEngagementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommunityEngagementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommunityEngagementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                findFirst: {
                    args: Prisma.CommunityEngagementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommunityEngagementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                findMany: {
                    args: Prisma.CommunityEngagementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>[];
                };
                create: {
                    args: Prisma.CommunityEngagementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                createMany: {
                    args: Prisma.CommunityEngagementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommunityEngagementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>[];
                };
                delete: {
                    args: Prisma.CommunityEngagementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                update: {
                    args: Prisma.CommunityEngagementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                deleteMany: {
                    args: Prisma.CommunityEngagementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommunityEngagementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommunityEngagementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>[];
                };
                upsert: {
                    args: Prisma.CommunityEngagementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommunityEngagementPayload>;
                };
                aggregate: {
                    args: Prisma.CommunityEngagementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommunityEngagement>;
                };
                groupBy: {
                    args: Prisma.CommunityEngagementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommunityEngagementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommunityEngagementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommunityEngagementCountAggregateOutputType> | number;
                };
            };
        };
        AmbassadorBadge: {
            payload: Prisma.$AmbassadorBadgePayload<ExtArgs>;
            fields: Prisma.AmbassadorBadgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AmbassadorBadgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AmbassadorBadgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                findFirst: {
                    args: Prisma.AmbassadorBadgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AmbassadorBadgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                findMany: {
                    args: Prisma.AmbassadorBadgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>[];
                };
                create: {
                    args: Prisma.AmbassadorBadgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                createMany: {
                    args: Prisma.AmbassadorBadgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AmbassadorBadgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>[];
                };
                delete: {
                    args: Prisma.AmbassadorBadgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                update: {
                    args: Prisma.AmbassadorBadgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                deleteMany: {
                    args: Prisma.AmbassadorBadgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AmbassadorBadgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AmbassadorBadgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>[];
                };
                upsert: {
                    args: Prisma.AmbassadorBadgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AmbassadorBadgePayload>;
                };
                aggregate: {
                    args: Prisma.AmbassadorBadgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAmbassadorBadge>;
                };
                groupBy: {
                    args: Prisma.AmbassadorBadgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AmbassadorBadgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AmbassadorBadgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AmbassadorBadgeCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyBonus: {
            payload: Prisma.$LoyaltyBonusPayload<ExtArgs>;
            fields: Prisma.LoyaltyBonusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyBonusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyBonusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyBonusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyBonusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyBonusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyBonusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyBonusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyBonusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyBonusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                update: {
                    args: Prisma.LoyaltyBonusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyBonusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyBonusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyBonusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyBonusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyBonusPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyBonusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyBonus>;
                };
                groupBy: {
                    args: Prisma.LoyaltyBonusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyBonusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyBonusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyBonusCountAggregateOutputType> | number;
                };
            };
        };
        EventZone: {
            payload: Prisma.$EventZonePayload<ExtArgs>;
            fields: Prisma.EventZoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventZoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventZoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                findFirst: {
                    args: Prisma.EventZoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventZoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                findMany: {
                    args: Prisma.EventZoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>[];
                };
                create: {
                    args: Prisma.EventZoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                createMany: {
                    args: Prisma.EventZoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventZoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>[];
                };
                delete: {
                    args: Prisma.EventZoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                update: {
                    args: Prisma.EventZoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                deleteMany: {
                    args: Prisma.EventZoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventZoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventZoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>[];
                };
                upsert: {
                    args: Prisma.EventZoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventZonePayload>;
                };
                aggregate: {
                    args: Prisma.EventZoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventZone>;
                };
                groupBy: {
                    args: Prisma.EventZoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventZoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventZoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventZoneCountAggregateOutputType> | number;
                };
            };
        };
        ParticipantCategory: {
            payload: Prisma.$ParticipantCategoryPayload<ExtArgs>;
            fields: Prisma.ParticipantCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParticipantCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParticipantCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ParticipantCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParticipantCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ParticipantCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>[];
                };
                create: {
                    args: Prisma.ParticipantCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ParticipantCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParticipantCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ParticipantCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                update: {
                    args: Prisma.ParticipantCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ParticipantCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParticipantCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParticipantCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ParticipantCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ParticipantCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParticipantCategory>;
                };
                groupBy: {
                    args: Prisma.ParticipantCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParticipantCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCategoryCountAggregateOutputType> | number;
                };
            };
        };
        ZoneAccessRight: {
            payload: Prisma.$ZoneAccessRightPayload<ExtArgs>;
            fields: Prisma.ZoneAccessRightFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ZoneAccessRightFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ZoneAccessRightFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                findFirst: {
                    args: Prisma.ZoneAccessRightFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ZoneAccessRightFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                findMany: {
                    args: Prisma.ZoneAccessRightFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>[];
                };
                create: {
                    args: Prisma.ZoneAccessRightCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                createMany: {
                    args: Prisma.ZoneAccessRightCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ZoneAccessRightCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>[];
                };
                delete: {
                    args: Prisma.ZoneAccessRightDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                update: {
                    args: Prisma.ZoneAccessRightUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                deleteMany: {
                    args: Prisma.ZoneAccessRightDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ZoneAccessRightUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ZoneAccessRightUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>[];
                };
                upsert: {
                    args: Prisma.ZoneAccessRightUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZoneAccessRightPayload>;
                };
                aggregate: {
                    args: Prisma.ZoneAccessRightAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateZoneAccessRight>;
                };
                groupBy: {
                    args: Prisma.ZoneAccessRightGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZoneAccessRightGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ZoneAccessRightCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZoneAccessRightCountAggregateOutputType> | number;
                };
            };
        };
        AccessBadge: {
            payload: Prisma.$AccessBadgePayload<ExtArgs>;
            fields: Prisma.AccessBadgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccessBadgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccessBadgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                findFirst: {
                    args: Prisma.AccessBadgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccessBadgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                findMany: {
                    args: Prisma.AccessBadgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>[];
                };
                create: {
                    args: Prisma.AccessBadgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                createMany: {
                    args: Prisma.AccessBadgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccessBadgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>[];
                };
                delete: {
                    args: Prisma.AccessBadgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                update: {
                    args: Prisma.AccessBadgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                deleteMany: {
                    args: Prisma.AccessBadgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccessBadgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccessBadgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>[];
                };
                upsert: {
                    args: Prisma.AccessBadgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessBadgePayload>;
                };
                aggregate: {
                    args: Prisma.AccessBadgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccessBadge>;
                };
                groupBy: {
                    args: Prisma.AccessBadgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccessBadgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccessBadgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccessBadgeCountAggregateOutputType> | number;
                };
            };
        };
        AccessLog: {
            payload: Prisma.$AccessLogPayload<ExtArgs>;
            fields: Prisma.AccessLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccessLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccessLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                findFirst: {
                    args: Prisma.AccessLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccessLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                findMany: {
                    args: Prisma.AccessLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>[];
                };
                create: {
                    args: Prisma.AccessLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                createMany: {
                    args: Prisma.AccessLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccessLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>[];
                };
                delete: {
                    args: Prisma.AccessLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                update: {
                    args: Prisma.AccessLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AccessLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccessLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccessLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>[];
                };
                upsert: {
                    args: Prisma.AccessLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccessLogPayload>;
                };
                aggregate: {
                    args: Prisma.AccessLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccessLog>;
                };
                groupBy: {
                    args: Prisma.AccessLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccessLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccessLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccessLogCountAggregateOutputType> | number;
                };
            };
        };
        SuspectBadgeReport: {
            payload: Prisma.$SuspectBadgeReportPayload<ExtArgs>;
            fields: Prisma.SuspectBadgeReportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuspectBadgeReportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuspectBadgeReportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                findFirst: {
                    args: Prisma.SuspectBadgeReportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuspectBadgeReportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                findMany: {
                    args: Prisma.SuspectBadgeReportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>[];
                };
                create: {
                    args: Prisma.SuspectBadgeReportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                createMany: {
                    args: Prisma.SuspectBadgeReportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuspectBadgeReportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>[];
                };
                delete: {
                    args: Prisma.SuspectBadgeReportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                update: {
                    args: Prisma.SuspectBadgeReportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                deleteMany: {
                    args: Prisma.SuspectBadgeReportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuspectBadgeReportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuspectBadgeReportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>[];
                };
                upsert: {
                    args: Prisma.SuspectBadgeReportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuspectBadgeReportPayload>;
                };
                aggregate: {
                    args: Prisma.SuspectBadgeReportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuspectBadgeReport>;
                };
                groupBy: {
                    args: Prisma.SuspectBadgeReportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuspectBadgeReportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuspectBadgeReportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuspectBadgeReportCountAggregateOutputType> | number;
                };
            };
        };
        VipAccessLog: {
            payload: Prisma.$VipAccessLogPayload<ExtArgs>;
            fields: Prisma.VipAccessLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VipAccessLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VipAccessLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                findFirst: {
                    args: Prisma.VipAccessLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VipAccessLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                findMany: {
                    args: Prisma.VipAccessLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>[];
                };
                create: {
                    args: Prisma.VipAccessLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                createMany: {
                    args: Prisma.VipAccessLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VipAccessLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>[];
                };
                delete: {
                    args: Prisma.VipAccessLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                update: {
                    args: Prisma.VipAccessLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                deleteMany: {
                    args: Prisma.VipAccessLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VipAccessLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VipAccessLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>[];
                };
                upsert: {
                    args: Prisma.VipAccessLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VipAccessLogPayload>;
                };
                aggregate: {
                    args: Prisma.VipAccessLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVipAccessLog>;
                };
                groupBy: {
                    args: Prisma.VipAccessLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VipAccessLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VipAccessLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VipAccessLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'EventType'
 */
export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>;
/**
 * Reference to a field of type 'EventType[]'
 */
export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>;
/**
 * Reference to a field of type 'FeaturedRequestStatus'
 */
export type EnumFeaturedRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeaturedRequestStatus'>;
/**
 * Reference to a field of type 'FeaturedRequestStatus[]'
 */
export type ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeaturedRequestStatus[]'>;
/**
 * Reference to a field of type 'DeliveryMethod'
 */
export type EnumDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryMethod'>;
/**
 * Reference to a field of type 'DeliveryMethod[]'
 */
export type ListEnumDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryMethod[]'>;
/**
 * Reference to a field of type 'DeliveryStatus'
 */
export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>;
/**
 * Reference to a field of type 'DeliveryStatus[]'
 */
export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>;
/**
 * Reference to a field of type 'TransactionStatus'
 */
export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>;
/**
 * Reference to a field of type 'TransactionStatus[]'
 */
export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'LedgerEntryType'
 */
export type EnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType'>;
/**
 * Reference to a field of type 'LedgerEntryType[]'
 */
export type ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType[]'>;
/**
 * Reference to a field of type 'LedgerOperationType'
 */
export type EnumLedgerOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerOperationType'>;
/**
 * Reference to a field of type 'LedgerOperationType[]'
 */
export type ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerOperationType[]'>;
/**
 * Reference to a field of type 'PayoutStatus'
 */
export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>;
/**
 * Reference to a field of type 'PayoutStatus[]'
 */
export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>;
/**
 * Reference to a field of type 'LoyaltyLevel'
 */
export type EnumLoyaltyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoyaltyLevel'>;
/**
 * Reference to a field of type 'LoyaltyLevel[]'
 */
export type ListEnumLoyaltyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoyaltyLevel[]'>;
/**
 * Reference to a field of type 'PointsActionType'
 */
export type EnumPointsActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointsActionType'>;
/**
 * Reference to a field of type 'PointsActionType[]'
 */
export type ListEnumPointsActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointsActionType[]'>;
/**
 * Reference to a field of type 'ZoneAccessLevel'
 */
export type EnumZoneAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneAccessLevel'>;
/**
 * Reference to a field of type 'ZoneAccessLevel[]'
 */
export type ListEnumZoneAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneAccessLevel[]'>;
/**
 * Reference to a field of type 'BadgeStatus'
 */
export type EnumBadgeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeStatus'>;
/**
 * Reference to a field of type 'BadgeStatus[]'
 */
export type ListEnumBadgeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeStatus[]'>;
/**
 * Reference to a field of type 'AccessResult'
 */
export type EnumAccessResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessResult'>;
/**
 * Reference to a field of type 'AccessResult[]'
 */
export type ListEnumAccessResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessResult[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userFavorite?: Prisma.UserFavoriteOmit;
    event?: Prisma.EventOmit;
    liveEventConsentRequest?: Prisma.LiveEventConsentRequestOmit;
    featuredRequest?: Prisma.FeaturedRequestOmit;
    category?: Prisma.CategoryOmit;
    country?: Prisma.CountryOmit;
    deliveryZone?: Prisma.DeliveryZoneOmit;
    city?: Prisma.CityOmit;
    dealCategory?: Prisma.DealCategoryOmit;
    deal?: Prisma.DealOmit;
    leisureCategory?: Prisma.LeisureCategoryOmit;
    leisureItem?: Prisma.LeisureItemOmit;
    leisureFavorite?: Prisma.LeisureFavoriteOmit;
    ticket?: Prisma.TicketOmit;
    deliveryAddress?: Prisma.DeliveryAddressOmit;
    eventController?: Prisma.EventControllerOmit;
    blogCategory?: Prisma.BlogCategoryOmit;
    blogPost?: Prisma.BlogPostOmit;
    transaction?: Prisma.TransactionOmit;
    transactionStatusHistory?: Prisma.TransactionStatusHistoryOmit;
    wallet?: Prisma.WalletOmit;
    walletLedger?: Prisma.WalletLedgerOmit;
    payout?: Prisma.PayoutOmit;
    payoutTransaction?: Prisma.PayoutTransactionOmit;
    payoutStatusHistory?: Prisma.PayoutStatusHistoryOmit;
    auditLog?: Prisma.AuditLogOmit;
    idempotencyKey?: Prisma.IdempotencyKeyOmit;
    platformSetting?: Prisma.PlatformSettingOmit;
    loyaltyProfile?: Prisma.LoyaltyProfileOmit;
    pointsLedger?: Prisma.PointsLedgerOmit;
    loyaltyReward?: Prisma.LoyaltyRewardOmit;
    loyaltyRedemption?: Prisma.LoyaltyRedemptionOmit;
    loyaltyMission?: Prisma.LoyaltyMissionOmit;
    missionProgress?: Prisma.MissionProgressOmit;
    loyaltyPartner?: Prisma.LoyaltyPartnerOmit;
    dailyShareRecord?: Prisma.DailyShareRecordOmit;
    partnerSpending?: Prisma.PartnerSpendingOmit;
    communityPost?: Prisma.CommunityPostOmit;
    communityEngagement?: Prisma.CommunityEngagementOmit;
    ambassadorBadge?: Prisma.AmbassadorBadgeOmit;
    loyaltyBonus?: Prisma.LoyaltyBonusOmit;
    eventZone?: Prisma.EventZoneOmit;
    participantCategory?: Prisma.ParticipantCategoryOmit;
    zoneAccessRight?: Prisma.ZoneAccessRightOmit;
    accessBadge?: Prisma.AccessBadgeOmit;
    accessLog?: Prisma.AccessLogOmit;
    suspectBadgeReport?: Prisma.SuspectBadgeReportOmit;
    vipAccessLog?: Prisma.VipAccessLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map