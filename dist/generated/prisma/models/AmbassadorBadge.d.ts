import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AmbassadorBadge
 *
 */
export type AmbassadorBadgeModel = runtime.Types.Result.DefaultSelection<Prisma.$AmbassadorBadgePayload>;
export type AggregateAmbassadorBadge = {
    _count: AmbassadorBadgeCountAggregateOutputType | null;
    _min: AmbassadorBadgeMinAggregateOutputType | null;
    _max: AmbassadorBadgeMaxAggregateOutputType | null;
};
export type AmbassadorBadgeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    badgeType: string | null;
    title: string | null;
    description: string | null;
    earnedAt: Date | null;
};
export type AmbassadorBadgeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    badgeType: string | null;
    title: string | null;
    description: string | null;
    earnedAt: Date | null;
};
export type AmbassadorBadgeCountAggregateOutputType = {
    id: number;
    userId: number;
    badgeType: number;
    title: number;
    description: number;
    earnedAt: number;
    _all: number;
};
export type AmbassadorBadgeMinAggregateInputType = {
    id?: true;
    userId?: true;
    badgeType?: true;
    title?: true;
    description?: true;
    earnedAt?: true;
};
export type AmbassadorBadgeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    badgeType?: true;
    title?: true;
    description?: true;
    earnedAt?: true;
};
export type AmbassadorBadgeCountAggregateInputType = {
    id?: true;
    userId?: true;
    badgeType?: true;
    title?: true;
    description?: true;
    earnedAt?: true;
    _all?: true;
};
export type AmbassadorBadgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AmbassadorBadge to aggregate.
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AmbassadorBadges to fetch.
     */
    orderBy?: Prisma.AmbassadorBadgeOrderByWithRelationInput | Prisma.AmbassadorBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AmbassadorBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AmbassadorBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AmbassadorBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AmbassadorBadges
    **/
    _count?: true | AmbassadorBadgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AmbassadorBadgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AmbassadorBadgeMaxAggregateInputType;
};
export type GetAmbassadorBadgeAggregateType<T extends AmbassadorBadgeAggregateArgs> = {
    [P in keyof T & keyof AggregateAmbassadorBadge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAmbassadorBadge[P]> : Prisma.GetScalarType<T[P], AggregateAmbassadorBadge[P]>;
};
export type AmbassadorBadgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbassadorBadgeWhereInput;
    orderBy?: Prisma.AmbassadorBadgeOrderByWithAggregationInput | Prisma.AmbassadorBadgeOrderByWithAggregationInput[];
    by: Prisma.AmbassadorBadgeScalarFieldEnum[] | Prisma.AmbassadorBadgeScalarFieldEnum;
    having?: Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AmbassadorBadgeCountAggregateInputType | true;
    _min?: AmbassadorBadgeMinAggregateInputType;
    _max?: AmbassadorBadgeMaxAggregateInputType;
};
export type AmbassadorBadgeGroupByOutputType = {
    id: string;
    userId: string;
    badgeType: string;
    title: string;
    description: string;
    earnedAt: Date;
    _count: AmbassadorBadgeCountAggregateOutputType | null;
    _min: AmbassadorBadgeMinAggregateOutputType | null;
    _max: AmbassadorBadgeMaxAggregateOutputType | null;
};
type GetAmbassadorBadgeGroupByPayload<T extends AmbassadorBadgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AmbassadorBadgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AmbassadorBadgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AmbassadorBadgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AmbassadorBadgeGroupByOutputType[P]>;
}>>;
export type AmbassadorBadgeWhereInput = {
    AND?: Prisma.AmbassadorBadgeWhereInput | Prisma.AmbassadorBadgeWhereInput[];
    OR?: Prisma.AmbassadorBadgeWhereInput[];
    NOT?: Prisma.AmbassadorBadgeWhereInput | Prisma.AmbassadorBadgeWhereInput[];
    id?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    userId?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    badgeType?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    title?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    description?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    earnedAt?: Prisma.DateTimeFilter<"AmbassadorBadge"> | Date | string;
};
export type AmbassadorBadgeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    earnedAt?: Prisma.SortOrder;
};
export type AmbassadorBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_badgeType?: Prisma.AmbassadorBadgeUserIdBadgeTypeCompoundUniqueInput;
    AND?: Prisma.AmbassadorBadgeWhereInput | Prisma.AmbassadorBadgeWhereInput[];
    OR?: Prisma.AmbassadorBadgeWhereInput[];
    NOT?: Prisma.AmbassadorBadgeWhereInput | Prisma.AmbassadorBadgeWhereInput[];
    userId?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    badgeType?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    title?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    description?: Prisma.StringFilter<"AmbassadorBadge"> | string;
    earnedAt?: Prisma.DateTimeFilter<"AmbassadorBadge"> | Date | string;
}, "id" | "userId_badgeType">;
export type AmbassadorBadgeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    earnedAt?: Prisma.SortOrder;
    _count?: Prisma.AmbassadorBadgeCountOrderByAggregateInput;
    _max?: Prisma.AmbassadorBadgeMaxOrderByAggregateInput;
    _min?: Prisma.AmbassadorBadgeMinOrderByAggregateInput;
};
export type AmbassadorBadgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput | Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput | Prisma.AmbassadorBadgeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AmbassadorBadge"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"AmbassadorBadge"> | string;
    badgeType?: Prisma.StringWithAggregatesFilter<"AmbassadorBadge"> | string;
    title?: Prisma.StringWithAggregatesFilter<"AmbassadorBadge"> | string;
    description?: Prisma.StringWithAggregatesFilter<"AmbassadorBadge"> | string;
    earnedAt?: Prisma.DateTimeWithAggregatesFilter<"AmbassadorBadge"> | Date | string;
};
export type AmbassadorBadgeCreateInput = {
    id?: string;
    userId: string;
    badgeType: string;
    title: string;
    description: string;
    earnedAt?: Date | string;
};
export type AmbassadorBadgeUncheckedCreateInput = {
    id?: string;
    userId: string;
    badgeType: string;
    title: string;
    description: string;
    earnedAt?: Date | string;
};
export type AmbassadorBadgeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeType?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    earnedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbassadorBadgeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeType?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    earnedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbassadorBadgeCreateManyInput = {
    id?: string;
    userId: string;
    badgeType: string;
    title: string;
    description: string;
    earnedAt?: Date | string;
};
export type AmbassadorBadgeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeType?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    earnedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbassadorBadgeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeType?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    earnedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbassadorBadgeUserIdBadgeTypeCompoundUniqueInput = {
    userId: string;
    badgeType: string;
};
export type AmbassadorBadgeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    earnedAt?: Prisma.SortOrder;
};
export type AmbassadorBadgeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    earnedAt?: Prisma.SortOrder;
};
export type AmbassadorBadgeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    earnedAt?: Prisma.SortOrder;
};
export type AmbassadorBadgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeType?: boolean;
    title?: boolean;
    description?: boolean;
    earnedAt?: boolean;
}, ExtArgs["result"]["ambassadorBadge"]>;
export type AmbassadorBadgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeType?: boolean;
    title?: boolean;
    description?: boolean;
    earnedAt?: boolean;
}, ExtArgs["result"]["ambassadorBadge"]>;
export type AmbassadorBadgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeType?: boolean;
    title?: boolean;
    description?: boolean;
    earnedAt?: boolean;
}, ExtArgs["result"]["ambassadorBadge"]>;
export type AmbassadorBadgeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    badgeType?: boolean;
    title?: boolean;
    description?: boolean;
    earnedAt?: boolean;
};
export type AmbassadorBadgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "badgeType" | "title" | "description" | "earnedAt", ExtArgs["result"]["ambassadorBadge"]>;
export type $AmbassadorBadgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AmbassadorBadge";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        badgeType: string;
        title: string;
        description: string;
        earnedAt: Date;
    }, ExtArgs["result"]["ambassadorBadge"]>;
    composites: {};
};
export type AmbassadorBadgeGetPayload<S extends boolean | null | undefined | AmbassadorBadgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload, S>;
export type AmbassadorBadgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AmbassadorBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AmbassadorBadgeCountAggregateInputType | true;
};
export interface AmbassadorBadgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AmbassadorBadge'];
        meta: {
            name: 'AmbassadorBadge';
        };
    };
    /**
     * Find zero or one AmbassadorBadge that matches the filter.
     * @param {AmbassadorBadgeFindUniqueArgs} args - Arguments to find a AmbassadorBadge
     * @example
     * // Get one AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbassadorBadgeFindUniqueArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AmbassadorBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbassadorBadgeFindUniqueOrThrowArgs} args - Arguments to find a AmbassadorBadge
     * @example
     * // Get one AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbassadorBadgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AmbassadorBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeFindFirstArgs} args - Arguments to find a AmbassadorBadge
     * @example
     * // Get one AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbassadorBadgeFindFirstArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AmbassadorBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeFindFirstOrThrowArgs} args - Arguments to find a AmbassadorBadge
     * @example
     * // Get one AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbassadorBadgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AmbassadorBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmbassadorBadges
     * const ambassadorBadges = await prisma.ambassadorBadge.findMany()
     *
     * // Get first 10 AmbassadorBadges
     * const ambassadorBadges = await prisma.ambassadorBadge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ambassadorBadgeWithIdOnly = await prisma.ambassadorBadge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AmbassadorBadgeFindManyArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AmbassadorBadge.
     * @param {AmbassadorBadgeCreateArgs} args - Arguments to create a AmbassadorBadge.
     * @example
     * // Create one AmbassadorBadge
     * const AmbassadorBadge = await prisma.ambassadorBadge.create({
     *   data: {
     *     // ... data to create a AmbassadorBadge
     *   }
     * })
     *
     */
    create<T extends AmbassadorBadgeCreateArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeCreateArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AmbassadorBadges.
     * @param {AmbassadorBadgeCreateManyArgs} args - Arguments to create many AmbassadorBadges.
     * @example
     * // Create many AmbassadorBadges
     * const ambassadorBadge = await prisma.ambassadorBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AmbassadorBadgeCreateManyArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AmbassadorBadges and returns the data saved in the database.
     * @param {AmbassadorBadgeCreateManyAndReturnArgs} args - Arguments to create many AmbassadorBadges.
     * @example
     * // Create many AmbassadorBadges
     * const ambassadorBadge = await prisma.ambassadorBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AmbassadorBadges and only return the `id`
     * const ambassadorBadgeWithIdOnly = await prisma.ambassadorBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AmbassadorBadgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AmbassadorBadge.
     * @param {AmbassadorBadgeDeleteArgs} args - Arguments to delete one AmbassadorBadge.
     * @example
     * // Delete one AmbassadorBadge
     * const AmbassadorBadge = await prisma.ambassadorBadge.delete({
     *   where: {
     *     // ... filter to delete one AmbassadorBadge
     *   }
     * })
     *
     */
    delete<T extends AmbassadorBadgeDeleteArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeDeleteArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AmbassadorBadge.
     * @param {AmbassadorBadgeUpdateArgs} args - Arguments to update one AmbassadorBadge.
     * @example
     * // Update one AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AmbassadorBadgeUpdateArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeUpdateArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AmbassadorBadges.
     * @param {AmbassadorBadgeDeleteManyArgs} args - Arguments to filter AmbassadorBadges to delete.
     * @example
     * // Delete a few AmbassadorBadges
     * const { count } = await prisma.ambassadorBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AmbassadorBadgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AmbassadorBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AmbassadorBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmbassadorBadges
     * const ambassadorBadge = await prisma.ambassadorBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AmbassadorBadgeUpdateManyArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AmbassadorBadges and returns the data updated in the database.
     * @param {AmbassadorBadgeUpdateManyAndReturnArgs} args - Arguments to update many AmbassadorBadges.
     * @example
     * // Update many AmbassadorBadges
     * const ambassadorBadge = await prisma.ambassadorBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AmbassadorBadges and only return the `id`
     * const ambassadorBadgeWithIdOnly = await prisma.ambassadorBadge.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmbassadorBadgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AmbassadorBadge.
     * @param {AmbassadorBadgeUpsertArgs} args - Arguments to update or create a AmbassadorBadge.
     * @example
     * // Update or create a AmbassadorBadge
     * const ambassadorBadge = await prisma.ambassadorBadge.upsert({
     *   create: {
     *     // ... data to create a AmbassadorBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmbassadorBadge we want to update
     *   }
     * })
     */
    upsert<T extends AmbassadorBadgeUpsertArgs>(args: Prisma.SelectSubset<T, AmbassadorBadgeUpsertArgs<ExtArgs>>): Prisma.Prisma__AmbassadorBadgeClient<runtime.Types.Result.GetResult<Prisma.$AmbassadorBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AmbassadorBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeCountArgs} args - Arguments to filter AmbassadorBadges to count.
     * @example
     * // Count the number of AmbassadorBadges
     * const count = await prisma.ambassadorBadge.count({
     *   where: {
     *     // ... the filter for the AmbassadorBadges we want to count
     *   }
     * })
    **/
    count<T extends AmbassadorBadgeCountArgs>(args?: Prisma.Subset<T, AmbassadorBadgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AmbassadorBadgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AmbassadorBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmbassadorBadgeAggregateArgs>(args: Prisma.Subset<T, AmbassadorBadgeAggregateArgs>): Prisma.PrismaPromise<GetAmbassadorBadgeAggregateType<T>>;
    /**
     * Group by AmbassadorBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorBadgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AmbassadorBadgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AmbassadorBadgeGroupByArgs['orderBy'];
    } : {
        orderBy?: AmbassadorBadgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AmbassadorBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbassadorBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AmbassadorBadge model
     */
    readonly fields: AmbassadorBadgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AmbassadorBadge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AmbassadorBadgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the AmbassadorBadge model
 */
export interface AmbassadorBadgeFieldRefs {
    readonly id: Prisma.FieldRef<"AmbassadorBadge", 'String'>;
    readonly userId: Prisma.FieldRef<"AmbassadorBadge", 'String'>;
    readonly badgeType: Prisma.FieldRef<"AmbassadorBadge", 'String'>;
    readonly title: Prisma.FieldRef<"AmbassadorBadge", 'String'>;
    readonly description: Prisma.FieldRef<"AmbassadorBadge", 'String'>;
    readonly earnedAt: Prisma.FieldRef<"AmbassadorBadge", 'DateTime'>;
}
/**
 * AmbassadorBadge findUnique
 */
export type AmbassadorBadgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter, which AmbassadorBadge to fetch.
     */
    where: Prisma.AmbassadorBadgeWhereUniqueInput;
};
/**
 * AmbassadorBadge findUniqueOrThrow
 */
