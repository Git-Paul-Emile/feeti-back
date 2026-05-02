import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PayoutTransaction
 *
 */
export type PayoutTransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutTransactionPayload>;
export type AggregatePayoutTransaction = {
    _count: PayoutTransactionCountAggregateOutputType | null;
    _min: PayoutTransactionMinAggregateOutputType | null;
    _max: PayoutTransactionMaxAggregateOutputType | null;
};
export type PayoutTransactionMinAggregateOutputType = {
    id: string | null;
    payoutId: string | null;
    transactionId: string | null;
    createdAt: Date | null;
};
export type PayoutTransactionMaxAggregateOutputType = {
    id: string | null;
    payoutId: string | null;
    transactionId: string | null;
    createdAt: Date | null;
};
export type PayoutTransactionCountAggregateOutputType = {
    id: number;
    payoutId: number;
    transactionId: number;
    createdAt: number;
    _all: number;
};
export type PayoutTransactionMinAggregateInputType = {
    id?: true;
    payoutId?: true;
    transactionId?: true;
    createdAt?: true;
};
export type PayoutTransactionMaxAggregateInputType = {
    id?: true;
    payoutId?: true;
    transactionId?: true;
    createdAt?: true;
};
export type PayoutTransactionCountAggregateInputType = {
    id?: true;
    payoutId?: true;
    transactionId?: true;
    createdAt?: true;
    _all?: true;
};
export type PayoutTransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutTransaction to aggregate.
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PayoutTransactions to fetch.
     */
    orderBy?: Prisma.PayoutTransactionOrderByWithRelationInput | Prisma.PayoutTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PayoutTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PayoutTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PayoutTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PayoutTransactions
    **/
    _count?: true | PayoutTransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PayoutTransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PayoutTransactionMaxAggregateInputType;
};
export type GetPayoutTransactionAggregateType<T extends PayoutTransactionAggregateArgs> = {
    [P in keyof T & keyof AggregatePayoutTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayoutTransaction[P]> : Prisma.GetScalarType<T[P], AggregatePayoutTransaction[P]>;
};
export type PayoutTransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutTransactionWhereInput;
    orderBy?: Prisma.PayoutTransactionOrderByWithAggregationInput | Prisma.PayoutTransactionOrderByWithAggregationInput[];
    by: Prisma.PayoutTransactionScalarFieldEnum[] | Prisma.PayoutTransactionScalarFieldEnum;
    having?: Prisma.PayoutTransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutTransactionCountAggregateInputType | true;
    _min?: PayoutTransactionMinAggregateInputType;
    _max?: PayoutTransactionMaxAggregateInputType;
};
export type PayoutTransactionGroupByOutputType = {
    id: string;
    payoutId: string;
    transactionId: string;
    createdAt: Date;
    _count: PayoutTransactionCountAggregateOutputType | null;
    _min: PayoutTransactionMinAggregateOutputType | null;
    _max: PayoutTransactionMaxAggregateOutputType | null;
};
type GetPayoutTransactionGroupByPayload<T extends PayoutTransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutTransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutTransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutTransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutTransactionGroupByOutputType[P]>;
}>>;
export type PayoutTransactionWhereInput = {
    AND?: Prisma.PayoutTransactionWhereInput | Prisma.PayoutTransactionWhereInput[];
    OR?: Prisma.PayoutTransactionWhereInput[];
    NOT?: Prisma.PayoutTransactionWhereInput | Prisma.PayoutTransactionWhereInput[];
    id?: Prisma.StringFilter<"PayoutTransaction"> | string;
    payoutId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    transactionId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"PayoutTransaction"> | Date | string;
    payout?: Prisma.XOR<Prisma.PayoutScalarRelationFilter, Prisma.PayoutWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
};
export type PayoutTransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payout?: Prisma.PayoutOrderByWithRelationInput;
    transaction?: Prisma.TransactionOrderByWithRelationInput;
};
export type PayoutTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    payoutId_transactionId?: Prisma.PayoutTransactionPayoutIdTransactionIdCompoundUniqueInput;
    AND?: Prisma.PayoutTransactionWhereInput | Prisma.PayoutTransactionWhereInput[];
    OR?: Prisma.PayoutTransactionWhereInput[];
    NOT?: Prisma.PayoutTransactionWhereInput | Prisma.PayoutTransactionWhereInput[];
    payoutId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    transactionId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"PayoutTransaction"> | Date | string;
    payout?: Prisma.XOR<Prisma.PayoutScalarRelationFilter, Prisma.PayoutWhereInput>;
    transaction?: Prisma.XOR<Prisma.TransactionScalarRelationFilter, Prisma.TransactionWhereInput>;
}, "id" | "payoutId_transactionId">;
export type PayoutTransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayoutTransactionCountOrderByAggregateInput;
    _max?: Prisma.PayoutTransactionMaxOrderByAggregateInput;
    _min?: Prisma.PayoutTransactionMinOrderByAggregateInput;
};
export type PayoutTransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutTransactionScalarWhereWithAggregatesInput | Prisma.PayoutTransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutTransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutTransactionScalarWhereWithAggregatesInput | Prisma.PayoutTransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PayoutTransaction"> | string;
    payoutId?: Prisma.StringWithAggregatesFilter<"PayoutTransaction"> | string;
    transactionId?: Prisma.StringWithAggregatesFilter<"PayoutTransaction"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PayoutTransaction"> | Date | string;
};
export type PayoutTransactionCreateInput = {
    id?: string;
    createdAt?: Date | string;
    payout: Prisma.PayoutCreateNestedOneWithoutTransactionsInput;
    transaction: Prisma.TransactionCreateNestedOneWithoutPayoutTransactionsInput;
};
export type PayoutTransactionUncheckedCreateInput = {
    id?: string;
    payoutId: string;
    transactionId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payout?: Prisma.PayoutUpdateOneRequiredWithoutTransactionsNestedInput;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutPayoutTransactionsNestedInput;
};
export type PayoutTransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payoutId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionCreateManyInput = {
    id?: string;
    payoutId: string;
    transactionId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payoutId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionListRelationFilter = {
    every?: Prisma.PayoutTransactionWhereInput;
    some?: Prisma.PayoutTransactionWhereInput;
    none?: Prisma.PayoutTransactionWhereInput;
};
export type PayoutTransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutTransactionPayoutIdTransactionIdCompoundUniqueInput = {
    payoutId: string;
    transactionId: string;
};
export type PayoutTransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutTransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutTransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutTransactionCreateNestedManyWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput> | Prisma.PayoutTransactionCreateWithoutTransactionInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput | Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput[];
    createMany?: Prisma.PayoutTransactionCreateManyTransactionInputEnvelope;
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
};
export type PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput> | Prisma.PayoutTransactionCreateWithoutTransactionInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput | Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput[];
    createMany?: Prisma.PayoutTransactionCreateManyTransactionInputEnvelope;
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
};
export type PayoutTransactionUpdateManyWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput> | Prisma.PayoutTransactionCreateWithoutTransactionInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput | Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput[];
    upsert?: Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutTransactionInput | Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: Prisma.PayoutTransactionCreateManyTransactionInputEnvelope;
    set?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    disconnect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    delete?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    update?: Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutTransactionInput | Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?: Prisma.PayoutTransactionUpdateManyWithWhereWithoutTransactionInput | Prisma.PayoutTransactionUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
};
export type PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput> | Prisma.PayoutTransactionCreateWithoutTransactionInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput | Prisma.PayoutTransactionCreateOrConnectWithoutTransactionInput[];
    upsert?: Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutTransactionInput | Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: Prisma.PayoutTransactionCreateManyTransactionInputEnvelope;
    set?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    disconnect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    delete?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    update?: Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutTransactionInput | Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?: Prisma.PayoutTransactionUpdateManyWithWhereWithoutTransactionInput | Prisma.PayoutTransactionUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
};
export type PayoutTransactionCreateNestedManyWithoutPayoutInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput> | Prisma.PayoutTransactionCreateWithoutPayoutInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput | Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput[];
    createMany?: Prisma.PayoutTransactionCreateManyPayoutInputEnvelope;
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
};
export type PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput> | Prisma.PayoutTransactionCreateWithoutPayoutInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput | Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput[];
    createMany?: Prisma.PayoutTransactionCreateManyPayoutInputEnvelope;
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
};
export type PayoutTransactionUpdateManyWithoutPayoutNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput> | Prisma.PayoutTransactionCreateWithoutPayoutInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput | Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput[];
    upsert?: Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutPayoutInput | Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutPayoutInput[];
    createMany?: Prisma.PayoutTransactionCreateManyPayoutInputEnvelope;
    set?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    disconnect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    delete?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    update?: Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutPayoutInput | Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutPayoutInput[];
    updateMany?: Prisma.PayoutTransactionUpdateManyWithWhereWithoutPayoutInput | Prisma.PayoutTransactionUpdateManyWithWhereWithoutPayoutInput[];
    deleteMany?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
};
export type PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput> | Prisma.PayoutTransactionCreateWithoutPayoutInput[] | Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput[];
    connectOrCreate?: Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput | Prisma.PayoutTransactionCreateOrConnectWithoutPayoutInput[];
    upsert?: Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutPayoutInput | Prisma.PayoutTransactionUpsertWithWhereUniqueWithoutPayoutInput[];
    createMany?: Prisma.PayoutTransactionCreateManyPayoutInputEnvelope;
    set?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    disconnect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    delete?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    connect?: Prisma.PayoutTransactionWhereUniqueInput | Prisma.PayoutTransactionWhereUniqueInput[];
    update?: Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutPayoutInput | Prisma.PayoutTransactionUpdateWithWhereUniqueWithoutPayoutInput[];
    updateMany?: Prisma.PayoutTransactionUpdateManyWithWhereWithoutPayoutInput | Prisma.PayoutTransactionUpdateManyWithWhereWithoutPayoutInput[];
    deleteMany?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
};
export type PayoutTransactionCreateWithoutTransactionInput = {
    id?: string;
    createdAt?: Date | string;
    payout: Prisma.PayoutCreateNestedOneWithoutTransactionsInput;
};
export type PayoutTransactionUncheckedCreateWithoutTransactionInput = {
    id?: string;
    payoutId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionCreateOrConnectWithoutTransactionInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput>;
};
export type PayoutTransactionCreateManyTransactionInputEnvelope = {
    data: Prisma.PayoutTransactionCreateManyTransactionInput | Prisma.PayoutTransactionCreateManyTransactionInput[];
    skipDuplicates?: boolean;
};
export type PayoutTransactionUpsertWithWhereUniqueWithoutTransactionInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutTransactionUpdateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedUpdateWithoutTransactionInput>;
    create: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedCreateWithoutTransactionInput>;
};
export type PayoutTransactionUpdateWithWhereUniqueWithoutTransactionInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateWithoutTransactionInput, Prisma.PayoutTransactionUncheckedUpdateWithoutTransactionInput>;
};
export type PayoutTransactionUpdateManyWithWhereWithoutTransactionInput = {
    where: Prisma.PayoutTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateManyMutationInput, Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionInput>;
};
export type PayoutTransactionScalarWhereInput = {
    AND?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
    OR?: Prisma.PayoutTransactionScalarWhereInput[];
    NOT?: Prisma.PayoutTransactionScalarWhereInput | Prisma.PayoutTransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"PayoutTransaction"> | string;
    payoutId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    transactionId?: Prisma.StringFilter<"PayoutTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"PayoutTransaction"> | Date | string;
};
export type PayoutTransactionCreateWithoutPayoutInput = {
    id?: string;
    createdAt?: Date | string;
    transaction: Prisma.TransactionCreateNestedOneWithoutPayoutTransactionsInput;
};
export type PayoutTransactionUncheckedCreateWithoutPayoutInput = {
    id?: string;
    transactionId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionCreateOrConnectWithoutPayoutInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput>;
};
export type PayoutTransactionCreateManyPayoutInputEnvelope = {
    data: Prisma.PayoutTransactionCreateManyPayoutInput | Prisma.PayoutTransactionCreateManyPayoutInput[];
    skipDuplicates?: boolean;
};
export type PayoutTransactionUpsertWithWhereUniqueWithoutPayoutInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutTransactionUpdateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedUpdateWithoutPayoutInput>;
    create: Prisma.XOR<Prisma.PayoutTransactionCreateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedCreateWithoutPayoutInput>;
};
export type PayoutTransactionUpdateWithWhereUniqueWithoutPayoutInput = {
    where: Prisma.PayoutTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateWithoutPayoutInput, Prisma.PayoutTransactionUncheckedUpdateWithoutPayoutInput>;
};
export type PayoutTransactionUpdateManyWithWhereWithoutPayoutInput = {
    where: Prisma.PayoutTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateManyMutationInput, Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutInput>;
};
export type PayoutTransactionCreateManyTransactionInput = {
    id?: string;
    payoutId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payout?: Prisma.PayoutUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type PayoutTransactionUncheckedUpdateWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payoutId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionUncheckedUpdateManyWithoutTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payoutId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionCreateManyPayoutInput = {
    id?: string;
    transactionId: string;
    createdAt?: Date | string;
};
export type PayoutTransactionUpdateWithoutPayoutInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction?: Prisma.TransactionUpdateOneRequiredWithoutPayoutTransactionsNestedInput;
};
export type PayoutTransactionUncheckedUpdateWithoutPayoutInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionUncheckedUpdateManyWithoutPayoutInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutTransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payoutId?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payoutTransaction"]>;
export type PayoutTransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payoutId?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payoutTransaction"]>;
export type PayoutTransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payoutId?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payoutTransaction"]>;
export type PayoutTransactionSelectScalar = {
    id?: boolean;
    payoutId?: boolean;
    transactionId?: boolean;
    createdAt?: boolean;
};
export type PayoutTransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payoutId" | "transactionId" | "createdAt", ExtArgs["result"]["payoutTransaction"]>;
export type PayoutTransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type PayoutTransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type PayoutTransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payout?: boolean | Prisma.PayoutDefaultArgs<ExtArgs>;
    transaction?: boolean | Prisma.TransactionDefaultArgs<ExtArgs>;
};
export type $PayoutTransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayoutTransaction";
    objects: {
        payout: Prisma.$PayoutPayload<ExtArgs>;
        transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        payoutId: string;
        transactionId: string;
        createdAt: Date;
    }, ExtArgs["result"]["payoutTransaction"]>;
    composites: {};
};
export type PayoutTransactionGetPayload<S extends boolean | null | undefined | PayoutTransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload, S>;
export type PayoutTransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutTransactionCountAggregateInputType | true;
};
export interface PayoutTransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayoutTransaction'];
        meta: {
            name: 'PayoutTransaction';
        };
    };
    /**
     * Find zero or one PayoutTransaction that matches the filter.
     * @param {PayoutTransactionFindUniqueArgs} args - Arguments to find a PayoutTransaction
     * @example
     * // Get one PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutTransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutTransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PayoutTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutTransactionFindUniqueOrThrowArgs} args - Arguments to find a PayoutTransaction
     * @example
     * // Get one PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutTransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PayoutTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionFindFirstArgs} args - Arguments to find a PayoutTransaction
     * @example
     * // Get one PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutTransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PayoutTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionFindFirstOrThrowArgs} args - Arguments to find a PayoutTransaction
     * @example
     * // Get one PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutTransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PayoutTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutTransactions
     * const payoutTransactions = await prisma.payoutTransaction.findMany()
     *
     * // Get first 10 PayoutTransactions
     * const payoutTransactions = await prisma.payoutTransaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const payoutTransactionWithIdOnly = await prisma.payoutTransaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PayoutTransactionFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PayoutTransaction.
     * @param {PayoutTransactionCreateArgs} args - Arguments to create a PayoutTransaction.
     * @example
     * // Create one PayoutTransaction
     * const PayoutTransaction = await prisma.payoutTransaction.create({
     *   data: {
     *     // ... data to create a PayoutTransaction
     *   }
     * })
     *
     */
    create<T extends PayoutTransactionCreateArgs>(args: Prisma.SelectSubset<T, PayoutTransactionCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PayoutTransactions.
     * @param {PayoutTransactionCreateManyArgs} args - Arguments to create many PayoutTransactions.
     * @example
     * // Create many PayoutTransactions
     * const payoutTransaction = await prisma.payoutTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PayoutTransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PayoutTransactions and returns the data saved in the database.
     * @param {PayoutTransactionCreateManyAndReturnArgs} args - Arguments to create many PayoutTransactions.
     * @example
     * // Create many PayoutTransactions
     * const payoutTransaction = await prisma.payoutTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PayoutTransactions and only return the `id`
     * const payoutTransactionWithIdOnly = await prisma.payoutTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PayoutTransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PayoutTransaction.
     * @param {PayoutTransactionDeleteArgs} args - Arguments to delete one PayoutTransaction.
     * @example
     * // Delete one PayoutTransaction
     * const PayoutTransaction = await prisma.payoutTransaction.delete({
     *   where: {
     *     // ... filter to delete one PayoutTransaction
     *   }
     * })
     *
     */
    delete<T extends PayoutTransactionDeleteArgs>(args: Prisma.SelectSubset<T, PayoutTransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PayoutTransaction.
     * @param {PayoutTransactionUpdateArgs} args - Arguments to update one PayoutTransaction.
     * @example
     * // Update one PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PayoutTransactionUpdateArgs>(args: Prisma.SelectSubset<T, PayoutTransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PayoutTransactions.
     * @param {PayoutTransactionDeleteManyArgs} args - Arguments to filter PayoutTransactions to delete.
     * @example
     * // Delete a few PayoutTransactions
     * const { count } = await prisma.payoutTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PayoutTransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PayoutTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutTransactions
     * const payoutTransaction = await prisma.payoutTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PayoutTransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PayoutTransactions and returns the data updated in the database.
     * @param {PayoutTransactionUpdateManyAndReturnArgs} args - Arguments to update many PayoutTransactions.
     * @example
     * // Update many PayoutTransactions
     * const payoutTransaction = await prisma.payoutTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PayoutTransactions and only return the `id`
     * const payoutTransactionWithIdOnly = await prisma.payoutTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayoutTransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PayoutTransaction.
     * @param {PayoutTransactionUpsertArgs} args - Arguments to update or create a PayoutTransaction.
     * @example
     * // Update or create a PayoutTransaction
     * const payoutTransaction = await prisma.payoutTransaction.upsert({
     *   create: {
     *     // ... data to create a PayoutTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PayoutTransactionUpsertArgs>(args: Prisma.SelectSubset<T, PayoutTransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutTransactionClient<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PayoutTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionCountArgs} args - Arguments to filter PayoutTransactions to count.
     * @example
     * // Count the number of PayoutTransactions
     * const count = await prisma.payoutTransaction.count({
     *   where: {
     *     // ... the filter for the PayoutTransactions we want to count
     *   }
     * })
    **/
    count<T extends PayoutTransactionCountArgs>(args?: Prisma.Subset<T, PayoutTransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutTransactionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PayoutTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutTransactionAggregateArgs>(args: Prisma.Subset<T, PayoutTransactionAggregateArgs>): Prisma.PrismaPromise<GetPayoutTransactionAggregateType<T>>;
    /**
     * Group by PayoutTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutTransactionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PayoutTransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutTransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutTransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PayoutTransaction model
     */
    readonly fields: PayoutTransactionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PayoutTransaction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PayoutTransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payout<T extends Prisma.PayoutDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutDefaultArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction<T extends Prisma.TransactionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransactionDefaultArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PayoutTransaction model
 */
export interface PayoutTransactionFieldRefs {
    readonly id: Prisma.FieldRef<"PayoutTransaction", 'String'>;
    readonly payoutId: Prisma.FieldRef<"PayoutTransaction", 'String'>;
    readonly transactionId: Prisma.FieldRef<"PayoutTransaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PayoutTransaction", 'DateTime'>;
}
/**
 * PayoutTransaction findUnique
 */
export type PayoutTransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter, which PayoutTransaction to fetch.
     */
    where: Prisma.PayoutTransactionWhereUniqueInput;
};
/**
 * PayoutTransaction findUniqueOrThrow
 */
export type PayoutTransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter, which PayoutTransaction to fetch.
     */
    where: Prisma.PayoutTransactionWhereUniqueInput;
};
/**
 * PayoutTransaction findFirst
 */
export type PayoutTransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter, which PayoutTransaction to fetch.
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PayoutTransactions to fetch.
     */
    orderBy?: Prisma.PayoutTransactionOrderByWithRelationInput | Prisma.PayoutTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PayoutTransactions.
     */
    cursor?: Prisma.PayoutTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PayoutTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PayoutTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PayoutTransactions.
     */
    distinct?: Prisma.PayoutTransactionScalarFieldEnum | Prisma.PayoutTransactionScalarFieldEnum[];
};
/**
 * PayoutTransaction findFirstOrThrow
 */
export type PayoutTransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter, which PayoutTransaction to fetch.
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PayoutTransactions to fetch.
     */
    orderBy?: Prisma.PayoutTransactionOrderByWithRelationInput | Prisma.PayoutTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PayoutTransactions.
     */
    cursor?: Prisma.PayoutTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PayoutTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PayoutTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PayoutTransactions.
     */
    distinct?: Prisma.PayoutTransactionScalarFieldEnum | Prisma.PayoutTransactionScalarFieldEnum[];
};
/**
 * PayoutTransaction findMany
 */
export type PayoutTransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter, which PayoutTransactions to fetch.
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PayoutTransactions to fetch.
     */
    orderBy?: Prisma.PayoutTransactionOrderByWithRelationInput | Prisma.PayoutTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PayoutTransactions.
     */
    cursor?: Prisma.PayoutTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PayoutTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PayoutTransactions.
     */
    skip?: number;
    distinct?: Prisma.PayoutTransactionScalarFieldEnum | Prisma.PayoutTransactionScalarFieldEnum[];
};
/**
 * PayoutTransaction create
 */
export type PayoutTransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a PayoutTransaction.
     */
    data: Prisma.XOR<Prisma.PayoutTransactionCreateInput, Prisma.PayoutTransactionUncheckedCreateInput>;
};
/**
 * PayoutTransaction createMany
 */
