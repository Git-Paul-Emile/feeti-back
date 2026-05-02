import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventZone
 *
 */
export type EventZoneModel = runtime.Types.Result.DefaultSelection<Prisma.$EventZonePayload>;
export type AggregateEventZone = {
    _count: EventZoneCountAggregateOutputType | null;
    _avg: EventZoneAvgAggregateOutputType | null;
    _sum: EventZoneSumAggregateOutputType | null;
    _min: EventZoneMinAggregateOutputType | null;
    _max: EventZoneMaxAggregateOutputType | null;
};
export type EventZoneAvgAggregateOutputType = {
    maxCapacity: number | null;
    currentCount: number | null;
};
export type EventZoneSumAggregateOutputType = {
    maxCapacity: number | null;
    currentCount: number | null;
};
export type EventZoneMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    isActive: boolean | null;
    maxCapacity: number | null;
    currentCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventZoneMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    isActive: boolean | null;
    maxCapacity: number | null;
    currentCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventZoneCountAggregateOutputType = {
    id: number;
    eventId: number;
    code: number;
    name: number;
    description: number;
    color: number;
    isActive: number;
    maxCapacity: number;
    currentCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventZoneAvgAggregateInputType = {
    maxCapacity?: true;
    currentCount?: true;
};
export type EventZoneSumAggregateInputType = {
    maxCapacity?: true;
    currentCount?: true;
};
export type EventZoneMinAggregateInputType = {
    id?: true;
    eventId?: true;
    code?: true;
    name?: true;
    description?: true;
    color?: true;
    isActive?: true;
    maxCapacity?: true;
    currentCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventZoneMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    code?: true;
    name?: true;
    description?: true;
    color?: true;
    isActive?: true;
    maxCapacity?: true;
    currentCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventZoneCountAggregateInputType = {
    id?: true;
    eventId?: true;
    code?: true;
    name?: true;
    description?: true;
    color?: true;
    isActive?: true;
    maxCapacity?: true;
    currentCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventZoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventZone to aggregate.
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventZones to fetch.
     */
    orderBy?: Prisma.EventZoneOrderByWithRelationInput | Prisma.EventZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventZones
    **/
    _count?: true | EventZoneCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventZoneAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventZoneSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventZoneMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventZoneMaxAggregateInputType;
};
export type GetEventZoneAggregateType<T extends EventZoneAggregateArgs> = {
    [P in keyof T & keyof AggregateEventZone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventZone[P]> : Prisma.GetScalarType<T[P], AggregateEventZone[P]>;
};
export type EventZoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventZoneWhereInput;
    orderBy?: Prisma.EventZoneOrderByWithAggregationInput | Prisma.EventZoneOrderByWithAggregationInput[];
    by: Prisma.EventZoneScalarFieldEnum[] | Prisma.EventZoneScalarFieldEnum;
    having?: Prisma.EventZoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventZoneCountAggregateInputType | true;
    _avg?: EventZoneAvgAggregateInputType;
    _sum?: EventZoneSumAggregateInputType;
    _min?: EventZoneMinAggregateInputType;
    _max?: EventZoneMaxAggregateInputType;
};
export type EventZoneGroupByOutputType = {
    id: string;
    eventId: string;
    code: string;
    name: string;
    description: string | null;
    color: string;
    isActive: boolean;
    maxCapacity: number | null;
    currentCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: EventZoneCountAggregateOutputType | null;
    _avg: EventZoneAvgAggregateOutputType | null;
    _sum: EventZoneSumAggregateOutputType | null;
    _min: EventZoneMinAggregateOutputType | null;
    _max: EventZoneMaxAggregateOutputType | null;
};
type GetEventZoneGroupByPayload<T extends EventZoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventZoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventZoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventZoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventZoneGroupByOutputType[P]>;
}>>;
export type EventZoneWhereInput = {
    AND?: Prisma.EventZoneWhereInput | Prisma.EventZoneWhereInput[];
    OR?: Prisma.EventZoneWhereInput[];
    NOT?: Prisma.EventZoneWhereInput | Prisma.EventZoneWhereInput[];
    id?: Prisma.StringFilter<"EventZone"> | string;
    eventId?: Prisma.StringFilter<"EventZone"> | string;
    code?: Prisma.StringFilter<"EventZone"> | string;
    name?: Prisma.StringFilter<"EventZone"> | string;
    description?: Prisma.StringNullableFilter<"EventZone"> | string | null;
    color?: Prisma.StringFilter<"EventZone"> | string;
    isActive?: Prisma.BoolFilter<"EventZone"> | boolean;
    maxCapacity?: Prisma.IntNullableFilter<"EventZone"> | number | null;
    currentCount?: Prisma.IntFilter<"EventZone"> | number;
    createdAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    accessRights?: Prisma.ZoneAccessRightListRelationFilter;
    accessLogs?: Prisma.AccessLogListRelationFilter;
};
export type EventZoneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    maxCapacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    accessRights?: Prisma.ZoneAccessRightOrderByRelationAggregateInput;
    accessLogs?: Prisma.AccessLogOrderByRelationAggregateInput;
};
export type EventZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_code?: Prisma.EventZoneEventIdCodeCompoundUniqueInput;
    AND?: Prisma.EventZoneWhereInput | Prisma.EventZoneWhereInput[];
    OR?: Prisma.EventZoneWhereInput[];
    NOT?: Prisma.EventZoneWhereInput | Prisma.EventZoneWhereInput[];
    eventId?: Prisma.StringFilter<"EventZone"> | string;
    code?: Prisma.StringFilter<"EventZone"> | string;
    name?: Prisma.StringFilter<"EventZone"> | string;
    description?: Prisma.StringNullableFilter<"EventZone"> | string | null;
    color?: Prisma.StringFilter<"EventZone"> | string;
    isActive?: Prisma.BoolFilter<"EventZone"> | boolean;
    maxCapacity?: Prisma.IntNullableFilter<"EventZone"> | number | null;
    currentCount?: Prisma.IntFilter<"EventZone"> | number;
    createdAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    accessRights?: Prisma.ZoneAccessRightListRelationFilter;
    accessLogs?: Prisma.AccessLogListRelationFilter;
}, "id" | "eventId_code">;
export type EventZoneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    maxCapacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventZoneCountOrderByAggregateInput;
    _avg?: Prisma.EventZoneAvgOrderByAggregateInput;
    _max?: Prisma.EventZoneMaxOrderByAggregateInput;
    _min?: Prisma.EventZoneMinOrderByAggregateInput;
    _sum?: Prisma.EventZoneSumOrderByAggregateInput;
};
export type EventZoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventZoneScalarWhereWithAggregatesInput | Prisma.EventZoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventZoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventZoneScalarWhereWithAggregatesInput | Prisma.EventZoneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventZone"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventZone"> | string;
    code?: Prisma.StringWithAggregatesFilter<"EventZone"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EventZone"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"EventZone"> | string | null;
    color?: Prisma.StringWithAggregatesFilter<"EventZone"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"EventZone"> | boolean;
    maxCapacity?: Prisma.IntNullableWithAggregatesFilter<"EventZone"> | number | null;
    currentCount?: Prisma.IntWithAggregatesFilter<"EventZone"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventZone"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventZone"> | Date | string;
};
export type EventZoneCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventZonesInput;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutZoneInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutZoneInput;
};
export type EventZoneUncheckedCreateInput = {
    id?: string;
    eventId: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutZoneInput;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutZoneInput;
};
export type EventZoneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventZonesNestedInput;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutZoneNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutZoneNestedInput;
};
export type EventZoneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutZoneNestedInput;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutZoneNestedInput;
};
export type EventZoneCreateManyInput = {
    id?: string;
    eventId: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventZoneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventZoneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventZoneListRelationFilter = {
    every?: Prisma.EventZoneWhereInput;
    some?: Prisma.EventZoneWhereInput;
    none?: Prisma.EventZoneWhereInput;
};
export type EventZoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventZoneEventIdCodeCompoundUniqueInput = {
    eventId: string;
    code: string;
};
export type EventZoneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    maxCapacity?: Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventZoneAvgOrderByAggregateInput = {
    maxCapacity?: Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
};
export type EventZoneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    maxCapacity?: Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventZoneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    maxCapacity?: Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventZoneSumOrderByAggregateInput = {
    maxCapacity?: Prisma.SortOrder;
    currentCount?: Prisma.SortOrder;
};
export type EventZoneScalarRelationFilter = {
    is?: Prisma.EventZoneWhereInput;
    isNot?: Prisma.EventZoneWhereInput;
};
export type EventZoneCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput> | Prisma.EventZoneCreateWithoutEventInput[] | Prisma.EventZoneUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutEventInput | Prisma.EventZoneCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventZoneCreateManyEventInputEnvelope;
    connect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
};
export type EventZoneUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput> | Prisma.EventZoneCreateWithoutEventInput[] | Prisma.EventZoneUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutEventInput | Prisma.EventZoneCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventZoneCreateManyEventInputEnvelope;
    connect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
};
export type EventZoneUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput> | Prisma.EventZoneCreateWithoutEventInput[] | Prisma.EventZoneUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutEventInput | Prisma.EventZoneCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventZoneUpsertWithWhereUniqueWithoutEventInput | Prisma.EventZoneUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventZoneCreateManyEventInputEnvelope;
    set?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    disconnect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    delete?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    connect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    update?: Prisma.EventZoneUpdateWithWhereUniqueWithoutEventInput | Prisma.EventZoneUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventZoneUpdateManyWithWhereWithoutEventInput | Prisma.EventZoneUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventZoneScalarWhereInput | Prisma.EventZoneScalarWhereInput[];
};
export type EventZoneUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput> | Prisma.EventZoneCreateWithoutEventInput[] | Prisma.EventZoneUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutEventInput | Prisma.EventZoneCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventZoneUpsertWithWhereUniqueWithoutEventInput | Prisma.EventZoneUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventZoneCreateManyEventInputEnvelope;
    set?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    disconnect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    delete?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    connect?: Prisma.EventZoneWhereUniqueInput | Prisma.EventZoneWhereUniqueInput[];
    update?: Prisma.EventZoneUpdateWithWhereUniqueWithoutEventInput | Prisma.EventZoneUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventZoneUpdateManyWithWhereWithoutEventInput | Prisma.EventZoneUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventZoneScalarWhereInput | Prisma.EventZoneScalarWhereInput[];
};
export type EventZoneCreateNestedOneWithoutAccessRightsInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessRightsInput, Prisma.EventZoneUncheckedCreateWithoutAccessRightsInput>;
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutAccessRightsInput;
    connect?: Prisma.EventZoneWhereUniqueInput;
};
export type EventZoneUpdateOneRequiredWithoutAccessRightsNestedInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessRightsInput, Prisma.EventZoneUncheckedCreateWithoutAccessRightsInput>;
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutAccessRightsInput;
    upsert?: Prisma.EventZoneUpsertWithoutAccessRightsInput;
    connect?: Prisma.EventZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventZoneUpdateToOneWithWhereWithoutAccessRightsInput, Prisma.EventZoneUpdateWithoutAccessRightsInput>, Prisma.EventZoneUncheckedUpdateWithoutAccessRightsInput>;
};
export type EventZoneCreateNestedOneWithoutAccessLogsInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessLogsInput, Prisma.EventZoneUncheckedCreateWithoutAccessLogsInput>;
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutAccessLogsInput;
    connect?: Prisma.EventZoneWhereUniqueInput;
};
export type EventZoneUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessLogsInput, Prisma.EventZoneUncheckedCreateWithoutAccessLogsInput>;
    connectOrCreate?: Prisma.EventZoneCreateOrConnectWithoutAccessLogsInput;
    upsert?: Prisma.EventZoneUpsertWithoutAccessLogsInput;
    connect?: Prisma.EventZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventZoneUpdateToOneWithWhereWithoutAccessLogsInput, Prisma.EventZoneUpdateWithoutAccessLogsInput>, Prisma.EventZoneUncheckedUpdateWithoutAccessLogsInput>;
};
export type EventZoneCreateWithoutEventInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutZoneInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutZoneInput;
};
export type EventZoneUncheckedCreateWithoutEventInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutZoneInput;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutZoneInput;
};
export type EventZoneCreateOrConnectWithoutEventInput = {
    where: Prisma.EventZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput>;
};
export type EventZoneCreateManyEventInputEnvelope = {
    data: Prisma.EventZoneCreateManyEventInput | Prisma.EventZoneCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventZoneUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventZoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventZoneUpdateWithoutEventInput, Prisma.EventZoneUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutEventInput, Prisma.EventZoneUncheckedCreateWithoutEventInput>;
};
export type EventZoneUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventZoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventZoneUpdateWithoutEventInput, Prisma.EventZoneUncheckedUpdateWithoutEventInput>;
};
export type EventZoneUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventZoneScalarWhereInput;
    data: Prisma.XOR<Prisma.EventZoneUpdateManyMutationInput, Prisma.EventZoneUncheckedUpdateManyWithoutEventInput>;
};
export type EventZoneScalarWhereInput = {
    AND?: Prisma.EventZoneScalarWhereInput | Prisma.EventZoneScalarWhereInput[];
    OR?: Prisma.EventZoneScalarWhereInput[];
    NOT?: Prisma.EventZoneScalarWhereInput | Prisma.EventZoneScalarWhereInput[];
    id?: Prisma.StringFilter<"EventZone"> | string;
    eventId?: Prisma.StringFilter<"EventZone"> | string;
    code?: Prisma.StringFilter<"EventZone"> | string;
    name?: Prisma.StringFilter<"EventZone"> | string;
    description?: Prisma.StringNullableFilter<"EventZone"> | string | null;
    color?: Prisma.StringFilter<"EventZone"> | string;
    isActive?: Prisma.BoolFilter<"EventZone"> | boolean;
    maxCapacity?: Prisma.IntNullableFilter<"EventZone"> | number | null;
    currentCount?: Prisma.IntFilter<"EventZone"> | number;
    createdAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventZone"> | Date | string;
};
export type EventZoneCreateWithoutAccessRightsInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventZonesInput;
    accessLogs?: Prisma.AccessLogCreateNestedManyWithoutZoneInput;
};
export type EventZoneUncheckedCreateWithoutAccessRightsInput = {
    id?: string;
    eventId: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessLogs?: Prisma.AccessLogUncheckedCreateNestedManyWithoutZoneInput;
};
export type EventZoneCreateOrConnectWithoutAccessRightsInput = {
    where: Prisma.EventZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessRightsInput, Prisma.EventZoneUncheckedCreateWithoutAccessRightsInput>;
};
export type EventZoneUpsertWithoutAccessRightsInput = {
    update: Prisma.XOR<Prisma.EventZoneUpdateWithoutAccessRightsInput, Prisma.EventZoneUncheckedUpdateWithoutAccessRightsInput>;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessRightsInput, Prisma.EventZoneUncheckedCreateWithoutAccessRightsInput>;
    where?: Prisma.EventZoneWhereInput;
};
export type EventZoneUpdateToOneWithWhereWithoutAccessRightsInput = {
    where?: Prisma.EventZoneWhereInput;
    data: Prisma.XOR<Prisma.EventZoneUpdateWithoutAccessRightsInput, Prisma.EventZoneUncheckedUpdateWithoutAccessRightsInput>;
};
export type EventZoneUpdateWithoutAccessRightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventZonesNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutZoneNestedInput;
};
export type EventZoneUncheckedUpdateWithoutAccessRightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutZoneNestedInput;
};
export type EventZoneCreateWithoutAccessLogsInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventZonesInput;
    accessRights?: Prisma.ZoneAccessRightCreateNestedManyWithoutZoneInput;
};
export type EventZoneUncheckedCreateWithoutAccessLogsInput = {
    id?: string;
    eventId: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedCreateNestedManyWithoutZoneInput;
};
export type EventZoneCreateOrConnectWithoutAccessLogsInput = {
    where: Prisma.EventZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessLogsInput, Prisma.EventZoneUncheckedCreateWithoutAccessLogsInput>;
};
export type EventZoneUpsertWithoutAccessLogsInput = {
    update: Prisma.XOR<Prisma.EventZoneUpdateWithoutAccessLogsInput, Prisma.EventZoneUncheckedUpdateWithoutAccessLogsInput>;
    create: Prisma.XOR<Prisma.EventZoneCreateWithoutAccessLogsInput, Prisma.EventZoneUncheckedCreateWithoutAccessLogsInput>;
    where?: Prisma.EventZoneWhereInput;
};
export type EventZoneUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: Prisma.EventZoneWhereInput;
    data: Prisma.XOR<Prisma.EventZoneUpdateWithoutAccessLogsInput, Prisma.EventZoneUncheckedUpdateWithoutAccessLogsInput>;
};
export type EventZoneUpdateWithoutAccessLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventZonesNestedInput;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutZoneNestedInput;
};
export type EventZoneUncheckedUpdateWithoutAccessLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutZoneNestedInput;
};
export type EventZoneCreateManyEventInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    color?: string;
    isActive?: boolean;
    maxCapacity?: number | null;
    currentCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventZoneUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUpdateManyWithoutZoneNestedInput;
    accessLogs?: Prisma.AccessLogUpdateManyWithoutZoneNestedInput;
};
export type EventZoneUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accessRights?: Prisma.ZoneAccessRightUncheckedUpdateManyWithoutZoneNestedInput;
    accessLogs?: Prisma.AccessLogUncheckedUpdateManyWithoutZoneNestedInput;
};
export type EventZoneUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxCapacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    currentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type EventZoneCountOutputType
 */
