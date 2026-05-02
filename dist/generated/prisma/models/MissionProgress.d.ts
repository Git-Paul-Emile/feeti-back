import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MissionProgress
 *
 */
export type MissionProgressModel = runtime.Types.Result.DefaultSelection<Prisma.$MissionProgressPayload>;
export type AggregateMissionProgress = {
    _count: MissionProgressCountAggregateOutputType | null;
    _avg: MissionProgressAvgAggregateOutputType | null;
    _sum: MissionProgressSumAggregateOutputType | null;
    _min: MissionProgressMinAggregateOutputType | null;
    _max: MissionProgressMaxAggregateOutputType | null;
};
export type MissionProgressAvgAggregateOutputType = {
    progress: number | null;
};
export type MissionProgressSumAggregateOutputType = {
    progress: number | null;
};
export type MissionProgressMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    missionId: string | null;
    progress: number | null;
    completed: boolean | null;
    rewardPaid: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MissionProgressMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    missionId: string | null;
    progress: number | null;
    completed: boolean | null;
    rewardPaid: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MissionProgressCountAggregateOutputType = {
    id: number;
    profileId: number;
    missionId: number;
    progress: number;
    completed: number;
    rewardPaid: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MissionProgressAvgAggregateInputType = {
    progress?: true;
};
export type MissionProgressSumAggregateInputType = {
    progress?: true;
};
export type MissionProgressMinAggregateInputType = {
    id?: true;
    profileId?: true;
    missionId?: true;
    progress?: true;
    completed?: true;
    rewardPaid?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MissionProgressMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    missionId?: true;
    progress?: true;
    completed?: true;
    rewardPaid?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MissionProgressCountAggregateInputType = {
    id?: true;
    profileId?: true;
    missionId?: true;
    progress?: true;
    completed?: true;
    rewardPaid?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MissionProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MissionProgress to aggregate.
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MissionProgresses to fetch.
     */
    orderBy?: Prisma.MissionProgressOrderByWithRelationInput | Prisma.MissionProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MissionProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MissionProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MissionProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MissionProgresses
    **/
    _count?: true | MissionProgressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MissionProgressAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MissionProgressSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MissionProgressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MissionProgressMaxAggregateInputType;
};
export type GetMissionProgressAggregateType<T extends MissionProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateMissionProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMissionProgress[P]> : Prisma.GetScalarType<T[P], AggregateMissionProgress[P]>;
};
export type MissionProgressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionProgressWhereInput;
    orderBy?: Prisma.MissionProgressOrderByWithAggregationInput | Prisma.MissionProgressOrderByWithAggregationInput[];
    by: Prisma.MissionProgressScalarFieldEnum[] | Prisma.MissionProgressScalarFieldEnum;
    having?: Prisma.MissionProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MissionProgressCountAggregateInputType | true;
    _avg?: MissionProgressAvgAggregateInputType;
    _sum?: MissionProgressSumAggregateInputType;
    _min?: MissionProgressMinAggregateInputType;
    _max?: MissionProgressMaxAggregateInputType;
};
export type MissionProgressGroupByOutputType = {
    id: string;
    profileId: string;
    missionId: string;
    progress: number;
    completed: boolean;
    rewardPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MissionProgressCountAggregateOutputType | null;
    _avg: MissionProgressAvgAggregateOutputType | null;
    _sum: MissionProgressSumAggregateOutputType | null;
    _min: MissionProgressMinAggregateOutputType | null;
    _max: MissionProgressMaxAggregateOutputType | null;
};
type GetMissionProgressGroupByPayload<T extends MissionProgressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MissionProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MissionProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MissionProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MissionProgressGroupByOutputType[P]>;
}>>;
export type MissionProgressWhereInput = {
    AND?: Prisma.MissionProgressWhereInput | Prisma.MissionProgressWhereInput[];
    OR?: Prisma.MissionProgressWhereInput[];
    NOT?: Prisma.MissionProgressWhereInput | Prisma.MissionProgressWhereInput[];
    id?: Prisma.StringFilter<"MissionProgress"> | string;
    profileId?: Prisma.StringFilter<"MissionProgress"> | string;
    missionId?: Prisma.StringFilter<"MissionProgress"> | string;
    progress?: Prisma.IntFilter<"MissionProgress"> | number;
    completed?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    rewardPaid?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
    profile?: Prisma.XOR<Prisma.LoyaltyProfileScalarRelationFilter, Prisma.LoyaltyProfileWhereInput>;
    mission?: Prisma.XOR<Prisma.LoyaltyMissionScalarRelationFilter, Prisma.LoyaltyMissionWhereInput>;
};
export type MissionProgressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    rewardPaid?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.LoyaltyProfileOrderByWithRelationInput;
    mission?: Prisma.LoyaltyMissionOrderByWithRelationInput;
};
export type MissionProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profileId_missionId?: Prisma.MissionProgressProfileIdMissionIdCompoundUniqueInput;
    AND?: Prisma.MissionProgressWhereInput | Prisma.MissionProgressWhereInput[];
    OR?: Prisma.MissionProgressWhereInput[];
    NOT?: Prisma.MissionProgressWhereInput | Prisma.MissionProgressWhereInput[];
    profileId?: Prisma.StringFilter<"MissionProgress"> | string;
    missionId?: Prisma.StringFilter<"MissionProgress"> | string;
    progress?: Prisma.IntFilter<"MissionProgress"> | number;
    completed?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    rewardPaid?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
    profile?: Prisma.XOR<Prisma.LoyaltyProfileScalarRelationFilter, Prisma.LoyaltyProfileWhereInput>;
    mission?: Prisma.XOR<Prisma.LoyaltyMissionScalarRelationFilter, Prisma.LoyaltyMissionWhereInput>;
}, "id" | "profileId_missionId">;
export type MissionProgressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    rewardPaid?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MissionProgressCountOrderByAggregateInput;
    _avg?: Prisma.MissionProgressAvgOrderByAggregateInput;
    _max?: Prisma.MissionProgressMaxOrderByAggregateInput;
    _min?: Prisma.MissionProgressMinOrderByAggregateInput;
    _sum?: Prisma.MissionProgressSumOrderByAggregateInput;
};
export type MissionProgressScalarWhereWithAggregatesInput = {
    AND?: Prisma.MissionProgressScalarWhereWithAggregatesInput | Prisma.MissionProgressScalarWhereWithAggregatesInput[];
    OR?: Prisma.MissionProgressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MissionProgressScalarWhereWithAggregatesInput | Prisma.MissionProgressScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MissionProgress"> | string;
    profileId?: Prisma.StringWithAggregatesFilter<"MissionProgress"> | string;
    missionId?: Prisma.StringWithAggregatesFilter<"MissionProgress"> | string;
    progress?: Prisma.IntWithAggregatesFilter<"MissionProgress"> | number;
    completed?: Prisma.BoolWithAggregatesFilter<"MissionProgress"> | boolean;
    rewardPaid?: Prisma.BoolWithAggregatesFilter<"MissionProgress"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MissionProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MissionProgress"> | Date | string;
};
export type MissionProgressCreateInput = {
    id?: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile: Prisma.LoyaltyProfileCreateNestedOneWithoutMissionProgressInput;
    mission: Prisma.LoyaltyMissionCreateNestedOneWithoutProgressInput;
};
export type MissionProgressUncheckedCreateInput = {
    id?: string;
    profileId: string;
    missionId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.LoyaltyProfileUpdateOneRequiredWithoutMissionProgressNestedInput;
    mission?: Prisma.LoyaltyMissionUpdateOneRequiredWithoutProgressNestedInput;
};
export type MissionProgressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressCreateManyInput = {
    id?: string;
    profileId: string;
    missionId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressListRelationFilter = {
    every?: Prisma.MissionProgressWhereInput;
    some?: Prisma.MissionProgressWhereInput;
    none?: Prisma.MissionProgressWhereInput;
};
export type MissionProgressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MissionProgressProfileIdMissionIdCompoundUniqueInput = {
    profileId: string;
    missionId: string;
};
export type MissionProgressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    rewardPaid?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionProgressAvgOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type MissionProgressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    rewardPaid?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionProgressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    rewardPaid?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionProgressSumOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type MissionProgressCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput> | Prisma.MissionProgressCreateWithoutProfileInput[] | Prisma.MissionProgressUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutProfileInput | Prisma.MissionProgressCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.MissionProgressCreateManyProfileInputEnvelope;
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
};
export type MissionProgressUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput> | Prisma.MissionProgressCreateWithoutProfileInput[] | Prisma.MissionProgressUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutProfileInput | Prisma.MissionProgressCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.MissionProgressCreateManyProfileInputEnvelope;
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
};
export type MissionProgressUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput> | Prisma.MissionProgressCreateWithoutProfileInput[] | Prisma.MissionProgressUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutProfileInput | Prisma.MissionProgressCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.MissionProgressUpsertWithWhereUniqueWithoutProfileInput | Prisma.MissionProgressUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.MissionProgressCreateManyProfileInputEnvelope;
    set?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    disconnect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    delete?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    update?: Prisma.MissionProgressUpdateWithWhereUniqueWithoutProfileInput | Prisma.MissionProgressUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.MissionProgressUpdateManyWithWhereWithoutProfileInput | Prisma.MissionProgressUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
};
export type MissionProgressUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput> | Prisma.MissionProgressCreateWithoutProfileInput[] | Prisma.MissionProgressUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutProfileInput | Prisma.MissionProgressCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.MissionProgressUpsertWithWhereUniqueWithoutProfileInput | Prisma.MissionProgressUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.MissionProgressCreateManyProfileInputEnvelope;
    set?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    disconnect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    delete?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    update?: Prisma.MissionProgressUpdateWithWhereUniqueWithoutProfileInput | Prisma.MissionProgressUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.MissionProgressUpdateManyWithWhereWithoutProfileInput | Prisma.MissionProgressUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
};
export type MissionProgressCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput> | Prisma.MissionProgressCreateWithoutMissionInput[] | Prisma.MissionProgressUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutMissionInput | Prisma.MissionProgressCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionProgressCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
};
export type MissionProgressUncheckedCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput> | Prisma.MissionProgressCreateWithoutMissionInput[] | Prisma.MissionProgressUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutMissionInput | Prisma.MissionProgressCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionProgressCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
};
export type MissionProgressUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput> | Prisma.MissionProgressCreateWithoutMissionInput[] | Prisma.MissionProgressUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutMissionInput | Prisma.MissionProgressCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionProgressUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionProgressUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionProgressCreateManyMissionInputEnvelope;
    set?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    disconnect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    delete?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    update?: Prisma.MissionProgressUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionProgressUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionProgressUpdateManyWithWhereWithoutMissionInput | Prisma.MissionProgressUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
};
export type MissionProgressUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput> | Prisma.MissionProgressCreateWithoutMissionInput[] | Prisma.MissionProgressUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionProgressCreateOrConnectWithoutMissionInput | Prisma.MissionProgressCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionProgressUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionProgressUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionProgressCreateManyMissionInputEnvelope;
    set?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    disconnect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    delete?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    connect?: Prisma.MissionProgressWhereUniqueInput | Prisma.MissionProgressWhereUniqueInput[];
    update?: Prisma.MissionProgressUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionProgressUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionProgressUpdateManyWithWhereWithoutMissionInput | Prisma.MissionProgressUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
};
export type MissionProgressCreateWithoutProfileInput = {
    id?: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mission: Prisma.LoyaltyMissionCreateNestedOneWithoutProgressInput;
};
export type MissionProgressUncheckedCreateWithoutProfileInput = {
    id?: string;
    missionId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressCreateOrConnectWithoutProfileInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput>;
};
export type MissionProgressCreateManyProfileInputEnvelope = {
    data: Prisma.MissionProgressCreateManyProfileInput | Prisma.MissionProgressCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type MissionProgressUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionProgressUpdateWithoutProfileInput, Prisma.MissionProgressUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.MissionProgressCreateWithoutProfileInput, Prisma.MissionProgressUncheckedCreateWithoutProfileInput>;
};
export type MissionProgressUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionProgressUpdateWithoutProfileInput, Prisma.MissionProgressUncheckedUpdateWithoutProfileInput>;
};
export type MissionProgressUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.MissionProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionProgressUpdateManyMutationInput, Prisma.MissionProgressUncheckedUpdateManyWithoutProfileInput>;
};
export type MissionProgressScalarWhereInput = {
    AND?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
    OR?: Prisma.MissionProgressScalarWhereInput[];
    NOT?: Prisma.MissionProgressScalarWhereInput | Prisma.MissionProgressScalarWhereInput[];
    id?: Prisma.StringFilter<"MissionProgress"> | string;
    profileId?: Prisma.StringFilter<"MissionProgress"> | string;
    missionId?: Prisma.StringFilter<"MissionProgress"> | string;
    progress?: Prisma.IntFilter<"MissionProgress"> | number;
    completed?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    rewardPaid?: Prisma.BoolFilter<"MissionProgress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MissionProgress"> | Date | string;
};
export type MissionProgressCreateWithoutMissionInput = {
    id?: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile: Prisma.LoyaltyProfileCreateNestedOneWithoutMissionProgressInput;
};
export type MissionProgressUncheckedCreateWithoutMissionInput = {
    id?: string;
    profileId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressCreateOrConnectWithoutMissionInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput>;
};
export type MissionProgressCreateManyMissionInputEnvelope = {
    data: Prisma.MissionProgressCreateManyMissionInput | Prisma.MissionProgressCreateManyMissionInput[];
    skipDuplicates?: boolean;
};
export type MissionProgressUpsertWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionProgressUpdateWithoutMissionInput, Prisma.MissionProgressUncheckedUpdateWithoutMissionInput>;
    create: Prisma.XOR<Prisma.MissionProgressCreateWithoutMissionInput, Prisma.MissionProgressUncheckedCreateWithoutMissionInput>;
};
export type MissionProgressUpdateWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionProgressUpdateWithoutMissionInput, Prisma.MissionProgressUncheckedUpdateWithoutMissionInput>;
};
export type MissionProgressUpdateManyWithWhereWithoutMissionInput = {
    where: Prisma.MissionProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionProgressUpdateManyMutationInput, Prisma.MissionProgressUncheckedUpdateManyWithoutMissionInput>;
};
export type MissionProgressCreateManyProfileInput = {
    id?: string;
    missionId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mission?: Prisma.LoyaltyMissionUpdateOneRequiredWithoutProgressNestedInput;
};
export type MissionProgressUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressCreateManyMissionInput = {
    id?: string;
    profileId: string;
    progress?: number;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionProgressUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.LoyaltyProfileUpdateOneRequiredWithoutMissionProgressNestedInput;
};
export type MissionProgressUncheckedUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressUncheckedUpdateManyWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rewardPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionProgressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    missionId?: boolean;
    progress?: boolean;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionProgress"]>;