export type PayoutTransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutTransactions.
     */
    data: Prisma.PayoutTransactionCreateManyInput | Prisma.PayoutTransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PayoutTransaction createManyAndReturn
 */
export type PayoutTransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many PayoutTransactions.
     */
    data: Prisma.PayoutTransactionCreateManyInput | Prisma.PayoutTransactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PayoutTransaction update
 */
export type PayoutTransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a PayoutTransaction.
     */
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateInput, Prisma.PayoutTransactionUncheckedUpdateInput>;
    /**
     * Choose, which PayoutTransaction to update.
     */
    where: Prisma.PayoutTransactionWhereUniqueInput;
};
/**
 * PayoutTransaction updateMany
 */
export type PayoutTransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutTransactions.
     */
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateManyMutationInput, Prisma.PayoutTransactionUncheckedUpdateManyInput>;
    /**
     * Filter which PayoutTransactions to update
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * Limit how many PayoutTransactions to update.
     */
    limit?: number;
};
/**
 * PayoutTransaction updateManyAndReturn
 */
export type PayoutTransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * The data used to update PayoutTransactions.
     */
    data: Prisma.XOR<Prisma.PayoutTransactionUpdateManyMutationInput, Prisma.PayoutTransactionUncheckedUpdateManyInput>;
    /**
     * Filter which PayoutTransactions to update
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * Limit how many PayoutTransactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PayoutTransaction upsert
 */
