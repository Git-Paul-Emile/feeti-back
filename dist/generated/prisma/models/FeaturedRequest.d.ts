import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FeaturedRequest
 *
 */
export type FeaturedRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$FeaturedRequestPayload>;
export type AggregateFeaturedRequest = {
    _count: FeaturedRequestCountAggregateOutputType | null;
    _min: FeaturedRequestMinAggregateOutputType | null;
    _max: FeaturedRequestMaxAggregateOutputType | null;
};
export type FeaturedRequestMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    organizerId: string | null;
    status: $Enums.FeaturedRequestStatus | null;
    message: string | null;
    adminNote: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeaturedRequestMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    organizerId: string | null;
    status: $Enums.FeaturedRequestStatus | null;
    message: string | null;
    adminNote: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeaturedRequestCountAggregateOutputType = {
    id: number;
    eventId: number;
    organizerId: number;
    status: number;
    message: number;
    adminNote: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeaturedRequestMinAggregateInputType = {
    id?: true;
    eventId?: true;
    organizerId?: true;
    status?: true;
    message?: true;
    adminNote?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeaturedRequestMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    organizerId?: true;
    status?: true;
    message?: true;
    adminNote?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeaturedRequestCountAggregateInputType = {
    id?: true;
    eventId?: true;
    organizerId?: true;
    status?: true;
    message?: true;
    adminNote?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeaturedRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedRequest to aggregate.
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeaturedRequests to fetch.
     */
    orderBy?: Prisma.FeaturedRequestOrderByWithRelationInput | Prisma.FeaturedRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FeaturedRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeaturedRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeaturedRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeaturedRequests
    **/
    _count?: true | FeaturedRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedRequestMaxAggregateInputType;
};
export type GetFeaturedRequestAggregateType<T extends FeaturedRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateFeaturedRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeaturedRequest[P]> : Prisma.GetScalarType<T[P], AggregateFeaturedRequest[P]>;
};
export type FeaturedRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeaturedRequestWhereInput;
    orderBy?: Prisma.FeaturedRequestOrderByWithAggregationInput | Prisma.FeaturedRequestOrderByWithAggregationInput[];
    by: Prisma.FeaturedRequestScalarFieldEnum[] | Prisma.FeaturedRequestScalarFieldEnum;
    having?: Prisma.FeaturedRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeaturedRequestCountAggregateInputType | true;
    _min?: FeaturedRequestMinAggregateInputType;
    _max?: FeaturedRequestMaxAggregateInputType;
};
export type FeaturedRequestGroupByOutputType = {
    id: string;
    eventId: string;
    organizerId: string;
    status: $Enums.FeaturedRequestStatus;
    message: string | null;
    adminNote: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FeaturedRequestCountAggregateOutputType | null;
    _min: FeaturedRequestMinAggregateOutputType | null;
    _max: FeaturedRequestMaxAggregateOutputType | null;
};
type GetFeaturedRequestGroupByPayload<T extends FeaturedRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeaturedRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeaturedRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeaturedRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeaturedRequestGroupByOutputType[P]>;
}>>;
export type FeaturedRequestWhereInput = {
    AND?: Prisma.FeaturedRequestWhereInput | Prisma.FeaturedRequestWhereInput[];
    OR?: Prisma.FeaturedRequestWhereInput[];
    NOT?: Prisma.FeaturedRequestWhereInput | Prisma.FeaturedRequestWhereInput[];
    id?: Prisma.StringFilter<"FeaturedRequest"> | string;
    eventId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    organizerId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    status?: Prisma.EnumFeaturedRequestStatusFilter<"FeaturedRequest"> | $Enums.FeaturedRequestStatus;
    message?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    adminNote?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FeaturedRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    organizer?: Prisma.UserOrderByWithRelationInput;
};
export type FeaturedRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FeaturedRequestWhereInput | Prisma.FeaturedRequestWhereInput[];
    OR?: Prisma.FeaturedRequestWhereInput[];
    NOT?: Prisma.FeaturedRequestWhereInput | Prisma.FeaturedRequestWhereInput[];
    eventId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    organizerId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    status?: Prisma.EnumFeaturedRequestStatusFilter<"FeaturedRequest"> | $Enums.FeaturedRequestStatus;
    message?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    adminNote?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type FeaturedRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeaturedRequestCountOrderByAggregateInput;
    _max?: Prisma.FeaturedRequestMaxOrderByAggregateInput;
    _min?: Prisma.FeaturedRequestMinOrderByAggregateInput;
};
export type FeaturedRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeaturedRequestScalarWhereWithAggregatesInput | Prisma.FeaturedRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeaturedRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeaturedRequestScalarWhereWithAggregatesInput | Prisma.FeaturedRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeaturedRequest"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"FeaturedRequest"> | string;
    organizerId?: Prisma.StringWithAggregatesFilter<"FeaturedRequest"> | string;
    status?: Prisma.EnumFeaturedRequestStatusWithAggregatesFilter<"FeaturedRequest"> | $Enums.FeaturedRequestStatus;
    message?: Prisma.StringNullableWithAggregatesFilter<"FeaturedRequest"> | string | null;
    adminNote?: Prisma.StringNullableWithAggregatesFilter<"FeaturedRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeaturedRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeaturedRequest"> | Date | string;
};
export type FeaturedRequestCreateInput = {
    id?: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutFeaturedRequestsInput;
    organizer: Prisma.UserCreateNestedOneWithoutFeaturedRequestsInput;
};
export type FeaturedRequestUncheckedCreateInput = {
    id?: string;
    eventId: string;
    organizerId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutFeaturedRequestsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutFeaturedRequestsNestedInput;
};
export type FeaturedRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestCreateManyInput = {
    id?: string;
    eventId: string;
    organizerId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestListRelationFilter = {
    every?: Prisma.FeaturedRequestWhereInput;
    some?: Prisma.FeaturedRequestWhereInput;
    none?: Prisma.FeaturedRequestWhereInput;
};
export type FeaturedRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeaturedRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    adminNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeaturedRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    adminNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeaturedRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    adminNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeaturedRequestCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput> | Prisma.FeaturedRequestCreateWithoutOrganizerInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput | Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.FeaturedRequestCreateManyOrganizerInputEnvelope;
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
};
export type FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput> | Prisma.FeaturedRequestCreateWithoutOrganizerInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput | Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.FeaturedRequestCreateManyOrganizerInputEnvelope;
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
};
export type FeaturedRequestUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput> | Prisma.FeaturedRequestCreateWithoutOrganizerInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput | Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.FeaturedRequestCreateManyOrganizerInputEnvelope;
    set?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    disconnect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    delete?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    update?: Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.FeaturedRequestUpdateManyWithWhereWithoutOrganizerInput | Prisma.FeaturedRequestUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
};
export type FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput> | Prisma.FeaturedRequestCreateWithoutOrganizerInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput | Prisma.FeaturedRequestCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.FeaturedRequestCreateManyOrganizerInputEnvelope;
    set?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    disconnect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    delete?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    update?: Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.FeaturedRequestUpdateManyWithWhereWithoutOrganizerInput | Prisma.FeaturedRequestUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
};
export type FeaturedRequestCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput> | Prisma.FeaturedRequestCreateWithoutEventInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutEventInput | Prisma.FeaturedRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.FeaturedRequestCreateManyEventInputEnvelope;
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
};
export type FeaturedRequestUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput> | Prisma.FeaturedRequestCreateWithoutEventInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutEventInput | Prisma.FeaturedRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.FeaturedRequestCreateManyEventInputEnvelope;
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
};
export type FeaturedRequestUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput> | Prisma.FeaturedRequestCreateWithoutEventInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutEventInput | Prisma.FeaturedRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.FeaturedRequestCreateManyEventInputEnvelope;
    set?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    disconnect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    delete?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    update?: Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.FeaturedRequestUpdateManyWithWhereWithoutEventInput | Prisma.FeaturedRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
};
export type FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput> | Prisma.FeaturedRequestCreateWithoutEventInput[] | Prisma.FeaturedRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.FeaturedRequestCreateOrConnectWithoutEventInput | Prisma.FeaturedRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.FeaturedRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.FeaturedRequestCreateManyEventInputEnvelope;
    set?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    disconnect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    delete?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    connect?: Prisma.FeaturedRequestWhereUniqueInput | Prisma.FeaturedRequestWhereUniqueInput[];
    update?: Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.FeaturedRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.FeaturedRequestUpdateManyWithWhereWithoutEventInput | Prisma.FeaturedRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
};
export type EnumFeaturedRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.FeaturedRequestStatus;
};
export type FeaturedRequestCreateWithoutOrganizerInput = {
    id?: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutFeaturedRequestsInput;
};
export type FeaturedRequestUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    eventId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput>;
};
export type FeaturedRequestCreateManyOrganizerInputEnvelope = {
    data: Prisma.FeaturedRequestCreateManyOrganizerInput | Prisma.FeaturedRequestCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type FeaturedRequestUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeaturedRequestUpdateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedCreateWithoutOrganizerInput>;
};
export type FeaturedRequestUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateWithoutOrganizerInput, Prisma.FeaturedRequestUncheckedUpdateWithoutOrganizerInput>;
};
export type FeaturedRequestUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.FeaturedRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateManyMutationInput, Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerInput>;
};
export type FeaturedRequestScalarWhereInput = {
    AND?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
    OR?: Prisma.FeaturedRequestScalarWhereInput[];
    NOT?: Prisma.FeaturedRequestScalarWhereInput | Prisma.FeaturedRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"FeaturedRequest"> | string;
    eventId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    organizerId?: Prisma.StringFilter<"FeaturedRequest"> | string;
    status?: Prisma.EnumFeaturedRequestStatusFilter<"FeaturedRequest"> | $Enums.FeaturedRequestStatus;
    message?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    adminNote?: Prisma.StringNullableFilter<"FeaturedRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeaturedRequest"> | Date | string;
};
export type FeaturedRequestCreateWithoutEventInput = {
    id?: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutFeaturedRequestsInput;
};
export type FeaturedRequestUncheckedCreateWithoutEventInput = {
    id?: string;
    organizerId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestCreateOrConnectWithoutEventInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput>;
};
export type FeaturedRequestCreateManyEventInputEnvelope = {
    data: Prisma.FeaturedRequestCreateManyEventInput | Prisma.FeaturedRequestCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type FeaturedRequestUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeaturedRequestUpdateWithoutEventInput, Prisma.FeaturedRequestUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.FeaturedRequestCreateWithoutEventInput, Prisma.FeaturedRequestUncheckedCreateWithoutEventInput>;
};
export type FeaturedRequestUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.FeaturedRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateWithoutEventInput, Prisma.FeaturedRequestUncheckedUpdateWithoutEventInput>;
};
export type FeaturedRequestUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.FeaturedRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateManyMutationInput, Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventInput>;
};
export type FeaturedRequestCreateManyOrganizerInput = {
    id?: string;
    eventId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutFeaturedRequestsNestedInput;
};
export type FeaturedRequestUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestCreateManyEventInput = {
    id?: string;
    organizerId: string;
    status?: $Enums.FeaturedRequestStatus;
    message?: string | null;
    adminNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeaturedRequestUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutFeaturedRequestsNestedInput;
};
export type FeaturedRequestUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFeaturedRequestStatusFieldUpdateOperationsInput | $Enums.FeaturedRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeaturedRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    status?: boolean;
    message?: boolean;
    adminNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["featuredRequest"]>;
