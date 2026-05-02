import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ParticipantCategory
 *
 */
export type ParticipantCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ParticipantCategoryPayload>;
export type AggregateParticipantCategory = {
    _count: ParticipantCategoryCountAggregateOutputType | null;
    _min: ParticipantCategoryMinAggregateOutputType | null;
    _max: ParticipantCategoryMaxAggregateOutputType | null;
};
export type ParticipantCategoryMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParticipantCategoryMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParticipantCategoryCountAggregateOutputType = {
    id: number;
    eventId: number;
    name: number;
    description: number;
    color: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParticipantCategoryMinAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    color?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParticipantCategoryMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    color?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParticipantCategoryCountAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    color?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParticipantCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantCategory to aggregate.
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ParticipantCategories to fetch.
     */
    orderBy?: Prisma.ParticipantCategoryOrderByWithRelationInput | Prisma.ParticipantCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ParticipantCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ParticipantCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ParticipantCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ParticipantCategories
    **/
    _count?: true | ParticipantCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantCategoryMaxAggregateInputType;
};
export type GetParticipantCategoryAggregateType<T extends ParticipantCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateParticipantCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParticipantCategory[P]> : Prisma.GetScalarType<T[P], AggregateParticipantCategory[P]>;
};
export type ParticipantCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantCategoryWhereInput;
    orderBy?: Prisma.ParticipantCategoryOrderByWithAggregationInput | Prisma.ParticipantCategoryOrderByWithAggregationInput[];
    by: Prisma.ParticipantCategoryScalarFieldEnum[] | Prisma.ParticipantCategoryScalarFieldEnum;
    having?: Prisma.ParticipantCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParticipantCategoryCountAggregateInputType | true;
    _min?: ParticipantCategoryMinAggregateInputType;
    _max?: ParticipantCategoryMaxAggregateInputType;
};
export type ParticipantCategoryGroupByOutputType = {
    id: string;
    eventId: string;
    name: string;
    description: string | null;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ParticipantCategoryCountAggregateOutputType | null;
    _min: ParticipantCategoryMinAggregateOutputType | null;
    _max: ParticipantCategoryMaxAggregateOutputType | null;
};
type GetParticipantCategoryGroupByPayload<T extends ParticipantCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParticipantCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParticipantCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParticipantCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParticipantCategoryGroupByOutputType[P]>;
}>>;
export type ParticipantCategoryWhereInput = {
    AND?: Prisma.ParticipantCategoryWhereInput | Prisma.ParticipantCategoryWhereInput[];
    OR?: Prisma.ParticipantCategoryWhereInput[];
    NOT?: Prisma.ParticipantCategoryWhereInput | Prisma.ParticipantCategoryWhereInput[];
    id?: Prisma.StringFilter<"ParticipantCategory"> | string;
    eventId?: Prisma.StringFilter<"ParticipantCategory"> | string;
    name?: Prisma.StringFilter<"ParticipantCategory"> | string;
    description?: Prisma.StringNullableFilter<"ParticipantCategory"> | string | null;
    color?: Prisma.StringFilter<"ParticipantCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    accessRights?: Prisma.ZoneAccessRightListRelationFilter;
    badges?: Prisma.AccessBadgeListRelationFilter;
};
export type ParticipantCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    accessRights?: Prisma.ZoneAccessRightOrderByRelationAggregateInput;
    badges?: Prisma.AccessBadgeOrderByRelationAggregateInput;
};
export type ParticipantCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_name?: Prisma.ParticipantCategoryEventIdNameCompoundUniqueInput;
    AND?: Prisma.ParticipantCategoryWhereInput | Prisma.ParticipantCategoryWhereInput[];
    OR?: Prisma.ParticipantCategoryWhereInput[];
    NOT?: Prisma.ParticipantCategoryWhereInput | Prisma.ParticipantCategoryWhereInput[];
    eventId?: Prisma.StringFilter<"ParticipantCategory"> | string;
    name?: Prisma.StringFilter<"ParticipantCategory"> | string;
    description?: Prisma.StringNullableFilter<"ParticipantCategory"> | string | null;
    color?: Prisma.StringFilter<"ParticipantCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    accessRights?: Prisma.ZoneAccessRightListRelationFilter;
    badges?: Prisma.AccessBadgeListRelationFilter;
}, "id" | "eventId_name">;
export type ParticipantCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParticipantCategoryCountOrderByAggregateInput;
    _max?: Prisma.ParticipantCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ParticipantCategoryMinOrderByAggregateInput;
};
export type ParticipantCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParticipantCategoryScalarWhereWithAggregatesInput | Prisma.ParticipantCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParticipantCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParticipantCategoryScalarWhereWithAggregatesInput | Prisma.ParticipantCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParticipantCategory"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"ParticipantCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ParticipantCategory"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ParticipantCategory"> | string | null;
    color?: Prisma.StringWithAggregatesFilter<"ParticipantCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParticipantCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParticipantCategory"> | Date | string;
};
export type ParticipantCategoryCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutParticipantCategoriesInput;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutCategoryInput;
    badges?: Prisma.AccessBadgeCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryUncheckedCreateInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutCategoryInput;
    badges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantCategoriesNestedInput;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutCategoryNestedInput;
    badges?: Prisma.AccessBadgeUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutCategoryNestedInput;
    badges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryCreateManyInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantCategoryListRelationFilter = {
    every?: Prisma.ParticipantCategoryWhereInput;
    some?: Prisma.ParticipantCategoryWhereInput;
    none?: Prisma.ParticipantCategoryWhereInput;
};
export type ParticipantCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParticipantCategoryEventIdNameCompoundUniqueInput = {
    eventId: string;
    name: string;
};
export type ParticipantCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantCategoryScalarRelationFilter = {
    is?: Prisma.ParticipantCategoryWhereInput;
    isNot?: Prisma.ParticipantCategoryWhereInput;
};
export type ParticipantCategoryCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput> | Prisma.ParticipantCategoryCreateWithoutEventInput[] | Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput | Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.ParticipantCategoryCreateManyEventInputEnvelope;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
};
export type ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput> | Prisma.ParticipantCategoryCreateWithoutEventInput[] | Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput | Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.ParticipantCategoryCreateManyEventInputEnvelope;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
};
export type ParticipantCategoryUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput> | Prisma.ParticipantCategoryCreateWithoutEventInput[] | Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput | Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.ParticipantCategoryUpsertWithWhereUniqueWithoutEventInput | Prisma.ParticipantCategoryUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.ParticipantCategoryCreateManyEventInputEnvelope;
    set?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    disconnect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    delete?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    connect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    update?: Prisma.ParticipantCategoryUpdateWithWhereUniqueWithoutEventInput | Prisma.ParticipantCategoryUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.ParticipantCategoryUpdateManyWithWhereWithoutEventInput | Prisma.ParticipantCategoryUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.ParticipantCategoryScalarWhereInput | Prisma.ParticipantCategoryScalarWhereInput[];
};
export type ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput> | Prisma.ParticipantCategoryCreateWithoutEventInput[] | Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput | Prisma.ParticipantCategoryCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.ParticipantCategoryUpsertWithWhereUniqueWithoutEventInput | Prisma.ParticipantCategoryUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.ParticipantCategoryCreateManyEventInputEnvelope;
    set?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    disconnect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    delete?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    connect?: Prisma.ParticipantCategoryWhereUniqueInput | Prisma.ParticipantCategoryWhereUniqueInput[];
    update?: Prisma.ParticipantCategoryUpdateWithWhereUniqueWithoutEventInput | Prisma.ParticipantCategoryUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.ParticipantCategoryUpdateManyWithWhereWithoutEventInput | Prisma.ParticipantCategoryUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.ParticipantCategoryScalarWhereInput | Prisma.ParticipantCategoryScalarWhereInput[];
};
export type ParticipantCategoryCreateNestedOneWithoutAccessRightsInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedCreateWithoutAccessRightsInput>;
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutAccessRightsInput;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput;
};
export type ParticipantCategoryUpdateOneRequiredWithoutAccessRightsNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedCreateWithoutAccessRightsInput>;
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutAccessRightsInput;
    upsert?: Prisma.ParticipantCategoryUpsertWithoutAccessRightsInput;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantCategoryUpdateToOneWithWhereWithoutAccessRightsInput, Prisma.ParticipantCategoryUpdateWithoutAccessRightsInput>, Prisma.ParticipantCategoryUncheckedUpdateWithoutAccessRightsInput>;
};
export type ParticipantCategoryCreateNestedOneWithoutBadgesInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedCreateWithoutBadgesInput>;
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutBadgesInput;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput;
};
export type ParticipantCategoryUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedCreateWithoutBadgesInput>;
    connectOrCreate?: Prisma.ParticipantCategoryCreateOrConnectWithoutBadgesInput;
    upsert?: Prisma.ParticipantCategoryUpsertWithoutBadgesInput;
    connect?: Prisma.ParticipantCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantCategoryUpdateToOneWithWhereWithoutBadgesInput, Prisma.ParticipantCategoryUpdateWithoutBadgesInput>, Prisma.ParticipantCategoryUncheckedUpdateWithoutBadgesInput>;
};
export type ParticipantCategoryCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutCategoryInput;
    badges?: Prisma.AccessBadgeCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryUncheckedCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutCategoryInput;
    badges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryCreateOrConnectWithoutEventInput = {
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput>;
};
export type ParticipantCategoryCreateManyEventInputEnvelope = {
    data: Prisma.ParticipantCategoryCreateManyEventInput | Prisma.ParticipantCategoryCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type ParticipantCategoryUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutEventInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutEventInput, Prisma.ParticipantCategoryUncheckedCreateWithoutEventInput>;
};
export type ParticipantCategoryUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutEventInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutEventInput>;
};
export type ParticipantCategoryUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.ParticipantCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateManyMutationInput, Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventInput>;
};
export type ParticipantCategoryScalarWhereInput = {
    AND?: Prisma.ParticipantCategoryScalarWhereInput | Prisma.ParticipantCategoryScalarWhereInput[];
    OR?: Prisma.ParticipantCategoryScalarWhereInput[];
    NOT?: Prisma.ParticipantCategoryScalarWhereInput | Prisma.ParticipantCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ParticipantCategory"> | string;
    eventId?: Prisma.StringFilter<"ParticipantCategory"> | string;
    name?: Prisma.StringFilter<"ParticipantCategory"> | string;
    description?: Prisma.StringNullableFilter<"ParticipantCategory"> | string | null;
    color?: Prisma.StringFilter<"ParticipantCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParticipantCategory"> | Date | string;
};
export type ParticipantCategoryCreateWithoutAccessRightsInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutParticipantCategoriesInput;
    badges?: Prisma.AccessBadgeCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryUncheckedCreateWithoutAccessRightsInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    badges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryCreateOrConnectWithoutAccessRightsInput = {
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedCreateWithoutAccessRightsInput>;
};
export type ParticipantCategoryUpsertWithoutAccessRightsInput = {
    update: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutAccessRightsInput>;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedCreateWithoutAccessRightsInput>;
    where?: Prisma.ParticipantCategoryWhereInput;
};
export type ParticipantCategoryUpdateToOneWithWhereWithoutAccessRightsInput = {
    where?: Prisma.ParticipantCategoryWhereInput;
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutAccessRightsInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutAccessRightsInput>;
};
export type ParticipantCategoryUpdateWithoutAccessRightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantCategoriesNestedInput;
    badges?: Prisma.AccessBadgeUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryUncheckedUpdateWithoutAccessRightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    badges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryCreateWithoutBadgesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutParticipantCategoriesInput;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryUncheckedCreateWithoutBadgesInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ParticipantCategoryCreateOrConnectWithoutBadgesInput = {
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedCreateWithoutBadgesInput>;
};
export type ParticipantCategoryUpsertWithoutBadgesInput = {
    update: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutBadgesInput>;
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedCreateWithoutBadgesInput>;
    where?: Prisma.ParticipantCategoryWhereInput;
};
export type ParticipantCategoryUpdateToOneWithWhereWithoutBadgesInput = {
    where?: Prisma.ParticipantCategoryWhereInput;
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateWithoutBadgesInput, Prisma.ParticipantCategoryUncheckedUpdateWithoutBadgesInput>;
};
export type ParticipantCategoryUpdateWithoutBadgesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantCategoriesNestedInput;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryUncheckedUpdateWithoutBadgesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryCreateManyEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantCategoryUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutCategoryNestedInput;
    badges?: Prisma.AccessBadgeUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutCategoryNestedInput;
    badges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ParticipantCategoryUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ParticipantCategoryCountOutputType
 */
