import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CommunityEngagement
 *
 */
export type CommunityEngagementModel = runtime.Types.Result.DefaultSelection<Prisma.$CommunityEngagementPayload>;
export type AggregateCommunityEngagement = {
    _count: CommunityEngagementCountAggregateOutputType | null;
    _min: CommunityEngagementMinAggregateOutputType | null;
    _max: CommunityEngagementMaxAggregateOutputType | null;
};
export type CommunityEngagementMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    postId: string | null;
    type: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type CommunityEngagementMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    postId: string | null;
    type: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type CommunityEngagementCountAggregateOutputType = {
    id: number;
    userId: number;
    postId: number;
    type: number;
    content: number;
    createdAt: number;
    _all: number;
};
export type CommunityEngagementMinAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    type?: true;
    content?: true;
    createdAt?: true;
};
export type CommunityEngagementMaxAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    type?: true;
    content?: true;
    createdAt?: true;
};
export type CommunityEngagementCountAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    type?: true;
    content?: true;
    createdAt?: true;
    _all?: true;
};
export type CommunityEngagementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityEngagement to aggregate.
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommunityEngagements to fetch.
     */
    orderBy?: Prisma.CommunityEngagementOrderByWithRelationInput | Prisma.CommunityEngagementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommunityEngagementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommunityEngagements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommunityEngagements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommunityEngagements
    **/
    _count?: true | CommunityEngagementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommunityEngagementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommunityEngagementMaxAggregateInputType;
};
export type GetCommunityEngagementAggregateType<T extends CommunityEngagementAggregateArgs> = {
    [P in keyof T & keyof AggregateCommunityEngagement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommunityEngagement[P]> : Prisma.GetScalarType<T[P], AggregateCommunityEngagement[P]>;
};
export type CommunityEngagementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommunityEngagementWhereInput;
    orderBy?: Prisma.CommunityEngagementOrderByWithAggregationInput | Prisma.CommunityEngagementOrderByWithAggregationInput[];
    by: Prisma.CommunityEngagementScalarFieldEnum[] | Prisma.CommunityEngagementScalarFieldEnum;
    having?: Prisma.CommunityEngagementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommunityEngagementCountAggregateInputType | true;
    _min?: CommunityEngagementMinAggregateInputType;
    _max?: CommunityEngagementMaxAggregateInputType;
};
export type CommunityEngagementGroupByOutputType = {
    id: string;
    userId: string;
    postId: string;
    type: string;
    content: string;
    createdAt: Date;
    _count: CommunityEngagementCountAggregateOutputType | null;
    _min: CommunityEngagementMinAggregateOutputType | null;
    _max: CommunityEngagementMaxAggregateOutputType | null;
};
type GetCommunityEngagementGroupByPayload<T extends CommunityEngagementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommunityEngagementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommunityEngagementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommunityEngagementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommunityEngagementGroupByOutputType[P]>;
}>>;
export type CommunityEngagementWhereInput = {
    AND?: Prisma.CommunityEngagementWhereInput | Prisma.CommunityEngagementWhereInput[];
    OR?: Prisma.CommunityEngagementWhereInput[];
    NOT?: Prisma.CommunityEngagementWhereInput | Prisma.CommunityEngagementWhereInput[];
    id?: Prisma.StringFilter<"CommunityEngagement"> | string;
    userId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    postId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    type?: Prisma.StringFilter<"CommunityEngagement"> | string;
    content?: Prisma.StringFilter<"CommunityEngagement"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommunityEngagement"> | Date | string;
    post?: Prisma.XOR<Prisma.CommunityPostScalarRelationFilter, Prisma.CommunityPostWhereInput>;
};
export type CommunityEngagementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    post?: Prisma.CommunityPostOrderByWithRelationInput;
};
export type CommunityEngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_postId_type?: Prisma.CommunityEngagementUserIdPostIdTypeCompoundUniqueInput;
    AND?: Prisma.CommunityEngagementWhereInput | Prisma.CommunityEngagementWhereInput[];
    OR?: Prisma.CommunityEngagementWhereInput[];
    NOT?: Prisma.CommunityEngagementWhereInput | Prisma.CommunityEngagementWhereInput[];
    userId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    postId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    type?: Prisma.StringFilter<"CommunityEngagement"> | string;
    content?: Prisma.StringFilter<"CommunityEngagement"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommunityEngagement"> | Date | string;
    post?: Prisma.XOR<Prisma.CommunityPostScalarRelationFilter, Prisma.CommunityPostWhereInput>;
}, "id" | "userId_postId_type">;
export type CommunityEngagementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CommunityEngagementCountOrderByAggregateInput;
    _max?: Prisma.CommunityEngagementMaxOrderByAggregateInput;
    _min?: Prisma.CommunityEngagementMinOrderByAggregateInput;
};
export type CommunityEngagementScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommunityEngagementScalarWhereWithAggregatesInput | Prisma.CommunityEngagementScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommunityEngagementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommunityEngagementScalarWhereWithAggregatesInput | Prisma.CommunityEngagementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommunityEngagement"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CommunityEngagement"> | string;
    postId?: Prisma.StringWithAggregatesFilter<"CommunityEngagement"> | string;
    type?: Prisma.StringWithAggregatesFilter<"CommunityEngagement"> | string;
    content?: Prisma.StringWithAggregatesFilter<"CommunityEngagement"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CommunityEngagement"> | Date | string;
};
export type CommunityEngagementCreateInput = {
    id?: string;
    userId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
    post: Prisma.CommunityPostCreateNestedOneWithoutEngagementsInput;
};
export type CommunityEngagementUncheckedCreateInput = {
    id?: string;
    userId: string;
    postId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
};
export type CommunityEngagementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.CommunityPostUpdateOneRequiredWithoutEngagementsNestedInput;
};
export type CommunityEngagementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementCreateManyInput = {
    id?: string;
    userId: string;
    postId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
};
export type CommunityEngagementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementListRelationFilter = {
    every?: Prisma.CommunityEngagementWhereInput;
    some?: Prisma.CommunityEngagementWhereInput;
    none?: Prisma.CommunityEngagementWhereInput;
};
export type CommunityEngagementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommunityEngagementUserIdPostIdTypeCompoundUniqueInput = {
    userId: string;
    postId: string;
    type: string;
};
export type CommunityEngagementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommunityEngagementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommunityEngagementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommunityEngagementCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput> | Prisma.CommunityEngagementCreateWithoutPostInput[] | Prisma.CommunityEngagementUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommunityEngagementCreateOrConnectWithoutPostInput | Prisma.CommunityEngagementCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.CommunityEngagementCreateManyPostInputEnvelope;
    connect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
};
export type CommunityEngagementUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput> | Prisma.CommunityEngagementCreateWithoutPostInput[] | Prisma.CommunityEngagementUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommunityEngagementCreateOrConnectWithoutPostInput | Prisma.CommunityEngagementCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.CommunityEngagementCreateManyPostInputEnvelope;
    connect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
};
export type CommunityEngagementUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput> | Prisma.CommunityEngagementCreateWithoutPostInput[] | Prisma.CommunityEngagementUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommunityEngagementCreateOrConnectWithoutPostInput | Prisma.CommunityEngagementCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.CommunityEngagementUpsertWithWhereUniqueWithoutPostInput | Prisma.CommunityEngagementUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.CommunityEngagementCreateManyPostInputEnvelope;
    set?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    disconnect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    delete?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    connect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    update?: Prisma.CommunityEngagementUpdateWithWhereUniqueWithoutPostInput | Prisma.CommunityEngagementUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.CommunityEngagementUpdateManyWithWhereWithoutPostInput | Prisma.CommunityEngagementUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.CommunityEngagementScalarWhereInput | Prisma.CommunityEngagementScalarWhereInput[];
};
export type CommunityEngagementUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput> | Prisma.CommunityEngagementCreateWithoutPostInput[] | Prisma.CommunityEngagementUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommunityEngagementCreateOrConnectWithoutPostInput | Prisma.CommunityEngagementCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.CommunityEngagementUpsertWithWhereUniqueWithoutPostInput | Prisma.CommunityEngagementUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.CommunityEngagementCreateManyPostInputEnvelope;
    set?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    disconnect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    delete?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    connect?: Prisma.CommunityEngagementWhereUniqueInput | Prisma.CommunityEngagementWhereUniqueInput[];
    update?: Prisma.CommunityEngagementUpdateWithWhereUniqueWithoutPostInput | Prisma.CommunityEngagementUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.CommunityEngagementUpdateManyWithWhereWithoutPostInput | Prisma.CommunityEngagementUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.CommunityEngagementScalarWhereInput | Prisma.CommunityEngagementScalarWhereInput[];
};
export type CommunityEngagementCreateWithoutPostInput = {
    id?: string;
    userId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
};
export type CommunityEngagementUncheckedCreateWithoutPostInput = {
    id?: string;
    userId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
};
export type CommunityEngagementCreateOrConnectWithoutPostInput = {
    where: Prisma.CommunityEngagementWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput>;
};
export type CommunityEngagementCreateManyPostInputEnvelope = {
    data: Prisma.CommunityEngagementCreateManyPostInput | Prisma.CommunityEngagementCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type CommunityEngagementUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.CommunityEngagementWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommunityEngagementUpdateWithoutPostInput, Prisma.CommunityEngagementUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.CommunityEngagementCreateWithoutPostInput, Prisma.CommunityEngagementUncheckedCreateWithoutPostInput>;
};
export type CommunityEngagementUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.CommunityEngagementWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommunityEngagementUpdateWithoutPostInput, Prisma.CommunityEngagementUncheckedUpdateWithoutPostInput>;
};
export type CommunityEngagementUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.CommunityEngagementScalarWhereInput;
    data: Prisma.XOR<Prisma.CommunityEngagementUpdateManyMutationInput, Prisma.CommunityEngagementUncheckedUpdateManyWithoutPostInput>;
};
export type CommunityEngagementScalarWhereInput = {
    AND?: Prisma.CommunityEngagementScalarWhereInput | Prisma.CommunityEngagementScalarWhereInput[];
    OR?: Prisma.CommunityEngagementScalarWhereInput[];
    NOT?: Prisma.CommunityEngagementScalarWhereInput | Prisma.CommunityEngagementScalarWhereInput[];
    id?: Prisma.StringFilter<"CommunityEngagement"> | string;
    userId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    postId?: Prisma.StringFilter<"CommunityEngagement"> | string;
    type?: Prisma.StringFilter<"CommunityEngagement"> | string;
    content?: Prisma.StringFilter<"CommunityEngagement"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommunityEngagement"> | Date | string;
};
export type CommunityEngagementCreateManyPostInput = {
    id?: string;
    userId: string;
    type: string;
    content?: string;
    createdAt?: Date | string;
};
export type CommunityEngagementUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommunityEngagementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["communityEngagement"]>;
export type CommunityEngagementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["communityEngagement"]>;
export type CommunityEngagementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["communityEngagement"]>;
export type CommunityEngagementSelectScalar = {
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
};
export type CommunityEngagementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "postId" | "type" | "content" | "createdAt", ExtArgs["result"]["communityEngagement"]>;
export type CommunityEngagementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
};
export type CommunityEngagementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
};
export type CommunityEngagementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.CommunityPostDefaultArgs<ExtArgs>;
};
export type $CommunityEngagementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommunityEngagement";
    objects: {
        post: Prisma.$CommunityPostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        postId: string;
        type: string;
        content: string;
        createdAt: Date;
    }, ExtArgs["result"]["communityEngagement"]>;
    composites: {};
};
export type CommunityEngagementGetPayload<S extends boolean | null | undefined | CommunityEngagementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload, S>;
export type CommunityEngagementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommunityEngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommunityEngagementCountAggregateInputType | true;
};
export interface CommunityEngagementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommunityEngagement'];
        meta: {
            name: 'CommunityEngagement';
        };
    };
    /**
     * Find zero or one CommunityEngagement that matches the filter.
     * @param {CommunityEngagementFindUniqueArgs} args - Arguments to find a CommunityEngagement
     * @example
     * // Get one CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityEngagementFindUniqueArgs>(args: Prisma.SelectSubset<T, CommunityEngagementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CommunityEngagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityEngagementFindUniqueOrThrowArgs} args - Arguments to find a CommunityEngagement
     * @example
     * // Get one CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityEngagementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommunityEngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommunityEngagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementFindFirstArgs} args - Arguments to find a CommunityEngagement
     * @example
     * // Get one CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityEngagementFindFirstArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommunityEngagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementFindFirstOrThrowArgs} args - Arguments to find a CommunityEngagement
     * @example
     * // Get one CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityEngagementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CommunityEngagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityEngagements
     * const communityEngagements = await prisma.communityEngagement.findMany()
     *
     * // Get first 10 CommunityEngagements
     * const communityEngagements = await prisma.communityEngagement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const communityEngagementWithIdOnly = await prisma.communityEngagement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommunityEngagementFindManyArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CommunityEngagement.
     * @param {CommunityEngagementCreateArgs} args - Arguments to create a CommunityEngagement.
     * @example
     * // Create one CommunityEngagement
     * const CommunityEngagement = await prisma.communityEngagement.create({
     *   data: {
     *     // ... data to create a CommunityEngagement
     *   }
     * })
     *
     */
    create<T extends CommunityEngagementCreateArgs>(args: Prisma.SelectSubset<T, CommunityEngagementCreateArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CommunityEngagements.
     * @param {CommunityEngagementCreateManyArgs} args - Arguments to create many CommunityEngagements.
     * @example
     * // Create many CommunityEngagements
     * const communityEngagement = await prisma.communityEngagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommunityEngagementCreateManyArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CommunityEngagements and returns the data saved in the database.
     * @param {CommunityEngagementCreateManyAndReturnArgs} args - Arguments to create many CommunityEngagements.
     * @example
     * // Create many CommunityEngagements
     * const communityEngagement = await prisma.communityEngagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommunityEngagements and only return the `id`
     * const communityEngagementWithIdOnly = await prisma.communityEngagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommunityEngagementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CommunityEngagement.
     * @param {CommunityEngagementDeleteArgs} args - Arguments to delete one CommunityEngagement.
     * @example
     * // Delete one CommunityEngagement
     * const CommunityEngagement = await prisma.communityEngagement.delete({
     *   where: {
     *     // ... filter to delete one CommunityEngagement
     *   }
     * })
     *
     */
    delete<T extends CommunityEngagementDeleteArgs>(args: Prisma.SelectSubset<T, CommunityEngagementDeleteArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CommunityEngagement.
     * @param {CommunityEngagementUpdateArgs} args - Arguments to update one CommunityEngagement.
     * @example
     * // Update one CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommunityEngagementUpdateArgs>(args: Prisma.SelectSubset<T, CommunityEngagementUpdateArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CommunityEngagements.
     * @param {CommunityEngagementDeleteManyArgs} args - Arguments to filter CommunityEngagements to delete.
     * @example
     * // Delete a few CommunityEngagements
     * const { count } = await prisma.communityEngagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommunityEngagementDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommunityEngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommunityEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityEngagements
     * const communityEngagement = await prisma.communityEngagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommunityEngagementUpdateManyArgs>(args: Prisma.SelectSubset<T, CommunityEngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommunityEngagements and returns the data updated in the database.
     * @param {CommunityEngagementUpdateManyAndReturnArgs} args - Arguments to update many CommunityEngagements.
     * @example
     * // Update many CommunityEngagements
     * const communityEngagement = await prisma.communityEngagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommunityEngagements and only return the `id`
     * const communityEngagementWithIdOnly = await prisma.communityEngagement.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityEngagementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommunityEngagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CommunityEngagement.
     * @param {CommunityEngagementUpsertArgs} args - Arguments to update or create a CommunityEngagement.
     * @example
     * // Update or create a CommunityEngagement
     * const communityEngagement = await prisma.communityEngagement.upsert({
     *   create: {
     *     // ... data to create a CommunityEngagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityEngagement we want to update
     *   }
     * })
     */
    upsert<T extends CommunityEngagementUpsertArgs>(args: Prisma.SelectSubset<T, CommunityEngagementUpsertArgs<ExtArgs>>): Prisma.Prisma__CommunityEngagementClient<runtime.Types.Result.GetResult<Prisma.$CommunityEngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CommunityEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementCountArgs} args - Arguments to filter CommunityEngagements to count.
     * @example
     * // Count the number of CommunityEngagements
     * const count = await prisma.communityEngagement.count({
     *   where: {
     *     // ... the filter for the CommunityEngagements we want to count
     *   }
     * })
    **/
    count<T extends CommunityEngagementCountArgs>(args?: Prisma.Subset<T, CommunityEngagementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommunityEngagementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CommunityEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityEngagementAggregateArgs>(args: Prisma.Subset<T, CommunityEngagementAggregateArgs>): Prisma.PrismaPromise<GetCommunityEngagementAggregateType<T>>;
    /**
     * Group by CommunityEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEngagementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommunityEngagementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommunityEngagementGroupByArgs['orderBy'];
    } : {
        orderBy?: CommunityEngagementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommunityEngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommunityEngagement model
     */
    readonly fields: CommunityEngagementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CommunityEngagement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommunityEngagementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.CommunityPostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommunityPostDefaultArgs<ExtArgs>>): Prisma.Prisma__CommunityPostClient<runtime.Types.Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CommunityEngagement model
 */
export interface CommunityEngagementFieldRefs {
    readonly id: Prisma.FieldRef<"CommunityEngagement", 'String'>;
    readonly userId: Prisma.FieldRef<"CommunityEngagement", 'String'>;
    readonly postId: Prisma.FieldRef<"CommunityEngagement", 'String'>;
    readonly type: Prisma.FieldRef<"CommunityEngagement", 'String'>;
    readonly content: Prisma.FieldRef<"CommunityEngagement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CommunityEngagement", 'DateTime'>;
}
/**
 * CommunityEngagement findUnique
 */
export type CommunityEngagementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter, which CommunityEngagement to fetch.
     */
    where: Prisma.CommunityEngagementWhereUniqueInput;
};
/**
 * CommunityEngagement findUniqueOrThrow
 */
export type CommunityEngagementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter, which CommunityEngagement to fetch.
     */
    where: Prisma.CommunityEngagementWhereUniqueInput;
};
/**
 * CommunityEngagement findFirst
 */
