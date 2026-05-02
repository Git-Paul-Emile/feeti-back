import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ZoneAccessRight
 *
 */
export type ZoneAccessRightModel = runtime.Types.Result.DefaultSelection<Prisma.$ZoneAccessRightPayload>;
export type AggregateZoneAccessRight = {
    _count: ZoneAccessRightCountAggregateOutputType | null;
    _min: ZoneAccessRightMinAggregateOutputType | null;
    _max: ZoneAccessRightMaxAggregateOutputType | null;
};
export type ZoneAccessRightMinAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    zoneId: string | null;
    accessLevel: $Enums.ZoneAccessLevel | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ZoneAccessRightMaxAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    zoneId: string | null;
    accessLevel: $Enums.ZoneAccessLevel | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ZoneAccessRightCountAggregateOutputType = {
    id: number;
    categoryId: number;
    zoneId: number;
    accessLevel: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ZoneAccessRightMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    zoneId?: true;
    accessLevel?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ZoneAccessRightMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    zoneId?: true;
    accessLevel?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ZoneAccessRightCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    zoneId?: true;
    accessLevel?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ZoneAccessRightAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneAccessRight to aggregate.
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZoneAccessRights to fetch.
     */
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZoneAccessRights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZoneAccessRights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ZoneAccessRights
    **/
    _count?: true | ZoneAccessRightCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ZoneAccessRightMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ZoneAccessRightMaxAggregateInputType;
};
export type GetZoneAccessRightAggregateType<T extends ZoneAccessRightAggregateArgs> = {
    [P in keyof T & keyof AggregateZoneAccessRight]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZoneAccessRight[P]> : Prisma.GetScalarType<T[P], AggregateZoneAccessRight[P]>;
};
export type ZoneAccessRightGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZoneAccessRightWhereInput;
    orderBy?: Prisma.ZoneAccessRightOrderByWithAggregationInput | Prisma.ZoneAccessRightOrderByWithAggregationInput[];
    by: Prisma.ZoneAccessRightScalarFieldEnum[] | Prisma.ZoneAccessRightScalarFieldEnum;
    having?: Prisma.ZoneAccessRightScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZoneAccessRightCountAggregateInputType | true;
    _min?: ZoneAccessRightMinAggregateInputType;
    _max?: ZoneAccessRightMaxAggregateInputType;
};
export type ZoneAccessRightGroupByOutputType = {
    id: string;
    categoryId: string;
    zoneId: string;
    accessLevel: $Enums.ZoneAccessLevel;
    createdAt: Date;
    updatedAt: Date;
    _count: ZoneAccessRightCountAggregateOutputType | null;
    _min: ZoneAccessRightMinAggregateOutputType | null;
    _max: ZoneAccessRightMaxAggregateOutputType | null;
};
type GetZoneAccessRightGroupByPayload<T extends ZoneAccessRightGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZoneAccessRightGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZoneAccessRightGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZoneAccessRightGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZoneAccessRightGroupByOutputType[P]>;
}>>;
export type ZoneAccessRightWhereInput = {
    AND?: Prisma.ZoneAccessRightWhereInput | Prisma.ZoneAccessRightWhereInput[];
    OR?: Prisma.ZoneAccessRightWhereInput[];
    NOT?: Prisma.ZoneAccessRightWhereInput | Prisma.ZoneAccessRightWhereInput[];
    id?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    categoryId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    zoneId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFilter<"ZoneAccessRight"> | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
    category?: Prisma.XOR<Prisma.ParticipantCategoryScalarRelationFilter, Prisma.ParticipantCategoryWhereInput>;
    zone?: Prisma.XOR<Prisma.EventZoneScalarRelationFilter, Prisma.EventZoneWhereInput>;
};
export type ZoneAccessRightOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    accessLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.ParticipantCategoryOrderByWithRelationInput;
    zone?: Prisma.EventZoneOrderByWithRelationInput;
};
export type ZoneAccessRightWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    categoryId_zoneId?: Prisma.ZoneAccessRightCategoryIdZoneIdCompoundUniqueInput;
    AND?: Prisma.ZoneAccessRightWhereInput | Prisma.ZoneAccessRightWhereInput[];
    OR?: Prisma.ZoneAccessRightWhereInput[];
    NOT?: Prisma.ZoneAccessRightWhereInput | Prisma.ZoneAccessRightWhereInput[];
    categoryId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    zoneId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFilter<"ZoneAccessRight"> | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
    category?: Prisma.XOR<Prisma.ParticipantCategoryScalarRelationFilter, Prisma.ParticipantCategoryWhereInput>;
    zone?: Prisma.XOR<Prisma.EventZoneScalarRelationFilter, Prisma.EventZoneWhereInput>;
}, "id" | "categoryId_zoneId">;
export type ZoneAccessRightOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    accessLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ZoneAccessRightCountOrderByAggregateInput;
    _max?: Prisma.ZoneAccessRightMaxOrderByAggregateInput;
    _min?: Prisma.ZoneAccessRightMinOrderByAggregateInput;
};
export type ZoneAccessRightScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZoneAccessRightScalarWhereWithAggregatesInput | Prisma.ZoneAccessRightScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZoneAccessRightScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZoneAccessRightScalarWhereWithAggregatesInput | Prisma.ZoneAccessRightScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ZoneAccessRight"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"ZoneAccessRight"> | string;
    zoneId?: Prisma.StringWithAggregatesFilter<"ZoneAccessRight"> | string;
    accessLevel?: Prisma.EnumZoneAccessLevelWithAggregatesFilter<"ZoneAccessRight"> | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ZoneAccessRight"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ZoneAccessRight"> | Date | string;
};
export type ZoneAccessRightCreateInput = {
    id?: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutAccessRightsInput;
    zone: Prisma.EventZoneCreateNestedOneWithoutAccessRightsInput;
};
export type ZoneAccessRightUncheckedCreateInput = {
    id?: string;
    categoryId: string;
    zoneId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutAccessRightsNestedInput;
    zone?: Prisma.EventZoneUpdateOneRequiredWithoutAccessRightsNestedInput;
};
export type ZoneAccessRightUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightCreateManyInput = {
    id?: string;
    categoryId: string;
    zoneId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightListRelationFilter = {
    every?: Prisma.ZoneAccessRightWhereInput;
    some?: Prisma.ZoneAccessRightWhereInput;
    none?: Prisma.ZoneAccessRightWhereInput;
};
export type ZoneAccessRightOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ZoneAccessRightCategoryIdZoneIdCompoundUniqueInput = {
    categoryId: string;
    zoneId: string;
};
export type ZoneAccessRightCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    accessLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZoneAccessRightMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    accessLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZoneAccessRightMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    accessLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZoneAccessRightCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput> | Prisma.ZoneAccessRightCreateWithoutZoneInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput | Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyZoneInputEnvelope;
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
};
export type ZoneAccessRightUncheckedCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput> | Prisma.ZoneAccessRightCreateWithoutZoneInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput | Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyZoneInputEnvelope;
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
};
export type ZoneAccessRightUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput> | Prisma.ZoneAccessRightCreateWithoutZoneInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput | Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutZoneInput | Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyZoneInputEnvelope;
    set?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    disconnect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    delete?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    update?: Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutZoneInput | Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ZoneAccessRightUpdateManyWithWhereWithoutZoneInput | Prisma.ZoneAccessRightUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
};
export type ZoneAccessRightUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput> | Prisma.ZoneAccessRightCreateWithoutZoneInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput | Prisma.ZoneAccessRightCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutZoneInput | Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyZoneInputEnvelope;
    set?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    disconnect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    delete?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    update?: Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutZoneInput | Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ZoneAccessRightUpdateManyWithWhereWithoutZoneInput | Prisma.ZoneAccessRightUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
};
export type ZoneAccessRightCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput> | Prisma.ZoneAccessRightCreateWithoutCategoryInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput | Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyCategoryInputEnvelope;
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
};
export type ZoneAccessRightUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput> | Prisma.ZoneAccessRightCreateWithoutCategoryInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput | Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyCategoryInputEnvelope;
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
};
export type ZoneAccessRightUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput> | Prisma.ZoneAccessRightCreateWithoutCategoryInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput | Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyCategoryInputEnvelope;
    set?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    disconnect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    delete?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    update?: Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ZoneAccessRightUpdateManyWithWhereWithoutCategoryInput | Prisma.ZoneAccessRightUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
};
export type ZoneAccessRightUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput> | Prisma.ZoneAccessRightCreateWithoutCategoryInput[] | Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput | Prisma.ZoneAccessRightCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ZoneAccessRightUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ZoneAccessRightCreateManyCategoryInputEnvelope;
    set?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    disconnect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    delete?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    connect?: Prisma.ZoneAccessRightWhereUniqueInput | Prisma.ZoneAccessRightWhereUniqueInput[];
    update?: Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ZoneAccessRightUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ZoneAccessRightUpdateManyWithWhereWithoutCategoryInput | Prisma.ZoneAccessRightUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
};
export type EnumZoneAccessLevelFieldUpdateOperationsInput = {
    set?: $Enums.ZoneAccessLevel;
};
export type ZoneAccessRightCreateWithoutZoneInput = {
    id?: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.ParticipantCategoryCreateNestedOneWithoutAccessRightsInput;
};
export type ZoneAccessRightUncheckedCreateWithoutZoneInput = {
    id?: string;
    categoryId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightCreateOrConnectWithoutZoneInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput>;
};
export type ZoneAccessRightCreateManyZoneInputEnvelope = {
    data: Prisma.ZoneAccessRightCreateManyZoneInput | Prisma.ZoneAccessRightCreateManyZoneInput[];
    skipDuplicates?: boolean;
};
export type ZoneAccessRightUpsertWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    update: Prisma.XOR<Prisma.ZoneAccessRightUpdateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedUpdateWithoutZoneInput>;
    create: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedCreateWithoutZoneInput>;
};
export type ZoneAccessRightUpdateWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateWithoutZoneInput, Prisma.ZoneAccessRightUncheckedUpdateWithoutZoneInput>;
};
export type ZoneAccessRightUpdateManyWithWhereWithoutZoneInput = {
    where: Prisma.ZoneAccessRightScalarWhereInput;
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateManyMutationInput, Prisma.ZoneAccessRightUncheckedUpdateManyWithoutZoneInput>;
};
export type ZoneAccessRightScalarWhereInput = {
    AND?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
    OR?: Prisma.ZoneAccessRightScalarWhereInput[];
    NOT?: Prisma.ZoneAccessRightScalarWhereInput | Prisma.ZoneAccessRightScalarWhereInput[];
    id?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    categoryId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    zoneId?: Prisma.StringFilter<"ZoneAccessRight"> | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFilter<"ZoneAccessRight"> | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ZoneAccessRight"> | Date | string;
};
export type ZoneAccessRightCreateWithoutCategoryInput = {
    id?: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zone: Prisma.EventZoneCreateNestedOneWithoutAccessRightsInput;
};
export type ZoneAccessRightUncheckedCreateWithoutCategoryInput = {
    id?: string;
    zoneId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput>;
};
export type ZoneAccessRightCreateManyCategoryInputEnvelope = {
    data: Prisma.ZoneAccessRightCreateManyCategoryInput | Prisma.ZoneAccessRightCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ZoneAccessRightUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    update: Prisma.XOR<Prisma.ZoneAccessRightUpdateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ZoneAccessRightCreateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedCreateWithoutCategoryInput>;
};
export type ZoneAccessRightUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateWithoutCategoryInput, Prisma.ZoneAccessRightUncheckedUpdateWithoutCategoryInput>;
};
export type ZoneAccessRightUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ZoneAccessRightScalarWhereInput;
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateManyMutationInput, Prisma.ZoneAccessRightUncheckedUpdateManyWithoutCategoryInput>;
};
export type ZoneAccessRightCreateManyZoneInput = {
    id?: string;
    categoryId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.ParticipantCategoryUpdateOneRequiredWithoutAccessRightsNestedInput;
};
export type ZoneAccessRightUncheckedUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightUncheckedUpdateManyWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightCreateManyCategoryInput = {
    id?: string;
    zoneId: string;
    accessLevel?: $Enums.ZoneAccessLevel;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ZoneAccessRightUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.EventZoneUpdateOneRequiredWithoutAccessRightsNestedInput;
};
export type ZoneAccessRightUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessLevel?: Prisma.EnumZoneAccessLevelFieldUpdateOperationsInput | $Enums.ZoneAccessLevel;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZoneAccessRightSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    zoneId?: boolean;
    accessLevel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zoneAccessRight"]>;
