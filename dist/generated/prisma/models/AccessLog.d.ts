import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AccessLog
 *
 */
export type AccessLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AccessLogPayload>;
export type AggregateAccessLog = {
    _count: AccessLogCountAggregateOutputType | null;
    _min: AccessLogMinAggregateOutputType | null;
    _max: AccessLogMaxAggregateOutputType | null;
};
export type AccessLogMinAggregateOutputType = {
    id: string | null;
    badgeId: string | null;
    zoneId: string | null;
    eventId: string | null;
    scannedById: string | null;
    result: $Enums.AccessResult | null;
    refusalReason: string | null;
    offlineSync: boolean | null;
    scannedAt: Date | null;
};
export type AccessLogMaxAggregateOutputType = {
    id: string | null;
    badgeId: string | null;
    zoneId: string | null;
    eventId: string | null;
    scannedById: string | null;
    result: $Enums.AccessResult | null;
    refusalReason: string | null;
    offlineSync: boolean | null;
    scannedAt: Date | null;
};
export type AccessLogCountAggregateOutputType = {
    id: number;
    badgeId: number;
    zoneId: number;
    eventId: number;
    scannedById: number;
    result: number;
    refusalReason: number;
    offlineSync: number;
    scannedAt: number;
    _all: number;
};
export type AccessLogMinAggregateInputType = {
    id?: true;
    badgeId?: true;
    zoneId?: true;
    eventId?: true;
    scannedById?: true;
    result?: true;
    refusalReason?: true;
    offlineSync?: true;
    scannedAt?: true;
};
export type AccessLogMaxAggregateInputType = {
    id?: true;
    badgeId?: true;
    zoneId?: true;
    eventId?: true;
    scannedById?: true;
    result?: true;
    refusalReason?: true;
    offlineSync?: true;
    scannedAt?: true;
};
export type AccessLogCountAggregateInputType = {
    id?: true;
    badgeId?: true;
    zoneId?: true;
    eventId?: true;
    scannedById?: true;
    result?: true;
    refusalReason?: true;
    offlineSync?: true;
    scannedAt?: true;
    _all?: true;
};
export type AccessLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLog to aggregate.
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AccessLogs
    **/
    _count?: true | AccessLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AccessLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AccessLogMaxAggregateInputType;
};
export type GetAccessLogAggregateType<T extends AccessLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAccessLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccessLog[P]> : Prisma.GetScalarType<T[P], AggregateAccessLog[P]>;
};
export type AccessLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessLogWhereInput;
    orderBy?: Prisma.AccessLogOrderByWithAggregationInput | Prisma.AccessLogOrderByWithAggregationInput[];
    by: Prisma.AccessLogScalarFieldEnum[] | Prisma.AccessLogScalarFieldEnum;
    having?: Prisma.AccessLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccessLogCountAggregateInputType | true;
    _min?: AccessLogMinAggregateInputType;
    _max?: AccessLogMaxAggregateInputType;
};
export type AccessLogGroupByOutputType = {
    id: string;
    badgeId: string;
    zoneId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason: string | null;
    offlineSync: boolean;
    scannedAt: Date;
    _count: AccessLogCountAggregateOutputType | null;
    _min: AccessLogMinAggregateOutputType | null;
    _max: AccessLogMaxAggregateOutputType | null;
};
type GetAccessLogGroupByPayload<T extends AccessLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccessLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccessLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccessLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccessLogGroupByOutputType[P]>;
}>>;
export type AccessLogWhereInput = {
    AND?: Prisma.AccessLogWhereInput | Prisma.AccessLogWhereInput[];
    OR?: Prisma.AccessLogWhereInput[];
    NOT?: Prisma.AccessLogWhereInput | Prisma.AccessLogWhereInput[];
    id?: Prisma.StringFilter<"AccessLog"> | string;
    badgeId?: Prisma.StringFilter<"AccessLog"> | string;
    zoneId?: Prisma.StringFilter<"AccessLog"> | string;
    eventId?: Prisma.StringFilter<"AccessLog"> | string;
    scannedById?: Prisma.StringFilter<"AccessLog"> | string;
    result?: Prisma.EnumAccessResultFilter<"AccessLog"> | $Enums.AccessResult;
    refusalReason?: Prisma.StringNullableFilter<"AccessLog"> | string | null;
    offlineSync?: Prisma.BoolFilter<"AccessLog"> | boolean;
    scannedAt?: Prisma.DateTimeFilter<"AccessLog"> | Date | string;
    badge?: Prisma.XOR<Prisma.AccessBadgeScalarRelationFilter, Prisma.AccessBadgeWhereInput>;
    zone?: Prisma.XOR<Prisma.EventZoneScalarRelationFilter, Prisma.EventZoneWhereInput>;
};
export type AccessLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannedById?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    refusalReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineSync?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    badge?: Prisma.AccessBadgeOrderByWithRelationInput;
    zone?: Prisma.EventZoneOrderByWithRelationInput;
};
export type AccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AccessLogWhereInput | Prisma.AccessLogWhereInput[];
    OR?: Prisma.AccessLogWhereInput[];
    NOT?: Prisma.AccessLogWhereInput | Prisma.AccessLogWhereInput[];
    badgeId?: Prisma.StringFilter<"AccessLog"> | string;
    zoneId?: Prisma.StringFilter<"AccessLog"> | string;
    eventId?: Prisma.StringFilter<"AccessLog"> | string;
    scannedById?: Prisma.StringFilter<"AccessLog"> | string;
    result?: Prisma.EnumAccessResultFilter<"AccessLog"> | $Enums.AccessResult;
    refusalReason?: Prisma.StringNullableFilter<"AccessLog"> | string | null;
    offlineSync?: Prisma.BoolFilter<"AccessLog"> | boolean;
    scannedAt?: Prisma.DateTimeFilter<"AccessLog"> | Date | string;
    badge?: Prisma.XOR<Prisma.AccessBadgeScalarRelationFilter, Prisma.AccessBadgeWhereInput>;
    zone?: Prisma.XOR<Prisma.EventZoneScalarRelationFilter, Prisma.EventZoneWhereInput>;
}, "id">;
export type AccessLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannedById?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    refusalReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineSync?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    _count?: Prisma.AccessLogCountOrderByAggregateInput;
    _max?: Prisma.AccessLogMaxOrderByAggregateInput;
    _min?: Prisma.AccessLogMinOrderByAggregateInput;
};
export type AccessLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccessLogScalarWhereWithAggregatesInput | Prisma.AccessLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccessLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccessLogScalarWhereWithAggregatesInput | Prisma.AccessLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AccessLog"> | string;
    badgeId?: Prisma.StringWithAggregatesFilter<"AccessLog"> | string;
    zoneId?: Prisma.StringWithAggregatesFilter<"AccessLog"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"AccessLog"> | string;
    scannedById?: Prisma.StringWithAggregatesFilter<"AccessLog"> | string;
    result?: Prisma.EnumAccessResultWithAggregatesFilter<"AccessLog"> | $Enums.AccessResult;
    refusalReason?: Prisma.StringNullableWithAggregatesFilter<"AccessLog"> | string | null;
    offlineSync?: Prisma.BoolWithAggregatesFilter<"AccessLog"> | boolean;
    scannedAt?: Prisma.DateTimeWithAggregatesFilter<"AccessLog"> | Date | string;
};
export type AccessLogCreateInput = {
    id?: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
    badge: Prisma.AccessBadgeCreateNestedOneWithoutAccessLogsInput;
    zone: Prisma.EventZoneCreateNestedOneWithoutAccessLogsInput;
};
export type AccessLogUncheckedCreateInput = {
    id?: string;
    badgeId: string;
    zoneId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    badge?: Prisma.AccessBadgeUpdateOneRequiredWithoutAccessLogsNestedInput;
    zone?: Prisma.EventZoneUpdateOneRequiredWithoutAccessLogsNestedInput;
};
export type AccessLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogCreateManyInput = {
    id?: string;
    badgeId: string;
    zoneId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogListRelationFilter = {
    every?: Prisma.AccessLogWhereInput;
    some?: Prisma.AccessLogWhereInput;
    none?: Prisma.AccessLogWhereInput;
};
export type AccessLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccessLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannedById?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    refusalReason?: Prisma.SortOrder;
    offlineSync?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
};
export type AccessLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannedById?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    refusalReason?: Prisma.SortOrder;
    offlineSync?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
};
export type AccessLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannedById?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    refusalReason?: Prisma.SortOrder;
    offlineSync?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
};
export type AccessLogCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput> | Prisma.AccessLogCreateWithoutZoneInput[] | Prisma.AccessLogUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutZoneInput | Prisma.AccessLogCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.AccessLogCreateManyZoneInputEnvelope;
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
};
export type AccessLogUncheckedCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput> | Prisma.AccessLogCreateWithoutZoneInput[] | Prisma.AccessLogUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutZoneInput | Prisma.AccessLogCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.AccessLogCreateManyZoneInputEnvelope;
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
};
export type AccessLogUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput> | Prisma.AccessLogCreateWithoutZoneInput[] | Prisma.AccessLogUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutZoneInput | Prisma.AccessLogCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.AccessLogUpsertWithWhereUniqueWithoutZoneInput | Prisma.AccessLogUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.AccessLogCreateManyZoneInputEnvelope;
    set?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    disconnect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    delete?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    update?: Prisma.AccessLogUpdateWithWhereUniqueWithoutZoneInput | Prisma.AccessLogUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.AccessLogUpdateManyWithWhereWithoutZoneInput | Prisma.AccessLogUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
};
export type AccessLogUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput> | Prisma.AccessLogCreateWithoutZoneInput[] | Prisma.AccessLogUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutZoneInput | Prisma.AccessLogCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.AccessLogUpsertWithWhereUniqueWithoutZoneInput | Prisma.AccessLogUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.AccessLogCreateManyZoneInputEnvelope;
    set?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    disconnect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    delete?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    update?: Prisma.AccessLogUpdateWithWhereUniqueWithoutZoneInput | Prisma.AccessLogUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.AccessLogUpdateManyWithWhereWithoutZoneInput | Prisma.AccessLogUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
};
export type AccessLogCreateNestedManyWithoutBadgeInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput> | Prisma.AccessLogCreateWithoutBadgeInput[] | Prisma.AccessLogUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutBadgeInput | Prisma.AccessLogCreateOrConnectWithoutBadgeInput[];
    createMany?: Prisma.AccessLogCreateManyBadgeInputEnvelope;
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
};
export type AccessLogUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput> | Prisma.AccessLogCreateWithoutBadgeInput[] | Prisma.AccessLogUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutBadgeInput | Prisma.AccessLogCreateOrConnectWithoutBadgeInput[];
    createMany?: Prisma.AccessLogCreateManyBadgeInputEnvelope;
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
};
export type AccessLogUpdateManyWithoutBadgeNestedInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput> | Prisma.AccessLogCreateWithoutBadgeInput[] | Prisma.AccessLogUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutBadgeInput | Prisma.AccessLogCreateOrConnectWithoutBadgeInput[];
    upsert?: Prisma.AccessLogUpsertWithWhereUniqueWithoutBadgeInput | Prisma.AccessLogUpsertWithWhereUniqueWithoutBadgeInput[];
    createMany?: Prisma.AccessLogCreateManyBadgeInputEnvelope;
    set?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    disconnect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    delete?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    update?: Prisma.AccessLogUpdateWithWhereUniqueWithoutBadgeInput | Prisma.AccessLogUpdateWithWhereUniqueWithoutBadgeInput[];
    updateMany?: Prisma.AccessLogUpdateManyWithWhereWithoutBadgeInput | Prisma.AccessLogUpdateManyWithWhereWithoutBadgeInput[];
    deleteMany?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
};
export type AccessLogUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput> | Prisma.AccessLogCreateWithoutBadgeInput[] | Prisma.AccessLogUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.AccessLogCreateOrConnectWithoutBadgeInput | Prisma.AccessLogCreateOrConnectWithoutBadgeInput[];
    upsert?: Prisma.AccessLogUpsertWithWhereUniqueWithoutBadgeInput | Prisma.AccessLogUpsertWithWhereUniqueWithoutBadgeInput[];
    createMany?: Prisma.AccessLogCreateManyBadgeInputEnvelope;
    set?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    disconnect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    delete?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    connect?: Prisma.AccessLogWhereUniqueInput | Prisma.AccessLogWhereUniqueInput[];
    update?: Prisma.AccessLogUpdateWithWhereUniqueWithoutBadgeInput | Prisma.AccessLogUpdateWithWhereUniqueWithoutBadgeInput[];
    updateMany?: Prisma.AccessLogUpdateManyWithWhereWithoutBadgeInput | Prisma.AccessLogUpdateManyWithWhereWithoutBadgeInput[];
    deleteMany?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
};
export type EnumAccessResultFieldUpdateOperationsInput = {
    set?: $Enums.AccessResult;
};
export type AccessLogCreateWithoutZoneInput = {
    id?: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
    badge: Prisma.AccessBadgeCreateNestedOneWithoutAccessLogsInput;
};
export type AccessLogUncheckedCreateWithoutZoneInput = {
    id?: string;
    badgeId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogCreateOrConnectWithoutZoneInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput>;
};
export type AccessLogCreateManyZoneInputEnvelope = {
    data: Prisma.AccessLogCreateManyZoneInput | Prisma.AccessLogCreateManyZoneInput[];
    skipDuplicates?: boolean;
};
export type AccessLogUpsertWithWhereUniqueWithoutZoneInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccessLogUpdateWithoutZoneInput, Prisma.AccessLogUncheckedUpdateWithoutZoneInput>;
    create: Prisma.XOR<Prisma.AccessLogCreateWithoutZoneInput, Prisma.AccessLogUncheckedCreateWithoutZoneInput>;
};
export type AccessLogUpdateWithWhereUniqueWithoutZoneInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccessLogUpdateWithoutZoneInput, Prisma.AccessLogUncheckedUpdateWithoutZoneInput>;
};
export type AccessLogUpdateManyWithWhereWithoutZoneInput = {
    where: Prisma.AccessLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AccessLogUpdateManyMutationInput, Prisma.AccessLogUncheckedUpdateManyWithoutZoneInput>;
};
export type AccessLogScalarWhereInput = {
    AND?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
    OR?: Prisma.AccessLogScalarWhereInput[];
    NOT?: Prisma.AccessLogScalarWhereInput | Prisma.AccessLogScalarWhereInput[];
    id?: Prisma.StringFilter<"AccessLog"> | string;
    badgeId?: Prisma.StringFilter<"AccessLog"> | string;
    zoneId?: Prisma.StringFilter<"AccessLog"> | string;
    eventId?: Prisma.StringFilter<"AccessLog"> | string;
    scannedById?: Prisma.StringFilter<"AccessLog"> | string;
    result?: Prisma.EnumAccessResultFilter<"AccessLog"> | $Enums.AccessResult;
    refusalReason?: Prisma.StringNullableFilter<"AccessLog"> | string | null;
    offlineSync?: Prisma.BoolFilter<"AccessLog"> | boolean;
    scannedAt?: Prisma.DateTimeFilter<"AccessLog"> | Date | string;
};
export type AccessLogCreateWithoutBadgeInput = {
    id?: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
    zone: Prisma.EventZoneCreateNestedOneWithoutAccessLogsInput;
};
export type AccessLogUncheckedCreateWithoutBadgeInput = {
    id?: string;
    zoneId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogCreateOrConnectWithoutBadgeInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput>;
};
export type AccessLogCreateManyBadgeInputEnvelope = {
    data: Prisma.AccessLogCreateManyBadgeInput | Prisma.AccessLogCreateManyBadgeInput[];
    skipDuplicates?: boolean;
};
export type AccessLogUpsertWithWhereUniqueWithoutBadgeInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccessLogUpdateWithoutBadgeInput, Prisma.AccessLogUncheckedUpdateWithoutBadgeInput>;
    create: Prisma.XOR<Prisma.AccessLogCreateWithoutBadgeInput, Prisma.AccessLogUncheckedCreateWithoutBadgeInput>;
};
export type AccessLogUpdateWithWhereUniqueWithoutBadgeInput = {
    where: Prisma.AccessLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccessLogUpdateWithoutBadgeInput, Prisma.AccessLogUncheckedUpdateWithoutBadgeInput>;
};
export type AccessLogUpdateManyWithWhereWithoutBadgeInput = {
    where: Prisma.AccessLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AccessLogUpdateManyMutationInput, Prisma.AccessLogUncheckedUpdateManyWithoutBadgeInput>;
};
export type AccessLogCreateManyZoneInput = {
    id?: string;
    badgeId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    badge?: Prisma.AccessBadgeUpdateOneRequiredWithoutAccessLogsNestedInput;
};
export type AccessLogUncheckedUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogUncheckedUpdateManyWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogCreateManyBadgeInput = {
    id?: string;
    zoneId: string;
    eventId: string;
    scannedById: string;
    result: $Enums.AccessResult;
    refusalReason?: string | null;
    offlineSync?: boolean;
    scannedAt?: Date | string;
};
export type AccessLogUpdateWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.EventZoneUpdateOneRequiredWithoutAccessLogsNestedInput;
};
export type AccessLogUncheckedUpdateWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogUncheckedUpdateManyWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannedById?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumAccessResultFieldUpdateOperationsInput | $Enums.AccessResult;
    refusalReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineSync?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    zoneId?: boolean;
    eventId?: boolean;
    scannedById?: boolean;
    result?: boolean;
    refusalReason?: boolean;
    offlineSync?: boolean;
    scannedAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessLog"]>;