export type CommunityEngagementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter, which CommunityEngagement to fetch.
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommunityEngagements to fetch.
     */
    orderBy?: Prisma.CommunityEngagementOrderByWithRelationInput | Prisma.CommunityEngagementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommunityEngagements.
     */
    cursor?: Prisma.CommunityEngagementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommunityEngagements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommunityEngagements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommunityEngagements.
     */
    distinct?: Prisma.CommunityEngagementScalarFieldEnum | Prisma.CommunityEngagementScalarFieldEnum[];
};
/**
 * CommunityEngagement findFirstOrThrow
 */
export type CommunityEngagementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter, which CommunityEngagement to fetch.
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommunityEngagements to fetch.
     */
    orderBy?: Prisma.CommunityEngagementOrderByWithRelationInput | Prisma.CommunityEngagementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommunityEngagements.
     */
    cursor?: Prisma.CommunityEngagementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommunityEngagements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommunityEngagements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommunityEngagements.
     */
    distinct?: Prisma.CommunityEngagementScalarFieldEnum | Prisma.CommunityEngagementScalarFieldEnum[];
};
/**
 * CommunityEngagement findMany
 */
export type CommunityEngagementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter, which CommunityEngagements to fetch.
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommunityEngagements to fetch.
     */
    orderBy?: Prisma.CommunityEngagementOrderByWithRelationInput | Prisma.CommunityEngagementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommunityEngagements.
     */
    cursor?: Prisma.CommunityEngagementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommunityEngagements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommunityEngagements.
     */
    skip?: number;
    distinct?: Prisma.CommunityEngagementScalarFieldEnum | Prisma.CommunityEngagementScalarFieldEnum[];
};
/**
 * CommunityEngagement create
 */
