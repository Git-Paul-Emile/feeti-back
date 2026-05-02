import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventController
 *
 */
export type EventControllerModel = runtime.Types.Result.DefaultSelection<Prisma.$EventControllerPayload>;
export type AggregateEventController = {
    _count: EventControllerCountAggregateOutputType | null;
    _min: EventControllerMinAggregateOutputType | null;
    _max: EventControllerMaxAggregateOutputType | null;
};
export type EventControllerMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    controllerId: string | null;
    assignedAt: Date | null;
};
export type EventControllerMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    controllerId: string | null;
    assignedAt: Date | null;
};
export type EventControllerCountAggregateOutputType = {
    id: number;
    eventId: number;
    controllerId: number;
    assignedAt: number;
    _all: number;
};
export type EventControllerMinAggregateInputType = {
    id?: true;
    eventId?: true;
    controllerId?: true;
    assignedAt?: true;
};
export type EventControllerMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    controllerId?: true;
    assignedAt?: true;
};
export type EventControllerCountAggregateInputType = {
    id?: true;
    eventId?: true;
    controllerId?: true;
    assignedAt?: true;
    _all?: true;
};
export type EventControllerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventController to aggregate.
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventControllers to fetch.
     */
    orderBy?: Prisma.EventControllerOrderByWithRelationInput | Prisma.EventControllerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventControllerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventControllers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventControllers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventControllers
    **/
    _count?: true | EventControllerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventControllerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventControllerMaxAggregateInputType;
};
export type GetEventControllerAggregateType<T extends EventControllerAggregateArgs> = {
    [P in keyof T & keyof AggregateEventController]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventController[P]> : Prisma.GetScalarType<T[P], AggregateEventController[P]>;
};
export type EventControllerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventControllerWhereInput;
    orderBy?: Prisma.EventControllerOrderByWithAggregationInput | Prisma.EventControllerOrderByWithAggregationInput[];
    by: Prisma.EventControllerScalarFieldEnum[] | Prisma.EventControllerScalarFieldEnum;
    having?: Prisma.EventControllerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventControllerCountAggregateInputType | true;
    _min?: EventControllerMinAggregateInputType;
    _max?: EventControllerMaxAggregateInputType;
};
export type EventControllerGroupByOutputType = {
    id: string;
    eventId: string;
    controllerId: string;
    assignedAt: Date;
    _count: EventControllerCountAggregateOutputType | null;
    _min: EventControllerMinAggregateOutputType | null;
    _max: EventControllerMaxAggregateOutputType | null;
};
type GetEventControllerGroupByPayload<T extends EventControllerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventControllerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventControllerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventControllerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventControllerGroupByOutputType[P]>;
}>>;
export type EventControllerWhereInput = {
    AND?: Prisma.EventControllerWhereInput | Prisma.EventControllerWhereInput[];
    OR?: Prisma.EventControllerWhereInput[];
    NOT?: Prisma.EventControllerWhereInput | Prisma.EventControllerWhereInput[];
    id?: Prisma.StringFilter<"EventController"> | string;
    eventId?: Prisma.StringFilter<"EventController"> | string;
    controllerId?: Prisma.StringFilter<"EventController"> | string;
    assignedAt?: Prisma.DateTimeFilter<"EventController"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    controller?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EventControllerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    controllerId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    controller?: Prisma.UserOrderByWithRelationInput;
};
export type EventControllerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_controllerId?: Prisma.EventControllerEventIdControllerIdCompoundUniqueInput;
    AND?: Prisma.EventControllerWhereInput | Prisma.EventControllerWhereInput[];
    OR?: Prisma.EventControllerWhereInput[];
    NOT?: Prisma.EventControllerWhereInput | Prisma.EventControllerWhereInput[];
    eventId?: Prisma.StringFilter<"EventController"> | string;
    controllerId?: Prisma.StringFilter<"EventController"> | string;
    assignedAt?: Prisma.DateTimeFilter<"EventController"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    controller?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "eventId_controllerId">;
