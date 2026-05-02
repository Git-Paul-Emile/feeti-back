import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LoyaltyMission
 *
 */
export type LoyaltyMissionModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyMissionPayload>;
export type AggregateLoyaltyMission = {
    _count: LoyaltyMissionCountAggregateOutputType | null;
    _avg: LoyaltyMissionAvgAggregateOutputType | null;
    _sum: LoyaltyMissionSumAggregateOutputType | null;
    _min: LoyaltyMissionMinAggregateOutputType | null;
    _max: LoyaltyMissionMaxAggregateOutputType | null;
};
export type LoyaltyMissionAvgAggregateOutputType = {
    points: number | null;
    target: number | null;
};
export type LoyaltyMissionSumAggregateOutputType = {
    points: number | null;
    target: number | null;
};
export type LoyaltyMissionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    actionType: $Enums.PointsActionType | null;
    target: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyMissionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    actionType: $Enums.PointsActionType | null;
    target: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyMissionCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    points: number;
    actionType: number;
    target: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LoyaltyMissionAvgAggregateInputType = {
    points?: true;
    target?: true;
};
export type LoyaltyMissionSumAggregateInputType = {
    points?: true;
    target?: true;
};
export type LoyaltyMissionMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    actionType?: true;
    target?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyMissionMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    actionType?: true;
    target?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyMissionCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    points?: true;
    actionType?: true;
    target?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LoyaltyMissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyMission to aggregate.
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyMissions to fetch.
     */
    orderBy?: Prisma.LoyaltyMissionOrderByWithRelationInput | Prisma.LoyaltyMissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LoyaltyMissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyMissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyMissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LoyaltyMissions
    **/
    _count?: true | LoyaltyMissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LoyaltyMissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LoyaltyMissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyMissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyMissionMaxAggregateInputType;
};
export type GetLoyaltyMissionAggregateType<T extends LoyaltyMissionAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyMission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyMission[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyMission[P]>;
};
export type LoyaltyMissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyMissionWhereInput;
    orderBy?: Prisma.LoyaltyMissionOrderByWithAggregationInput | Prisma.LoyaltyMissionOrderByWithAggregationInput[];
    by: Prisma.LoyaltyMissionScalarFieldEnum[] | Prisma.LoyaltyMissionScalarFieldEnum;
    having?: Prisma.LoyaltyMissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyMissionCountAggregateInputType | true;
    _avg?: LoyaltyMissionAvgAggregateInputType;
    _sum?: LoyaltyMissionSumAggregateInputType;
    _min?: LoyaltyMissionMinAggregateInputType;
    _max?: LoyaltyMissionMaxAggregateInputType;
};
export type LoyaltyMissionGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LoyaltyMissionCountAggregateOutputType | null;
    _avg: LoyaltyMissionAvgAggregateOutputType | null;
    _sum: LoyaltyMissionSumAggregateOutputType | null;
    _min: LoyaltyMissionMinAggregateOutputType | null;
    _max: LoyaltyMissionMaxAggregateOutputType | null;
};
type GetLoyaltyMissionGroupByPayload<T extends LoyaltyMissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyMissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyMissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyMissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyMissionGroupByOutputType[P]>;
}>>;
export type LoyaltyMissionWhereInput = {
    AND?: Prisma.LoyaltyMissionWhereInput | Prisma.LoyaltyMissionWhereInput[];
    OR?: Prisma.LoyaltyMissionWhereInput[];
    NOT?: Prisma.LoyaltyMissionWhereInput | Prisma.LoyaltyMissionWhereInput[];
    id?: Prisma.StringFilter<"LoyaltyMission"> | string;
    title?: Prisma.StringFilter<"LoyaltyMission"> | string;
    description?: Prisma.StringFilter<"LoyaltyMission"> | string;
    points?: Prisma.IntFilter<"LoyaltyMission"> | number;
    actionType?: Prisma.EnumPointsActionTypeFilter<"LoyaltyMission"> | $Enums.PointsActionType;
    target?: Prisma.IntFilter<"LoyaltyMission"> | number;
    isActive?: Prisma.BoolFilter<"LoyaltyMission"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyMission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyMission"> | Date | string;
    progress?: Prisma.MissionProgressListRelationFilter;
};
export type LoyaltyMissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    progress?: Prisma.MissionProgressOrderByRelationAggregateInput;
};
export type LoyaltyMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LoyaltyMissionWhereInput | Prisma.LoyaltyMissionWhereInput[];
    OR?: Prisma.LoyaltyMissionWhereInput[];
    NOT?: Prisma.LoyaltyMissionWhereInput | Prisma.LoyaltyMissionWhereInput[];
    title?: Prisma.StringFilter<"LoyaltyMission"> | string;
    description?: Prisma.StringFilter<"LoyaltyMission"> | string;
    points?: Prisma.IntFilter<"LoyaltyMission"> | number;
    actionType?: Prisma.EnumPointsActionTypeFilter<"LoyaltyMission"> | $Enums.PointsActionType;
    target?: Prisma.IntFilter<"LoyaltyMission"> | number;
    isActive?: Prisma.BoolFilter<"LoyaltyMission"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyMission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyMission"> | Date | string;
    progress?: Prisma.MissionProgressListRelationFilter;
}, "id">;
export type LoyaltyMissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyMissionCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyMissionAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyMissionMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyMissionMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyMissionSumOrderByAggregateInput;
};
export type LoyaltyMissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyMissionScalarWhereWithAggregatesInput | Prisma.LoyaltyMissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyMissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyMissionScalarWhereWithAggregatesInput | Prisma.LoyaltyMissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LoyaltyMission"> | string;
    title?: Prisma.StringWithAggregatesFilter<"LoyaltyMission"> | string;
    description?: Prisma.StringWithAggregatesFilter<"LoyaltyMission"> | string;
    points?: Prisma.IntWithAggregatesFilter<"LoyaltyMission"> | number;
    actionType?: Prisma.EnumPointsActionTypeWithAggregatesFilter<"LoyaltyMission"> | $Enums.PointsActionType;
    target?: Prisma.IntWithAggregatesFilter<"LoyaltyMission"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"LoyaltyMission"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyMission"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyMission"> | Date | string;
};
export type LoyaltyMissionCreateInput = {
    id?: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: Prisma.MissionProgressCreateNestedManyWithoutMissionInput;
};
export type LoyaltyMissionUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: Prisma.MissionProgressUncheckedCreateNestedManyWithoutMissionInput;
};
export type LoyaltyMissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: Prisma.MissionProgressUpdateManyWithoutMissionNestedInput;
};
export type LoyaltyMissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: Prisma.MissionProgressUncheckedUpdateManyWithoutMissionNestedInput;
};
export type LoyaltyMissionCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyMissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyMissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyMissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyMissionAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
};
export type LoyaltyMissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyMissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyMissionSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
};
export type LoyaltyMissionScalarRelationFilter = {
    is?: Prisma.LoyaltyMissionWhereInput;
    isNot?: Prisma.LoyaltyMissionWhereInput;
};
export type LoyaltyMissionCreateNestedOneWithoutProgressInput = {
    create?: Prisma.XOR<Prisma.LoyaltyMissionCreateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.LoyaltyMissionCreateOrConnectWithoutProgressInput;
    connect?: Prisma.LoyaltyMissionWhereUniqueInput;
};
export type LoyaltyMissionUpdateOneRequiredWithoutProgressNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyMissionCreateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.LoyaltyMissionCreateOrConnectWithoutProgressInput;
    upsert?: Prisma.LoyaltyMissionUpsertWithoutProgressInput;
    connect?: Prisma.LoyaltyMissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyMissionUpdateToOneWithWhereWithoutProgressInput, Prisma.LoyaltyMissionUpdateWithoutProgressInput>, Prisma.LoyaltyMissionUncheckedUpdateWithoutProgressInput>;
};
export type LoyaltyMissionCreateWithoutProgressInput = {
    id?: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyMissionUncheckedCreateWithoutProgressInput = {
    id?: string;
    title: string;
    description: string;
    points: number;
    actionType: $Enums.PointsActionType;
    target: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyMissionCreateOrConnectWithoutProgressInput = {
    where: Prisma.LoyaltyMissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyMissionCreateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedCreateWithoutProgressInput>;
};
export type LoyaltyMissionUpsertWithoutProgressInput = {
    update: Prisma.XOR<Prisma.LoyaltyMissionUpdateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedUpdateWithoutProgressInput>;
    create: Prisma.XOR<Prisma.LoyaltyMissionCreateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedCreateWithoutProgressInput>;
    where?: Prisma.LoyaltyMissionWhereInput;
};
export type LoyaltyMissionUpdateToOneWithWhereWithoutProgressInput = {
    where?: Prisma.LoyaltyMissionWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyMissionUpdateWithoutProgressInput, Prisma.LoyaltyMissionUncheckedUpdateWithoutProgressInput>;
};
export type LoyaltyMissionUpdateWithoutProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyMissionUncheckedUpdateWithoutProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    actionType?: Prisma.EnumPointsActionTypeFieldUpdateOperationsInput | $Enums.PointsActionType;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LoyaltyMissionCountOutputType
 */
export type LoyaltyMissionCountOutputType = {
    progress: number;
};
export type LoyaltyMissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progress?: boolean | LoyaltyMissionCountOutputTypeCountProgressArgs;
};
/**
 * LoyaltyMissionCountOutputType without action
 */
export type LoyaltyMissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMissionCountOutputType
     */
    select?: Prisma.LoyaltyMissionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LoyaltyMissionCountOutputType without action
 */
export type LoyaltyMissionCountOutputTypeCountProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionProgressWhereInput;
};
export type LoyaltyMissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    actionType?: boolean;
    target?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    progress?: boolean | Prisma.LoyaltyMission$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyMissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyMission"]>;
