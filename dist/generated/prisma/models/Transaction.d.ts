import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Transaction
 *
 */
export type TransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    montantTTC: number | null;
    montantHT: number | null;
    tva: number | null;
    commission: number | null;
    netOrganisateur: number | null;
    tauxTVA: number | null;
    tauxCommission: number | null;
    refundAmount: number | null;
};
export type TransactionSumAggregateOutputType = {
    montantTTC: number | null;
    montantHT: number | null;
    tva: number | null;
    commission: number | null;
    netOrganisateur: number | null;
    tauxTVA: number | null;
    tauxCommission: number | null;
    refundAmount: number | null;
};
export type TransactionMinAggregateOutputType = {
    id: string | null;
    idempotencyKey: string | null;
    eventId: string | null;
    organizerId: string | null;
    buyerId: string | null;
    ticketId: string | null;
    montantTTC: number | null;
    montantHT: number | null;
    tva: number | null;
    commission: number | null;
    netOrganisateur: number | null;
    devise: string | null;
    tauxTVA: number | null;
    tauxCommission: number | null;
    status: $Enums.TransactionStatus | null;
    paymentMethod: string | null;
    paymentProviderTransactionId: string | null;
    refundAmount: number | null;
    refundReason: string | null;
    checksum: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    completedAt: Date | null;
};
export type TransactionMaxAggregateOutputType = {
    id: string | null;
    idempotencyKey: string | null;
    eventId: string | null;
    organizerId: string | null;
    buyerId: string | null;
    ticketId: string | null;
    montantTTC: number | null;
    montantHT: number | null;
    tva: number | null;
    commission: number | null;
    netOrganisateur: number | null;
    devise: string | null;
    tauxTVA: number | null;
    tauxCommission: number | null;
    status: $Enums.TransactionStatus | null;
    paymentMethod: string | null;
    paymentProviderTransactionId: string | null;
    refundAmount: number | null;
    refundReason: string | null;
    checksum: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    completedAt: Date | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    idempotencyKey: number;
    eventId: number;
    organizerId: number;
    buyerId: number;
    ticketId: number;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise: number;
    tauxTVA: number;
    tauxCommission: number;
    status: number;
    paymentMethod: number;
    paymentProviderTransactionId: number;
    metadata: number;
    refundAmount: number;
    refundReason: number;
    checksum: number;
    createdAt: number;
    updatedAt: number;
    completedAt: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    montantTTC?: true;
    montantHT?: true;
    tva?: true;
    commission?: true;
    netOrganisateur?: true;
    tauxTVA?: true;
    tauxCommission?: true;
    refundAmount?: true;
};
export type TransactionSumAggregateInputType = {
    montantTTC?: true;
    montantHT?: true;
    tva?: true;
    commission?: true;
    netOrganisateur?: true;
    tauxTVA?: true;
    tauxCommission?: true;
    refundAmount?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    eventId?: true;
    organizerId?: true;
    buyerId?: true;
    ticketId?: true;
    montantTTC?: true;
    montantHT?: true;
    tva?: true;
    commission?: true;
    netOrganisateur?: true;
    devise?: true;
    tauxTVA?: true;
    tauxCommission?: true;
    status?: true;
    paymentMethod?: true;
    paymentProviderTransactionId?: true;
    refundAmount?: true;
    refundReason?: true;
    checksum?: true;
    createdAt?: true;
    updatedAt?: true;
    completedAt?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    eventId?: true;
    organizerId?: true;
    buyerId?: true;
    ticketId?: true;
    montantTTC?: true;
    montantHT?: true;
    tva?: true;
    commission?: true;
    netOrganisateur?: true;
    devise?: true;
    tauxTVA?: true;
    tauxCommission?: true;
    status?: true;
    paymentMethod?: true;
    paymentProviderTransactionId?: true;
    refundAmount?: true;
    refundReason?: true;
    checksum?: true;
    createdAt?: true;
    updatedAt?: true;
    completedAt?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    eventId?: true;
    organizerId?: true;
    buyerId?: true;
    ticketId?: true;
    montantTTC?: true;
    montantHT?: true;
    tva?: true;
    commission?: true;
    netOrganisateur?: true;
    devise?: true;
    tauxTVA?: true;
    tauxCommission?: true;
    status?: true;
    paymentMethod?: true;
    paymentProviderTransactionId?: true;
    metadata?: true;
    refundAmount?: true;
    refundReason?: true;
    checksum?: true;
    createdAt?: true;
    updatedAt?: true;
    completedAt?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type TransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithAggregationInput | Prisma.TransactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise: string;
    tauxTVA: number;
    tauxCommission: number;
    status: $Enums.TransactionStatus;
    paymentMethod: string | null;
    paymentProviderTransactionId: string | null;
    metadata: runtime.JsonValue | null;
    refundAmount: number | null;
    refundReason: string | null;
    checksum: string;
    createdAt: Date;
    updatedAt: Date;
    completedAt: Date | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type TransactionWhereInput = {
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    idempotencyKey?: Prisma.StringFilter<"Transaction"> | string;
    eventId?: Prisma.StringFilter<"Transaction"> | string;
    organizerId?: Prisma.StringFilter<"Transaction"> | string;
    buyerId?: Prisma.StringFilter<"Transaction"> | string;
    ticketId?: Prisma.StringFilter<"Transaction"> | string;
    montantTTC?: Prisma.IntFilter<"Transaction"> | number;
    montantHT?: Prisma.IntFilter<"Transaction"> | number;
    tva?: Prisma.IntFilter<"Transaction"> | number;
    commission?: Prisma.IntFilter<"Transaction"> | number;
    netOrganisateur?: Prisma.IntFilter<"Transaction"> | number;
    devise?: Prisma.StringFilter<"Transaction"> | string;
    tauxTVA?: Prisma.IntFilter<"Transaction"> | number;
    tauxCommission?: Prisma.IntFilter<"Transaction"> | number;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    paymentProviderTransactionId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Transaction">;
    refundAmount?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    refundReason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    checksum?: Prisma.StringFilter<"Transaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    buyer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    ticket?: Prisma.XOR<Prisma.TicketScalarRelationFilter, Prisma.TicketWhereInput>;
    statusHistory?: Prisma.TransactionStatusHistoryListRelationFilter;
    payoutTransactions?: Prisma.PayoutTransactionListRelationFilter;
};
export type TransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentProviderTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    organizer?: Prisma.UserOrderByWithRelationInput;
    buyer?: Prisma.UserOrderByWithRelationInput;
    ticket?: Prisma.TicketOrderByWithRelationInput;
    statusHistory?: Prisma.TransactionStatusHistoryOrderByRelationAggregateInput;
    payoutTransactions?: Prisma.PayoutTransactionOrderByRelationAggregateInput;
};
export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    ticketId?: string;
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    eventId?: Prisma.StringFilter<"Transaction"> | string;
    organizerId?: Prisma.StringFilter<"Transaction"> | string;
    buyerId?: Prisma.StringFilter<"Transaction"> | string;
    montantTTC?: Prisma.IntFilter<"Transaction"> | number;
    montantHT?: Prisma.IntFilter<"Transaction"> | number;
    tva?: Prisma.IntFilter<"Transaction"> | number;
    commission?: Prisma.IntFilter<"Transaction"> | number;
    netOrganisateur?: Prisma.IntFilter<"Transaction"> | number;
    devise?: Prisma.StringFilter<"Transaction"> | string;
    tauxTVA?: Prisma.IntFilter<"Transaction"> | number;
    tauxCommission?: Prisma.IntFilter<"Transaction"> | number;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    paymentProviderTransactionId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Transaction">;
    refundAmount?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    refundReason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    checksum?: Prisma.StringFilter<"Transaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    buyer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    ticket?: Prisma.XOR<Prisma.TicketScalarRelationFilter, Prisma.TicketWhereInput>;
    statusHistory?: Prisma.TransactionStatusHistoryListRelationFilter;
    payoutTransactions?: Prisma.PayoutTransactionListRelationFilter;
}, "id" | "idempotencyKey" | "ticketId">;
export type TransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentProviderTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TransactionCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAvgOrderByAggregateInput;
    _max?: Prisma.TransactionMaxOrderByAggregateInput;
    _min?: Prisma.TransactionMinOrderByAggregateInput;
    _sum?: Prisma.TransactionSumOrderByAggregateInput;
};
export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    idempotencyKey?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    organizerId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    buyerId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    ticketId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    montantTTC?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    montantHT?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    tva?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    commission?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    netOrganisateur?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    devise?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    tauxTVA?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    tauxCommission?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus;
    paymentMethod?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    paymentProviderTransactionId?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Transaction">;
    refundAmount?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    refundReason?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    checksum?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null;
};
export type TransactionCreateInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionCreateManyInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type TransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionListRelationFilter = {
    every?: Prisma.TransactionWhereInput;
    some?: Prisma.TransactionWhereInput;
    none?: Prisma.TransactionWhereInput;
};
export type TransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionNullableScalarRelationFilter = {
    is?: Prisma.TransactionWhereInput | null;
    isNot?: Prisma.TransactionWhereInput | null;
};
export type TransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentProviderTransactionId?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type TransactionAvgOrderByAggregateInput = {
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
};
export type TransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentProviderTransactionId?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type TransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    devise?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentProviderTransactionId?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type TransactionSumOrderByAggregateInput = {
    montantTTC?: Prisma.SortOrder;
    montantHT?: Prisma.SortOrder;
    tva?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    netOrganisateur?: Prisma.SortOrder;
    tauxTVA?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    refundAmount?: Prisma.SortOrder;
};
export type TransactionScalarRelationFilter = {
    is?: Prisma.TransactionWhereInput;
    isNot?: Prisma.TransactionWhereInput;
};
export type TransactionCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput> | Prisma.TransactionCreateWithoutOrganizerInput[] | Prisma.TransactionUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutOrganizerInput | Prisma.TransactionCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.TransactionCreateManyOrganizerInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput> | Prisma.TransactionCreateWithoutBuyerInput[] | Prisma.TransactionUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutBuyerInput | Prisma.TransactionCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.TransactionCreateManyBuyerInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput> | Prisma.TransactionCreateWithoutOrganizerInput[] | Prisma.TransactionUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutOrganizerInput | Prisma.TransactionCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.TransactionCreateManyOrganizerInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput> | Prisma.TransactionCreateWithoutBuyerInput[] | Prisma.TransactionUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutBuyerInput | Prisma.TransactionCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.TransactionCreateManyBuyerInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput> | Prisma.TransactionCreateWithoutOrganizerInput[] | Prisma.TransactionUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutOrganizerInput | Prisma.TransactionCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.TransactionUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.TransactionCreateManyOrganizerInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.TransactionUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutOrganizerInput | Prisma.TransactionUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput> | Prisma.TransactionCreateWithoutBuyerInput[] | Prisma.TransactionUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutBuyerInput | Prisma.TransactionCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutBuyerInput | Prisma.TransactionUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.TransactionCreateManyBuyerInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutBuyerInput | Prisma.TransactionUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutBuyerInput | Prisma.TransactionUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput> | Prisma.TransactionCreateWithoutOrganizerInput[] | Prisma.TransactionUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutOrganizerInput | Prisma.TransactionCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.TransactionUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.TransactionCreateManyOrganizerInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.TransactionUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutOrganizerInput | Prisma.TransactionUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput> | Prisma.TransactionCreateWithoutBuyerInput[] | Prisma.TransactionUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutBuyerInput | Prisma.TransactionCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutBuyerInput | Prisma.TransactionUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.TransactionCreateManyBuyerInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutBuyerInput | Prisma.TransactionUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutBuyerInput | Prisma.TransactionUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput> | Prisma.TransactionCreateWithoutEventInput[] | Prisma.TransactionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutEventInput | Prisma.TransactionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TransactionCreateManyEventInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput> | Prisma.TransactionCreateWithoutEventInput[] | Prisma.TransactionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutEventInput | Prisma.TransactionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TransactionCreateManyEventInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput> | Prisma.TransactionCreateWithoutEventInput[] | Prisma.TransactionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutEventInput | Prisma.TransactionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutEventInput | Prisma.TransactionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TransactionCreateManyEventInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutEventInput | Prisma.TransactionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutEventInput | Prisma.TransactionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput> | Prisma.TransactionCreateWithoutEventInput[] | Prisma.TransactionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutEventInput | Prisma.TransactionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutEventInput | Prisma.TransactionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TransactionCreateManyEventInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutEventInput | Prisma.TransactionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutEventInput | Prisma.TransactionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionCreateNestedOneWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTicketInput;
    connect?: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUncheckedCreateNestedOneWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTicketInput;
    connect?: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateOneWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTicketInput;
    upsert?: Prisma.TransactionUpsertWithoutTicketInput;
    disconnect?: Prisma.TransactionWhereInput | boolean;
    delete?: Prisma.TransactionWhereInput | boolean;
    connect?: Prisma.TransactionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransactionUpdateToOneWithWhereWithoutTicketInput, Prisma.TransactionUpdateWithoutTicketInput>, Prisma.TransactionUncheckedUpdateWithoutTicketInput>;
};
export type TransactionUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTicketInput;
    upsert?: Prisma.TransactionUpsertWithoutTicketInput;
    disconnect?: Prisma.TransactionWhereInput | boolean;
    delete?: Prisma.TransactionWhereInput | boolean;
    connect?: Prisma.TransactionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransactionUpdateToOneWithWhereWithoutTicketInput, Prisma.TransactionUpdateWithoutTicketInput>, Prisma.TransactionUncheckedUpdateWithoutTicketInput>;
};
export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
};
export type TransactionCreateNestedOneWithoutStatusHistoryInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStatusHistoryInput, Prisma.TransactionUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStatusHistoryInput;
    connect?: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStatusHistoryInput, Prisma.TransactionUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStatusHistoryInput;
    upsert?: Prisma.TransactionUpsertWithoutStatusHistoryInput;
    connect?: Prisma.TransactionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransactionUpdateToOneWithWhereWithoutStatusHistoryInput, Prisma.TransactionUpdateWithoutStatusHistoryInput>, Prisma.TransactionUncheckedUpdateWithoutStatusHistoryInput>;
};
export type TransactionCreateNestedOneWithoutPayoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedCreateWithoutPayoutTransactionsInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutPayoutTransactionsInput;
    connect?: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateOneRequiredWithoutPayoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedCreateWithoutPayoutTransactionsInput>;
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutPayoutTransactionsInput;
    upsert?: Prisma.TransactionUpsertWithoutPayoutTransactionsInput;
    connect?: Prisma.TransactionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransactionUpdateToOneWithWhereWithoutPayoutTransactionsInput, Prisma.TransactionUpdateWithoutPayoutTransactionsInput>, Prisma.TransactionUncheckedUpdateWithoutPayoutTransactionsInput>;
};
export type TransactionCreateWithoutOrganizerInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput>;
};
export type TransactionCreateManyOrganizerInputEnvelope = {
    data: Prisma.TransactionCreateManyOrganizerInput | Prisma.TransactionCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type TransactionCreateWithoutBuyerInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutBuyerInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutBuyerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput>;
};
export type TransactionCreateManyBuyerInputEnvelope = {
    data: Prisma.TransactionCreateManyBuyerInput | Prisma.TransactionCreateManyBuyerInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutOrganizerInput, Prisma.TransactionUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutOrganizerInput, Prisma.TransactionUncheckedCreateWithoutOrganizerInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutOrganizerInput, Prisma.TransactionUncheckedUpdateWithoutOrganizerInput>;
};
export type TransactionUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutOrganizerInput>;
};
export type TransactionScalarWhereInput = {
    AND?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    OR?: Prisma.TransactionScalarWhereInput[];
    NOT?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    idempotencyKey?: Prisma.StringFilter<"Transaction"> | string;
    eventId?: Prisma.StringFilter<"Transaction"> | string;
    organizerId?: Prisma.StringFilter<"Transaction"> | string;
    buyerId?: Prisma.StringFilter<"Transaction"> | string;
    ticketId?: Prisma.StringFilter<"Transaction"> | string;
    montantTTC?: Prisma.IntFilter<"Transaction"> | number;
    montantHT?: Prisma.IntFilter<"Transaction"> | number;
    tva?: Prisma.IntFilter<"Transaction"> | number;
    commission?: Prisma.IntFilter<"Transaction"> | number;
    netOrganisateur?: Prisma.IntFilter<"Transaction"> | number;
    devise?: Prisma.StringFilter<"Transaction"> | string;
    tauxTVA?: Prisma.IntFilter<"Transaction"> | number;
    tauxCommission?: Prisma.IntFilter<"Transaction"> | number;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    paymentProviderTransactionId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Transaction">;
    refundAmount?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    refundReason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    checksum?: Prisma.StringFilter<"Transaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
};
export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutBuyerInput, Prisma.TransactionUncheckedUpdateWithoutBuyerInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutBuyerInput, Prisma.TransactionUncheckedCreateWithoutBuyerInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutBuyerInput, Prisma.TransactionUncheckedUpdateWithoutBuyerInput>;
};
export type TransactionUpdateManyWithWhereWithoutBuyerInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutBuyerInput>;
};
export type TransactionCreateWithoutEventInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutEventInput = {
    id?: string;
    idempotencyKey: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutEventInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput>;
};
export type TransactionCreateManyEventInputEnvelope = {
    data: Prisma.TransactionCreateManyEventInput | Prisma.TransactionCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutEventInput, Prisma.TransactionUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutEventInput, Prisma.TransactionUncheckedCreateWithoutEventInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutEventInput, Prisma.TransactionUncheckedUpdateWithoutEventInput>;
};
export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutEventInput>;
};
export type TransactionCreateWithoutTicketInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutTicketInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutTicketInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
};
export type TransactionUpsertWithoutTicketInput = {
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutTicketInput, Prisma.TransactionUncheckedUpdateWithoutTicketInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutTicketInput, Prisma.TransactionUncheckedCreateWithoutTicketInput>;
    where?: Prisma.TransactionWhereInput;
};
export type TransactionUpdateToOneWithWhereWithoutTicketInput = {
    where?: Prisma.TransactionWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutTicketInput, Prisma.TransactionUncheckedUpdateWithoutTicketInput>;
};
export type TransactionUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionCreateWithoutStatusHistoryInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    payoutTransactions?: Prisma.PayoutTransactionCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutStatusHistoryInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutStatusHistoryInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutStatusHistoryInput, Prisma.TransactionUncheckedCreateWithoutStatusHistoryInput>;
};
export type TransactionUpsertWithoutStatusHistoryInput = {
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutStatusHistoryInput, Prisma.TransactionUncheckedUpdateWithoutStatusHistoryInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutStatusHistoryInput, Prisma.TransactionUncheckedCreateWithoutStatusHistoryInput>;
    where?: Prisma.TransactionWhereInput;
};
export type TransactionUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: Prisma.TransactionWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutStatusHistoryInput, Prisma.TransactionUncheckedUpdateWithoutStatusHistoryInput>;
};
export type TransactionUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionCreateWithoutPayoutTransactionsInput = {
    id?: string;
    idempotencyKey: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutTransactionsInput;
    organizer: Prisma.UserCreateNestedOneWithoutOrganizerTransactionsInput;
    buyer: Prisma.UserCreateNestedOneWithoutBuyerTransactionsInput;
    ticket: Prisma.TicketCreateNestedOneWithoutTransactionInput;
    statusHistory?: Prisma.TransactionStatusHistoryCreateNestedManyWithoutTransactionInput;
};
export type TransactionUncheckedCreateWithoutPayoutTransactionsInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedCreateNestedManyWithoutTransactionInput;
};
export type TransactionCreateOrConnectWithoutPayoutTransactionsInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedCreateWithoutPayoutTransactionsInput>;
};
export type TransactionUpsertWithoutPayoutTransactionsInput = {
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedUpdateWithoutPayoutTransactionsInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedCreateWithoutPayoutTransactionsInput>;
    where?: Prisma.TransactionWhereInput;
};
export type TransactionUpdateToOneWithWhereWithoutPayoutTransactionsInput = {
    where?: Prisma.TransactionWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutPayoutTransactionsInput, Prisma.TransactionUncheckedUpdateWithoutPayoutTransactionsInput>;
};
export type TransactionUpdateWithoutPayoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutPayoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionCreateManyOrganizerInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type TransactionCreateManyBuyerInput = {
    id?: string;
    idempotencyKey: string;
    eventId: string;
    organizerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type TransactionUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutTransactionsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateManyWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionCreateManyEventInput = {
    id?: string;
    idempotencyKey: string;
    organizerId: string;
    buyerId: string;
    ticketId: string;
    montantTTC: number;
    montantHT: number;
    tva: number;
    commission: number;
    netOrganisateur: number;
    devise?: string;
    tauxTVA: number;
    tauxCommission: number;
    status?: $Enums.TransactionStatus;
    paymentMethod?: string | null;
    paymentProviderTransactionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: number | null;
    refundReason?: string | null;
    checksum: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type TransactionUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizer?: Prisma.UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput;
    ticket?: Prisma.TicketUpdateOneRequiredWithoutTransactionNestedInput;
    statusHistory?: Prisma.TransactionStatusHistoryUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statusHistory?: Prisma.TransactionStatusHistoryUncheckedUpdateManyWithoutTransactionNestedInput;
    payoutTransactions?: Prisma.PayoutTransactionUncheckedUpdateManyWithoutTransactionNestedInput;
};
export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    montantTTC?: Prisma.IntFieldUpdateOperationsInput | number;
    montantHT?: Prisma.IntFieldUpdateOperationsInput | number;
    tva?: Prisma.IntFieldUpdateOperationsInput | number;
    commission?: Prisma.IntFieldUpdateOperationsInput | number;
    netOrganisateur?: Prisma.IntFieldUpdateOperationsInput | number;
    devise?: Prisma.StringFieldUpdateOperationsInput | string;
    tauxTVA?: Prisma.IntFieldUpdateOperationsInput | number;
    tauxCommission?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentProviderTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    refundAmount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type TransactionCountOutputType
 */
export type TransactionCountOutputType = {
    statusHistory: number;
    payoutTransactions: number;
};
export type TransactionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statusHistory?: boolean | TransactionCountOutputTypeCountStatusHistoryArgs;
    payoutTransactions?: boolean | TransactionCountOutputTypeCountPayoutTransactionsArgs;
};
/**
 * TransactionCountOutputType without action
 */
