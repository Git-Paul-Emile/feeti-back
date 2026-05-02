import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AccessBadge
 *
 */
export type AccessBadgeModel = runtime.Types.Result.DefaultSelection<Prisma.$AccessBadgePayload>;
export type AggregateAccessBadge = {
    _count: AccessBadgeCountAggregateOutputType | null;
    _min: AccessBadgeMinAggregateOutputType | null;
    _max: AccessBadgeMaxAggregateOutputType | null;
};
export type AccessBadgeMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    ticketId: string | null;
    categoryId: string | null;
    holderName: string | null;
    holderEmail: string | null;
    qrCode: string | null;
    qrSecret: string | null;
    status: $Enums.BadgeStatus | null;
    sentAt: Date | null;
    revokedAt: Date | null;
    revokedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AccessBadgeMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    ticketId: string | null;
    categoryId: string | null;
    holderName: string | null;
    holderEmail: string | null;
    qrCode: string | null;
    qrSecret: string | null;
    status: $Enums.BadgeStatus | null;
    sentAt: Date | null;
    revokedAt: Date | null;
    revokedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AccessBadgeCountAggregateOutputType = {
    id: number;
    eventId: number;
    ticketId: number;
    categoryId: number;
    holderName: number;
    holderEmail: number;
    qrCode: number;
    qrSecret: number;
    status: number;
    sentAt: number;
    revokedAt: number;
    revokedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AccessBadgeMinAggregateInputType = {
    id?: true;
    eventId?: true;
    ticketId?: true;
    categoryId?: true;
    holderName?: true;
    holderEmail?: true;
    qrCode?: true;
    qrSecret?: true;
    status?: true;
    sentAt?: true;
    revokedAt?: true;
    revokedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AccessBadgeMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    ticketId?: true;
    categoryId?: true;
    holderName?: true;
    holderEmail?: true;
    qrCode?: true;
    qrSecret?: true;
    status?: true;
    sentAt?: true;
    revokedAt?: true;
    revokedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AccessBadgeCountAggregateInputType = {
    id?: true;
    eventId?: true;
    ticketId?: true;
    categoryId?: true;
    holderName?: true;
    holderEmail?: true;
    qrCode?: true;
    qrSecret?: true;
    status?: true;
    sentAt?: true;
    revokedAt?: true;
    revokedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AccessBadgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AccessBadge to aggregate.
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessBadges to fetch.
     */
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AccessBadges
    **/
    _count?: true | AccessBadgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AccessBadgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AccessBadgeMaxAggregateInputType;
};
export type GetAccessBadgeAggregateType<T extends AccessBadgeAggregateArgs> = {
    [P in keyof T & keyof AggregateAccessBadge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccessBadge[P]> : Prisma.GetScalarType<T[P], AggregateAccessBadge[P]>;
};
export type AccessBadgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessBadgeWhereInput;
    orderBy?: Prisma.AccessBadgeOrderByWithAggregationInput | Prisma.AccessBadgeOrderByWithAggregationInput[];
    by: Prisma.AccessBadgeScalarFieldEnum[] | Prisma.AccessBadgeScalarFieldEnum;
    having?: Prisma.AccessBadgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccessBadgeCountAggregateInputType | true;
    _min?: AccessBadgeMinAggregateInputType;
    _max?: AccessBadgeMaxAggregateInputType;
};
export type AccessBadgeGroupByOutputType = {
    id: string;
    eventId: string;
    ticketId: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status: $Enums.BadgeStatus;
    sentAt: Date | null;
    revokedAt: Date | null;
    revokedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccessBadgeCountAggregateOutputType | null;
    _min: AccessBadgeMinAggregateOutputType | null;
    _max: AccessBadgeMaxAggregateOutputType | null;
};
type GetAccessBadgeGroupByPayload<T extends AccessBadgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccessBadgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccessBadgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccessBadgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccessBadgeGroupByOutputType[P]>;
}>>;
export type AccessBadgeWhereInput = {
    AND?: Prisma.AccessBadgeWhereInput | Prisma.AccessBadgeWhereInput[];
    OR?: Prisma.AccessBadgeWhereInput[];
    NOT?: Prisma.AccessBadgeWhereInput | Prisma.AccessBadgeWhereInput[];
    id?: Prisma.StringFilter<"AccessBadge"> | string;
    eventId?: Prisma.StringFilter<"AccessBadge"> | string;
    ticketId?: Prisma.StringNullableFilter<"AccessBadge"> | string | null;
    categoryId?: Prisma.StringFilter<"AccessBadge"> | string;
    holderName?: Prisma.StringFilter<"AccessBadge"> | string;
    holderEmail?: Prisma.StringFilter<"AccessBadge"> | string;
    qrCode?: Prisma.StringFilter<"AccessBadge"> | string;
    qrSecret?: Prisma.StringFilter<"AccessBadge"> | string;
    status?: Prisma.EnumBadgeStatusFilter<"AccessBadge"> | $Enums.BadgeStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedById?: Prisma.StringNullableFilter<"AccessBadge"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticket?: Prisma.XOR<Prisma.TicketNullableScalarRelationFilter, Prisma.TicketWhereInput> | null;
    category?: Prisma.XOR<Prisma.ParticipantCategoryScalarRelationFilter, Prisma.ParticipantCategoryWhereInput>;
    accessLogs?: Prisma.AccessLogListRelationFilter;
    suspectReports?: Prisma.SuspectBadgeReportListRelationFilter;
};
export type AccessBadgeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    qrSecret?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    ticket?: Prisma.TicketOrderByWithRelationInput;
    category?: Prisma.ParticipantCategoryOrderByWithRelationInput;
    accessLogs?: Prisma.AccessLogOrderByRelationAggregateInput;
    suspectReports?: Prisma.SuspectBadgeReportOrderByRelationAggregateInput;
};
export type AccessBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ticketId?: string;
    qrCode?: string;
    AND?: Prisma.AccessBadgeWhereInput | Prisma.AccessBadgeWhereInput[];
    OR?: Prisma.AccessBadgeWhereInput[];
    NOT?: Prisma.AccessBadgeWhereInput | Prisma.AccessBadgeWhereInput[];
    eventId?: Prisma.StringFilter<"AccessBadge"> | string;
    categoryId?: Prisma.StringFilter<"AccessBadge"> | string;
    holderName?: Prisma.StringFilter<"AccessBadge"> | string;
    holderEmail?: Prisma.StringFilter<"AccessBadge"> | string;
    qrSecret?: Prisma.StringFilter<"AccessBadge"> | string;
    status?: Prisma.EnumBadgeStatusFilter<"AccessBadge"> | $Enums.BadgeStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedById?: Prisma.StringNullableFilter<"AccessBadge"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticket?: Prisma.XOR<Prisma.TicketNullableScalarRelationFilter, Prisma.TicketWhereInput> | null;
    category?: Prisma.XOR<Prisma.ParticipantCategoryScalarRelationFilter, Prisma.ParticipantCategoryWhereInput>;
    accessLogs?: Prisma.AccessLogListRelationFilter;
    suspectReports?: Prisma.SuspectBadgeReportListRelationFilter;
}, "id" | "ticketId" | "qrCode">;
export type AccessBadgeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    qrSecret?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AccessBadgeCountOrderByAggregateInput;
    _max?: Prisma.AccessBadgeMaxOrderByAggregateInput;
    _min?: Prisma.AccessBadgeMinOrderByAggregateInput;
};
export type AccessBadgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccessBadgeScalarWhereWithAggregatesInput | Prisma.AccessBadgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccessBadgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccessBadgeScalarWhereWithAggregatesInput | Prisma.AccessBadgeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    ticketId?: Prisma.StringNullableWithAggregatesFilter<"AccessBadge"> | string | null;
    categoryId?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    holderName?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    holderEmail?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    qrCode?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    qrSecret?: Prisma.StringWithAggregatesFilter<"AccessBadge"> | string;
    status?: Prisma.EnumBadgeStatusWithAggregatesFilter<"AccessBadge"> | $Enums.BadgeStatus;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AccessBadge"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AccessBadge"> | Date | string | null;
    revokedById?: Prisma.StringNullableWithAggregatesFilter<"AccessBadge"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AccessBadge"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AccessBadge"> | Date | string;
};
export type AccessBadgeCreateInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutAccessBadgesInput;
    ticket?: Prisma.TicketCreateNestedOneWithoutAccessBadgeInput;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutBadgesInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutAccessBadgesNestedInput;
    ticket?: Prisma.TicketUpdateOneWithoutAccessBadgeNestedInput;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeCreateManyInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessBadgeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessBadgeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessBadgeListRelationFilter = {
    every?: Prisma.AccessBadgeWhereInput;
    some?: Prisma.AccessBadgeWhereInput;
    none?: Prisma.AccessBadgeWhereInput;
};
export type AccessBadgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccessBadgeNullableScalarRelationFilter = {
    is?: Prisma.AccessBadgeWhereInput | null;
    isNot?: Prisma.AccessBadgeWhereInput | null;
};
export type AccessBadgeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    qrSecret?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessBadgeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    qrSecret?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessBadgeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    qrCode?: Prisma.SortOrder;
    qrSecret?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessBadgeScalarRelationFilter = {
    is?: Prisma.AccessBadgeWhereInput;
    isNot?: Prisma.AccessBadgeWhereInput;
};
export type AccessBadgeCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput> | Prisma.AccessBadgeCreateWithoutEventInput[] | Prisma.AccessBadgeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutEventInput | Prisma.AccessBadgeCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.AccessBadgeCreateManyEventInputEnvelope;
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
};
export type AccessBadgeUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput> | Prisma.AccessBadgeCreateWithoutEventInput[] | Prisma.AccessBadgeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutEventInput | Prisma.AccessBadgeCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.AccessBadgeCreateManyEventInputEnvelope;
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
};
export type AccessBadgeUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput> | Prisma.AccessBadgeCreateWithoutEventInput[] | Prisma.AccessBadgeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutEventInput | Prisma.AccessBadgeCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.AccessBadgeUpsertWithWhereUniqueWithoutEventInput | Prisma.AccessBadgeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.AccessBadgeCreateManyEventInputEnvelope;
    set?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    disconnect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    delete?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    update?: Prisma.AccessBadgeUpdateWithWhereUniqueWithoutEventInput | Prisma.AccessBadgeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.AccessBadgeUpdateManyWithWhereWithoutEventInput | Prisma.AccessBadgeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
};
export type AccessBadgeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput> | Prisma.AccessBadgeCreateWithoutEventInput[] | Prisma.AccessBadgeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutEventInput | Prisma.AccessBadgeCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.AccessBadgeUpsertWithWhereUniqueWithoutEventInput | Prisma.AccessBadgeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.AccessBadgeCreateManyEventInputEnvelope;
    set?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    disconnect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    delete?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    update?: Prisma.AccessBadgeUpdateWithWhereUniqueWithoutEventInput | Prisma.AccessBadgeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.AccessBadgeUpdateManyWithWhereWithoutEventInput | Prisma.AccessBadgeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
};
export type AccessBadgeCreateNestedOneWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutTicketInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
};
export type AccessBadgeUncheckedCreateNestedOneWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutTicketInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
};
export type AccessBadgeUpdateOneWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutTicketInput;
    upsert?: Prisma.AccessBadgeUpsertWithoutTicketInput;
    disconnect?: Prisma.AccessBadgeWhereInput | boolean;
    delete?: Prisma.AccessBadgeWhereInput | boolean;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccessBadgeUpdateToOneWithWhereWithoutTicketInput, Prisma.AccessBadgeUpdateWithoutTicketInput>, Prisma.AccessBadgeUncheckedUpdateWithoutTicketInput>;
};
export type AccessBadgeUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutTicketInput;
    upsert?: Prisma.AccessBadgeUpsertWithoutTicketInput;
    disconnect?: Prisma.AccessBadgeWhereInput | boolean;
    delete?: Prisma.AccessBadgeWhereInput | boolean;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccessBadgeUpdateToOneWithWhereWithoutTicketInput, Prisma.AccessBadgeUpdateWithoutTicketInput>, Prisma.AccessBadgeUncheckedUpdateWithoutTicketInput>;
};
export type AccessBadgeCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput> | Prisma.AccessBadgeCreateWithoutCategoryInput[] | Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput | Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AccessBadgeCreateManyCategoryInputEnvelope;
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
};
export type AccessBadgeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput> | Prisma.AccessBadgeCreateWithoutCategoryInput[] | Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput | Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AccessBadgeCreateManyCategoryInputEnvelope;
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
};
export type AccessBadgeUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput> | Prisma.AccessBadgeCreateWithoutCategoryInput[] | Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput | Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AccessBadgeUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AccessBadgeUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AccessBadgeCreateManyCategoryInputEnvelope;
    set?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    disconnect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    delete?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    update?: Prisma.AccessBadgeUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AccessBadgeUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AccessBadgeUpdateManyWithWhereWithoutCategoryInput | Prisma.AccessBadgeUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
};
export type AccessBadgeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput> | Prisma.AccessBadgeCreateWithoutCategoryInput[] | Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput | Prisma.AccessBadgeCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AccessBadgeUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AccessBadgeUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AccessBadgeCreateManyCategoryInputEnvelope;
    set?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    disconnect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    delete?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    connect?: Prisma.AccessBadgeWhereUniqueInput | Prisma.AccessBadgeWhereUniqueInput[];
    update?: Prisma.AccessBadgeUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AccessBadgeUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AccessBadgeUpdateManyWithWhereWithoutCategoryInput | Prisma.AccessBadgeUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
};
export type EnumBadgeStatusFieldUpdateOperationsInput = {
    set?: $Enums.BadgeStatus;
};
export type AccessBadgeCreateNestedOneWithoutAccessLogsInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedCreateWithoutAccessLogsInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutAccessLogsInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
};
export type AccessBadgeUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedCreateWithoutAccessLogsInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutAccessLogsInput;
    upsert?: Prisma.AccessBadgeUpsertWithoutAccessLogsInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccessBadgeUpdateToOneWithWhereWithoutAccessLogsInput, Prisma.AccessBadgeUpdateWithoutAccessLogsInput>, Prisma.AccessBadgeUncheckedUpdateWithoutAccessLogsInput>;
};
export type AccessBadgeCreateNestedOneWithoutSuspectReportsInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedCreateWithoutSuspectReportsInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutSuspectReportsInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
};
export type AccessBadgeUpdateOneRequiredWithoutSuspectReportsNestedInput = {
    create?: Prisma.XOR<Prisma.AccessBadgeCreateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedCreateWithoutSuspectReportsInput>;
    connectOrCreate?: Prisma.AccessBadgeCreateOrConnectWithoutSuspectReportsInput;
    upsert?: Prisma.AccessBadgeUpsertWithoutSuspectReportsInput;
    connect?: Prisma.AccessBadgeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccessBadgeUpdateToOneWithWhereWithoutSuspectReportsInput, Prisma.AccessBadgeUpdateWithoutSuspectReportsInput>, Prisma.AccessBadgeUncheckedUpdateWithoutSuspectReportsInput>;
};
export type AccessBadgeCreateWithoutEventInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ticket?: Prisma.TicketCreateNestedOneWithoutAccessBadgeInput;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutBadgesInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateWithoutEventInput = {
    id?: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeCreateOrConnectWithoutEventInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput>;
};
export type AccessBadgeCreateManyEventInputEnvelope = {
    data: Prisma.AccessBadgeCreateManyEventInput | Prisma.AccessBadgeCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type AccessBadgeUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutEventInput, Prisma.AccessBadgeUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutEventInput, Prisma.AccessBadgeUncheckedCreateWithoutEventInput>;
};
export type AccessBadgeUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutEventInput, Prisma.AccessBadgeUncheckedUpdateWithoutEventInput>;
};
export type AccessBadgeUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.AccessBadgeScalarWhereInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateManyMutationInput, Prisma.AccessBadgeUncheckedUpdateManyWithoutEventInput>;
};
export type AccessBadgeScalarWhereInput = {
    AND?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
    OR?: Prisma.AccessBadgeScalarWhereInput[];
    NOT?: Prisma.AccessBadgeScalarWhereInput | Prisma.AccessBadgeScalarWhereInput[];
    id?: Prisma.StringFilter<"AccessBadge"> | string;
    eventId?: Prisma.StringFilter<"AccessBadge"> | string;
    ticketId?: Prisma.StringNullableFilter<"AccessBadge"> | string | null;
    categoryId?: Prisma.StringFilter<"AccessBadge"> | string;
    holderName?: Prisma.StringFilter<"AccessBadge"> | string;
    holderEmail?: Prisma.StringFilter<"AccessBadge"> | string;
    qrCode?: Prisma.StringFilter<"AccessBadge"> | string;
    qrSecret?: Prisma.StringFilter<"AccessBadge"> | string;
    status?: Prisma.EnumBadgeStatusFilter<"AccessBadge"> | $Enums.BadgeStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"AccessBadge"> | Date | string | null;
    revokedById?: Prisma.StringNullableFilter<"AccessBadge"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AccessBadge"> | Date | string;
};
export type AccessBadgeCreateWithoutTicketInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutAccessBadgesInput;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutBadgesInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateWithoutTicketInput = {
    id?: string;
    eventId: string;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeCreateOrConnectWithoutTicketInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
};
export type AccessBadgeUpsertWithoutTicketInput = {
    update: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutTicketInput, Prisma.AccessBadgeUncheckedUpdateWithoutTicketInput>;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutTicketInput, Prisma.AccessBadgeUncheckedCreateWithoutTicketInput>;
    where?: Prisma.AccessBadgeWhereInput;
};
export type AccessBadgeUpdateToOneWithWhereWithoutTicketInput = {
    where?: Prisma.AccessBadgeWhereInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutTicketInput, Prisma.AccessBadgeUncheckedUpdateWithoutTicketInput>;
};
export type AccessBadgeUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutAccessBadgesNestedInput;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeCreateWithoutCategoryInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutAccessBadgesInput;
    ticket?: Prisma.TicketCreateNestedOneWithoutAccessBadgeInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateWithoutCategoryInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutBadgeInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeCreateOrConnectWithoutCategoryInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput>;
};
export type AccessBadgeCreateManyCategoryInputEnvelope = {
    data: Prisma.AccessBadgeCreateManyCategoryInput | Prisma.AccessBadgeCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type AccessBadgeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutCategoryInput, Prisma.AccessBadgeUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutCategoryInput, Prisma.AccessBadgeUncheckedCreateWithoutCategoryInput>;
};
export type AccessBadgeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutCategoryInput, Prisma.AccessBadgeUncheckedUpdateWithoutCategoryInput>;
};
export type AccessBadgeUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.AccessBadgeScalarWhereInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateManyMutationInput, Prisma.AccessBadgeUncheckedUpdateManyWithoutCategoryInput>;
};
export type AccessBadgeCreateWithoutAccessLogsInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutAccessBadgesInput;
    ticket?: Prisma.TicketCreateNestedOneWithoutAccessBadgeInput;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutBadgesInput;
    suspectReports?: Prisma.SuspectBadgeReportCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateWithoutAccessLogsInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeCreateOrConnectWithoutAccessLogsInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedCreateWithoutAccessLogsInput>;
};
export type AccessBadgeUpsertWithoutAccessLogsInput = {
    update: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedUpdateWithoutAccessLogsInput>;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedCreateWithoutAccessLogsInput>;
    where?: Prisma.AccessBadgeWhereInput;
};
export type AccessBadgeUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: Prisma.AccessBadgeWhereInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutAccessLogsInput, Prisma.AccessBadgeUncheckedUpdateWithoutAccessLogsInput>;
};
export type AccessBadgeUpdateWithoutAccessLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutAccessBadgesNestedInput;
    ticket?: Prisma.TicketUpdateOneWithoutAccessBadgeNestedInput;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateWithoutAccessLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeCreateWithoutSuspectReportsInput = {
    id?: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutAccessBadgesInput;
    ticket?: Prisma.TicketCreateNestedOneWithoutAccessBadgeInput;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutBadgesInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeUncheckedCreateWithoutSuspectReportsInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutBadgeInput;
};
export type AccessBadgeCreateOrConnectWithoutSuspectReportsInput = {
    where: Prisma.AccessBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedCreateWithoutSuspectReportsInput>;
};
export type AccessBadgeUpsertWithoutSuspectReportsInput = {
    update: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedUpdateWithoutSuspectReportsInput>;
    create: Prisma.XOR<Prisma.AccessBadgeCreateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedCreateWithoutSuspectReportsInput>;
    where?: Prisma.AccessBadgeWhereInput;
};
export type AccessBadgeUpdateToOneWithWhereWithoutSuspectReportsInput = {
    where?: Prisma.AccessBadgeWhereInput;
    data: Prisma.XOR<Prisma.AccessBadgeUpdateWithoutSuspectReportsInput, Prisma.AccessBadgeUncheckedUpdateWithoutSuspectReportsInput>;
};
export type AccessBadgeUpdateWithoutSuspectReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutAccessBadgesNestedInput;
    ticket?: Prisma.TicketUpdateOneWithoutAccessBadgeNestedInput;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateWithoutSuspectReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeCreateManyEventInput = {
    id?: string;
    ticketId?: string | null;
    categoryId: string;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessBadgeUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: Prisma.TicketUpdateOneWithoutAccessBadgeNestedInput;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessBadgeCreateManyCategoryInput = {
    id?: string;
    eventId: string;
    ticketId?: string | null;
    holderName: string;
    holderEmail: string;
    qrCode: string;
    qrSecret: string;
    status?: $Enums.BadgeStatus;
    sentAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessBadgeUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutAccessBadgesNestedInput;
    ticket?: Prisma.TicketUpdateOneWithoutAccessBadgeNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutBadgeNestedInput;
    suspectReports?: Prisma.SuspectBadgeReportUncheckedUpdateManyWithoutBadgeNestedInput;
};
export type AccessBadgeUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    qrCode?: Prisma.StringFieldUpdateOperationsInput | string;
    qrSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBadgeStatusFieldUpdateOperationsInput | $Enums.BadgeStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AccessBadgeCountOutputType
 */
export type AccessBadgeCountOutputType = {
    accessLogs: number;
    suspectReports: number;
};
export type AccessBadgeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accessLogs?: boolean | AccessBadgeCountOutputTypeCountAccessLogsArgs;
    suspectReports?: boolean | AccessBadgeCountOutputTypeCountSuspectReportsArgs;
};
/**
 * AccessBadgeCountOutputType without action
 */
