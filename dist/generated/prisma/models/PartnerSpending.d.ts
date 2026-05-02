import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PartnerSpending
 *
 */
export type PartnerSpendingModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerSpendingPayload>;
export type AggregatePartnerSpending = {
    _count: PartnerSpendingCountAggregateOutputType | null;
    _avg: PartnerSpendingAvgAggregateOutputType | null;
    _sum: PartnerSpendingSumAggregateOutputType | null;
    _min: PartnerSpendingMinAggregateOutputType | null;
    _max: PartnerSpendingMaxAggregateOutputType | null;
};
export type PartnerSpendingAvgAggregateOutputType = {
    amountFCFA: number | null;
    pointsEarned: number | null;
};
export type PartnerSpendingSumAggregateOutputType = {
    amountFCFA: number | null;
    pointsEarned: number | null;
};
export type PartnerSpendingMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    partnerId: string | null;
    amountFCFA: number | null;
    pointsEarned: number | null;
    description: string | null;
    createdAt: Date | null;
};
export type PartnerSpendingMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    partnerId: string | null;
    amountFCFA: number | null;
    pointsEarned: number | null;
    description: string | null;
    createdAt: Date | null;
};
export type PartnerSpendingCountAggregateOutputType = {
    id: number;
    userId: number;
    partnerId: number;
    amountFCFA: number;
    pointsEarned: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type PartnerSpendingAvgAggregateInputType = {
    amountFCFA?: true;
    pointsEarned?: true;
};
export type PartnerSpendingSumAggregateInputType = {
    amountFCFA?: true;
    pointsEarned?: true;
};
export type PartnerSpendingMinAggregateInputType = {
    id?: true;
    userId?: true;
    partnerId?: true;
    amountFCFA?: true;
    pointsEarned?: true;
    description?: true;
    createdAt?: true;
};
export type PartnerSpendingMaxAggregateInputType = {
    id?: true;
    userId?: true;
    partnerId?: true;
    amountFCFA?: true;
    pointsEarned?: true;
    description?: true;
    createdAt?: true;
};
export type PartnerSpendingCountAggregateInputType = {
    id?: true;
    userId?: true;
    partnerId?: true;
    amountFCFA?: true;
    pointsEarned?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type PartnerSpendingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerSpending to aggregate.
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartnerSpendings to fetch.
     */
    orderBy?: Prisma.PartnerSpendingOrderByWithRelationInput | Prisma.PartnerSpendingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PartnerSpendingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartnerSpendings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartnerSpendings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PartnerSpendings
    **/
    _count?: true | PartnerSpendingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PartnerSpendingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PartnerSpendingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PartnerSpendingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PartnerSpendingMaxAggregateInputType;
};
export type GetPartnerSpendingAggregateType<T extends PartnerSpendingAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerSpending]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerSpending[P]> : Prisma.GetScalarType<T[P], AggregatePartnerSpending[P]>;
};
export type PartnerSpendingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerSpendingWhereInput;
    orderBy?: Prisma.PartnerSpendingOrderByWithAggregationInput | Prisma.PartnerSpendingOrderByWithAggregationInput[];
    by: Prisma.PartnerSpendingScalarFieldEnum[] | Prisma.PartnerSpendingScalarFieldEnum;
    having?: Prisma.PartnerSpendingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerSpendingCountAggregateInputType | true;
    _avg?: PartnerSpendingAvgAggregateInputType;
    _sum?: PartnerSpendingSumAggregateInputType;
    _min?: PartnerSpendingMinAggregateInputType;
    _max?: PartnerSpendingMaxAggregateInputType;
};
export type PartnerSpendingGroupByOutputType = {
    id: string;
    userId: string;
    partnerId: string;
    amountFCFA: number;
    pointsEarned: number;
    description: string;
    createdAt: Date;
    _count: PartnerSpendingCountAggregateOutputType | null;
    _avg: PartnerSpendingAvgAggregateOutputType | null;
    _sum: PartnerSpendingSumAggregateOutputType | null;
    _min: PartnerSpendingMinAggregateOutputType | null;
    _max: PartnerSpendingMaxAggregateOutputType | null;
};
type GetPartnerSpendingGroupByPayload<T extends PartnerSpendingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerSpendingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerSpendingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerSpendingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerSpendingGroupByOutputType[P]>;
}>>;
export type PartnerSpendingWhereInput = {
    AND?: Prisma.PartnerSpendingWhereInput | Prisma.PartnerSpendingWhereInput[];
    OR?: Prisma.PartnerSpendingWhereInput[];
    NOT?: Prisma.PartnerSpendingWhereInput | Prisma.PartnerSpendingWhereInput[];
    id?: Prisma.StringFilter<"PartnerSpending"> | string;
    userId?: Prisma.StringFilter<"PartnerSpending"> | string;
    partnerId?: Prisma.StringFilter<"PartnerSpending"> | string;
    amountFCFA?: Prisma.IntFilter<"PartnerSpending"> | number;
    pointsEarned?: Prisma.IntFilter<"PartnerSpending"> | number;
    description?: Prisma.StringFilter<"PartnerSpending"> | string;
    createdAt?: Prisma.DateTimeFilter<"PartnerSpending"> | Date | string;
    partner?: Prisma.XOR<Prisma.LoyaltyPartnerScalarRelationFilter, Prisma.LoyaltyPartnerWhereInput>;
};
export type PartnerSpendingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    partner?: Prisma.LoyaltyPartnerOrderByWithRelationInput;
};
export type PartnerSpendingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PartnerSpendingWhereInput | Prisma.PartnerSpendingWhereInput[];
    OR?: Prisma.PartnerSpendingWhereInput[];
    NOT?: Prisma.PartnerSpendingWhereInput | Prisma.PartnerSpendingWhereInput[];
    userId?: Prisma.StringFilter<"PartnerSpending"> | string;
    partnerId?: Prisma.StringFilter<"PartnerSpending"> | string;
    amountFCFA?: Prisma.IntFilter<"PartnerSpending"> | number;
    pointsEarned?: Prisma.IntFilter<"PartnerSpending"> | number;
    description?: Prisma.StringFilter<"PartnerSpending"> | string;
    createdAt?: Prisma.DateTimeFilter<"PartnerSpending"> | Date | string;
    partner?: Prisma.XOR<Prisma.LoyaltyPartnerScalarRelationFilter, Prisma.LoyaltyPartnerWhereInput>;
}, "id">;
export type PartnerSpendingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerSpendingCountOrderByAggregateInput;
    _avg?: Prisma.PartnerSpendingAvgOrderByAggregateInput;
    _max?: Prisma.PartnerSpendingMaxOrderByAggregateInput;
    _min?: Prisma.PartnerSpendingMinOrderByAggregateInput;
    _sum?: Prisma.PartnerSpendingSumOrderByAggregateInput;
};
export type PartnerSpendingScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerSpendingScalarWhereWithAggregatesInput | Prisma.PartnerSpendingScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerSpendingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerSpendingScalarWhereWithAggregatesInput | Prisma.PartnerSpendingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerSpending"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PartnerSpending"> | string;
    partnerId?: Prisma.StringWithAggregatesFilter<"PartnerSpending"> | string;
    amountFCFA?: Prisma.IntWithAggregatesFilter<"PartnerSpending"> | number;
    pointsEarned?: Prisma.IntWithAggregatesFilter<"PartnerSpending"> | number;
    description?: Prisma.StringWithAggregatesFilter<"PartnerSpending"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerSpending"> | Date | string;
};
export type PartnerSpendingCreateInput = {
    id?: string;
    userId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
    partner: Prisma.LoyaltyPartnerCreateNestedOneWithoutSpendingsInput;
};
export type PartnerSpendingUncheckedCreateInput = {
    id?: string;
    userId: string;
    partnerId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
};
export type PartnerSpendingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    partner?: Prisma.LoyaltyPartnerUpdateOneRequiredWithoutSpendingsNestedInput;
};
export type PartnerSpendingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingCreateManyInput = {
    id?: string;
    userId: string;
    partnerId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
};
export type PartnerSpendingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingListRelationFilter = {
    every?: Prisma.PartnerSpendingWhereInput;
    some?: Prisma.PartnerSpendingWhereInput;
    none?: Prisma.PartnerSpendingWhereInput;
};
export type PartnerSpendingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PartnerSpendingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerSpendingAvgOrderByAggregateInput = {
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
};
export type PartnerSpendingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerSpendingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartnerSpendingSumOrderByAggregateInput = {
    amountFCFA?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
};
export type PartnerSpendingCreateNestedManyWithoutPartnerInput = {
    create?: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput> | Prisma.PartnerSpendingCreateWithoutPartnerInput[] | Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput[];
    connectOrCreate?: Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput | Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput[];
    createMany?: Prisma.PartnerSpendingCreateManyPartnerInputEnvelope;
    connect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
};
export type PartnerSpendingUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput> | Prisma.PartnerSpendingCreateWithoutPartnerInput[] | Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput[];
    connectOrCreate?: Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput | Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput[];
    createMany?: Prisma.PartnerSpendingCreateManyPartnerInputEnvelope;
    connect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
};
export type PartnerSpendingUpdateManyWithoutPartnerNestedInput = {
    create?: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput> | Prisma.PartnerSpendingCreateWithoutPartnerInput[] | Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput[];
    connectOrCreate?: Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput | Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput[];
    upsert?: Prisma.PartnerSpendingUpsertWithWhereUniqueWithoutPartnerInput | Prisma.PartnerSpendingUpsertWithWhereUniqueWithoutPartnerInput[];
    createMany?: Prisma.PartnerSpendingCreateManyPartnerInputEnvelope;
    set?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    disconnect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    delete?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    connect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    update?: Prisma.PartnerSpendingUpdateWithWhereUniqueWithoutPartnerInput | Prisma.PartnerSpendingUpdateWithWhereUniqueWithoutPartnerInput[];
    updateMany?: Prisma.PartnerSpendingUpdateManyWithWhereWithoutPartnerInput | Prisma.PartnerSpendingUpdateManyWithWhereWithoutPartnerInput[];
    deleteMany?: Prisma.PartnerSpendingScalarWhereInput | Prisma.PartnerSpendingScalarWhereInput[];
};
export type PartnerSpendingUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput> | Prisma.PartnerSpendingCreateWithoutPartnerInput[] | Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput[];
    connectOrCreate?: Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput | Prisma.PartnerSpendingCreateOrConnectWithoutPartnerInput[];
    upsert?: Prisma.PartnerSpendingUpsertWithWhereUniqueWithoutPartnerInput | Prisma.PartnerSpendingUpsertWithWhereUniqueWithoutPartnerInput[];
    createMany?: Prisma.PartnerSpendingCreateManyPartnerInputEnvelope;
    set?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    disconnect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    delete?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    connect?: Prisma.PartnerSpendingWhereUniqueInput | Prisma.PartnerSpendingWhereUniqueInput[];
    update?: Prisma.PartnerSpendingUpdateWithWhereUniqueWithoutPartnerInput | Prisma.PartnerSpendingUpdateWithWhereUniqueWithoutPartnerInput[];
    updateMany?: Prisma.PartnerSpendingUpdateManyWithWhereWithoutPartnerInput | Prisma.PartnerSpendingUpdateManyWithWhereWithoutPartnerInput[];
    deleteMany?: Prisma.PartnerSpendingScalarWhereInput | Prisma.PartnerSpendingScalarWhereInput[];
};
export type PartnerSpendingCreateWithoutPartnerInput = {
    id?: string;
    userId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
};
export type PartnerSpendingUncheckedCreateWithoutPartnerInput = {
    id?: string;
    userId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
};
export type PartnerSpendingCreateOrConnectWithoutPartnerInput = {
    where: Prisma.PartnerSpendingWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput>;
};
export type PartnerSpendingCreateManyPartnerInputEnvelope = {
    data: Prisma.PartnerSpendingCreateManyPartnerInput | Prisma.PartnerSpendingCreateManyPartnerInput[];
    skipDuplicates?: boolean;
};
export type PartnerSpendingUpsertWithWhereUniqueWithoutPartnerInput = {
    where: Prisma.PartnerSpendingWhereUniqueInput;
    update: Prisma.XOR<Prisma.PartnerSpendingUpdateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedUpdateWithoutPartnerInput>;
    create: Prisma.XOR<Prisma.PartnerSpendingCreateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedCreateWithoutPartnerInput>;
};
export type PartnerSpendingUpdateWithWhereUniqueWithoutPartnerInput = {
    where: Prisma.PartnerSpendingWhereUniqueInput;
    data: Prisma.XOR<Prisma.PartnerSpendingUpdateWithoutPartnerInput, Prisma.PartnerSpendingUncheckedUpdateWithoutPartnerInput>;
};
export type PartnerSpendingUpdateManyWithWhereWithoutPartnerInput = {
    where: Prisma.PartnerSpendingScalarWhereInput;
    data: Prisma.XOR<Prisma.PartnerSpendingUpdateManyMutationInput, Prisma.PartnerSpendingUncheckedUpdateManyWithoutPartnerInput>;
};
export type PartnerSpendingScalarWhereInput = {
    AND?: Prisma.PartnerSpendingScalarWhereInput | Prisma.PartnerSpendingScalarWhereInput[];
    OR?: Prisma.PartnerSpendingScalarWhereInput[];
    NOT?: Prisma.PartnerSpendingScalarWhereInput | Prisma.PartnerSpendingScalarWhereInput[];
    id?: Prisma.StringFilter<"PartnerSpending"> | string;
    userId?: Prisma.StringFilter<"PartnerSpending"> | string;
    partnerId?: Prisma.StringFilter<"PartnerSpending"> | string;
    amountFCFA?: Prisma.IntFilter<"PartnerSpending"> | number;
    pointsEarned?: Prisma.IntFilter<"PartnerSpending"> | number;
    description?: Prisma.StringFilter<"PartnerSpending"> | string;
    createdAt?: Prisma.DateTimeFilter<"PartnerSpending"> | Date | string;
};
export type PartnerSpendingCreateManyPartnerInput = {
    id?: string;
    userId: string;
    amountFCFA: number;
    pointsEarned?: number;
    description?: string;
    createdAt?: Date | string;
};
export type PartnerSpendingUpdateWithoutPartnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingUncheckedUpdateWithoutPartnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingUncheckedUpdateManyWithoutPartnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountFCFA?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerSpendingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    partnerId?: boolean;
    amountFCFA?: boolean;
    pointsEarned?: boolean;
    description?: boolean;
    createdAt?: boolean;
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partnerSpending"]>;
export type PartnerSpendingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    partnerId?: boolean;
    amountFCFA?: boolean;
    pointsEarned?: boolean;
    description?: boolean;
    createdAt?: boolean;
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partnerSpending"]>;
export type PartnerSpendingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    partnerId?: boolean;
    amountFCFA?: boolean;
    pointsEarned?: boolean;
    description?: boolean;
    createdAt?: boolean;
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partnerSpending"]>;
export type PartnerSpendingSelectScalar = {
    id?: boolean;
    userId?: boolean;
    partnerId?: boolean;
    amountFCFA?: boolean;
    pointsEarned?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type PartnerSpendingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "partnerId" | "amountFCFA" | "pointsEarned" | "description" | "createdAt", ExtArgs["result"]["partnerSpending"]>;
export type PartnerSpendingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
};
export type PartnerSpendingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
};
export type PartnerSpendingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    partner?: boolean | Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>;
};
export type $PartnerSpendingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerSpending";
    objects: {
        partner: Prisma.$LoyaltyPartnerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        partnerId: string;
        amountFCFA: number;
        pointsEarned: number;
        description: string;
        createdAt: Date;
    }, ExtArgs["result"]["partnerSpending"]>;
    composites: {};
};
export type PartnerSpendingGetPayload<S extends boolean | null | undefined | PartnerSpendingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload, S>;
export type PartnerSpendingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerSpendingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerSpendingCountAggregateInputType | true;
};
export interface PartnerSpendingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerSpending'];
        meta: {
            name: 'PartnerSpending';
        };
    };
    /**
     * Find zero or one PartnerSpending that matches the filter.
     * @param {PartnerSpendingFindUniqueArgs} args - Arguments to find a PartnerSpending
     * @example
     * // Get one PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerSpendingFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerSpendingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PartnerSpending that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerSpendingFindUniqueOrThrowArgs} args - Arguments to find a PartnerSpending
     * @example
     * // Get one PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerSpendingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerSpendingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PartnerSpending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingFindFirstArgs} args - Arguments to find a PartnerSpending
     * @example
     * // Get one PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerSpendingFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PartnerSpending that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingFindFirstOrThrowArgs} args - Arguments to find a PartnerSpending
     * @example
     * // Get one PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerSpendingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PartnerSpendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerSpendings
     * const partnerSpendings = await prisma.partnerSpending.findMany()
     *
     * // Get first 10 PartnerSpendings
     * const partnerSpendings = await prisma.partnerSpending.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const partnerSpendingWithIdOnly = await prisma.partnerSpending.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PartnerSpendingFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PartnerSpending.
     * @param {PartnerSpendingCreateArgs} args - Arguments to create a PartnerSpending.
     * @example
     * // Create one PartnerSpending
     * const PartnerSpending = await prisma.partnerSpending.create({
     *   data: {
     *     // ... data to create a PartnerSpending
     *   }
     * })
     *
     */
    create<T extends PartnerSpendingCreateArgs>(args: Prisma.SelectSubset<T, PartnerSpendingCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PartnerSpendings.
     * @param {PartnerSpendingCreateManyArgs} args - Arguments to create many PartnerSpendings.
     * @example
     * // Create many PartnerSpendings
     * const partnerSpending = await prisma.partnerSpending.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PartnerSpendingCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PartnerSpendings and returns the data saved in the database.
     * @param {PartnerSpendingCreateManyAndReturnArgs} args - Arguments to create many PartnerSpendings.
     * @example
     * // Create many PartnerSpendings
     * const partnerSpending = await prisma.partnerSpending.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PartnerSpendings and only return the `id`
     * const partnerSpendingWithIdOnly = await prisma.partnerSpending.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PartnerSpendingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PartnerSpending.
     * @param {PartnerSpendingDeleteArgs} args - Arguments to delete one PartnerSpending.
     * @example
     * // Delete one PartnerSpending
     * const PartnerSpending = await prisma.partnerSpending.delete({
     *   where: {
     *     // ... filter to delete one PartnerSpending
     *   }
     * })
     *
     */
    delete<T extends PartnerSpendingDeleteArgs>(args: Prisma.SelectSubset<T, PartnerSpendingDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PartnerSpending.
     * @param {PartnerSpendingUpdateArgs} args - Arguments to update one PartnerSpending.
     * @example
     * // Update one PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PartnerSpendingUpdateArgs>(args: Prisma.SelectSubset<T, PartnerSpendingUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PartnerSpendings.
     * @param {PartnerSpendingDeleteManyArgs} args - Arguments to filter PartnerSpendings to delete.
     * @example
     * // Delete a few PartnerSpendings
     * const { count } = await prisma.partnerSpending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PartnerSpendingDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerSpendingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PartnerSpendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerSpendings
     * const partnerSpending = await prisma.partnerSpending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PartnerSpendingUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerSpendingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PartnerSpendings and returns the data updated in the database.
     * @param {PartnerSpendingUpdateManyAndReturnArgs} args - Arguments to update many PartnerSpendings.
     * @example
     * // Update many PartnerSpendings
     * const partnerSpending = await prisma.partnerSpending.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PartnerSpendings and only return the `id`
     * const partnerSpendingWithIdOnly = await prisma.partnerSpending.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartnerSpendingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerSpendingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PartnerSpending.
     * @param {PartnerSpendingUpsertArgs} args - Arguments to update or create a PartnerSpending.
     * @example
     * // Update or create a PartnerSpending
     * const partnerSpending = await prisma.partnerSpending.upsert({
     *   create: {
     *     // ... data to create a PartnerSpending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerSpending we want to update
     *   }
     * })
     */
    upsert<T extends PartnerSpendingUpsertArgs>(args: Prisma.SelectSubset<T, PartnerSpendingUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerSpendingClient<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PartnerSpendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingCountArgs} args - Arguments to filter PartnerSpendings to count.
     * @example
     * // Count the number of PartnerSpendings
     * const count = await prisma.partnerSpending.count({
     *   where: {
     *     // ... the filter for the PartnerSpendings we want to count
     *   }
     * })
    **/
    count<T extends PartnerSpendingCountArgs>(args?: Prisma.Subset<T, PartnerSpendingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerSpendingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PartnerSpending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartnerSpendingAggregateArgs>(args: Prisma.Subset<T, PartnerSpendingAggregateArgs>): Prisma.PrismaPromise<GetPartnerSpendingAggregateType<T>>;
    /**
     * Group by PartnerSpending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerSpendingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PartnerSpendingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerSpendingGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerSpendingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerSpendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerSpendingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PartnerSpending model
     */
    readonly fields: PartnerSpendingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PartnerSpending.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PartnerSpendingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    partner<T extends Prisma.LoyaltyPartnerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyPartnerDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PartnerSpending model
 */
export interface PartnerSpendingFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerSpending", 'String'>;
    readonly userId: Prisma.FieldRef<"PartnerSpending", 'String'>;
    readonly partnerId: Prisma.FieldRef<"PartnerSpending", 'String'>;
    readonly amountFCFA: Prisma.FieldRef<"PartnerSpending", 'Int'>;
    readonly pointsEarned: Prisma.FieldRef<"PartnerSpending", 'Int'>;
    readonly description: Prisma.FieldRef<"PartnerSpending", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PartnerSpending", 'DateTime'>;
}
/**
 * PartnerSpending findUnique
 */
export type PartnerSpendingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter, which PartnerSpending to fetch.
     */
    where: Prisma.PartnerSpendingWhereUniqueInput;
};
/**
 * PartnerSpending findUniqueOrThrow
 */
export type PartnerSpendingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter, which PartnerSpending to fetch.
     */
    where: Prisma.PartnerSpendingWhereUniqueInput;
};
/**
 * PartnerSpending findFirst
 */
