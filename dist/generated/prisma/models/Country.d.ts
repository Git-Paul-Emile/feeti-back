import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Country
 *
 */
export type CountryModel = runtime.Types.Result.DefaultSelection<Prisma.$CountryPayload>;
export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
export type CountryMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    flag: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CountryMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    flag: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CountryCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    flag: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type CountryMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    flag?: true;
    isActive?: true;
    createdAt?: true;
};
export type CountryMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    flag?: true;
    isActive?: true;
    createdAt?: true;
};
export type CountryCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    flag?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type CountryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: Prisma.CountryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Countries to fetch.
     */
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CountryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Countries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType;
};
export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
    [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCountry[P]> : Prisma.GetScalarType<T[P], AggregateCountry[P]>;
};
export type CountryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithAggregationInput | Prisma.CountryOrderByWithAggregationInput[];
    by: Prisma.CountryScalarFieldEnum[] | Prisma.CountryScalarFieldEnum;
    having?: Prisma.CountryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountryCountAggregateInputType | true;
    _min?: CountryMinAggregateInputType;
    _max?: CountryMaxAggregateInputType;
};
export type CountryGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    flag: string;
    isActive: boolean;
    createdAt: Date;
    _count: CountryCountAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]>;
}>>;
export type CountryWhereInput = {
    AND?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    OR?: Prisma.CountryWhereInput[];
    NOT?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    id?: Prisma.StringFilter<"Country"> | string;
    code?: Prisma.StringFilter<"Country"> | string;
    name?: Prisma.StringFilter<"Country"> | string;
    flag?: Prisma.StringFilter<"Country"> | string;
    isActive?: Prisma.BoolFilter<"Country"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    events?: Prisma.EventListRelationFilter;
    deals?: Prisma.DealListRelationFilter;
    leisureItems?: Prisma.LeisureItemListRelationFilter;
    cities?: Prisma.CityListRelationFilter;
    deliveryZones?: Prisma.DeliveryZoneListRelationFilter;
};
export type CountryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    flag?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    events?: Prisma.EventOrderByRelationAggregateInput;
    deals?: Prisma.DealOrderByRelationAggregateInput;
    leisureItems?: Prisma.LeisureItemOrderByRelationAggregateInput;
    cities?: Prisma.CityOrderByRelationAggregateInput;
    deliveryZones?: Prisma.DeliveryZoneOrderByRelationAggregateInput;
};
export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    OR?: Prisma.CountryWhereInput[];
    NOT?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    name?: Prisma.StringFilter<"Country"> | string;
    flag?: Prisma.StringFilter<"Country"> | string;
    isActive?: Prisma.BoolFilter<"Country"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    events?: Prisma.EventListRelationFilter;
    deals?: Prisma.DealListRelationFilter;
    leisureItems?: Prisma.LeisureItemListRelationFilter;
    cities?: Prisma.CityListRelationFilter;
    deliveryZones?: Prisma.DeliveryZoneListRelationFilter;
}, "id" | "code">;
export type CountryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    flag?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CountryCountOrderByAggregateInput;
    _max?: Prisma.CountryMaxOrderByAggregateInput;
    _min?: Prisma.CountryMinOrderByAggregateInput;
};
export type CountryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CountryScalarWhereWithAggregatesInput | Prisma.CountryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CountryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CountryScalarWhereWithAggregatesInput | Prisma.CountryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    flag?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Country"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Country"> | Date | string;
};
export type CountryCreateInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUncheckedUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput;
};
export type CountryCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type CountryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryNullableScalarRelationFilter = {
    is?: Prisma.CountryWhereInput | null;
    isNot?: Prisma.CountryWhereInput | null;
};
export type CountryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    flag?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CountryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    flag?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CountryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    flag?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CountryScalarRelationFilter = {
    is?: Prisma.CountryWhereInput;
    isNot?: Prisma.CountryWhereInput;
};
export type CountryCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutEventsInput, Prisma.CountryUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutEventsInput;
    connect?: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutEventsInput, Prisma.CountryUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.CountryUpsertWithoutEventsInput;
    disconnect?: Prisma.CountryWhereInput | boolean;
    delete?: Prisma.CountryWhereInput | boolean;
    connect?: Prisma.CountryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CountryUpdateToOneWithWhereWithoutEventsInput, Prisma.CountryUpdateWithoutEventsInput>, Prisma.CountryUncheckedUpdateWithoutEventsInput>;
};
export type CountryCreateNestedOneWithoutDeliveryZonesInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutDeliveryZonesInput, Prisma.CountryUncheckedCreateWithoutDeliveryZonesInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutDeliveryZonesInput;
    connect?: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateOneRequiredWithoutDeliveryZonesNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutDeliveryZonesInput, Prisma.CountryUncheckedCreateWithoutDeliveryZonesInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutDeliveryZonesInput;
    upsert?: Prisma.CountryUpsertWithoutDeliveryZonesInput;
    connect?: Prisma.CountryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CountryUpdateToOneWithWhereWithoutDeliveryZonesInput, Prisma.CountryUpdateWithoutDeliveryZonesInput>, Prisma.CountryUncheckedUpdateWithoutDeliveryZonesInput>;
};
export type CountryCreateNestedOneWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutCitiesInput, Prisma.CountryUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutCitiesInput;
    connect?: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutCitiesInput, Prisma.CountryUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutCitiesInput;
    upsert?: Prisma.CountryUpsertWithoutCitiesInput;
    connect?: Prisma.CountryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CountryUpdateToOneWithWhereWithoutCitiesInput, Prisma.CountryUpdateWithoutCitiesInput>, Prisma.CountryUncheckedUpdateWithoutCitiesInput>;
};
export type CountryCreateNestedOneWithoutDealsInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutDealsInput, Prisma.CountryUncheckedCreateWithoutDealsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutDealsInput;
    connect?: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateOneWithoutDealsNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutDealsInput, Prisma.CountryUncheckedCreateWithoutDealsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutDealsInput;
    upsert?: Prisma.CountryUpsertWithoutDealsInput;
    disconnect?: Prisma.CountryWhereInput | boolean;
    delete?: Prisma.CountryWhereInput | boolean;
    connect?: Prisma.CountryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CountryUpdateToOneWithWhereWithoutDealsInput, Prisma.CountryUpdateWithoutDealsInput>, Prisma.CountryUncheckedUpdateWithoutDealsInput>;
};
export type CountryCreateNestedOneWithoutLeisureItemsInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutLeisureItemsInput, Prisma.CountryUncheckedCreateWithoutLeisureItemsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutLeisureItemsInput;
    connect?: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateOneWithoutLeisureItemsNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutLeisureItemsInput, Prisma.CountryUncheckedCreateWithoutLeisureItemsInput>;
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutLeisureItemsInput;
    upsert?: Prisma.CountryUpsertWithoutLeisureItemsInput;
    disconnect?: Prisma.CountryWhereInput | boolean;
    delete?: Prisma.CountryWhereInput | boolean;
    connect?: Prisma.CountryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CountryUpdateToOneWithWhereWithoutLeisureItemsInput, Prisma.CountryUpdateWithoutLeisureItemsInput>, Prisma.CountryUncheckedUpdateWithoutLeisureItemsInput>;
};
export type CountryCreateWithoutEventsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    deals?: Prisma.DealCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateWithoutEventsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryCreateOrConnectWithoutEventsInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutEventsInput, Prisma.CountryUncheckedCreateWithoutEventsInput>;
};
export type CountryUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.CountryUpdateWithoutEventsInput, Prisma.CountryUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutEventsInput, Prisma.CountryUncheckedCreateWithoutEventsInput>;
    where?: Prisma.CountryWhereInput;
};
export type CountryUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.CountryWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutEventsInput, Prisma.CountryUncheckedUpdateWithoutEventsInput>;
};
export type CountryUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deals?: Prisma.DealUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUncheckedUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput;
};
export type CountryCreateWithoutDeliveryZonesInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateWithoutDeliveryZonesInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryCreateOrConnectWithoutDeliveryZonesInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutDeliveryZonesInput, Prisma.CountryUncheckedCreateWithoutDeliveryZonesInput>;
};
export type CountryUpsertWithoutDeliveryZonesInput = {
    update: Prisma.XOR<Prisma.CountryUpdateWithoutDeliveryZonesInput, Prisma.CountryUncheckedUpdateWithoutDeliveryZonesInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutDeliveryZonesInput, Prisma.CountryUncheckedCreateWithoutDeliveryZonesInput>;
    where?: Prisma.CountryWhereInput;
};
export type CountryUpdateToOneWithWhereWithoutDeliveryZonesInput = {
    where?: Prisma.CountryWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutDeliveryZonesInput, Prisma.CountryUncheckedUpdateWithoutDeliveryZonesInput>;
};
export type CountryUpdateWithoutDeliveryZonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateWithoutDeliveryZonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUncheckedUpdateManyWithoutCountryNestedInput;
};
export type CountryCreateWithoutCitiesInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateWithoutCitiesInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryCreateOrConnectWithoutCitiesInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutCitiesInput, Prisma.CountryUncheckedCreateWithoutCitiesInput>;
};
export type CountryUpsertWithoutCitiesInput = {
    update: Prisma.XOR<Prisma.CountryUpdateWithoutCitiesInput, Prisma.CountryUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutCitiesInput, Prisma.CountryUncheckedCreateWithoutCitiesInput>;
    where?: Prisma.CountryWhereInput;
};
export type CountryUpdateToOneWithWhereWithoutCitiesInput = {
    where?: Prisma.CountryWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutCitiesInput, Prisma.CountryUncheckedUpdateWithoutCitiesInput>;
};
export type CountryUpdateWithoutCitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateWithoutCitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput;
};
export type CountryCreateWithoutDealsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateWithoutDealsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCountryInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryCreateOrConnectWithoutDealsInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutDealsInput, Prisma.CountryUncheckedCreateWithoutDealsInput>;
};
export type CountryUpsertWithoutDealsInput = {
    update: Prisma.XOR<Prisma.CountryUpdateWithoutDealsInput, Prisma.CountryUncheckedUpdateWithoutDealsInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutDealsInput, Prisma.CountryUncheckedCreateWithoutDealsInput>;
    where?: Prisma.CountryWhereInput;
};
export type CountryUpdateToOneWithWhereWithoutDealsInput = {
    where?: Prisma.CountryWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutDealsInput, Prisma.CountryUncheckedUpdateWithoutDealsInput>;
};
export type CountryUpdateWithoutDealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateWithoutDealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutCountryNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUncheckedUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput;
};
export type CountryCreateWithoutLeisureItemsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneCreateNestedManyWithoutCountryInput;
};
export type CountryUncheckedCreateWithoutLeisureItemsInput = {
    id?: string;
    code: string;
    name: string;
    flag?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCountryInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCountryInput;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutCountryInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput;
};
export type CountryCreateOrConnectWithoutLeisureItemsInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutLeisureItemsInput, Prisma.CountryUncheckedCreateWithoutLeisureItemsInput>;
};
export type CountryUpsertWithoutLeisureItemsInput = {
    update: Prisma.XOR<Prisma.CountryUpdateWithoutLeisureItemsInput, Prisma.CountryUncheckedUpdateWithoutLeisureItemsInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutLeisureItemsInput, Prisma.CountryUncheckedCreateWithoutLeisureItemsInput>;
    where?: Prisma.CountryWhereInput;
};
export type CountryUpdateToOneWithWhereWithoutLeisureItemsInput = {
    where?: Prisma.CountryWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutLeisureItemsInput, Prisma.CountryUncheckedUpdateWithoutLeisureItemsInput>;
};
export type CountryUpdateWithoutLeisureItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUpdateManyWithoutCountryNestedInput;
};
export type CountryUncheckedUpdateWithoutLeisureItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    flag?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutCountryNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCountryNestedInput;
    cities?: Prisma.CityUncheckedUpdateManyWithoutCountryNestedInput;
    deliveryZones?: Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput;
};
/**
 * Count Type CountryCountOutputType
 */
