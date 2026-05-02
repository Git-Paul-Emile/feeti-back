import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LoyaltyPartner
 *
 */
export type LoyaltyPartnerModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyPartnerPayload>;
export type AggregateLoyaltyPartner = {
    _count: LoyaltyPartnerCountAggregateOutputType | null;
    _avg: LoyaltyPartnerAvgAggregateOutputType | null;
    _sum: LoyaltyPartnerSumAggregateOutputType | null;
    _min: LoyaltyPartnerMinAggregateOutputType | null;
    _max: LoyaltyPartnerMaxAggregateOutputType | null;
};
export type LoyaltyPartnerAvgAggregateOutputType = {
    bonusPoints: number | null;
};
export type LoyaltyPartnerSumAggregateOutputType = {
    bonusPoints: number | null;
};
export type LoyaltyPartnerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    discount: string | null;
    bonusPoints: number | null;
    logo: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyPartnerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    discount: string | null;
    bonusPoints: number | null;
    logo: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyPartnerCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    category: number;
    discount: number;
    discountByLevel: number;
    bonusPoints: number;
    logo: number;
    address: number;
    phone: number;
    website: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LoyaltyPartnerAvgAggregateInputType = {
    bonusPoints?: true;
};
export type LoyaltyPartnerSumAggregateInputType = {
    bonusPoints?: true;
};
export type LoyaltyPartnerMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    discount?: true;
    bonusPoints?: true;
    logo?: true;
    address?: true;
    phone?: true;
    website?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyPartnerMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    discount?: true;
    bonusPoints?: true;
    logo?: true;
    address?: true;
    phone?: true;
    website?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyPartnerCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    discount?: true;
    discountByLevel?: true;
    bonusPoints?: true;
    logo?: true;
    address?: true;
    phone?: true;
    website?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LoyaltyPartnerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyPartner to aggregate.
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyPartners to fetch.
     */
    orderBy?: Prisma.LoyaltyPartnerOrderByWithRelationInput | Prisma.LoyaltyPartnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LoyaltyPartnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyPartners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyPartners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LoyaltyPartners
    **/
    _count?: true | LoyaltyPartnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LoyaltyPartnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LoyaltyPartnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyPartnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyPartnerMaxAggregateInputType;
};
export type GetLoyaltyPartnerAggregateType<T extends LoyaltyPartnerAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyPartner]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyPartner[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyPartner[P]>;
};
export type LoyaltyPartnerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPartnerWhereInput;
    orderBy?: Prisma.LoyaltyPartnerOrderByWithAggregationInput | Prisma.LoyaltyPartnerOrderByWithAggregationInput[];
    by: Prisma.LoyaltyPartnerScalarFieldEnum[] | Prisma.LoyaltyPartnerScalarFieldEnum;
    having?: Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyPartnerCountAggregateInputType | true;
    _avg?: LoyaltyPartnerAvgAggregateInputType;
    _sum?: LoyaltyPartnerSumAggregateInputType;
    _min?: LoyaltyPartnerMinAggregateInputType;
    _max?: LoyaltyPartnerMaxAggregateInputType;
};
export type LoyaltyPartnerGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    category: string;
    discount: string;
    discountByLevel: runtime.JsonValue;
    bonusPoints: number;
    logo: string;
    address: string;
    phone: string;
    website: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LoyaltyPartnerCountAggregateOutputType | null;
    _avg: LoyaltyPartnerAvgAggregateOutputType | null;
    _sum: LoyaltyPartnerSumAggregateOutputType | null;
    _min: LoyaltyPartnerMinAggregateOutputType | null;
    _max: LoyaltyPartnerMaxAggregateOutputType | null;
};
type GetLoyaltyPartnerGroupByPayload<T extends LoyaltyPartnerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyPartnerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyPartnerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyPartnerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyPartnerGroupByOutputType[P]>;
}>>;
export type LoyaltyPartnerWhereInput = {
    AND?: Prisma.LoyaltyPartnerWhereInput | Prisma.LoyaltyPartnerWhereInput[];
    OR?: Prisma.LoyaltyPartnerWhereInput[];
    NOT?: Prisma.LoyaltyPartnerWhereInput | Prisma.LoyaltyPartnerWhereInput[];
    id?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    name?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    description?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    category?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    discount?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    discountByLevel?: Prisma.JsonFilter<"LoyaltyPartner">;
    bonusPoints?: Prisma.IntFilter<"LoyaltyPartner"> | number;
    logo?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    address?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    phone?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    website?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    isActive?: Prisma.BoolFilter<"LoyaltyPartner"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyPartner"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyPartner"> | Date | string;
    spendings?: Prisma.PartnerSpendingListRelationFilter;
};
export type LoyaltyPartnerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    discountByLevel?: Prisma.SortOrder;
    bonusPoints?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    spendings?: Prisma.PartnerSpendingOrderByRelationAggregateInput;
};
export type LoyaltyPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LoyaltyPartnerWhereInput | Prisma.LoyaltyPartnerWhereInput[];
    OR?: Prisma.LoyaltyPartnerWhereInput[];
    NOT?: Prisma.LoyaltyPartnerWhereInput | Prisma.LoyaltyPartnerWhereInput[];
    name?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    description?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    category?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    discount?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    discountByLevel?: Prisma.JsonFilter<"LoyaltyPartner">;
    bonusPoints?: Prisma.IntFilter<"LoyaltyPartner"> | number;
    logo?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    address?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    phone?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    website?: Prisma.StringFilter<"LoyaltyPartner"> | string;
    isActive?: Prisma.BoolFilter<"LoyaltyPartner"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyPartner"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyPartner"> | Date | string;
    spendings?: Prisma.PartnerSpendingListRelationFilter;
}, "id">;
export type LoyaltyPartnerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    discountByLevel?: Prisma.SortOrder;
    bonusPoints?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyPartnerCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyPartnerAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyPartnerMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyPartnerMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyPartnerSumOrderByAggregateInput;
};
export type LoyaltyPartnerScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput | Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput | Prisma.LoyaltyPartnerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    description?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    category?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    discount?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    discountByLevel?: Prisma.JsonWithAggregatesFilter<"LoyaltyPartner">;
    bonusPoints?: Prisma.IntWithAggregatesFilter<"LoyaltyPartner"> | number;
    logo?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    address?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    website?: Prisma.StringWithAggregatesFilter<"LoyaltyPartner"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"LoyaltyPartner"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyPartner"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyPartner"> | Date | string;
};
export type LoyaltyPartnerCreateInput = {
    id?: string;
    name: string;
    description?: string;
    category: string;
    discount: string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: number;
    logo?: string;
    address?: string;
    phone?: string;
    website?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    spendings?: Prisma.PartnerSpendingCreateNestedManyWithoutPartnerInput;
};
export type LoyaltyPartnerUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string;
    category: string;
    discount: string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: number;
    logo?: string;
    address?: string;
    phone?: string;
    website?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    spendings?: Prisma.PartnerSpendingUncheckedCreateNestedManyWithoutPartnerInput;
};
export type LoyaltyPartnerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    spendings?: Prisma.PartnerSpendingUpdateManyWithoutPartnerNestedInput;
};
export type LoyaltyPartnerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    spendings?: Prisma.PartnerSpendingUncheckedUpdateManyWithoutPartnerNestedInput;
};
export type LoyaltyPartnerCreateManyInput = {
    id?: string;
    name: string;
    description?: string;
    category: string;
    discount: string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: number;
    logo?: string;
    address?: string;
    phone?: string;
    website?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyPartnerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPartnerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPartnerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    discountByLevel?: Prisma.SortOrder;
    bonusPoints?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyPartnerAvgOrderByAggregateInput = {
    bonusPoints?: Prisma.SortOrder;
};
export type LoyaltyPartnerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    bonusPoints?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyPartnerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    bonusPoints?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyPartnerSumOrderByAggregateInput = {
    bonusPoints?: Prisma.SortOrder;
};
export type LoyaltyPartnerScalarRelationFilter = {
    is?: Prisma.LoyaltyPartnerWhereInput;
    isNot?: Prisma.LoyaltyPartnerWhereInput;
};
export type LoyaltyPartnerCreateNestedOneWithoutSpendingsInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPartnerCreateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedCreateWithoutSpendingsInput>;
    connectOrCreate?: Prisma.LoyaltyPartnerCreateOrConnectWithoutSpendingsInput;
    connect?: Prisma.LoyaltyPartnerWhereUniqueInput;
};
export type LoyaltyPartnerUpdateOneRequiredWithoutSpendingsNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPartnerCreateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedCreateWithoutSpendingsInput>;
    connectOrCreate?: Prisma.LoyaltyPartnerCreateOrConnectWithoutSpendingsInput;
    upsert?: Prisma.LoyaltyPartnerUpsertWithoutSpendingsInput;
    connect?: Prisma.LoyaltyPartnerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyPartnerUpdateToOneWithWhereWithoutSpendingsInput, Prisma.LoyaltyPartnerUpdateWithoutSpendingsInput>, Prisma.LoyaltyPartnerUncheckedUpdateWithoutSpendingsInput>;
};
export type LoyaltyPartnerCreateWithoutSpendingsInput = {
    id?: string;
    name: string;
    description?: string;
    category: string;
    discount: string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: number;
    logo?: string;
    address?: string;
    phone?: string;
    website?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyPartnerUncheckedCreateWithoutSpendingsInput = {
    id?: string;
    name: string;
    description?: string;
    category: string;
    discount: string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: number;
    logo?: string;
    address?: string;
    phone?: string;
    website?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyPartnerCreateOrConnectWithoutSpendingsInput = {
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyPartnerCreateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedCreateWithoutSpendingsInput>;
};
export type LoyaltyPartnerUpsertWithoutSpendingsInput = {
    update: Prisma.XOR<Prisma.LoyaltyPartnerUpdateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedUpdateWithoutSpendingsInput>;
    create: Prisma.XOR<Prisma.LoyaltyPartnerCreateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedCreateWithoutSpendingsInput>;
    where?: Prisma.LoyaltyPartnerWhereInput;
};
export type LoyaltyPartnerUpdateToOneWithWhereWithoutSpendingsInput = {
    where?: Prisma.LoyaltyPartnerWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyPartnerUpdateWithoutSpendingsInput, Prisma.LoyaltyPartnerUncheckedUpdateWithoutSpendingsInput>;
};
export type LoyaltyPartnerUpdateWithoutSpendingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPartnerUncheckedUpdateWithoutSpendingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.StringFieldUpdateOperationsInput | string;
    discountByLevel?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    bonusPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    logo?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LoyaltyPartnerCountOutputType
 */
export type LoyaltyPartnerCountOutputType = {
    spendings: number;
};
export type LoyaltyPartnerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    spendings?: boolean | LoyaltyPartnerCountOutputTypeCountSpendingsArgs;
};
/**
 * LoyaltyPartnerCountOutputType without action
 */
export type LoyaltyPartnerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartnerCountOutputType
     */
    select?: Prisma.LoyaltyPartnerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LoyaltyPartnerCountOutputType without action
 */
export type LoyaltyPartnerCountOutputTypeCountSpendingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerSpendingWhereInput;
};
export type LoyaltyPartnerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    discount?: boolean;
    discountByLevel?: boolean;
    bonusPoints?: boolean;
    logo?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    spendings?: boolean | Prisma.LoyaltyPartner$spendingsArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyPartnerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyPartner"]>;