export type PartnerSpendingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter, which PartnerSpending to fetch.
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartnerSpendings to fetch.
     */
    orderBy?: Prisma.PartnerSpendingOrderByWithRelationInput | Prisma.PartnerSpendingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PartnerSpendings.
     */
    cursor?: Prisma.PartnerSpendingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartnerSpendings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartnerSpendings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PartnerSpendings.
     */
    distinct?: Prisma.PartnerSpendingScalarFieldEnum | Prisma.PartnerSpendingScalarFieldEnum[];
};
/**
 * PartnerSpending findFirstOrThrow
 */
export type PartnerSpendingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter, which PartnerSpending to fetch.
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartnerSpendings to fetch.
     */
    orderBy?: Prisma.PartnerSpendingOrderByWithRelationInput | Prisma.PartnerSpendingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PartnerSpendings.
     */
    cursor?: Prisma.PartnerSpendingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartnerSpendings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartnerSpendings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PartnerSpendings.
     */
    distinct?: Prisma.PartnerSpendingScalarFieldEnum | Prisma.PartnerSpendingScalarFieldEnum[];
};
/**
 * PartnerSpending findMany
 */
export type PartnerSpendingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter, which PartnerSpendings to fetch.
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartnerSpendings to fetch.
     */
    orderBy?: Prisma.PartnerSpendingOrderByWithRelationInput | Prisma.PartnerSpendingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PartnerSpendings.
     */
    cursor?: Prisma.PartnerSpendingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartnerSpendings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartnerSpendings.
     */
    skip?: number;
    distinct?: Prisma.PartnerSpendingScalarFieldEnum | Prisma.PartnerSpendingScalarFieldEnum[];
};
/**
 * PartnerSpending create
 */
