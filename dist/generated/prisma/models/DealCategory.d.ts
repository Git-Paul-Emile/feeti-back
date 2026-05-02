import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DealCategory
 *
 */
export type DealCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$DealCategoryPayload>;
export type AggregateDealCategory = {
    _count: DealCategoryCountAggregateOutputType | null;
    _min: DealCategoryMinAggregateOutputType | null;
    _max: DealCategoryMaxAggregateOutputType | null;
};
export type DealCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    icon: string | null;
    createdAt: Date | null;
};
export type DealCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    icon: string | null;
    createdAt: Date | null;
};
export type DealCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    icon: number;
    createdAt: number;
    _all: number;
};
export type DealCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    icon?: true;
    createdAt?: true;
};
export type DealCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    icon?: true;
    createdAt?: true;
};
export type DealCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    icon?: true;
    createdAt?: true;
    _all?: true;
};
export type DealCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DealCategory to aggregate.
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DealCategories to fetch.
     */
    orderBy?: Prisma.DealCategoryOrderByWithRelationInput | Prisma.DealCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DealCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DealCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DealCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DealCategories
    **/
    _count?: true | DealCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DealCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DealCategoryMaxAggregateInputType;
};
export type GetDealCategoryAggregateType<T extends DealCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateDealCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDealCategory[P]> : Prisma.GetScalarType<T[P], AggregateDealCategory[P]>;
};
export type DealCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DealCategoryWhereInput;
    orderBy?: Prisma.DealCategoryOrderByWithAggregationInput | Prisma.DealCategoryOrderByWithAggregationInput[];
    by: Prisma.DealCategoryScalarFieldEnum[] | Prisma.DealCategoryScalarFieldEnum;
    having?: Prisma.DealCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DealCategoryCountAggregateInputType | true;
    _min?: DealCategoryMinAggregateInputType;
    _max?: DealCategoryMaxAggregateInputType;
};
export type DealCategoryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    icon: string | null;
    createdAt: Date;
    _count: DealCategoryCountAggregateOutputType | null;
    _min: DealCategoryMinAggregateOutputType | null;
    _max: DealCategoryMaxAggregateOutputType | null;
};
type GetDealCategoryGroupByPayload<T extends DealCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DealCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DealCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DealCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DealCategoryGroupByOutputType[P]>;
}>>;
export type DealCategoryWhereInput = {
    AND?: Prisma.DealCategoryWhereInput | Prisma.DealCategoryWhereInput[];
    OR?: Prisma.DealCategoryWhereInput[];
    NOT?: Prisma.DealCategoryWhereInput | Prisma.DealCategoryWhereInput[];
    id?: Prisma.StringFilter<"DealCategory"> | string;
    name?: Prisma.StringFilter<"DealCategory"> | string;
    slug?: Prisma.StringFilter<"DealCategory"> | string;
    icon?: Prisma.StringNullableFilter<"DealCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DealCategory"> | Date | string;
};
export type DealCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DealCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.DealCategoryWhereInput | Prisma.DealCategoryWhereInput[];
    OR?: Prisma.DealCategoryWhereInput[];
    NOT?: Prisma.DealCategoryWhereInput | Prisma.DealCategoryWhereInput[];
    icon?: Prisma.StringNullableFilter<"DealCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DealCategory"> | Date | string;
}, "id" | "name" | "slug">;
export type DealCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DealCategoryCountOrderByAggregateInput;
    _max?: Prisma.DealCategoryMaxOrderByAggregateInput;
    _min?: Prisma.DealCategoryMinOrderByAggregateInput;
};
export type DealCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.DealCategoryScalarWhereWithAggregatesInput | Prisma.DealCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.DealCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DealCategoryScalarWhereWithAggregatesInput | Prisma.DealCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DealCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"DealCategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"DealCategory"> | string;
    icon?: Prisma.StringNullableWithAggregatesFilter<"DealCategory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DealCategory"> | Date | string;
};
export type DealCategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    icon?: string | null;
    createdAt?: Date | string;
};
export type DealCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    icon?: string | null;
    createdAt?: Date | string;
};
export type DealCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DealCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DealCategoryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    icon?: string | null;
    createdAt?: Date | string;
};
export type DealCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DealCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DealCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DealCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DealCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DealCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    icon?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dealCategory"]>;
export type DealCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    icon?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dealCategory"]>;
export type DealCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    icon?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dealCategory"]>;
export type DealCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    icon?: boolean;
    createdAt?: boolean;
};
export type DealCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "icon" | "createdAt", ExtArgs["result"]["dealCategory"]>;
export type $DealCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DealCategory";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        icon: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["dealCategory"]>;
    composites: {};
};
export type DealCategoryGetPayload<S extends boolean | null | undefined | DealCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload, S>;
export type DealCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DealCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DealCategoryCountAggregateInputType | true;
};
export interface DealCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DealCategory'];
        meta: {
            name: 'DealCategory';
        };
    };
    /**
     * Find zero or one DealCategory that matches the filter.
     * @param {DealCategoryFindUniqueArgs} args - Arguments to find a DealCategory
     * @example
     * // Get one DealCategory
     * const dealCategory = await prisma.dealCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, DealCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DealCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealCategoryFindUniqueOrThrowArgs} args - Arguments to find a DealCategory
     * @example
     * // Get one DealCategory
     * const dealCategory = await prisma.dealCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DealCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DealCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryFindFirstArgs} args - Arguments to find a DealCategory
     * @example
     * // Get one DealCategory
     * const dealCategory = await prisma.dealCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, DealCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DealCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryFindFirstOrThrowArgs} args - Arguments to find a DealCategory
     * @example
     * // Get one DealCategory
     * const dealCategory = await prisma.dealCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DealCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DealCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealCategories
     * const dealCategories = await prisma.dealCategory.findMany()
     *
     * // Get first 10 DealCategories
     * const dealCategories = await prisma.dealCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dealCategoryWithIdOnly = await prisma.dealCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DealCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, DealCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DealCategory.
     * @param {DealCategoryCreateArgs} args - Arguments to create a DealCategory.
     * @example
     * // Create one DealCategory
     * const DealCategory = await prisma.dealCategory.create({
     *   data: {
     *     // ... data to create a DealCategory
     *   }
     * })
     *
     */
    create<T extends DealCategoryCreateArgs>(args: Prisma.SelectSubset<T, DealCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DealCategories.
     * @param {DealCategoryCreateManyArgs} args - Arguments to create many DealCategories.
     * @example
     * // Create many DealCategories
     * const dealCategory = await prisma.dealCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DealCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, DealCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DealCategories and returns the data saved in the database.
     * @param {DealCategoryCreateManyAndReturnArgs} args - Arguments to create many DealCategories.
     * @example
     * // Create many DealCategories
     * const dealCategory = await prisma.dealCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DealCategories and only return the `id`
     * const dealCategoryWithIdOnly = await prisma.dealCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DealCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DealCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DealCategory.
     * @param {DealCategoryDeleteArgs} args - Arguments to delete one DealCategory.
     * @example
     * // Delete one DealCategory
     * const DealCategory = await prisma.dealCategory.delete({
     *   where: {
     *     // ... filter to delete one DealCategory
     *   }
     * })
     *
     */
    delete<T extends DealCategoryDeleteArgs>(args: Prisma.SelectSubset<T, DealCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DealCategory.
     * @param {DealCategoryUpdateArgs} args - Arguments to update one DealCategory.
     * @example
     * // Update one DealCategory
     * const dealCategory = await prisma.dealCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DealCategoryUpdateArgs>(args: Prisma.SelectSubset<T, DealCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DealCategories.
     * @param {DealCategoryDeleteManyArgs} args - Arguments to filter DealCategories to delete.
     * @example
     * // Delete a few DealCategories
     * const { count } = await prisma.dealCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DealCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, DealCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DealCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealCategories
     * const dealCategory = await prisma.dealCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DealCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, DealCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DealCategories and returns the data updated in the database.
     * @param {DealCategoryUpdateManyAndReturnArgs} args - Arguments to update many DealCategories.
     * @example
     * // Update many DealCategories
     * const dealCategory = await prisma.dealCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DealCategories and only return the `id`
     * const dealCategoryWithIdOnly = await prisma.dealCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DealCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DealCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DealCategory.
     * @param {DealCategoryUpsertArgs} args - Arguments to update or create a DealCategory.
     * @example
     * // Update or create a DealCategory
     * const dealCategory = await prisma.dealCategory.upsert({
     *   create: {
     *     // ... data to create a DealCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealCategory we want to update
     *   }
     * })
     */
    upsert<T extends DealCategoryUpsertArgs>(args: Prisma.SelectSubset<T, DealCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__DealCategoryClient<runtime.Types.Result.GetResult<Prisma.$DealCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DealCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryCountArgs} args - Arguments to filter DealCategories to count.
     * @example
     * // Count the number of DealCategories
     * const count = await prisma.dealCategory.count({
     *   where: {
     *     // ... the filter for the DealCategories we want to count
     *   }
     * })
    **/
    count<T extends DealCategoryCountArgs>(args?: Prisma.Subset<T, DealCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DealCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DealCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealCategoryAggregateArgs>(args: Prisma.Subset<T, DealCategoryAggregateArgs>): Prisma.PrismaPromise<GetDealCategoryAggregateType<T>>;
    /**
     * Group by DealCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DealCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DealCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: DealCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DealCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DealCategory model
     */
    readonly fields: DealCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DealCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DealCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the DealCategory model
 */
export interface DealCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"DealCategory", 'String'>;
    readonly name: Prisma.FieldRef<"DealCategory", 'String'>;
    readonly slug: Prisma.FieldRef<"DealCategory", 'String'>;
    readonly icon: Prisma.FieldRef<"DealCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DealCategory", 'DateTime'>;
}
/**
 * DealCategory findUnique
 */
export type DealCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter, which DealCategory to fetch.
     */
    where: Prisma.DealCategoryWhereUniqueInput;
};
/**
 * DealCategory findUniqueOrThrow
 */
export type DealCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter, which DealCategory to fetch.
     */
    where: Prisma.DealCategoryWhereUniqueInput;
};
/**
 * DealCategory findFirst
 */
export type DealCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter, which DealCategory to fetch.
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DealCategories to fetch.
     */
    orderBy?: Prisma.DealCategoryOrderByWithRelationInput | Prisma.DealCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DealCategories.
     */
    cursor?: Prisma.DealCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DealCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DealCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DealCategories.
     */
    distinct?: Prisma.DealCategoryScalarFieldEnum | Prisma.DealCategoryScalarFieldEnum[];
};
/**
 * DealCategory findFirstOrThrow
 */