export type EventControllerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    controllerId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    _count?: Prisma.EventControllerCountOrderByAggregateInput;
    _max?: Prisma.EventControllerMaxOrderByAggregateInput;
    _min?: Prisma.EventControllerMinOrderByAggregateInput;
};
export type EventControllerScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventControllerScalarWhereWithAggregatesInput | Prisma.EventControllerScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventControllerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventControllerScalarWhereWithAggregatesInput | Prisma.EventControllerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventController"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventController"> | string;
    controllerId?: Prisma.StringWithAggregatesFilter<"EventController"> | string;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"EventController"> | Date | string;
};
export type EventControllerCreateInput = {
    id?: string;
    assignedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutControllersInput;
    controller: Prisma.UserCreateNestedOneWithoutAssignedEventsInput;
};
export type EventControllerUncheckedCreateInput = {
    id?: string;
    eventId: string;
    controllerId: string;
    assignedAt?: Date | string;
};
export type EventControllerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutControllersNestedInput;
    controller?: Prisma.UserUpdateOneRequiredWithoutAssignedEventsNestedInput;
};
export type EventControllerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    controllerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerCreateManyInput = {
    id?: string;
    eventId: string;
    controllerId: string;
    assignedAt?: Date | string;
};
export type EventControllerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    controllerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerListRelationFilter = {
    every?: Prisma.EventControllerWhereInput;
    some?: Prisma.EventControllerWhereInput;
    none?: Prisma.EventControllerWhereInput;
};
export type EventControllerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventControllerEventIdControllerIdCompoundUniqueInput = {
    eventId: string;
    controllerId: string;
};
export type EventControllerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    controllerId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type EventControllerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    controllerId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type EventControllerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    controllerId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type EventControllerCreateNestedManyWithoutControllerInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput> | Prisma.EventControllerCreateWithoutControllerInput[] | Prisma.EventControllerUncheckedCreateWithoutControllerInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutControllerInput | Prisma.EventControllerCreateOrConnectWithoutControllerInput[];
    createMany?: Prisma.EventControllerCreateManyControllerInputEnvelope;
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
};
export type EventControllerUncheckedCreateNestedManyWithoutControllerInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput> | Prisma.EventControllerCreateWithoutControllerInput[] | Prisma.EventControllerUncheckedCreateWithoutControllerInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutControllerInput | Prisma.EventControllerCreateOrConnectWithoutControllerInput[];
    createMany?: Prisma.EventControllerCreateManyControllerInputEnvelope;
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
};
export type EventControllerUpdateManyWithoutControllerNestedInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput> | Prisma.EventControllerCreateWithoutControllerInput[] | Prisma.EventControllerUncheckedCreateWithoutControllerInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutControllerInput | Prisma.EventControllerCreateOrConnectWithoutControllerInput[];
    upsert?: Prisma.EventControllerUpsertWithWhereUniqueWithoutControllerInput | Prisma.EventControllerUpsertWithWhereUniqueWithoutControllerInput[];
    createMany?: Prisma.EventControllerCreateManyControllerInputEnvelope;
    set?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    disconnect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    delete?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    update?: Prisma.EventControllerUpdateWithWhereUniqueWithoutControllerInput | Prisma.EventControllerUpdateWithWhereUniqueWithoutControllerInput[];
    updateMany?: Prisma.EventControllerUpdateManyWithWhereWithoutControllerInput | Prisma.EventControllerUpdateManyWithWhereWithoutControllerInput[];
    deleteMany?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
};
export type EventControllerUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput> | Prisma.EventControllerCreateWithoutControllerInput[] | Prisma.EventControllerUncheckedCreateWithoutControllerInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutControllerInput | Prisma.EventControllerCreateOrConnectWithoutControllerInput[];
    upsert?: Prisma.EventControllerUpsertWithWhereUniqueWithoutControllerInput | Prisma.EventControllerUpsertWithWhereUniqueWithoutControllerInput[];
    createMany?: Prisma.EventControllerCreateManyControllerInputEnvelope;
    set?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    disconnect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    delete?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    update?: Prisma.EventControllerUpdateWithWhereUniqueWithoutControllerInput | Prisma.EventControllerUpdateWithWhereUniqueWithoutControllerInput[];
    updateMany?: Prisma.EventControllerUpdateManyWithWhereWithoutControllerInput | Prisma.EventControllerUpdateManyWithWhereWithoutControllerInput[];
    deleteMany?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
};
export type EventControllerCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput> | Prisma.EventControllerCreateWithoutEventInput[] | Prisma.EventControllerUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutEventInput | Prisma.EventControllerCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventControllerCreateManyEventInputEnvelope;
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
};
export type EventControllerUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput> | Prisma.EventControllerCreateWithoutEventInput[] | Prisma.EventControllerUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutEventInput | Prisma.EventControllerCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventControllerCreateManyEventInputEnvelope;
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
};
export type EventControllerUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput> | Prisma.EventControllerCreateWithoutEventInput[] | Prisma.EventControllerUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutEventInput | Prisma.EventControllerCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventControllerUpsertWithWhereUniqueWithoutEventInput | Prisma.EventControllerUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventControllerCreateManyEventInputEnvelope;
    set?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    disconnect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    delete?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    update?: Prisma.EventControllerUpdateWithWhereUniqueWithoutEventInput | Prisma.EventControllerUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventControllerUpdateManyWithWhereWithoutEventInput | Prisma.EventControllerUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
};
export type EventControllerUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput> | Prisma.EventControllerCreateWithoutEventInput[] | Prisma.EventControllerUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventControllerCreateOrConnectWithoutEventInput | Prisma.EventControllerCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventControllerUpsertWithWhereUniqueWithoutEventInput | Prisma.EventControllerUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventControllerCreateManyEventInputEnvelope;
    set?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    disconnect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    delete?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    connect?: Prisma.EventControllerWhereUniqueInput | Prisma.EventControllerWhereUniqueInput[];
    update?: Prisma.EventControllerUpdateWithWhereUniqueWithoutEventInput | Prisma.EventControllerUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventControllerUpdateManyWithWhereWithoutEventInput | Prisma.EventControllerUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
};
export type EventControllerCreateWithoutControllerInput = {
    id?: string;
    assignedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutControllersInput;
};
export type EventControllerUncheckedCreateWithoutControllerInput = {
    id?: string;
    eventId: string;
    assignedAt?: Date | string;
};
export type EventControllerCreateOrConnectWithoutControllerInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput>;
};
export type EventControllerCreateManyControllerInputEnvelope = {
    data: Prisma.EventControllerCreateManyControllerInput | Prisma.EventControllerCreateManyControllerInput[];
    skipDuplicates?: boolean;
};
export type EventControllerUpsertWithWhereUniqueWithoutControllerInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventControllerUpdateWithoutControllerInput, Prisma.EventControllerUncheckedUpdateWithoutControllerInput>;
    create: Prisma.XOR<Prisma.EventControllerCreateWithoutControllerInput, Prisma.EventControllerUncheckedCreateWithoutControllerInput>;
};
export type EventControllerUpdateWithWhereUniqueWithoutControllerInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventControllerUpdateWithoutControllerInput, Prisma.EventControllerUncheckedUpdateWithoutControllerInput>;
};
export type EventControllerUpdateManyWithWhereWithoutControllerInput = {
    where: Prisma.EventControllerScalarWhereInput;
    data: Prisma.XOR<Prisma.EventControllerUpdateManyMutationInput, Prisma.EventControllerUncheckedUpdateManyWithoutControllerInput>;
};
export type EventControllerScalarWhereInput = {
    AND?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
    OR?: Prisma.EventControllerScalarWhereInput[];
    NOT?: Prisma.EventControllerScalarWhereInput | Prisma.EventControllerScalarWhereInput[];
    id?: Prisma.StringFilter<"EventController"> | string;
    eventId?: Prisma.StringFilter<"EventController"> | string;
    controllerId?: Prisma.StringFilter<"EventController"> | string;
    assignedAt?: Prisma.DateTimeFilter<"EventController"> | Date | string;
};
export type EventControllerCreateWithoutEventInput = {
    id?: string;
    assignedAt?: Date | string;
    controller: Prisma.UserCreateNestedOneWithoutAssignedEventsInput;
};
export type EventControllerUncheckedCreateWithoutEventInput = {
    id?: string;
    controllerId: string;
    assignedAt?: Date | string;
};
export type EventControllerCreateOrConnectWithoutEventInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput>;
};
export type EventControllerCreateManyEventInputEnvelope = {
    data: Prisma.EventControllerCreateManyEventInput | Prisma.EventControllerCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventControllerUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventControllerUpdateWithoutEventInput, Prisma.EventControllerUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventControllerCreateWithoutEventInput, Prisma.EventControllerUncheckedCreateWithoutEventInput>;
};
export type EventControllerUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventControllerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventControllerUpdateWithoutEventInput, Prisma.EventControllerUncheckedUpdateWithoutEventInput>;
};
export type EventControllerUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventControllerScalarWhereInput;
    data: Prisma.XOR<Prisma.EventControllerUpdateManyMutationInput, Prisma.EventControllerUncheckedUpdateManyWithoutEventInput>;
};
export type EventControllerCreateManyControllerInput = {
    id?: string;
    eventId: string;
    assignedAt?: Date | string;
};
export type EventControllerUpdateWithoutControllerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutControllersNestedInput;
};
export type EventControllerUncheckedUpdateWithoutControllerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerUncheckedUpdateManyWithoutControllerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerCreateManyEventInput = {
    id?: string;
    controllerId: string;
    assignedAt?: Date | string;
};
export type EventControllerUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    controller?: Prisma.UserUpdateOneRequiredWithoutAssignedEventsNestedInput;
};
export type EventControllerUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    controllerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    controllerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventControllerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    controllerId?: boolean;
    assignedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventController"]>;