export type AccessBadgeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadgeCountOutputType
     */
    select?: Prisma.AccessBadgeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AccessBadgeCountOutputType without action
 */
export type AccessBadgeCountOutputTypeCountAccessLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessLogWhereInput;
};
/**
 * AccessBadgeCountOutputType without action
 */
export type AccessBadgeCountOutputTypeCountSuspectReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuspectBadgeReportWhereInput;
};
export type AccessBadgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    ticketId?: boolean;
    categoryId?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    qrCode?: boolean;
    qrSecret?: boolean;
    status?: boolean;
    sentAt?: boolean;
    revokedAt?: boolean;
    revokedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    accessLogs?: boolean | Prisma.AccessBadge$accessLogsArgs<ExtArgs>;
    suspectReports?: boolean | Prisma.AccessBadge$suspectReportsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccessBadgeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessBadge"]>;
export type AccessBadgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    ticketId?: boolean;
    categoryId?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    qrCode?: boolean;
    qrSecret?: boolean;
    status?: boolean;
    sentAt?: boolean;
    revokedAt?: boolean;
    revokedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessBadge"]>;
export type AccessBadgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    ticketId?: boolean;
    categoryId?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    qrCode?: boolean;
    qrSecret?: boolean;
    status?: boolean;
    sentAt?: boolean;
    revokedAt?: boolean;
    revokedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessBadge"]>;