export type PartnerSpendingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * The data needed to create a PartnerSpending.
     */
    data: Prisma.XOR<Prisma.PartnerSpendingCreateInput, Prisma.PartnerSpendingUncheckedCreateInput>;
};
/**
 * PartnerSpending createMany
 */
export type PartnerSpendingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerSpendings.
     */
    data: Prisma.PartnerSpendingCreateManyInput | Prisma.PartnerSpendingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PartnerSpending createManyAndReturn
 */
export type PartnerSpendingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * The data used to create many PartnerSpendings.
     */
    data: Prisma.PartnerSpendingCreateManyInput | Prisma.PartnerSpendingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PartnerSpending update
 */
export type PartnerSpendingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * The data needed to update a PartnerSpending.
     */
    data: Prisma.XOR<Prisma.PartnerSpendingUpdateInput, Prisma.PartnerSpendingUncheckedUpdateInput>;
    /**
     * Choose, which PartnerSpending to update.
     */
    where: Prisma.PartnerSpendingWhereUniqueInput;
};
/**
 * PartnerSpending updateMany
 */
export type PartnerSpendingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerSpendings.
     */
    data: Prisma.XOR<Prisma.PartnerSpendingUpdateManyMutationInput, Prisma.PartnerSpendingUncheckedUpdateManyInput>;
    /**
     * Filter which PartnerSpendings to update
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * Limit how many PartnerSpendings to update.
     */
    limit?: number;
};
/**
 * PartnerSpending updateManyAndReturn
 */