export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: Prisma.TransactionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TransactionCountOutputType without action
 */
export type TransactionCountOutputTypeCountStatusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionStatusHistoryWhereInput;
};
/**
 * TransactionCountOutputType without action
 */
export type TransactionCountOutputTypeCountPayoutTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutTransactionWhereInput;
};
export type TransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    buyerId?: boolean;
    ticketId?: boolean;
    montantTTC?: boolean;
    montantHT?: boolean;
    tva?: boolean;
    commission?: boolean;
    netOrganisateur?: boolean;
    devise?: boolean;
    tauxTVA?: boolean;
    tauxCommission?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paymentProviderTransactionId?: boolean;
    metadata?: boolean;
    refundAmount?: boolean;
    refundReason?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    completedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Transaction$statusHistoryArgs<ExtArgs>;
    payoutTransactions?: boolean | Prisma.Transaction$payoutTransactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransactionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    buyerId?: boolean;
    ticketId?: boolean;
    montantTTC?: boolean;
    montantHT?: boolean;
    tva?: boolean;
    commission?: boolean;
    netOrganisateur?: boolean;
    devise?: boolean;
    tauxTVA?: boolean;
    tauxCommission?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paymentProviderTransactionId?: boolean;
    metadata?: boolean;
    refundAmount?: boolean;
    refundReason?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    completedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    buyerId?: boolean;
    ticketId?: boolean;
    montantTTC?: boolean;
    montantHT?: boolean;
    tva?: boolean;
    commission?: boolean;
    netOrganisateur?: boolean;
    devise?: boolean;
    tauxTVA?: boolean;
    tauxCommission?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paymentProviderTransactionId?: boolean;
    metadata?: boolean;
    refundAmount?: boolean;
    refundReason?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    completedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectScalar = {
    id?: boolean;
    idempotencyKey?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    buyerId?: boolean;
    ticketId?: boolean;
    montantTTC?: boolean;
    montantHT?: boolean;
    tva?: boolean;
    commission?: boolean;
    netOrganisateur?: boolean;
    devise?: boolean;
    tauxTVA?: boolean;
    tauxCommission?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paymentProviderTransactionId?: boolean;
    metadata?: boolean;
    refundAmount?: boolean;
    refundReason?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    completedAt?: boolean;
};
export type TransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "idempotencyKey" | "eventId" | "organizerId" | "buyerId" | "ticketId" | "montantTTC" | "montantHT" | "tva" | "commission" | "netOrganisateur" | "devise" | "tauxTVA" | "tauxCommission" | "status" | "paymentMethod" | "paymentProviderTransactionId" | "metadata" | "refundAmount" | "refundReason" | "checksum" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["transaction"]>;
export type TransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Transaction$statusHistoryArgs<ExtArgs>;
    payoutTransactions?: boolean | Prisma.Transaction$payoutTransactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransactionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
};
export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.TicketDefaultArgs<ExtArgs>;
};
export type $TransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaction";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        organizer: Prisma.$UserPayload<ExtArgs>;
        buyer: Prisma.$UserPayload<ExtArgs>;
        ticket: Prisma.$TicketPayload<ExtArgs>;
        statusHistory: Prisma.$TransactionStatusHistoryPayload<ExtArgs>[];
        payoutTransactions: Prisma.$PayoutTransactionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        idempotencyKey: string;
        eventId: string;
        organizerId: string;
        buyerId: string;
        ticketId: string;
        montantTTC: number;
        montantHT: number;
        tva: number;
        commission: number;
        netOrganisateur: number;
        devise: string;
        tauxTVA: number;
        tauxCommission: number;
        status: $Enums.TransactionStatus;
        paymentMethod: string | null;
        paymentProviderTransactionId: string | null;
        metadata: runtime.JsonValue | null;
        refundAmount: number | null;
        refundReason: string | null;
        checksum: string;
        createdAt: Date;
        updatedAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionPayload, S>;
