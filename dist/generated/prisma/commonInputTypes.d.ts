import type * as runtime from "@prisma/client/runtime/library";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumFeaturedRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturedRequestStatus | Prisma.EnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel> | $Enums.FeaturedRequestStatus;
};
export type EnumFeaturedRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturedRequestStatus | Prisma.EnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeaturedRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeaturedRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumDeliveryMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | Prisma.EnumDeliveryMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel> | $Enums.DeliveryMethod;
};
export type EnumDeliveryStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel> | $Enums.DeliveryStatus | null;
};
export type EnumDeliveryMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | Prisma.EnumDeliveryMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel>;
};
export type EnumDeliveryStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDeliveryStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel>;
};
export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null;
};
export type EnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel>;
};
export type EnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | Prisma.EnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType;
};
export type EnumLedgerOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerOperationType | Prisma.EnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel> | $Enums.LedgerOperationType;
};
export type EnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | Prisma.EnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel>;
};
export type EnumLedgerOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerOperationType | Prisma.EnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerOperationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel>;
};
export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type EnumPayoutStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel> | $Enums.PayoutStatus | null;
};
export type EnumPayoutStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPayoutStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel>;
};
export type EnumLoyaltyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | Prisma.EnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel> | $Enums.LoyaltyLevel;
};
export type EnumLoyaltyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | Prisma.EnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoyaltyLevelWithAggregatesFilter<$PrismaModel> | $Enums.LoyaltyLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel>;
};
export type EnumPointsActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsActionType | Prisma.EnumPointsActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel> | $Enums.PointsActionType;
};
export type EnumPointsActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsActionType | Prisma.EnumPointsActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPointsActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointsActionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumZoneAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneAccessLevel | Prisma.EnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel> | $Enums.ZoneAccessLevel;
};
export type EnumZoneAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneAccessLevel | Prisma.EnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumZoneAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.ZoneAccessLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel>;
};
export type EnumBadgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeStatus | Prisma.EnumBadgeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel> | $Enums.BadgeStatus;
};
export type EnumBadgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeStatus | Prisma.EnumBadgeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBadgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.BadgeStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel>;
};
export type EnumAccessResultFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessResult | Prisma.EnumAccessResultFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessResultFilter<$PrismaModel> | $Enums.AccessResult;
};
export type EnumAccessResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessResult | Prisma.EnumAccessResultFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessResultWithAggregatesFilter<$PrismaModel> | $Enums.AccessResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessResultFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumFeaturedRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturedRequestStatus | Prisma.EnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel> | $Enums.FeaturedRequestStatus;
};
export type NestedEnumFeaturedRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturedRequestStatus | Prisma.EnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeaturedRequestStatus[] | Prisma.ListEnumFeaturedRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeaturedRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeaturedRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFeaturedRequestStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumDeliveryMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | Prisma.EnumDeliveryMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel> | $Enums.DeliveryMethod;
};
export type NestedEnumDeliveryStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel> | $Enums.DeliveryStatus | null;
};
export type NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | Prisma.EnumDeliveryMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryMethod[] | Prisma.ListEnumDeliveryMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryMethodFilter<$PrismaModel>;
};
export type NestedEnumDeliveryStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDeliveryStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null;
};
export type NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | Prisma.EnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType;
};
export type NestedEnumLedgerOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerOperationType | Prisma.EnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel> | $Enums.LedgerOperationType;
};
export type NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | Prisma.EnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerEntryType[] | Prisma.ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerEntryTypeFilter<$PrismaModel>;
};
export type NestedEnumLedgerOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerOperationType | Prisma.EnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerOperationType[] | Prisma.ListEnumLedgerOperationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerOperationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerOperationTypeFilter<$PrismaModel>;
};
export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type NestedEnumPayoutStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel> | $Enums.PayoutStatus | null;
};
export type NestedEnumPayoutStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPayoutStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumLoyaltyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | Prisma.EnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel> | $Enums.LoyaltyLevel;
};
export type NestedEnumLoyaltyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoyaltyLevel | Prisma.EnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LoyaltyLevel[] | Prisma.ListEnumLoyaltyLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLoyaltyLevelWithAggregatesFilter<$PrismaModel> | $Enums.LoyaltyLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLoyaltyLevelFilter<$PrismaModel>;
};
export type NestedEnumPointsActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsActionType | Prisma.EnumPointsActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel> | $Enums.PointsActionType;
};
export type NestedEnumPointsActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsActionType | Prisma.EnumPointsActionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PointsActionType[] | Prisma.ListEnumPointsActionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPointsActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointsActionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPointsActionTypeFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumZoneAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneAccessLevel | Prisma.EnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel> | $Enums.ZoneAccessLevel;
};
export type NestedEnumZoneAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneAccessLevel | Prisma.EnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ZoneAccessLevel[] | Prisma.ListEnumZoneAccessLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumZoneAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.ZoneAccessLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumZoneAccessLevelFilter<$PrismaModel>;
};
export type NestedEnumBadgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeStatus | Prisma.EnumBadgeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel> | $Enums.BadgeStatus;
};
export type NestedEnumBadgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeStatus | Prisma.EnumBadgeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BadgeStatus[] | Prisma.ListEnumBadgeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBadgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.BadgeStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBadgeStatusFilter<$PrismaModel>;
};
export type NestedEnumAccessResultFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessResult | Prisma.EnumAccessResultFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessResultFilter<$PrismaModel> | $Enums.AccessResult;
};
export type NestedEnumAccessResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessResult | Prisma.EnumAccessResultFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessResult[] | Prisma.ListEnumAccessResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessResultWithAggregatesFilter<$PrismaModel> | $Enums.AccessResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessResultFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map