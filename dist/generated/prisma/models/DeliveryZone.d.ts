import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeliveryZone
 *
 */
export type DeliveryZoneModel = runtime.Types.Result.DefaultSelection<Prisma.$DeliveryZonePayload>;
export type AggregateDeliveryZone = {
    _count: DeliveryZoneCountAggregateOutputType | null;
    _avg: DeliveryZoneAvgAggregateOutputType | null;
    _sum: DeliveryZoneSumAggregateOutputType | null;
    _min: DeliveryZoneMinAggregateOutputType | null;
    _max: DeliveryZoneMaxAggregateOutputType | null;
};
export type DeliveryZoneAvgAggregateOutputType = {
    fee: number | null;
};
export type DeliveryZoneSumAggregateOutputType = {
    fee: number | null;
};
export type DeliveryZoneMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    countryCode: string | null;
    fee: number | null;
    currency: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeliveryZoneMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    countryCode: string | null;
    fee: number | null;
    currency: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeliveryZoneCountAggregateOutputType = {
    id: number;
    name: number;
    countryCode: number;
    fee: number;
    currency: number;
    description: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DeliveryZoneAvgAggregateInputType = {
    fee?: true;
};
export type DeliveryZoneSumAggregateInputType = {
    fee?: true;
};
export type DeliveryZoneMinAggregateInputType = {
    id?: true;
    name?: true;
    countryCode?: true;
    fee?: true;
    currency?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeliveryZoneMaxAggregateInputType = {
    id?: true;
    name?: true;
    countryCode?: true;
    fee?: true;
    currency?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeliveryZoneCountAggregateInputType = {
    id?: true;
    name?: true;
    countryCode?: true;
    fee?: true;
    currency?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeliveryZoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZone to aggregate.
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: Prisma.DeliveryZoneOrderByWithRelationInput | Prisma.DeliveryZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeliveryZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeliveryZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeliveryZones
    **/
    _count?: true | DeliveryZoneCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DeliveryZoneAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DeliveryZoneSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryZoneMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryZoneMaxAggregateInputType;
};
export type GetDeliveryZoneAggregateType<T extends DeliveryZoneAggregateArgs> = {
    [P in keyof T & keyof AggregateDeliveryZone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeliveryZone[P]> : Prisma.GetScalarType<T[P], AggregateDeliveryZone[P]>;
};
export type DeliveryZoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryZoneWhereInput;
    orderBy?: Prisma.DeliveryZoneOrderByWithAggregationInput | Prisma.DeliveryZoneOrderByWithAggregationInput[];
    by: Prisma.DeliveryZoneScalarFieldEnum[] | Prisma.DeliveryZoneScalarFieldEnum;
    having?: Prisma.DeliveryZoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeliveryZoneCountAggregateInputType | true;
    _avg?: DeliveryZoneAvgAggregateInputType;
    _sum?: DeliveryZoneSumAggregateInputType;
    _min?: DeliveryZoneMinAggregateInputType;
    _max?: DeliveryZoneMaxAggregateInputType;
};
export type DeliveryZoneGroupByOutputType = {
    id: string;
    name: string;
    countryCode: string;
    fee: number;
    currency: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: DeliveryZoneCountAggregateOutputType | null;
    _avg: DeliveryZoneAvgAggregateOutputType | null;
    _sum: DeliveryZoneSumAggregateOutputType | null;
    _min: DeliveryZoneMinAggregateOutputType | null;
    _max: DeliveryZoneMaxAggregateOutputType | null;
};
type GetDeliveryZoneGroupByPayload<T extends DeliveryZoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeliveryZoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeliveryZoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]>;
}>>;
export type DeliveryZoneWhereInput = {
    AND?: Prisma.DeliveryZoneWhereInput | Prisma.DeliveryZoneWhereInput[];
    OR?: Prisma.DeliveryZoneWhereInput[];
    NOT?: Prisma.DeliveryZoneWhereInput | Prisma.DeliveryZoneWhereInput[];
    id?: Prisma.StringFilter<"DeliveryZone"> | string;
    name?: Prisma.StringFilter<"DeliveryZone"> | string;
    countryCode?: Prisma.StringFilter<"DeliveryZone"> | string;
    fee?: Prisma.FloatFilter<"DeliveryZone"> | number;
    currency?: Prisma.StringFilter<"DeliveryZone"> | string;
    description?: Prisma.StringNullableFilter<"DeliveryZone"> | string | null;
    isActive?: Prisma.BoolFilter<"DeliveryZone"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.CountryWhereInput>;
    cities?: Prisma.CityListRelationFilter;
    deliveryAddresses?: Prisma.DeliveryAddressListRelationFilter;
};
export type DeliveryZoneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.CountryOrderByWithRelationInput;
    cities?: Prisma.CityOrderByRelationAggregateInput;
    deliveryAddresses?: Prisma.DeliveryAddressOrderByRelationAggregateInput;
};
export type DeliveryZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_countryCode?: Prisma.DeliveryZoneNameCountryCodeCompoundUniqueInput;
    AND?: Prisma.DeliveryZoneWhereInput | Prisma.DeliveryZoneWhereInput[];
    OR?: Prisma.DeliveryZoneWhereInput[];
    NOT?: Prisma.DeliveryZoneWhereInput | Prisma.DeliveryZoneWhereInput[];
    name?: Prisma.StringFilter<"DeliveryZone"> | string;
    countryCode?: Prisma.StringFilter<"DeliveryZone"> | string;
    fee?: Prisma.FloatFilter<"DeliveryZone"> | number;
    currency?: Prisma.StringFilter<"DeliveryZone"> | string;
    description?: Prisma.StringNullableFilter<"DeliveryZone"> | string | null;
    isActive?: Prisma.BoolFilter<"DeliveryZone"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.CountryWhereInput>;
    cities?: Prisma.CityListRelationFilter;
    deliveryAddresses?: Prisma.DeliveryAddressListRelationFilter;
}, "id" | "name_countryCode">;
export type DeliveryZoneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeliveryZoneCountOrderByAggregateInput;
    _avg?: Prisma.DeliveryZoneAvgOrderByAggregateInput;
    _max?: Prisma.DeliveryZoneMaxOrderByAggregateInput;
    _min?: Prisma.DeliveryZoneMinOrderByAggregateInput;
    _sum?: Prisma.DeliveryZoneSumOrderByAggregateInput;
};
export type DeliveryZoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeliveryZoneScalarWhereWithAggregatesInput | Prisma.DeliveryZoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeliveryZoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeliveryZoneScalarWhereWithAggregatesInput | Prisma.DeliveryZoneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeliveryZone"> | string;
    name?: Prisma.StringWithAggregatesFilter<"DeliveryZone"> | string;
    countryCode?: Prisma.StringWithAggregatesFilter<"DeliveryZone"> | string;
    fee?: Prisma.FloatWithAggregatesFilter<"DeliveryZone"> | number;
    currency?: Prisma.StringWithAggregatesFilter<"DeliveryZone"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"DeliveryZone"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"DeliveryZone"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeliveryZone"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DeliveryZone"> | Date | string;
};
export type DeliveryZoneCreateInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    country: Prisma.CountryCreateNestedOneWithoutDeliveryZonesInput;
    cities?: Prisma.CityCreateNestedManyWithoutZoneInput;
    deliveryAddresses?: Prisma.DeliveryAddressCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneUncheckedCreateInput = {
    id?: string;
    name: string;
    countryCode: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutZoneInput;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.CountryUpdateOneRequiredWithoutDeliveryZonesNestedInput;
    cities?: Prisma.CityUpdateManyWithoutZoneNestedInput;
    deliveryAddresses?: Prisma.DeliveryAddressUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUncheckedUpdateManyWithoutZoneNestedInput;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneCreateManyInput = {
    id?: string;
    name: string;
    countryCode: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeliveryZoneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryZoneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveryZoneListRelationFilter = {
    every?: Prisma.DeliveryZoneWhereInput;
    some?: Prisma.DeliveryZoneWhereInput;
    none?: Prisma.DeliveryZoneWhereInput;
};
export type DeliveryZoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeliveryZoneNameCountryCodeCompoundUniqueInput = {
    name: string;
    countryCode: string;
};
export type DeliveryZoneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeliveryZoneAvgOrderByAggregateInput = {
    fee?: Prisma.SortOrder;
};
export type DeliveryZoneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeliveryZoneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeliveryZoneSumOrderByAggregateInput = {
    fee?: Prisma.SortOrder;
};
export type DeliveryZoneScalarRelationFilter = {
    is?: Prisma.DeliveryZoneWhereInput;
    isNot?: Prisma.DeliveryZoneWhereInput;
};
export type DeliveryZoneCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput> | Prisma.DeliveryZoneCreateWithoutCountryInput[] | Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput | Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.DeliveryZoneCreateManyCountryInputEnvelope;
    connect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
};
export type DeliveryZoneUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput> | Prisma.DeliveryZoneCreateWithoutCountryInput[] | Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput | Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.DeliveryZoneCreateManyCountryInputEnvelope;
    connect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
};
export type DeliveryZoneUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput> | Prisma.DeliveryZoneCreateWithoutCountryInput[] | Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput | Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.DeliveryZoneUpsertWithWhereUniqueWithoutCountryInput | Prisma.DeliveryZoneUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.DeliveryZoneCreateManyCountryInputEnvelope;
    set?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    disconnect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    delete?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    connect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    update?: Prisma.DeliveryZoneUpdateWithWhereUniqueWithoutCountryInput | Prisma.DeliveryZoneUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.DeliveryZoneUpdateManyWithWhereWithoutCountryInput | Prisma.DeliveryZoneUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.DeliveryZoneScalarWhereInput | Prisma.DeliveryZoneScalarWhereInput[];
};
export type DeliveryZoneUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput> | Prisma.DeliveryZoneCreateWithoutCountryInput[] | Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput | Prisma.DeliveryZoneCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.DeliveryZoneUpsertWithWhereUniqueWithoutCountryInput | Prisma.DeliveryZoneUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.DeliveryZoneCreateManyCountryInputEnvelope;
    set?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    disconnect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    delete?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    connect?: Prisma.DeliveryZoneWhereUniqueInput | Prisma.DeliveryZoneWhereUniqueInput[];
    update?: Prisma.DeliveryZoneUpdateWithWhereUniqueWithoutCountryInput | Prisma.DeliveryZoneUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.DeliveryZoneUpdateManyWithWhereWithoutCountryInput | Prisma.DeliveryZoneUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.DeliveryZoneScalarWhereInput | Prisma.DeliveryZoneScalarWhereInput[];
};
export type DeliveryZoneCreateNestedOneWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCitiesInput;
    connect?: Prisma.DeliveryZoneWhereUniqueInput;
};
export type DeliveryZoneUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutCitiesInput;
    upsert?: Prisma.DeliveryZoneUpsertWithoutCitiesInput;
    connect?: Prisma.DeliveryZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeliveryZoneUpdateToOneWithWhereWithoutCitiesInput, Prisma.DeliveryZoneUpdateWithoutCitiesInput>, Prisma.DeliveryZoneUncheckedUpdateWithoutCitiesInput>;
};
export type DeliveryZoneCreateNestedOneWithoutDeliveryAddressesInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedCreateWithoutDeliveryAddressesInput>;
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutDeliveryAddressesInput;
    connect?: Prisma.DeliveryZoneWhereUniqueInput;
};
export type DeliveryZoneUpdateOneRequiredWithoutDeliveryAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedCreateWithoutDeliveryAddressesInput>;
    connectOrCreate?: Prisma.DeliveryZoneCreateOrConnectWithoutDeliveryAddressesInput;
    upsert?: Prisma.DeliveryZoneUpsertWithoutDeliveryAddressesInput;
    connect?: Prisma.DeliveryZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeliveryZoneUpdateToOneWithWhereWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUpdateWithoutDeliveryAddressesInput>, Prisma.DeliveryZoneUncheckedUpdateWithoutDeliveryAddressesInput>;
};
export type DeliveryZoneCreateWithoutCountryInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityCreateNestedManyWithoutZoneInput;
    deliveryAddresses?: Prisma.DeliveryAddressCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneUncheckedCreateWithoutCountryInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutZoneInput;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneCreateOrConnectWithoutCountryInput = {
    where: Prisma.DeliveryZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput>;
};
export type DeliveryZoneCreateManyCountryInputEnvelope = {
    data: Prisma.DeliveryZoneCreateManyCountryInput | Prisma.DeliveryZoneCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type DeliveryZoneUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.DeliveryZoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutCountryInput, Prisma.DeliveryZoneUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCountryInput, Prisma.DeliveryZoneUncheckedCreateWithoutCountryInput>;
};
export type DeliveryZoneUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.DeliveryZoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutCountryInput, Prisma.DeliveryZoneUncheckedUpdateWithoutCountryInput>;
};
export type DeliveryZoneUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.DeliveryZoneScalarWhereInput;
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateManyMutationInput, Prisma.DeliveryZoneUncheckedUpdateManyWithoutCountryInput>;
};
export type DeliveryZoneScalarWhereInput = {
    AND?: Prisma.DeliveryZoneScalarWhereInput | Prisma.DeliveryZoneScalarWhereInput[];
    OR?: Prisma.DeliveryZoneScalarWhereInput[];
    NOT?: Prisma.DeliveryZoneScalarWhereInput | Prisma.DeliveryZoneScalarWhereInput[];
    id?: Prisma.StringFilter<"DeliveryZone"> | string;
    name?: Prisma.StringFilter<"DeliveryZone"> | string;
    countryCode?: Prisma.StringFilter<"DeliveryZone"> | string;
    fee?: Prisma.FloatFilter<"DeliveryZone"> | number;
    currency?: Prisma.StringFilter<"DeliveryZone"> | string;
    description?: Prisma.StringNullableFilter<"DeliveryZone"> | string | null;
    isActive?: Prisma.BoolFilter<"DeliveryZone"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeliveryZone"> | Date | string;
};
export type DeliveryZoneCreateWithoutCitiesInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    country: Prisma.CountryCreateNestedOneWithoutDeliveryZonesInput;
    deliveryAddresses?: Prisma.DeliveryAddressCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneUncheckedCreateWithoutCitiesInput = {
    id?: string;
    name: string;
    countryCode: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneCreateOrConnectWithoutCitiesInput = {
    where: Prisma.DeliveryZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedCreateWithoutCitiesInput>;
};
export type DeliveryZoneUpsertWithoutCitiesInput = {
    update: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedCreateWithoutCitiesInput>;
    where?: Prisma.DeliveryZoneWhereInput;
};
export type DeliveryZoneUpdateToOneWithWhereWithoutCitiesInput = {
    where?: Prisma.DeliveryZoneWhereInput;
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutCitiesInput, Prisma.DeliveryZoneUncheckedUpdateWithoutCitiesInput>;
};
export type DeliveryZoneUpdateWithoutCitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.CountryUpdateOneRequiredWithoutDeliveryZonesNestedInput;
    deliveryAddresses?: Prisma.DeliveryAddressUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneUncheckedUpdateWithoutCitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneCreateWithoutDeliveryAddressesInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    country: Prisma.CountryCreateNestedOneWithoutDeliveryZonesInput;
    cities?: Prisma.CityCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneUncheckedCreateWithoutDeliveryAddressesInput = {
    id?: string;
    name: string;
    countryCode: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutZoneInput;
};
export type DeliveryZoneCreateOrConnectWithoutDeliveryAddressesInput = {
    where: Prisma.DeliveryZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedCreateWithoutDeliveryAddressesInput>;
};
export type DeliveryZoneUpsertWithoutDeliveryAddressesInput = {
    update: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedUpdateWithoutDeliveryAddressesInput>;
    create: Prisma.XOR<Prisma.DeliveryZoneCreateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedCreateWithoutDeliveryAddressesInput>;
    where?: Prisma.DeliveryZoneWhereInput;
};
export type DeliveryZoneUpdateToOneWithWhereWithoutDeliveryAddressesInput = {
    where?: Prisma.DeliveryZoneWhereInput;
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateWithoutDeliveryAddressesInput, Prisma.DeliveryZoneUncheckedUpdateWithoutDeliveryAddressesInput>;
};
export type DeliveryZoneUpdateWithoutDeliveryAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.CountryUpdateOneRequiredWithoutDeliveryZonesNestedInput;
    cities?: Prisma.CityUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneUncheckedUpdateWithoutDeliveryAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUncheckedUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneCreateManyCountryInput = {
    id?: string;
    name: string;
    fee: number;
    currency?: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeliveryZoneUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUpdateManyWithoutZoneNestedInput;
    deliveryAddresses?: Prisma.DeliveryAddressUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneUncheckedUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUncheckedUpdateManyWithoutZoneNestedInput;
    deliveryAddresses?: Prisma.DeliveryAddressUncheckedUpdateManyWithoutZoneNestedInput;
};
export type DeliveryZoneUncheckedUpdateManyWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fee?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type DeliveryZoneCountOutputType
 */
export type DeliveryZoneCountOutputType = {
    cities: number;
    deliveryAddresses: number;
};
export type DeliveryZoneCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | DeliveryZoneCountOutputTypeCountCitiesArgs;
    deliveryAddresses?: boolean | DeliveryZoneCountOutputTypeCountDeliveryAddressesArgs;
};
/**
 * DeliveryZoneCountOutputType without action
 */
