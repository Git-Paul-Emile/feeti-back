import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PointsLedger
 *
 */
export type PointsLedgerModel = runtime.Types.Result.DefaultSelection<Prisma.$PointsLedgerPayload>;
export type AggregatePointsLedger = {
    _count: PointsLedgerCountAggregateOutputType | null;
    _avg: PointsLedgerAvgAggregateOutputType | null;
    _sum: PointsLedgerSumAggregateOutputType | null;
    _min: PointsLedgerMinAggregateOutputType | null;
    _max: PointsLedgerMaxAggregateOutputType | null;
};
export type PointsLedgerAvgAggregateOutputType = {
    points: number | null;
    balanceBefore: number | null;
    balanceAfter: number | null;
};
export type PointsLedgerSumAggregateOutputType = {
    points: number | null;
    balanceBefore: number | null;
    balanceAfter: number | null;
};
export type PointsLedgerMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    action: $Enums.PointsActionType | null;
    points: number | null;
    balanceBefore: number | null;
    balanceAfter: number | null;
    description: string | null;
    referenceId: string | null;
    referenceType: string | null;
    createdAt: Date | null;
};
export type PointsLedgerMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    action: $Enums.PointsActionType | null;
    points: number | null;
    balanceBefore: number | null;
    balanceAfter: number | null;
    description: string | null;
    referenceId: string | null;
    referenceType: string | null;
    createdAt: Date | null;
};
export type PointsLedgerCountAggregateOutputType = {
    id: number;
    profileId: number;
    action: number;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: number;
    referenceId: number;
    referenceType: number;
    createdAt: number;
    _all: number;
};
export type PointsLedgerAvgAggregateInputType = {
    points?: true;
    balanceBefore?: true;
    balanceAfter?: true;
};
export type PointsLedgerSumAggregateInputType = {
    points?: true;
    balanceBefore?: true;
    balanceAfter?: true;
};
export type PointsLedgerMinAggregateInputType = {
    id?: true;
    profileId?: true;
    action?: true;
    points?: true;
    balanceBefore?: true;
    balanceAfter?: true;
    description?: true;
    referenceId?: true;
    referenceType?: true;
    createdAt?: true;
};
export type PointsLedgerMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    action?: true;
    points?: true;
    balanceBefore?: true;
    balanceAfter?: true;
    description?: true;
    referenceId?: true;
    referenceType?: true;
    createdAt?: true;
};
export type PointsLedgerCountAggregateInputType = {
    id?: true;
    profileId?: true;
    action?: true;
    points?: true;
    balanceBefore?: true;
    balanceAfter?: true;
    description?: true;
    referenceId?: true;
    referenceType?: true;
    createdAt?: true;
    _all?: true;
};
export type PointsLedgerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PointsLedger to aggregate.
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PointsLedgers to fetch.
     */
    orderBy?: Prisma.PointsLedgerOrderByWithRelationInput | Prisma.PointsLedgerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PointsLedgerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PointsLedgers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PointsLedgers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PointsLedgers
    **/
    _count?: true | PointsLedgerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PointsLedgerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PointsLedgerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PointsLedgerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PointsLedgerMaxAggregateInputType;
};
export type GetPointsLedgerAggregateType<T extends PointsLedgerAggregateArgs> = {
    [P in keyof T & keyof AggregatePointsLedger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePointsLedger[P]> : Prisma.GetScalarType<T[P], AggregatePointsLedger[P]>;
};
export type PointsLedgerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointsLedgerWhereInput;
    orderBy?: Prisma.PointsLedgerOrderByWithAggregationInput | Prisma.PointsLedgerOrderByWithAggregationInput[];
    by: Prisma.PointsLedgerScalarFieldEnum[] | Prisma.PointsLedgerScalarFieldEnum;
    having?: Prisma.PointsLedgerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PointsLedgerCountAggregateInputType | true;
    _avg?: PointsLedgerAvgAggregateInputType;
    _sum?: PointsLedgerSumAggregateInputType;
    _min?: PointsLedgerMinAggregateInputType;
    _max?: PointsLedgerMaxAggregateInputType;
};
export type PointsLedgerGroupByOutputType = {
    id: string;
    profileId: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId: string | null;
    referenceType: string | null;
    createdAt: Date;
    _count: PointsLedgerCountAggregateOutputType | null;
    _avg: PointsLedgerAvgAggregateOutputType | null;
    _sum: PointsLedgerSumAggregateOutputType | null;
    _min: PointsLedgerMinAggregateOutputType | null;
    _max: PointsLedgerMaxAggregateOutputType | null;
};
type GetPointsLedgerGroupByPayload<T extends PointsLedgerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PointsLedgerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PointsLedgerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PointsLedgerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PointsLedgerGroupByOutputType[P]>;
}>>;
export type PointsLedgerWhereInput = {
    AND?: Prisma.PointsLedgerWhereInput | Prisma.PointsLedgerWhereInput[];
    OR?: Prisma.PointsLedgerWhereInput[];
    NOT?: Prisma.PointsLedgerWhereInput | Prisma.PointsLedgerWhereInput[];
    id?: Prisma.StringFilter<"PointsLedger"> | string;
    profileId?: Prisma.StringFilter<"PointsLedger"> | string;
    action?: Prisma.EnumPointsActionTypeFilter<"PointsLedger"> | $Enums.PointsActionType;
    points?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceBefore?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"PointsLedger"> | number;
    description?: Prisma.StringFilter<"PointsLedger"> | string;
    referenceId?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    referenceType?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointsLedger"> | Date | string;
    profile?: Prisma.XOR<Prisma.LoyaltyProfileScalarRelationFilter, Prisma.LoyaltyProfileWhereInput>;
};
export type PointsLedgerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.LoyaltyProfileOrderByWithRelationInput;
};
export type PointsLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PointsLedgerWhereInput | Prisma.PointsLedgerWhereInput[];
    OR?: Prisma.PointsLedgerWhereInput[];
    NOT?: Prisma.PointsLedgerWhereInput | Prisma.PointsLedgerWhereInput[];
    profileId?: Prisma.StringFilter<"PointsLedger"> | string;
    action?: Prisma.EnumPointsActionTypeFilter<"PointsLedger"> | $Enums.PointsActionType;
    points?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceBefore?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"PointsLedger"> | number;
    description?: Prisma.StringFilter<"PointsLedger"> | string;
    referenceId?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    referenceType?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointsLedger"> | Date | string;
    profile?: Prisma.XOR<Prisma.LoyaltyProfileScalarRelationFilter, Prisma.LoyaltyProfileWhereInput>;
}, "id">;
export type PointsLedgerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PointsLedgerCountOrderByAggregateInput;
    _avg?: Prisma.PointsLedgerAvgOrderByAggregateInput;
    _max?: Prisma.PointsLedgerMaxOrderByAggregateInput;
    _min?: Prisma.PointsLedgerMinOrderByAggregateInput;
    _sum?: Prisma.PointsLedgerSumOrderByAggregateInput;
};
export type PointsLedgerScalarWhereWithAggregatesInput = {
    AND?: Prisma.PointsLedgerScalarWhereWithAggregatesInput | Prisma.PointsLedgerScalarWhereWithAggregatesInput[];
    OR?: Prisma.PointsLedgerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PointsLedgerScalarWhereWithAggregatesInput | Prisma.PointsLedgerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PointsLedger"> | string;
    profileId?: Prisma.StringWithAggregatesFilter<"PointsLedger"> | string;
    action?: Prisma.EnumPointsActionTypeWithAggregatesFilter<"PointsLedger"> | $Enums.PointsActionType;
    points?: Prisma.IntWithAggregatesFilter<"PointsLedger"> | number;
    balanceBefore?: Prisma.IntWithAggregatesFilter<"PointsLedger"> | number;
    balanceAfter?: Prisma.IntWithAggregatesFilter<"PointsLedger"> | number;
    description?: Prisma.StringWithAggregatesFilter<"PointsLedger"> | string;
    referenceId?: Prisma.StringNullableWithAggregatesFilter<"PointsLedger"> | string | null;
    referenceType?: Prisma.StringNullableWithAggregatesFilter<"PointsLedger"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PointsLedger"> | Date | string;
};
export type PointsLedgerCreateInput = {
    id?: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
    profile: Prisma.LoyaltyProfileCreateNestedOneWithoutPointsLedgerInput;
};
export type PointsLedgerUncheckedCreateInput = {
    id?: string;
    profileId: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
};
export type PointsLedgerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.LoyaltyProfileUpdateOneRequiredWithoutPointsLedgerNestedInput;
};
export type PointsLedgerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerCreateManyInput = {
    id?: string;
    profileId: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
};
export type PointsLedgerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerListRelationFilter = {
    every?: Prisma.PointsLedgerWhereInput;
    some?: Prisma.PointsLedgerWhereInput;
    none?: Prisma.PointsLedgerWhereInput;
};
export type PointsLedgerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PointsLedgerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointsLedgerAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type PointsLedgerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointsLedgerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointsLedgerSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    balanceBefore?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type PointsLedgerCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput> | Prisma.PointsLedgerCreateWithoutProfileInput[] | Prisma.PointsLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PointsLedgerCreateOrConnectWithoutProfileInput | Prisma.PointsLedgerCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PointsLedgerCreateManyProfileInputEnvelope;
    connect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
};
export type PointsLedgerUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput> | Prisma.PointsLedgerCreateWithoutProfileInput[] | Prisma.PointsLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PointsLedgerCreateOrConnectWithoutProfileInput | Prisma.PointsLedgerCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PointsLedgerCreateManyProfileInputEnvelope;
    connect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
};
export type PointsLedgerUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput> | Prisma.PointsLedgerCreateWithoutProfileInput[] | Prisma.PointsLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PointsLedgerCreateOrConnectWithoutProfileInput | Prisma.PointsLedgerCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PointsLedgerUpsertWithWhereUniqueWithoutProfileInput | Prisma.PointsLedgerUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PointsLedgerCreateManyProfileInputEnvelope;
    set?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    disconnect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    delete?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    connect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    update?: Prisma.PointsLedgerUpdateWithWhereUniqueWithoutProfileInput | Prisma.PointsLedgerUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PointsLedgerUpdateManyWithWhereWithoutProfileInput | Prisma.PointsLedgerUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PointsLedgerScalarWhereInput | Prisma.PointsLedgerScalarWhereInput[];
};
export type PointsLedgerUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput> | Prisma.PointsLedgerCreateWithoutProfileInput[] | Prisma.PointsLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PointsLedgerCreateOrConnectWithoutProfileInput | Prisma.PointsLedgerCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PointsLedgerUpsertWithWhereUniqueWithoutProfileInput | Prisma.PointsLedgerUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PointsLedgerCreateManyProfileInputEnvelope;
    set?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    disconnect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    delete?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    connect?: Prisma.PointsLedgerWhereUniqueInput | Prisma.PointsLedgerWhereUniqueInput[];
    update?: Prisma.PointsLedgerUpdateWithWhereUniqueWithoutProfileInput | Prisma.PointsLedgerUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PointsLedgerUpdateManyWithWhereWithoutProfileInput | Prisma.PointsLedgerUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PointsLedgerScalarWhereInput | Prisma.PointsLedgerScalarWhereInput[];
};
export type EnumPointsActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PointsActionType;
};
export type PointsLedgerCreateWithoutProfileInput = {
    id?: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
};
export type PointsLedgerUncheckedCreateWithoutProfileInput = {
    id?: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
};
export type PointsLedgerCreateOrConnectWithoutProfileInput = {
    where: Prisma.PointsLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput>;
};
export type PointsLedgerCreateManyProfileInputEnvelope = {
    data: Prisma.PointsLedgerCreateManyProfileInput | Prisma.PointsLedgerCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type PointsLedgerUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PointsLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PointsLedgerUpdateWithoutProfileInput, Prisma.PointsLedgerUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.PointsLedgerCreateWithoutProfileInput, Prisma.PointsLedgerUncheckedCreateWithoutProfileInput>;
};
export type PointsLedgerUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PointsLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PointsLedgerUpdateWithoutProfileInput, Prisma.PointsLedgerUncheckedUpdateWithoutProfileInput>;
};
export type PointsLedgerUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.PointsLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.PointsLedgerUpdateManyMutationInput, Prisma.PointsLedgerUncheckedUpdateManyWithoutProfileInput>;
};
export type PointsLedgerScalarWhereInput = {
    AND?: Prisma.PointsLedgerScalarWhereInput | Prisma.PointsLedgerScalarWhereInput[];
    OR?: Prisma.PointsLedgerScalarWhereInput[];
    NOT?: Prisma.PointsLedgerScalarWhereInput | Prisma.PointsLedgerScalarWhereInput[];
    id?: Prisma.StringFilter<"PointsLedger"> | string;
    profileId?: Prisma.StringFilter<"PointsLedger"> | string;
    action?: Prisma.EnumPointsActionTypeFilter<"PointsLedger"> | $Enums.PointsActionType;
    points?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceBefore?: Prisma.IntFilter<"PointsLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"PointsLedger"> | number;
    description?: Prisma.StringFilter<"PointsLedger"> | string;
    referenceId?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    referenceType?: Prisma.StringNullableFilter<"PointsLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointsLedger"> | Date | string;
};
export type PointsLedgerCreateManyProfileInput = {
    id?: string;
    action: $Enums.PointsActionType;
    points: number;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId?: string | null;
    referenceType?: string | null;
    createdAt?: Date | string;
};
export type PointsLedgerUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointsLedgerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    action?: boolean;
    points?: boolean;
    balanceBefore?: boolean;
    balanceAfter?: boolean;
    description?: boolean;
    referenceId?: boolean;
    referenceType?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointsLedger"]>;