export type AccessBadgeSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    ticketId?: boolean;
    categoryId?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    qrCode?: boolean;
    qrSecret?: boolean;
    status?: boolean;
    sentAt?: boolean;
    revokedAt?: boolean;
    revokedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AccessBadgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "ticketId" | "categoryId" | "holderName" | "holderEmail" | "qrCode" | "qrSecret" | "status" | "sentAt" | "revokedAt" | "revokedById" | "createdAt" | "updatedAt", ExtArgs["result"]["accessBadge"]>;
export type AccessBadgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    accessLogs?: boolean | Prisma.AccessBadge$accessLogsArgs<ExtArgs>;
    suspectReports?: boolean | Prisma.AccessBadge$suspectReportsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccessBadgeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AccessBadgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
};
export type AccessBadgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticket?: boolean | Prisma.AccessBadge$ticketArgs<ExtArgs>;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
};
export type $AccessBadgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AccessBadge";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        ticket: Prisma.$TicketPayload<ExtArgs> | null;
        category: Prisma.$ParticipantCategoryPayload<ExtArgs>;
        accessLogs: Prisma.$AccessLogPayload<ExtArgs>[];
        suspectReports: Prisma.$SuspectBadgeReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        ticketId: string | null;
        categoryId: string;
        holderName: string;
        holderEmail: string;
        qrCode: string;
        qrSecret: string;
        status: $Enums.BadgeStatus;
        sentAt: Date | null;
        revokedAt: Date | null;
        revokedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["accessBadge"]>;
    composites: {};
};
export type AccessBadgeGetPayload<S extends boolean | null | undefined | AccessBadgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload, S>;
export type AccessBadgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccessBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccessBadgeCountAggregateInputType | true;
};
export interface AccessBadgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AccessBadge'];
        meta: {
            name: 'AccessBadge';
        };
    };
    /**
     * Find zero or one AccessBadge that matches the filter.
     * @param {AccessBadgeFindUniqueArgs} args - Arguments to find a AccessBadge
     * @example
     * // Get one AccessBadge
     * const accessBadge = await prisma.accessBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessBadgeFindUniqueArgs>(args: Prisma.SelectSubset<T, AccessBadgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AccessBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessBadgeFindUniqueOrThrowArgs} args - Arguments to find a AccessBadge
     * @example
     * // Get one AccessBadge
     * const accessBadge = await prisma.accessBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessBadgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccessBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AccessBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeFindFirstArgs} args - Arguments to find a AccessBadge
     * @example
     * // Get one AccessBadge
     * const accessBadge = await prisma.accessBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessBadgeFindFirstArgs>(args?: Prisma.SelectSubset<T, AccessBadgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AccessBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeFindFirstOrThrowArgs} args - Arguments to find a AccessBadge
     * @example
     * // Get one AccessBadge
     * const accessBadge = await prisma.accessBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessBadgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccessBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AccessBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessBadges
     * const accessBadges = await prisma.accessBadge.findMany()
     *
     * // Get first 10 AccessBadges
     * const accessBadges = await prisma.accessBadge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accessBadgeWithIdOnly = await prisma.accessBadge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccessBadgeFindManyArgs>(args?: Prisma.SelectSubset<T, AccessBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AccessBadge.
     * @param {AccessBadgeCreateArgs} args - Arguments to create a AccessBadge.
     * @example
     * // Create one AccessBadge
     * const AccessBadge = await prisma.accessBadge.create({
     *   data: {
     *     // ... data to create a AccessBadge
     *   }
     * })
     *
     */
    create<T extends AccessBadgeCreateArgs>(args: Prisma.SelectSubset<T, AccessBadgeCreateArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AccessBadges.
     * @param {AccessBadgeCreateManyArgs} args - Arguments to create many AccessBadges.
     * @example
     * // Create many AccessBadges
     * const accessBadge = await prisma.accessBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccessBadgeCreateManyArgs>(args?: Prisma.SelectSubset<T, AccessBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AccessBadges and returns the data saved in the database.
     * @param {AccessBadgeCreateManyAndReturnArgs} args - Arguments to create many AccessBadges.
     * @example
     * // Create many AccessBadges
     * const accessBadge = await prisma.accessBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AccessBadges and only return the `id`
     * const accessBadgeWithIdOnly = await prisma.accessBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccessBadgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccessBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AccessBadge.
     * @param {AccessBadgeDeleteArgs} args - Arguments to delete one AccessBadge.
     * @example
     * // Delete one AccessBadge
     * const AccessBadge = await prisma.accessBadge.delete({
     *   where: {
     *     // ... filter to delete one AccessBadge
     *   }
     * })
     *
     */
    delete<T extends AccessBadgeDeleteArgs>(args: Prisma.SelectSubset<T, AccessBadgeDeleteArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AccessBadge.
     * @param {AccessBadgeUpdateArgs} args - Arguments to update one AccessBadge.
     * @example
     * // Update one AccessBadge
     * const accessBadge = await prisma.accessBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccessBadgeUpdateArgs>(args: Prisma.SelectSubset<T, AccessBadgeUpdateArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AccessBadges.
     * @param {AccessBadgeDeleteManyArgs} args - Arguments to filter AccessBadges to delete.
     * @example
     * // Delete a few AccessBadges
     * const { count } = await prisma.accessBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccessBadgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccessBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AccessBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessBadges
     * const accessBadge = await prisma.accessBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccessBadgeUpdateManyArgs>(args: Prisma.SelectSubset<T, AccessBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AccessBadges and returns the data updated in the database.
     * @param {AccessBadgeUpdateManyAndReturnArgs} args - Arguments to update many AccessBadges.
     * @example
     * // Update many AccessBadges
     * const accessBadge = await prisma.accessBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AccessBadges and only return the `id`
     * const accessBadgeWithIdOnly = await prisma.accessBadge.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccessBadgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccessBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AccessBadge.
     * @param {AccessBadgeUpsertArgs} args - Arguments to update or create a AccessBadge.
     * @example
     * // Update or create a AccessBadge
     * const accessBadge = await prisma.accessBadge.upsert({
     *   create: {
     *     // ... data to create a AccessBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessBadge we want to update
     *   }
     * })
     */
    upsert<T extends AccessBadgeUpsertArgs>(args: Prisma.SelectSubset<T, AccessBadgeUpsertArgs<ExtArgs>>): Prisma.Prisma__AccessBadgeClient<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AccessBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeCountArgs} args - Arguments to filter AccessBadges to count.
     * @example
     * // Count the number of AccessBadges
     * const count = await prisma.accessBadge.count({
     *   where: {
     *     // ... the filter for the AccessBadges we want to count
     *   }
     * })
    **/
    count<T extends AccessBadgeCountArgs>(args?: Prisma.Subset<T, AccessBadgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccessBadgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AccessBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessBadgeAggregateArgs>(args: Prisma.Subset<T, AccessBadgeAggregateArgs>): Prisma.PrismaPromise<GetAccessBadgeAggregateType<T>>;
    /**
     * Group by AccessBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessBadgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AccessBadgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccessBadgeGroupByArgs['orderBy'];
    } : {
        orderBy?: AccessBadgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccessBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AccessBadge model
     */
    readonly fields: AccessBadgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AccessBadge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AccessBadgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ticket<T extends Prisma.AccessBadge$ticketArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessBadge$ticketArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.ParticipantCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    accessLogs<T extends Prisma.AccessBadge$accessLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessBadge$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    suspectReports<T extends Prisma.AccessBadge$suspectReportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessBadge$suspectReportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuspectBadgeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AccessBadge model
 */
export interface AccessBadgeFieldRefs {
    readonly id: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly eventId: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly ticketId: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly categoryId: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly holderName: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly holderEmail: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly qrCode: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly qrSecret: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly status: Prisma.FieldRef<"AccessBadge", 'BadgeStatus'>;
    readonly sentAt: Prisma.FieldRef<"AccessBadge", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"AccessBadge", 'DateTime'>;
    readonly revokedById: Prisma.FieldRef<"AccessBadge", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AccessBadge", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AccessBadge", 'DateTime'>;
}
/**
 * AccessBadge findUnique
 */
export type AccessBadgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter, which AccessBadge to fetch.
     */
    where: Prisma.AccessBadgeWhereUniqueInput;
};
/**
 * AccessBadge findUniqueOrThrow
 */
export type AccessBadgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter, which AccessBadge to fetch.
     */
    where: Prisma.AccessBadgeWhereUniqueInput;
};
/**
 * AccessBadge findFirst
 */
export type AccessBadgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter, which AccessBadge to fetch.
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessBadges to fetch.
     */
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccessBadges.
     */
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccessBadges.
     */
    distinct?: Prisma.AccessBadgeScalarFieldEnum | Prisma.AccessBadgeScalarFieldEnum[];
};
/**
 * AccessBadge findFirstOrThrow
 */
export type AccessBadgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter, which AccessBadge to fetch.
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessBadges to fetch.
     */
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccessBadges.
     */
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccessBadges.
     */
    distinct?: Prisma.AccessBadgeScalarFieldEnum | Prisma.AccessBadgeScalarFieldEnum[];
};
/**
 * AccessBadge findMany
 */
export type AccessBadgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter, which AccessBadges to fetch.
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccessBadges to fetch.
     */
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AccessBadges.
     */
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccessBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccessBadges.
     */
    skip?: number;
    distinct?: Prisma.AccessBadgeScalarFieldEnum | Prisma.AccessBadgeScalarFieldEnum[];
};
/**
 * AccessBadge create
 */