export type ParticipantCategoryCountOutputType = {
    accessRights: number;
    badges: number;
};
export type ParticipantCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accessRights?: boolean | ParticipantCategoryCountOutputTypeCountAccessRightsArgs;
    badges?: boolean | ParticipantCategoryCountOutputTypeCountBadgesArgs;
};
/**
 * ParticipantCategoryCountOutputType without action
 */
export type ParticipantCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategoryCountOutputType
     */
    select?: Prisma.ParticipantCategoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ParticipantCategoryCountOutputType without action
 */
export type ParticipantCategoryCountOutputTypeCountAccessRightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZoneAccessRightWhereInput;
};
/**
 * ParticipantCategoryCountOutputType without action
 */
export type ParticipantCategoryCountOutputTypeCountBadgesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessBadgeWhereInput;
};
export type ParticipantCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    accessRights?: boolean | Prisma.ParticipantCategory$accessRightsArgs<ExtArgs>;
    badges?: boolean | Prisma.ParticipantCategory$badgesArgs<ExtArgs>;
    _count?: boolean | Prisma.ParticipantCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participantCategory"]>;
export type ParticipantCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participantCategory"]>;
export type ParticipantCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participantCategory"]>;
export type ParticipantCategorySelectScalar = {
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParticipantCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "name" | "description" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["participantCategory"]>;
export type ParticipantCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    accessRights?: boolean | Prisma.ParticipantCategory$accessRightsArgs<ExtArgs>;
    badges?: boolean | Prisma.ParticipantCategory$badgesArgs<ExtArgs>;
    _count?: boolean | Prisma.ParticipantCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ParticipantCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type ParticipantCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $ParticipantCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParticipantCategory";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        accessRights: Prisma.$ZoneAccessRightPayload<ExtArgs>[];
        badges: Prisma.$AccessBadgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        name: string;
        description: string | null;
        color: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["participantCategory"]>;
    composites: {};
};
export type ParticipantCategoryGetPayload<S extends boolean | null | undefined | ParticipantCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload, S>;
export type ParticipantCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParticipantCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParticipantCategoryCountAggregateInputType | true;
};
export interface ParticipantCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParticipantCategory'];
        meta: {
            name: 'ParticipantCategory';
        };
    };
    /**
     * Find zero or one ParticipantCategory that matches the filter.
     * @param {ParticipantCategoryFindUniqueArgs} args - Arguments to find a ParticipantCategory
     * @example
     * // Get one ParticipantCategory
     * const participantCategory = await prisma.participantCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ParticipantCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantCategoryFindUniqueOrThrowArgs} args - Arguments to find a ParticipantCategory
     * @example
     * // Get one ParticipantCategory
     * const participantCategory = await prisma.participantCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ParticipantCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryFindFirstArgs} args - Arguments to find a ParticipantCategory
     * @example
     * // Get one ParticipantCategory
     * const participantCategory = await prisma.participantCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ParticipantCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryFindFirstOrThrowArgs} args - Arguments to find a ParticipantCategory
     * @example
     * // Get one ParticipantCategory
     * const participantCategory = await prisma.participantCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ParticipantCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantCategories
     * const participantCategories = await prisma.participantCategory.findMany()
     *
     * // Get first 10 ParticipantCategories
     * const participantCategories = await prisma.participantCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const participantCategoryWithIdOnly = await prisma.participantCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ParticipantCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ParticipantCategory.
     * @param {ParticipantCategoryCreateArgs} args - Arguments to create a ParticipantCategory.
     * @example
     * // Create one ParticipantCategory
     * const ParticipantCategory = await prisma.participantCategory.create({
     *   data: {
     *     // ... data to create a ParticipantCategory
     *   }
     * })
     *
     */
    create<T extends ParticipantCategoryCreateArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ParticipantCategories.
     * @param {ParticipantCategoryCreateManyArgs} args - Arguments to create many ParticipantCategories.
     * @example
     * // Create many ParticipantCategories
     * const participantCategory = await prisma.participantCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ParticipantCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ParticipantCategories and returns the data saved in the database.
     * @param {ParticipantCategoryCreateManyAndReturnArgs} args - Arguments to create many ParticipantCategories.
     * @example
     * // Create many ParticipantCategories
     * const participantCategory = await prisma.participantCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ParticipantCategories and only return the `id`
     * const participantCategoryWithIdOnly = await prisma.participantCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ParticipantCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ParticipantCategory.
     * @param {ParticipantCategoryDeleteArgs} args - Arguments to delete one ParticipantCategory.
     * @example
     * // Delete one ParticipantCategory
     * const ParticipantCategory = await prisma.participantCategory.delete({
     *   where: {
     *     // ... filter to delete one ParticipantCategory
     *   }
     * })
     *
     */
    delete<T extends ParticipantCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ParticipantCategory.
     * @param {ParticipantCategoryUpdateArgs} args - Arguments to update one ParticipantCategory.
     * @example
     * // Update one ParticipantCategory
     * const participantCategory = await prisma.participantCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ParticipantCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ParticipantCategories.
     * @param {ParticipantCategoryDeleteManyArgs} args - Arguments to filter ParticipantCategories to delete.
     * @example
     * // Delete a few ParticipantCategories
     * const { count } = await prisma.participantCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ParticipantCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParticipantCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ParticipantCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantCategories
     * const participantCategory = await prisma.participantCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ParticipantCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ParticipantCategories and returns the data updated in the database.
     * @param {ParticipantCategoryUpdateManyAndReturnArgs} args - Arguments to update many ParticipantCategories.
     * @example
     * // Update many ParticipantCategories
     * const participantCategory = await prisma.participantCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ParticipantCategories and only return the `id`
     * const participantCategoryWithIdOnly = await prisma.participantCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ParticipantCategory.
     * @param {ParticipantCategoryUpsertArgs} args - Arguments to update or create a ParticipantCategory.
     * @example
     * // Update or create a ParticipantCategory
     * const participantCategory = await prisma.participantCategory.upsert({
     *   create: {
     *     // ... data to create a ParticipantCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantCategory we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ParticipantCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ParticipantCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryCountArgs} args - Arguments to filter ParticipantCategories to count.
     * @example
     * // Count the number of ParticipantCategories
     * const count = await prisma.participantCategory.count({
     *   where: {
     *     // ... the filter for the ParticipantCategories we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCategoryCountArgs>(args?: Prisma.Subset<T, ParticipantCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParticipantCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ParticipantCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantCategoryAggregateArgs>(args: Prisma.Subset<T, ParticipantCategoryAggregateArgs>): Prisma.PrismaPromise<GetParticipantCategoryAggregateType<T>>;
    /**
     * Group by ParticipantCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ParticipantCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParticipantCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ParticipantCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParticipantCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ParticipantCategory model
     */
    readonly fields: ParticipantCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ParticipantCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ParticipantCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    accessRights<T extends Prisma.ParticipantCategory$accessRightsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantCategory$accessRightsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    badges<T extends Prisma.ParticipantCategory$badgesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantCategory$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ParticipantCategory model
 */
export interface ParticipantCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ParticipantCategory", 'String'>;
    readonly eventId: Prisma.FieldRef<"ParticipantCategory", 'String'>;
    readonly name: Prisma.FieldRef<"ParticipantCategory", 'String'>;
    readonly description: Prisma.FieldRef<"ParticipantCategory", 'String'>;
    readonly color: Prisma.FieldRef<"ParticipantCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ParticipantCategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParticipantCategory", 'DateTime'>;
}
/**
 * ParticipantCategory findUnique
 */
export type ParticipantCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ParticipantCategory to fetch.
     */
    where: Prisma.ParticipantCategoryWhereUniqueInput;
};
/**
 * ParticipantCategory findUniqueOrThrow
 */
export type ParticipantCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ParticipantCategory to fetch.
     */
    where: Prisma.ParticipantCategoryWhereUniqueInput;
};
/**
 * ParticipantCategory findFirst
 */
export type ParticipantCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ParticipantCategory to fetch.
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ParticipantCategories to fetch.
     */
    orderBy?: Prisma.ParticipantCategoryOrderByWithRelationInput | Prisma.ParticipantCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ParticipantCategories.
     */
    cursor?: Prisma.ParticipantCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ParticipantCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ParticipantCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ParticipantCategories.
     */
    distinct?: Prisma.ParticipantCategoryScalarFieldEnum | Prisma.ParticipantCategoryScalarFieldEnum[];
};
/**
 * ParticipantCategory findFirstOrThrow
 */
export type ParticipantCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ParticipantCategory to fetch.
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ParticipantCategories to fetch.
     */
    orderBy?: Prisma.ParticipantCategoryOrderByWithRelationInput | Prisma.ParticipantCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ParticipantCategories.
     */
    cursor?: Prisma.ParticipantCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ParticipantCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ParticipantCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ParticipantCategories.
     */
    distinct?: Prisma.ParticipantCategoryScalarFieldEnum | Prisma.ParticipantCategoryScalarFieldEnum[];
};
/**
 * ParticipantCategory findMany
 */
export type ParticipantCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ParticipantCategories to fetch.
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ParticipantCategories to fetch.
     */
    orderBy?: Prisma.ParticipantCategoryOrderByWithRelationInput | Prisma.ParticipantCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ParticipantCategories.
     */
    cursor?: Prisma.ParticipantCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ParticipantCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ParticipantCategories.
     */
    skip?: number;
    distinct?: Prisma.ParticipantCategoryScalarFieldEnum | Prisma.ParticipantCategoryScalarFieldEnum[];
};
/**
 * ParticipantCategory create
 */