export type DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZoneCountOutputType
     */
    select?: Prisma.DeliveryZoneCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DeliveryZoneCountOutputType without action
 */
export type DeliveryZoneCountOutputTypeCountCitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
};
/**
 * DeliveryZoneCountOutputType without action
 */
export type DeliveryZoneCountOutputTypeCountDeliveryAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryAddressWhereInput;
};
export type DeliveryZoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    countryCode?: boolean;
    fee?: boolean;
    currency?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
    cities?: boolean | Prisma.DeliveryZone$citiesArgs<ExtArgs>;
    deliveryAddresses?: boolean | Prisma.DeliveryZone$deliveryAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deliveryZone"]>;
export type DeliveryZoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    countryCode?: boolean;
    fee?: boolean;
    currency?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deliveryZone"]>;
export type DeliveryZoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    countryCode?: boolean;
    fee?: boolean;
    currency?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deliveryZone"]>;
export type DeliveryZoneSelectScalar = {
    id?: boolean;
    name?: boolean;
    countryCode?: boolean;
    fee?: boolean;
    currency?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DeliveryZoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "countryCode" | "fee" | "currency" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveryZone"]>;
export type DeliveryZoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
    cities?: boolean | Prisma.DeliveryZone$citiesArgs<ExtArgs>;
    deliveryAddresses?: boolean | Prisma.DeliveryZone$deliveryAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DeliveryZoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
};
export type DeliveryZoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
};
export type $DeliveryZonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeliveryZone";
    objects: {
        country: Prisma.$CountryPayload<ExtArgs>;
        cities: Prisma.$CityPayload<ExtArgs>[];
        deliveryAddresses: Prisma.$DeliveryAddressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        countryCode: string;
        fee: number;
        currency: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["deliveryZone"]>;
    composites: {};
};
export type DeliveryZoneGetPayload<S extends boolean | null | undefined | DeliveryZoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload, S>;
export type DeliveryZoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeliveryZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeliveryZoneCountAggregateInputType | true;
};
export interface DeliveryZoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeliveryZone'];
        meta: {
            name: 'DeliveryZone';
        };
    };
    /**
     * Find zero or one DeliveryZone that matches the filter.
     * @param {DeliveryZoneFindUniqueArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryZoneFindUniqueArgs>(args: Prisma.SelectSubset<T, DeliveryZoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeliveryZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryZoneFindUniqueOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryZoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeliveryZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryZoneFindFirstArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeliveryZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryZoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeliveryZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany()
     *
     * // Get first 10 DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeliveryZoneFindManyArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeliveryZone.
     * @param {DeliveryZoneCreateArgs} args - Arguments to create a DeliveryZone.
     * @example
     * // Create one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.create({
     *   data: {
     *     // ... data to create a DeliveryZone
     *   }
     * })
     *
     */
    create<T extends DeliveryZoneCreateArgs>(args: Prisma.SelectSubset<T, DeliveryZoneCreateArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeliveryZones.
     * @param {DeliveryZoneCreateManyArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeliveryZoneCreateManyArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeliveryZones and returns the data saved in the database.
     * @param {DeliveryZoneCreateManyAndReturnArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeliveryZoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeliveryZone.
     * @param {DeliveryZoneDeleteArgs} args - Arguments to delete one DeliveryZone.
     * @example
     * // Delete one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.delete({
     *   where: {
     *     // ... filter to delete one DeliveryZone
     *   }
     * })
     *
     */
    delete<T extends DeliveryZoneDeleteArgs>(args: Prisma.SelectSubset<T, DeliveryZoneDeleteArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeliveryZone.
     * @param {DeliveryZoneUpdateArgs} args - Arguments to update one DeliveryZone.
     * @example
     * // Update one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeliveryZoneUpdateArgs>(args: Prisma.SelectSubset<T, DeliveryZoneUpdateArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeliveryZones.
     * @param {DeliveryZoneDeleteManyArgs} args - Arguments to filter DeliveryZones to delete.
     * @example
     * // Delete a few DeliveryZones
     * const { count } = await prisma.deliveryZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeliveryZoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeliveryZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeliveryZoneUpdateManyArgs>(args: Prisma.SelectSubset<T, DeliveryZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeliveryZones and returns the data updated in the database.
     * @param {DeliveryZoneUpdateManyAndReturnArgs} args - Arguments to update many DeliveryZones.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeliveryZoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeliveryZone.
     * @param {DeliveryZoneUpsertArgs} args - Arguments to update or create a DeliveryZone.
     * @example
     * // Update or create a DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.upsert({
     *   create: {
     *     // ... data to create a DeliveryZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryZone we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryZoneUpsertArgs>(args: Prisma.SelectSubset<T, DeliveryZoneUpsertArgs<ExtArgs>>): Prisma.Prisma__DeliveryZoneClient<runtime.Types.Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneCountArgs} args - Arguments to filter DeliveryZones to count.
     * @example
     * // Count the number of DeliveryZones
     * const count = await prisma.deliveryZone.count({
     *   where: {
     *     // ... the filter for the DeliveryZones we want to count
     *   }
     * })
    **/
    count<T extends DeliveryZoneCountArgs>(args?: Prisma.Subset<T, DeliveryZoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeliveryZoneCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryZoneAggregateArgs>(args: Prisma.Subset<T, DeliveryZoneAggregateArgs>): Prisma.PrismaPromise<GetDeliveryZoneAggregateType<T>>;
    /**
     * Group by DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeliveryZoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeliveryZoneGroupByArgs['orderBy'];
    } : {
        orderBy?: DeliveryZoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeliveryZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeliveryZone model
     */
    readonly fields: DeliveryZoneFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeliveryZone.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeliveryZoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    country<T extends Prisma.CountryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CountryDefaultArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cities<T extends Prisma.DeliveryZone$citiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DeliveryZone$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deliveryAddresses<T extends Prisma.DeliveryZone$deliveryAddressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DeliveryZone$deliveryAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the DeliveryZone model
 */
export interface DeliveryZoneFieldRefs {
    readonly id: Prisma.FieldRef<"DeliveryZone", 'String'>;
    readonly name: Prisma.FieldRef<"DeliveryZone", 'String'>;
    readonly countryCode: Prisma.FieldRef<"DeliveryZone", 'String'>;
    readonly fee: Prisma.FieldRef<"DeliveryZone", 'Float'>;
    readonly currency: Prisma.FieldRef<"DeliveryZone", 'String'>;
    readonly description: Prisma.FieldRef<"DeliveryZone", 'String'>;
    readonly isActive: Prisma.FieldRef<"DeliveryZone", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"DeliveryZone", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DeliveryZone", 'DateTime'>;
}
/**
 * DeliveryZone findUnique
 */
export type DeliveryZoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: Prisma.DeliveryZoneWhereUniqueInput;
};
/**
 * DeliveryZone findUniqueOrThrow
 */
export type DeliveryZoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: Prisma.DeliveryZoneWhereUniqueInput;
};
/**
 * DeliveryZone findFirst
 */
export type DeliveryZoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: Prisma.DeliveryZoneOrderByWithRelationInput | Prisma.DeliveryZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: Prisma.DeliveryZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeliveryZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: Prisma.DeliveryZoneScalarFieldEnum | Prisma.DeliveryZoneScalarFieldEnum[];
};
/**
 * DeliveryZone findFirstOrThrow
 */
export type DeliveryZoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: Prisma.DeliveryZoneOrderByWithRelationInput | Prisma.DeliveryZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: Prisma.DeliveryZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeliveryZones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: Prisma.DeliveryZoneScalarFieldEnum | Prisma.DeliveryZoneScalarFieldEnum[];
};
/**
 * DeliveryZone findMany
 */
export type DeliveryZoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DeliveryZones to fetch.
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: Prisma.DeliveryZoneOrderByWithRelationInput | Prisma.DeliveryZoneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeliveryZones.
     */
    cursor?: Prisma.DeliveryZoneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeliveryZones.
     */
    skip?: number;
    distinct?: Prisma.DeliveryZoneScalarFieldEnum | Prisma.DeliveryZoneScalarFieldEnum[];
};
/**
 * DeliveryZone create
 */