export type PointsLedgerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    action?: boolean;
    points?: boolean;
    balanceBefore?: boolean;
    balanceAfter?: boolean;
    description?: boolean;
    referenceId?: boolean;
    referenceType?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointsLedger"]>;
export type PointsLedgerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    action?: boolean;
    points?: boolean;
    balanceBefore?: boolean;
    balanceAfter?: boolean;
    description?: boolean;
    referenceId?: boolean;
    referenceType?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointsLedger"]>;
export type PointsLedgerSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    action?: boolean;
    points?: boolean;
    balanceBefore?: boolean;
    balanceAfter?: boolean;
    description?: boolean;
    referenceId?: boolean;
    referenceType?: boolean;
    createdAt?: boolean;
};
export type PointsLedgerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "action" | "points" | "balanceBefore" | "balanceAfter" | "description" | "referenceId" | "referenceType" | "createdAt", ExtArgs["result"]["pointsLedger"]>;
export type PointsLedgerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
};
export type PointsLedgerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
};
export type PointsLedgerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
};
export type $PointsLedgerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PointsLedger";
    objects: {
        profile: Prisma.$LoyaltyProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        action: $Enums.PointsActionType;
        points: number;
        balanceBefore: number;
        balanceAfter: number;
        description: string;
        referenceId: string | null;
        referenceType: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["pointsLedger"]>;
    composites: {};
};
export type PointsLedgerGetPayload<S extends boolean | null | undefined | PointsLedgerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload, S>;
export type PointsLedgerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PointsLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PointsLedgerCountAggregateInputType | true;
};
export interface PointsLedgerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PointsLedger'];
        meta: {
            name: 'PointsLedger';
        };
    };
    /**
     * Find zero or one PointsLedger that matches the filter.
     * @param {PointsLedgerFindUniqueArgs} args - Arguments to find a PointsLedger
     * @example
     * // Get one PointsLedger
     * const pointsLedger = await prisma.pointsLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsLedgerFindUniqueArgs>(args: Prisma.SelectSubset<T, PointsLedgerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PointsLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsLedgerFindUniqueOrThrowArgs} args - Arguments to find a PointsLedger
     * @example
     * // Get one PointsLedger
     * const pointsLedger = await prisma.pointsLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsLedgerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PointsLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PointsLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerFindFirstArgs} args - Arguments to find a PointsLedger
     * @example
     * // Get one PointsLedger
     * const pointsLedger = await prisma.pointsLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsLedgerFindFirstArgs>(args?: Prisma.SelectSubset<T, PointsLedgerFindFirstArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PointsLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerFindFirstOrThrowArgs} args - Arguments to find a PointsLedger
     * @example
     * // Get one PointsLedger
     * const pointsLedger = await prisma.pointsLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsLedgerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PointsLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PointsLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointsLedgers
     * const pointsLedgers = await prisma.pointsLedger.findMany()
     *
     * // Get first 10 PointsLedgers
     * const pointsLedgers = await prisma.pointsLedger.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pointsLedgerWithIdOnly = await prisma.pointsLedger.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PointsLedgerFindManyArgs>(args?: Prisma.SelectSubset<T, PointsLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PointsLedger.
     * @param {PointsLedgerCreateArgs} args - Arguments to create a PointsLedger.
     * @example
     * // Create one PointsLedger
     * const PointsLedger = await prisma.pointsLedger.create({
     *   data: {
     *     // ... data to create a PointsLedger
     *   }
     * })
     *
     */
    create<T extends PointsLedgerCreateArgs>(args: Prisma.SelectSubset<T, PointsLedgerCreateArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PointsLedgers.
     * @param {PointsLedgerCreateManyArgs} args - Arguments to create many PointsLedgers.
     * @example
     * // Create many PointsLedgers
     * const pointsLedger = await prisma.pointsLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PointsLedgerCreateManyArgs>(args?: Prisma.SelectSubset<T, PointsLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PointsLedgers and returns the data saved in the database.
     * @param {PointsLedgerCreateManyAndReturnArgs} args - Arguments to create many PointsLedgers.
     * @example
     * // Create many PointsLedgers
     * const pointsLedger = await prisma.pointsLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PointsLedgers and only return the `id`
     * const pointsLedgerWithIdOnly = await prisma.pointsLedger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PointsLedgerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PointsLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PointsLedger.
     * @param {PointsLedgerDeleteArgs} args - Arguments to delete one PointsLedger.
     * @example
     * // Delete one PointsLedger
     * const PointsLedger = await prisma.pointsLedger.delete({
     *   where: {
     *     // ... filter to delete one PointsLedger
     *   }
     * })
     *
     */
    delete<T extends PointsLedgerDeleteArgs>(args: Prisma.SelectSubset<T, PointsLedgerDeleteArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PointsLedger.
     * @param {PointsLedgerUpdateArgs} args - Arguments to update one PointsLedger.
     * @example
     * // Update one PointsLedger
     * const pointsLedger = await prisma.pointsLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PointsLedgerUpdateArgs>(args: Prisma.SelectSubset<T, PointsLedgerUpdateArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PointsLedgers.
     * @param {PointsLedgerDeleteManyArgs} args - Arguments to filter PointsLedgers to delete.
     * @example
     * // Delete a few PointsLedgers
     * const { count } = await prisma.pointsLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PointsLedgerDeleteManyArgs>(args?: Prisma.SelectSubset<T, PointsLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PointsLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointsLedgers
     * const pointsLedger = await prisma.pointsLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PointsLedgerUpdateManyArgs>(args: Prisma.SelectSubset<T, PointsLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PointsLedgers and returns the data updated in the database.
     * @param {PointsLedgerUpdateManyAndReturnArgs} args - Arguments to update many PointsLedgers.
     * @example
     * // Update many PointsLedgers
     * const pointsLedger = await prisma.pointsLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PointsLedgers and only return the `id`
     * const pointsLedgerWithIdOnly = await prisma.pointsLedger.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointsLedgerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PointsLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PointsLedger.
     * @param {PointsLedgerUpsertArgs} args - Arguments to update or create a PointsLedger.
     * @example
     * // Update or create a PointsLedger
     * const pointsLedger = await prisma.pointsLedger.upsert({
     *   create: {
     *     // ... data to create a PointsLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointsLedger we want to update
     *   }
     * })
     */
    upsert<T extends PointsLedgerUpsertArgs>(args: Prisma.SelectSubset<T, PointsLedgerUpsertArgs<ExtArgs>>): Prisma.Prisma__PointsLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointsLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PointsLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerCountArgs} args - Arguments to filter PointsLedgers to count.
     * @example
     * // Count the number of PointsLedgers
     * const count = await prisma.pointsLedger.count({
     *   where: {
     *     // ... the filter for the PointsLedgers we want to count
     *   }
     * })
    **/
    count<T extends PointsLedgerCountArgs>(args?: Prisma.Subset<T, PointsLedgerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PointsLedgerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PointsLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointsLedgerAggregateArgs>(args: Prisma.Subset<T, PointsLedgerAggregateArgs>): Prisma.PrismaPromise<GetPointsLedgerAggregateType<T>>;
    /**
     * Group by PointsLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsLedgerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PointsLedgerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PointsLedgerGroupByArgs['orderBy'];
    } : {
        orderBy?: PointsLedgerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PointsLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PointsLedger model
     */
    readonly fields: PointsLedgerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PointsLedger.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PointsLedgerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.LoyaltyProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyProfileClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PointsLedger model
 */
export interface PointsLedgerFieldRefs {
    readonly id: Prisma.FieldRef<"PointsLedger", 'String'>;
    readonly profileId: Prisma.FieldRef<"PointsLedger", 'String'>;
    readonly action: Prisma.FieldRef<"PointsLedger", 'PointsActionType'>;
    readonly points: Prisma.FieldRef<"PointsLedger", 'Int'>;
    readonly balanceBefore: Prisma.FieldRef<"PointsLedger", 'Int'>;
    readonly balanceAfter: Prisma.FieldRef<"PointsLedger", 'Int'>;
    readonly description: Prisma.FieldRef<"PointsLedger", 'String'>;
    readonly referenceId: Prisma.FieldRef<"PointsLedger", 'String'>;
    readonly referenceType: Prisma.FieldRef<"PointsLedger", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PointsLedger", 'DateTime'>;
}
/**
 * PointsLedger findUnique
 */
export type PointsLedgerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter, which PointsLedger to fetch.
     */
    where: Prisma.PointsLedgerWhereUniqueInput;
};
/**
 * PointsLedger findUniqueOrThrow
 */
export type PointsLedgerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter, which PointsLedger to fetch.
     */
    where: Prisma.PointsLedgerWhereUniqueInput;
};
/**
 * PointsLedger findFirst
 */
export type PointsLedgerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter, which PointsLedger to fetch.
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PointsLedgers to fetch.
     */
    orderBy?: Prisma.PointsLedgerOrderByWithRelationInput | Prisma.PointsLedgerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PointsLedgers.
     */
    cursor?: Prisma.PointsLedgerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PointsLedgers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PointsLedgers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PointsLedgers.
     */
    distinct?: Prisma.PointsLedgerScalarFieldEnum | Prisma.PointsLedgerScalarFieldEnum[];
};
/**
 * PointsLedger findFirstOrThrow
 */
export type PointsLedgerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter, which PointsLedger to fetch.
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PointsLedgers to fetch.
     */
    orderBy?: Prisma.PointsLedgerOrderByWithRelationInput | Prisma.PointsLedgerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PointsLedgers.
     */
    cursor?: Prisma.PointsLedgerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PointsLedgers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PointsLedgers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PointsLedgers.
     */
    distinct?: Prisma.PointsLedgerScalarFieldEnum | Prisma.PointsLedgerScalarFieldEnum[];
};
/**
 * PointsLedger findMany
 */
export type PointsLedgerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter, which PointsLedgers to fetch.
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PointsLedgers to fetch.
     */
    orderBy?: Prisma.PointsLedgerOrderByWithRelationInput | Prisma.PointsLedgerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PointsLedgers.
     */
    cursor?: Prisma.PointsLedgerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PointsLedgers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PointsLedgers.
     */
    skip?: number;
    distinct?: Prisma.PointsLedgerScalarFieldEnum | Prisma.PointsLedgerScalarFieldEnum[];
};
/**
 * PointsLedger create
 */
export type PointsLedgerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * The data needed to create a PointsLedger.
     */
    data: Prisma.XOR<Prisma.PointsLedgerCreateInput, Prisma.PointsLedgerUncheckedCreateInput>;
};
/**
 * PointsLedger createMany
 */
