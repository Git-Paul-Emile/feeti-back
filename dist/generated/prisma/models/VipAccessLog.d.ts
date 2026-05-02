import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VipAccessLog
 *
 */
export type VipAccessLogModel = runtime.Types.Result.DefaultSelection<Prisma.$VipAccessLogPayload>;
export type AggregateVipAccessLog = {
    _count: VipAccessLogCountAggregateOutputType | null;
    _min: VipAccessLogMinAggregateOutputType | null;
    _max: VipAccessLogMaxAggregateOutputType | null;
};
export type VipAccessLogMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventId: string | null;
    accessType: string | null;
    ticketId: string | null;
    grantedAt: Date | null;
};
export type VipAccessLogMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventId: string | null;
    accessType: string | null;
    ticketId: string | null;
    grantedAt: Date | null;
};
export type VipAccessLogCountAggregateOutputType = {
    id: number;
    userId: number;
    eventId: number;
    accessType: number;
    ticketId: number;
    grantedAt: number;
    _all: number;
};
export type VipAccessLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    accessType?: true;
    ticketId?: true;
    grantedAt?: true;
};
export type VipAccessLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    accessType?: true;
    ticketId?: true;
    grantedAt?: true;
};
export type VipAccessLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    accessType?: true;
    ticketId?: true;
    grantedAt?: true;
    _all?: true;
};
export type VipAccessLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VipAccessLog to aggregate.
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VipAccessLogs to fetch.
     */
    orderBy?: Prisma.VipAccessLogOrderByWithRelationInput | Prisma.VipAccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VipAccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VipAccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VipAccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VipAccessLogs
    **/
    _count?: true | VipAccessLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VipAccessLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VipAccessLogMaxAggregateInputType;
};
export type GetVipAccessLogAggregateType<T extends VipAccessLogAggregateArgs> = {
    [P in keyof T & keyof AggregateVipAccessLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVipAccessLog[P]> : Prisma.GetScalarType<T[P], AggregateVipAccessLog[P]>;
};
export type VipAccessLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VipAccessLogWhereInput;
    orderBy?: Prisma.VipAccessLogOrderByWithAggregationInput | Prisma.VipAccessLogOrderByWithAggregationInput[];
    by: Prisma.VipAccessLogScalarFieldEnum[] | Prisma.VipAccessLogScalarFieldEnum;
    having?: Prisma.VipAccessLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VipAccessLogCountAggregateInputType | true;
    _min?: VipAccessLogMinAggregateInputType;
    _max?: VipAccessLogMaxAggregateInputType;
};
export type VipAccessLogGroupByOutputType = {
    id: string;
    userId: string;
    eventId: string;
    accessType: string;
    ticketId: string | null;
    grantedAt: Date;
    _count: VipAccessLogCountAggregateOutputType | null;
    _min: VipAccessLogMinAggregateOutputType | null;
    _max: VipAccessLogMaxAggregateOutputType | null;
};
type GetVipAccessLogGroupByPayload<T extends VipAccessLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VipAccessLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VipAccessLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VipAccessLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VipAccessLogGroupByOutputType[P]>;
}>>;
export type VipAccessLogWhereInput = {
    AND?: Prisma.VipAccessLogWhereInput | Prisma.VipAccessLogWhereInput[];
    OR?: Prisma.VipAccessLogWhereInput[];
    NOT?: Prisma.VipAccessLogWhereInput | Prisma.VipAccessLogWhereInput[];
    id?: Prisma.StringFilter<"VipAccessLog"> | string;
    userId?: Prisma.StringFilter<"VipAccessLog"> | string;
    eventId?: Prisma.StringFilter<"VipAccessLog"> | string;
    accessType?: Prisma.StringFilter<"VipAccessLog"> | string;
    ticketId?: Prisma.StringNullableFilter<"VipAccessLog"> | string | null;
    grantedAt?: Prisma.DateTimeFilter<"VipAccessLog"> | Date | string;
};
export type VipAccessLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type VipAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VipAccessLogWhereInput | Prisma.VipAccessLogWhereInput[];
    OR?: Prisma.VipAccessLogWhereInput[];
    NOT?: Prisma.VipAccessLogWhereInput | Prisma.VipAccessLogWhereInput[];
    userId?: Prisma.StringFilter<"VipAccessLog"> | string;
    eventId?: Prisma.StringFilter<"VipAccessLog"> | string;
    accessType?: Prisma.StringFilter<"VipAccessLog"> | string;
    ticketId?: Prisma.StringNullableFilter<"VipAccessLog"> | string | null;
    grantedAt?: Prisma.DateTimeFilter<"VipAccessLog"> | Date | string;
}, "id">;
export type VipAccessLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    _count?: Prisma.VipAccessLogCountOrderByAggregateInput;
    _max?: Prisma.VipAccessLogMaxOrderByAggregateInput;
    _min?: Prisma.VipAccessLogMinOrderByAggregateInput;
};
export type VipAccessLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.VipAccessLogScalarWhereWithAggregatesInput | Prisma.VipAccessLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.VipAccessLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VipAccessLogScalarWhereWithAggregatesInput | Prisma.VipAccessLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VipAccessLog"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"VipAccessLog"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"VipAccessLog"> | string;
    accessType?: Prisma.StringWithAggregatesFilter<"VipAccessLog"> | string;
    ticketId?: Prisma.StringNullableWithAggregatesFilter<"VipAccessLog"> | string | null;
    grantedAt?: Prisma.DateTimeWithAggregatesFilter<"VipAccessLog"> | Date | string;
};
export type VipAccessLogCreateInput = {
    id?: string;
    userId: string;
    eventId: string;
    accessType: string;
    ticketId?: string | null;
    grantedAt?: Date | string;
};
export type VipAccessLogUncheckedCreateInput = {
    id?: string;
    userId: string;
    eventId: string;
    accessType: string;
    ticketId?: string | null;
    grantedAt?: Date | string;
};
export type VipAccessLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VipAccessLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VipAccessLogCreateManyInput = {
    id?: string;
    userId: string;
    eventId: string;
    accessType: string;
    ticketId?: string | null;
    grantedAt?: Date | string;
};
export type VipAccessLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VipAccessLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VipAccessLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type VipAccessLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type VipAccessLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type VipAccessLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    accessType?: boolean;
    ticketId?: boolean;
    grantedAt?: boolean;
}, ExtArgs["result"]["vipAccessLog"]>;
export type VipAccessLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    accessType?: boolean;
    ticketId?: boolean;
    grantedAt?: boolean;
}, ExtArgs["result"]["vipAccessLog"]>;
export type VipAccessLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    accessType?: boolean;
    ticketId?: boolean;
    grantedAt?: boolean;
}, ExtArgs["result"]["vipAccessLog"]>;
export type VipAccessLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    accessType?: boolean;
    ticketId?: boolean;
    grantedAt?: boolean;
};
export type VipAccessLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "eventId" | "accessType" | "ticketId" | "grantedAt", ExtArgs["result"]["vipAccessLog"]>;
export type $VipAccessLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VipAccessLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        eventId: string;
        accessType: string;
        ticketId: string | null;
        grantedAt: Date;
    }, ExtArgs["result"]["vipAccessLog"]>;
    composites: {};
};
export type VipAccessLogGetPayload<S extends boolean | null | undefined | VipAccessLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload, S>;
export type VipAccessLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VipAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VipAccessLogCountAggregateInputType | true;
};
export interface VipAccessLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VipAccessLog'];
        meta: {
            name: 'VipAccessLog';
        };
    };
    /**
     * Find zero or one VipAccessLog that matches the filter.
     * @param {VipAccessLogFindUniqueArgs} args - Arguments to find a VipAccessLog
     * @example
     * // Get one VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VipAccessLogFindUniqueArgs>(args: Prisma.SelectSubset<T, VipAccessLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VipAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VipAccessLogFindUniqueOrThrowArgs} args - Arguments to find a VipAccessLog
     * @example
     * // Get one VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VipAccessLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VipAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VipAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogFindFirstArgs} args - Arguments to find a VipAccessLog
     * @example
     * // Get one VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VipAccessLogFindFirstArgs>(args?: Prisma.SelectSubset<T, VipAccessLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VipAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogFindFirstOrThrowArgs} args - Arguments to find a VipAccessLog
     * @example
     * // Get one VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VipAccessLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VipAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VipAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VipAccessLogs
     * const vipAccessLogs = await prisma.vipAccessLog.findMany()
     *
     * // Get first 10 VipAccessLogs
     * const vipAccessLogs = await prisma.vipAccessLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vipAccessLogWithIdOnly = await prisma.vipAccessLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VipAccessLogFindManyArgs>(args?: Prisma.SelectSubset<T, VipAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VipAccessLog.
     * @param {VipAccessLogCreateArgs} args - Arguments to create a VipAccessLog.
     * @example
     * // Create one VipAccessLog
     * const VipAccessLog = await prisma.vipAccessLog.create({
     *   data: {
     *     // ... data to create a VipAccessLog
     *   }
     * })
     *
     */
    create<T extends VipAccessLogCreateArgs>(args: Prisma.SelectSubset<T, VipAccessLogCreateArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VipAccessLogs.
     * @param {VipAccessLogCreateManyArgs} args - Arguments to create many VipAccessLogs.
     * @example
     * // Create many VipAccessLogs
     * const vipAccessLog = await prisma.vipAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VipAccessLogCreateManyArgs>(args?: Prisma.SelectSubset<T, VipAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VipAccessLogs and returns the data saved in the database.
     * @param {VipAccessLogCreateManyAndReturnArgs} args - Arguments to create many VipAccessLogs.
     * @example
     * // Create many VipAccessLogs
     * const vipAccessLog = await prisma.vipAccessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VipAccessLogs and only return the `id`
     * const vipAccessLogWithIdOnly = await prisma.vipAccessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VipAccessLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VipAccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VipAccessLog.
     * @param {VipAccessLogDeleteArgs} args - Arguments to delete one VipAccessLog.
     * @example
     * // Delete one VipAccessLog
     * const VipAccessLog = await prisma.vipAccessLog.delete({
     *   where: {
     *     // ... filter to delete one VipAccessLog
     *   }
     * })
     *
     */
    delete<T extends VipAccessLogDeleteArgs>(args: Prisma.SelectSubset<T, VipAccessLogDeleteArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VipAccessLog.
     * @param {VipAccessLogUpdateArgs} args - Arguments to update one VipAccessLog.
     * @example
     * // Update one VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VipAccessLogUpdateArgs>(args: Prisma.SelectSubset<T, VipAccessLogUpdateArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VipAccessLogs.
     * @param {VipAccessLogDeleteManyArgs} args - Arguments to filter VipAccessLogs to delete.
     * @example
     * // Delete a few VipAccessLogs
     * const { count } = await prisma.vipAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VipAccessLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, VipAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VipAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VipAccessLogs
     * const vipAccessLog = await prisma.vipAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VipAccessLogUpdateManyArgs>(args: Prisma.SelectSubset<T, VipAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VipAccessLogs and returns the data updated in the database.
     * @param {VipAccessLogUpdateManyAndReturnArgs} args - Arguments to update many VipAccessLogs.
     * @example
     * // Update many VipAccessLogs
     * const vipAccessLog = await prisma.vipAccessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VipAccessLogs and only return the `id`
     * const vipAccessLogWithIdOnly = await prisma.vipAccessLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends VipAccessLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VipAccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VipAccessLog.
     * @param {VipAccessLogUpsertArgs} args - Arguments to update or create a VipAccessLog.
     * @example
     * // Update or create a VipAccessLog
     * const vipAccessLog = await prisma.vipAccessLog.upsert({
     *   create: {
     *     // ... data to create a VipAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VipAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends VipAccessLogUpsertArgs>(args: Prisma.SelectSubset<T, VipAccessLogUpsertArgs<ExtArgs>>): Prisma.Prisma__VipAccessLogClient<runtime.Types.Result.GetResult<Prisma.$VipAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VipAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogCountArgs} args - Arguments to filter VipAccessLogs to count.
     * @example
     * // Count the number of VipAccessLogs
     * const count = await prisma.vipAccessLog.count({
     *   where: {
     *     // ... the filter for the VipAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends VipAccessLogCountArgs>(args?: Prisma.Subset<T, VipAccessLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VipAccessLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VipAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VipAccessLogAggregateArgs>(args: Prisma.Subset<T, VipAccessLogAggregateArgs>): Prisma.PrismaPromise<GetVipAccessLogAggregateType<T>>;
    /**
     * Group by VipAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAccessLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VipAccessLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VipAccessLogGroupByArgs['orderBy'];
    } : {
        orderBy?: VipAccessLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VipAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVipAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VipAccessLog model
     */
    readonly fields: VipAccessLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VipAccessLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VipAccessLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the VipAccessLog model
 */
export interface VipAccessLogFieldRefs {
    readonly id: Prisma.FieldRef<"VipAccessLog", 'String'>;
    readonly userId: Prisma.FieldRef<"VipAccessLog", 'String'>;
    readonly eventId: Prisma.FieldRef<"VipAccessLog", 'String'>;
    readonly accessType: Prisma.FieldRef<"VipAccessLog", 'String'>;
    readonly ticketId: Prisma.FieldRef<"VipAccessLog", 'String'>;
    readonly grantedAt: Prisma.FieldRef<"VipAccessLog", 'DateTime'>;
}
/**
 * VipAccessLog findUnique
 */
export type VipAccessLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter, which VipAccessLog to fetch.
     */
    where: Prisma.VipAccessLogWhereUniqueInput;
};
/**
 * VipAccessLog findUniqueOrThrow
 */
export type VipAccessLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter, which VipAccessLog to fetch.
     */
    where: Prisma.VipAccessLogWhereUniqueInput;
};
/**
 * VipAccessLog findFirst
 */
export type VipAccessLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter, which VipAccessLog to fetch.
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VipAccessLogs to fetch.
     */
    orderBy?: Prisma.VipAccessLogOrderByWithRelationInput | Prisma.VipAccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VipAccessLogs.
     */
    cursor?: Prisma.VipAccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VipAccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VipAccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VipAccessLogs.
     */
    distinct?: Prisma.VipAccessLogScalarFieldEnum | Prisma.VipAccessLogScalarFieldEnum[];
};
/**
 * VipAccessLog findFirstOrThrow
 */
export type VipAccessLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter, which VipAccessLog to fetch.
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VipAccessLogs to fetch.
     */
    orderBy?: Prisma.VipAccessLogOrderByWithRelationInput | Prisma.VipAccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VipAccessLogs.
     */
    cursor?: Prisma.VipAccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VipAccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VipAccessLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VipAccessLogs.
     */
    distinct?: Prisma.VipAccessLogScalarFieldEnum | Prisma.VipAccessLogScalarFieldEnum[];
};
/**
 * VipAccessLog findMany
 */
export type VipAccessLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter, which VipAccessLogs to fetch.
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VipAccessLogs to fetch.
     */
    orderBy?: Prisma.VipAccessLogOrderByWithRelationInput | Prisma.VipAccessLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VipAccessLogs.
     */
    cursor?: Prisma.VipAccessLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VipAccessLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VipAccessLogs.
     */
    skip?: number;
    distinct?: Prisma.VipAccessLogScalarFieldEnum | Prisma.VipAccessLogScalarFieldEnum[];
};
/**
 * VipAccessLog create
 */
export type VipAccessLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * The data needed to create a VipAccessLog.
     */
    data: Prisma.XOR<Prisma.VipAccessLogCreateInput, Prisma.VipAccessLogUncheckedCreateInput>;
};
/**
 * VipAccessLog createMany
 */
export type VipAccessLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VipAccessLogs.
     */
    data: Prisma.VipAccessLogCreateManyInput | Prisma.VipAccessLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VipAccessLog createManyAndReturn
 */
export type VipAccessLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * The data used to create many VipAccessLogs.
     */
    data: Prisma.VipAccessLogCreateManyInput | Prisma.VipAccessLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VipAccessLog update
 */
export type VipAccessLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * The data needed to update a VipAccessLog.
     */
    data: Prisma.XOR<Prisma.VipAccessLogUpdateInput, Prisma.VipAccessLogUncheckedUpdateInput>;
    /**
     * Choose, which VipAccessLog to update.
     */
    where: Prisma.VipAccessLogWhereUniqueInput;
};
/**
 * VipAccessLog updateMany
 */
export type VipAccessLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VipAccessLogs.
     */
    data: Prisma.XOR<Prisma.VipAccessLogUpdateManyMutationInput, Prisma.VipAccessLogUncheckedUpdateManyInput>;
    /**
     * Filter which VipAccessLogs to update
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * Limit how many VipAccessLogs to update.
     */
    limit?: number;
};
/**
 * VipAccessLog updateManyAndReturn
 */
export type VipAccessLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * The data used to update VipAccessLogs.
     */
    data: Prisma.XOR<Prisma.VipAccessLogUpdateManyMutationInput, Prisma.VipAccessLogUncheckedUpdateManyInput>;
    /**
     * Filter which VipAccessLogs to update
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * Limit how many VipAccessLogs to update.
     */
    limit?: number;
};
/**
 * VipAccessLog upsert
 */
export type VipAccessLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * The filter to search for the VipAccessLog to update in case it exists.
     */
    where: Prisma.VipAccessLogWhereUniqueInput;
    /**
     * In case the VipAccessLog found by the `where` argument doesn't exist, create a new VipAccessLog with this data.
     */
    create: Prisma.XOR<Prisma.VipAccessLogCreateInput, Prisma.VipAccessLogUncheckedCreateInput>;
    /**
     * In case the VipAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VipAccessLogUpdateInput, Prisma.VipAccessLogUncheckedUpdateInput>;
};
/**
 * VipAccessLog delete
 */
export type VipAccessLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
    /**
     * Filter which VipAccessLog to delete.
     */
    where: Prisma.VipAccessLogWhereUniqueInput;
};
/**
 * VipAccessLog deleteMany
 */
export type VipAccessLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VipAccessLogs to delete
     */
    where?: Prisma.VipAccessLogWhereInput;
    /**
     * Limit how many VipAccessLogs to delete.
     */
    limit?: number;
};
/**
 * VipAccessLog without action
 */
export type VipAccessLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipAccessLog
     */
    select?: Prisma.VipAccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VipAccessLog
     */
    omit?: Prisma.VipAccessLogOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=VipAccessLog.d.ts.map