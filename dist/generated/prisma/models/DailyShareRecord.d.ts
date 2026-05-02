import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DailyShareRecord
 *
 */
export type DailyShareRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$DailyShareRecordPayload>;
export type AggregateDailyShareRecord = {
    _count: DailyShareRecordCountAggregateOutputType | null;
    _avg: DailyShareRecordAvgAggregateOutputType | null;
    _sum: DailyShareRecordSumAggregateOutputType | null;
    _min: DailyShareRecordMinAggregateOutputType | null;
    _max: DailyShareRecordMaxAggregateOutputType | null;
};
export type DailyShareRecordAvgAggregateOutputType = {
    count: number | null;
};
export type DailyShareRecordSumAggregateOutputType = {
    count: number | null;
};
export type DailyShareRecordMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    date: string | null;
    count: number | null;
};
export type DailyShareRecordMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    date: string | null;
    count: number | null;
};
export type DailyShareRecordCountAggregateOutputType = {
    id: number;
    userId: number;
    date: number;
    count: number;
    _all: number;
};
export type DailyShareRecordAvgAggregateInputType = {
    count?: true;
};
export type DailyShareRecordSumAggregateInputType = {
    count?: true;
};
export type DailyShareRecordMinAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    count?: true;
};
export type DailyShareRecordMaxAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    count?: true;
};
export type DailyShareRecordCountAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    count?: true;
    _all?: true;
};
export type DailyShareRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DailyShareRecord to aggregate.
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyShareRecords to fetch.
     */
    orderBy?: Prisma.DailyShareRecordOrderByWithRelationInput | Prisma.DailyShareRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DailyShareRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyShareRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyShareRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DailyShareRecords
    **/
    _count?: true | DailyShareRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DailyShareRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DailyShareRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DailyShareRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DailyShareRecordMaxAggregateInputType;
};
export type GetDailyShareRecordAggregateType<T extends DailyShareRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateDailyShareRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDailyShareRecord[P]> : Prisma.GetScalarType<T[P], AggregateDailyShareRecord[P]>;
};
export type DailyShareRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DailyShareRecordWhereInput;
    orderBy?: Prisma.DailyShareRecordOrderByWithAggregationInput | Prisma.DailyShareRecordOrderByWithAggregationInput[];
    by: Prisma.DailyShareRecordScalarFieldEnum[] | Prisma.DailyShareRecordScalarFieldEnum;
    having?: Prisma.DailyShareRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DailyShareRecordCountAggregateInputType | true;
    _avg?: DailyShareRecordAvgAggregateInputType;
    _sum?: DailyShareRecordSumAggregateInputType;
    _min?: DailyShareRecordMinAggregateInputType;
    _max?: DailyShareRecordMaxAggregateInputType;
};
export type DailyShareRecordGroupByOutputType = {
    id: string;
    userId: string;
    date: string;
    count: number;
    _count: DailyShareRecordCountAggregateOutputType | null;
    _avg: DailyShareRecordAvgAggregateOutputType | null;
    _sum: DailyShareRecordSumAggregateOutputType | null;
    _min: DailyShareRecordMinAggregateOutputType | null;
    _max: DailyShareRecordMaxAggregateOutputType | null;
};
type GetDailyShareRecordGroupByPayload<T extends DailyShareRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DailyShareRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DailyShareRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DailyShareRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DailyShareRecordGroupByOutputType[P]>;
}>>;
export type DailyShareRecordWhereInput = {
    AND?: Prisma.DailyShareRecordWhereInput | Prisma.DailyShareRecordWhereInput[];
    OR?: Prisma.DailyShareRecordWhereInput[];
    NOT?: Prisma.DailyShareRecordWhereInput | Prisma.DailyShareRecordWhereInput[];
    id?: Prisma.StringFilter<"DailyShareRecord"> | string;
    userId?: Prisma.StringFilter<"DailyShareRecord"> | string;
    date?: Prisma.StringFilter<"DailyShareRecord"> | string;
    count?: Prisma.IntFilter<"DailyShareRecord"> | number;
};
export type DailyShareRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type DailyShareRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_date?: Prisma.DailyShareRecordUserIdDateCompoundUniqueInput;
    AND?: Prisma.DailyShareRecordWhereInput | Prisma.DailyShareRecordWhereInput[];
    OR?: Prisma.DailyShareRecordWhereInput[];
    NOT?: Prisma.DailyShareRecordWhereInput | Prisma.DailyShareRecordWhereInput[];
    userId?: Prisma.StringFilter<"DailyShareRecord"> | string;
    date?: Prisma.StringFilter<"DailyShareRecord"> | string;
    count?: Prisma.IntFilter<"DailyShareRecord"> | number;
}, "id" | "userId_date">;
export type DailyShareRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    _count?: Prisma.DailyShareRecordCountOrderByAggregateInput;
    _avg?: Prisma.DailyShareRecordAvgOrderByAggregateInput;
    _max?: Prisma.DailyShareRecordMaxOrderByAggregateInput;
    _min?: Prisma.DailyShareRecordMinOrderByAggregateInput;
    _sum?: Prisma.DailyShareRecordSumOrderByAggregateInput;
};
export type DailyShareRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.DailyShareRecordScalarWhereWithAggregatesInput | Prisma.DailyShareRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.DailyShareRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DailyShareRecordScalarWhereWithAggregatesInput | Prisma.DailyShareRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DailyShareRecord"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"DailyShareRecord"> | string;
    date?: Prisma.StringWithAggregatesFilter<"DailyShareRecord"> | string;
    count?: Prisma.IntWithAggregatesFilter<"DailyShareRecord"> | number;
};
export type DailyShareRecordCreateInput = {
    id?: string;
    userId: string;
    date: string;
    count?: number;
};
export type DailyShareRecordUncheckedCreateInput = {
    id?: string;
    userId: string;
    date: string;
    count?: number;
};
export type DailyShareRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DailyShareRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DailyShareRecordCreateManyInput = {
    id?: string;
    userId: string;
    date: string;
    count?: number;
};
export type DailyShareRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DailyShareRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DailyShareRecordUserIdDateCompoundUniqueInput = {
    userId: string;
    date: string;
};
export type DailyShareRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type DailyShareRecordAvgOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type DailyShareRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type DailyShareRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type DailyShareRecordSumOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type DailyShareRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    date?: boolean;
    count?: boolean;
}, ExtArgs["result"]["dailyShareRecord"]>;
export type DailyShareRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    date?: boolean;
    count?: boolean;
}, ExtArgs["result"]["dailyShareRecord"]>;
export type DailyShareRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    date?: boolean;
    count?: boolean;
}, ExtArgs["result"]["dailyShareRecord"]>;
export type DailyShareRecordSelectScalar = {
    id?: boolean;
    userId?: boolean;
    date?: boolean;
    count?: boolean;
};
export type DailyShareRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "date" | "count", ExtArgs["result"]["dailyShareRecord"]>;
export type $DailyShareRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DailyShareRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        date: string;
        count: number;
    }, ExtArgs["result"]["dailyShareRecord"]>;
    composites: {};
};
export type DailyShareRecordGetPayload<S extends boolean | null | undefined | DailyShareRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload, S>;
export type DailyShareRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DailyShareRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DailyShareRecordCountAggregateInputType | true;
};
export interface DailyShareRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DailyShareRecord'];
        meta: {
            name: 'DailyShareRecord';
        };
    };
    /**
     * Find zero or one DailyShareRecord that matches the filter.
     * @param {DailyShareRecordFindUniqueArgs} args - Arguments to find a DailyShareRecord
     * @example
     * // Get one DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyShareRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, DailyShareRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DailyShareRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyShareRecordFindUniqueOrThrowArgs} args - Arguments to find a DailyShareRecord
     * @example
     * // Get one DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyShareRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DailyShareRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DailyShareRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordFindFirstArgs} args - Arguments to find a DailyShareRecord
     * @example
     * // Get one DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyShareRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DailyShareRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordFindFirstOrThrowArgs} args - Arguments to find a DailyShareRecord
     * @example
     * // Get one DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyShareRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DailyShareRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyShareRecords
     * const dailyShareRecords = await prisma.dailyShareRecord.findMany()
     *
     * // Get first 10 DailyShareRecords
     * const dailyShareRecords = await prisma.dailyShareRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dailyShareRecordWithIdOnly = await prisma.dailyShareRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DailyShareRecordFindManyArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DailyShareRecord.
     * @param {DailyShareRecordCreateArgs} args - Arguments to create a DailyShareRecord.
     * @example
     * // Create one DailyShareRecord
     * const DailyShareRecord = await prisma.dailyShareRecord.create({
     *   data: {
     *     // ... data to create a DailyShareRecord
     *   }
     * })
     *
     */
    create<T extends DailyShareRecordCreateArgs>(args: Prisma.SelectSubset<T, DailyShareRecordCreateArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DailyShareRecords.
     * @param {DailyShareRecordCreateManyArgs} args - Arguments to create many DailyShareRecords.
     * @example
     * // Create many DailyShareRecords
     * const dailyShareRecord = await prisma.dailyShareRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DailyShareRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DailyShareRecords and returns the data saved in the database.
     * @param {DailyShareRecordCreateManyAndReturnArgs} args - Arguments to create many DailyShareRecords.
     * @example
     * // Create many DailyShareRecords
     * const dailyShareRecord = await prisma.dailyShareRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DailyShareRecords and only return the `id`
     * const dailyShareRecordWithIdOnly = await prisma.dailyShareRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DailyShareRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DailyShareRecord.
     * @param {DailyShareRecordDeleteArgs} args - Arguments to delete one DailyShareRecord.
     * @example
     * // Delete one DailyShareRecord
     * const DailyShareRecord = await prisma.dailyShareRecord.delete({
     *   where: {
     *     // ... filter to delete one DailyShareRecord
     *   }
     * })
     *
     */
    delete<T extends DailyShareRecordDeleteArgs>(args: Prisma.SelectSubset<T, DailyShareRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DailyShareRecord.
     * @param {DailyShareRecordUpdateArgs} args - Arguments to update one DailyShareRecord.
     * @example
     * // Update one DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DailyShareRecordUpdateArgs>(args: Prisma.SelectSubset<T, DailyShareRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DailyShareRecords.
     * @param {DailyShareRecordDeleteManyArgs} args - Arguments to filter DailyShareRecords to delete.
     * @example
     * // Delete a few DailyShareRecords
     * const { count } = await prisma.dailyShareRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DailyShareRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, DailyShareRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DailyShareRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyShareRecords
     * const dailyShareRecord = await prisma.dailyShareRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DailyShareRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, DailyShareRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DailyShareRecords and returns the data updated in the database.
     * @param {DailyShareRecordUpdateManyAndReturnArgs} args - Arguments to update many DailyShareRecords.
     * @example
     * // Update many DailyShareRecords
     * const dailyShareRecord = await prisma.dailyShareRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DailyShareRecords and only return the `id`
     * const dailyShareRecordWithIdOnly = await prisma.dailyShareRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyShareRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DailyShareRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DailyShareRecord.
     * @param {DailyShareRecordUpsertArgs} args - Arguments to update or create a DailyShareRecord.
     * @example
     * // Update or create a DailyShareRecord
     * const dailyShareRecord = await prisma.dailyShareRecord.upsert({
     *   create: {
     *     // ... data to create a DailyShareRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyShareRecord we want to update
     *   }
     * })
     */
    upsert<T extends DailyShareRecordUpsertArgs>(args: Prisma.SelectSubset<T, DailyShareRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__DailyShareRecordClient<runtime.Types.Result.GetResult<Prisma.$DailyShareRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DailyShareRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordCountArgs} args - Arguments to filter DailyShareRecords to count.
     * @example
     * // Count the number of DailyShareRecords
     * const count = await prisma.dailyShareRecord.count({
     *   where: {
     *     // ... the filter for the DailyShareRecords we want to count
     *   }
     * })
    **/
    count<T extends DailyShareRecordCountArgs>(args?: Prisma.Subset<T, DailyShareRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DailyShareRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DailyShareRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyShareRecordAggregateArgs>(args: Prisma.Subset<T, DailyShareRecordAggregateArgs>): Prisma.PrismaPromise<GetDailyShareRecordAggregateType<T>>;
    /**
     * Group by DailyShareRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShareRecordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DailyShareRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DailyShareRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: DailyShareRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DailyShareRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyShareRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DailyShareRecord model
     */
    readonly fields: DailyShareRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DailyShareRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DailyShareRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DailyShareRecord model
 */
export interface DailyShareRecordFieldRefs {
    readonly id: Prisma.FieldRef<"DailyShareRecord", 'String'>;
    readonly userId: Prisma.FieldRef<"DailyShareRecord", 'String'>;
    readonly date: Prisma.FieldRef<"DailyShareRecord", 'String'>;
    readonly count: Prisma.FieldRef<"DailyShareRecord", 'Int'>;
}
/**
 * DailyShareRecord findUnique
 */
export type DailyShareRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter, which DailyShareRecord to fetch.
     */
    where: Prisma.DailyShareRecordWhereUniqueInput;
};
/**
 * DailyShareRecord findUniqueOrThrow
 */
export type DailyShareRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter, which DailyShareRecord to fetch.
     */
    where: Prisma.DailyShareRecordWhereUniqueInput;
};
/**
 * DailyShareRecord findFirst
 */
export type DailyShareRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter, which DailyShareRecord to fetch.
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyShareRecords to fetch.
     */
    orderBy?: Prisma.DailyShareRecordOrderByWithRelationInput | Prisma.DailyShareRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyShareRecords.
     */
    cursor?: Prisma.DailyShareRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyShareRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyShareRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyShareRecords.
     */
    distinct?: Prisma.DailyShareRecordScalarFieldEnum | Prisma.DailyShareRecordScalarFieldEnum[];
};
/**
 * DailyShareRecord findFirstOrThrow
 */