export type CountryCountOutputType = {
    events: number;
    deals: number;
    leisureItems: number;
    cities: number;
    deliveryZones: number;
};
export type CountryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | CountryCountOutputTypeCountEventsArgs;
    deals?: boolean | CountryCountOutputTypeCountDealsArgs;
    leisureItems?: boolean | CountryCountOutputTypeCountLeisureItemsArgs;
    cities?: boolean | CountryCountOutputTypeCountCitiesArgs;
    deliveryZones?: boolean | CountryCountOutputTypeCountDeliveryZonesArgs;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: Prisma.CountryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeCountDealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DealWhereInput;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeCountLeisureItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureItemWhereInput;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeCountCitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
};
/**
 * CountryCountOutputType without action
 */
export type CountryCountOutputTypeCountDeliveryZonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryZoneWhereInput;
};
export type CountrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    flag?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    events?: boolean | Prisma.Country$eventsArgs<ExtArgs>;
    deals?: boolean | Prisma.Country$dealsArgs<ExtArgs>;
    leisureItems?: boolean | Prisma.Country$leisureItemsArgs<ExtArgs>;
    cities?: boolean | Prisma.Country$citiesArgs<ExtArgs>;
    deliveryZones?: boolean | Prisma.Country$deliveryZonesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["country"]>;