export type AccessBadgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * The data needed to create a AccessBadge.
     */
    data: Prisma.XOR<Prisma.AccessBadgeCreateInput, Prisma.AccessBadgeUncheckedCreateInput>;
};
/**
 * AccessBadge createMany
 */
export type AccessBadgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessBadges.
     */
    data: Prisma.AccessBadgeCreateManyInput | Prisma.AccessBadgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AccessBadge createManyAndReturn
 */
export type AccessBadgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * The data used to create many AccessBadges.
     */
    data: Prisma.AccessBadgeCreateManyInput | Prisma.AccessBadgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AccessBadge update
 */
export type AccessBadgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * The data needed to update a AccessBadge.
     */
    data: Prisma.XOR<Prisma.AccessBadgeUpdateInput, Prisma.AccessBadgeUncheckedUpdateInput>;
    /**
     * Choose, which AccessBadge to update.
     */
    where: Prisma.AccessBadgeWhereUniqueInput;
};
/**
 * AccessBadge updateMany
 */
export type AccessBadgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessBadges.
     */
    data: Prisma.XOR<Prisma.AccessBadgeUpdateManyMutationInput, Prisma.AccessBadgeUncheckedUpdateManyInput>;
    /**
     * Filter which AccessBadges to update
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * Limit how many AccessBadges to update.
     */
    limit?: number;
};
/**
 * AccessBadge updateManyAndReturn
 */