export type LoyaltyMissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    actionType?: boolean;
    target?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyMission"]>;
export type LoyaltyMissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    actionType?: boolean;
    target?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyMission"]>;
export type LoyaltyMissionSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    points?: boolean;
    actionType?: boolean;
    target?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LoyaltyMissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "points" | "actionType" | "target" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["loyaltyMission"]>;
export type LoyaltyMissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progress?: boolean | Prisma.LoyaltyMission$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyMissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LoyaltyMissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LoyaltyMissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LoyaltyMissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyMission";
    objects: {
        progress: Prisma.$MissionProgressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        points: number;
        actionType: $Enums.PointsActionType;
        target: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["loyaltyMission"]>;
    composites: {};
};
export type LoyaltyMissionGetPayload<S extends boolean | null | undefined | LoyaltyMissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload, S>;
export type LoyaltyMissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyMissionCountAggregateInputType | true;
};
export interface LoyaltyMissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyMission'];
        meta: {
            name: 'LoyaltyMission';
        };
    };
    /**
     * Find zero or one LoyaltyMission that matches the filter.
     * @param {LoyaltyMissionFindUniqueArgs} args - Arguments to find a LoyaltyMission
     * @example
     * // Get one LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyMissionFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LoyaltyMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoyaltyMissionFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyMission
     * @example
     * // Get one LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyMissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionFindFirstArgs} args - Arguments to find a LoyaltyMission
     * @example
     * // Get one LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyMissionFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionFindFirstOrThrowArgs} args - Arguments to find a LoyaltyMission
     * @example
     * // Get one LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyMissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LoyaltyMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyMissions
     * const loyaltyMissions = await prisma.loyaltyMission.findMany()
     *
     * // Get first 10 LoyaltyMissions
     * const loyaltyMissions = await prisma.loyaltyMission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loyaltyMissionWithIdOnly = await prisma.loyaltyMission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LoyaltyMissionFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LoyaltyMission.
     * @param {LoyaltyMissionCreateArgs} args - Arguments to create a LoyaltyMission.
     * @example
     * // Create one LoyaltyMission
     * const LoyaltyMission = await prisma.loyaltyMission.create({
     *   data: {
     *     // ... data to create a LoyaltyMission
     *   }
     * })
     *
     */
    create<T extends LoyaltyMissionCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LoyaltyMissions.
     * @param {LoyaltyMissionCreateManyArgs} args - Arguments to create many LoyaltyMissions.
     * @example
     * // Create many LoyaltyMissions
     * const loyaltyMission = await prisma.loyaltyMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LoyaltyMissionCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LoyaltyMissions and returns the data saved in the database.
     * @param {LoyaltyMissionCreateManyAndReturnArgs} args - Arguments to create many LoyaltyMissions.
     * @example
     * // Create many LoyaltyMissions
     * const loyaltyMission = await prisma.loyaltyMission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LoyaltyMissions and only return the `id`
     * const loyaltyMissionWithIdOnly = await prisma.loyaltyMission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LoyaltyMissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LoyaltyMission.
     * @param {LoyaltyMissionDeleteArgs} args - Arguments to delete one LoyaltyMission.
     * @example
     * // Delete one LoyaltyMission
     * const LoyaltyMission = await prisma.loyaltyMission.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyMission
     *   }
     * })
     *
     */
    delete<T extends LoyaltyMissionDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LoyaltyMission.
     * @param {LoyaltyMissionUpdateArgs} args - Arguments to update one LoyaltyMission.
     * @example
     * // Update one LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LoyaltyMissionUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LoyaltyMissions.
     * @param {LoyaltyMissionDeleteManyArgs} args - Arguments to filter LoyaltyMissions to delete.
     * @example
     * // Delete a few LoyaltyMissions
     * const { count } = await prisma.loyaltyMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LoyaltyMissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyMissions
     * const loyaltyMission = await prisma.loyaltyMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LoyaltyMissionUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyMissions and returns the data updated in the database.
     * @param {LoyaltyMissionUpdateManyAndReturnArgs} args - Arguments to update many LoyaltyMissions.
     * @example
     * // Update many LoyaltyMissions
     * const loyaltyMission = await prisma.loyaltyMission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LoyaltyMissions and only return the `id`
     * const loyaltyMissionWithIdOnly = await prisma.loyaltyMission.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoyaltyMissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LoyaltyMission.
     * @param {LoyaltyMissionUpsertArgs} args - Arguments to update or create a LoyaltyMission.
     * @example
     * // Update or create a LoyaltyMission
     * const loyaltyMission = await prisma.loyaltyMission.upsert({
     *   create: {
     *     // ... data to create a LoyaltyMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyMission we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyMissionUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyMissionUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LoyaltyMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionCountArgs} args - Arguments to filter LoyaltyMissions to count.
     * @example
     * // Count the number of LoyaltyMissions
     * const count = await prisma.loyaltyMission.count({
     *   where: {
     *     // ... the filter for the LoyaltyMissions we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyMissionCountArgs>(args?: Prisma.Subset<T, LoyaltyMissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyMissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LoyaltyMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyMissionAggregateArgs>(args: Prisma.Subset<T, LoyaltyMissionAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyMissionAggregateType<T>>;
    /**
     * Group by LoyaltyMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyMissionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LoyaltyMissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyMissionGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyMissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LoyaltyMission model
     */
    readonly fields: LoyaltyMissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LoyaltyMission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LoyaltyMissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    progress<T extends Prisma.LoyaltyMission$progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyMission$progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LoyaltyMission model
 */
export interface LoyaltyMissionFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyMission", 'String'>;
    readonly title: Prisma.FieldRef<"LoyaltyMission", 'String'>;
    readonly description: Prisma.FieldRef<"LoyaltyMission", 'String'>;
    readonly points: Prisma.FieldRef<"LoyaltyMission", 'Int'>;
    readonly actionType: Prisma.FieldRef<"LoyaltyMission", 'PointsActionType'>;
    readonly target: Prisma.FieldRef<"LoyaltyMission", 'Int'>;
    readonly isActive: Prisma.FieldRef<"LoyaltyMission", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyMission", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LoyaltyMission", 'DateTime'>;
}
/**
 * LoyaltyMission findUnique
 */
export type LoyaltyMissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyMission to fetch.
     */
    where: Prisma.LoyaltyMissionWhereUniqueInput;
};
/**
 * LoyaltyMission findUniqueOrThrow
 */
export type LoyaltyMissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyMission to fetch.
     */
    where: Prisma.LoyaltyMissionWhereUniqueInput;
};
/**
 * LoyaltyMission findFirst
 */
export type LoyaltyMissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyMission to fetch.
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyMissions to fetch.
     */
    orderBy?: Prisma.LoyaltyMissionOrderByWithRelationInput | Prisma.LoyaltyMissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyMissions.
     */
    cursor?: Prisma.LoyaltyMissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyMissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyMissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyMissions.
     */
    distinct?: Prisma.LoyaltyMissionScalarFieldEnum | Prisma.LoyaltyMissionScalarFieldEnum[];
};
/**
 * LoyaltyMission findFirstOrThrow
 */
export type LoyaltyMissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyMission to fetch.
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyMissions to fetch.
     */
    orderBy?: Prisma.LoyaltyMissionOrderByWithRelationInput | Prisma.LoyaltyMissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyMissions.
     */
    cursor?: Prisma.LoyaltyMissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyMissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyMissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyMissions.
     */
    distinct?: Prisma.LoyaltyMissionScalarFieldEnum | Prisma.LoyaltyMissionScalarFieldEnum[];
};
/**
 * LoyaltyMission findMany
 */
export type LoyaltyMissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyMissions to fetch.
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyMissions to fetch.
     */
    orderBy?: Prisma.LoyaltyMissionOrderByWithRelationInput | Prisma.LoyaltyMissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LoyaltyMissions.
     */
    cursor?: Prisma.LoyaltyMissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyMissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyMissions.
     */
    skip?: number;
    distinct?: Prisma.LoyaltyMissionScalarFieldEnum | Prisma.LoyaltyMissionScalarFieldEnum[];
};
/**
 * LoyaltyMission create
 */