export type DeliveryZoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a DeliveryZone.
     */
    data: Prisma.XOR<Prisma.DeliveryZoneCreateInput, Prisma.DeliveryZoneUncheckedCreateInput>;
};
/**
 * DeliveryZone createMany
 */
export type DeliveryZoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryZones.
     */
    data: Prisma.DeliveryZoneCreateManyInput | Prisma.DeliveryZoneCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeliveryZone createManyAndReturn
 */
export type DeliveryZoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: Prisma.DeliveryZoneSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: Prisma.DeliveryZoneOmit<ExtArgs> | null;
    /**
     * The data used to create many DeliveryZones.
     */
    data: Prisma.DeliveryZoneCreateManyInput | Prisma.DeliveryZoneCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeliveryZoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DeliveryZone update
 */
export type DeliveryZoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a DeliveryZone.
     */
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateInput, Prisma.DeliveryZoneUncheckedUpdateInput>;
    /**
     * Choose, which DeliveryZone to update.
     */
    where: Prisma.DeliveryZoneWhereUniqueInput;
};
/**
 * DeliveryZone updateMany
 */
export type DeliveryZoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryZones.
     */
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateManyMutationInput, Prisma.DeliveryZoneUncheckedUpdateManyInput>;
    /**
     * Filter which DeliveryZones to update
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number;
};
/**
 * DeliveryZone updateManyAndReturn
 */