export type EventZoneCountOutputType = {
    accessRights: number;
    accessLogs: number;
};
export type EventZoneCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accessRights?: boolean | EventZoneCountOutputTypeCountAccessRightsArgs;
    accessLogs?: boolean | EventZoneCountOutputTypeCountAccessLogsArgs;
};
/**
 * EventZoneCountOutputType without action
 */
export type EventZoneCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZoneCountOutputType
     */
    select?: Prisma.EventZoneCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventZoneCountOutputType without action
 */
export type EventZoneCountOutputTypeCountAccessRightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZoneAccessRightWhereInput;
};
/**
 * EventZoneCountOutputType without action
 */
export type EventZoneCountOutputTypeCountAccessLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessLogWhereInput;
};
export type EventZoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    isActive?: boolean;
    maxCapacity?: boolean;
    currentCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    accessRights?: boolean | Prisma.EventZone$accessRightsArgs<ExtArgs>;
    accessLogs?: boolean | Prisma.EventZone$accessLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventZoneCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventZone"]>;
export type EventZoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    isActive?: boolean;
    maxCapacity?: boolean;
    currentCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventZone"]>;
export type EventZoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    isActive?: boolean;
    maxCapacity?: boolean;
    currentCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventZone"]>;
export type EventZoneSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    isActive?: boolean;
    maxCapacity?: boolean;
    currentCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventZoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "code" | "name" | "description" | "color" | "isActive" | "maxCapacity" | "currentCount" | "createdAt" | "updatedAt", ExtArgs["result"]["eventZone"]>;