export type TransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface TransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
        meta: {
            name: 'Transaction';
        };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends TransactionCreateArgs>(args: Prisma.SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends TransactionDeleteArgs>(args: Prisma.SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionUpdateArgs>(args: Prisma.SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: Prisma.SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(args?: Prisma.Subset<T, TransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transaction model
     */
    readonly fields: TransactionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Transaction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organizer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    buyer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ticket<T extends Prisma.TicketDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TicketDefaultArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statusHistory<T extends Prisma.Transaction$statusHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payoutTransactions<T extends Prisma.Transaction$payoutTransactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$payoutTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Transaction model
 */
export interface TransactionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaction", 'String'>;
    readonly idempotencyKey: Prisma.FieldRef<"Transaction", 'String'>;
    readonly eventId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly organizerId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly buyerId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly ticketId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly montantTTC: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly montantHT: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly tva: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly commission: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly netOrganisateur: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly devise: Prisma.FieldRef<"Transaction", 'String'>;
    readonly tauxTVA: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly tauxCommission: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly status: Prisma.FieldRef<"Transaction", 'TransactionStatus'>;
    readonly paymentMethod: Prisma.FieldRef<"Transaction", 'String'>;
    readonly paymentProviderTransactionId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly metadata: Prisma.FieldRef<"Transaction", 'Json'>;
    readonly refundAmount: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly refundReason: Prisma.FieldRef<"Transaction", 'String'>;
    readonly checksum: Prisma.FieldRef<"Transaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
}
/**
 * Transaction findUnique
 */
export type TransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction findUniqueOrThrow
 */
export type TransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction findFirst
 */
export type TransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction findFirstOrThrow
 */
export type TransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction findMany
 */
export type TransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction create
 */
export type TransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
};
/**
 * Transaction createMany
 */
export type TransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Transaction createManyAndReturn
 */
export type TransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Transactions.
     */
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Transaction update
 */
export type TransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction updateMany
 */
export type TransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
};
/**
 * Transaction updateManyAndReturn
 */
export type TransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * The data used to update Transactions.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Transaction upsert
 */
export type TransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: Prisma.TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
};
/**
 * Transaction delete
 */
export type TransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction deleteMany
 */
export type TransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number;
};
/**
 * Transaction.statusHistory
 */
export type Transaction$statusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionStatusHistory
     */
    select?: Prisma.TransactionStatusHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionStatusHistory
     */
    omit?: Prisma.TransactionStatusHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.TransactionStatusHistoryWhereInput;
    orderBy?: Prisma.TransactionStatusHistoryOrderByWithRelationInput | Prisma.TransactionStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.TransactionStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionStatusHistoryScalarFieldEnum | Prisma.TransactionStatusHistoryScalarFieldEnum[];
};
/**
 * Transaction.payoutTransactions
 */
export type Transaction$payoutTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Transaction without action
 */
export type TransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Transaction.d.ts.map