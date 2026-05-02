import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LeisureFavorite
 *
 */
export type LeisureFavoriteModel = runtime.Types.Result.DefaultSelection<Prisma.$LeisureFavoritePayload>;
export type AggregateLeisureFavorite = {
    _count: LeisureFavoriteCountAggregateOutputType | null;
    _min: LeisureFavoriteMinAggregateOutputType | null;
    _max: LeisureFavoriteMaxAggregateOutputType | null;
};
export type LeisureFavoriteMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    leisureItemId: string | null;
    createdAt: Date | null;
};
export type LeisureFavoriteMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    leisureItemId: string | null;
    createdAt: Date | null;
};
export type LeisureFavoriteCountAggregateOutputType = {
    id: number;
    userId: number;
    leisureItemId: number;
    createdAt: number;
    _all: number;
};
export type LeisureFavoriteMinAggregateInputType = {
    id?: true;
    userId?: true;
    leisureItemId?: true;
    createdAt?: true;
};
export type LeisureFavoriteMaxAggregateInputType = {
    id?: true;
    userId?: true;
    leisureItemId?: true;
    createdAt?: true;
};
export type LeisureFavoriteCountAggregateInputType = {
    id?: true;
    userId?: true;
    leisureItemId?: true;
    createdAt?: true;
    _all?: true;
};
export type LeisureFavoriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureFavorite to aggregate.
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureFavorites to fetch.
     */
    orderBy?: Prisma.LeisureFavoriteOrderByWithRelationInput | Prisma.LeisureFavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LeisureFavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureFavorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureFavorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeisureFavorites
    **/
    _count?: true | LeisureFavoriteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LeisureFavoriteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LeisureFavoriteMaxAggregateInputType;
};
export type GetLeisureFavoriteAggregateType<T extends LeisureFavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateLeisureFavorite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeisureFavorite[P]> : Prisma.GetScalarType<T[P], AggregateLeisureFavorite[P]>;
};
export type LeisureFavoriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureFavoriteWhereInput;
    orderBy?: Prisma.LeisureFavoriteOrderByWithAggregationInput | Prisma.LeisureFavoriteOrderByWithAggregationInput[];
    by: Prisma.LeisureFavoriteScalarFieldEnum[] | Prisma.LeisureFavoriteScalarFieldEnum;
    having?: Prisma.LeisureFavoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeisureFavoriteCountAggregateInputType | true;
    _min?: LeisureFavoriteMinAggregateInputType;
    _max?: LeisureFavoriteMaxAggregateInputType;
};
export type LeisureFavoriteGroupByOutputType = {
    id: string;
    userId: string;
    leisureItemId: string;
    createdAt: Date;
    _count: LeisureFavoriteCountAggregateOutputType | null;
    _min: LeisureFavoriteMinAggregateOutputType | null;
    _max: LeisureFavoriteMaxAggregateOutputType | null;
};
type GetLeisureFavoriteGroupByPayload<T extends LeisureFavoriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeisureFavoriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeisureFavoriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeisureFavoriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeisureFavoriteGroupByOutputType[P]>;
}>>;
export type LeisureFavoriteWhereInput = {
    AND?: Prisma.LeisureFavoriteWhereInput | Prisma.LeisureFavoriteWhereInput[];
    OR?: Prisma.LeisureFavoriteWhereInput[];
    NOT?: Prisma.LeisureFavoriteWhereInput | Prisma.LeisureFavoriteWhereInput[];
    id?: Prisma.StringFilter<"LeisureFavorite"> | string;
    userId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    leisureItemId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureFavorite"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    leisureItem?: Prisma.XOR<Prisma.LeisureItemScalarRelationFilter, Prisma.LeisureItemWhereInput>;
};
export type LeisureFavoriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    leisureItemId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    leisureItem?: Prisma.LeisureItemOrderByWithRelationInput;
};
export type LeisureFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_leisureItemId?: Prisma.LeisureFavoriteUserIdLeisureItemIdCompoundUniqueInput;
    AND?: Prisma.LeisureFavoriteWhereInput | Prisma.LeisureFavoriteWhereInput[];
    OR?: Prisma.LeisureFavoriteWhereInput[];
    NOT?: Prisma.LeisureFavoriteWhereInput | Prisma.LeisureFavoriteWhereInput[];
    userId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    leisureItemId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureFavorite"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    leisureItem?: Prisma.XOR<Prisma.LeisureItemScalarRelationFilter, Prisma.LeisureItemWhereInput>;
}, "id" | "userId_leisureItemId">;
export type LeisureFavoriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    leisureItemId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeisureFavoriteCountOrderByAggregateInput;
    _max?: Prisma.LeisureFavoriteMaxOrderByAggregateInput;
    _min?: Prisma.LeisureFavoriteMinOrderByAggregateInput;
};
export type LeisureFavoriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeisureFavoriteScalarWhereWithAggregatesInput | Prisma.LeisureFavoriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeisureFavoriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeisureFavoriteScalarWhereWithAggregatesInput | Prisma.LeisureFavoriteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeisureFavorite"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"LeisureFavorite"> | string;
    leisureItemId?: Prisma.StringWithAggregatesFilter<"LeisureFavorite"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeisureFavorite"> | Date | string;
};
export type LeisureFavoriteCreateInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLeisureFavoritesInput;
    leisureItem: Prisma.LeisureItemCreateNestedOneWithoutFavoritedByInput;
};
export type LeisureFavoriteUncheckedCreateInput = {
    id?: string;
    userId: string;
    leisureItemId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLeisureFavoritesNestedInput;
    leisureItem?: Prisma.LeisureItemUpdateOneRequiredWithoutFavoritedByNestedInput;
};
export type LeisureFavoriteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    leisureItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteCreateManyInput = {
    id?: string;
    userId: string;
    leisureItemId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    leisureItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteListRelationFilter = {
    every?: Prisma.LeisureFavoriteWhereInput;
    some?: Prisma.LeisureFavoriteWhereInput;
    none?: Prisma.LeisureFavoriteWhereInput;
};
export type LeisureFavoriteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeisureFavoriteUserIdLeisureItemIdCompoundUniqueInput = {
    userId: string;
    leisureItemId: string;
};
export type LeisureFavoriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    leisureItemId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureFavoriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    leisureItemId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureFavoriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    leisureItemId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureFavoriteCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput> | Prisma.LeisureFavoriteCreateWithoutUserInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput | Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyUserInputEnvelope;
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
};
export type LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput> | Prisma.LeisureFavoriteCreateWithoutUserInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput | Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyUserInputEnvelope;
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
};
export type LeisureFavoriteUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput> | Prisma.LeisureFavoriteCreateWithoutUserInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput | Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutUserInput | Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyUserInputEnvelope;
    set?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    disconnect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    delete?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    update?: Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutUserInput | Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LeisureFavoriteUpdateManyWithWhereWithoutUserInput | Prisma.LeisureFavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
};
export type LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput> | Prisma.LeisureFavoriteCreateWithoutUserInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput | Prisma.LeisureFavoriteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutUserInput | Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyUserInputEnvelope;
    set?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    disconnect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    delete?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    update?: Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutUserInput | Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LeisureFavoriteUpdateManyWithWhereWithoutUserInput | Prisma.LeisureFavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
};
export type LeisureFavoriteCreateNestedManyWithoutLeisureItemInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput> | Prisma.LeisureFavoriteCreateWithoutLeisureItemInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput | Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyLeisureItemInputEnvelope;
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
};
export type LeisureFavoriteUncheckedCreateNestedManyWithoutLeisureItemInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput> | Prisma.LeisureFavoriteCreateWithoutLeisureItemInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput | Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyLeisureItemInputEnvelope;
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
};
export type LeisureFavoriteUpdateManyWithoutLeisureItemNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput> | Prisma.LeisureFavoriteCreateWithoutLeisureItemInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput | Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput[];
    upsert?: Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutLeisureItemInput | Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutLeisureItemInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyLeisureItemInputEnvelope;
    set?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    disconnect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    delete?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    update?: Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutLeisureItemInput | Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutLeisureItemInput[];
    updateMany?: Prisma.LeisureFavoriteUpdateManyWithWhereWithoutLeisureItemInput | Prisma.LeisureFavoriteUpdateManyWithWhereWithoutLeisureItemInput[];
    deleteMany?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
};
export type LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput> | Prisma.LeisureFavoriteCreateWithoutLeisureItemInput[] | Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput[];
    connectOrCreate?: Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput | Prisma.LeisureFavoriteCreateOrConnectWithoutLeisureItemInput[];
    upsert?: Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutLeisureItemInput | Prisma.LeisureFavoriteUpsertWithWhereUniqueWithoutLeisureItemInput[];
    createMany?: Prisma.LeisureFavoriteCreateManyLeisureItemInputEnvelope;
    set?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    disconnect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    delete?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    connect?: Prisma.LeisureFavoriteWhereUniqueInput | Prisma.LeisureFavoriteWhereUniqueInput[];
    update?: Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutLeisureItemInput | Prisma.LeisureFavoriteUpdateWithWhereUniqueWithoutLeisureItemInput[];
    updateMany?: Prisma.LeisureFavoriteUpdateManyWithWhereWithoutLeisureItemInput | Prisma.LeisureFavoriteUpdateManyWithWhereWithoutLeisureItemInput[];
    deleteMany?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
};
export type LeisureFavoriteCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    leisureItem: Prisma.LeisureItemCreateNestedOneWithoutFavoritedByInput;
};
export type LeisureFavoriteUncheckedCreateWithoutUserInput = {
    id?: string;
    leisureItemId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteCreateOrConnectWithoutUserInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput>;
};
export type LeisureFavoriteCreateManyUserInputEnvelope = {
    data: Prisma.LeisureFavoriteCreateManyUserInput | Prisma.LeisureFavoriteCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LeisureFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeisureFavoriteUpdateWithoutUserInput, Prisma.LeisureFavoriteUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutUserInput, Prisma.LeisureFavoriteUncheckedCreateWithoutUserInput>;
};
export type LeisureFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateWithoutUserInput, Prisma.LeisureFavoriteUncheckedUpdateWithoutUserInput>;
};
export type LeisureFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LeisureFavoriteScalarWhereInput;
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateManyMutationInput, Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserInput>;
};
export type LeisureFavoriteScalarWhereInput = {
    AND?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
    OR?: Prisma.LeisureFavoriteScalarWhereInput[];
    NOT?: Prisma.LeisureFavoriteScalarWhereInput | Prisma.LeisureFavoriteScalarWhereInput[];
    id?: Prisma.StringFilter<"LeisureFavorite"> | string;
    userId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    leisureItemId?: Prisma.StringFilter<"LeisureFavorite"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureFavorite"> | Date | string;
};
export type LeisureFavoriteCreateWithoutLeisureItemInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLeisureFavoritesInput;
};
export type LeisureFavoriteUncheckedCreateWithoutLeisureItemInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteCreateOrConnectWithoutLeisureItemInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput>;
};
export type LeisureFavoriteCreateManyLeisureItemInputEnvelope = {
    data: Prisma.LeisureFavoriteCreateManyLeisureItemInput | Prisma.LeisureFavoriteCreateManyLeisureItemInput[];
    skipDuplicates?: boolean;
};
export type LeisureFavoriteUpsertWithWhereUniqueWithoutLeisureItemInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeisureFavoriteUpdateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedUpdateWithoutLeisureItemInput>;
    create: Prisma.XOR<Prisma.LeisureFavoriteCreateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedCreateWithoutLeisureItemInput>;
};
export type LeisureFavoriteUpdateWithWhereUniqueWithoutLeisureItemInput = {
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateWithoutLeisureItemInput, Prisma.LeisureFavoriteUncheckedUpdateWithoutLeisureItemInput>;
};
export type LeisureFavoriteUpdateManyWithWhereWithoutLeisureItemInput = {
    where: Prisma.LeisureFavoriteScalarWhereInput;
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateManyMutationInput, Prisma.LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemInput>;
};
export type LeisureFavoriteCreateManyUserInput = {
    id?: string;
    leisureItemId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureItem?: Prisma.LeisureItemUpdateOneRequiredWithoutFavoritedByNestedInput;
};
export type LeisureFavoriteUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leisureItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leisureItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteCreateManyLeisureItemInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type LeisureFavoriteUpdateWithoutLeisureItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLeisureFavoritesNestedInput;
};
export type LeisureFavoriteUncheckedUpdateWithoutLeisureItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureFavoriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    leisureItemId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureFavorite"]>;
export type LeisureFavoriteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    leisureItemId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureFavorite"]>;
export type LeisureFavoriteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    leisureItemId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureFavorite"]>;
export type LeisureFavoriteSelectScalar = {
    id?: boolean;
    userId?: boolean;
    leisureItemId?: boolean;
    createdAt?: boolean;
};
export type LeisureFavoriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "leisureItemId" | "createdAt", ExtArgs["result"]["leisureFavorite"]>;
export type LeisureFavoriteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
};
export type LeisureFavoriteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
};
export type LeisureFavoriteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    leisureItem?: boolean | Prisma.LeisureItemDefaultArgs<ExtArgs>;
};
export type $LeisureFavoritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeisureFavorite";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        leisureItem: Prisma.$LeisureItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        leisureItemId: string;
        createdAt: Date;
    }, ExtArgs["result"]["leisureFavorite"]>;
    composites: {};
};
export type LeisureFavoriteGetPayload<S extends boolean | null | undefined | LeisureFavoriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload, S>;
export type LeisureFavoriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeisureFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeisureFavoriteCountAggregateInputType | true;
};
export interface LeisureFavoriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeisureFavorite'];
        meta: {
            name: 'LeisureFavorite';
        };
    };
    /**
     * Find zero or one LeisureFavorite that matches the filter.
     * @param {LeisureFavoriteFindUniqueArgs} args - Arguments to find a LeisureFavorite
     * @example
     * // Get one LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeisureFavoriteFindUniqueArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LeisureFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeisureFavoriteFindUniqueOrThrowArgs} args - Arguments to find a LeisureFavorite
     * @example
     * // Get one LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeisureFavoriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteFindFirstArgs} args - Arguments to find a LeisureFavorite
     * @example
     * // Get one LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeisureFavoriteFindFirstArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteFindFirstOrThrowArgs} args - Arguments to find a LeisureFavorite
     * @example
     * // Get one LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeisureFavoriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LeisureFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeisureFavorites
     * const leisureFavorites = await prisma.leisureFavorite.findMany()
     *
     * // Get first 10 LeisureFavorites
     * const leisureFavorites = await prisma.leisureFavorite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leisureFavoriteWithIdOnly = await prisma.leisureFavorite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeisureFavoriteFindManyArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LeisureFavorite.
     * @param {LeisureFavoriteCreateArgs} args - Arguments to create a LeisureFavorite.
     * @example
     * // Create one LeisureFavorite
     * const LeisureFavorite = await prisma.leisureFavorite.create({
     *   data: {
     *     // ... data to create a LeisureFavorite
     *   }
     * })
     *
     */
    create<T extends LeisureFavoriteCreateArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteCreateArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LeisureFavorites.
     * @param {LeisureFavoriteCreateManyArgs} args - Arguments to create many LeisureFavorites.
     * @example
     * // Create many LeisureFavorites
     * const leisureFavorite = await prisma.leisureFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeisureFavoriteCreateManyArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LeisureFavorites and returns the data saved in the database.
     * @param {LeisureFavoriteCreateManyAndReturnArgs} args - Arguments to create many LeisureFavorites.
     * @example
     * // Create many LeisureFavorites
     * const leisureFavorite = await prisma.leisureFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeisureFavorites and only return the `id`
     * const leisureFavoriteWithIdOnly = await prisma.leisureFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeisureFavoriteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LeisureFavorite.
     * @param {LeisureFavoriteDeleteArgs} args - Arguments to delete one LeisureFavorite.
     * @example
     * // Delete one LeisureFavorite
     * const LeisureFavorite = await prisma.leisureFavorite.delete({
     *   where: {
     *     // ... filter to delete one LeisureFavorite
     *   }
     * })
     *
     */
    delete<T extends LeisureFavoriteDeleteArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteDeleteArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LeisureFavorite.
     * @param {LeisureFavoriteUpdateArgs} args - Arguments to update one LeisureFavorite.
     * @example
     * // Update one LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeisureFavoriteUpdateArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteUpdateArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LeisureFavorites.
     * @param {LeisureFavoriteDeleteManyArgs} args - Arguments to filter LeisureFavorites to delete.
     * @example
     * // Delete a few LeisureFavorites
     * const { count } = await prisma.leisureFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeisureFavoriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeisureFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeisureFavorites
     * const leisureFavorite = await prisma.leisureFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeisureFavoriteUpdateManyArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureFavorites and returns the data updated in the database.
     * @param {LeisureFavoriteUpdateManyAndReturnArgs} args - Arguments to update many LeisureFavorites.
     * @example
     * // Update many LeisureFavorites
     * const leisureFavorite = await prisma.leisureFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeisureFavorites and only return the `id`
     * const leisureFavoriteWithIdOnly = await prisma.leisureFavorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeisureFavoriteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LeisureFavorite.
     * @param {LeisureFavoriteUpsertArgs} args - Arguments to update or create a LeisureFavorite.
     * @example
     * // Update or create a LeisureFavorite
     * const leisureFavorite = await prisma.leisureFavorite.upsert({
     *   create: {
     *     // ... data to create a LeisureFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeisureFavorite we want to update
     *   }
     * })
     */
    upsert<T extends LeisureFavoriteUpsertArgs>(args: Prisma.SelectSubset<T, LeisureFavoriteUpsertArgs<ExtArgs>>): Prisma.Prisma__LeisureFavoriteClient<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LeisureFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteCountArgs} args - Arguments to filter LeisureFavorites to count.
     * @example
     * // Count the number of LeisureFavorites
     * const count = await prisma.leisureFavorite.count({
     *   where: {
     *     // ... the filter for the LeisureFavorites we want to count
     *   }
     * })
    **/
    count<T extends LeisureFavoriteCountArgs>(args?: Prisma.Subset<T, LeisureFavoriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeisureFavoriteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LeisureFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeisureFavoriteAggregateArgs>(args: Prisma.Subset<T, LeisureFavoriteAggregateArgs>): Prisma.PrismaPromise<GetLeisureFavoriteAggregateType<T>>;
    /**
     * Group by LeisureFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureFavoriteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LeisureFavoriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeisureFavoriteGroupByArgs['orderBy'];
    } : {
        orderBy?: LeisureFavoriteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeisureFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeisureFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeisureFavorite model
     */
    readonly fields: LeisureFavoriteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LeisureFavorite.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LeisureFavoriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leisureItem<T extends Prisma.LeisureItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeisureItemDefaultArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LeisureFavorite model
 */
export interface LeisureFavoriteFieldRefs {
    readonly id: Prisma.FieldRef<"LeisureFavorite", 'String'>;
    readonly userId: Prisma.FieldRef<"LeisureFavorite", 'String'>;
    readonly leisureItemId: Prisma.FieldRef<"LeisureFavorite", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LeisureFavorite", 'DateTime'>;
}
/**
 * LeisureFavorite findUnique
 */
export type LeisureFavoriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureFavorite to fetch.
     */
    where: Prisma.LeisureFavoriteWhereUniqueInput;
};
/**
 * LeisureFavorite findUniqueOrThrow
 */
