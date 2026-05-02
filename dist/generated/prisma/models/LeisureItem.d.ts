import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LeisureItem
 *
 */
export type LeisureItemModel = runtime.Types.Result.DefaultSelection<Prisma.$LeisureItemPayload>;
export type AggregateLeisureItem = {
    _count: LeisureItemCountAggregateOutputType | null;
    _avg: LeisureItemAvgAggregateOutputType | null;
    _sum: LeisureItemSumAggregateOutputType | null;
    _min: LeisureItemMinAggregateOutputType | null;
    _max: LeisureItemMaxAggregateOutputType | null;
};
export type LeisureItemAvgAggregateOutputType = {
    rating: number | null;
    reviewCount: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type LeisureItemSumAggregateOutputType = {
    rating: number | null;
    reviewCount: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type LeisureItemMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    categorySlug: string | null;
    location: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    priceRange: string | null;
    openingHours: string | null;
    image: string | null;
    rating: number | null;
    reviewCount: number | null;
    features: string | null;
    tags: string | null;
    status: string | null;
    latitude: number | null;
    longitude: number | null;
    countryCode: string | null;
    isFeatured: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leisureOfferType: string | null;
    leisurePackType: string | null;
    leisurePackStatus: string | null;
    leisurePackStartDate: Date | null;
    leisurePackEndDate: Date | null;
};
export type LeisureItemMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    categorySlug: string | null;
    location: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    priceRange: string | null;
    openingHours: string | null;
    image: string | null;
    rating: number | null;
    reviewCount: number | null;
    features: string | null;
    tags: string | null;
    status: string | null;
    latitude: number | null;
    longitude: number | null;
    countryCode: string | null;
    isFeatured: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leisureOfferType: string | null;
    leisurePackType: string | null;
    leisurePackStatus: string | null;
    leisurePackStartDate: Date | null;
    leisurePackEndDate: Date | null;
};
export type LeisureItemCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    categorySlug: number;
    location: number;
    address: number;
    phone: number;
    website: number;
    priceRange: number;
    openingHours: number;
    image: number;
    rating: number;
    reviewCount: number;
    features: number;
    tags: number;
    status: number;
    latitude: number;
    longitude: number;
    countryCode: number;
    isFeatured: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    leisureOfferType: number;
    leisurePackType: number;
    leisurePackStatus: number;
    leisurePackStartDate: number;
    leisurePackEndDate: number;
    _all: number;
};
export type LeisureItemAvgAggregateInputType = {
    rating?: true;
    reviewCount?: true;
    latitude?: true;
    longitude?: true;
};
export type LeisureItemSumAggregateInputType = {
    rating?: true;
    reviewCount?: true;
    latitude?: true;
    longitude?: true;
};
export type LeisureItemMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categorySlug?: true;
    location?: true;
    address?: true;
    phone?: true;
    website?: true;
    priceRange?: true;
    openingHours?: true;
    image?: true;
    rating?: true;
    reviewCount?: true;
    features?: true;
    tags?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    countryCode?: true;
    isFeatured?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    leisureOfferType?: true;
    leisurePackType?: true;
    leisurePackStatus?: true;
    leisurePackStartDate?: true;
    leisurePackEndDate?: true;
};
export type LeisureItemMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categorySlug?: true;
    location?: true;
    address?: true;
    phone?: true;
    website?: true;
    priceRange?: true;
    openingHours?: true;
    image?: true;
    rating?: true;
    reviewCount?: true;
    features?: true;
    tags?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    countryCode?: true;
    isFeatured?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    leisureOfferType?: true;
    leisurePackType?: true;
    leisurePackStatus?: true;
    leisurePackStartDate?: true;
    leisurePackEndDate?: true;
};
export type LeisureItemCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categorySlug?: true;
    location?: true;
    address?: true;
    phone?: true;
    website?: true;
    priceRange?: true;
    openingHours?: true;
    image?: true;
    rating?: true;
    reviewCount?: true;
    features?: true;
    tags?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    countryCode?: true;
    isFeatured?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    leisureOfferType?: true;
    leisurePackType?: true;
    leisurePackStatus?: true;
    leisurePackStartDate?: true;
    leisurePackEndDate?: true;
    _all?: true;
};
export type LeisureItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureItem to aggregate.
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureItems to fetch.
     */
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeisureItems
    **/
    _count?: true | LeisureItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LeisureItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LeisureItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LeisureItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LeisureItemMaxAggregateInputType;
};
export type GetLeisureItemAggregateType<T extends LeisureItemAggregateArgs> = {
    [P in keyof T & keyof AggregateLeisureItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeisureItem[P]> : Prisma.GetScalarType<T[P], AggregateLeisureItem[P]>;
};
export type LeisureItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureItemWhereInput;
    orderBy?: Prisma.LeisureItemOrderByWithAggregationInput | Prisma.LeisureItemOrderByWithAggregationInput[];
    by: Prisma.LeisureItemScalarFieldEnum[] | Prisma.LeisureItemScalarFieldEnum;
    having?: Prisma.LeisureItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeisureItemCountAggregateInputType | true;
    _avg?: LeisureItemAvgAggregateInputType;
    _sum?: LeisureItemSumAggregateInputType;
    _min?: LeisureItemMinAggregateInputType;
    _max?: LeisureItemMaxAggregateInputType;
};
export type LeisureItemGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address: string | null;
    phone: string | null;
    website: string | null;
    priceRange: string | null;
    openingHours: string | null;
    image: string;
    rating: number | null;
    reviewCount: number | null;
    features: string;
    tags: string;
    status: string;
    latitude: number | null;
    longitude: number | null;
    countryCode: string | null;
    isFeatured: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    leisureOfferType: string | null;
    leisurePackType: string | null;
    leisurePackStatus: string | null;
    leisurePackStartDate: Date | null;
    leisurePackEndDate: Date | null;
    _count: LeisureItemCountAggregateOutputType | null;
    _avg: LeisureItemAvgAggregateOutputType | null;
    _sum: LeisureItemSumAggregateOutputType | null;
    _min: LeisureItemMinAggregateOutputType | null;
    _max: LeisureItemMaxAggregateOutputType | null;
};
type GetLeisureItemGroupByPayload<T extends LeisureItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeisureItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeisureItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeisureItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeisureItemGroupByOutputType[P]>;
}>>;
export type LeisureItemWhereInput = {
    AND?: Prisma.LeisureItemWhereInput | Prisma.LeisureItemWhereInput[];
    OR?: Prisma.LeisureItemWhereInput[];
    NOT?: Prisma.LeisureItemWhereInput | Prisma.LeisureItemWhereInput[];
    id?: Prisma.StringFilter<"LeisureItem"> | string;
    name?: Prisma.StringFilter<"LeisureItem"> | string;
    description?: Prisma.StringFilter<"LeisureItem"> | string;
    categorySlug?: Prisma.StringFilter<"LeisureItem"> | string;
    location?: Prisma.StringFilter<"LeisureItem"> | string;
    address?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    phone?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    website?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    priceRange?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    openingHours?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    image?: Prisma.StringFilter<"LeisureItem"> | string;
    rating?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    reviewCount?: Prisma.IntNullableFilter<"LeisureItem"> | number | null;
    features?: Prisma.StringFilter<"LeisureItem"> | string;
    tags?: Prisma.StringFilter<"LeisureItem"> | string;
    status?: Prisma.StringFilter<"LeisureItem"> | string;
    latitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    countryCode?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    isFeatured?: Prisma.BoolFilter<"LeisureItem"> | boolean;
    createdById?: Prisma.StringFilter<"LeisureItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    leisureOfferType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStatus?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStartDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
    leisurePackEndDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
    category?: Prisma.XOR<Prisma.LeisureCategoryScalarRelationFilter, Prisma.LeisureCategoryWhereInput>;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    favoritedBy?: Prisma.LeisureFavoriteListRelationFilter;
};
export type LeisureItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categorySlug?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceRange?: Prisma.SortOrderInput | Prisma.SortOrder;
    openingHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    features?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    countryCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leisureOfferType?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackType?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackStartDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.LeisureCategoryOrderByWithRelationInput;
    country?: Prisma.CountryOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    favoritedBy?: Prisma.LeisureFavoriteOrderByRelationAggregateInput;
};
export type LeisureItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeisureItemWhereInput | Prisma.LeisureItemWhereInput[];
    OR?: Prisma.LeisureItemWhereInput[];
    NOT?: Prisma.LeisureItemWhereInput | Prisma.LeisureItemWhereInput[];
    name?: Prisma.StringFilter<"LeisureItem"> | string;
    description?: Prisma.StringFilter<"LeisureItem"> | string;
    categorySlug?: Prisma.StringFilter<"LeisureItem"> | string;
    location?: Prisma.StringFilter<"LeisureItem"> | string;
    address?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    phone?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    website?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    priceRange?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    openingHours?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    image?: Prisma.StringFilter<"LeisureItem"> | string;
    rating?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    reviewCount?: Prisma.IntNullableFilter<"LeisureItem"> | number | null;
    features?: Prisma.StringFilter<"LeisureItem"> | string;
    tags?: Prisma.StringFilter<"LeisureItem"> | string;
    status?: Prisma.StringFilter<"LeisureItem"> | string;
    latitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    countryCode?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    isFeatured?: Prisma.BoolFilter<"LeisureItem"> | boolean;
    createdById?: Prisma.StringFilter<"LeisureItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    leisureOfferType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStatus?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStartDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
    leisurePackEndDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
    category?: Prisma.XOR<Prisma.LeisureCategoryScalarRelationFilter, Prisma.LeisureCategoryWhereInput>;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    favoritedBy?: Prisma.LeisureFavoriteListRelationFilter;
}, "id">;
export type LeisureItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categorySlug?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    priceRange?: Prisma.SortOrderInput | Prisma.SortOrder;
    openingHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    features?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    countryCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leisureOfferType?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackType?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackStartDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    leisurePackEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LeisureItemCountOrderByAggregateInput;
    _avg?: Prisma.LeisureItemAvgOrderByAggregateInput;
    _max?: Prisma.LeisureItemMaxOrderByAggregateInput;
    _min?: Prisma.LeisureItemMinOrderByAggregateInput;
    _sum?: Prisma.LeisureItemSumOrderByAggregateInput;
};
export type LeisureItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeisureItemScalarWhereWithAggregatesInput | Prisma.LeisureItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeisureItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeisureItemScalarWhereWithAggregatesInput | Prisma.LeisureItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    description?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    categorySlug?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    location?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    priceRange?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    openingHours?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    image?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    rating?: Prisma.FloatNullableWithAggregatesFilter<"LeisureItem"> | number | null;
    reviewCount?: Prisma.IntNullableWithAggregatesFilter<"LeisureItem"> | number | null;
    features?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    tags?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    status?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"LeisureItem"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"LeisureItem"> | number | null;
    countryCode?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"LeisureItem"> | boolean;
    createdById?: Prisma.StringWithAggregatesFilter<"LeisureItem"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeisureItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LeisureItem"> | Date | string;
    leisureOfferType?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    leisurePackType?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    leisurePackStatus?: Prisma.StringNullableWithAggregatesFilter<"LeisureItem"> | string | null;
    leisurePackStartDate?: Prisma.DateTimeNullableWithAggregatesFilter<"LeisureItem"> | Date | string | null;
    leisurePackEndDate?: Prisma.DateTimeNullableWithAggregatesFilter<"LeisureItem"> | Date | string | null;
};
export type LeisureItemCreateInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    category: Prisma.LeisureCategoryCreateNestedOneWithoutItemsInput;
    country?: Prisma.CountryCreateNestedOneWithoutLeisureItemsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutLeisureItemsInput;
    favoritedBy?: Prisma.LeisureFavoriteCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.LeisureCategoryUpdateOneRequiredWithoutItemsNestedInput;
    country?: Prisma.CountryUpdateOneWithoutLeisureItemsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutLeisureItemsNestedInput;
    favoritedBy?: Prisma.LeisureFavoriteUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
};
export type LeisureItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeisureItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeisureItemListRelationFilter = {
    every?: Prisma.LeisureItemWhereInput;
    some?: Prisma.LeisureItemWhereInput;
    none?: Prisma.LeisureItemWhereInput;
};
export type LeisureItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeisureItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categorySlug?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    priceRange?: Prisma.SortOrder;
    openingHours?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leisureOfferType?: Prisma.SortOrder;
    leisurePackType?: Prisma.SortOrder;
    leisurePackStatus?: Prisma.SortOrder;
    leisurePackStartDate?: Prisma.SortOrder;
    leisurePackEndDate?: Prisma.SortOrder;
};
export type LeisureItemAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LeisureItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categorySlug?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    priceRange?: Prisma.SortOrder;
    openingHours?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leisureOfferType?: Prisma.SortOrder;
    leisurePackType?: Prisma.SortOrder;
    leisurePackStatus?: Prisma.SortOrder;
    leisurePackStartDate?: Prisma.SortOrder;
    leisurePackEndDate?: Prisma.SortOrder;
};
export type LeisureItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categorySlug?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    priceRange?: Prisma.SortOrder;
    openingHours?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    leisureOfferType?: Prisma.SortOrder;
    leisurePackType?: Prisma.SortOrder;
    leisurePackStatus?: Prisma.SortOrder;
    leisurePackStartDate?: Prisma.SortOrder;
    leisurePackEndDate?: Prisma.SortOrder;
};
export type LeisureItemSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LeisureItemScalarRelationFilter = {
    is?: Prisma.LeisureItemWhereInput;
    isNot?: Prisma.LeisureItemWhereInput;
};
export type LeisureItemCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput> | Prisma.LeisureItemCreateWithoutCreatedByInput[] | Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput | Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LeisureItemCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput> | Prisma.LeisureItemCreateWithoutCreatedByInput[] | Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput | Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LeisureItemCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput> | Prisma.LeisureItemCreateWithoutCreatedByInput[] | Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput | Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LeisureItemCreateManyCreatedByInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCreatedByInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput> | Prisma.LeisureItemCreateWithoutCreatedByInput[] | Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput | Prisma.LeisureItemCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LeisureItemCreateManyCreatedByInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCreatedByInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput> | Prisma.LeisureItemCreateWithoutCountryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCountryInput | Prisma.LeisureItemCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.LeisureItemCreateManyCountryInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput> | Prisma.LeisureItemCreateWithoutCountryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCountryInput | Prisma.LeisureItemCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.LeisureItemCreateManyCountryInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput> | Prisma.LeisureItemCreateWithoutCountryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCountryInput | Prisma.LeisureItemCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCountryInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.LeisureItemCreateManyCountryInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCountryInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCountryInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput> | Prisma.LeisureItemCreateWithoutCountryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCountryInput | Prisma.LeisureItemCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCountryInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.LeisureItemCreateManyCountryInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCountryInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCountryInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput> | Prisma.LeisureItemCreateWithoutCategoryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCategoryInput | Prisma.LeisureItemCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.LeisureItemCreateManyCategoryInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput> | Prisma.LeisureItemCreateWithoutCategoryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCategoryInput | Prisma.LeisureItemCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.LeisureItemCreateManyCategoryInputEnvelope;
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
};
export type LeisureItemUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput> | Prisma.LeisureItemCreateWithoutCategoryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCategoryInput | Prisma.LeisureItemCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCategoryInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.LeisureItemCreateManyCategoryInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCategoryInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCategoryInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput> | Prisma.LeisureItemCreateWithoutCategoryInput[] | Prisma.LeisureItemUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutCategoryInput | Prisma.LeisureItemCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.LeisureItemUpsertWithWhereUniqueWithoutCategoryInput | Prisma.LeisureItemUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.LeisureItemCreateManyCategoryInputEnvelope;
    set?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    disconnect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    delete?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    connect?: Prisma.LeisureItemWhereUniqueInput | Prisma.LeisureItemWhereUniqueInput[];
    update?: Prisma.LeisureItemUpdateWithWhereUniqueWithoutCategoryInput | Prisma.LeisureItemUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.LeisureItemUpdateManyWithWhereWithoutCategoryInput | Prisma.LeisureItemUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
};
export type LeisureItemCreateNestedOneWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutFavoritedByInput;
    connect?: Prisma.LeisureItemWhereUniqueInput;
};
export type LeisureItemUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeisureItemCreateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.LeisureItemCreateOrConnectWithoutFavoritedByInput;
    upsert?: Prisma.LeisureItemUpsertWithoutFavoritedByInput;
    connect?: Prisma.LeisureItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeisureItemUpdateToOneWithWhereWithoutFavoritedByInput, Prisma.LeisureItemUpdateWithoutFavoritedByInput>, Prisma.LeisureItemUncheckedUpdateWithoutFavoritedByInput>;
};
export type LeisureItemCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    category: Prisma.LeisureCategoryCreateNestedOneWithoutItemsInput;
    country?: Prisma.CountryCreateNestedOneWithoutLeisureItemsInput;
    favoritedBy?: Prisma.LeisureFavoriteCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput>;
};
export type LeisureItemCreateManyCreatedByInputEnvelope = {
    data: Prisma.LeisureItemCreateManyCreatedByInput | Prisma.LeisureItemCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type LeisureItemUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCreatedByInput, Prisma.LeisureItemUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCreatedByInput, Prisma.LeisureItemUncheckedCreateWithoutCreatedByInput>;
};
export type LeisureItemUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCreatedByInput, Prisma.LeisureItemUncheckedUpdateWithoutCreatedByInput>;
};
export type LeisureItemUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.LeisureItemScalarWhereInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateManyMutationInput, Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByInput>;
};
export type LeisureItemScalarWhereInput = {
    AND?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
    OR?: Prisma.LeisureItemScalarWhereInput[];
    NOT?: Prisma.LeisureItemScalarWhereInput | Prisma.LeisureItemScalarWhereInput[];
    id?: Prisma.StringFilter<"LeisureItem"> | string;
    name?: Prisma.StringFilter<"LeisureItem"> | string;
    description?: Prisma.StringFilter<"LeisureItem"> | string;
    categorySlug?: Prisma.StringFilter<"LeisureItem"> | string;
    location?: Prisma.StringFilter<"LeisureItem"> | string;
    address?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    phone?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    website?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    priceRange?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    openingHours?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    image?: Prisma.StringFilter<"LeisureItem"> | string;
    rating?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    reviewCount?: Prisma.IntNullableFilter<"LeisureItem"> | number | null;
    features?: Prisma.StringFilter<"LeisureItem"> | string;
    tags?: Prisma.StringFilter<"LeisureItem"> | string;
    status?: Prisma.StringFilter<"LeisureItem"> | string;
    latitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LeisureItem"> | number | null;
    countryCode?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    isFeatured?: Prisma.BoolFilter<"LeisureItem"> | boolean;
    createdById?: Prisma.StringFilter<"LeisureItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeisureItem"> | Date | string;
    leisureOfferType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackType?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStatus?: Prisma.StringNullableFilter<"LeisureItem"> | string | null;
    leisurePackStartDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
    leisurePackEndDate?: Prisma.DateTimeNullableFilter<"LeisureItem"> | Date | string | null;
};
export type LeisureItemCreateWithoutCountryInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    category: Prisma.LeisureCategoryCreateNestedOneWithoutItemsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutLeisureItemsInput;
    favoritedBy?: Prisma.LeisureFavoriteCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemUncheckedCreateWithoutCountryInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemCreateOrConnectWithoutCountryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput>;
};
export type LeisureItemCreateManyCountryInputEnvelope = {
    data: Prisma.LeisureItemCreateManyCountryInput | Prisma.LeisureItemCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type LeisureItemUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCountryInput, Prisma.LeisureItemUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCountryInput, Prisma.LeisureItemUncheckedCreateWithoutCountryInput>;
};
export type LeisureItemUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCountryInput, Prisma.LeisureItemUncheckedUpdateWithoutCountryInput>;
};
export type LeisureItemUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.LeisureItemScalarWhereInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateManyMutationInput, Prisma.LeisureItemUncheckedUpdateManyWithoutCountryInput>;
};
export type LeisureItemCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutLeisureItemsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutLeisureItemsInput;
    favoritedBy?: Prisma.LeisureFavoriteCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutLeisureItemInput;
};
export type LeisureItemCreateOrConnectWithoutCategoryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput>;
};
export type LeisureItemCreateManyCategoryInputEnvelope = {
    data: Prisma.LeisureItemCreateManyCategoryInput | Prisma.LeisureItemCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type LeisureItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCategoryInput, Prisma.LeisureItemUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutCategoryInput, Prisma.LeisureItemUncheckedCreateWithoutCategoryInput>;
};
export type LeisureItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateWithoutCategoryInput, Prisma.LeisureItemUncheckedUpdateWithoutCategoryInput>;
};
export type LeisureItemUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.LeisureItemScalarWhereInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateManyMutationInput, Prisma.LeisureItemUncheckedUpdateManyWithoutCategoryInput>;
};
export type LeisureItemCreateWithoutFavoritedByInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
    category: Prisma.LeisureCategoryCreateNestedOneWithoutItemsInput;
    country?: Prisma.CountryCreateNestedOneWithoutLeisureItemsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutLeisureItemsInput;
};
export type LeisureItemUncheckedCreateWithoutFavoritedByInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
};
export type LeisureItemCreateOrConnectWithoutFavoritedByInput = {
    where: Prisma.LeisureItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedCreateWithoutFavoritedByInput>;
};
export type LeisureItemUpsertWithoutFavoritedByInput = {
    update: Prisma.XOR<Prisma.LeisureItemUpdateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedUpdateWithoutFavoritedByInput>;
    create: Prisma.XOR<Prisma.LeisureItemCreateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedCreateWithoutFavoritedByInput>;
    where?: Prisma.LeisureItemWhereInput;
};
export type LeisureItemUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: Prisma.LeisureItemWhereInput;
    data: Prisma.XOR<Prisma.LeisureItemUpdateWithoutFavoritedByInput, Prisma.LeisureItemUncheckedUpdateWithoutFavoritedByInput>;
};
export type LeisureItemUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.LeisureCategoryUpdateOneRequiredWithoutItemsNestedInput;
    country?: Prisma.CountryUpdateOneWithoutLeisureItemsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutLeisureItemsNestedInput;
};
export type LeisureItemUncheckedUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeisureItemCreateManyCreatedByInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
};
export type LeisureItemUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.LeisureCategoryUpdateOneRequiredWithoutItemsNestedInput;
    country?: Prisma.CountryUpdateOneWithoutLeisureItemsNestedInput;
    favoritedBy?: Prisma.LeisureFavoriteUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeisureItemCreateManyCountryInput = {
    id?: string;
    name: string;
    description: string;
    categorySlug: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
};
export type LeisureItemUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.LeisureCategoryUpdateOneRequiredWithoutItemsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutLeisureItemsNestedInput;
    favoritedBy?: Prisma.LeisureFavoriteUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateManyWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    categorySlug?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeisureItemCreateManyCategoryInput = {
    id?: string;
    name: string;
    description: string;
    location: string;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    priceRange?: string | null;
    openingHours?: string | null;
    image?: string;
    rating?: number | null;
    reviewCount?: number | null;
    features?: string;
    tags?: string;
    status?: string;
    latitude?: number | null;
    longitude?: number | null;
    countryCode?: string | null;
    isFeatured?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leisureOfferType?: string | null;
    leisurePackType?: string | null;
    leisurePackStatus?: string | null;
    leisurePackStartDate?: Date | string | null;
    leisurePackEndDate?: Date | string | null;
};
export type LeisureItemUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutLeisureItemsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutLeisureItemsNestedInput;
    favoritedBy?: Prisma.LeisureFavoriteUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    favoritedBy?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutLeisureItemNestedInput;
};
export type LeisureItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priceRange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    openingHours?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    features?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leisureOfferType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leisurePackStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leisurePackEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type LeisureItemCountOutputType
 */
