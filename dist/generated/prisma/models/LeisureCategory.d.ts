import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LeisureCategory
 *
 */
export type LeisureCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$LeisureCategoryPayload>;
export type AggregateLeisureCategory = {
    _count: LeisureCategoryCountAggregateOutputType | null;
    _min: LeisureCategoryMinAggregateOutputType | null;
    _max: LeisureCategoryMaxAggregateOutputType | null;
};
export type LeisureCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
};
export type LeisureCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
};
export type LeisureCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    _all: number;
};
export type LeisureCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
};
export type LeisureCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
};
export type LeisureCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    _all?: true;
};
export type LeisureCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureCategory to aggregate.
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureCategories to fetch.
     */
    orderBy?: Prisma.LeisureCategoryOrderByWithRelationInput | Prisma.LeisureCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LeisureCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeisureCategories
    **/
    _count?: true | LeisureCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LeisureCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LeisureCategoryMaxAggregateInputType;
};
export type GetLeisureCategoryAggregateType<T extends LeisureCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateLeisureCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeisureCategory[P]> : Prisma.GetScalarType<T[P], AggregateLeisureCategory[P]>;
};
export type LeisureCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureCategoryWhereInput;
    orderBy?: Prisma.LeisureCategoryOrderByWithAggregationInput | Prisma.LeisureCategoryOrderByWithAggregationInput[];
    by: Prisma.LeisureCategoryScalarFieldEnum[] | Prisma.LeisureCategoryScalarFieldEnum;
    having?: Prisma.LeisureCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeisureCategoryCountAggregateInputType | true;
    _min?: LeisureCategoryMinAggregateInputType;
    _max?: LeisureCategoryMaxAggregateInputType;
};
export type LeisureCategoryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    _count: LeisureCategoryCountAggregateOutputType | null;
    _min: LeisureCategoryMinAggregateOutputType | null;
    _max: LeisureCategoryMaxAggregateOutputType | null;
};
type GetLeisureCategoryGroupByPayload<T extends LeisureCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeisureCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeisureCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeisureCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeisureCategoryGroupByOutputType[P]>;
}>>;
export type LeisureCategoryWhereInput = {
    AND?: Prisma.LeisureCategoryWhereInput | Prisma.LeisureCategoryWhereInput[];
    OR?: Prisma.LeisureCategoryWhereInput[];
    NOT?: Prisma.LeisureCategoryWhereInput | Prisma.LeisureCategoryWhereInput[];
    id?: Prisma.StringFilter<"LeisureCategory"> | string;
    name?: Prisma.StringFilter<"LeisureCategory"> | string;
    slug?: Prisma.StringFilter<"LeisureCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureCategory"> | Date | string;
    items?: Prisma.LeisureItemListRelationFilter;
};
export type LeisureCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    items?: Prisma.LeisureItemOrderByRelationAggregateInput;
};
export type LeisureCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.LeisureCategoryWhereInput | Prisma.LeisureCategoryWhereInput[];
    OR?: Prisma.LeisureCategoryWhereInput[];
    NOT?: Prisma.LeisureCategoryWhereInput | Prisma.LeisureCategoryWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"LeisureCategory"> | Date | string;
    items?: Prisma.LeisureItemListRelationFilter;
}, "id" | "name" | "slug">;
export type LeisureCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeisureCategoryCountOrderByAggregateInput;
    _max?: Prisma.LeisureCategoryMaxOrderByAggregateInput;
    _min?: Prisma.LeisureCategoryMinOrderByAggregateInput;
};
export type LeisureCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeisureCategoryScalarWhereWithAggregatesInput | Prisma.LeisureCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeisureCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeisureCategoryScalarWhereWithAggregatesInput | Prisma.LeisureCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeisureCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeisureCategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"LeisureCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeisureCategory"> | Date | string;
};
export type LeisureCategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    items?: Prisma.LeisureItemCreateNestedManyWithoutCategoryInput;
};
export type LeisureCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    items?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCategoryInput;
};
export type LeisureCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.LeisureItemUpdateManyWithoutCategoryNestedInput;
};
export type LeisureCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.LeisureItemUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type LeisureCategoryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
};
export type LeisureCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeisureCategoryScalarRelationFilter = {
    is?: Prisma.LeisureCategoryWhereInput;
    isNot?: Prisma.LeisureCategoryWhereInput;
};
export type LeisureCategoryCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.LeisureCategoryCreateWithoutItemsInput, Prisma.LeisureCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.LeisureCategoryCreateOrConnectWithoutItemsInput;
    connect?: Prisma.LeisureCategoryWhereUniqueInput;
};
export type LeisureCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureCategoryCreateWithoutItemsInput, Prisma.LeisureCategoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.LeisureCategoryCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.LeisureCategoryUpsertWithoutItemsInput;
    connect?: Prisma.LeisureCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeisureCategoryUpdateToOneWithWhereWithoutItemsInput, Prisma.LeisureCategoryUpdateWithoutItemsInput>, Prisma.LeisureCategoryUncheckedUpdateWithoutItemsInput>;
};
export type LeisureCategoryCreateWithoutItemsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
};
export type LeisureCategoryUncheckedCreateWithoutItemsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
};
export type LeisureCategoryCreateOrConnectWithoutItemsInput = {
    where: Prisma.LeisureCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureCategoryCreateWithoutItemsInput, Prisma.LeisureCategoryUncheckedCreateWithoutItemsInput>;
};
export type LeisureCategoryUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.LeisureCategoryUpdateWithoutItemsInput, Prisma.LeisureCategoryUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.LeisureCategoryCreateWithoutItemsInput, Prisma.LeisureCategoryUncheckedCreateWithoutItemsInput>;
    where?: Prisma.LeisureCategoryWhereInput;
};
export type LeisureCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.LeisureCategoryWhereInput;
    data: Prisma.XOR<Prisma.LeisureCategoryUpdateWithoutItemsInput, Prisma.LeisureCategoryUncheckedUpdateWithoutItemsInput>;
};
export type LeisureCategoryUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeisureCategoryUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LeisureCategoryCountOutputType
 */
