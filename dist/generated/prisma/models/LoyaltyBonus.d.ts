import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LoyaltyBonus
 *
 */
export type LoyaltyBonusModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyBonusPayload>;
export type AggregateLoyaltyBonus = {
    _count: LoyaltyBonusCountAggregateOutputType | null;
    _avg: LoyaltyBonusAvgAggregateOutputType | null;
    _sum: LoyaltyBonusSumAggregateOutputType | null;
    _min: LoyaltyBonusMinAggregateOutputType | null;
    _max: LoyaltyBonusMaxAggregateOutputType | null;
};
export type LoyaltyBonusAvgAggregateOutputType = {
    value: number | null;
};
export type LoyaltyBonusSumAggregateOutputType = {
    value: number | null;
};
export type LoyaltyBonusMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    bonusType: string | null;
    value: number | null;
    actionType: string | null;
    minLevel: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyBonusMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    bonusType: string | null;
    value: number | null;
    actionType: string | null;
    minLevel: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyBonusCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    bonusType: number;
    value: number;
    actionType: number;
    minLevel: number;
    conditions: number;
    startDate: number;
    endDate: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LoyaltyBonusAvgAggregateInputType = {
    value?: true;
};
export type LoyaltyBonusSumAggregateInputType = {
    value?: true;
};
export type LoyaltyBonusMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bonusType?: true;
    value?: true;
    actionType?: true;
    minLevel?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyBonusMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bonusType?: true;
    value?: true;
    actionType?: true;
    minLevel?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyBonusCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    bonusType?: true;
    value?: true;
    actionType?: true;
    minLevel?: true;
    conditions?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LoyaltyBonusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyBonus to aggregate.
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyBonuses to fetch.
     */
    orderBy?: Prisma.LoyaltyBonusOrderByWithRelationInput | Prisma.LoyaltyBonusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LoyaltyBonusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyBonuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyBonuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LoyaltyBonuses
    **/
    _count?: true | LoyaltyBonusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LoyaltyBonusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LoyaltyBonusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyBonusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyBonusMaxAggregateInputType;
};
export type GetLoyaltyBonusAggregateType<T extends LoyaltyBonusAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyBonus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyBonus[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyBonus[P]>;
};
export type LoyaltyBonusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyBonusWhereInput;
    orderBy?: Prisma.LoyaltyBonusOrderByWithAggregationInput | Prisma.LoyaltyBonusOrderByWithAggregationInput[];
    by: Prisma.LoyaltyBonusScalarFieldEnum[] | Prisma.LoyaltyBonusScalarFieldEnum;
    having?: Prisma.LoyaltyBonusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyBonusCountAggregateInputType | true;
    _avg?: LoyaltyBonusAvgAggregateInputType;
    _sum?: LoyaltyBonusSumAggregateInputType;
    _min?: LoyaltyBonusMinAggregateInputType;
    _max?: LoyaltyBonusMaxAggregateInputType;
};
export type LoyaltyBonusGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    bonusType: string;
    value: number;
    actionType: string | null;
    minLevel: string | null;
    conditions: runtime.JsonValue;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LoyaltyBonusCountAggregateOutputType | null;
    _avg: LoyaltyBonusAvgAggregateOutputType | null;
    _sum: LoyaltyBonusSumAggregateOutputType | null;
    _min: LoyaltyBonusMinAggregateOutputType | null;
    _max: LoyaltyBonusMaxAggregateOutputType | null;
};
type GetLoyaltyBonusGroupByPayload<T extends LoyaltyBonusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyBonusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyBonusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyBonusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyBonusGroupByOutputType[P]>;
}>>;
export type LoyaltyBonusWhereInput = {
    AND?: Prisma.LoyaltyBonusWhereInput | Prisma.LoyaltyBonusWhereInput[];
    OR?: Prisma.LoyaltyBonusWhereInput[];
    NOT?: Prisma.LoyaltyBonusWhereInput | Prisma.LoyaltyBonusWhereInput[];
    id?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    title?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    description?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    bonusType?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    value?: Prisma.FloatFilter<"LoyaltyBonus"> | number;
    actionType?: Prisma.StringNullableFilter<"LoyaltyBonus"> | string | null;
    minLevel?: Prisma.StringNullableFilter<"LoyaltyBonus"> | string | null;
    conditions?: Prisma.JsonFilter<"LoyaltyBonus">;
    startDate?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    isActive?: Prisma.BoolFilter<"LoyaltyBonus"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
};
export type LoyaltyBonusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    bonusType?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    actionType?: Prisma.SortOrderInput | Prisma.SortOrder;
    minLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyBonusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LoyaltyBonusWhereInput | Prisma.LoyaltyBonusWhereInput[];
    OR?: Prisma.LoyaltyBonusWhereInput[];
    NOT?: Prisma.LoyaltyBonusWhereInput | Prisma.LoyaltyBonusWhereInput[];
    title?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    description?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    bonusType?: Prisma.StringFilter<"LoyaltyBonus"> | string;
    value?: Prisma.FloatFilter<"LoyaltyBonus"> | number;
    actionType?: Prisma.StringNullableFilter<"LoyaltyBonus"> | string | null;
    minLevel?: Prisma.StringNullableFilter<"LoyaltyBonus"> | string | null;
    conditions?: Prisma.JsonFilter<"LoyaltyBonus">;
    startDate?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    isActive?: Prisma.BoolFilter<"LoyaltyBonus"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyBonus"> | Date | string;
}, "id">;
export type LoyaltyBonusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    bonusType?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    actionType?: Prisma.SortOrderInput | Prisma.SortOrder;
    minLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyBonusCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyBonusAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyBonusMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyBonusMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyBonusSumOrderByAggregateInput;
};
export type LoyaltyBonusScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyBonusScalarWhereWithAggregatesInput | Prisma.LoyaltyBonusScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyBonusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyBonusScalarWhereWithAggregatesInput | Prisma.LoyaltyBonusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LoyaltyBonus"> | string;
    title?: Prisma.StringWithAggregatesFilter<"LoyaltyBonus"> | string;
    description?: Prisma.StringWithAggregatesFilter<"LoyaltyBonus"> | string;
    bonusType?: Prisma.StringWithAggregatesFilter<"LoyaltyBonus"> | string;
    value?: Prisma.FloatWithAggregatesFilter<"LoyaltyBonus"> | number;
    actionType?: Prisma.StringNullableWithAggregatesFilter<"LoyaltyBonus"> | string | null;
    minLevel?: Prisma.StringNullableWithAggregatesFilter<"LoyaltyBonus"> | string | null;
    conditions?: Prisma.JsonWithAggregatesFilter<"LoyaltyBonus">;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyBonus"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyBonus"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"LoyaltyBonus"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyBonus"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyBonus"> | Date | string;
};
export type LoyaltyBonusCreateInput = {
    id?: string;
    title: string;
    description: string;
    bonusType: string;
    value: number;
    actionType?: string | null;
    minLevel?: string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyBonusUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    bonusType: string;
    value: number;
    actionType?: string | null;
    minLevel?: string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyBonusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    bonusType?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    actionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyBonusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    bonusType?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    actionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyBonusCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    bonusType: string;
    value: number;
    actionType?: string | null;
    minLevel?: string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyBonusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    bonusType?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    actionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyBonusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    bonusType?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    actionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyBonusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    bonusType?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyBonusAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type LoyaltyBonusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    bonusType?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyBonusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    bonusType?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyBonusSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type LoyaltyBonusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    bonusType?: boolean;
    value?: boolean;
    actionType?: boolean;
    minLevel?: boolean;
    conditions?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyBonus"]>;
export type LoyaltyBonusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    bonusType?: boolean;
    value?: boolean;
    actionType?: boolean;
    minLevel?: boolean;
    conditions?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyBonus"]>;
export type LoyaltyBonusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    bonusType?: boolean;
    value?: boolean;
    actionType?: boolean;
    minLevel?: boolean;
    conditions?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyBonus"]>;
export type LoyaltyBonusSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    bonusType?: boolean;
    value?: boolean;
    actionType?: boolean;
    minLevel?: boolean;
    conditions?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LoyaltyBonusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "bonusType" | "value" | "actionType" | "minLevel" | "conditions" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["loyaltyBonus"]>;
export type $LoyaltyBonusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyBonus";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        bonusType: string;
        value: number;
        actionType: string | null;
        minLevel: string | null;
        conditions: runtime.JsonValue;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["loyaltyBonus"]>;
    composites: {};
};
export type LoyaltyBonusGetPayload<S extends boolean | null | undefined | LoyaltyBonusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload, S>;
export type LoyaltyBonusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyBonusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyBonusCountAggregateInputType | true;
};
export interface LoyaltyBonusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyBonus'];
        meta: {
            name: 'LoyaltyBonus';
        };
    };
    /**
     * Find zero or one LoyaltyBonus that matches the filter.
     * @param {LoyaltyBonusFindUniqueArgs} args - Arguments to find a LoyaltyBonus
     * @example
     * // Get one LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyBonusFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LoyaltyBonus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoyaltyBonusFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyBonus
     * @example
     * // Get one LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyBonusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyBonus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusFindFirstArgs} args - Arguments to find a LoyaltyBonus
     * @example
     * // Get one LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyBonusFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyBonus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusFindFirstOrThrowArgs} args - Arguments to find a LoyaltyBonus
     * @example
     * // Get one LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyBonusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LoyaltyBonuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyBonuses
     * const loyaltyBonuses = await prisma.loyaltyBonus.findMany()
     *
     * // Get first 10 LoyaltyBonuses
     * const loyaltyBonuses = await prisma.loyaltyBonus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loyaltyBonusWithIdOnly = await prisma.loyaltyBonus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LoyaltyBonusFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LoyaltyBonus.
     * @param {LoyaltyBonusCreateArgs} args - Arguments to create a LoyaltyBonus.
     * @example
     * // Create one LoyaltyBonus
     * const LoyaltyBonus = await prisma.loyaltyBonus.create({
     *   data: {
     *     // ... data to create a LoyaltyBonus
     *   }
     * })
     *
     */
    create<T extends LoyaltyBonusCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LoyaltyBonuses.
     * @param {LoyaltyBonusCreateManyArgs} args - Arguments to create many LoyaltyBonuses.
     * @example
     * // Create many LoyaltyBonuses
     * const loyaltyBonus = await prisma.loyaltyBonus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LoyaltyBonusCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LoyaltyBonuses and returns the data saved in the database.
     * @param {LoyaltyBonusCreateManyAndReturnArgs} args - Arguments to create many LoyaltyBonuses.
     * @example
     * // Create many LoyaltyBonuses
     * const loyaltyBonus = await prisma.loyaltyBonus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LoyaltyBonuses and only return the `id`
     * const loyaltyBonusWithIdOnly = await prisma.loyaltyBonus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LoyaltyBonusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LoyaltyBonus.
     * @param {LoyaltyBonusDeleteArgs} args - Arguments to delete one LoyaltyBonus.
     * @example
     * // Delete one LoyaltyBonus
     * const LoyaltyBonus = await prisma.loyaltyBonus.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyBonus
     *   }
     * })
     *
     */
    delete<T extends LoyaltyBonusDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LoyaltyBonus.
     * @param {LoyaltyBonusUpdateArgs} args - Arguments to update one LoyaltyBonus.
     * @example
     * // Update one LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LoyaltyBonusUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LoyaltyBonuses.
     * @param {LoyaltyBonusDeleteManyArgs} args - Arguments to filter LoyaltyBonuses to delete.
     * @example
     * // Delete a few LoyaltyBonuses
     * const { count } = await prisma.loyaltyBonus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LoyaltyBonusDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyBonusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyBonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyBonuses
     * const loyaltyBonus = await prisma.loyaltyBonus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LoyaltyBonusUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyBonuses and returns the data updated in the database.
     * @param {LoyaltyBonusUpdateManyAndReturnArgs} args - Arguments to update many LoyaltyBonuses.
     * @example
     * // Update many LoyaltyBonuses
     * const loyaltyBonus = await prisma.loyaltyBonus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LoyaltyBonuses and only return the `id`
     * const loyaltyBonusWithIdOnly = await prisma.loyaltyBonus.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoyaltyBonusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LoyaltyBonus.
     * @param {LoyaltyBonusUpsertArgs} args - Arguments to update or create a LoyaltyBonus.
     * @example
     * // Update or create a LoyaltyBonus
     * const loyaltyBonus = await prisma.loyaltyBonus.upsert({
     *   create: {
     *     // ... data to create a LoyaltyBonus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyBonus we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyBonusUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyBonusUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyBonusClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyBonusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LoyaltyBonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusCountArgs} args - Arguments to filter LoyaltyBonuses to count.
     * @example
     * // Count the number of LoyaltyBonuses
     * const count = await prisma.loyaltyBonus.count({
     *   where: {
     *     // ... the filter for the LoyaltyBonuses we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyBonusCountArgs>(args?: Prisma.Subset<T, LoyaltyBonusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyBonusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LoyaltyBonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyBonusAggregateArgs>(args: Prisma.Subset<T, LoyaltyBonusAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyBonusAggregateType<T>>;
    /**
     * Group by LoyaltyBonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyBonusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LoyaltyBonusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyBonusGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyBonusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyBonusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyBonusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LoyaltyBonus model
     */
    readonly fields: LoyaltyBonusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LoyaltyBonus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LoyaltyBonusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the LoyaltyBonus model
 */
export interface LoyaltyBonusFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly title: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly description: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly bonusType: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly value: Prisma.FieldRef<"LoyaltyBonus", 'Float'>;
    readonly actionType: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly minLevel: Prisma.FieldRef<"LoyaltyBonus", 'String'>;
    readonly conditions: Prisma.FieldRef<"LoyaltyBonus", 'Json'>;
    readonly startDate: Prisma.FieldRef<"LoyaltyBonus", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"LoyaltyBonus", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"LoyaltyBonus", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyBonus", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LoyaltyBonus", 'DateTime'>;
}
/**
 * LoyaltyBonus findUnique
 */
export type LoyaltyBonusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter, which LoyaltyBonus to fetch.
     */
    where: Prisma.LoyaltyBonusWhereUniqueInput;
};
/**
 * LoyaltyBonus findUniqueOrThrow
 */
export type LoyaltyBonusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter, which LoyaltyBonus to fetch.
     */
    where: Prisma.LoyaltyBonusWhereUniqueInput;
};
/**
 * LoyaltyBonus findFirst
 */
export type LoyaltyBonusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter, which LoyaltyBonus to fetch.
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyBonuses to fetch.
     */
    orderBy?: Prisma.LoyaltyBonusOrderByWithRelationInput | Prisma.LoyaltyBonusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyBonuses.
     */
    cursor?: Prisma.LoyaltyBonusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyBonuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyBonuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyBonuses.
     */
    distinct?: Prisma.LoyaltyBonusScalarFieldEnum | Prisma.LoyaltyBonusScalarFieldEnum[];
};
/**
 * LoyaltyBonus findFirstOrThrow
 */
export type LoyaltyBonusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter, which LoyaltyBonus to fetch.
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyBonuses to fetch.
     */
    orderBy?: Prisma.LoyaltyBonusOrderByWithRelationInput | Prisma.LoyaltyBonusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyBonuses.
     */
    cursor?: Prisma.LoyaltyBonusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyBonuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyBonuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyBonuses.
     */
    distinct?: Prisma.LoyaltyBonusScalarFieldEnum | Prisma.LoyaltyBonusScalarFieldEnum[];
};
/**
 * LoyaltyBonus findMany
 */
export type LoyaltyBonusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter, which LoyaltyBonuses to fetch.
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyBonuses to fetch.
     */
    orderBy?: Prisma.LoyaltyBonusOrderByWithRelationInput | Prisma.LoyaltyBonusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LoyaltyBonuses.
     */
    cursor?: Prisma.LoyaltyBonusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyBonuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyBonuses.
     */
    skip?: number;
    distinct?: Prisma.LoyaltyBonusScalarFieldEnum | Prisma.LoyaltyBonusScalarFieldEnum[];
};
/**
 * LoyaltyBonus create
 */
