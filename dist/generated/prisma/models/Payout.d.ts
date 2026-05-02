import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Payout
 *
 */
export type PayoutModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutPayload>;
export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
export type PayoutAvgAggregateOutputType = {
    montant: number | null;
};
export type PayoutSumAggregateOutputType = {
    montant: number | null;
};
export type PayoutMinAggregateOutputType = {
    id: string | null;
    organizerId: string | null;
    walletId: string | null;
    montant: number | null;
    devise: string | null;
    methodePaiement: string | null;
    referenceBancaire: string | null;
    statut: $Enums.PayoutStatus | null;
    approvedById: string | null;
    processedById: string | null;
    notes: string | null;
    attachments: string | null;
    initiatedAt: Date | null;
    approvedAt: Date | null;
    processedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PayoutMaxAggregateOutputType = {
    id: string | null;
    organizerId: string | null;
    walletId: string | null;
    montant: number | null;
    devise: string | null;
    methodePaiement: string | null;
    referenceBancaire: string | null;
    statut: $Enums.PayoutStatus | null;
    approvedById: string | null;
    processedById: string | null;
    notes: string | null;
    attachments: string | null;
    initiatedAt: Date | null;
    approvedAt: Date | null;
    processedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PayoutCountAggregateOutputType = {
    id: number;
    organizerId: number;
    walletId: number;
    montant: number;
    devise: number;
    methodePaiement: number;
    referenceBancaire: number;
    statut: number;
    approvedById: number;
    processedById: number;
    notes: number;
    attachments: number;
    initiatedAt: number;
    approvedAt: number;
    processedAt: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PayoutAvgAggregateInputType = {
    montant?: true;
};
export type PayoutSumAggregateInputType = {
    montant?: true;
};
export type PayoutMinAggregateInputType = {
    id?: true;
    organizerId?: true;
    walletId?: true;
    montant?: true;
    devise?: true;
    methodePaiement?: true;
    referenceBancaire?: true;
    statut?: true;
    approvedById?: true;
    processedById?: true;
    notes?: true;
    attachments?: true;
    initiatedAt?: true;
    approvedAt?: true;
    processedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PayoutMaxAggregateInputType = {
    id?: true;
    organizerId?: true;
    walletId?: true;
    montant?: true;
    devise?: true;
    methodePaiement?: true;
    referenceBancaire?: true;
    statut?: true;
    approvedById?: true;
    processedById?: true;
    notes?: true;
    attachments?: true;
    initiatedAt?: true;
    approvedAt?: true;
    processedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PayoutCountAggregateInputType = {
    id?: true;
    organizerId?: true;
    walletId?: true;
    montant?: true;
    devise?: true;
    methodePaiement?: true;
    referenceBancaire?: true;
    statut?: true;
    approvedById?: true;
    processedById?: true;
    notes?: true;
    attachments?: true;
    initiatedAt?: true;
    approvedAt?: true;
    processedAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PayoutAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payout to aggregate.
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payouts to fetch.
     */
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PayoutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payouts
    **/
    _count?: true | PayoutCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PayoutAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PayoutSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PayoutMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PayoutMaxAggregateInputType;
};
export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
    [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayout[P]> : Prisma.GetScalarType<T[P], AggregatePayout[P]>;
};
export type PayoutGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithAggregationInput | Prisma.PayoutOrderByWithAggregationInput[];
    by: Prisma.PayoutScalarFieldEnum[] | Prisma.PayoutScalarFieldEnum;
    having?: Prisma.PayoutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutCountAggregateInputType | true;
    _avg?: PayoutAvgAggregateInputType;
    _sum?: PayoutSumAggregateInputType;
    _min?: PayoutMinAggregateInputType;
    _max?: PayoutMaxAggregateInputType;
};
export type PayoutGroupByOutputType = {
    id: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise: string;
    methodePaiement: string;
    referenceBancaire: string | null;
    statut: $Enums.PayoutStatus;
    approvedById: string | null;
    processedById: string | null;
    notes: string | null;
    attachments: string | null;
    initiatedAt: Date;
    approvedAt: Date | null;
    processedAt: Date | null;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]>;
}>>;
export type PayoutWhereInput = {
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    organizerId?: Prisma.StringFilter<"Payout"> | string;
    walletId?: Prisma.StringFilter<"Payout"> | string;
    montant?: Prisma.IntFilter<"Payout"> | number;
    devise?: Prisma.StringFilter<"Payout"> | string;
    methodePaiement?: Prisma.StringFilter<"Payout"> | string;
    referenceBancaire?: Prisma.StringNullableFilter<"Payout"> | string | null;
    statut?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    approvedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attachments?: Prisma.StringNullableFilter<"Payout"> | string | null;
    initiatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    wallet?: Prisma.XOR<Prisma.WalletScalarRelationFilter, Prisma.WalletWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    processedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    transactions?: Prisma.PayoutTransactionListRelationFilter;
    statusHistory?: Prisma.PayoutStatusHistoryListRelationFilter;
};
export type PayoutOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    walletId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    methodePaiement?: Prisma.SortOrder;
    referenceBancaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    attachments?: Prisma.SortOrderInput | Prisma.SortOrder;
    initiatedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organizer?: Prisma.UserOrderByWithRelationInput;
    wallet?: Prisma.WalletOrderByWithRelationInput;
    approvedBy?: Prisma.UserOrderByWithRelationInput;
    processedBy?: Prisma.UserOrderByWithRelationInput;
    transactions?: Prisma.PayoutTransactionOrderByRelationAggregateInput;
    statusHistory?: Prisma.PayoutStatusHistoryOrderByRelationAggregateInput;
};
export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    organizerId?: Prisma.StringFilter<"Payout"> | string;
    walletId?: Prisma.StringFilter<"Payout"> | string;
    montant?: Prisma.IntFilter<"Payout"> | number;
    devise?: Prisma.StringFilter<"Payout"> | string;
    methodePaiement?: Prisma.StringFilter<"Payout"> | string;
    referenceBancaire?: Prisma.StringNullableFilter<"Payout"> | string | null;
    statut?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    approvedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attachments?: Prisma.StringNullableFilter<"Payout"> | string | null;
    initiatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    wallet?: Prisma.XOR<Prisma.WalletScalarRelationFilter, Prisma.WalletWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    processedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    transactions?: Prisma.PayoutTransactionListRelationFilter;
    statusHistory?: Prisma.PayoutStatusHistoryListRelationFilter;
}, "id">;
export type PayoutOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    walletId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    methodePaiement?: Prisma.SortOrder;
    referenceBancaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    attachments?: Prisma.SortOrderInput | Prisma.SortOrder;
    initiatedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PayoutCountOrderByAggregateInput;
    _avg?: Prisma.PayoutAvgOrderByAggregateInput;
    _max?: Prisma.PayoutMaxOrderByAggregateInput;
    _min?: Prisma.PayoutMinOrderByAggregateInput;
    _sum?: Prisma.PayoutSumOrderByAggregateInput;
};
export type PayoutScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    organizerId?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    walletId?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    montant?: Prisma.IntWithAggregatesFilter<"Payout"> | number;
    devise?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    methodePaiement?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    referenceBancaire?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    statut?: Prisma.EnumPayoutStatusWithAggregatesFilter<"Payout"> | $Enums.PayoutStatus;
    approvedById?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    processedById?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    attachments?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    initiatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null;
    processedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
};
export type PayoutCreateInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutCreateManyInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutListRelationFilter = {
    every?: Prisma.PayoutWhereInput;
    some?: Prisma.PayoutWhereInput;
    none?: Prisma.PayoutWhereInput;
};
export type PayoutOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    walletId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    methodePaiement?: Prisma.SortOrder;
    referenceBancaire?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    attachments?: Prisma.SortOrder;
    initiatedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type PayoutMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    walletId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    methodePaiement?: Prisma.SortOrder;
    referenceBancaire?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    attachments?: Prisma.SortOrder;
    initiatedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    walletId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    methodePaiement?: Prisma.SortOrder;
    referenceBancaire?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    attachments?: Prisma.SortOrder;
    initiatedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type PayoutScalarRelationFilter = {
    is?: Prisma.PayoutWhereInput;
    isNot?: Prisma.PayoutWhereInput;
};
export type PayoutCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput> | Prisma.PayoutCreateWithoutOrganizerInput[] | Prisma.PayoutUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutOrganizerInput | Prisma.PayoutCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.PayoutCreateManyOrganizerInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput> | Prisma.PayoutCreateWithoutApprovedByInput[] | Prisma.PayoutUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutApprovedByInput | Prisma.PayoutCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.PayoutCreateManyApprovedByInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput> | Prisma.PayoutCreateWithoutProcessedByInput[] | Prisma.PayoutUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutProcessedByInput | Prisma.PayoutCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.PayoutCreateManyProcessedByInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput> | Prisma.PayoutCreateWithoutOrganizerInput[] | Prisma.PayoutUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutOrganizerInput | Prisma.PayoutCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.PayoutCreateManyOrganizerInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput> | Prisma.PayoutCreateWithoutApprovedByInput[] | Prisma.PayoutUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutApprovedByInput | Prisma.PayoutCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.PayoutCreateManyApprovedByInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput> | Prisma.PayoutCreateWithoutProcessedByInput[] | Prisma.PayoutUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutProcessedByInput | Prisma.PayoutCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.PayoutCreateManyProcessedByInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput> | Prisma.PayoutCreateWithoutOrganizerInput[] | Prisma.PayoutUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutOrganizerInput | Prisma.PayoutCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.PayoutUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.PayoutCreateManyOrganizerInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.PayoutUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutOrganizerInput | Prisma.PayoutUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput> | Prisma.PayoutCreateWithoutApprovedByInput[] | Prisma.PayoutUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutApprovedByInput | Prisma.PayoutCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.PayoutUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.PayoutCreateManyApprovedByInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.PayoutUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutApprovedByInput | Prisma.PayoutUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput> | Prisma.PayoutCreateWithoutProcessedByInput[] | Prisma.PayoutUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutProcessedByInput | Prisma.PayoutCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.PayoutUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.PayoutCreateManyProcessedByInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.PayoutUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutProcessedByInput | Prisma.PayoutUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput> | Prisma.PayoutCreateWithoutOrganizerInput[] | Prisma.PayoutUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutOrganizerInput | Prisma.PayoutCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.PayoutUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.PayoutCreateManyOrganizerInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.PayoutUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutOrganizerInput | Prisma.PayoutUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput> | Prisma.PayoutCreateWithoutApprovedByInput[] | Prisma.PayoutUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutApprovedByInput | Prisma.PayoutCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.PayoutUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.PayoutCreateManyApprovedByInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.PayoutUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutApprovedByInput | Prisma.PayoutUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput> | Prisma.PayoutCreateWithoutProcessedByInput[] | Prisma.PayoutUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutProcessedByInput | Prisma.PayoutCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.PayoutUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.PayoutCreateManyProcessedByInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.PayoutUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutProcessedByInput | Prisma.PayoutUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutCreateNestedManyWithoutWalletInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput> | Prisma.PayoutCreateWithoutWalletInput[] | Prisma.PayoutUncheckedCreateWithoutWalletInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutWalletInput | Prisma.PayoutCreateOrConnectWithoutWalletInput[];
    createMany?: Prisma.PayoutCreateManyWalletInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutWalletInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput> | Prisma.PayoutCreateWithoutWalletInput[] | Prisma.PayoutUncheckedCreateWithoutWalletInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutWalletInput | Prisma.PayoutCreateOrConnectWithoutWalletInput[];
    createMany?: Prisma.PayoutCreateManyWalletInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutWalletNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput> | Prisma.PayoutCreateWithoutWalletInput[] | Prisma.PayoutUncheckedCreateWithoutWalletInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutWalletInput | Prisma.PayoutCreateOrConnectWithoutWalletInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutWalletInput | Prisma.PayoutUpsertWithWhereUniqueWithoutWalletInput[];
    createMany?: Prisma.PayoutCreateManyWalletInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutWalletInput | Prisma.PayoutUpdateWithWhereUniqueWithoutWalletInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutWalletInput | Prisma.PayoutUpdateManyWithWhereWithoutWalletInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput> | Prisma.PayoutCreateWithoutWalletInput[] | Prisma.PayoutUncheckedCreateWithoutWalletInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutWalletInput | Prisma.PayoutCreateOrConnectWithoutWalletInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutWalletInput | Prisma.PayoutUpsertWithWhereUniqueWithoutWalletInput[];
    createMany?: Prisma.PayoutCreateManyWalletInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutWalletInput | Prisma.PayoutUpdateWithWhereUniqueWithoutWalletInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutWalletInput | Prisma.PayoutUpdateManyWithWhereWithoutWalletInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus;
};
export type PayoutCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutTransactionsInput, Prisma.PayoutUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.PayoutWhereUniqueInput;
};
export type PayoutUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutTransactionsInput, Prisma.PayoutUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.PayoutUpsertWithoutTransactionsInput;
    connect?: Prisma.PayoutWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutUpdateToOneWithWhereWithoutTransactionsInput, Prisma.PayoutUpdateWithoutTransactionsInput>, Prisma.PayoutUncheckedUpdateWithoutTransactionsInput>;
};
export type PayoutCreateNestedOneWithoutStatusHistoryInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutStatusHistoryInput, Prisma.PayoutUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutStatusHistoryInput;
    connect?: Prisma.PayoutWhereUniqueInput;
};
export type PayoutUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutStatusHistoryInput, Prisma.PayoutUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutStatusHistoryInput;
    upsert?: Prisma.PayoutUpsertWithoutStatusHistoryInput;
    connect?: Prisma.PayoutWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutUpdateToOneWithWhereWithoutStatusHistoryInput, Prisma.PayoutUpdateWithoutStatusHistoryInput>, Prisma.PayoutUncheckedUpdateWithoutStatusHistoryInput>;
};
export type PayoutCreateWithoutOrganizerInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput>;
};
export type PayoutCreateManyOrganizerInputEnvelope = {
    data: Prisma.PayoutCreateManyOrganizerInput | Prisma.PayoutCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type PayoutCreateWithoutApprovedByInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput>;
};
export type PayoutCreateManyApprovedByInputEnvelope = {
    data: Prisma.PayoutCreateManyApprovedByInput | Prisma.PayoutCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type PayoutCreateWithoutProcessedByInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutProcessedByInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutProcessedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput>;
};
export type PayoutCreateManyProcessedByInputEnvelope = {
    data: Prisma.PayoutCreateManyProcessedByInput | Prisma.PayoutCreateManyProcessedByInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutOrganizerInput, Prisma.PayoutUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutOrganizerInput, Prisma.PayoutUncheckedCreateWithoutOrganizerInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutOrganizerInput, Prisma.PayoutUncheckedUpdateWithoutOrganizerInput>;
};
export type PayoutUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutOrganizerInput>;
};
export type PayoutScalarWhereInput = {
    AND?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    OR?: Prisma.PayoutScalarWhereInput[];
    NOT?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    organizerId?: Prisma.StringFilter<"Payout"> | string;
    walletId?: Prisma.StringFilter<"Payout"> | string;
    montant?: Prisma.IntFilter<"Payout"> | number;
    devise?: Prisma.StringFilter<"Payout"> | string;
    methodePaiement?: Prisma.StringFilter<"Payout"> | string;
    referenceBancaire?: Prisma.StringNullableFilter<"Payout"> | string | null;
    statut?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    approvedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Payout"> | string | null;
    notes?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attachments?: Prisma.StringNullableFilter<"Payout"> | string | null;
    initiatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
};
export type PayoutUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutApprovedByInput, Prisma.PayoutUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutApprovedByInput, Prisma.PayoutUncheckedCreateWithoutApprovedByInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutApprovedByInput, Prisma.PayoutUncheckedUpdateWithoutApprovedByInput>;
};
export type PayoutUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutApprovedByInput>;
};
export type PayoutUpsertWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutProcessedByInput, Prisma.PayoutUncheckedUpdateWithoutProcessedByInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutProcessedByInput, Prisma.PayoutUncheckedCreateWithoutProcessedByInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutProcessedByInput, Prisma.PayoutUncheckedUpdateWithoutProcessedByInput>;
};
export type PayoutUpdateManyWithWhereWithoutProcessedByInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutProcessedByInput>;
};
export type PayoutCreateWithoutWalletInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutWalletInput = {
    id?: string;
    organizerId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutWalletInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput>;
};
export type PayoutCreateManyWalletInputEnvelope = {
    data: Prisma.PayoutCreateManyWalletInput | Prisma.PayoutCreateManyWalletInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutWalletInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutWalletInput, Prisma.PayoutUncheckedUpdateWithoutWalletInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutWalletInput, Prisma.PayoutUncheckedCreateWithoutWalletInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutWalletInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutWalletInput, Prisma.PayoutUncheckedUpdateWithoutWalletInput>;
};
export type PayoutUpdateManyWithWhereWithoutWalletInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutWalletInput>;
};
export type PayoutCreateWithoutTransactionsInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    statusHistory?: Prisma.PayoutStatusHistoryCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutTransactionsInput, Prisma.PayoutUncheckedCreateWithoutTransactionsInput>;
};
export type PayoutUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutTransactionsInput, Prisma.PayoutUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutTransactionsInput, Prisma.PayoutUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.PayoutWhereInput;
};
export type PayoutUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.PayoutWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutTransactionsInput, Prisma.PayoutUncheckedUpdateWithoutTransactionsInput>;
};
export type PayoutUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutCreateWithoutStatusHistoryInput = {
    id?: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerPayoutsInput;
    wallet: Prisma.WalletCreateNestedOneWithoutPayoutsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedPayoutsInput;
    processedBy?: Prisma.UserCreateNestedOneWithoutProcessedPayoutsInput;
    transactions?: Prisma.PayoutTransactionCreateNestedManyWithoutPayoutInput;
};
export type PayoutUncheckedCreateWithoutStatusHistoryInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutPayoutInput;
};
export type PayoutCreateOrConnectWithoutStatusHistoryInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutStatusHistoryInput, Prisma.PayoutUncheckedCreateWithoutStatusHistoryInput>;
};
export type PayoutUpsertWithoutStatusHistoryInput = {
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutStatusHistoryInput, Prisma.PayoutUncheckedUpdateWithoutStatusHistoryInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutStatusHistoryInput, Prisma.PayoutUncheckedCreateWithoutStatusHistoryInput>;
    where?: Prisma.PayoutWhereInput;
};
export type PayoutUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: Prisma.PayoutWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutStatusHistoryInput, Prisma.PayoutUncheckedUpdateWithoutStatusHistoryInput>;
};
export type PayoutUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutCreateManyOrganizerInput = {
    id?: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateManyApprovedByInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateManyProcessedByInput = {
    id?: string;
    organizerId: string;
    walletId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    wallet?: Prisma.WalletUpdateOneRequiredWithoutPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateManyWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    walletId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManyWalletInput = {
    id?: string;
    organizerId: string;
    montant: number;
    devise?: string;
    methodePaiement: string;
    referenceBancaire?: string | null;
    statut?: $Enums.PayoutStatus;
    approvedById?: string | null;
    processedById?: string | null;
    notes?: string | null;
    attachments?: string | null;
    initiatedAt?: Date | string;
    approvedAt?: Date | string | null;
    processedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedPayoutsNestedInput;
    processedBy?: Prisma.UserUpdateOneWithoutProcessedPayoutsNestedInput;
    transactions?: Prisma.PayoutTransactionUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutPayoutNestedInput;
    statusHistory?: Prisma.PayoutStatusHistoryUncheckedUpdateManyWithoutPayoutNestedInput;
};
export type PayoutUncheckedUpdateManyWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    methodePaiement?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceBancaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attachments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    initiatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PayoutCountOutputType
 */
export type PayoutCountOutputType = {
    transactions: number;
    statusHistory: number;
};
export type PayoutCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | PayoutCountOutputTypeCountTransactionsArgs;
    statusHistory?: boolean | PayoutCountOutputTypeCountStatusHistoryArgs;
};
/**
 * PayoutCountOutputType without action
 */
export type PayoutCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutCountOutputType
     */
    select?: Prisma.PayoutCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PayoutCountOutputType without action
 */
export type PayoutCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutTransactionWhereInput;
};
/**
 * PayoutCountOutputType without action
 */
export type PayoutCountOutputTypeCountStatusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutStatusHistoryWhereInput;
};
export type PayoutSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerId?: boolean;
    walletId?: boolean;
    montant?: boolean;
    devise?: boolean;
    methodePaiement?: boolean;
    referenceBancaire?: boolean;
    statut?: boolean;
    approvedById?: boolean;
    processedById?: boolean;
    notes?: boolean;
    attachments?: boolean;
    initiatedAt?: boolean;
    approvedAt?: boolean;
    processedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
    transactions?: boolean | Prisma.Payout$transactionsArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Payout$statusHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.PayoutCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerId?: boolean;
    walletId?: boolean;
    montant?: boolean;
    devise?: boolean;
    methodePaiement?: boolean;
    referenceBancaire?: boolean;
    statut?: boolean;
    approvedById?: boolean;
    processedById?: boolean;
    notes?: boolean;
    attachments?: boolean;
    initiatedAt?: boolean;
    approvedAt?: boolean;
    processedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerId?: boolean;
    walletId?: boolean;
    montant?: boolean;
    devise?: boolean;
    methodePaiement?: boolean;
    referenceBancaire?: boolean;
    statut?: boolean;
    approvedById?: boolean;
    processedById?: boolean;
    notes?: boolean;
    attachments?: boolean;
    initiatedAt?: boolean;
    approvedAt?: boolean;
    processedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectScalar = {
    id?: boolean;
    organizerId?: boolean;
    walletId?: boolean;
    montant?: boolean;
    devise?: boolean;
    methodePaiement?: boolean;
    referenceBancaire?: boolean;
    statut?: boolean;
    approvedById?: boolean;
    processedById?: boolean;
    notes?: boolean;
    attachments?: boolean;
    initiatedAt?: boolean;
    approvedAt?: boolean;
    processedAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PayoutOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizerId" | "walletId" | "montant" | "devise" | "methodePaiement" | "referenceBancaire" | "statut" | "approvedById" | "processedById" | "notes" | "attachments" | "initiatedAt" | "approvedAt" | "processedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payout"]>;
export type PayoutInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
    transactions?: boolean | Prisma.Payout$transactionsArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Payout$statusHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.PayoutCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PayoutIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
};
export type PayoutIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wallet?: boolean | Prisma.WalletDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.Payout$approvedByArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Payout$processedByArgs<ExtArgs>;
};
export type $PayoutPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payout";
    objects: {
        organizer: Prisma.$UserPayload<ExtArgs>;
        wallet: Prisma.$WalletPayload<ExtArgs>;
        approvedBy: Prisma.$UserPayload<ExtArgs> | null;
        processedBy: Prisma.$UserPayload<ExtArgs> | null;
        transactions: Prisma.$PayoutTransactionPayload<ExtArgs>[];
        statusHistory: Prisma.$PayoutStatusHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizerId: string;
        walletId: string;
        montant: number;
        devise: string;
        methodePaiement: string;
        referenceBancaire: string | null;
        statut: $Enums.PayoutStatus;
        approvedById: string | null;
        processedById: string | null;
        notes: string | null;
        attachments: string | null;
        initiatedAt: Date;
        approvedAt: Date | null;
        processedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["payout"]>;
    composites: {};
};
export type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutPayload, S>;
export type PayoutCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutCountAggregateInputType | true;
};
export interface PayoutDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payout'];
        meta: {
            name: 'Payout';
        };
    };
    /**
     * Find zero or one Payout that matches the filter.
     * @param {PayoutFindUniqueArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Payout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutFindUniqueOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payout.findMany()
     *
     * // Get first 10 Payouts
     * const payouts = await prisma.payout.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const payoutWithIdOnly = await prisma.payout.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PayoutFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Payout.
     * @param {PayoutCreateArgs} args - Arguments to create a Payout.
     * @example
     * // Create one Payout
     * const Payout = await prisma.payout.create({
     *   data: {
     *     // ... data to create a Payout
     *   }
     * })
     *
     */
    create<T extends PayoutCreateArgs>(args: Prisma.SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Payouts.
     * @param {PayoutCreateManyArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PayoutCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Payouts and returns the data saved in the database.
     * @param {PayoutCreateManyAndReturnArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payouts and only return the `id`
     * const payoutWithIdOnly = await prisma.payout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PayoutCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Payout.
     * @param {PayoutDeleteArgs} args - Arguments to delete one Payout.
     * @example
     * // Delete one Payout
     * const Payout = await prisma.payout.delete({
     *   where: {
     *     // ... filter to delete one Payout
     *   }
     * })
     *
     */
    delete<T extends PayoutDeleteArgs>(args: Prisma.SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Payout.
     * @param {PayoutUpdateArgs} args - Arguments to update one Payout.
     * @example
     * // Update one Payout
     * const payout = await prisma.payout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PayoutUpdateArgs>(args: Prisma.SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Payouts.
     * @param {PayoutDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PayoutDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PayoutUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Payouts and returns the data updated in the database.
     * @param {PayoutUpdateManyAndReturnArgs} args - Arguments to update many Payouts.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payouts and only return the `id`
     * const payoutWithIdOnly = await prisma.payout.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayoutUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Payout.
     * @param {PayoutUpsertArgs} args - Arguments to update or create a Payout.
     * @example
     * // Update or create a Payout
     * const payout = await prisma.payout.upsert({
     *   create: {
     *     // ... data to create a Payout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout we want to update
     *   }
     * })
     */
    upsert<T extends PayoutUpsertArgs>(args: Prisma.SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payout.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends PayoutCountArgs>(args?: Prisma.Subset<T, PayoutCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutAggregateArgs>(args: Prisma.Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>;
    /**
     * Group by Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PayoutGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payout model
     */
    readonly fields: PayoutFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Payout.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organizer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wallet<T extends Prisma.WalletDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WalletDefaultArgs<ExtArgs>>): Prisma.Prisma__WalletClient<runtime.Types.Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.Payout$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$approvedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    processedBy<T extends Prisma.Payout$processedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$processedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.Payout$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    statusHistory<T extends Prisma.Payout$statusHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Payout model
 */
export interface PayoutFieldRefs {
    readonly id: Prisma.FieldRef<"Payout", 'String'>;
    readonly organizerId: Prisma.FieldRef<"Payout", 'String'>;
    readonly walletId: Prisma.FieldRef<"Payout", 'String'>;
    readonly montant: Prisma.FieldRef<"Payout", 'Int'>;
    readonly devise: Prisma.FieldRef<"Payout", 'String'>;
    readonly methodePaiement: Prisma.FieldRef<"Payout", 'String'>;
    readonly referenceBancaire: Prisma.FieldRef<"Payout", 'String'>;
    readonly statut: Prisma.FieldRef<"Payout", 'PayoutStatus'>;
    readonly approvedById: Prisma.FieldRef<"Payout", 'String'>;
    readonly processedById: Prisma.FieldRef<"Payout", 'String'>;
    readonly notes: Prisma.FieldRef<"Payout", 'String'>;
    readonly attachments: Prisma.FieldRef<"Payout", 'String'>;
    readonly initiatedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly approvedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly processedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
}
/**
 * Payout findUnique
 */
export type PayoutFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter, which Payout to fetch.
     */
    where: Prisma.PayoutWhereUniqueInput;
};
/**
 * Payout findUniqueOrThrow
 */
export type PayoutFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter, which Payout to fetch.
     */
    where: Prisma.PayoutWhereUniqueInput;
};
/**
 * Payout findFirst
 */
export type PayoutFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter, which Payout to fetch.
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payouts to fetch.
     */
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payouts.
     */
    cursor?: Prisma.PayoutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payouts.
     */
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * Payout findFirstOrThrow
 */
export type PayoutFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter, which Payout to fetch.
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payouts to fetch.
     */
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payouts.
     */
    cursor?: Prisma.PayoutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payouts.
     */
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * Payout findMany
 */
export type PayoutFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter, which Payouts to fetch.
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payouts to fetch.
     */
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payouts.
     */
    cursor?: Prisma.PayoutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payouts.
     */
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * Payout create
 */
export type PayoutCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payout.
     */
    data: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
};
/**
 * Payout createMany
 */
export type PayoutCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payouts.
     */
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Payout createManyAndReturn
 */
export type PayoutCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * The data used to create many Payouts.
     */
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Payout update
 */
export type PayoutUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payout.
     */
    data: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
    /**
     * Choose, which Payout to update.
     */
    where: Prisma.PayoutWhereUniqueInput;
};
/**
 * Payout updateMany
 */
export type PayoutUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Payouts.
     */
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    /**
     * Filter which Payouts to update
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * Limit how many Payouts to update.
     */
    limit?: number;
};
/**
 * Payout updateManyAndReturn
 */
export type PayoutUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * The data used to update Payouts.
     */
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    /**
     * Filter which Payouts to update
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * Limit how many Payouts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Payout upsert
 */
export type PayoutUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payout to update in case it exists.
     */
    where: Prisma.PayoutWhereUniqueInput;
    /**
     * In case the Payout found by the `where` argument doesn't exist, create a new Payout with this data.
     */
    create: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
    /**
     * In case the Payout was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
};
/**
 * Payout delete
 */
export type PayoutDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    /**
     * Filter which Payout to delete.
     */
    where: Prisma.PayoutWhereUniqueInput;
};
/**
 * Payout deleteMany
 */
export type PayoutDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payouts to delete
     */
    where?: Prisma.PayoutWhereInput;
    /**
     * Limit how many Payouts to delete.
     */
    limit?: number;
};
/**
 * Payout.approvedBy
 */
export type Payout$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Payout.processedBy
 */
export type Payout$processedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Payout.transactions
 */
export type Payout$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PayoutTransactionWhereInput;
    orderBy?: Prisma.PayoutTransactionOrderByWithRelationInput | Prisma.PayoutTransactionOrderByWithRelationInput[];
    cursor?: Prisma.PayoutTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutTransactionScalarFieldEnum | Prisma.PayoutTransactionScalarFieldEnum[];
};
/**
 * Payout.statusHistory
 */
export type Payout$statusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutStatusHistory
     */
    select?: Prisma.PayoutStatusHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PayoutStatusHistory
     */
    omit?: Prisma.PayoutStatusHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.PayoutStatusHistoryWhereInput;
    orderBy?: Prisma.PayoutStatusHistoryOrderByWithRelationInput | Prisma.PayoutStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PayoutStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutStatusHistoryScalarFieldEnum | Prisma.PayoutStatusHistoryScalarFieldEnum[];
};
/**
 * Payout without action
 */
export type PayoutDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Payout.d.ts.map