export type CommunityEngagementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * The data needed to create a CommunityEngagement.
     */
    data: Prisma.XOR<Prisma.CommunityEngagementCreateInput, Prisma.CommunityEngagementUncheckedCreateInput>;
};
/**
 * CommunityEngagement createMany
 */
export type CommunityEngagementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityEngagements.
     */
    data: Prisma.CommunityEngagementCreateManyInput | Prisma.CommunityEngagementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommunityEngagement createManyAndReturn
 */
export type CommunityEngagementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * The data used to create many CommunityEngagements.
     */
    data: Prisma.CommunityEngagementCreateManyInput | Prisma.CommunityEngagementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CommunityEngagement update
 */
export type CommunityEngagementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * The data needed to update a CommunityEngagement.
     */
    data: Prisma.XOR<Prisma.CommunityEngagementUpdateInput, Prisma.CommunityEngagementUncheckedUpdateInput>;
    /**
     * Choose, which CommunityEngagement to update.
     */
    where: Prisma.CommunityEngagementWhereUniqueInput;
};
/**
 * CommunityEngagement updateMany
 */
export type CommunityEngagementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityEngagements.
     */
    data: Prisma.XOR<Prisma.CommunityEngagementUpdateManyMutationInput, Prisma.CommunityEngagementUncheckedUpdateManyInput>;
    /**
     * Filter which CommunityEngagements to update
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * Limit how many CommunityEngagements to update.
     */
    limit?: number;
};
/**
 * CommunityEngagement updateManyAndReturn
 */