export type CountrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    flag?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["country"]>;
export type CountrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    flag?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["country"]>;
export type CountrySelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    flag?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type CountryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "flag" | "isActive" | "createdAt", ExtArgs["result"]["country"]>;
export type CountryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.Country$eventsArgs<ExtArgs>;
    deals?: boolean | Prisma.Country$dealsArgs<ExtArgs>;
    leisureItems?: boolean | Prisma.Country$leisureItemsArgs<ExtArgs>;
    cities?: boolean | Prisma.Country$citiesArgs<ExtArgs>;
    deliveryZones?: boolean | Prisma.Country$deliveryZonesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CountryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CountryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CountryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Country";
    objects: {
        events: Prisma.$EventPayload<ExtArgs>[];
        deals: Prisma.$DealPayload<ExtArgs>[];
        leisureItems: Prisma.$LeisureItemPayload<ExtArgs>[];
        cities: Prisma.$CityPayload<ExtArgs>[];
        deliveryZones: Prisma.$DeliveryZonePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        flag: string;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["country"]>;
    composites: {};
};
export type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CountryPayload, S>;
export type CountryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountryCountAggregateInputType | true;
};
export interface CountryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Country'];
        meta: {
            name: 'Country';
        };
    };
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: Prisma.SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: Prisma.SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     *
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CountryFindManyArgs>(args?: Prisma.SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     *
     */
    create<T extends CountryCreateArgs>(args: Prisma.SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CountryCreateManyArgs>(args?: Prisma.SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     *
     */
    delete<T extends CountryDeleteArgs>(args: Prisma.SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CountryUpdateArgs>(args: Prisma.SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CountryUpdateManyArgs>(args: Prisma.SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: Prisma.SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(args?: Prisma.Subset<T, CountryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Prisma.Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>;
    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CountryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CountryGroupByArgs['orderBy'];
    } : {
        orderBy?: CountryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Country model
     */
    readonly fields: CountryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Country.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CountryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.Country$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deals<T extends Prisma.Country$dealsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    leisureItems<T extends Prisma.Country$leisureItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$leisureItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cities<T extends Prisma.Country$citiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deliveryZones<T extends Prisma.Country$deliveryZonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$deliveryZonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Country model
 */
export interface CountryFieldRefs {
    readonly id: Prisma.FieldRef<"Country", 'String'>;
    readonly code: Prisma.FieldRef<"Country", 'String'>;
    readonly name: Prisma.FieldRef<"Country", 'String'>;
    readonly flag: Prisma.FieldRef<"Country", 'String'>;
    readonly isActive: Prisma.FieldRef<"Country", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Country", 'DateTime'>;
}
/**
 * Country findUnique
 */
export type CountryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter, which Country to fetch.
     */
    where: Prisma.CountryWhereUniqueInput;
};
/**
 * Country findUniqueOrThrow
 */
export type CountryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter, which Country to fetch.
     */
    where: Prisma.CountryWhereUniqueInput;
};
/**
 * Country findFirst
 */
export type CountryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter, which Country to fetch.
     */
    where?: Prisma.CountryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Countries to fetch.
     */
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Countries.
     */
    cursor?: Prisma.CountryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Countries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Countries.
     */
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
/**
 * Country findFirstOrThrow
 */
export type CountryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter, which Country to fetch.
     */
    where?: Prisma.CountryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Countries to fetch.
     */
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Countries.
     */
    cursor?: Prisma.CountryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Countries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Countries.
     */
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
/**
 * Country findMany
 */
export type CountryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter, which Countries to fetch.
     */
    where?: Prisma.CountryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Countries to fetch.
     */
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Countries.
     */
    cursor?: Prisma.CountryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Countries.
     */
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
/**
 * Country create
 */
export type CountryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Country.
     */
    data: Prisma.XOR<Prisma.CountryCreateInput, Prisma.CountryUncheckedCreateInput>;
};
/**
 * Country createMany
 */
export type CountryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: Prisma.CountryCreateManyInput | Prisma.CountryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Country createManyAndReturn
 */
export type CountryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * The data used to create many Countries.
     */
    data: Prisma.CountryCreateManyInput | Prisma.CountryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Country update
 */
export type CountryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Country.
     */
    data: Prisma.XOR<Prisma.CountryUpdateInput, Prisma.CountryUncheckedUpdateInput>;
    /**
     * Choose, which Country to update.
     */
    where: Prisma.CountryWhereUniqueInput;
};
/**
 * Country updateMany
 */
export type CountryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: Prisma.XOR<Prisma.CountryUpdateManyMutationInput, Prisma.CountryUncheckedUpdateManyInput>;
    /**
     * Filter which Countries to update
     */
    where?: Prisma.CountryWhereInput;
    /**
     * Limit how many Countries to update.
     */
    limit?: number;
};
/**
 * Country updateManyAndReturn
 */
export type CountryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * The data used to update Countries.
     */
    data: Prisma.XOR<Prisma.CountryUpdateManyMutationInput, Prisma.CountryUncheckedUpdateManyInput>;
    /**
     * Filter which Countries to update
     */
    where?: Prisma.CountryWhereInput;
    /**
     * Limit how many Countries to update.
     */
    limit?: number;
};
/**
 * Country upsert
 */
export type CountryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: Prisma.CountryWhereUniqueInput;
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: Prisma.XOR<Prisma.CountryCreateInput, Prisma.CountryUncheckedCreateInput>;
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CountryUpdateInput, Prisma.CountryUncheckedUpdateInput>;
};
/**
 * Country delete
 */
