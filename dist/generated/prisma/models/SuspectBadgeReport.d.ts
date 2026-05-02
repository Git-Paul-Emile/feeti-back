import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SuspectBadgeReport
 *
 */
export type SuspectBadgeReportModel = runtime.Types.Result.DefaultSelection<Prisma.$SuspectBadgeReportPayload>;
export type AggregateSuspectBadgeReport = {
    _count: SuspectBadgeReportCountAggregateOutputType | null;
    _min: SuspectBadgeReportMinAggregateOutputType | null;
    _max: SuspectBadgeReportMaxAggregateOutputType | null;
};
export type SuspectBadgeReportMinAggregateOutputType = {
    id: string | null;
    badgeId: string | null;
    reportedById: string | null;
    reason: string | null;
    resolved: boolean | null;
    createdAt: Date | null;
};
export type SuspectBadgeReportMaxAggregateOutputType = {
    id: string | null;
    badgeId: string | null;
    reportedById: string | null;
    reason: string | null;
    resolved: boolean | null;
    createdAt: Date | null;
};
export type SuspectBadgeReportCountAggregateOutputType = {
    id: number;
    badgeId: number;
    reportedById: number;
    reason: number;
    resolved: number;
    createdAt: number;
    _all: number;
};
export type SuspectBadgeReportMinAggregateInputType = {
    id?: true;
    badgeId?: true;
    reportedById?: true;
    reason?: true;
    resolved?: true;
    createdAt?: true;
};
export type SuspectBadgeReportMaxAggregateInputType = {
    id?: true;
    badgeId?: true;
    reportedById?: true;
    reason?: true;
    resolved?: true;
    createdAt?: true;
};
export type SuspectBadgeReportCountAggregateInputType = {
    id?: true;
    badgeId?: true;
    reportedById?: true;
    reason?: true;
    resolved?: true;
    createdAt?: true;
    _all?: true;
};
export type SuspectBadgeReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuspectBadgeReport to aggregate.
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuspectBadgeReports to fetch.
     */
    orderBy?: Prisma.SuspectBadgeReportOrderByWithRelationInput | Prisma.SuspectBadgeReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SuspectBadgeReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuspectBadgeReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuspectBadgeReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SuspectBadgeReports
    **/
    _count?: true | SuspectBadgeReportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SuspectBadgeReportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SuspectBadgeReportMaxAggregateInputType;
};
export type GetSuspectBadgeReportAggregateType<T extends SuspectBadgeReportAggregateArgs> = {
    [P in keyof T & keyof AggregateSuspectBadgeReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuspectBadgeReport[P]> : Prisma.GetScalarType<T[P], AggregateSuspectBadgeReport[P]>;
};
export type SuspectBadgeReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuspectBadgeReportWhereInput;
    orderBy?: Prisma.SuspectBadgeReportOrderByWithAggregationInput | Prisma.SuspectBadgeReportOrderByWithAggregationInput[];
    by: Prisma.SuspectBadgeReportScalarFieldEnum[] | Prisma.SuspectBadgeReportScalarFieldEnum;
    having?: Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuspectBadgeReportCountAggregateInputType | true;
    _min?: SuspectBadgeReportMinAggregateInputType;
    _max?: SuspectBadgeReportMaxAggregateInputType;
};
export type SuspectBadgeReportGroupByOutputType = {
    id: string;
    badgeId: string;
    reportedById: string;
    reason: string;
    resolved: boolean;
    createdAt: Date;
    _count: SuspectBadgeReportCountAggregateOutputType | null;
    _min: SuspectBadgeReportMinAggregateOutputType | null;
    _max: SuspectBadgeReportMaxAggregateOutputType | null;
};
type GetSuspectBadgeReportGroupByPayload<T extends SuspectBadgeReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuspectBadgeReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuspectBadgeReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuspectBadgeReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuspectBadgeReportGroupByOutputType[P]>;
}>>;
export type SuspectBadgeReportWhereInput = {
    AND?: Prisma.SuspectBadgeReportWhereInput | Prisma.SuspectBadgeReportWhereInput[];
    OR?: Prisma.SuspectBadgeReportWhereInput[];
    NOT?: Prisma.SuspectBadgeReportWhereInput | Prisma.SuspectBadgeReportWhereInput[];
    id?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    badgeId?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reportedById?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reason?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    resolved?: Prisma.BoolFilter<"SuspectBadgeReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SuspectBadgeReport"> | Date | string;
    badge?: Prisma.XOR<Prisma.AccessBadgeScalarRelationFilter, Prisma.AccessBadgeWhereInput>;
};
export type SuspectBadgeReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    badge?: Prisma.AccessBadgeOrderByWithRelationInput;
};
export type SuspectBadgeReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SuspectBadgeReportWhereInput | Prisma.SuspectBadgeReportWhereInput[];
    OR?: Prisma.SuspectBadgeReportWhereInput[];
    NOT?: Prisma.SuspectBadgeReportWhereInput | Prisma.SuspectBadgeReportWhereInput[];
    badgeId?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reportedById?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reason?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    resolved?: Prisma.BoolFilter<"SuspectBadgeReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SuspectBadgeReport"> | Date | string;
    badge?: Prisma.XOR<Prisma.AccessBadgeScalarRelationFilter, Prisma.AccessBadgeWhereInput>;
}, "id">;
export type SuspectBadgeReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SuspectBadgeReportCountOrderByAggregateInput;
    _max?: Prisma.SuspectBadgeReportMaxOrderByAggregateInput;
    _min?: Prisma.SuspectBadgeReportMinOrderByAggregateInput;
};
export type SuspectBadgeReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput | Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput | Prisma.SuspectBadgeReportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SuspectBadgeReport"> | string;
    badgeId?: Prisma.StringWithAggregatesFilter<"SuspectBadgeReport"> | string;
    reportedById?: Prisma.StringWithAggregatesFilter<"SuspectBadgeReport"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"SuspectBadgeReport"> | string;
    resolved?: Prisma.BoolWithAggregatesFilter<"SuspectBadgeReport"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SuspectBadgeReport"> | Date | string;
};
export type SuspectBadgeReportCreateInput = {
    id?: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
    badge: Prisma.AccessBadgeCreateNestedOneWithoutSuspectReportsInput;
};
export type SuspectBadgeReportUncheckedCreateInput = {
    id?: string;
    badgeId: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
};
export type SuspectBadgeReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    badge?: Prisma.AccessBadgeUpdateOneRequiredWithoutSuspectReportsNestedInput;
};
export type SuspectBadgeReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportCreateManyInput = {
    id?: string;
    badgeId: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
};
export type SuspectBadgeReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportListRelationFilter = {
    every?: Prisma.SuspectBadgeReportWhereInput;
    some?: Prisma.SuspectBadgeReportWhereInput;
    none?: Prisma.SuspectBadgeReportWhereInput;
};
export type SuspectBadgeReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SuspectBadgeReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SuspectBadgeReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SuspectBadgeReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    badgeId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SuspectBadgeReportCreateNestedManyWithoutBadgeInput = {
    create?: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput> | Prisma.SuspectBadgeReportCreateWithoutBadgeInput[] | Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput | Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput[];
    createMany?: Prisma.SuspectBadgeReportCreateManyBadgeInputEnvelope;
    connect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
};
export type SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput> | Prisma.SuspectBadgeReportCreateWithoutBadgeInput[] | Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput | Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput[];
    createMany?: Prisma.SuspectBadgeReportCreateManyBadgeInputEnvelope;
    connect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
};
export type SuspectBadgeReportUpdateManyWithoutBadgeNestedInput = {
    create?: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput> | Prisma.SuspectBadgeReportCreateWithoutBadgeInput[] | Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput | Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput[];
    upsert?: Prisma.SuspectBadgeReportUpsertWithWhereUniqueWithoutBadgeInput | Prisma.SuspectBadgeReportUpsertWithWhereUniqueWithoutBadgeInput[];
    createMany?: Prisma.SuspectBadgeReportCreateManyBadgeInputEnvelope;
    set?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    disconnect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    delete?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    connect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    update?: Prisma.SuspectBadgeReportUpdateWithWhereUniqueWithoutBadgeInput | Prisma.SuspectBadgeReportUpdateWithWhereUniqueWithoutBadgeInput[];
    updateMany?: Prisma.SuspectBadgeReportUpdateManyWithWhereWithoutBadgeInput | Prisma.SuspectBadgeReportUpdateManyWithWhereWithoutBadgeInput[];
    deleteMany?: Prisma.SuspectBadgeReportScalarWhereInput | Prisma.SuspectBadgeReportScalarWhereInput[];
};
export type SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput> | Prisma.SuspectBadgeReportCreateWithoutBadgeInput[] | Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput[];
    connectOrCreate?: Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput | Prisma.SuspectBadgeReportCreateOrConnectWithoutBadgeInput[];
    upsert?: Prisma.SuspectBadgeReportUpsertWithWhereUniqueWithoutBadgeInput | Prisma.SuspectBadgeReportUpsertWithWhereUniqueWithoutBadgeInput[];
    createMany?: Prisma.SuspectBadgeReportCreateManyBadgeInputEnvelope;
    set?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    disconnect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    delete?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    connect?: Prisma.SuspectBadgeReportWhereUniqueInput | Prisma.SuspectBadgeReportWhereUniqueInput[];
    update?: Prisma.SuspectBadgeReportUpdateWithWhereUniqueWithoutBadgeInput | Prisma.SuspectBadgeReportUpdateWithWhereUniqueWithoutBadgeInput[];
    updateMany?: Prisma.SuspectBadgeReportUpdateManyWithWhereWithoutBadgeInput | Prisma.SuspectBadgeReportUpdateManyWithWhereWithoutBadgeInput[];
    deleteMany?: Prisma.SuspectBadgeReportScalarWhereInput | Prisma.SuspectBadgeReportScalarWhereInput[];
};
export type SuspectBadgeReportCreateWithoutBadgeInput = {
    id?: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
};
export type SuspectBadgeReportUncheckedCreateWithoutBadgeInput = {
    id?: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
};
export type SuspectBadgeReportCreateOrConnectWithoutBadgeInput = {
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput>;
};
export type SuspectBadgeReportCreateManyBadgeInputEnvelope = {
    data: Prisma.SuspectBadgeReportCreateManyBadgeInput | Prisma.SuspectBadgeReportCreateManyBadgeInput[];
    skipDuplicates?: boolean;
};
export type SuspectBadgeReportUpsertWithWhereUniqueWithoutBadgeInput = {
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuspectBadgeReportUpdateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedUpdateWithoutBadgeInput>;
    create: Prisma.XOR<Prisma.SuspectBadgeReportCreateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedCreateWithoutBadgeInput>;
};
export type SuspectBadgeReportUpdateWithWhereUniqueWithoutBadgeInput = {
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuspectBadgeReportUpdateWithoutBadgeInput, Prisma.SuspectBadgeReportUncheckedUpdateWithoutBadgeInput>;
};
export type SuspectBadgeReportUpdateManyWithWhereWithoutBadgeInput = {
    where: Prisma.SuspectBadgeReportScalarWhereInput;
    data: Prisma.XOR<Prisma.SuspectBadgeReportUpdateManyMutationInput, Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeInput>;
};
export type SuspectBadgeReportScalarWhereInput = {
    AND?: Prisma.SuspectBadgeReportScalarWhereInput | Prisma.SuspectBadgeReportScalarWhereInput[];
    OR?: Prisma.SuspectBadgeReportScalarWhereInput[];
    NOT?: Prisma.SuspectBadgeReportScalarWhereInput | Prisma.SuspectBadgeReportScalarWhereInput[];
    id?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    badgeId?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reportedById?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    reason?: Prisma.StringFilter<"SuspectBadgeReport"> | string;
    resolved?: Prisma.BoolFilter<"SuspectBadgeReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SuspectBadgeReport"> | Date | string;
};
export type SuspectBadgeReportCreateManyBadgeInput = {
    id?: string;
    reportedById: string;
    reason: string;
    resolved?: boolean;
    createdAt?: Date | string;
};
export type SuspectBadgeReportUpdateWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportUncheckedUpdateWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportUncheckedUpdateManyWithoutBadgeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuspectBadgeReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    reportedById?: boolean;
    reason?: boolean;
    resolved?: boolean;
    createdAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suspectBadgeReport"]>;