export type AccessLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    zoneId?: boolean;
    eventId?: boolean;
    scannedById?: boolean;
    result?: boolean;
    refusalReason?: boolean;
    offlineSync?: boolean;
    scannedAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessLog"]>;
export type AccessLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    zoneId?: boolean;
    eventId?: boolean;
    scannedById?: boolean;
    result?: boolean;
    refusalReason?: boolean;
    offlineSync?: boolean;
    scannedAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessLog"]>;
export type AccessLogSelectScalar = {
    id?: boolean;
    badgeId?: boolean;
    zoneId?: boolean;
    eventId?: boolean;
    scannedById?: boolean;
    result?: boolean;
    refusalReason?: boolean;
    offlineSync?: boolean;
    scannedAt?: boolean;
};
export type AccessLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "badgeId" | "zoneId" | "eventId" | "scannedById" | "result" | "refusalReason" | "offlineSync" | "scannedAt", ExtArgs["result"]["accessLog"]>;
export type AccessLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type AccessLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type AccessLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type $AccessLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AccessLog";
    objects: {
        badge: Prisma.$AccessBadgePayload<ExtArgs>;
        zone: Prisma.$EventZonePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        badgeId: string;
        zoneId: string;
        eventId: string;
        scannedById: string;
        result: $Enums.AccessResult;
        refusalReason: string | null;
        offlineSync: boolean;
        scannedAt: Date;
    }, ExtArgs["result"]["accessLog"]>;
    composites: {};
};
export type AccessLogGetPayload<S extends boolean | null | undefined | AccessLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccessLogPayload, S>;
export type AccessLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccessLogCountAggregateInputType | true;
};
export interface AccessLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AccessLog'];
        meta: {
            name: 'AccessLog';
        };
    };
    /**
     * Find zero or one AccessLog that matches the filter.
     * @param {AccessLogFindUniqueArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AccessLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessLogFindUniqueOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AccessLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLogs
     * const accessLogs = await prisma.accessLog.findMany()
     *
     * // Get first 10 AccessLogs
     * const accessLogs = await prisma.accessLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccessLogFindManyArgs>(args?: Prisma.SelectSubset<T, AccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AccessLog.
     * @param {AccessLogCreateArgs} args - Arguments to create a AccessLog.
     * @example
     * // Create one AccessLog
     * const AccessLog = await prisma.accessLog.create({
     *   data: {
     *     // ... data to create a AccessLog
     *   }
     * })
     *
     */
    create<T extends AccessLogCreateArgs>(args: Prisma.SelectSubset<T, AccessLogCreateArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AccessLogs.
     * @param {AccessLogCreateManyArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLog = await prisma.accessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccessLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AccessLogs and returns the data saved in the database.
     * @param {AccessLogCreateManyAndReturnArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLog = await prisma.accessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AccessLogs and only return the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccessLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AccessLog.
     * @param {AccessLogDeleteArgs} args - Arguments to delete one AccessLog.
     * @example
     * // Delete one AccessLog
     * const AccessLog = await prisma.accessLog.delete({
     *   where: {
     *     // ... filter to delete one AccessLog
     *   }
     * })
     *
     */
    delete<T extends AccessLogDeleteArgs>(args: Prisma.SelectSubset<T, AccessLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AccessLog.
     * @param {AccessLogUpdateArgs} args - Arguments to update one AccessLog.
     * @example
     * // Update one AccessLog
     * const accessLog = await prisma.accessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccessLogUpdateArgs>(args: Prisma.SelectSubset<T, AccessLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AccessLogs.
     * @param {AccessLogDeleteManyArgs} args - Arguments to filter AccessLogs to delete.
     * @example
     * // Delete a few AccessLogs
     * const { count } = await prisma.accessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccessLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLogs
     * const accessLog = await prisma.accessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccessLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AccessLogs and returns the data updated in the database.
     * @param {AccessLogUpdateManyAndReturnArgs} args - Arguments to update many AccessLogs.
     * @example
     * // Update many AccessLogs
     * const accessLog = await prisma.accessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AccessLogs and only return the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AccessLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AccessLog.
     * @param {AccessLogUpsertArgs} args - Arguments to update or create a AccessLog.
     * @example
     * // Update or create a AccessLog
     * const accessLog = await prisma.accessLog.upsert({
     *   create: {
     *     // ... data to create a AccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessLog we want to update
     *   }
     * })
     */
    upsert<T extends AccessLogUpsertArgs>(args: Prisma.SelectSubset<T, AccessLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AccessLogClient<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogCountArgs} args - Arguments to filter AccessLogs to count.
     * @example
     * // Count the number of AccessLogs
     * const count = await prisma.accessLog.count({
     *   where: {
     *     // ... the filter for the AccessLogs we want to count
     *   }
     * })
    **/
    count<T extends AccessLogCountArgs>(args?: Prisma.Subset<T, AccessLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccessLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessLogAggregateArgs>(args: Prisma.Subset<T, AccessLogAggregateArgs>): Prisma.PrismaPromise<GetAccessLogAggregateType<T>>;
    /**
     * Group by AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AccessLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccessLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AccessLogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AccessLog model
     */
    readonly fields: AccessLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AccessLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AccessLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    badge<T extends Prisma.AccessBadgeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessBadgeDefaultArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    zone<T extends Prisma.EventZoneDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventZoneDefaultArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AccessLog model
 */
export interface AccessLogFieldRefs {
    readonly id: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly badgeId: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly zoneId: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly eventId: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly scannedById: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly result: Prisma.FieldRef<"AccessLog", 'AccessResult'>;
    readonly refusalReason: Prisma.FieldRef<"AccessLog", 'String'>;
    readonly offlineSync: Prisma.FieldRef<"AccessLog", 'Boolean'>;
    readonly scannedAt: Prisma.FieldRef<"AccessLog", 'DateTime'>;
}
/**
 * AccessLog findUnique
 */
export type AccessLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter, which AccessLog to fetch.
     */
    where: Prisma.AccessLogWhereUniqueInput;
};
/**
 * AccessLog findUniqueOrThrow
 */
export type AccessLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter, which AccessLog to fetch.
     */
    where: Prisma.AccessLogWhereUniqueInput;
};
/**
 * AccessLog findFirst
 */
export type AccessLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccessLogs.
     */
    cursor?: Prisma.AccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: Prisma.AccessLogScalarFieldEnum | Prisma.AccessLogScalarFieldEnum[];
};
/**
 * AccessLog findFirstOrThrow
 */
export type AccessLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccessLogs.
     */
    cursor?: Prisma.AccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: Prisma.AccessLogScalarFieldEnum | Prisma.AccessLogScalarFieldEnum[];
};
/**
 * AccessLog findMany
 */
export type AccessLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AccessLogs.
     */
    cursor?: Prisma.AccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessLogs.
     */
    skip?: number;
    distinct?: Prisma.AccessLogScalarFieldEnum | Prisma.AccessLogScalarFieldEnum[];
};
/**
 * AccessLog create
 */
export type AccessLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AccessLog.
     */
    data: Prisma.XOR<Prisma.AccessLogCreateInput, Prisma.AccessLogUncheckedCreateInput>;
};
/**
 * AccessLog createMany
 */