export type DailyShareRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter, which DailyShareRecord to fetch.
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyShareRecords to fetch.
     */
    orderBy?: Prisma.DailyShareRecordOrderByWithRelationInput | Prisma.DailyShareRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyShareRecords.
     */
    cursor?: Prisma.DailyShareRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyShareRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyShareRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyShareRecords.
     */
    distinct?: Prisma.DailyShareRecordScalarFieldEnum | Prisma.DailyShareRecordScalarFieldEnum[];
};
/**
 * DailyShareRecord findMany
 */
export type DailyShareRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter, which DailyShareRecords to fetch.
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyShareRecords to fetch.
     */
    orderBy?: Prisma.DailyShareRecordOrderByWithRelationInput | Prisma.DailyShareRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DailyShareRecords.
     */
    cursor?: Prisma.DailyShareRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyShareRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyShareRecords.
     */
    skip?: number;
    distinct?: Prisma.DailyShareRecordScalarFieldEnum | Prisma.DailyShareRecordScalarFieldEnum[];
};
/**
 * DailyShareRecord create
 */
export type DailyShareRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * The data needed to create a DailyShareRecord.
     */
    data: Prisma.XOR<Prisma.DailyShareRecordCreateInput, Prisma.DailyShareRecordUncheckedCreateInput>;
};
/**
 * DailyShareRecord createMany
 */