export type LeisureItemCountOutputType = {
    favoritedBy: number;
};
export type LeisureItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favoritedBy?: boolean | LeisureItemCountOutputTypeCountFavoritedByArgs;
};
/**
 * LeisureItemCountOutputType without action
 */
export type LeisureItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureItemCountOutputType
     */
    select?: Prisma.LeisureItemCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LeisureItemCountOutputType without action
 */
export type LeisureItemCountOutputTypeCountFavoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureFavoriteWhereInput;
};
export type LeisureItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categorySlug?: boolean;
    location?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    priceRange?: boolean;
    openingHours?: boolean;
    image?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
    features?: boolean;
    tags?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    countryCode?: boolean;
    isFeatured?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leisureOfferType?: boolean;
    leisurePackType?: boolean;
    leisurePackStatus?: boolean;
    leisurePackStartDate?: boolean;
    leisurePackEndDate?: boolean;
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.LeisureItem$favoritedByArgs<ExtArgs>;
    _count?: boolean | Prisma.LeisureItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureItem"]>;
export type LeisureItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categorySlug?: boolean;
    location?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    priceRange?: boolean;
    openingHours?: boolean;
    image?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
    features?: boolean;
    tags?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    countryCode?: boolean;
    isFeatured?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leisureOfferType?: boolean;
    leisurePackType?: boolean;
    leisurePackStatus?: boolean;
    leisurePackStartDate?: boolean;
    leisurePackEndDate?: boolean;
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureItem"]>;
export type LeisureItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categorySlug?: boolean;
    location?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    priceRange?: boolean;
    openingHours?: boolean;
    image?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
    features?: boolean;
    tags?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    countryCode?: boolean;
    isFeatured?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leisureOfferType?: boolean;
    leisurePackType?: boolean;
    leisurePackStatus?: boolean;
    leisurePackStartDate?: boolean;
    leisurePackEndDate?: boolean;
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leisureItem"]>;
export type LeisureItemSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categorySlug?: boolean;
    location?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    priceRange?: boolean;
    openingHours?: boolean;
    image?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
    features?: boolean;
    tags?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    countryCode?: boolean;
    isFeatured?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leisureOfferType?: boolean;
    leisurePackType?: boolean;
    leisurePackStatus?: boolean;
    leisurePackStartDate?: boolean;
    leisurePackEndDate?: boolean;
};
export type LeisureItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "categorySlug" | "location" | "address" | "phone" | "website" | "priceRange" | "openingHours" | "image" | "rating" | "reviewCount" | "features" | "tags" | "status" | "latitude" | "longitude" | "countryCode" | "isFeatured" | "createdById" | "createdAt" | "updatedAt" | "leisureOfferType" | "leisurePackType" | "leisurePackStatus" | "leisurePackStartDate" | "leisurePackEndDate", ExtArgs["result"]["leisureItem"]>;
export type LeisureItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.LeisureItem$favoritedByArgs<ExtArgs>;
    _count?: boolean | Prisma.LeisureItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeisureItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LeisureItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.LeisureCategoryDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.LeisureItem$countryArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LeisureItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeisureItem";
    objects: {
        category: Prisma.$LeisureCategoryPayload<ExtArgs>;
        country: Prisma.$CountryPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        favoritedBy: Prisma.$LeisureFavoritePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        categorySlug: string;
        location: string;
        address: string | null;
        phone: string | null;
        website: string | null;
        priceRange: string | null;
        openingHours: string | null;
        image: string;
        rating: number | null;
        reviewCount: number | null;
        features: string;
        tags: string;
        status: string;
        latitude: number | null;
        longitude: number | null;
        countryCode: string | null;
        isFeatured: boolean;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
        leisureOfferType: string | null;
        leisurePackType: string | null;
        leisurePackStatus: string | null;
        leisurePackStartDate: Date | null;
        leisurePackEndDate: Date | null;
    }, ExtArgs["result"]["leisureItem"]>;
    composites: {};
};
export type LeisureItemGetPayload<S extends boolean | null | undefined | LeisureItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload, S>;
export type LeisureItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeisureItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeisureItemCountAggregateInputType | true;
};
export interface LeisureItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeisureItem'];
        meta: {
            name: 'LeisureItem';
        };
    };
    /**
     * Find zero or one LeisureItem that matches the filter.
     * @param {LeisureItemFindUniqueArgs} args - Arguments to find a LeisureItem
     * @example
     * // Get one LeisureItem
     * const leisureItem = await prisma.leisureItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeisureItemFindUniqueArgs>(args: Prisma.SelectSubset<T, LeisureItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LeisureItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeisureItemFindUniqueOrThrowArgs} args - Arguments to find a LeisureItem
     * @example
     * // Get one LeisureItem
     * const leisureItem = await prisma.leisureItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeisureItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeisureItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemFindFirstArgs} args - Arguments to find a LeisureItem
     * @example
     * // Get one LeisureItem
     * const leisureItem = await prisma.leisureItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeisureItemFindFirstArgs>(args?: Prisma.SelectSubset<T, LeisureItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LeisureItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemFindFirstOrThrowArgs} args - Arguments to find a LeisureItem
     * @example
     * // Get one LeisureItem
     * const leisureItem = await prisma.leisureItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeisureItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeisureItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LeisureItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeisureItems
     * const leisureItems = await prisma.leisureItem.findMany()
     *
     * // Get first 10 LeisureItems
     * const leisureItems = await prisma.leisureItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leisureItemWithIdOnly = await prisma.leisureItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeisureItemFindManyArgs>(args?: Prisma.SelectSubset<T, LeisureItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LeisureItem.
     * @param {LeisureItemCreateArgs} args - Arguments to create a LeisureItem.
     * @example
     * // Create one LeisureItem
     * const LeisureItem = await prisma.leisureItem.create({
     *   data: {
     *     // ... data to create a LeisureItem
     *   }
     * })
     *
     */
    create<T extends LeisureItemCreateArgs>(args: Prisma.SelectSubset<T, LeisureItemCreateArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LeisureItems.
     * @param {LeisureItemCreateManyArgs} args - Arguments to create many LeisureItems.
     * @example
     * // Create many LeisureItems
     * const leisureItem = await prisma.leisureItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeisureItemCreateManyArgs>(args?: Prisma.SelectSubset<T, LeisureItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LeisureItems and returns the data saved in the database.
     * @param {LeisureItemCreateManyAndReturnArgs} args - Arguments to create many LeisureItems.
     * @example
     * // Create many LeisureItems
     * const leisureItem = await prisma.leisureItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeisureItems and only return the `id`
     * const leisureItemWithIdOnly = await prisma.leisureItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeisureItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeisureItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LeisureItem.
     * @param {LeisureItemDeleteArgs} args - Arguments to delete one LeisureItem.
     * @example
     * // Delete one LeisureItem
     * const LeisureItem = await prisma.leisureItem.delete({
     *   where: {
     *     // ... filter to delete one LeisureItem
     *   }
     * })
     *
     */
    delete<T extends LeisureItemDeleteArgs>(args: Prisma.SelectSubset<T, LeisureItemDeleteArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LeisureItem.
     * @param {LeisureItemUpdateArgs} args - Arguments to update one LeisureItem.
     * @example
     * // Update one LeisureItem
     * const leisureItem = await prisma.leisureItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeisureItemUpdateArgs>(args: Prisma.SelectSubset<T, LeisureItemUpdateArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LeisureItems.
     * @param {LeisureItemDeleteManyArgs} args - Arguments to filter LeisureItems to delete.
     * @example
     * // Delete a few LeisureItems
     * const { count } = await prisma.leisureItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeisureItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeisureItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeisureItems
     * const leisureItem = await prisma.leisureItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeisureItemUpdateManyArgs>(args: Prisma.SelectSubset<T, LeisureItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LeisureItems and returns the data updated in the database.
     * @param {LeisureItemUpdateManyAndReturnArgs} args - Arguments to update many LeisureItems.
     * @example
     * // Update many LeisureItems
     * const leisureItem = await prisma.leisureItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeisureItems and only return the `id`
     * const leisureItemWithIdOnly = await prisma.leisureItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeisureItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeisureItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LeisureItem.
     * @param {LeisureItemUpsertArgs} args - Arguments to update or create a LeisureItem.
     * @example
     * // Update or create a LeisureItem
     * const leisureItem = await prisma.leisureItem.upsert({
     *   create: {
     *     // ... data to create a LeisureItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeisureItem we want to update
     *   }
     * })
     */
    upsert<T extends LeisureItemUpsertArgs>(args: Prisma.SelectSubset<T, LeisureItemUpsertArgs<ExtArgs>>): Prisma.Prisma__LeisureItemClient<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LeisureItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemCountArgs} args - Arguments to filter LeisureItems to count.
     * @example
     * // Count the number of LeisureItems
     * const count = await prisma.leisureItem.count({
     *   where: {
     *     // ... the filter for the LeisureItems we want to count
     *   }
     * })
    **/
    count<T extends LeisureItemCountArgs>(args?: Prisma.Subset<T, LeisureItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeisureItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LeisureItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeisureItemAggregateArgs>(args: Prisma.Subset<T, LeisureItemAggregateArgs>): Prisma.PrismaPromise<GetLeisureItemAggregateType<T>>;
    /**
     * Group by LeisureItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeisureItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LeisureItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeisureItemGroupByArgs['orderBy'];
    } : {
        orderBy?: LeisureItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeisureItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeisureItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeisureItem model
     */
    readonly fields: LeisureItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LeisureItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LeisureItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.LeisureCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeisureCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__LeisureCategoryClient<runtime.Types.Result.GetResult<Prisma.$LeisureCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    country<T extends Prisma.LeisureItem$countryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeisureItem$countryArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    favoritedBy<T extends Prisma.LeisureItem$favoritedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeisureItem$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LeisureItem model
 */
export interface LeisureItemFieldRefs {
    readonly id: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly name: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly description: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly categorySlug: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly location: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly address: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly phone: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly website: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly priceRange: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly openingHours: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly image: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly rating: Prisma.FieldRef<"LeisureItem", 'Float'>;
    readonly reviewCount: Prisma.FieldRef<"LeisureItem", 'Int'>;
    readonly features: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly tags: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly status: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly latitude: Prisma.FieldRef<"LeisureItem", 'Float'>;
    readonly longitude: Prisma.FieldRef<"LeisureItem", 'Float'>;
    readonly countryCode: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly isFeatured: Prisma.FieldRef<"LeisureItem", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LeisureItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LeisureItem", 'DateTime'>;
    readonly leisureOfferType: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly leisurePackType: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly leisurePackStatus: Prisma.FieldRef<"LeisureItem", 'String'>;
    readonly leisurePackStartDate: Prisma.FieldRef<"LeisureItem", 'DateTime'>;
    readonly leisurePackEndDate: Prisma.FieldRef<"LeisureItem", 'DateTime'>;
}
/**
 * LeisureItem findUnique
 */
export type LeisureItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LeisureItem to fetch.
     */
    where: Prisma.LeisureItemWhereUniqueInput;
};
/**
 * LeisureItem findUniqueOrThrow
 */
export type LeisureItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LeisureItem to fetch.
     */
    where: Prisma.LeisureItemWhereUniqueInput;
};
/**
 * LeisureItem findFirst
 */
export type LeisureItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LeisureItem to fetch.
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureItems to fetch.
     */
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureItems.
     */
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureItems.
     */
    distinct?: Prisma.LeisureItemScalarFieldEnum | Prisma.LeisureItemScalarFieldEnum[];
};
/**
 * LeisureItem findFirstOrThrow
 */
export type LeisureItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LeisureItem to fetch.
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureItems to fetch.
     */
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeisureItems.
     */
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeisureItems.
     */
    distinct?: Prisma.LeisureItemScalarFieldEnum | Prisma.LeisureItemScalarFieldEnum[];
};
/**
 * LeisureItem findMany
 */
export type LeisureItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LeisureItems to fetch.
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeisureItems to fetch.
     */
    orderBy?: Prisma.LeisureItemOrderByWithRelationInput | Prisma.LeisureItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeisureItems.
     */
    cursor?: Prisma.LeisureItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeisureItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeisureItems.
     */
    skip?: number;
    distinct?: Prisma.LeisureItemScalarFieldEnum | Prisma.LeisureItemScalarFieldEnum[];
};
/**
 * LeisureItem create
 */
