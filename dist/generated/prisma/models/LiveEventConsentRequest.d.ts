import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LiveEventConsentRequest
 *
 */
export type LiveEventConsentRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$LiveEventConsentRequestPayload>;
export type AggregateLiveEventConsentRequest = {
    _count: LiveEventConsentRequestCountAggregateOutputType | null;
    _min: LiveEventConsentRequestMinAggregateOutputType | null;
    _max: LiveEventConsentRequestMaxAggregateOutputType | null;
};
export type LiveEventConsentRequestMinAggregateOutputType = {
    id: string | null;
    organizerEmail: string | null;
    eventName: string | null;
    eventType: string | null;
    consentGiven: boolean | null;
    pdfRequestedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LiveEventConsentRequestMaxAggregateOutputType = {
    id: string | null;
    organizerEmail: string | null;
    eventName: string | null;
    eventType: string | null;
    consentGiven: boolean | null;
    pdfRequestedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LiveEventConsentRequestCountAggregateOutputType = {
    id: number;
    organizerEmail: number;
    eventName: number;
    eventType: number;
    consentGiven: number;
    pdfRequestedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LiveEventConsentRequestMinAggregateInputType = {
    id?: true;
    organizerEmail?: true;
    eventName?: true;
    eventType?: true;
    consentGiven?: true;
    pdfRequestedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LiveEventConsentRequestMaxAggregateInputType = {
    id?: true;
    organizerEmail?: true;
    eventName?: true;
    eventType?: true;
    consentGiven?: true;
    pdfRequestedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LiveEventConsentRequestCountAggregateInputType = {
    id?: true;
    organizerEmail?: true;
    eventName?: true;
    eventType?: true;
    consentGiven?: true;
    pdfRequestedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LiveEventConsentRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LiveEventConsentRequest to aggregate.
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveEventConsentRequests to fetch.
     */
    orderBy?: Prisma.LiveEventConsentRequestOrderByWithRelationInput | Prisma.LiveEventConsentRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LiveEventConsentRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveEventConsentRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveEventConsentRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LiveEventConsentRequests
    **/
    _count?: true | LiveEventConsentRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LiveEventConsentRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LiveEventConsentRequestMaxAggregateInputType;
};
export type GetLiveEventConsentRequestAggregateType<T extends LiveEventConsentRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateLiveEventConsentRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLiveEventConsentRequest[P]> : Prisma.GetScalarType<T[P], AggregateLiveEventConsentRequest[P]>;
};
export type LiveEventConsentRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LiveEventConsentRequestWhereInput;
    orderBy?: Prisma.LiveEventConsentRequestOrderByWithAggregationInput | Prisma.LiveEventConsentRequestOrderByWithAggregationInput[];
    by: Prisma.LiveEventConsentRequestScalarFieldEnum[] | Prisma.LiveEventConsentRequestScalarFieldEnum;
    having?: Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LiveEventConsentRequestCountAggregateInputType | true;
    _min?: LiveEventConsentRequestMinAggregateInputType;
    _max?: LiveEventConsentRequestMaxAggregateInputType;
};
export type LiveEventConsentRequestGroupByOutputType = {
    id: string;
    organizerEmail: string;
    eventName: string;
    eventType: string;
    consentGiven: boolean;
    pdfRequestedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LiveEventConsentRequestCountAggregateOutputType | null;
    _min: LiveEventConsentRequestMinAggregateOutputType | null;
    _max: LiveEventConsentRequestMaxAggregateOutputType | null;
};
type GetLiveEventConsentRequestGroupByPayload<T extends LiveEventConsentRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LiveEventConsentRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LiveEventConsentRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LiveEventConsentRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LiveEventConsentRequestGroupByOutputType[P]>;
}>>;
export type LiveEventConsentRequestWhereInput = {
    AND?: Prisma.LiveEventConsentRequestWhereInput | Prisma.LiveEventConsentRequestWhereInput[];
    OR?: Prisma.LiveEventConsentRequestWhereInput[];
    NOT?: Prisma.LiveEventConsentRequestWhereInput | Prisma.LiveEventConsentRequestWhereInput[];
    id?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    organizerEmail?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    eventName?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    eventType?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    consentGiven?: Prisma.BoolFilter<"LiveEventConsentRequest"> | boolean;
    pdfRequestedAt?: Prisma.DateTimeNullableFilter<"LiveEventConsentRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LiveEventConsentRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LiveEventConsentRequest"> | Date | string;
};
export type LiveEventConsentRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizerEmail?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    pdfRequestedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LiveEventConsentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LiveEventConsentRequestWhereInput | Prisma.LiveEventConsentRequestWhereInput[];
    OR?: Prisma.LiveEventConsentRequestWhereInput[];
    NOT?: Prisma.LiveEventConsentRequestWhereInput | Prisma.LiveEventConsentRequestWhereInput[];
    organizerEmail?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    eventName?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    eventType?: Prisma.StringFilter<"LiveEventConsentRequest"> | string;
    consentGiven?: Prisma.BoolFilter<"LiveEventConsentRequest"> | boolean;
    pdfRequestedAt?: Prisma.DateTimeNullableFilter<"LiveEventConsentRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LiveEventConsentRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LiveEventConsentRequest"> | Date | string;
}, "id">;
export type LiveEventConsentRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizerEmail?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    pdfRequestedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LiveEventConsentRequestCountOrderByAggregateInput;
    _max?: Prisma.LiveEventConsentRequestMaxOrderByAggregateInput;
    _min?: Prisma.LiveEventConsentRequestMinOrderByAggregateInput;
};
export type LiveEventConsentRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput | Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput | Prisma.LiveEventConsentRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LiveEventConsentRequest"> | string;
    organizerEmail?: Prisma.StringWithAggregatesFilter<"LiveEventConsentRequest"> | string;
    eventName?: Prisma.StringWithAggregatesFilter<"LiveEventConsentRequest"> | string;
    eventType?: Prisma.StringWithAggregatesFilter<"LiveEventConsentRequest"> | string;
    consentGiven?: Prisma.BoolWithAggregatesFilter<"LiveEventConsentRequest"> | boolean;
    pdfRequestedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LiveEventConsentRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LiveEventConsentRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LiveEventConsentRequest"> | Date | string;
};
export type LiveEventConsentRequestCreateInput = {
    id?: string;
    organizerEmail: string;
    eventName: string;
    eventType: string;
    consentGiven?: boolean;
    pdfRequestedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LiveEventConsentRequestUncheckedCreateInput = {
    id?: string;
    organizerEmail: string;
    eventName: string;
    eventType: string;
    consentGiven?: boolean;
    pdfRequestedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LiveEventConsentRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pdfRequestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LiveEventConsentRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pdfRequestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LiveEventConsentRequestCreateManyInput = {
    id?: string;
    organizerEmail: string;
    eventName: string;
    eventType: string;
    consentGiven?: boolean;
    pdfRequestedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LiveEventConsentRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pdfRequestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LiveEventConsentRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pdfRequestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LiveEventConsentRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerEmail?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    pdfRequestedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LiveEventConsentRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerEmail?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    pdfRequestedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LiveEventConsentRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizerEmail?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    pdfRequestedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LiveEventConsentRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerEmail?: boolean;
    eventName?: boolean;
    eventType?: boolean;
    consentGiven?: boolean;
    pdfRequestedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["liveEventConsentRequest"]>;
export type LiveEventConsentRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerEmail?: boolean;
    eventName?: boolean;
    eventType?: boolean;
    consentGiven?: boolean;
    pdfRequestedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["liveEventConsentRequest"]>;
export type LiveEventConsentRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizerEmail?: boolean;
    eventName?: boolean;
    eventType?: boolean;
    consentGiven?: boolean;
    pdfRequestedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["liveEventConsentRequest"]>;
export type LiveEventConsentRequestSelectScalar = {
    id?: boolean;
    organizerEmail?: boolean;
    eventName?: boolean;
    eventType?: boolean;
    consentGiven?: boolean;
    pdfRequestedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LiveEventConsentRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizerEmail" | "eventName" | "eventType" | "consentGiven" | "pdfRequestedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["liveEventConsentRequest"]>;
export type $LiveEventConsentRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LiveEventConsentRequest";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizerEmail: string;
        eventName: string;
        eventType: string;
        consentGiven: boolean;
        pdfRequestedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["liveEventConsentRequest"]>;
    composites: {};
};
export type LiveEventConsentRequestGetPayload<S extends boolean | null | undefined | LiveEventConsentRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload, S>;
export type LiveEventConsentRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LiveEventConsentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LiveEventConsentRequestCountAggregateInputType | true;
};
export interface LiveEventConsentRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LiveEventConsentRequest'];
        meta: {
            name: 'LiveEventConsentRequest';
        };
    };
    /**
     * Find zero or one LiveEventConsentRequest that matches the filter.
     * @param {LiveEventConsentRequestFindUniqueArgs} args - Arguments to find a LiveEventConsentRequest
     * @example
     * // Get one LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveEventConsentRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LiveEventConsentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveEventConsentRequestFindUniqueOrThrowArgs} args - Arguments to find a LiveEventConsentRequest
     * @example
     * // Get one LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveEventConsentRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LiveEventConsentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestFindFirstArgs} args - Arguments to find a LiveEventConsentRequest
     * @example
     * // Get one LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveEventConsentRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LiveEventConsentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestFindFirstOrThrowArgs} args - Arguments to find a LiveEventConsentRequest
     * @example
     * // Get one LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveEventConsentRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LiveEventConsentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveEventConsentRequests
     * const liveEventConsentRequests = await prisma.liveEventConsentRequest.findMany()
     *
     * // Get first 10 LiveEventConsentRequests
     * const liveEventConsentRequests = await prisma.liveEventConsentRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const liveEventConsentRequestWithIdOnly = await prisma.liveEventConsentRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LiveEventConsentRequestFindManyArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LiveEventConsentRequest.
     * @param {LiveEventConsentRequestCreateArgs} args - Arguments to create a LiveEventConsentRequest.
     * @example
     * // Create one LiveEventConsentRequest
     * const LiveEventConsentRequest = await prisma.liveEventConsentRequest.create({
     *   data: {
     *     // ... data to create a LiveEventConsentRequest
     *   }
     * })
     *
     */
    create<T extends LiveEventConsentRequestCreateArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestCreateArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LiveEventConsentRequests.
     * @param {LiveEventConsentRequestCreateManyArgs} args - Arguments to create many LiveEventConsentRequests.
     * @example
     * // Create many LiveEventConsentRequests
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LiveEventConsentRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LiveEventConsentRequests and returns the data saved in the database.
     * @param {LiveEventConsentRequestCreateManyAndReturnArgs} args - Arguments to create many LiveEventConsentRequests.
     * @example
     * // Create many LiveEventConsentRequests
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LiveEventConsentRequests and only return the `id`
     * const liveEventConsentRequestWithIdOnly = await prisma.liveEventConsentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LiveEventConsentRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LiveEventConsentRequest.
     * @param {LiveEventConsentRequestDeleteArgs} args - Arguments to delete one LiveEventConsentRequest.
     * @example
     * // Delete one LiveEventConsentRequest
     * const LiveEventConsentRequest = await prisma.liveEventConsentRequest.delete({
     *   where: {
     *     // ... filter to delete one LiveEventConsentRequest
     *   }
     * })
     *
     */
    delete<T extends LiveEventConsentRequestDeleteArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LiveEventConsentRequest.
     * @param {LiveEventConsentRequestUpdateArgs} args - Arguments to update one LiveEventConsentRequest.
     * @example
     * // Update one LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LiveEventConsentRequestUpdateArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LiveEventConsentRequests.
     * @param {LiveEventConsentRequestDeleteManyArgs} args - Arguments to filter LiveEventConsentRequests to delete.
     * @example
     * // Delete a few LiveEventConsentRequests
     * const { count } = await prisma.liveEventConsentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LiveEventConsentRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, LiveEventConsentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LiveEventConsentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveEventConsentRequests
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LiveEventConsentRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LiveEventConsentRequests and returns the data updated in the database.
     * @param {LiveEventConsentRequestUpdateManyAndReturnArgs} args - Arguments to update many LiveEventConsentRequests.
     * @example
     * // Update many LiveEventConsentRequests
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LiveEventConsentRequests and only return the `id`
     * const liveEventConsentRequestWithIdOnly = await prisma.liveEventConsentRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveEventConsentRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LiveEventConsentRequest.
     * @param {LiveEventConsentRequestUpsertArgs} args - Arguments to update or create a LiveEventConsentRequest.
     * @example
     * // Update or create a LiveEventConsentRequest
     * const liveEventConsentRequest = await prisma.liveEventConsentRequest.upsert({
     *   create: {
     *     // ... data to create a LiveEventConsentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveEventConsentRequest we want to update
     *   }
     * })
     */
    upsert<T extends LiveEventConsentRequestUpsertArgs>(args: Prisma.SelectSubset<T, LiveEventConsentRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__LiveEventConsentRequestClient<runtime.Types.Result.GetResult<Prisma.$LiveEventConsentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LiveEventConsentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestCountArgs} args - Arguments to filter LiveEventConsentRequests to count.
     * @example
     * // Count the number of LiveEventConsentRequests
     * const count = await prisma.liveEventConsentRequest.count({
     *   where: {
     *     // ... the filter for the LiveEventConsentRequests we want to count
     *   }
     * })
    **/
    count<T extends LiveEventConsentRequestCountArgs>(args?: Prisma.Subset<T, LiveEventConsentRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LiveEventConsentRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LiveEventConsentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveEventConsentRequestAggregateArgs>(args: Prisma.Subset<T, LiveEventConsentRequestAggregateArgs>): Prisma.PrismaPromise<GetLiveEventConsentRequestAggregateType<T>>;
    /**
     * Group by LiveEventConsentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveEventConsentRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LiveEventConsentRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LiveEventConsentRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: LiveEventConsentRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LiveEventConsentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveEventConsentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LiveEventConsentRequest model
     */
    readonly fields: LiveEventConsentRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LiveEventConsentRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LiveEventConsentRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the LiveEventConsentRequest model
 */
export interface LiveEventConsentRequestFieldRefs {
    readonly id: Prisma.FieldRef<"LiveEventConsentRequest", 'String'>;
    readonly organizerEmail: Prisma.FieldRef<"LiveEventConsentRequest", 'String'>;
    readonly eventName: Prisma.FieldRef<"LiveEventConsentRequest", 'String'>;
    readonly eventType: Prisma.FieldRef<"LiveEventConsentRequest", 'String'>;
    readonly consentGiven: Prisma.FieldRef<"LiveEventConsentRequest", 'Boolean'>;
    readonly pdfRequestedAt: Prisma.FieldRef<"LiveEventConsentRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LiveEventConsentRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LiveEventConsentRequest", 'DateTime'>;
}
/**
 * LiveEventConsentRequest findUnique
 */
export type LiveEventConsentRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter, which LiveEventConsentRequest to fetch.
     */
    where: Prisma.LiveEventConsentRequestWhereUniqueInput;
};
/**
 * LiveEventConsentRequest findUniqueOrThrow
 */
export type LiveEventConsentRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter, which LiveEventConsentRequest to fetch.
     */
    where: Prisma.LiveEventConsentRequestWhereUniqueInput;
};
/**
 * LiveEventConsentRequest findFirst
 */