export type DailyShareRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyShareRecords.
     */
    data: Prisma.DailyShareRecordCreateManyInput | Prisma.DailyShareRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DailyShareRecord createManyAndReturn
 */
export type DailyShareRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many DailyShareRecords.
     */
    data: Prisma.DailyShareRecordCreateManyInput | Prisma.DailyShareRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DailyShareRecord update
 */
export type DailyShareRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * The data needed to update a DailyShareRecord.
     */
    data: Prisma.XOR<Prisma.DailyShareRecordUpdateInput, Prisma.DailyShareRecordUncheckedUpdateInput>;
    /**
     * Choose, which DailyShareRecord to update.
     */
    where: Prisma.DailyShareRecordWhereUniqueInput;
};
/**
 * DailyShareRecord updateMany
 */
export type DailyShareRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyShareRecords.
     */
    data: Prisma.XOR<Prisma.DailyShareRecordUpdateManyMutationInput, Prisma.DailyShareRecordUncheckedUpdateManyInput>;
    /**
     * Filter which DailyShareRecords to update
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * Limit how many DailyShareRecords to update.
     */
    limit?: number;
};
/**
 * DailyShareRecord updateManyAndReturn
 */
export type DailyShareRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * The data used to update DailyShareRecords.
     */
    data: Prisma.XOR<Prisma.DailyShareRecordUpdateManyMutationInput, Prisma.DailyShareRecordUncheckedUpdateManyInput>;
    /**
     * Filter which DailyShareRecords to update
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * Limit how many DailyShareRecords to update.
     */
    limit?: number;
};
/**
 * DailyShareRecord upsert
 */