export type LeisureFavoriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureFavorite to fetch.
     */
    where: Prisma.LeisureFavoriteWhereUniqueInput;
};
/**
 * LeisureFavorite findFirst
 */
export type LeisureFavoriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureFavorite to fetch.
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureFavorites to fetch.
     */
    orderBy?: Prisma.LeisureFavoriteOrderByWithRelationInput | Prisma.LeisureFavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureFavorites.
     */
    cursor?: Prisma.LeisureFavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureFavorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureFavorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureFavorites.
     */
    distinct?: Prisma.LeisureFavoriteScalarFieldEnum | Prisma.LeisureFavoriteScalarFieldEnum[];
};
/**
 * LeisureFavorite findFirstOrThrow
 */
export type LeisureFavoriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureFavorite to fetch.
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureFavorites to fetch.
     */
    orderBy?: Prisma.LeisureFavoriteOrderByWithRelationInput | Prisma.LeisureFavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureFavorites.
     */
    cursor?: Prisma.LeisureFavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureFavorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureFavorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureFavorites.
     */
    distinct?: Prisma.LeisureFavoriteScalarFieldEnum | Prisma.LeisureFavoriteScalarFieldEnum[];
};
/**
 * LeisureFavorite findMany
 */
export type LeisureFavoriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureFavorites to fetch.
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureFavorites to fetch.
     */
    orderBy?: Prisma.LeisureFavoriteOrderByWithRelationInput | Prisma.LeisureFavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeisureFavorites.
     */
    cursor?: Prisma.LeisureFavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureFavorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureFavorites.
     */
    skip?: number;
    distinct?: Prisma.LeisureFavoriteScalarFieldEnum | Prisma.LeisureFavoriteScalarFieldEnum[];
};
/**
 * LeisureFavorite create
 */