export type LeisureCategoryCountOutputType = {
    items: number;
};
export type LeisureCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | LeisureCategoryCountOutputTypeCountItemsArgs;
};
/**
 * LeisureCategoryCountOutputType without action
 */
export type LeisureCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategoryCountOutputType
     */
    select?: Prisma.LeisureCategoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LeisureCategoryCountOutputType without action
 */
export type LeisureCategoryCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureItemWhereInput;
};
export type LeisureCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    items?: boolean | Prisma.LeisureCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeisureCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureCategory"]>;
export type LeisureCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leisureCategory"]>;
export type LeisureCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leisureCategory"]>;
export type LeisureCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
};
export type LeisureCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["leisureCategory"]>;
export type LeisureCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | Prisma.LeisureCategory$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeisureCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeisureCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LeisureCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LeisureCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeisureCategory";
    objects: {
        items: Prisma.$LeisureItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, ExtArgs["result"]["leisureCategory"]>;
    composites: {};
};
export type LeisureCategoryGetPayload<S extends boolean | null | undefined | LeisureCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload, S>;
export type LeisureCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeisureCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeisureCategoryCountAggregateInputType | true;
};
export interface LeisureCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeisureCategory'];
        meta: {
            name: 'LeisureCategory';
        };
    };
    /**
     * Find zero or one LeisureCategory that matches the filter.
     * @param {LeisureCategoryFindUniqueArgs} args - Arguments to find a LeisureCategory
     * @example
     * // Get one LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeisureCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, LeisureCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LeisureCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeisureCategoryFindUniqueOrThrowArgs} args - Arguments to find a LeisureCategory
     * @example
     * // Get one LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeisureCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeisureCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryFindFirstArgs} args - Arguments to find a LeisureCategory
     * @example
     * // Get one LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeisureCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryFindFirstOrThrowArgs} args - Arguments to find a LeisureCategory
     * @example
     * // Get one LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeisureCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LeisureCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeisureCategories
     * const leisureCategories = await prisma.leisureCategory.findMany()
     *
     * // Get first 10 LeisureCategories
     * const leisureCategories = await prisma.leisureCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leisureCategoryWithIdOnly = await prisma.leisureCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeisureCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LeisureCategory.
     * @param {LeisureCategoryCreateArgs} args - Arguments to create a LeisureCategory.
     * @example
     * // Create one LeisureCategory
     * const LeisureCategory = await prisma.leisureCategory.create({
     *   data: {
     *     // ... data to create a LeisureCategory
     *   }
     * })
     *
     */
    create<T extends LeisureCategoryCreateArgs>(args: Prisma.SelectSubset<T, LeisureCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LeisureCategories.
     * @param {LeisureCategoryCreateManyArgs} args - Arguments to create many LeisureCategories.
     * @example
     * // Create many LeisureCategories
     * const leisureCategory = await prisma.leisureCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeisureCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LeisureCategories and returns the data saved in the database.
     * @param {LeisureCategoryCreateManyAndReturnArgs} args - Arguments to create many LeisureCategories.
     * @example
     * // Create many LeisureCategories
     * const leisureCategory = await prisma.leisureCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeisureCategories and only return the `id`
     * const leisureCategoryWithIdOnly = await prisma.leisureCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeisureCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LeisureCategory.
     * @param {LeisureCategoryDeleteArgs} args - Arguments to delete one LeisureCategory.
     * @example
     * // Delete one LeisureCategory
     * const LeisureCategory = await prisma.leisureCategory.delete({
     *   where: {
     *     // ... filter to delete one LeisureCategory
     *   }
     * })
     *
     */
    delete<T extends LeisureCategoryDeleteArgs>(args: Prisma.SelectSubset<T, LeisureCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LeisureCategory.
     * @param {LeisureCategoryUpdateArgs} args - Arguments to update one LeisureCategory.
     * @example
     * // Update one LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeisureCategoryUpdateArgs>(args: Prisma.SelectSubset<T, LeisureCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LeisureCategories.
     * @param {LeisureCategoryDeleteManyArgs} args - Arguments to filter LeisureCategories to delete.
     * @example
     * // Delete a few LeisureCategories
     * const { count } = await prisma.leisureCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeisureCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeisureCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeisureCategories
     * const leisureCategory = await prisma.leisureCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeisureCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, LeisureCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureCategories and returns the data updated in the database.
     * @param {LeisureCategoryUpdateManyAndReturnArgs} args - Arguments to update many LeisureCategories.
     * @example
     * // Update many LeisureCategories
     * const leisureCategory = await prisma.leisureCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeisureCategories and only return the `id`
     * const leisureCategoryWithIdOnly = await prisma.leisureCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeisureCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeisureCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LeisureCategory.
     * @param {LeisureCategoryUpsertArgs} args - Arguments to update or create a LeisureCategory.
     * @example
     * // Update or create a LeisureCategory
     * const leisureCategory = await prisma.leisureCategory.upsert({
     *   create: {
     *     // ... data to create a LeisureCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeisureCategory we want to update
     *   }
     * })
     */
    upsert<T extends LeisureCategoryUpsertArgs>(args: Prisma.SelectSubset<T, LeisureCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LeisureCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryCountArgs} args - Arguments to filter LeisureCategories to count.
     * @example
     * // Count the number of LeisureCategories
     * const count = await prisma.leisureCategory.count({
     *   where: {
     *     // ... the filter for the LeisureCategories we want to count
     *   }
     * })
    **/
    count<T extends LeisureCategoryCountArgs>(args?: Prisma.Subset<T, LeisureCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeisureCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LeisureCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeisureCategoryAggregateArgs>(args: Prisma.Subset<T, LeisureCategoryAggregateArgs>): Prisma.PrismaPromise<GetLeisureCategoryAggregateType<T>>;
    /**
     * Group by LeisureCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LeisureCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeisureCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: LeisureCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeisureCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeisureCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeisureCategory model
     */
    readonly fields: LeisureCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LeisureCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LeisureCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    items<T extends Prisma.LeisureCategory$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeisureCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LeisureCategory model
 */
export interface LeisureCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"LeisureCategory", 'String'>;
    readonly name: Prisma.FieldRef<"LeisureCategory", 'String'>;
    readonly slug: Prisma.FieldRef<"LeisureCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LeisureCategory", 'DateTime'>;
}
/**
 * LeisureCategory findUnique
 */
export type LeisureCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureCategory to fetch.
     */
    where: Prisma.LeisureCategoryWhereUniqueInput;
};
/**
 * LeisureCategory findUniqueOrThrow
 */
export type LeisureCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureCategory to fetch.
     */
    where: Prisma.LeisureCategoryWhereUniqueInput;
};
/**
 * LeisureCategory findFirst
 */