export type AmbassadorBadgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter, which AmbassadorBadge to fetch.
     */
    where: Prisma.AmbassadorBadgeWhereUniqueInput;
};
/**
 * AmbassadorBadge findFirst
 */
export type AmbassadorBadgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter, which AmbassadorBadge to fetch.
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AmbassadorBadges to fetch.
     */
    orderBy?: Prisma.AmbassadorBadgeOrderByWithRelationInput | Prisma.AmbassadorBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AmbassadorBadges.
     */
    cursor?: Prisma.AmbassadorBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AmbassadorBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AmbassadorBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AmbassadorBadges.
     */
    distinct?: Prisma.AmbassadorBadgeScalarFieldEnum | Prisma.AmbassadorBadgeScalarFieldEnum[];
};
/**
 * AmbassadorBadge findFirstOrThrow
 */
export type AmbassadorBadgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter, which AmbassadorBadge to fetch.
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AmbassadorBadges to fetch.
     */
    orderBy?: Prisma.AmbassadorBadgeOrderByWithRelationInput | Prisma.AmbassadorBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AmbassadorBadges.
     */
    cursor?: Prisma.AmbassadorBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AmbassadorBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AmbassadorBadges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AmbassadorBadges.
     */
    distinct?: Prisma.AmbassadorBadgeScalarFieldEnum | Prisma.AmbassadorBadgeScalarFieldEnum[];
};
/**
 * AmbassadorBadge findMany
 */