export type SuspectBadgeReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    reportedById?: boolean;
    reason?: boolean;
    resolved?: boolean;
    createdAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suspectBadgeReport"]>;
export type SuspectBadgeReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    badgeId?: boolean;
    reportedById?: boolean;
    reason?: boolean;
    resolved?: boolean;
    createdAt?: boolean;
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suspectBadgeReport"]>;
export type SuspectBadgeReportSelectScalar = {
    id?: boolean;
    badgeId?: boolean;
    reportedById?: boolean;
    reason?: boolean;
    resolved?: boolean;
    createdAt?: boolean;
};
export type SuspectBadgeReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "badgeId" | "reportedById" | "reason" | "resolved" | "createdAt", ExtArgs["result"]["suspectBadgeReport"]>;
export type SuspectBadgeReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
};
export type SuspectBadgeReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
};
export type SuspectBadgeReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    badge?: boolean | Prisma.AccessBadgeDefaultArgs<ExtArgs>;
};
export type $SuspectBadgeReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SuspectBadgeReport";
    objects: {
        badge: Prisma.$AccessBadgePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        badgeId: string;
        reportedById: string;
        reason: string;
        resolved: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["suspectBadgeReport"]>;
    composites: {};
};
export type SuspectBadgeReportGetPayload<S extends boolean | null | undefined | SuspectBadgeReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload, S>;
export type SuspectBadgeReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuspectBadgeReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuspectBadgeReportCountAggregateInputType | true;
};
export interface SuspectBadgeReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SuspectBadgeReport'];
        meta: {
            name: 'SuspectBadgeReport';
        };
    };
    /**
     * Find zero or one SuspectBadgeReport that matches the filter.
     * @param {SuspectBadgeReportFindUniqueArgs} args - Arguments to find a SuspectBadgeReport
     * @example
     * // Get one SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuspectBadgeReportFindUniqueArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SuspectBadgeReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuspectBadgeReportFindUniqueOrThrowArgs} args - Arguments to find a SuspectBadgeReport
     * @example
     * // Get one SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuspectBadgeReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuspectBadgeReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportFindFirstArgs} args - Arguments to find a SuspectBadgeReport
     * @example
     * // Get one SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuspectBadgeReportFindFirstArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuspectBadgeReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportFindFirstOrThrowArgs} args - Arguments to find a SuspectBadgeReport
     * @example
     * // Get one SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuspectBadgeReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SuspectBadgeReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuspectBadgeReports
     * const suspectBadgeReports = await prisma.suspectBadgeReport.findMany()
     *
     * // Get first 10 SuspectBadgeReports
     * const suspectBadgeReports = await prisma.suspectBadgeReport.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const suspectBadgeReportWithIdOnly = await prisma.suspectBadgeReport.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SuspectBadgeReportFindManyArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SuspectBadgeReport.
     * @param {SuspectBadgeReportCreateArgs} args - Arguments to create a SuspectBadgeReport.
     * @example
     * // Create one SuspectBadgeReport
     * const SuspectBadgeReport = await prisma.suspectBadgeReport.create({
     *   data: {
     *     // ... data to create a SuspectBadgeReport
     *   }
     * })
     *
     */
    create<T extends SuspectBadgeReportCreateArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportCreateArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SuspectBadgeReports.
     * @param {SuspectBadgeReportCreateManyArgs} args - Arguments to create many SuspectBadgeReports.
     * @example
     * // Create many SuspectBadgeReports
     * const suspectBadgeReport = await prisma.suspectBadgeReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SuspectBadgeReportCreateManyArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SuspectBadgeReports and returns the data saved in the database.
     * @param {SuspectBadgeReportCreateManyAndReturnArgs} args - Arguments to create many SuspectBadgeReports.
     * @example
     * // Create many SuspectBadgeReports
     * const suspectBadgeReport = await prisma.suspectBadgeReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SuspectBadgeReports and only return the `id`
     * const suspectBadgeReportWithIdOnly = await prisma.suspectBadgeReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SuspectBadgeReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SuspectBadgeReport.
     * @param {SuspectBadgeReportDeleteArgs} args - Arguments to delete one SuspectBadgeReport.
     * @example
     * // Delete one SuspectBadgeReport
     * const SuspectBadgeReport = await prisma.suspectBadgeReport.delete({
     *   where: {
     *     // ... filter to delete one SuspectBadgeReport
     *   }
     * })
     *
     */
    delete<T extends SuspectBadgeReportDeleteArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportDeleteArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SuspectBadgeReport.
     * @param {SuspectBadgeReportUpdateArgs} args - Arguments to update one SuspectBadgeReport.
     * @example
     * // Update one SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SuspectBadgeReportUpdateArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportUpdateArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SuspectBadgeReports.
     * @param {SuspectBadgeReportDeleteManyArgs} args - Arguments to filter SuspectBadgeReports to delete.
     * @example
     * // Delete a few SuspectBadgeReports
     * const { count } = await prisma.suspectBadgeReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SuspectBadgeReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuspectBadgeReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuspectBadgeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuspectBadgeReports
     * const suspectBadgeReport = await prisma.suspectBadgeReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SuspectBadgeReportUpdateManyArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuspectBadgeReports and returns the data updated in the database.
     * @param {SuspectBadgeReportUpdateManyAndReturnArgs} args - Arguments to update many SuspectBadgeReports.
     * @example
     * // Update many SuspectBadgeReports
     * const suspectBadgeReport = await prisma.suspectBadgeReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SuspectBadgeReports and only return the `id`
     * const suspectBadgeReportWithIdOnly = await prisma.suspectBadgeReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuspectBadgeReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SuspectBadgeReport.
     * @param {SuspectBadgeReportUpsertArgs} args - Arguments to update or create a SuspectBadgeReport.
     * @example
     * // Update or create a SuspectBadgeReport
     * const suspectBadgeReport = await prisma.suspectBadgeReport.upsert({
     *   create: {
     *     // ... data to create a SuspectBadgeReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuspectBadgeReport we want to update
     *   }
     * })
     */
    upsert<T extends SuspectBadgeReportUpsertArgs>(args: Prisma.SelectSubset<T, SuspectBadgeReportUpsertArgs<ExtArgs>>): Prisma.Prisma__SuspectBadgeReportClient<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SuspectBadgeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportCountArgs} args - Arguments to filter SuspectBadgeReports to count.
     * @example
     * // Count the number of SuspectBadgeReports
     * const count = await prisma.suspectBadgeReport.count({
     *   where: {
     *     // ... the filter for the SuspectBadgeReports we want to count
     *   }
     * })
    **/
    count<T extends SuspectBadgeReportCountArgs>(args?: Prisma.Subset<T, SuspectBadgeReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuspectBadgeReportCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SuspectBadgeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuspectBadgeReportAggregateArgs>(args: Prisma.Subset<T, SuspectBadgeReportAggregateArgs>): Prisma.PrismaPromise<GetSuspectBadgeReportAggregateType<T>>;
    /**
     * Group by SuspectBadgeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspectBadgeReportGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SuspectBadgeReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuspectBadgeReportGroupByArgs['orderBy'];
    } : {
        orderBy?: SuspectBadgeReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuspectBadgeReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuspectBadgeReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SuspectBadgeReport model
     */
    readonly fields: SuspectBadgeReportFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SuspectBadgeReport.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SuspectBadgeReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    badge<T extends Prisma.AccessBadgeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessBadgeDefaultArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SuspectBadgeReport model
 */
export interface SuspectBadgeReportFieldRefs {
    readonly id: Prisma.FieldRef<"SuspectBadgeReport", 'String'>;
    readonly badgeId: Prisma.FieldRef<"SuspectBadgeReport", 'String'>;
    readonly reportedById: Prisma.FieldRef<"SuspectBadgeReport", 'String'>;
    readonly reason: Prisma.FieldRef<"SuspectBadgeReport", 'String'>;
    readonly resolved: Prisma.FieldRef<"SuspectBadgeReport", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"SuspectBadgeReport", 'DateTime'>;
}
/**
 * SuspectBadgeReport findUnique
 */
export type SuspectBadgeReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter, which SuspectBadgeReport to fetch.
     */
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
};
/**
 * SuspectBadgeReport findUniqueOrThrow
 */