export type LoyaltyPartnerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    discount?: boolean;
    discountByLevel?: boolean;
    bonusPoints?: boolean;
    logo?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyPartner"]>;
export type LoyaltyPartnerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    discount?: boolean;
    discountByLevel?: boolean;
    bonusPoints?: boolean;
    logo?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyPartner"]>;
export type LoyaltyPartnerSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    discount?: boolean;
    discountByLevel?: boolean;
    bonusPoints?: boolean;
    logo?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LoyaltyPartnerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "category" | "discount" | "discountByLevel" | "bonusPoints" | "logo" | "address" | "phone" | "website" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["loyaltyPartner"]>;
export type LoyaltyPartnerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    spendings?: boolean | Prisma.LoyaltyPartner$spendingsArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyPartnerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LoyaltyPartnerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LoyaltyPartnerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LoyaltyPartnerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyPartner";
    objects: {
        spendings: Prisma.$PartnerSpendingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        category: string;
        discount: string;
        discountByLevel: runtime.JsonValue;
        bonusPoints: number;
        logo: string;
        address: string;
        phone: string;
        website: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["loyaltyPartner"]>;
    composites: {};
};
export type LoyaltyPartnerGetPayload<S extends boolean | null | undefined | LoyaltyPartnerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload, S>;
export type LoyaltyPartnerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyPartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyPartnerCountAggregateInputType | true;
};
export interface LoyaltyPartnerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyPartner'];
        meta: {
            name: 'LoyaltyPartner';
        };
    };
    /**
     * Find zero or one LoyaltyPartner that matches the filter.
     * @param {LoyaltyPartnerFindUniqueArgs} args - Arguments to find a LoyaltyPartner
     * @example
     * // Get one LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyPartnerFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LoyaltyPartner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoyaltyPartnerFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyPartner
     * @example
     * // Get one LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyPartnerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerFindFirstArgs} args - Arguments to find a LoyaltyPartner
     * @example
     * // Get one LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyPartnerFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LoyaltyPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerFindFirstOrThrowArgs} args - Arguments to find a LoyaltyPartner
     * @example
     * // Get one LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyPartnerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LoyaltyPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyPartners
     * const loyaltyPartners = await prisma.loyaltyPartner.findMany()
     *
     * // Get first 10 LoyaltyPartners
     * const loyaltyPartners = await prisma.loyaltyPartner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loyaltyPartnerWithIdOnly = await prisma.loyaltyPartner.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LoyaltyPartnerFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LoyaltyPartner.
     * @param {LoyaltyPartnerCreateArgs} args - Arguments to create a LoyaltyPartner.
     * @example
     * // Create one LoyaltyPartner
     * const LoyaltyPartner = await prisma.loyaltyPartner.create({
     *   data: {
     *     // ... data to create a LoyaltyPartner
     *   }
     * })
     *
     */
    create<T extends LoyaltyPartnerCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LoyaltyPartners.
     * @param {LoyaltyPartnerCreateManyArgs} args - Arguments to create many LoyaltyPartners.
     * @example
     * // Create many LoyaltyPartners
     * const loyaltyPartner = await prisma.loyaltyPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LoyaltyPartnerCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LoyaltyPartners and returns the data saved in the database.
     * @param {LoyaltyPartnerCreateManyAndReturnArgs} args - Arguments to create many LoyaltyPartners.
     * @example
     * // Create many LoyaltyPartners
     * const loyaltyPartner = await prisma.loyaltyPartner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LoyaltyPartners and only return the `id`
     * const loyaltyPartnerWithIdOnly = await prisma.loyaltyPartner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LoyaltyPartnerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LoyaltyPartner.
     * @param {LoyaltyPartnerDeleteArgs} args - Arguments to delete one LoyaltyPartner.
     * @example
     * // Delete one LoyaltyPartner
     * const LoyaltyPartner = await prisma.loyaltyPartner.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyPartner
     *   }
     * })
     *
     */
    delete<T extends LoyaltyPartnerDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LoyaltyPartner.
     * @param {LoyaltyPartnerUpdateArgs} args - Arguments to update one LoyaltyPartner.
     * @example
     * // Update one LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LoyaltyPartnerUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LoyaltyPartners.
     * @param {LoyaltyPartnerDeleteManyArgs} args - Arguments to filter LoyaltyPartners to delete.
     * @example
     * // Delete a few LoyaltyPartners
     * const { count } = await prisma.loyaltyPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LoyaltyPartnerDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyPartners
     * const loyaltyPartner = await prisma.loyaltyPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LoyaltyPartnerUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LoyaltyPartners and returns the data updated in the database.
     * @param {LoyaltyPartnerUpdateManyAndReturnArgs} args - Arguments to update many LoyaltyPartners.
     * @example
     * // Update many LoyaltyPartners
     * const loyaltyPartner = await prisma.loyaltyPartner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LoyaltyPartners and only return the `id`
     * const loyaltyPartnerWithIdOnly = await prisma.loyaltyPartner.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoyaltyPartnerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LoyaltyPartner.
     * @param {LoyaltyPartnerUpsertArgs} args - Arguments to update or create a LoyaltyPartner.
     * @example
     * // Update or create a LoyaltyPartner
     * const loyaltyPartner = await prisma.loyaltyPartner.upsert({
     *   create: {
     *     // ... data to create a LoyaltyPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyPartner we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyPartnerUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyPartnerUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPartnerClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LoyaltyPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerCountArgs} args - Arguments to filter LoyaltyPartners to count.
     * @example
     * // Count the number of LoyaltyPartners
     * const count = await prisma.loyaltyPartner.count({
     *   where: {
     *     // ... the filter for the LoyaltyPartners we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyPartnerCountArgs>(args?: Prisma.Subset<T, LoyaltyPartnerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyPartnerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LoyaltyPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyPartnerAggregateArgs>(args: Prisma.Subset<T, LoyaltyPartnerAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyPartnerAggregateType<T>>;
    /**
     * Group by LoyaltyPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyPartnerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LoyaltyPartnerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyPartnerGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyPartnerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LoyaltyPartner model
     */
    readonly fields: LoyaltyPartnerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LoyaltyPartner.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LoyaltyPartnerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    spendings<T extends Prisma.LoyaltyPartner$spendingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyPartner$spendingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerSpendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LoyaltyPartner model
 */
export interface LoyaltyPartnerFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly name: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly description: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly category: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly discount: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly discountByLevel: Prisma.FieldRef<"LoyaltyPartner", 'Json'>;
    readonly bonusPoints: Prisma.FieldRef<"LoyaltyPartner", 'Int'>;
    readonly logo: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly address: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly phone: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly website: Prisma.FieldRef<"LoyaltyPartner", 'String'>;
    readonly isActive: Prisma.FieldRef<"LoyaltyPartner", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyPartner", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LoyaltyPartner", 'DateTime'>;
}
/**
 * LoyaltyPartner findUnique
 */
export type LoyaltyPartnerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyPartner to fetch.
     */
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
};
/**
 * LoyaltyPartner findUniqueOrThrow
 */
export type LoyaltyPartnerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyPartner to fetch.
     */
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
};
/**
 * LoyaltyPartner findFirst
 */
export type LoyaltyPartnerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyPartner to fetch.
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyPartners to fetch.
     */
    orderBy?: Prisma.LoyaltyPartnerOrderByWithRelationInput | Prisma.LoyaltyPartnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyPartners.
     */
    cursor?: Prisma.LoyaltyPartnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyPartners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyPartners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyPartners.
     */
    distinct?: Prisma.LoyaltyPartnerScalarFieldEnum | Prisma.LoyaltyPartnerScalarFieldEnum[];
};
/**
 * LoyaltyPartner findFirstOrThrow
 */
export type LoyaltyPartnerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyPartner to fetch.
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyPartners to fetch.
     */
    orderBy?: Prisma.LoyaltyPartnerOrderByWithRelationInput | Prisma.LoyaltyPartnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LoyaltyPartners.
     */
    cursor?: Prisma.LoyaltyPartnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyPartners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyPartners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LoyaltyPartners.
     */
    distinct?: Prisma.LoyaltyPartnerScalarFieldEnum | Prisma.LoyaltyPartnerScalarFieldEnum[];
};
/**
 * LoyaltyPartner findMany
 */
export type LoyaltyPartnerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter, which LoyaltyPartners to fetch.
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LoyaltyPartners to fetch.
     */
    orderBy?: Prisma.LoyaltyPartnerOrderByWithRelationInput | Prisma.LoyaltyPartnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LoyaltyPartners.
     */
    cursor?: Prisma.LoyaltyPartnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LoyaltyPartners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LoyaltyPartners.
     */
    skip?: number;
    distinct?: Prisma.LoyaltyPartnerScalarFieldEnum | Prisma.LoyaltyPartnerScalarFieldEnum[];
};
/**
 * LoyaltyPartner create
 */