export type LeisureCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureCategory to fetch.
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureCategories to fetch.
     */
    orderBy?: Prisma.LeisureCategoryOrderByWithRelationInput | Prisma.LeisureCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureCategories.
     */
    cursor?: Prisma.LeisureCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureCategories.
     */
    distinct?: Prisma.LeisureCategoryScalarFieldEnum | Prisma.LeisureCategoryScalarFieldEnum[];
};
/**
 * LeisureCategory findFirstOrThrow
 */
export type LeisureCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureCategory to fetch.
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureCategories to fetch.
     */
    orderBy?: Prisma.LeisureCategoryOrderByWithRelationInput | Prisma.LeisureCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureCategories.
     */
    cursor?: Prisma.LeisureCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureCategories.
     */
    distinct?: Prisma.LeisureCategoryScalarFieldEnum | Prisma.LeisureCategoryScalarFieldEnum[];
};
/**
 * LeisureCategory findMany
 */
export type LeisureCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which LeisureCategories to fetch.
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureCategories to fetch.
     */
    orderBy?: Prisma.LeisureCategoryOrderByWithRelationInput | Prisma.LeisureCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeisureCategories.
     */
    cursor?: Prisma.LeisureCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureCategories.
     */
    skip?: number;
    distinct?: Prisma.LeisureCategoryScalarFieldEnum | Prisma.LeisureCategoryScalarFieldEnum[];
};
/**
 * LeisureCategory create
 */