export type FeaturedRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    status?: boolean;
    message?: boolean;
    adminNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["featuredRequest"]>;
export type FeaturedRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    status?: boolean;
    message?: boolean;
    adminNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["featuredRequest"]>;
export type FeaturedRequestSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    organizerId?: boolean;
    status?: boolean;
    message?: boolean;
    adminNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeaturedRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "organizerId" | "status" | "message" | "adminNote" | "createdAt" | "updatedAt", ExtArgs["result"]["featuredRequest"]>;
export type FeaturedRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeaturedRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeaturedRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FeaturedRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeaturedRequest";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        organizer: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        organizerId: string;
        status: $Enums.FeaturedRequestStatus;
        message: string | null;
        adminNote: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["featuredRequest"]>;
    composites: {};
};
export type FeaturedRequestGetPayload<S extends boolean | null | undefined | FeaturedRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload, S>;
export type FeaturedRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeaturedRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeaturedRequestCountAggregateInputType | true;
};
export interface FeaturedRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeaturedRequest'];
        meta: {
            name: 'FeaturedRequest';
        };
    };
    /**
     * Find zero or one FeaturedRequest that matches the filter.
     * @param {FeaturedRequestFindUniqueArgs} args - Arguments to find a FeaturedRequest
     * @example
     * // Get one FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, FeaturedRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FeaturedRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedRequestFindUniqueOrThrowArgs} args - Arguments to find a FeaturedRequest
     * @example
     * // Get one FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeaturedRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeaturedRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestFindFirstArgs} args - Arguments to find a FeaturedRequest
     * @example
     * // Get one FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeaturedRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestFindFirstOrThrowArgs} args - Arguments to find a FeaturedRequest
     * @example
     * // Get one FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FeaturedRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedRequests
     * const featuredRequests = await prisma.featuredRequest.findMany()
     *
     * // Get first 10 FeaturedRequests
     * const featuredRequests = await prisma.featuredRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const featuredRequestWithIdOnly = await prisma.featuredRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeaturedRequestFindManyArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FeaturedRequest.
     * @param {FeaturedRequestCreateArgs} args - Arguments to create a FeaturedRequest.
     * @example
     * // Create one FeaturedRequest
     * const FeaturedRequest = await prisma.featuredRequest.create({
     *   data: {
     *     // ... data to create a FeaturedRequest
     *   }
     * })
     *
     */
    create<T extends FeaturedRequestCreateArgs>(args: Prisma.SelectSubset<T, FeaturedRequestCreateArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FeaturedRequests.
     * @param {FeaturedRequestCreateManyArgs} args - Arguments to create many FeaturedRequests.
     * @example
     * // Create many FeaturedRequests
     * const featuredRequest = await prisma.featuredRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeaturedRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FeaturedRequests and returns the data saved in the database.
     * @param {FeaturedRequestCreateManyAndReturnArgs} args - Arguments to create many FeaturedRequests.
     * @example
     * // Create many FeaturedRequests
     * const featuredRequest = await prisma.featuredRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FeaturedRequests and only return the `id`
     * const featuredRequestWithIdOnly = await prisma.featuredRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeaturedRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FeaturedRequest.
     * @param {FeaturedRequestDeleteArgs} args - Arguments to delete one FeaturedRequest.
     * @example
     * // Delete one FeaturedRequest
     * const FeaturedRequest = await prisma.featuredRequest.delete({
     *   where: {
     *     // ... filter to delete one FeaturedRequest
     *   }
     * })
     *
     */
    delete<T extends FeaturedRequestDeleteArgs>(args: Prisma.SelectSubset<T, FeaturedRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FeaturedRequest.
     * @param {FeaturedRequestUpdateArgs} args - Arguments to update one FeaturedRequest.
     * @example
     * // Update one FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeaturedRequestUpdateArgs>(args: Prisma.SelectSubset<T, FeaturedRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FeaturedRequests.
     * @param {FeaturedRequestDeleteManyArgs} args - Arguments to filter FeaturedRequests to delete.
     * @example
     * // Delete a few FeaturedRequests
     * const { count } = await prisma.featuredRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeaturedRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeaturedRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeaturedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedRequests
     * const featuredRequest = await prisma.featuredRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeaturedRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, FeaturedRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeaturedRequests and returns the data updated in the database.
     * @param {FeaturedRequestUpdateManyAndReturnArgs} args - Arguments to update many FeaturedRequests.
     * @example
     * // Update many FeaturedRequests
     * const featuredRequest = await prisma.featuredRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FeaturedRequests and only return the `id`
     * const featuredRequestWithIdOnly = await prisma.featuredRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeaturedRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeaturedRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FeaturedRequest.
     * @param {FeaturedRequestUpsertArgs} args - Arguments to update or create a FeaturedRequest.
     * @example
     * // Update or create a FeaturedRequest
     * const featuredRequest = await prisma.featuredRequest.upsert({
     *   create: {
     *     // ... data to create a FeaturedRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedRequest we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedRequestUpsertArgs>(args: Prisma.SelectSubset<T, FeaturedRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__FeaturedRequestClient<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FeaturedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestCountArgs} args - Arguments to filter FeaturedRequests to count.
     * @example
     * // Count the number of FeaturedRequests
     * const count = await prisma.featuredRequest.count({
     *   where: {
     *     // ... the filter for the FeaturedRequests we want to count
     *   }
     * })
    **/
    count<T extends FeaturedRequestCountArgs>(args?: Prisma.Subset<T, FeaturedRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeaturedRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FeaturedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeaturedRequestAggregateArgs>(args: Prisma.Subset<T, FeaturedRequestAggregateArgs>): Prisma.PrismaPromise<GetFeaturedRequestAggregateType<T>>;
    /**
     * Group by FeaturedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FeaturedRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeaturedRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: FeaturedRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeaturedRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FeaturedRequest model
     */
    readonly fields: FeaturedRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FeaturedRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FeaturedRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organizer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FeaturedRequest model
 */
export interface FeaturedRequestFieldRefs {
    readonly id: Prisma.FieldRef<"FeaturedRequest", 'String'>;
    readonly eventId: Prisma.FieldRef<"FeaturedRequest", 'String'>;
    readonly organizerId: Prisma.FieldRef<"FeaturedRequest", 'String'>;
    readonly status: Prisma.FieldRef<"FeaturedRequest", 'FeaturedRequestStatus'>;
    readonly message: Prisma.FieldRef<"FeaturedRequest", 'String'>;
    readonly adminNote: Prisma.FieldRef<"FeaturedRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeaturedRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeaturedRequest", 'DateTime'>;
}
/**
 * FeaturedRequest findUnique
 */
export type FeaturedRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FeaturedRequest to fetch.
     */
    where: Prisma.FeaturedRequestWhereUniqueInput;
};
/**
 * FeaturedRequest findUniqueOrThrow
 */
export type FeaturedRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FeaturedRequest to fetch.
     */
    where: Prisma.FeaturedRequestWhereUniqueInput;
};
/**
 * FeaturedRequest findFirst
 */
export type FeaturedRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FeaturedRequest to fetch.
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeaturedRequests to fetch.
     */
    orderBy?: Prisma.FeaturedRequestOrderByWithRelationInput | Prisma.FeaturedRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeaturedRequests.
     */
    cursor?: Prisma.FeaturedRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeaturedRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeaturedRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeaturedRequests.
     */
    distinct?: Prisma.FeaturedRequestScalarFieldEnum | Prisma.FeaturedRequestScalarFieldEnum[];
};
/**
 * FeaturedRequest findFirstOrThrow
 */
export type FeaturedRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FeaturedRequest to fetch.
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeaturedRequests to fetch.
     */
    orderBy?: Prisma.FeaturedRequestOrderByWithRelationInput | Prisma.FeaturedRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeaturedRequests.
     */
    cursor?: Prisma.FeaturedRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeaturedRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeaturedRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeaturedRequests.
     */
    distinct?: Prisma.FeaturedRequestScalarFieldEnum | Prisma.FeaturedRequestScalarFieldEnum[];
};
/**
 * FeaturedRequest findMany
 */
export type FeaturedRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter, which FeaturedRequests to fetch.
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeaturedRequests to fetch.
     */
    orderBy?: Prisma.FeaturedRequestOrderByWithRelationInput | Prisma.FeaturedRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeaturedRequests.
     */
    cursor?: Prisma.FeaturedRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeaturedRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeaturedRequests.
     */
    skip?: number;
    distinct?: Prisma.FeaturedRequestScalarFieldEnum | Prisma.FeaturedRequestScalarFieldEnum[];
};
/**
 * FeaturedRequest create
 */
export type FeaturedRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a FeaturedRequest.
     */
    data: Prisma.XOR<Prisma.FeaturedRequestCreateInput, Prisma.FeaturedRequestUncheckedCreateInput>;
};
/**
 * FeaturedRequest createMany
 */