export type SuspectBadgeReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter, which SuspectBadgeReport to fetch.
     */
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
};
/**
 * SuspectBadgeReport findFirst
 */
export type SuspectBadgeReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter, which SuspectBadgeReport to fetch.
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuspectBadgeReports to fetch.
     */
    orderBy?: Prisma.SuspectBadgeReportOrderByWithRelationInput | Prisma.SuspectBadgeReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuspectBadgeReports.
     */
    cursor?: Prisma.SuspectBadgeReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuspectBadgeReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuspectBadgeReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuspectBadgeReports.
     */
    distinct?: Prisma.SuspectBadgeReportScalarFieldEnum | Prisma.SuspectBadgeReportScalarFieldEnum[];
};
/**
 * SuspectBadgeReport findFirstOrThrow
 */
export type SuspectBadgeReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter, which SuspectBadgeReport to fetch.
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuspectBadgeReports to fetch.
     */
    orderBy?: Prisma.SuspectBadgeReportOrderByWithRelationInput | Prisma.SuspectBadgeReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuspectBadgeReports.
     */
    cursor?: Prisma.SuspectBadgeReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuspectBadgeReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuspectBadgeReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuspectBadgeReports.
     */
    distinct?: Prisma.SuspectBadgeReportScalarFieldEnum | Prisma.SuspectBadgeReportScalarFieldEnum[];
};
/**
 * SuspectBadgeReport findMany
 */