export type CommunityEngagementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * The data used to update CommunityEngagements.
     */
    data: Prisma.XOR<Prisma.CommunityEngagementUpdateManyMutationInput, Prisma.CommunityEngagementUncheckedUpdateManyInput>;
    /**
     * Filter which CommunityEngagements to update
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * Limit how many CommunityEngagements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CommunityEngagement upsert
 */
export type CommunityEngagementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * The filter to search for the CommunityEngagement to update in case it exists.
     */
    where: Prisma.CommunityEngagementWhereUniqueInput;
    /**
     * In case the CommunityEngagement found by the `where` argument doesn't exist, create a new CommunityEngagement with this data.
     */
    create: Prisma.XOR<Prisma.CommunityEngagementCreateInput, Prisma.CommunityEngagementUncheckedCreateInput>;
    /**
     * In case the CommunityEngagement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommunityEngagementUpdateInput, Prisma.CommunityEngagementUncheckedUpdateInput>;
};
/**
 * CommunityEngagement delete
 */
export type CommunityEngagementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
    /**
     * Filter which CommunityEngagement to delete.
     */
    where: Prisma.CommunityEngagementWhereUniqueInput;
};
/**
 * CommunityEngagement deleteMany
 */
export type CommunityEngagementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityEngagements to delete
     */
    where?: Prisma.CommunityEngagementWhereInput;
    /**
     * Limit how many CommunityEngagements to delete.
     */
    limit?: number;
};
/**
 * CommunityEngagement without action
 */
export type CommunityEngagementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEngagement
     */
    select?: Prisma.CommunityEngagementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommunityEngagement
     */
    omit?: Prisma.CommunityEngagementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityEngagementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CommunityEngagement.d.ts.map