export type AccessLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLogs.
     */
    data: Prisma.AccessLogCreateManyInput | Prisma.AccessLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AccessLog createManyAndReturn
 */
export type AccessLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * The data used to create many AccessLogs.
     */
    data: Prisma.AccessLogCreateManyInput | Prisma.AccessLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AccessLog update
 */
export type AccessLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AccessLog.
     */
    data: Prisma.XOR<Prisma.AccessLogUpdateInput, Prisma.AccessLogUncheckedUpdateInput>;
    /**
     * Choose, which AccessLog to update.
     */
    where: Prisma.AccessLogWhereUniqueInput;
};
/**
 * AccessLog updateMany
 */
export type AccessLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLogs.
     */
    data: Prisma.XOR<Prisma.AccessLogUpdateManyMutationInput, Prisma.AccessLogUncheckedUpdateManyInput>;
    /**
     * Filter which AccessLogs to update
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number;
};
/**
 * AccessLog updateManyAndReturn
 */
export type AccessLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * The data used to update AccessLogs.
     */
    data: Prisma.XOR<Prisma.AccessLogUpdateManyMutationInput, Prisma.AccessLogUncheckedUpdateManyInput>;
    /**
     * Filter which AccessLogs to update
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AccessLog upsert
 */
export type AccessLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AccessLog to update in case it exists.
     */
    where: Prisma.AccessLogWhereUniqueInput;
    /**
     * In case the AccessLog found by the `where` argument doesn't exist, create a new AccessLog with this data.
     */
    create: Prisma.XOR<Prisma.AccessLogCreateInput, Prisma.AccessLogUncheckedCreateInput>;
    /**
     * In case the AccessLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AccessLogUpdateInput, Prisma.AccessLogUncheckedUpdateInput>;
};
/**
 * AccessLog delete
 */
export type AccessLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    /**
     * Filter which AccessLog to delete.
     */
    where: Prisma.AccessLogWhereUniqueInput;
};
/**
 * AccessLog deleteMany
 */
export type AccessLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLogs to delete
     */
    where?: Prisma.AccessLogWhereInput;
    /**
     * Limit how many AccessLogs to delete.
     */
    limit?: number;
};
/**
 * AccessLog without action
 */
export type AccessLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AccessLog.d.ts.map