export type MissionProgressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    missionId?: boolean;
    progress?: boolean;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionProgress"]>;
export type MissionProgressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    missionId?: boolean;
    progress?: boolean;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionProgress"]>;
export type MissionProgressSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    missionId?: boolean;
    progress?: boolean;
    completed?: boolean;
    rewardPaid?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MissionProgressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "missionId" | "progress" | "completed" | "rewardPaid" | "createdAt" | "updatedAt", ExtArgs["result"]["missionProgress"]>;
export type MissionProgressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
};
export type MissionProgressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
};
export type MissionProgressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.LoyaltyProfileDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.LoyaltyMissionDefaultArgs<ExtArgs>;
};
export type $MissionProgressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MissionProgress";
    objects: {
        profile: Prisma.$LoyaltyProfilePayload<ExtArgs>;
        mission: Prisma.$LoyaltyMissionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        missionId: string;
        progress: number;
        completed: boolean;
        rewardPaid: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["missionProgress"]>;
    composites: {};
};
export type MissionProgressGetPayload<S extends boolean | null | undefined | MissionProgressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload, S>;
export type MissionProgressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MissionProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionProgressCountAggregateInputType | true;
};
export interface MissionProgressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MissionProgress'];
        meta: {
            name: 'MissionProgress';
        };
    };
    /**
     * Find zero or one MissionProgress that matches the filter.
     * @param {MissionProgressFindUniqueArgs} args - Arguments to find a MissionProgress
     * @example
     * // Get one MissionProgress
     * const missionProgress = await prisma.missionProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionProgressFindUniqueArgs>(args: Prisma.SelectSubset<T, MissionProgressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MissionProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionProgressFindUniqueOrThrowArgs} args - Arguments to find a MissionProgress
     * @example
     * // Get one MissionProgress
     * const missionProgress = await prisma.missionProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionProgressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MissionProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MissionProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressFindFirstArgs} args - Arguments to find a MissionProgress
     * @example
     * // Get one MissionProgress
     * const missionProgress = await prisma.missionProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionProgressFindFirstArgs>(args?: Prisma.SelectSubset<T, MissionProgressFindFirstArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MissionProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressFindFirstOrThrowArgs} args - Arguments to find a MissionProgress
     * @example
     * // Get one MissionProgress
     * const missionProgress = await prisma.missionProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionProgressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MissionProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MissionProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionProgresses
     * const missionProgresses = await prisma.missionProgress.findMany()
     *
     * // Get first 10 MissionProgresses
     * const missionProgresses = await prisma.missionProgress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const missionProgressWithIdOnly = await prisma.missionProgress.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MissionProgressFindManyArgs>(args?: Prisma.SelectSubset<T, MissionProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MissionProgress.
     * @param {MissionProgressCreateArgs} args - Arguments to create a MissionProgress.
     * @example
     * // Create one MissionProgress
     * const MissionProgress = await prisma.missionProgress.create({
     *   data: {
     *     // ... data to create a MissionProgress
     *   }
     * })
     *
     */
    create<T extends MissionProgressCreateArgs>(args: Prisma.SelectSubset<T, MissionProgressCreateArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MissionProgresses.
     * @param {MissionProgressCreateManyArgs} args - Arguments to create many MissionProgresses.
     * @example
     * // Create many MissionProgresses
     * const missionProgress = await prisma.missionProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MissionProgressCreateManyArgs>(args?: Prisma.SelectSubset<T, MissionProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MissionProgresses and returns the data saved in the database.
     * @param {MissionProgressCreateManyAndReturnArgs} args - Arguments to create many MissionProgresses.
     * @example
     * // Create many MissionProgresses
     * const missionProgress = await prisma.missionProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MissionProgresses and only return the `id`
     * const missionProgressWithIdOnly = await prisma.missionProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MissionProgressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MissionProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MissionProgress.
     * @param {MissionProgressDeleteArgs} args - Arguments to delete one MissionProgress.
     * @example
     * // Delete one MissionProgress
     * const MissionProgress = await prisma.missionProgress.delete({
     *   where: {
     *     // ... filter to delete one MissionProgress
     *   }
     * })
     *
     */
    delete<T extends MissionProgressDeleteArgs>(args: Prisma.SelectSubset<T, MissionProgressDeleteArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MissionProgress.
     * @param {MissionProgressUpdateArgs} args - Arguments to update one MissionProgress.
     * @example
     * // Update one MissionProgress
     * const missionProgress = await prisma.missionProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MissionProgressUpdateArgs>(args: Prisma.SelectSubset<T, MissionProgressUpdateArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MissionProgresses.
     * @param {MissionProgressDeleteManyArgs} args - Arguments to filter MissionProgresses to delete.
     * @example
     * // Delete a few MissionProgresses
     * const { count } = await prisma.missionProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MissionProgressDeleteManyArgs>(args?: Prisma.SelectSubset<T, MissionProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MissionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionProgresses
     * const missionProgress = await prisma.missionProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MissionProgressUpdateManyArgs>(args: Prisma.SelectSubset<T, MissionProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MissionProgresses and returns the data updated in the database.
     * @param {MissionProgressUpdateManyAndReturnArgs} args - Arguments to update many MissionProgresses.
     * @example
     * // Update many MissionProgresses
     * const missionProgress = await prisma.missionProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MissionProgresses and only return the `id`
     * const missionProgressWithIdOnly = await prisma.missionProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends MissionProgressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MissionProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MissionProgress.
     * @param {MissionProgressUpsertArgs} args - Arguments to update or create a MissionProgress.
     * @example
     * // Update or create a MissionProgress
     * const missionProgress = await prisma.missionProgress.upsert({
     *   create: {
     *     // ... data to create a MissionProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionProgress we want to update
     *   }
     * })
     */
    upsert<T extends MissionProgressUpsertArgs>(args: Prisma.SelectSubset<T, MissionProgressUpsertArgs<ExtArgs>>): Prisma.Prisma__MissionProgressClient<runtime.Types.Result.GetResult<Prisma.$MissionProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MissionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressCountArgs} args - Arguments to filter MissionProgresses to count.
     * @example
     * // Count the number of MissionProgresses
     * const count = await prisma.missionProgress.count({
     *   where: {
     *     // ... the filter for the MissionProgresses we want to count
     *   }
     * })
    **/
    count<T extends MissionProgressCountArgs>(args?: Prisma.Subset<T, MissionProgressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MissionProgressCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MissionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionProgressAggregateArgs>(args: Prisma.Subset<T, MissionProgressAggregateArgs>): Prisma.PrismaPromise<GetMissionProgressAggregateType<T>>;
    /**
     * Group by MissionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionProgressGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MissionProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MissionProgressGroupByArgs['orderBy'];
    } : {
        orderBy?: MissionProgressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MissionProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MissionProgress model
     */
    readonly fields: MissionProgressFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MissionProgress.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MissionProgressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.LoyaltyProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyProfileClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mission<T extends Prisma.LoyaltyMissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyMissionDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyMissionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the MissionProgress model
 */
export interface MissionProgressFieldRefs {
    readonly id: Prisma.FieldRef<"MissionProgress", 'String'>;
    readonly profileId: Prisma.FieldRef<"MissionProgress", 'String'>;
    readonly missionId: Prisma.FieldRef<"MissionProgress", 'String'>;
    readonly progress: Prisma.FieldRef<"MissionProgress", 'Int'>;
    readonly completed: Prisma.FieldRef<"MissionProgress", 'Boolean'>;
    readonly rewardPaid: Prisma.FieldRef<"MissionProgress", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MissionProgress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MissionProgress", 'DateTime'>;
}
/**
 * MissionProgress findUnique
 */
export type MissionProgressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MissionProgress to fetch.
     */
    where: Prisma.MissionProgressWhereUniqueInput;
};
/**
 * MissionProgress findUniqueOrThrow
 */
export type MissionProgressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MissionProgress to fetch.
     */
    where: Prisma.MissionProgressWhereUniqueInput;
};
/**
 * MissionProgress findFirst
 */
export type MissionProgressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MissionProgress to fetch.
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MissionProgresses to fetch.
     */
    orderBy?: Prisma.MissionProgressOrderByWithRelationInput | Prisma.MissionProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MissionProgresses.
     */
    cursor?: Prisma.MissionProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MissionProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MissionProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MissionProgresses.
     */
    distinct?: Prisma.MissionProgressScalarFieldEnum | Prisma.MissionProgressScalarFieldEnum[];
};
/**
 * MissionProgress findFirstOrThrow
 */
export type MissionProgressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MissionProgress to fetch.
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MissionProgresses to fetch.
     */
    orderBy?: Prisma.MissionProgressOrderByWithRelationInput | Prisma.MissionProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MissionProgresses.
     */
    cursor?: Prisma.MissionProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MissionProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MissionProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MissionProgresses.
     */
    distinct?: Prisma.MissionProgressScalarFieldEnum | Prisma.MissionProgressScalarFieldEnum[];
};
/**
 * MissionProgress findMany
 */
export type MissionProgressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MissionProgresses to fetch.
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MissionProgresses to fetch.
     */
    orderBy?: Prisma.MissionProgressOrderByWithRelationInput | Prisma.MissionProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MissionProgresses.
     */
    cursor?: Prisma.MissionProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MissionProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MissionProgresses.
     */
    skip?: number;
    distinct?: Prisma.MissionProgressScalarFieldEnum | Prisma.MissionProgressScalarFieldEnum[];
};
/**
 * MissionProgress create
 */
export type MissionProgressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a MissionProgress.
     */
    data: Prisma.XOR<Prisma.MissionProgressCreateInput, Prisma.MissionProgressUncheckedCreateInput>;
};
/**
 * MissionProgress createMany
 */