export type LeisureItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LeisureItem.
     */
    data: Prisma.XOR<Prisma.LeisureItemCreateInput, Prisma.LeisureItemUncheckedCreateInput>;
};
/**
 * LeisureItem createMany
 */
export type LeisureItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeisureItems.
     */
    data: Prisma.LeisureItemCreateManyInput | Prisma.LeisureItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LeisureItem createManyAndReturn
 */
export type LeisureItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureItem
     */
    select?: Prisma.LeisureItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureItem
     */
    omit?: Prisma.LeisureItemOmit<ExtArgs> | null;
    /**
     * The data used to create many LeisureItems.
     */
    data: Prisma.LeisureItemCreateManyInput | Prisma.LeisureItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LeisureItem update
 */
export type LeisureItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LeisureItem.
     */
    data: Prisma.XOR<Prisma.LeisureItemUpdateInput, Prisma.LeisureItemUncheckedUpdateInput>;
    /**
     * Choose, which LeisureItem to update.
     */
    where: Prisma.LeisureItemWhereUniqueInput;
};
/**
 * LeisureItem updateMany
 */
export type LeisureItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LeisureItems.
     */
    data: Prisma.XOR<Prisma.LeisureItemUpdateManyMutationInput, Prisma.LeisureItemUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureItems to update
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * Limit how many LeisureItems to update.
     */
    limit?: number;
};
/**
 * LeisureItem updateManyAndReturn
 */