export type LiveEventConsentRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter, which LiveEventConsentRequest to fetch.
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveEventConsentRequests to fetch.
     */
    orderBy?: Prisma.LiveEventConsentRequestOrderByWithRelationInput | Prisma.LiveEventConsentRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LiveEventConsentRequests.
     */
    cursor?: Prisma.LiveEventConsentRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveEventConsentRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveEventConsentRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LiveEventConsentRequests.
     */
    distinct?: Prisma.LiveEventConsentRequestScalarFieldEnum | Prisma.LiveEventConsentRequestScalarFieldEnum[];
};
/**
 * LiveEventConsentRequest findFirstOrThrow
 */
export type LiveEventConsentRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter, which LiveEventConsentRequest to fetch.
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveEventConsentRequests to fetch.
     */
    orderBy?: Prisma.LiveEventConsentRequestOrderByWithRelationInput | Prisma.LiveEventConsentRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LiveEventConsentRequests.
     */
    cursor?: Prisma.LiveEventConsentRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveEventConsentRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveEventConsentRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LiveEventConsentRequests.
     */
    distinct?: Prisma.LiveEventConsentRequestScalarFieldEnum | Prisma.LiveEventConsentRequestScalarFieldEnum[];
};
/**
 * LiveEventConsentRequest findMany
 */