export type AmbassadorBadgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter, which AmbassadorBadges to fetch.
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AmbassadorBadges to fetch.
     */
    orderBy?: Prisma.AmbassadorBadgeOrderByWithRelationInput | Prisma.AmbassadorBadgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AmbassadorBadges.
     */
    cursor?: Prisma.AmbassadorBadgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AmbassadorBadges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AmbassadorBadges.
     */
    skip?: number;
    distinct?: Prisma.AmbassadorBadgeScalarFieldEnum | Prisma.AmbassadorBadgeScalarFieldEnum[];
};
/**
 * AmbassadorBadge create
 */
export type AmbassadorBadgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * The data needed to create a AmbassadorBadge.
     */
    data: Prisma.XOR<Prisma.AmbassadorBadgeCreateInput, Prisma.AmbassadorBadgeUncheckedCreateInput>;
};
/**
 * AmbassadorBadge createMany
 */
export type AmbassadorBadgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmbassadorBadges.
     */
    data: Prisma.AmbassadorBadgeCreateManyInput | Prisma.AmbassadorBadgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AmbassadorBadge createManyAndReturn
 */
export type AmbassadorBadgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * The data used to create many AmbassadorBadges.
     */
    data: Prisma.AmbassadorBadgeCreateManyInput | Prisma.AmbassadorBadgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AmbassadorBadge update
 */