export type ParticipantCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ParticipantCategory.
     */
    data: Prisma.XOR<Prisma.ParticipantCategoryCreateInput, Prisma.ParticipantCategoryUncheckedCreateInput>;
};
/**
 * ParticipantCategory createMany
 */
export type ParticipantCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantCategories.
     */
    data: Prisma.ParticipantCategoryCreateManyInput | Prisma.ParticipantCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ParticipantCategory createManyAndReturn
 */
export type ParticipantCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ParticipantCategories.
     */
    data: Prisma.ParticipantCategoryCreateManyInput | Prisma.ParticipantCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ParticipantCategory update
 */
export type ParticipantCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ParticipantCategory.
     */
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateInput, Prisma.ParticipantCategoryUncheckedUpdateInput>;
    /**
     * Choose, which ParticipantCategory to update.
     */
    where: Prisma.ParticipantCategoryWhereUniqueInput;
};
/**
 * ParticipantCategory updateMany
 */
export type ParticipantCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantCategories.
     */
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateManyMutationInput, Prisma.ParticipantCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ParticipantCategories to update
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * Limit how many ParticipantCategories to update.
     */
    limit?: number;
};
/**
 * ParticipantCategory updateManyAndReturn
 */
export type ParticipantCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update ParticipantCategories.
     */
    data: Prisma.XOR<Prisma.ParticipantCategoryUpdateManyMutationInput, Prisma.ParticipantCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ParticipantCategories to update
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * Limit how many ParticipantCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ParticipantCategory upsert
 */