export type LoyaltyBonusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * The data needed to create a LoyaltyBonus.
     */
    data: Prisma.XOR<Prisma.LoyaltyBonusCreateInput, Prisma.LoyaltyBonusUncheckedCreateInput>;
};
/**
 * LoyaltyBonus createMany
 */
export type LoyaltyBonusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyBonuses.
     */
    data: Prisma.LoyaltyBonusCreateManyInput | Prisma.LoyaltyBonusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyBonus createManyAndReturn
 */
export type LoyaltyBonusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * The data used to create many LoyaltyBonuses.
     */
    data: Prisma.LoyaltyBonusCreateManyInput | Prisma.LoyaltyBonusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyBonus update
 */
export type LoyaltyBonusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * The data needed to update a LoyaltyBonus.
     */
    data: Prisma.XOR<Prisma.LoyaltyBonusUpdateInput, Prisma.LoyaltyBonusUncheckedUpdateInput>;
    /**
     * Choose, which LoyaltyBonus to update.
     */
    where: Prisma.LoyaltyBonusWhereUniqueInput;
};
/**
 * LoyaltyBonus updateMany
 */
export type LoyaltyBonusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyBonuses.
     */
    data: Prisma.XOR<Prisma.LoyaltyBonusUpdateManyMutationInput, Prisma.LoyaltyBonusUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyBonuses to update
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * Limit how many LoyaltyBonuses to update.
     */
    limit?: number;
};
/**
 * LoyaltyBonus updateManyAndReturn
 */