export type AccessBadgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * The data used to update AccessBadges.
     */
    data: Prisma.XOR<Prisma.AccessBadgeUpdateManyMutationInput, Prisma.AccessBadgeUncheckedUpdateManyInput>;
    /**
     * Filter which AccessBadges to update
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * Limit how many AccessBadges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AccessBadge upsert
 */
export type AccessBadgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * The filter to search for the AccessBadge to update in case it exists.
     */
    where: Prisma.AccessBadgeWhereUniqueInput;
    /**
     * In case the AccessBadge found by the `where` argument doesn't exist, create a new AccessBadge with this data.
     */
    create: Prisma.XOR<Prisma.AccessBadgeCreateInput, Prisma.AccessBadgeUncheckedCreateInput>;
    /**
     * In case the AccessBadge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AccessBadgeUpdateInput, Prisma.AccessBadgeUncheckedUpdateInput>;
};
/**
 * AccessBadge delete
 */
export type AccessBadgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    /**
     * Filter which AccessBadge to delete.
     */
    where: Prisma.AccessBadgeWhereUniqueInput;
};
/**
 * AccessBadge deleteMany
 */
export type AccessBadgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AccessBadges to delete
     */
    where?: Prisma.AccessBadgeWhereInput;
    /**
     * Limit how many AccessBadges to delete.
     */
    limit?: number;
};
/**
 * AccessBadge.ticket
 */
export type AccessBadge$ticketArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: Prisma.TicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ticket
     */
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
};
/**
 * AccessBadge.accessLogs
 */
export type AccessBadge$accessLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AccessLogWhereInput;
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    cursor?: Prisma.AccessLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessLogScalarFieldEnum | Prisma.AccessLogScalarFieldEnum[];
};
/**
 * AccessBadge.suspectReports
 */
export type AccessBadge$suspectReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SuspectBadgeReportWhereInput;
    orderBy?: Prisma.SuspectBadgeReportOrderByWithRelationInput | Prisma.SuspectBadgeReportOrderByWithRelationInput[];
    cursor?: Prisma.SuspectBadgeReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuspectBadgeReportScalarFieldEnum | Prisma.SuspectBadgeReportScalarFieldEnum[];
};
/**
 * AccessBadge without action
 */
export type AccessBadgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AccessBadge.d.ts.map