export type EventZoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    accessRights?: boolean | Prisma.EventZone$accessRightsArgs<ExtArgs>;
    accessLogs?: boolean | Prisma.EventZone$accessLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventZoneCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventZoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventZoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventZonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventZone";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        accessRights: Prisma.$ZoneAccessRightPayload<ExtArgs>[];
        accessLogs: Prisma.$AccessLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        code: string;
        name: string;
        description: string | null;
        color: string;
        isActive: boolean;
        maxCapacity: number | null;
        currentCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventZone"]>;
    composites: {};
};
export type EventZoneGetPayload<S extends boolean | null | undefined | EventZoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventZonePayload, S>;
export type EventZoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventZoneCountAggregateInputType | true;
};
export interface EventZoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventZone'];
        meta: {
            name: 'EventZone';
        };
    };
    /**
     * Find zero or one EventZone that matches the filter.
     * @param {EventZoneFindUniqueArgs} args - Arguments to find a EventZone
     * @example
     * // Get one EventZone
     * const eventZone = await prisma.eventZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventZoneFindUniqueArgs>(args: Prisma.SelectSubset<T, EventZoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventZoneFindUniqueOrThrowArgs} args - Arguments to find a EventZone
     * @example
     * // Get one EventZone
     * const eventZone = await prisma.eventZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventZoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneFindFirstArgs} args - Arguments to find a EventZone
     * @example
     * // Get one EventZone
     * const eventZone = await prisma.eventZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventZoneFindFirstArgs>(args?: Prisma.SelectSubset<T, EventZoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneFindFirstOrThrowArgs} args - Arguments to find a EventZone
     * @example
     * // Get one EventZone
     * const eventZone = await prisma.eventZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventZoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventZones
     * const eventZones = await prisma.eventZone.findMany()
     *
     * // Get first 10 EventZones
     * const eventZones = await prisma.eventZone.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventZoneWithIdOnly = await prisma.eventZone.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventZoneFindManyArgs>(args?: Prisma.SelectSubset<T, EventZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventZone.
     * @param {EventZoneCreateArgs} args - Arguments to create a EventZone.
     * @example
     * // Create one EventZone
     * const EventZone = await prisma.eventZone.create({
     *   data: {
     *     // ... data to create a EventZone
     *   }
     * })
     *
     */
    create<T extends EventZoneCreateArgs>(args: Prisma.SelectSubset<T, EventZoneCreateArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventZones.
     * @param {EventZoneCreateManyArgs} args - Arguments to create many EventZones.
     * @example
     * // Create many EventZones
     * const eventZone = await prisma.eventZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventZoneCreateManyArgs>(args?: Prisma.SelectSubset<T, EventZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventZones and returns the data saved in the database.
     * @param {EventZoneCreateManyAndReturnArgs} args - Arguments to create many EventZones.
     * @example
     * // Create many EventZones
     * const eventZone = await prisma.eventZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventZones and only return the `id`
     * const eventZoneWithIdOnly = await prisma.eventZone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventZoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventZone.
     * @param {EventZoneDeleteArgs} args - Arguments to delete one EventZone.
     * @example
     * // Delete one EventZone
     * const EventZone = await prisma.eventZone.delete({
     *   where: {
     *     // ... filter to delete one EventZone
     *   }
     * })
     *
     */
    delete<T extends EventZoneDeleteArgs>(args: Prisma.SelectSubset<T, EventZoneDeleteArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventZone.
     * @param {EventZoneUpdateArgs} args - Arguments to update one EventZone.
     * @example
     * // Update one EventZone
     * const eventZone = await prisma.eventZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventZoneUpdateArgs>(args: Prisma.SelectSubset<T, EventZoneUpdateArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventZones.
     * @param {EventZoneDeleteManyArgs} args - Arguments to filter EventZones to delete.
     * @example
     * // Delete a few EventZones
     * const { count } = await prisma.eventZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventZoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventZones
     * const eventZone = await prisma.eventZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventZoneUpdateManyArgs>(args: Prisma.SelectSubset<T, EventZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventZones and returns the data updated in the database.
     * @param {EventZoneUpdateManyAndReturnArgs} args - Arguments to update many EventZones.
     * @example
     * // Update many EventZones
     * const eventZone = await prisma.eventZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventZones and only return the `id`
     * const eventZoneWithIdOnly = await prisma.eventZone.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventZoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventZone.
     * @param {EventZoneUpsertArgs} args - Arguments to update or create a EventZone.
     * @example
     * // Update or create a EventZone
     * const eventZone = await prisma.eventZone.upsert({
     *   create: {
     *     // ... data to create a EventZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventZone we want to update
     *   }
     * })
     */
    upsert<T extends EventZoneUpsertArgs>(args: Prisma.SelectSubset<T, EventZoneUpsertArgs<ExtArgs>>): Prisma.Prisma__EventZoneClient<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneCountArgs} args - Arguments to filter EventZones to count.
     * @example
     * // Count the number of EventZones
     * const count = await prisma.eventZone.count({
     *   where: {
     *     // ... the filter for the EventZones we want to count
     *   }
     * })
    **/
    count<T extends EventZoneCountArgs>(args?: Prisma.Subset<T, EventZoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventZoneCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventZoneAggregateArgs>(args: Prisma.Subset<T, EventZoneAggregateArgs>): Prisma.PrismaPromise<GetEventZoneAggregateType<T>>;
    /**
     * Group by EventZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventZoneGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventZoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventZoneGroupByArgs['orderBy'];
    } : {
        orderBy?: EventZoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventZone model
     */
    readonly fields: EventZoneFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventZone.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventZoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    accessRights<T extends Prisma.EventZone$accessRightsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventZone$accessRightsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZoneAccessRightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accessLogs<T extends Prisma.EventZone$accessLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventZone$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EventZone model
 */
export interface EventZoneFieldRefs {
    readonly id: Prisma.FieldRef<"EventZone", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventZone", 'String'>;
    readonly code: Prisma.FieldRef<"EventZone", 'String'>;
    readonly name: Prisma.FieldRef<"EventZone", 'String'>;
    readonly description: Prisma.FieldRef<"EventZone", 'String'>;
    readonly color: Prisma.FieldRef<"EventZone", 'String'>;
    readonly isActive: Prisma.FieldRef<"EventZone", 'Boolean'>;
    readonly maxCapacity: Prisma.FieldRef<"EventZone", 'Int'>;
    readonly currentCount: Prisma.FieldRef<"EventZone", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EventZone", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventZone", 'DateTime'>;
}
/**
 * EventZone findUnique
 */
export type EventZoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter, which EventZone to fetch.
     */
    where: Prisma.EventZoneWhereUniqueInput;
};
/**
 * EventZone findUniqueOrThrow
 */
export type EventZoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter, which EventZone to fetch.
     */
    where: Prisma.EventZoneWhereUniqueInput;
};
/**
 * EventZone findFirst
 */
export type EventZoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter, which EventZone to fetch.
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventZones to fetch.
     */
    orderBy?: Prisma.EventZoneOrderByWithRelationInput | Prisma.EventZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventZones.
     */
    cursor?: Prisma.EventZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventZones.
     */
    distinct?: Prisma.EventZoneScalarFieldEnum | Prisma.EventZoneScalarFieldEnum[];
};
/**
 * EventZone findFirstOrThrow
 */
export type EventZoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter, which EventZone to fetch.
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventZones to fetch.
     */
    orderBy?: Prisma.EventZoneOrderByWithRelationInput | Prisma.EventZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventZones.
     */
    cursor?: Prisma.EventZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventZones.
     */
    distinct?: Prisma.EventZoneScalarFieldEnum | Prisma.EventZoneScalarFieldEnum[];
};
/**
 * EventZone findMany
 */
export type EventZoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter, which EventZones to fetch.
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventZones to fetch.
     */
    orderBy?: Prisma.EventZoneOrderByWithRelationInput | Prisma.EventZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventZones.
     */
    cursor?: Prisma.EventZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventZones.
     */
    skip?: number;
    distinct?: Prisma.EventZoneScalarFieldEnum | Prisma.EventZoneScalarFieldEnum[];
};
/**
 * EventZone create
 */