export type EventControllerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    controllerId?: boolean;
    assignedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventController"]>;
export type EventControllerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    controllerId?: boolean;
    assignedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventController"]>;
export type EventControllerSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    controllerId?: boolean;
    assignedAt?: boolean;
};
export type EventControllerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "controllerId" | "assignedAt", ExtArgs["result"]["eventController"]>;
export type EventControllerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventControllerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventControllerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    controller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventControllerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventController";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        controller: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        controllerId: string;
        assignedAt: Date;
    }, ExtArgs["result"]["eventController"]>;
    composites: {};
};
export type EventControllerGetPayload<S extends boolean | null | undefined | EventControllerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventControllerPayload, S>;
export type EventControllerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventControllerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventControllerCountAggregateInputType | true;
};
export interface EventControllerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventController'];
        meta: {
            name: 'EventController';
        };
    };
    /**
     * Find zero or one EventController that matches the filter.
     * @param {EventControllerFindUniqueArgs} args - Arguments to find a EventController
     * @example
     * // Get one EventController
     * const eventController = await prisma.eventController.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventControllerFindUniqueArgs>(args: Prisma.SelectSubset<T, EventControllerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventController that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventControllerFindUniqueOrThrowArgs} args - Arguments to find a EventController
     * @example
     * // Get one EventController
     * const eventController = await prisma.eventController.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventControllerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventControllerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventController that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerFindFirstArgs} args - Arguments to find a EventController
     * @example
     * // Get one EventController
     * const eventController = await prisma.eventController.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventControllerFindFirstArgs>(args?: Prisma.SelectSubset<T, EventControllerFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventController that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerFindFirstOrThrowArgs} args - Arguments to find a EventController
     * @example
     * // Get one EventController
     * const eventController = await prisma.eventController.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventControllerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventControllerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventControllers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventControllers
     * const eventControllers = await prisma.eventController.findMany()
     *
     * // Get first 10 EventControllers
     * const eventControllers = await prisma.eventController.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventControllerWithIdOnly = await prisma.eventController.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventControllerFindManyArgs>(args?: Prisma.SelectSubset<T, EventControllerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventController.
     * @param {EventControllerCreateArgs} args - Arguments to create a EventController.
     * @example
     * // Create one EventController
     * const EventController = await prisma.eventController.create({
     *   data: {
     *     // ... data to create a EventController
     *   }
     * })
     *
     */
    create<T extends EventControllerCreateArgs>(args: Prisma.SelectSubset<T, EventControllerCreateArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventControllers.
     * @param {EventControllerCreateManyArgs} args - Arguments to create many EventControllers.
     * @example
     * // Create many EventControllers
     * const eventController = await prisma.eventController.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventControllerCreateManyArgs>(args?: Prisma.SelectSubset<T, EventControllerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventControllers and returns the data saved in the database.
     * @param {EventControllerCreateManyAndReturnArgs} args - Arguments to create many EventControllers.
     * @example
     * // Create many EventControllers
     * const eventController = await prisma.eventController.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventControllers and only return the `id`
     * const eventControllerWithIdOnly = await prisma.eventController.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventControllerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventControllerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventController.
     * @param {EventControllerDeleteArgs} args - Arguments to delete one EventController.
     * @example
     * // Delete one EventController
     * const EventController = await prisma.eventController.delete({
     *   where: {
     *     // ... filter to delete one EventController
     *   }
     * })
     *
     */
    delete<T extends EventControllerDeleteArgs>(args: Prisma.SelectSubset<T, EventControllerDeleteArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventController.
     * @param {EventControllerUpdateArgs} args - Arguments to update one EventController.
     * @example
     * // Update one EventController
     * const eventController = await prisma.eventController.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventControllerUpdateArgs>(args: Prisma.SelectSubset<T, EventControllerUpdateArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventControllers.
     * @param {EventControllerDeleteManyArgs} args - Arguments to filter EventControllers to delete.
     * @example
     * // Delete a few EventControllers
     * const { count } = await prisma.eventController.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventControllerDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventControllerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventControllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventControllers
     * const eventController = await prisma.eventController.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventControllerUpdateManyArgs>(args: Prisma.SelectSubset<T, EventControllerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventControllers and returns the data updated in the database.
     * @param {EventControllerUpdateManyAndReturnArgs} args - Arguments to update many EventControllers.
     * @example
     * // Update many EventControllers
     * const eventController = await prisma.eventController.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventControllers and only return the `id`
     * const eventControllerWithIdOnly = await prisma.eventController.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventControllerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventControllerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventController.
     * @param {EventControllerUpsertArgs} args - Arguments to update or create a EventController.
     * @example
     * // Update or create a EventController
     * const eventController = await prisma.eventController.upsert({
     *   create: {
     *     // ... data to create a EventController
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventController we want to update
     *   }
     * })
     */
    upsert<T extends EventControllerUpsertArgs>(args: Prisma.SelectSubset<T, EventControllerUpsertArgs<ExtArgs>>): Prisma.Prisma__EventControllerClient<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventControllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerCountArgs} args - Arguments to filter EventControllers to count.
     * @example
     * // Count the number of EventControllers
     * const count = await prisma.eventController.count({
     *   where: {
     *     // ... the filter for the EventControllers we want to count
     *   }
     * })
    **/
    count<T extends EventControllerCountArgs>(args?: Prisma.Subset<T, EventControllerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventControllerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventController.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventControllerAggregateArgs>(args: Prisma.Subset<T, EventControllerAggregateArgs>): Prisma.PrismaPromise<GetEventControllerAggregateType<T>>;
    /**
     * Group by EventController.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventControllerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventControllerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventControllerGroupByArgs['orderBy'];
    } : {
        orderBy?: EventControllerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventControllerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventControllerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventController model
     */
    readonly fields: EventControllerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventController.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventControllerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    controller<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventController model
 */
export interface EventControllerFieldRefs {
    readonly id: Prisma.FieldRef<"EventController", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventController", 'String'>;
    readonly controllerId: Prisma.FieldRef<"EventController", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"EventController", 'DateTime'>;
}
/**
 * EventController findUnique
 */
export type EventControllerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter, which EventController to fetch.
     */
    where: Prisma.EventControllerWhereUniqueInput;
};
/**
 * EventController findUniqueOrThrow
 */
export type EventControllerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter, which EventController to fetch.
     */
    where: Prisma.EventControllerWhereUniqueInput;
};
/**
 * EventController findFirst
 */
export type EventControllerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter, which EventController to fetch.
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventControllers to fetch.
     */
    orderBy?: Prisma.EventControllerOrderByWithRelationInput | Prisma.EventControllerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventControllers.
     */
    cursor?: Prisma.EventControllerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventControllers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventControllers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventControllers.
     */
    distinct?: Prisma.EventControllerScalarFieldEnum | Prisma.EventControllerScalarFieldEnum[];
};
/**
 * EventController findFirstOrThrow
 */
export type EventControllerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter, which EventController to fetch.
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventControllers to fetch.
     */
    orderBy?: Prisma.EventControllerOrderByWithRelationInput | Prisma.EventControllerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventControllers.
     */
    cursor?: Prisma.EventControllerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventControllers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventControllers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventControllers.
     */
    distinct?: Prisma.EventControllerScalarFieldEnum | Prisma.EventControllerScalarFieldEnum[];
};
/**
 * EventController findMany
 */
export type EventControllerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter, which EventControllers to fetch.
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventControllers to fetch.
     */
    orderBy?: Prisma.EventControllerOrderByWithRelationInput | Prisma.EventControllerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventControllers.
     */
    cursor?: Prisma.EventControllerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventControllers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventControllers.
     */
    skip?: number;
    distinct?: Prisma.EventControllerScalarFieldEnum | Prisma.EventControllerScalarFieldEnum[];
};
/**
 * EventController create
 */