export type LoyaltyPartnerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * The data needed to create a LoyaltyPartner.
     */
    data: Prisma.XOR<Prisma.LoyaltyPartnerCreateInput, Prisma.LoyaltyPartnerUncheckedCreateInput>;
};
/**
 * LoyaltyPartner createMany
 */
export type LoyaltyPartnerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyPartners.
     */
    data: Prisma.LoyaltyPartnerCreateManyInput | Prisma.LoyaltyPartnerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyPartner createManyAndReturn
 */
export type LoyaltyPartnerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * The data used to create many LoyaltyPartners.
     */
    data: Prisma.LoyaltyPartnerCreateManyInput | Prisma.LoyaltyPartnerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LoyaltyPartner update
 */
export type LoyaltyPartnerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * The data needed to update a LoyaltyPartner.
     */
    data: Prisma.XOR<Prisma.LoyaltyPartnerUpdateInput, Prisma.LoyaltyPartnerUncheckedUpdateInput>;
    /**
     * Choose, which LoyaltyPartner to update.
     */
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
};
/**
 * LoyaltyPartner updateMany
 */
export type LoyaltyPartnerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyPartners.
     */
    data: Prisma.XOR<Prisma.LoyaltyPartnerUpdateManyMutationInput, Prisma.LoyaltyPartnerUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyPartners to update
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * Limit how many LoyaltyPartners to update.
     */
    limit?: number;
};
/**
 * LoyaltyPartner updateManyAndReturn
 */