export type LeisureFavoriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to create a LeisureFavorite.
     */
    data: Prisma.XOR<Prisma.LeisureFavoriteCreateInput, Prisma.LeisureFavoriteUncheckedCreateInput>;
};
/**
 * LeisureFavorite createMany
 */
export type LeisureFavoriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeisureFavorites.
     */
    data: Prisma.LeisureFavoriteCreateManyInput | Prisma.LeisureFavoriteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeisureFavorite createManyAndReturn
 */
export type LeisureFavoriteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * The data used to create many LeisureFavorites.
     */
    data: Prisma.LeisureFavoriteCreateManyInput | Prisma.LeisureFavoriteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LeisureFavorite update
 */
export type LeisureFavoriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to update a LeisureFavorite.
     */
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateInput, Prisma.LeisureFavoriteUncheckedUpdateInput>;
    /**
     * Choose, which LeisureFavorite to update.
     */
    where: Prisma.LeisureFavoriteWhereUniqueInput;
};
/**
 * LeisureFavorite updateMany
 */
export type LeisureFavoriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LeisureFavorites.
     */
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateManyMutationInput, Prisma.LeisureFavoriteUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureFavorites to update
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * Limit how many LeisureFavorites to update.
     */
    limit?: number;
};
/**
 * LeisureFavorite updateManyAndReturn
 */