export type SuspectBadgeReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter, which SuspectBadgeReports to fetch.
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuspectBadgeReports to fetch.
     */
    orderBy?: Prisma.SuspectBadgeReportOrderByWithRelationInput | Prisma.SuspectBadgeReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SuspectBadgeReports.
     */
    cursor?: Prisma.SuspectBadgeReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuspectBadgeReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuspectBadgeReports.
     */
    skip?: number;
    distinct?: Prisma.SuspectBadgeReportScalarFieldEnum | Prisma.SuspectBadgeReportScalarFieldEnum[];
};
/**
 * SuspectBadgeReport create
 */
export type SuspectBadgeReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * The data needed to create a SuspectBadgeReport.
     */
    data: Prisma.XOR<Prisma.SuspectBadgeReportCreateInput, Prisma.SuspectBadgeReportUncheckedCreateInput>;
};
/**
 * SuspectBadgeReport createMany
 */
export type SuspectBadgeReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuspectBadgeReports.
     */
    data: Prisma.SuspectBadgeReportCreateManyInput | Prisma.SuspectBadgeReportCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SuspectBadgeReport createManyAndReturn
 */
export type SuspectBadgeReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * The data used to create many SuspectBadgeReports.
     */
    data: Prisma.SuspectBadgeReportCreateManyInput | Prisma.SuspectBadgeReportCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SuspectBadgeReport update
 */