export type PartnerSpendingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * The data used to update PartnerSpendings.
     */
    data: Prisma.XOR<Prisma.PartnerSpendingUpdateManyMutationInput, Prisma.PartnerSpendingUncheckedUpdateManyInput>;
    /**
     * Filter which PartnerSpendings to update
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * Limit how many PartnerSpendings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PartnerSpending upsert
 */
export type PartnerSpendingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * The filter to search for the PartnerSpending to update in case it exists.
     */
    where: Prisma.PartnerSpendingWhereUniqueInput;
    /**
     * In case the PartnerSpending found by the `where` argument doesn't exist, create a new PartnerSpending with this data.
     */
    create: Prisma.XOR<Prisma.PartnerSpendingCreateInput, Prisma.PartnerSpendingUncheckedCreateInput>;
    /**
     * In case the PartnerSpending was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PartnerSpendingUpdateInput, Prisma.PartnerSpendingUncheckedUpdateInput>;
};
/**
 * PartnerSpending delete
 */
export type PartnerSpendingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    /**
     * Filter which PartnerSpending to delete.
     */
    where: Prisma.PartnerSpendingWhereUniqueInput;
};
/**
 * PartnerSpending deleteMany
 */
export type PartnerSpendingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerSpendings to delete
     */
    where?: Prisma.PartnerSpendingWhereInput;
    /**
     * Limit how many PartnerSpendings to delete.
     */
    limit?: number;
};
/**
 * PartnerSpending without action
 */
export type PartnerSpendingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PartnerSpending.d.ts.map