export type LeisureFavoriteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * The data used to update LeisureFavorites.
     */
    data: Prisma.XOR<Prisma.LeisureFavoriteUpdateManyMutationInput, Prisma.LeisureFavoriteUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureFavorites to update
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * Limit how many LeisureFavorites to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LeisureFavorite upsert
 */
export type LeisureFavoriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * The filter to search for the LeisureFavorite to update in case it exists.
     */
    where: Prisma.LeisureFavoriteWhereUniqueInput;
    /**
     * In case the LeisureFavorite found by the `where` argument doesn't exist, create a new LeisureFavorite with this data.
     */
    create: Prisma.XOR<Prisma.LeisureFavoriteCreateInput, Prisma.LeisureFavoriteUncheckedCreateInput>;
    /**
     * In case the LeisureFavorite was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LeisureFavoriteUpdateInput, Prisma.LeisureFavoriteUncheckedUpdateInput>;
};
/**
 * LeisureFavorite delete
 */
export type LeisureFavoriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    /**
     * Filter which LeisureFavorite to delete.
     */
    where: Prisma.LeisureFavoriteWhereUniqueInput;
};
/**
 * LeisureFavorite deleteMany
 */
export type LeisureFavoriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureFavorites to delete
     */
    where?: Prisma.LeisureFavoriteWhereInput;
    /**
     * Limit how many LeisureFavorites to delete.
     */
    limit?: number;
};
/**
 * LeisureFavorite without action
 */
export type LeisureFavoriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LeisureFavorite.d.ts.map