export type LeisureCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a LeisureCategory.
     */
    data: Prisma.XOR<Prisma.LeisureCategoryCreateInput, Prisma.LeisureCategoryUncheckedCreateInput>;
};
/**
 * LeisureCategory createMany
 */
export type LeisureCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeisureCategories.
     */
    data: Prisma.LeisureCategoryCreateManyInput | Prisma.LeisureCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeisureCategory createManyAndReturn
 */
export type LeisureCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many LeisureCategories.
     */
    data: Prisma.LeisureCategoryCreateManyInput | Prisma.LeisureCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeisureCategory update
 */
export type LeisureCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a LeisureCategory.
     */
    data: Prisma.XOR<Prisma.LeisureCategoryUpdateInput, Prisma.LeisureCategoryUncheckedUpdateInput>;
    /**
     * Choose, which LeisureCategory to update.
     */
    where: Prisma.LeisureCategoryWhereUniqueInput;
};
/**
 * LeisureCategory updateMany
 */
export type LeisureCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LeisureCategories.
     */
    data: Prisma.XOR<Prisma.LeisureCategoryUpdateManyMutationInput, Prisma.LeisureCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureCategories to update
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * Limit how many LeisureCategories to update.
     */
    limit?: number;
};
/**
 * LeisureCategory updateManyAndReturn
 */
export type LeisureCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update LeisureCategories.
     */
    data: Prisma.XOR<Prisma.LeisureCategoryUpdateManyMutationInput, Prisma.LeisureCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureCategories to update
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * Limit how many LeisureCategories to update.
     */
    limit?: number;
};
/**
 * LeisureCategory upsert
 */
export type LeisureCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the LeisureCategory to update in case it exists.
     */
    where: Prisma.LeisureCategoryWhereUniqueInput;
    /**
     * In case the LeisureCategory found by the `where` argument doesn't exist, create a new LeisureCategory with this data.
     */
    create: Prisma.XOR<Prisma.LeisureCategoryCreateInput, Prisma.LeisureCategoryUncheckedCreateInput>;
    /**
     * In case the LeisureCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LeisureCategoryUpdateInput, Prisma.LeisureCategoryUncheckedUpdateInput>;
};
/**
 * LeisureCategory delete
 */
export type LeisureCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
    /**
     * Filter which LeisureCategory to delete.
     */
    where: Prisma.LeisureCategoryWhereUniqueInput;
};
/**
 * LeisureCategory deleteMany
 */
export type LeisureCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureCategories to delete
     */
    where?: Prisma.LeisureCategoryWhereInput;
    /**
     * Limit how many LeisureCategories to delete.
     */
    limit?: number;
};
/**
 * LeisureCategory.items
 */
export type LeisureCategory$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureItem
     */
    select?: Prisma.LeisureItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureItem
     */
    omit?: Prisma.LeisureItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureItemInclude<ExtArgs> | null;
    where?: Prisma.LeisureItemWhereInput;
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeisureItemScalarFieldEnum | Prisma.LeisureItemScalarFieldEnum[];
};
/**
 * LeisureCategory without action
 */
export type LeisureCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureCategory
     */
    select?: Prisma.LeisureCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureCategory
     */
    omit?: Prisma.LeisureCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureCategoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LeisureCategory.d.ts.map