export type LeisureItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureItem
     */
    select?: Prisma.LeisureItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureItem
     */
    omit?: Prisma.LeisureItemOmit<ExtArgs> | null;
    /**
     * The data used to update LeisureItems.
     */
    data: Prisma.XOR<Prisma.LeisureItemUpdateManyMutationInput, Prisma.LeisureItemUncheckedUpdateManyInput>;
    /**
     * Filter which LeisureItems to update
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * Limit how many LeisureItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LeisureItem upsert
 */
export type LeisureItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LeisureItem to update in case it exists.
     */
    where: Prisma.LeisureItemWhereUniqueInput;
    /**
     * In case the LeisureItem found by the `where` argument doesn't exist, create a new LeisureItem with this data.
     */
    create: Prisma.XOR<Prisma.LeisureItemCreateInput, Prisma.LeisureItemUncheckedCreateInput>;
    /**
     * In case the LeisureItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LeisureItemUpdateInput, Prisma.LeisureItemUncheckedUpdateInput>;
};
/**
 * LeisureItem delete
 */
export type LeisureItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LeisureItem to delete.
     */
    where: Prisma.LeisureItemWhereUniqueInput;
};
/**
 * LeisureItem deleteMany
 */
export type LeisureItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LeisureItems to delete
     */
    where?: Prisma.LeisureItemWhereInput;
    /**
     * Limit how many LeisureItems to delete.
     */
    limit?: number;
};
/**
 * LeisureItem.country
 */
export type LeisureItem$countryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CountryWhereInput;
};
/**
 * LeisureItem.favoritedBy
 */
export type LeisureItem$favoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeisureFavorite
     */
    select?: Prisma.LeisureFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeisureFavorite
     */
    omit?: Prisma.LeisureFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LeisureFavoriteInclude<ExtArgs> | null;
    where?: Prisma.LeisureFavoriteWhereInput;
    orderBy?: Prisma.LeisureFavoriteOrderByWithRelationInput | Prisma.LeisureFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.LeisureFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeisureFavoriteScalarFieldEnum | Prisma.LeisureFavoriteScalarFieldEnum[];
};
/**
 * LeisureItem without action
 */
export type LeisureItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=LeisureItem.d.ts.map