export type LoyaltyBonusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * The data used to update LoyaltyBonuses.
     */
    data: Prisma.XOR<Prisma.LoyaltyBonusUpdateManyMutationInput, Prisma.LoyaltyBonusUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyBonuses to update
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * Limit how many LoyaltyBonuses to update.
     */
    limit?: number;
};
/**
 * LoyaltyBonus upsert
 */
export type LoyaltyBonusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * The filter to search for the LoyaltyBonus to update in case it exists.
     */
    where: Prisma.LoyaltyBonusWhereUniqueInput;
    /**
     * In case the LoyaltyBonus found by the `where` argument doesn't exist, create a new LoyaltyBonus with this data.
     */
    create: Prisma.XOR<Prisma.LoyaltyBonusCreateInput, Prisma.LoyaltyBonusUncheckedCreateInput>;
    /**
     * In case the LoyaltyBonus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LoyaltyBonusUpdateInput, Prisma.LoyaltyBonusUncheckedUpdateInput>;
};
/**
 * LoyaltyBonus delete
 */
export type LoyaltyBonusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
    /**
     * Filter which LoyaltyBonus to delete.
     */
    where: Prisma.LoyaltyBonusWhereUniqueInput;
};
/**
 * LoyaltyBonus deleteMany
 */
export type LoyaltyBonusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyBonuses to delete
     */
    where?: Prisma.LoyaltyBonusWhereInput;
    /**
     * Limit how many LoyaltyBonuses to delete.
     */
    limit?: number;
};
/**
 * LoyaltyBonus without action
 */
export type LoyaltyBonusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyBonus
     */
    select?: Prisma.LoyaltyBonusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyBonus
     */
    omit?: Prisma.LoyaltyBonusOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LoyaltyBonus.d.ts.map