export type SuspectBadgeReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * The data needed to update a SuspectBadgeReport.
     */
    data: Prisma.XOR<Prisma.SuspectBadgeReportUpdateInput, Prisma.SuspectBadgeReportUncheckedUpdateInput>;
    /**
     * Choose, which SuspectBadgeReport to update.
     */
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
};
/**
 * SuspectBadgeReport updateMany
 */
export type SuspectBadgeReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SuspectBadgeReports.
     */
    data: Prisma.XOR<Prisma.SuspectBadgeReportUpdateManyMutationInput, Prisma.SuspectBadgeReportUncheckedUpdateManyInput>;
    /**
     * Filter which SuspectBadgeReports to update
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * Limit how many SuspectBadgeReports to update.
     */
    limit?: number;
};
/**
 * SuspectBadgeReport updateManyAndReturn
 */
export type SuspectBadgeReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * The data used to update SuspectBadgeReports.
     */
    data: Prisma.XOR<Prisma.SuspectBadgeReportUpdateManyMutationInput, Prisma.SuspectBadgeReportUncheckedUpdateManyInput>;
    /**
     * Filter which SuspectBadgeReports to update
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * Limit how many SuspectBadgeReports to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SuspectBadgeReport upsert
 */
export type SuspectBadgeReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * The filter to search for the SuspectBadgeReport to update in case it exists.
     */
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
    /**
     * In case the SuspectBadgeReport found by the `where` argument doesn't exist, create a new SuspectBadgeReport with this data.
     */
    create: Prisma.XOR<Prisma.SuspectBadgeReportCreateInput, Prisma.SuspectBadgeReportUncheckedCreateInput>;
    /**
     * In case the SuspectBadgeReport was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SuspectBadgeReportUpdateInput, Prisma.SuspectBadgeReportUncheckedUpdateInput>;
};
/**
 * SuspectBadgeReport delete
 */
export type SuspectBadgeReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
    /**
     * Filter which SuspectBadgeReport to delete.
     */
    where: Prisma.SuspectBadgeReportWhereUniqueInput;
};
/**
 * SuspectBadgeReport deleteMany
 */
export type SuspectBadgeReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuspectBadgeReports to delete
     */
    where?: Prisma.SuspectBadgeReportWhereInput;
    /**
     * Limit how many SuspectBadgeReports to delete.
     */
    limit?: number;
};
/**
 * SuspectBadgeReport without action
 */
export type SuspectBadgeReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspectBadgeReport
     */
    select?: Prisma.SuspectBadgeReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuspectBadgeReport
     */
    omit?: Prisma.SuspectBadgeReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuspectBadgeReportInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SuspectBadgeReport.d.ts.map