export type MissionProgressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionProgresses.
     */
    data: Prisma.MissionProgressCreateManyInput | Prisma.MissionProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MissionProgress createManyAndReturn
 */
export type MissionProgressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionProgress
     */
    select?: Prisma.MissionProgressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MissionProgress
     */
    omit?: Prisma.MissionProgressOmit<ExtArgs> | null;
    /**
     * The data used to create many MissionProgresses.
     */
    data: Prisma.MissionProgressCreateManyInput | Prisma.MissionProgressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MissionProgressIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MissionProgress update
 */
export type MissionProgressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a MissionProgress.
     */
    data: Prisma.XOR<Prisma.MissionProgressUpdateInput, Prisma.MissionProgressUncheckedUpdateInput>;
    /**
     * Choose, which MissionProgress to update.
     */
    where: Prisma.MissionProgressWhereUniqueInput;
};
/**
 * MissionProgress updateMany
 */
export type MissionProgressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionProgresses.
     */
    data: Prisma.XOR<Prisma.MissionProgressUpdateManyMutationInput, Prisma.MissionProgressUncheckedUpdateManyInput>;
    /**
     * Filter which MissionProgresses to update
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * Limit how many MissionProgresses to update.
     */
    limit?: number;
};
/**
 * MissionProgress updateManyAndReturn
 */