export type LiveEventConsentRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter, which LiveEventConsentRequests to fetch.
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveEventConsentRequests to fetch.
     */
    orderBy?: Prisma.LiveEventConsentRequestOrderByWithRelationInput | Prisma.LiveEventConsentRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LiveEventConsentRequests.
     */
    cursor?: Prisma.LiveEventConsentRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveEventConsentRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveEventConsentRequests.
     */
    skip?: number;
    distinct?: Prisma.LiveEventConsentRequestScalarFieldEnum | Prisma.LiveEventConsentRequestScalarFieldEnum[];
};
/**
 * LiveEventConsentRequest create
 */
export type LiveEventConsentRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * The data needed to create a LiveEventConsentRequest.
     */
    data: Prisma.XOR<Prisma.LiveEventConsentRequestCreateInput, Prisma.LiveEventConsentRequestUncheckedCreateInput>;
};
/**
 * LiveEventConsentRequest createMany
 */
export type LiveEventConsentRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveEventConsentRequests.
     */
    data: Prisma.LiveEventConsentRequestCreateManyInput | Prisma.LiveEventConsentRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LiveEventConsentRequest createManyAndReturn
 */
export type LiveEventConsentRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many LiveEventConsentRequests.
     */
    data: Prisma.LiveEventConsentRequestCreateManyInput | Prisma.LiveEventConsentRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LiveEventConsentRequest update
 */