export type ZoneAccessRightSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    zoneId?: boolean;
    accessLevel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zoneAccessRight"]>;
export type ZoneAccessRightSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    zoneId?: boolean;
    accessLevel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zoneAccessRight"]>;
export type ZoneAccessRightSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    zoneId?: boolean;
    accessLevel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ZoneAccessRightOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoryId" | "zoneId" | "accessLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["zoneAccessRight"]>;
export type ZoneAccessRightInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type ZoneAccessRightIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type ZoneAccessRightIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ParticipantCategoryDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.EventZoneDefaultArgs<ExtArgs>;
};
export type $ZoneAccessRightPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZoneAccessRight";
    objects: {
        category: Prisma.$ParticipantCategoryPayload<ExtArgs>;
        zone: Prisma.$EventZonePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        categoryId: string;
        zoneId: string;
        accessLevel: $Enums.ZoneAccessLevel;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["zoneAccessRight"]>;
    composites: {};
};
export type ZoneAccessRightGetPayload<S extends boolean | null | undefined | ZoneAccessRightDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload, S>;
export type ZoneAccessRightCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZoneAccessRightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZoneAccessRightCountAggregateInputType | true;
};
export interface ZoneAccessRightDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZoneAccessRight'];
        meta: {
            name: 'ZoneAccessRight';
        };
    };
    /**
     * Find zero or one ZoneAccessRight that matches the filter.
     * @param {ZoneAccessRightFindUniqueArgs} args - Arguments to find a ZoneAccessRight
     * @example
     * // Get one ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneAccessRightFindUniqueArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ZoneAccessRight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneAccessRightFindUniqueOrThrowArgs} args - Arguments to find a ZoneAccessRight
     * @example
     * // Get one ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneAccessRightFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZoneAccessRight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightFindFirstArgs} args - Arguments to find a ZoneAccessRight
     * @example
     * // Get one ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneAccessRightFindFirstArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZoneAccessRight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightFindFirstOrThrowArgs} args - Arguments to find a ZoneAccessRight
     * @example
     * // Get one ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneAccessRightFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ZoneAccessRights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoneAccessRights
     * const zoneAccessRights = await prisma.zoneAccessRight.findMany()
     *
     * // Get first 10 ZoneAccessRights
     * const zoneAccessRights = await prisma.zoneAccessRight.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zoneAccessRightWithIdOnly = await prisma.zoneAccessRight.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ZoneAccessRightFindManyArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ZoneAccessRight.
     * @param {ZoneAccessRightCreateArgs} args - Arguments to create a ZoneAccessRight.
     * @example
     * // Create one ZoneAccessRight
     * const ZoneAccessRight = await prisma.zoneAccessRight.create({
     *   data: {
     *     // ... data to create a ZoneAccessRight
     *   }
     * })
     *
     */
    create<T extends ZoneAccessRightCreateArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightCreateArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ZoneAccessRights.
     * @param {ZoneAccessRightCreateManyArgs} args - Arguments to create many ZoneAccessRights.
     * @example
     * // Create many ZoneAccessRights
     * const zoneAccessRight = await prisma.zoneAccessRight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ZoneAccessRightCreateManyArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ZoneAccessRights and returns the data saved in the database.
     * @param {ZoneAccessRightCreateManyAndReturnArgs} args - Arguments to create many ZoneAccessRights.
     * @example
     * // Create many ZoneAccessRights
     * const zoneAccessRight = await prisma.zoneAccessRight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZoneAccessRights and only return the `id`
     * const zoneAccessRightWithIdOnly = await prisma.zoneAccessRight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ZoneAccessRightCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ZoneAccessRight.
     * @param {ZoneAccessRightDeleteArgs} args - Arguments to delete one ZoneAccessRight.
     * @example
     * // Delete one ZoneAccessRight
     * const ZoneAccessRight = await prisma.zoneAccessRight.delete({
     *   where: {
     *     // ... filter to delete one ZoneAccessRight
     *   }
     * })
     *
     */
    delete<T extends ZoneAccessRightDeleteArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightDeleteArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ZoneAccessRight.
     * @param {ZoneAccessRightUpdateArgs} args - Arguments to update one ZoneAccessRight.
     * @example
     * // Update one ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ZoneAccessRightUpdateArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightUpdateArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ZoneAccessRights.
     * @param {ZoneAccessRightDeleteManyArgs} args - Arguments to filter ZoneAccessRights to delete.
     * @example
     * // Delete a few ZoneAccessRights
     * const { count } = await prisma.zoneAccessRight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ZoneAccessRightDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZoneAccessRightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZoneAccessRights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoneAccessRights
     * const zoneAccessRight = await prisma.zoneAccessRight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ZoneAccessRightUpdateManyArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZoneAccessRights and returns the data updated in the database.
     * @param {ZoneAccessRightUpdateManyAndReturnArgs} args - Arguments to update many ZoneAccessRights.
     * @example
     * // Update many ZoneAccessRights
     * const zoneAccessRight = await prisma.zoneAccessRight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ZoneAccessRights and only return the `id`
     * const zoneAccessRightWithIdOnly = await prisma.zoneAccessRight.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoneAccessRightUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ZoneAccessRight.
     * @param {ZoneAccessRightUpsertArgs} args - Arguments to update or create a ZoneAccessRight.
     * @example
     * // Update or create a ZoneAccessRight
     * const zoneAccessRight = await prisma.zoneAccessRight.upsert({
     *   create: {
     *     // ... data to create a ZoneAccessRight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoneAccessRight we want to update
     *   }
     * })
     */
    upsert<T extends ZoneAccessRightUpsertArgs>(args: Prisma.SelectSubset<T, ZoneAccessRightUpsertArgs<ExtArgs>>): Prisma.Prisma__ZoneAccessRightClient<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ZoneAccessRights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightCountArgs} args - Arguments to filter ZoneAccessRights to count.
     * @example
     * // Count the number of ZoneAccessRights
     * const count = await prisma.zoneAccessRight.count({
     *   where: {
     *     // ... the filter for the ZoneAccessRights we want to count
     *   }
     * })
    **/
    count<T extends ZoneAccessRightCountArgs>(args?: Prisma.Subset<T, ZoneAccessRightCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZoneAccessRightCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ZoneAccessRight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneAccessRightAggregateArgs>(args: Prisma.Subset<T, ZoneAccessRightAggregateArgs>): Prisma.PrismaPromise<GetZoneAccessRightAggregateType<T>>;
    /**
     * Group by ZoneAccessRight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAccessRightGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ZoneAccessRightGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZoneAccessRightGroupByArgs['orderBy'];
    } : {
        orderBy?: ZoneAccessRightGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZoneAccessRightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneAccessRightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ZoneAccessRight model
     */
    readonly fields: ZoneAccessRightFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ZoneAccessRight.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ZoneAccessRightClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.ParticipantCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantCategoryClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ZoneAccessRight model
 */
export interface ZoneAccessRightFieldRefs {
    readonly id: Prisma.FieldRef<"ZoneAccessRight", 'String'>;
    readonly categoryId: Prisma.FieldRef<"ZoneAccessRight", 'String'>;
    readonly zoneId: Prisma.FieldRef<"ZoneAccessRight", 'String'>;
    readonly accessLevel: Prisma.FieldRef<"ZoneAccessRight", 'ZoneAccessLevel'>;
    readonly createdAt: Prisma.FieldRef<"ZoneAccessRight", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ZoneAccessRight", 'DateTime'>;
}
/**
 * ZoneAccessRight findUnique
 */
export type ZoneAccessRightFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ZoneAccessRight to fetch.
     */
    where: Prisma.ZoneAccessRightWhereUniqueInput;
};
/**
 * ZoneAccessRight findUniqueOrThrow
 */