export type LoyaltyMissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a LoyaltyMission.
     */
    data: Prisma.XOR<Prisma.LoyaltyMissionCreateInput, Prisma.LoyaltyMissionUncheckedCreateInput>;
};
/**
 * LoyaltyMission createMany
 */
export type LoyaltyMissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyMissions.
     */
    data: Prisma.LoyaltyMissionCreateManyInput | Prisma.LoyaltyMissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyMission createManyAndReturn
 */
export type LoyaltyMissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * The data used to create many LoyaltyMissions.
     */
    data: Prisma.LoyaltyMissionCreateManyInput | Prisma.LoyaltyMissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyMission update
 */
export type LoyaltyMissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a LoyaltyMission.
     */
    data: Prisma.XOR<Prisma.LoyaltyMissionUpdateInput, Prisma.LoyaltyMissionUncheckedUpdateInput>;
    /**
     * Choose, which LoyaltyMission to update.
     */
    where: Prisma.LoyaltyMissionWhereUniqueInput;
};
/**
 * LoyaltyMission updateMany
 */
export type LoyaltyMissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyMissions.
     */
    data: Prisma.XOR<Prisma.LoyaltyMissionUpdateManyMutationInput, Prisma.LoyaltyMissionUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyMissions to update
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * Limit how many LoyaltyMissions to update.
     */
    limit?: number;
};
/**
 * LoyaltyMission updateManyAndReturn
 */