export type MissionProgressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionProgress
     */
    select?: Prisma.MissionProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MissionProgress
     */
    omit?: Prisma.MissionProgressOmit<ExtArgs> | null;
    /**
     * The data used to update MissionProgresses.
     */
    data: Prisma.XOR<Prisma.MissionProgressUpdateManyMutationInput, Prisma.MissionProgressUncheckedUpdateManyInput>;
    /**
     * Filter which MissionProgresses to update
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * Limit how many MissionProgresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MissionProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MissionProgress upsert
 */
export type MissionProgressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the MissionProgress to update in case it exists.
     */
    where: Prisma.MissionProgressWhereUniqueInput;
    /**
     * In case the MissionProgress found by the `where` argument doesn't exist, create a new MissionProgress with this data.
     */
    create: Prisma.XOR<Prisma.MissionProgressCreateInput, Prisma.MissionProgressUncheckedCreateInput>;
    /**
     * In case the MissionProgress was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MissionProgressUpdateInput, Prisma.MissionProgressUncheckedUpdateInput>;
};
/**
 * MissionProgress delete
 */
export type MissionProgressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which MissionProgress to delete.
     */
    where: Prisma.MissionProgressWhereUniqueInput;
};
/**
 * MissionProgress deleteMany
 */
export type MissionProgressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MissionProgresses to delete
     */
    where?: Prisma.MissionProgressWhereInput;
    /**
     * Limit how many MissionProgresses to delete.
     */
    limit?: number;
};
/**
 * MissionProgress without action
 */
export type MissionProgressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=MissionProgress.d.ts.map