export type FeaturedRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedRequests.
     */
    data: Prisma.FeaturedRequestCreateManyInput | Prisma.FeaturedRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FeaturedRequest createManyAndReturn
 */
export type FeaturedRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many FeaturedRequests.
     */
    data: Prisma.FeaturedRequestCreateManyInput | Prisma.FeaturedRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FeaturedRequest update
 */
export type FeaturedRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a FeaturedRequest.
     */
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateInput, Prisma.FeaturedRequestUncheckedUpdateInput>;
    /**
     * Choose, which FeaturedRequest to update.
     */
    where: Prisma.FeaturedRequestWhereUniqueInput;
};
/**
 * FeaturedRequest updateMany
 */
export type FeaturedRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedRequests.
     */
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateManyMutationInput, Prisma.FeaturedRequestUncheckedUpdateManyInput>;
    /**
     * Filter which FeaturedRequests to update
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * Limit how many FeaturedRequests to update.
     */
    limit?: number;
};
/**
 * FeaturedRequest updateManyAndReturn
 */
export type FeaturedRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * The data used to update FeaturedRequests.
     */
    data: Prisma.XOR<Prisma.FeaturedRequestUpdateManyMutationInput, Prisma.FeaturedRequestUncheckedUpdateManyInput>;
    /**
     * Filter which FeaturedRequests to update
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * Limit how many FeaturedRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FeaturedRequest upsert
 */
export type FeaturedRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the FeaturedRequest to update in case it exists.
     */
    where: Prisma.FeaturedRequestWhereUniqueInput;
    /**
     * In case the FeaturedRequest found by the `where` argument doesn't exist, create a new FeaturedRequest with this data.
     */
    create: Prisma.XOR<Prisma.FeaturedRequestCreateInput, Prisma.FeaturedRequestUncheckedCreateInput>;
    /**
     * In case the FeaturedRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FeaturedRequestUpdateInput, Prisma.FeaturedRequestUncheckedUpdateInput>;
};
/**
 * FeaturedRequest delete
 */
export type FeaturedRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    /**
     * Filter which FeaturedRequest to delete.
     */
    where: Prisma.FeaturedRequestWhereUniqueInput;
};
/**
 * FeaturedRequest deleteMany
 */
export type FeaturedRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedRequests to delete
     */
    where?: Prisma.FeaturedRequestWhereInput;
    /**
     * Limit how many FeaturedRequests to delete.
     */
    limit?: number;
};
/**
 * FeaturedRequest without action
 */
export type FeaturedRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=FeaturedRequest.d.ts.map