export type LoyaltyMissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * The data used to update LoyaltyMissions.
     */
    data: Prisma.XOR<Prisma.LoyaltyMissionUpdateManyMutationInput, Prisma.LoyaltyMissionUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyMissions to update
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * Limit how many LoyaltyMissions to update.
     */
    limit?: number;
};
/**
 * LoyaltyMission upsert
 */
export type LoyaltyMissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the LoyaltyMission to update in case it exists.
     */
    where: Prisma.LoyaltyMissionWhereUniqueInput;
    /**
     * In case the LoyaltyMission found by the `where` argument doesn't exist, create a new LoyaltyMission with this data.
     */
    create: Prisma.XOR<Prisma.LoyaltyMissionCreateInput, Prisma.LoyaltyMissionUncheckedCreateInput>;
    /**
     * In case the LoyaltyMission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LoyaltyMissionUpdateInput, Prisma.LoyaltyMissionUncheckedUpdateInput>;
};
/**
 * LoyaltyMission delete
 */
export type LoyaltyMissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
    /**
     * Filter which LoyaltyMission to delete.
     */
    where: Prisma.LoyaltyMissionWhereUniqueInput;
};
/**
 * LoyaltyMission deleteMany
 */
export type LoyaltyMissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyMissions to delete
     */
    where?: Prisma.LoyaltyMissionWhereInput;
    /**
     * Limit how many LoyaltyMissions to delete.
     */
    limit?: number;
};
/**
 * LoyaltyMission.progress
 */
export type LoyaltyMission$progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionProgress
     */
    select?: Prisma.MissionProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MissionProgress
     */
    omit?: Prisma.MissionProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MissionProgressInclude<ExtArgs> | null;
    where?: Prisma.MissionProgressWhereInput;
    orderBy?: Prisma.MissionProgressOrderByWithRelationInput | Prisma.MissionProgressOrderByWithRelationInput[];
    cursor?: Prisma.MissionProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionProgressScalarFieldEnum | Prisma.MissionProgressScalarFieldEnum[];
};
/**
 * LoyaltyMission without action
 */
export type LoyaltyMissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyMission
     */
    select?: Prisma.LoyaltyMissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyMission
     */
    omit?: Prisma.LoyaltyMissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyMissionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LoyaltyMission.d.ts.map