export type EventZoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventZone.
     */
    data: Prisma.XOR<Prisma.EventZoneCreateInput, Prisma.EventZoneUncheckedCreateInput>;
};
/**
 * EventZone createMany
 */
export type EventZoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventZones.
     */
    data: Prisma.EventZoneCreateManyInput | Prisma.EventZoneCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventZone createManyAndReturn
 */
export type EventZoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * The data used to create many EventZones.
     */
    data: Prisma.EventZoneCreateManyInput | Prisma.EventZoneCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventZone update
 */
export type EventZoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventZone.
     */
    data: Prisma.XOR<Prisma.EventZoneUpdateInput, Prisma.EventZoneUncheckedUpdateInput>;
    /**
     * Choose, which EventZone to update.
     */
    where: Prisma.EventZoneWhereUniqueInput;
};
/**
 * EventZone updateMany
 */
export type EventZoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventZones.
     */
    data: Prisma.XOR<Prisma.EventZoneUpdateManyMutationInput, Prisma.EventZoneUncheckedUpdateManyInput>;
    /**
     * Filter which EventZones to update
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * Limit how many EventZones to update.
     */
    limit?: number;
};
/**
 * EventZone updateManyAndReturn
 */
export type EventZoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * The data used to update EventZones.
     */
    data: Prisma.XOR<Prisma.EventZoneUpdateManyMutationInput, Prisma.EventZoneUncheckedUpdateManyInput>;
    /**
     * Filter which EventZones to update
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * Limit how many EventZones to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventZone upsert
 */