export type EventControllerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventController.
     */
    data: Prisma.XOR<Prisma.EventControllerCreateInput, Prisma.EventControllerUncheckedCreateInput>;
};
/**
 * EventController createMany
 */
export type EventControllerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventControllers.
     */
    data: Prisma.EventControllerCreateManyInput | Prisma.EventControllerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventController createManyAndReturn
 */
export type EventControllerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * The data used to create many EventControllers.
     */
    data: Prisma.EventControllerCreateManyInput | Prisma.EventControllerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventController update
 */
export type EventControllerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventController.
     */
    data: Prisma.XOR<Prisma.EventControllerUpdateInput, Prisma.EventControllerUncheckedUpdateInput>;
    /**
     * Choose, which EventController to update.
     */
    where: Prisma.EventControllerWhereUniqueInput;
};
/**
 * EventController updateMany
 */
export type EventControllerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventControllers.
     */
    data: Prisma.XOR<Prisma.EventControllerUpdateManyMutationInput, Prisma.EventControllerUncheckedUpdateManyInput>;
    /**
     * Filter which EventControllers to update
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * Limit how many EventControllers to update.
     */
    limit?: number;
};
/**
 * EventController updateManyAndReturn
 */
export type EventControllerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * The data used to update EventControllers.
     */
    data: Prisma.XOR<Prisma.EventControllerUpdateManyMutationInput, Prisma.EventControllerUncheckedUpdateManyInput>;
    /**
     * Filter which EventControllers to update
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * Limit how many EventControllers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventController upsert
 */
export type EventControllerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventController to update in case it exists.
     */
    where: Prisma.EventControllerWhereUniqueInput;
    /**
     * In case the EventController found by the `where` argument doesn't exist, create a new EventController with this data.
     */
    create: Prisma.XOR<Prisma.EventControllerCreateInput, Prisma.EventControllerUncheckedCreateInput>;
    /**
     * In case the EventController was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventControllerUpdateInput, Prisma.EventControllerUncheckedUpdateInput>;
};
/**
 * EventController delete
 */
export type EventControllerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
    /**
     * Filter which EventController to delete.
     */
    where: Prisma.EventControllerWhereUniqueInput;
};
/**
 * EventController deleteMany
 */
export type EventControllerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventControllers to delete
     */
    where?: Prisma.EventControllerWhereInput;
    /**
     * Limit how many EventControllers to delete.
     */
    limit?: number;
};
/**
 * EventController without action
 */
export type EventControllerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventController
     */
    select?: Prisma.EventControllerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventController
     */
    omit?: Prisma.EventControllerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventControllerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventController.d.ts.map