export type LiveEventConsentRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * The data needed to update a LiveEventConsentRequest.
     */
    data: Prisma.XOR<Prisma.LiveEventConsentRequestUpdateInput, Prisma.LiveEventConsentRequestUncheckedUpdateInput>;
    /**
     * Choose, which LiveEventConsentRequest to update.
     */
    where: Prisma.LiveEventConsentRequestWhereUniqueInput;
};
/**
 * LiveEventConsentRequest updateMany
 */
export type LiveEventConsentRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveEventConsentRequests.
     */
    data: Prisma.XOR<Prisma.LiveEventConsentRequestUpdateManyMutationInput, Prisma.LiveEventConsentRequestUncheckedUpdateManyInput>;
    /**
     * Filter which LiveEventConsentRequests to update
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * Limit how many LiveEventConsentRequests to update.
     */
    limit?: number;
};
/**
 * LiveEventConsentRequest updateManyAndReturn
 */
export type LiveEventConsentRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * The data used to update LiveEventConsentRequests.
     */
    data: Prisma.XOR<Prisma.LiveEventConsentRequestUpdateManyMutationInput, Prisma.LiveEventConsentRequestUncheckedUpdateManyInput>;
    /**
     * Filter which LiveEventConsentRequests to update
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * Limit how many LiveEventConsentRequests to update.
     */
    limit?: number;
};
/**
 * LiveEventConsentRequest upsert
 */