export type AmbassadorBadgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * The data needed to update a AmbassadorBadge.
     */
    data: Prisma.XOR<Prisma.AmbassadorBadgeUpdateInput, Prisma.AmbassadorBadgeUncheckedUpdateInput>;
    /**
     * Choose, which AmbassadorBadge to update.
     */
    where: Prisma.AmbassadorBadgeWhereUniqueInput;
};
/**
 * AmbassadorBadge updateMany
 */
export type AmbassadorBadgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AmbassadorBadges.
     */
    data: Prisma.XOR<Prisma.AmbassadorBadgeUpdateManyMutationInput, Prisma.AmbassadorBadgeUncheckedUpdateManyInput>;
    /**
     * Filter which AmbassadorBadges to update
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * Limit how many AmbassadorBadges to update.
     */
    limit?: number;
};
/**
 * AmbassadorBadge updateManyAndReturn
 */
export type AmbassadorBadgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * The data used to update AmbassadorBadges.
     */
    data: Prisma.XOR<Prisma.AmbassadorBadgeUpdateManyMutationInput, Prisma.AmbassadorBadgeUncheckedUpdateManyInput>;
    /**
     * Filter which AmbassadorBadges to update
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * Limit how many AmbassadorBadges to update.
     */
    limit?: number;
};
/**
 * AmbassadorBadge upsert
 */