export type DealCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter, which DealCategory to fetch.
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DealCategories to fetch.
     */
    orderBy?: Prisma.DealCategoryOrderByWithRelationInput | Prisma.DealCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DealCategories.
     */
    cursor?: Prisma.DealCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DealCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DealCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DealCategories.
     */
    distinct?: Prisma.DealCategoryScalarFieldEnum | Prisma.DealCategoryScalarFieldEnum[];
};
/**
 * DealCategory findMany
 */
export type DealCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter, which DealCategories to fetch.
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DealCategories to fetch.
     */
    orderBy?: Prisma.DealCategoryOrderByWithRelationInput | Prisma.DealCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DealCategories.
     */
    cursor?: Prisma.DealCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DealCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DealCategories.
     */
    skip?: number;
    distinct?: Prisma.DealCategoryScalarFieldEnum | Prisma.DealCategoryScalarFieldEnum[];
};
/**
 * DealCategory create
 */
export type DealCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * The data needed to create a DealCategory.
     */
    data: Prisma.XOR<Prisma.DealCategoryCreateInput, Prisma.DealCategoryUncheckedCreateInput>;
};
/**
 * DealCategory createMany
 */
export type DealCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealCategories.
     */
    data: Prisma.DealCategoryCreateManyInput | Prisma.DealCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DealCategory createManyAndReturn
 */