export type EventZoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventZone to update in case it exists.
     */
    where: Prisma.EventZoneWhereUniqueInput;
    /**
     * In case the EventZone found by the `where` argument doesn't exist, create a new EventZone with this data.
     */
    create: Prisma.XOR<Prisma.EventZoneCreateInput, Prisma.EventZoneUncheckedCreateInput>;
    /**
     * In case the EventZone was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventZoneUpdateInput, Prisma.EventZoneUncheckedUpdateInput>;
};
/**
 * EventZone delete
 */
export type EventZoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
    /**
     * Filter which EventZone to delete.
     */
    where: Prisma.EventZoneWhereUniqueInput;
};
/**
 * EventZone deleteMany
 */
export type EventZoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventZones to delete
     */
    where?: Prisma.EventZoneWhereInput;
    /**
     * Limit how many EventZones to delete.
     */
    limit?: number;
};
/**
 * EventZone.accessRights
 */
export type EventZone$accessRightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneAccessRight
     */
    select?: Prisma.ZoneAccessRightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ZoneAccessRight
     */
    omit?: Prisma.ZoneAccessRightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ZoneAccessRightInclude<ExtArgs> | null;
    where?: Prisma.ZoneAccessRightWhereInput;
    orderBy?: Prisma.ZoneAccessRightOrderByWithRelationInput | Prisma.ZoneAccessRightOrderByWithRelationInput[];
    cursor?: Prisma.ZoneAccessRightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZoneAccessRightScalarFieldEnum | Prisma.ZoneAccessRightScalarFieldEnum[];
};
/**
 * EventZone.accessLogs
 */
export type EventZone$accessLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: Prisma.AccessLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: Prisma.AccessLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessLogInclude<ExtArgs> | null;
    where?: Prisma.AccessLogWhereInput;
    orderBy?: Prisma.AccessLogOrderByWithRelationInput | Prisma.AccessLogOrderByWithRelationInput[];
    cursor?: Prisma.AccessLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessLogScalarFieldEnum | Prisma.AccessLogScalarFieldEnum[];
};
/**
 * EventZone without action
 */
export type EventZoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventZone
     */
    select?: Prisma.EventZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventZone
     */
    omit?: Prisma.EventZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventZoneInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventZone.d.ts.map