export type AmbassadorBadgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * The filter to search for the AmbassadorBadge to update in case it exists.
     */
    where: Prisma.AmbassadorBadgeWhereUniqueInput;
    /**
     * In case the AmbassadorBadge found by the `where` argument doesn't exist, create a new AmbassadorBadge with this data.
     */
    create: Prisma.XOR<Prisma.AmbassadorBadgeCreateInput, Prisma.AmbassadorBadgeUncheckedCreateInput>;
    /**
     * In case the AmbassadorBadge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AmbassadorBadgeUpdateInput, Prisma.AmbassadorBadgeUncheckedUpdateInput>;
};
/**
 * AmbassadorBadge delete
 */
export type AmbassadorBadgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
    /**
     * Filter which AmbassadorBadge to delete.
     */
    where: Prisma.AmbassadorBadgeWhereUniqueInput;
};
/**
 * AmbassadorBadge deleteMany
 */
export type AmbassadorBadgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AmbassadorBadges to delete
     */
    where?: Prisma.AmbassadorBadgeWhereInput;
    /**
     * Limit how many AmbassadorBadges to delete.
     */
    limit?: number;
};
/**
 * AmbassadorBadge without action
 */
export type AmbassadorBadgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorBadge
     */
    select?: Prisma.AmbassadorBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AmbassadorBadge
     */
    omit?: Prisma.AmbassadorBadgeOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AmbassadorBadge.d.ts.map