export type CountryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    /**
     * Filter which Country to delete.
     */
    where: Prisma.CountryWhereUniqueInput;
};
/**
 * Country deleteMany
 */
export type CountryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: Prisma.CountryWhereInput;
    /**
     * Limit how many Countries to delete.
     */
    limit?: number;
};
/**
 * Country.events
 */
export type Country$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * Country.deals
 */
export type Country$dealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: Prisma.DealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deal
     */
    omit?: Prisma.DealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DealInclude<ExtArgs> | null;
    where?: Prisma.DealWhereInput;
    orderBy?: Prisma.DealOrderByWithRelationInput | Prisma.DealOrderByWithRelationInput[];
    cursor?: Prisma.DealWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DealScalarFieldEnum | Prisma.DealScalarFieldEnum[];
};
/**
 * Country.leisureItems
 */
export type Country$leisureItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureItem
     */
    select?: Prisma.LeisureItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureItem
     */
    omit?: Prisma.LeisureItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureItemInclude<ExtArgs> | null;
    where?: Prisma.LeisureItemWhereInput;
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeisureItemScalarFieldEnum | Prisma.LeisureItemScalarFieldEnum[];
};
/**
 * Country.cities
 */
export type Country$citiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: Prisma.CitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the City
     */
    omit?: Prisma.CityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
/**
 * Country.deliveryZones
 */
export type Country$deliveryZonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: Prisma.DeliveryZoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: Prisma.DeliveryZoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeliveryZoneInclude<ExtArgs> | null;
    where?: Prisma.DeliveryZoneWhereInput;
    orderBy?: Prisma.DeliveryZoneOrderByWithRelationInput | Prisma.DeliveryZoneOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryZoneScalarFieldEnum | Prisma.DeliveryZoneScalarFieldEnum[];
};
/**
 * Country without action
 */
export type CountryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Country.d.ts.map