export type LiveEventConsentRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * The filter to search for the LiveEventConsentRequest to update in case it exists.
     */
    where: Prisma.LiveEventConsentRequestWhereUniqueInput;
    /**
     * In case the LiveEventConsentRequest found by the `where` argument doesn't exist, create a new LiveEventConsentRequest with this data.
     */
    create: Prisma.XOR<Prisma.LiveEventConsentRequestCreateInput, Prisma.LiveEventConsentRequestUncheckedCreateInput>;
    /**
     * In case the LiveEventConsentRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LiveEventConsentRequestUpdateInput, Prisma.LiveEventConsentRequestUncheckedUpdateInput>;
};
/**
 * LiveEventConsentRequest delete
 */
export type LiveEventConsentRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
    /**
     * Filter which LiveEventConsentRequest to delete.
     */
    where: Prisma.LiveEventConsentRequestWhereUniqueInput;
};
/**
 * LiveEventConsentRequest deleteMany
 */
export type LiveEventConsentRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LiveEventConsentRequests to delete
     */
    where?: Prisma.LiveEventConsentRequestWhereInput;
    /**
     * Limit how many LiveEventConsentRequests to delete.
     */
    limit?: number;
};
/**
 * LiveEventConsentRequest without action
 */
export type LiveEventConsentRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveEventConsentRequest
     */
    select?: Prisma.LiveEventConsentRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveEventConsentRequest
     */
    omit?: Prisma.LiveEventConsentRequestOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LiveEventConsentRequest.d.ts.map