export type PayoutTransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the PayoutTransaction to update in case it exists.
     */
    where: Prisma.PayoutTransactionWhereUniqueInput;
    /**
     * In case the PayoutTransaction found by the `where` argument doesn't exist, create a new PayoutTransaction with this data.
     */
    create: Prisma.XOR<Prisma.PayoutTransactionCreateInput, Prisma.PayoutTransactionUncheckedCreateInput>;
    /**
     * In case the PayoutTransaction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PayoutTransactionUpdateInput, Prisma.PayoutTransactionUncheckedUpdateInput>;
};
/**
 * PayoutTransaction delete
 */
export type PayoutTransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
    /**
     * Filter which PayoutTransaction to delete.
     */
    where: Prisma.PayoutTransactionWhereUniqueInput;
};
/**
 * PayoutTransaction deleteMany
 */
export type PayoutTransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutTransactions to delete
     */
    where?: Prisma.PayoutTransactionWhereInput;
    /**
     * Limit how many PayoutTransactions to delete.
     */
    limit?: number;
};
/**
 * PayoutTransaction without action
 */
export type PayoutTransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutTransaction
     */
    select?: Prisma.PayoutTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutTransaction
     */
    omit?: Prisma.PayoutTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutTransactionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PayoutTransaction.d.ts.map