export type ZoneAccessRightFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ZoneAccessRight to fetch.
     */
    where: Prisma.ZoneAccessRightWhereUniqueInput;
};
/**
 * ZoneAccessRight findFirst
 */
export type ZoneAccessRightFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ZoneAccessRight to fetch.
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZoneAccessRights to fetch.
     */
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZoneAccessRights.
     */
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZoneAccessRights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZoneAccessRights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZoneAccessRights.
     */
    distinct?: Prisma.ZoneAccessRightScalarFieldEnum | Prisma.ZoneAccessRightScalarFieldEnum[];
};
/**
 * ZoneAccessRight findFirstOrThrow
 */
export type ZoneAccessRightFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ZoneAccessRight to fetch.
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZoneAccessRights to fetch.
     */
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ZoneAccessRights.
     */
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZoneAccessRights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZoneAccessRights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ZoneAccessRights.
     */
    distinct?: Prisma.ZoneAccessRightScalarFieldEnum | Prisma.ZoneAccessRightScalarFieldEnum[];
};
/**
 * ZoneAccessRight findMany
 */
export type ZoneAccessRightFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ZoneAccessRights to fetch.
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ZoneAccessRights to fetch.
     */
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ZoneAccessRights.
     */
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ZoneAccessRights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ZoneAccessRights.
     */
    skip?: number;
    distinct?: Prisma.ZoneAccessRightScalarFieldEnum | Prisma.ZoneAccessRightScalarFieldEnum[];
};
/**
 * ZoneAccessRight create
 */