export type PointsLedgerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointsLedgers.
     */
    data: Prisma.PointsLedgerCreateManyInput | Prisma.PointsLedgerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PointsLedger createManyAndReturn
 */
export type PointsLedgerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * The data used to create many PointsLedgers.
     */
    data: Prisma.PointsLedgerCreateManyInput | Prisma.PointsLedgerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PointsLedger update
 */
export type PointsLedgerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * The data needed to update a PointsLedger.
     */
    data: Prisma.XOR<Prisma.PointsLedgerUpdateInput, Prisma.PointsLedgerUncheckedUpdateInput>;
    /**
     * Choose, which PointsLedger to update.
     */
    where: Prisma.PointsLedgerWhereUniqueInput;
};
/**
 * PointsLedger updateMany
 */
export type PointsLedgerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PointsLedgers.
     */
    data: Prisma.XOR<Prisma.PointsLedgerUpdateManyMutationInput, Prisma.PointsLedgerUncheckedUpdateManyInput>;
    /**
     * Filter which PointsLedgers to update
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * Limit how many PointsLedgers to update.
     */
    limit?: number;
};
/**
 * PointsLedger updateManyAndReturn
 */
export type PointsLedgerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * The data used to update PointsLedgers.
     */
    data: Prisma.XOR<Prisma.PointsLedgerUpdateManyMutationInput, Prisma.PointsLedgerUncheckedUpdateManyInput>;
    /**
     * Filter which PointsLedgers to update
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * Limit how many PointsLedgers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PointsLedger upsert
 */
export type PointsLedgerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * The filter to search for the PointsLedger to update in case it exists.
     */
    where: Prisma.PointsLedgerWhereUniqueInput;
    /**
     * In case the PointsLedger found by the `where` argument doesn't exist, create a new PointsLedger with this data.
     */
    create: Prisma.XOR<Prisma.PointsLedgerCreateInput, Prisma.PointsLedgerUncheckedCreateInput>;
    /**
     * In case the PointsLedger was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PointsLedgerUpdateInput, Prisma.PointsLedgerUncheckedUpdateInput>;
};
/**
 * PointsLedger delete
 */
export type PointsLedgerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
    /**
     * Filter which PointsLedger to delete.
     */
    where: Prisma.PointsLedgerWhereUniqueInput;
};
/**
 * PointsLedger deleteMany
 */
export type PointsLedgerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PointsLedgers to delete
     */
    where?: Prisma.PointsLedgerWhereInput;
    /**
     * Limit how many PointsLedgers to delete.
     */
    limit?: number;
};
/**
 * PointsLedger without action
 */
export type PointsLedgerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsLedger
     */
    select?: Prisma.PointsLedgerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PointsLedger
     */
    omit?: Prisma.PointsLedgerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PointsLedgerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PointsLedger.d.ts.map