export type LoyaltyPartnerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * The data used to update LoyaltyPartners.
     */
    data: Prisma.XOR<Prisma.LoyaltyPartnerUpdateManyMutationInput, Prisma.LoyaltyPartnerUncheckedUpdateManyInput>;
    /**
     * Filter which LoyaltyPartners to update
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * Limit how many LoyaltyPartners to update.
     */
    limit?: number;
};
/**
 * LoyaltyPartner upsert
 */
export type LoyaltyPartnerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * The filter to search for the LoyaltyPartner to update in case it exists.
     */
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
    /**
     * In case the LoyaltyPartner found by the `where` argument doesn't exist, create a new LoyaltyPartner with this data.
     */
    create: Prisma.XOR<Prisma.LoyaltyPartnerCreateInput, Prisma.LoyaltyPartnerUncheckedCreateInput>;
    /**
     * In case the LoyaltyPartner was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LoyaltyPartnerUpdateInput, Prisma.LoyaltyPartnerUncheckedUpdateInput>;
};
/**
 * LoyaltyPartner delete
 */
export type LoyaltyPartnerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
    /**
     * Filter which LoyaltyPartner to delete.
     */
    where: Prisma.LoyaltyPartnerWhereUniqueInput;
};
/**
 * LoyaltyPartner deleteMany
 */
export type LoyaltyPartnerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyPartners to delete
     */
    where?: Prisma.LoyaltyPartnerWhereInput;
    /**
     * Limit how many LoyaltyPartners to delete.
     */
    limit?: number;
};
/**
 * LoyaltyPartner.spendings
 */
export type LoyaltyPartner$spendingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerSpending
     */
    select?: Prisma.PartnerSpendingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartnerSpending
     */
    omit?: Prisma.PartnerSpendingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartnerSpendingInclude<ExtArgs> | null;
    where?: Prisma.PartnerSpendingWhereInput;
    orderBy?: Prisma.PartnerSpendingOrderByWithRelationInput | Prisma.PartnerSpendingOrderByWithRelationInput[];
    cursor?: Prisma.PartnerSpendingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerSpendingScalarFieldEnum | Prisma.PartnerSpendingScalarFieldEnum[];
};
/**
 * LoyaltyPartner without action
 */
export type LoyaltyPartnerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPartner
     */
    select?: Prisma.LoyaltyPartnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPartner
     */
    omit?: Prisma.LoyaltyPartnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPartnerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LoyaltyPartner.d.ts.map