export type ZoneAccessRightCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ZoneAccessRight.
     */
    data: Prisma.XOR<Prisma.ZoneAccessRightCreateInput, Prisma.ZoneAccessRightUncheckedCreateInput>;
};
/**
 * ZoneAccessRight createMany
 */
export type ZoneAccessRightCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoneAccessRights.
     */
    data: Prisma.ZoneAccessRightCreateManyInput | Prisma.ZoneAccessRightCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ZoneAccessRight createManyAndReturn
 */
export type ZoneAccessRightCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneAccessRight
     */
    select?: Prisma.ZoneAccessRightSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZoneAccessRight
     */
    omit?: Prisma.ZoneAccessRightOmit<ExtArgs> | null;
    /**
     * The data used to create many ZoneAccessRights.
     */
    data: Prisma.ZoneAccessRightCreateManyInput | Prisma.ZoneAccessRightCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ZoneAccessRightIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ZoneAccessRight update
 */
export type ZoneAccessRightUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ZoneAccessRight.
     */
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateInput, Prisma.ZoneAccessRightUncheckedUpdateInput>;
    /**
     * Choose, which ZoneAccessRight to update.
     */
    where: Prisma.ZoneAccessRightWhereUniqueInput;
};
/**
 * ZoneAccessRight updateMany
 */