export type ParticipantCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ParticipantCategory to update in case it exists.
     */
    where: Prisma.ParticipantCategoryWhereUniqueInput;
    /**
     * In case the ParticipantCategory found by the `where` argument doesn't exist, create a new ParticipantCategory with this data.
     */
    create: Prisma.XOR<Prisma.ParticipantCategoryCreateInput, Prisma.ParticipantCategoryUncheckedCreateInput>;
    /**
     * In case the ParticipantCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ParticipantCategoryUpdateInput, Prisma.ParticipantCategoryUncheckedUpdateInput>;
};
/**
 * ParticipantCategory delete
 */
export type ParticipantCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    /**
     * Filter which ParticipantCategory to delete.
     */
    where: Prisma.ParticipantCategoryWhereUniqueInput;
};
/**
 * ParticipantCategory deleteMany
 */
export type ParticipantCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantCategories to delete
     */
    where?: Prisma.ParticipantCategoryWhereInput;
    /**
     * Limit how many ParticipantCategories to delete.
     */
    limit?: number;
};
/**
 * ParticipantCategory.accessRights
 */
export type ParticipantCategory$accessRightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneAccessRight
     */
    select?: Prisma.ZoneAccessRightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZoneAccessRight
     */
    omit?: Prisma.ZoneAccessRightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ZoneAccessRightInclude<ExtArgs> | null;
    where?: Prisma.ZoneAccessRightWhereInput;
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZoneAccessRightScalarFieldEnum | Prisma.ZoneAccessRightScalarFieldEnum[];
};
/**
 * ParticipantCategory.badges
 */
export type ParticipantCategory$badgesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AccessBadgeWhereInput;
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessBadgeScalarFieldEnum | Prisma.AccessBadgeScalarFieldEnum[];
};
/**
 * ParticipantCategory without action
 */
export type ParticipantCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ParticipantCategory.d.ts.map