export type DealCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many DealCategories.
     */
    data: Prisma.DealCategoryCreateManyInput | Prisma.DealCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DealCategory update
 */
export type DealCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * The data needed to update a DealCategory.
     */
    data: Prisma.XOR<Prisma.DealCategoryUpdateInput, Prisma.DealCategoryUncheckedUpdateInput>;
    /**
     * Choose, which DealCategory to update.
     */
    where: Prisma.DealCategoryWhereUniqueInput;
};
/**
 * DealCategory updateMany
 */
export type DealCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DealCategories.
     */
    data: Prisma.XOR<Prisma.DealCategoryUpdateManyMutationInput, Prisma.DealCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which DealCategories to update
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * Limit how many DealCategories to update.
     */
    limit?: number;
};
/**
 * DealCategory updateManyAndReturn
 */
export type DealCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update DealCategories.
     */
    data: Prisma.XOR<Prisma.DealCategoryUpdateManyMutationInput, Prisma.DealCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which DealCategories to update
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * Limit how many DealCategories to update.
     */
    limit?: number;
};
/**
 * DealCategory upsert
 */
export type DealCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * The filter to search for the DealCategory to update in case it exists.
     */
    where: Prisma.DealCategoryWhereUniqueInput;
    /**
     * In case the DealCategory found by the `where` argument doesn't exist, create a new DealCategory with this data.
     */
    create: Prisma.XOR<Prisma.DealCategoryCreateInput, Prisma.DealCategoryUncheckedCreateInput>;
    /**
     * In case the DealCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DealCategoryUpdateInput, Prisma.DealCategoryUncheckedUpdateInput>;
};
/**
 * DealCategory delete
 */
export type DealCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
    /**
     * Filter which DealCategory to delete.
     */
    where: Prisma.DealCategoryWhereUniqueInput;
};
/**
 * DealCategory deleteMany
 */
export type DealCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DealCategories to delete
     */
    where?: Prisma.DealCategoryWhereInput;
    /**
     * Limit how many DealCategories to delete.
     */
    limit?: number;
};
/**
 * DealCategory without action
 */
export type DealCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCategory
     */
    select?: Prisma.DealCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DealCategory
     */
    omit?: Prisma.DealCategoryOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DealCategory.d.ts.map