export type ZoneAccessRightUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoneAccessRights.
     */
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateManyMutationInput, Prisma.ZoneAccessRightUncheckedUpdateManyInput>;
    /**
     * Filter which ZoneAccessRights to update
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * Limit how many ZoneAccessRights to update.
     */
    limit?: number;
};
/**
 * ZoneAccessRight updateManyAndReturn
 */
export type ZoneAccessRightUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneAccessRight
     */
    select?: Prisma.ZoneAccessRightSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ZoneAccessRight
     */
    omit?: Prisma.ZoneAccessRightOmit<ExtArgs> | null;
    /**
     * The data used to update ZoneAccessRights.
     */
    data: Prisma.XOR<Prisma.ZoneAccessRightUpdateManyMutationInput, Prisma.ZoneAccessRightUncheckedUpdateManyInput>;
    /**
     * Filter which ZoneAccessRights to update
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * Limit how many ZoneAccessRights to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ZoneAccessRightIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ZoneAccessRight upsert
 */
export type ZoneAccessRightUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ZoneAccessRight to update in case it exists.
     */
    where: Prisma.ZoneAccessRightWhereUniqueInput;
    /**
     * In case the ZoneAccessRight found by the `where` argument doesn't exist, create a new ZoneAccessRight with this data.
     */
    create: Prisma.XOR<Prisma.ZoneAccessRightCreateInput, Prisma.ZoneAccessRightUncheckedCreateInput>;
    /**
     * In case the ZoneAccessRight was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ZoneAccessRightUpdateInput, Prisma.ZoneAccessRightUncheckedUpdateInput>;
};
/**
 * ZoneAccessRight delete
 */
export type ZoneAccessRightDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ZoneAccessRight to delete.
     */
    where: Prisma.ZoneAccessRightWhereUniqueInput;
};
/**
 * ZoneAccessRight deleteMany
 */
export type ZoneAccessRightDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneAccessRights to delete
     */
    where?: Prisma.ZoneAccessRightWhereInput;
    /**
     * Limit how many ZoneAccessRights to delete.
     */
    limit?: number;
};
/**
 * ZoneAccessRight without action
 */
export type ZoneAccessRightDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ZoneAccessRight.d.ts.map