export type DailyShareRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * The filter to search for the DailyShareRecord to update in case it exists.
     */
    where: Prisma.DailyShareRecordWhereUniqueInput;
    /**
     * In case the DailyShareRecord found by the `where` argument doesn't exist, create a new DailyShareRecord with this data.
     */
    create: Prisma.XOR<Prisma.DailyShareRecordCreateInput, Prisma.DailyShareRecordUncheckedCreateInput>;
    /**
     * In case the DailyShareRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DailyShareRecordUpdateInput, Prisma.DailyShareRecordUncheckedUpdateInput>;
};
/**
 * DailyShareRecord delete
 */
export type DailyShareRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
    /**
     * Filter which DailyShareRecord to delete.
     */
    where: Prisma.DailyShareRecordWhereUniqueInput;
};
/**
 * DailyShareRecord deleteMany
 */
export type DailyShareRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DailyShareRecords to delete
     */
    where?: Prisma.DailyShareRecordWhereInput;
    /**
     * Limit how many DailyShareRecords to delete.
     */
    limit?: number;
};
/**
 * DailyShareRecord without action
 */
export type DailyShareRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShareRecord
     */
    select?: Prisma.DailyShareRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyShareRecord
     */
    omit?: Prisma.DailyShareRecordOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DailyShareRecord.d.ts.map