export type DeliveryZoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: Prisma.DeliveryZoneSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: Prisma.DeliveryZoneOmit<ExtArgs> | null;
    /**
     * The data used to update DeliveryZones.
     */
    data: Prisma.XOR<Prisma.DeliveryZoneUpdateManyMutationInput, Prisma.DeliveryZoneUncheckedUpdateManyInput>;
    /**
     * Filter which DeliveryZones to update
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeliveryZoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DeliveryZone upsert
 */
export type DeliveryZoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the DeliveryZone to update in case it exists.
     */
    where: Prisma.DeliveryZoneWhereUniqueInput;
    /**
     * In case the DeliveryZone found by the `where` argument doesn't exist, create a new DeliveryZone with this data.
     */
    create: Prisma.XOR<Prisma.DeliveryZoneCreateInput, Prisma.DeliveryZoneUncheckedCreateInput>;
    /**
     * In case the DeliveryZone was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeliveryZoneUpdateInput, Prisma.DeliveryZoneUncheckedUpdateInput>;
};
/**
 * DeliveryZone delete
 */
export type DeliveryZoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which DeliveryZone to delete.
     */
    where: Prisma.DeliveryZoneWhereUniqueInput;
};
/**
 * DeliveryZone deleteMany
 */
export type DeliveryZoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZones to delete
     */
    where?: Prisma.DeliveryZoneWhereInput;
    /**
     * Limit how many DeliveryZones to delete.
     */
    limit?: number;
};
/**
 * DeliveryZone.cities
 */
export type DeliveryZone$citiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * DeliveryZone.deliveryAddresses
 */
export type DeliveryZone$deliveryAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: Prisma.DeliveryAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeliveryAddress
     */
    omit?: Prisma.DeliveryAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeliveryAddressInclude<ExtArgs> | null;
    where?: Prisma.DeliveryAddressWhereInput;
    orderBy?: Prisma.DeliveryAddressOrderByWithRelationInput | Prisma.DeliveryAddressOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryAddressScalarFieldEnum | Prisma.DeliveryAddressScalarFieldEnum[];
};
/**
 * DeliveryZone without action
 */
export type DeliveryZoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=DeliveryZone.d.ts.map