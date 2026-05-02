import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    interests: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    interests: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    passwordHash: number;
    role: number;
    interests: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    passwordHash: string;
    role: $Enums.Role;
    interests: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    interests?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    events?: Prisma.EventListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
    favorites?: Prisma.UserFavoriteListRelationFilter;
    deals?: Prisma.DealListRelationFilter;
    leisureItems?: Prisma.LeisureItemListRelationFilter;
    leisureFavorites?: Prisma.LeisureFavoriteListRelationFilter;
    blogPosts?: Prisma.BlogPostListRelationFilter;
    featuredRequests?: Prisma.FeaturedRequestListRelationFilter;
    assignedEvents?: Prisma.EventControllerListRelationFilter;
    scannedTickets?: Prisma.TicketListRelationFilter;
    wallet?: Prisma.XOR<Prisma.WalletNullableScalarRelationFilter, Prisma.WalletWhereInput> | null;
    organizerTransactions?: Prisma.TransactionListRelationFilter;
    buyerTransactions?: Prisma.TransactionListRelationFilter;
    organizerPayouts?: Prisma.PayoutListRelationFilter;
    approvedPayouts?: Prisma.PayoutListRelationFilter;
    processedPayouts?: Prisma.PayoutListRelationFilter;
    loyaltyProfile?: Prisma.XOR<Prisma.LoyaltyProfileNullableScalarRelationFilter, Prisma.LoyaltyProfileWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    events?: Prisma.EventOrderByRelationAggregateInput;
    tickets?: Prisma.TicketOrderByRelationAggregateInput;
    favorites?: Prisma.UserFavoriteOrderByRelationAggregateInput;
    deals?: Prisma.DealOrderByRelationAggregateInput;
    leisureItems?: Prisma.LeisureItemOrderByRelationAggregateInput;
    leisureFavorites?: Prisma.LeisureFavoriteOrderByRelationAggregateInput;
    blogPosts?: Prisma.BlogPostOrderByRelationAggregateInput;
    featuredRequests?: Prisma.FeaturedRequestOrderByRelationAggregateInput;
    assignedEvents?: Prisma.EventControllerOrderByRelationAggregateInput;
    scannedTickets?: Prisma.TicketOrderByRelationAggregateInput;
    wallet?: Prisma.WalletOrderByWithRelationInput;
    organizerTransactions?: Prisma.TransactionOrderByRelationAggregateInput;
    buyerTransactions?: Prisma.TransactionOrderByRelationAggregateInput;
    organizerPayouts?: Prisma.PayoutOrderByRelationAggregateInput;
    approvedPayouts?: Prisma.PayoutOrderByRelationAggregateInput;
    processedPayouts?: Prisma.PayoutOrderByRelationAggregateInput;
    loyaltyProfile?: Prisma.LoyaltyProfileOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    interests?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    events?: Prisma.EventListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
    favorites?: Prisma.UserFavoriteListRelationFilter;
    deals?: Prisma.DealListRelationFilter;
    leisureItems?: Prisma.LeisureItemListRelationFilter;
    leisureFavorites?: Prisma.LeisureFavoriteListRelationFilter;
    blogPosts?: Prisma.BlogPostListRelationFilter;
    featuredRequests?: Prisma.FeaturedRequestListRelationFilter;
    assignedEvents?: Prisma.EventControllerListRelationFilter;
    scannedTickets?: Prisma.TicketListRelationFilter;
    wallet?: Prisma.XOR<Prisma.WalletNullableScalarRelationFilter, Prisma.WalletWhereInput> | null;
    organizerTransactions?: Prisma.TransactionListRelationFilter;
    buyerTransactions?: Prisma.TransactionListRelationFilter;
    organizerPayouts?: Prisma.PayoutListRelationFilter;
    approvedPayouts?: Prisma.PayoutListRelationFilter;
    processedPayouts?: Prisma.PayoutListRelationFilter;
    loyaltyProfile?: Prisma.XOR<Prisma.LoyaltyProfileNullableScalarRelationFilter, Prisma.LoyaltyProfileWhereInput> | null;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    interests?: Prisma.StringWithAggregatesFilter<"User"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.UserUpsertWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFavoritesInput, Prisma.UserUpdateWithoutFavoritesInput>, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.UserUpsertWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventsInput, Prisma.UserUpdateWithoutEventsInput>, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserCreateNestedOneWithoutFeaturedRequestsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFeaturedRequestsInput, Prisma.UserUncheckedCreateWithoutFeaturedRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFeaturedRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFeaturedRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFeaturedRequestsInput, Prisma.UserUncheckedCreateWithoutFeaturedRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFeaturedRequestsInput;
    upsert?: Prisma.UserUpsertWithoutFeaturedRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFeaturedRequestsInput, Prisma.UserUpdateWithoutFeaturedRequestsInput>, Prisma.UserUncheckedUpdateWithoutFeaturedRequestsInput>;
};
export type UserCreateNestedOneWithoutDealsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDealsInput, Prisma.UserUncheckedCreateWithoutDealsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDealsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDealsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDealsInput, Prisma.UserUncheckedCreateWithoutDealsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDealsInput;
    upsert?: Prisma.UserUpsertWithoutDealsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDealsInput, Prisma.UserUpdateWithoutDealsInput>, Prisma.UserUncheckedUpdateWithoutDealsInput>;
};
export type UserCreateNestedOneWithoutLeisureItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeisureItemsInput, Prisma.UserUncheckedCreateWithoutLeisureItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeisureItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLeisureItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeisureItemsInput, Prisma.UserUncheckedCreateWithoutLeisureItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeisureItemsInput;
    upsert?: Prisma.UserUpsertWithoutLeisureItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLeisureItemsInput, Prisma.UserUpdateWithoutLeisureItemsInput>, Prisma.UserUncheckedUpdateWithoutLeisureItemsInput>;
};
export type UserCreateNestedOneWithoutLeisureFavoritesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeisureFavoritesInput, Prisma.UserUncheckedCreateWithoutLeisureFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeisureFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLeisureFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeisureFavoritesInput, Prisma.UserUncheckedCreateWithoutLeisureFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeisureFavoritesInput;
    upsert?: Prisma.UserUpsertWithoutLeisureFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLeisureFavoritesInput, Prisma.UserUpdateWithoutLeisureFavoritesInput>, Prisma.UserUncheckedUpdateWithoutLeisureFavoritesInput>;
};
export type UserCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutScannedTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutScannedTicketsInput, Prisma.UserUncheckedCreateWithoutScannedTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutScannedTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.UserUpsertWithoutTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput, Prisma.UserUpdateWithoutTicketsInput>, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
};
export type UserUpdateOneWithoutScannedTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutScannedTicketsInput, Prisma.UserUncheckedCreateWithoutScannedTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutScannedTicketsInput;
    upsert?: Prisma.UserUpsertWithoutScannedTicketsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutScannedTicketsInput, Prisma.UserUpdateWithoutScannedTicketsInput>, Prisma.UserUncheckedUpdateWithoutScannedTicketsInput>;
};
export type UserCreateNestedOneWithoutAssignedEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedEventsInput, Prisma.UserUncheckedCreateWithoutAssignedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAssignedEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedEventsInput, Prisma.UserUncheckedCreateWithoutAssignedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedEventsInput;
    upsert?: Prisma.UserUpsertWithoutAssignedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignedEventsInput, Prisma.UserUpdateWithoutAssignedEventsInput>, Prisma.UserUncheckedUpdateWithoutAssignedEventsInput>;
};
export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlogPostsInput, Prisma.UserUncheckedCreateWithoutBlogPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlogPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBlogPostsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlogPostsInput, Prisma.UserUncheckedCreateWithoutBlogPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlogPostsInput;
    upsert?: Prisma.UserUpsertWithoutBlogPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBlogPostsInput, Prisma.UserUpdateWithoutBlogPostsInput>, Prisma.UserUncheckedUpdateWithoutBlogPostsInput>;
};
export type UserCreateNestedOneWithoutOrganizerTransactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedCreateWithoutOrganizerTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizerTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutBuyerTransactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBuyerTransactionsInput, Prisma.UserUncheckedCreateWithoutBuyerTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBuyerTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedCreateWithoutOrganizerTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizerTransactionsInput;
    upsert?: Prisma.UserUpsertWithoutOrganizerTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrganizerTransactionsInput, Prisma.UserUpdateWithoutOrganizerTransactionsInput>, Prisma.UserUncheckedUpdateWithoutOrganizerTransactionsInput>;
};
export type UserUpdateOneRequiredWithoutBuyerTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBuyerTransactionsInput, Prisma.UserUncheckedCreateWithoutBuyerTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBuyerTransactionsInput;
    upsert?: Prisma.UserUpsertWithoutBuyerTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBuyerTransactionsInput, Prisma.UserUpdateWithoutBuyerTransactionsInput>, Prisma.UserUncheckedUpdateWithoutBuyerTransactionsInput>;
};
export type UserCreateNestedOneWithoutWalletInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWalletInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWalletInput;
    upsert?: Prisma.UserUpsertWithoutWalletInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWalletInput, Prisma.UserUpdateWithoutWalletInput>, Prisma.UserUncheckedUpdateWithoutWalletInput>;
};
export type UserCreateNestedOneWithoutOrganizerPayoutsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedCreateWithoutOrganizerPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizerPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutApprovedPayoutsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovedPayoutsInput, Prisma.UserUncheckedCreateWithoutApprovedPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovedPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutProcessedPayoutsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProcessedPayoutsInput, Prisma.UserUncheckedCreateWithoutProcessedPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProcessedPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrganizerPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedCreateWithoutOrganizerPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizerPayoutsInput;
    upsert?: Prisma.UserUpsertWithoutOrganizerPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrganizerPayoutsInput, Prisma.UserUpdateWithoutOrganizerPayoutsInput>, Prisma.UserUncheckedUpdateWithoutOrganizerPayoutsInput>;
};
export type UserUpdateOneWithoutApprovedPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovedPayoutsInput, Prisma.UserUncheckedCreateWithoutApprovedPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovedPayoutsInput;
    upsert?: Prisma.UserUpsertWithoutApprovedPayoutsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutApprovedPayoutsInput, Prisma.UserUpdateWithoutApprovedPayoutsInput>, Prisma.UserUncheckedUpdateWithoutApprovedPayoutsInput>;
};
export type UserUpdateOneWithoutProcessedPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProcessedPayoutsInput, Prisma.UserUncheckedCreateWithoutProcessedPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProcessedPayoutsInput;
    upsert?: Prisma.UserUpsertWithoutProcessedPayoutsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProcessedPayoutsInput, Prisma.UserUpdateWithoutProcessedPayoutsInput>, Prisma.UserUncheckedUpdateWithoutProcessedPayoutsInput>;
};
export type UserCreateNestedOneWithoutLoyaltyProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyaltyProfileInput, Prisma.UserUncheckedCreateWithoutLoyaltyProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyaltyProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLoyaltyProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyaltyProfileInput, Prisma.UserUncheckedCreateWithoutLoyaltyProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyaltyProfileInput;
    upsert?: Prisma.UserUpsertWithoutLoyaltyProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoyaltyProfileInput, Prisma.UserUpdateWithoutLoyaltyProfileInput>, Prisma.UserUncheckedUpdateWithoutLoyaltyProfileInput>;
};
export type UserCreateWithoutFavoritesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
};
export type UserUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
};
export type UserUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutFeaturedRequestsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutFeaturedRequestsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutFeaturedRequestsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFeaturedRequestsInput, Prisma.UserUncheckedCreateWithoutFeaturedRequestsInput>;
};
export type UserUpsertWithoutFeaturedRequestsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFeaturedRequestsInput, Prisma.UserUncheckedUpdateWithoutFeaturedRequestsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFeaturedRequestsInput, Prisma.UserUncheckedCreateWithoutFeaturedRequestsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFeaturedRequestsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFeaturedRequestsInput, Prisma.UserUncheckedUpdateWithoutFeaturedRequestsInput>;
};
export type UserUpdateWithoutFeaturedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFeaturedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutDealsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutDealsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutDealsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDealsInput, Prisma.UserUncheckedCreateWithoutDealsInput>;
};
export type UserUpsertWithoutDealsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDealsInput, Prisma.UserUncheckedUpdateWithoutDealsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDealsInput, Prisma.UserUncheckedCreateWithoutDealsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDealsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDealsInput, Prisma.UserUncheckedUpdateWithoutDealsInput>;
};
export type UserUpdateWithoutDealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutLeisureItemsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutLeisureItemsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutLeisureItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeisureItemsInput, Prisma.UserUncheckedCreateWithoutLeisureItemsInput>;
};
export type UserUpsertWithoutLeisureItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLeisureItemsInput, Prisma.UserUncheckedUpdateWithoutLeisureItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeisureItemsInput, Prisma.UserUncheckedCreateWithoutLeisureItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLeisureItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLeisureItemsInput, Prisma.UserUncheckedUpdateWithoutLeisureItemsInput>;
};
export type UserUpdateWithoutLeisureItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLeisureItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutLeisureFavoritesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutLeisureFavoritesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutLeisureFavoritesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeisureFavoritesInput, Prisma.UserUncheckedCreateWithoutLeisureFavoritesInput>;
};
export type UserUpsertWithoutLeisureFavoritesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLeisureFavoritesInput, Prisma.UserUncheckedUpdateWithoutLeisureFavoritesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeisureFavoritesInput, Prisma.UserUncheckedCreateWithoutLeisureFavoritesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLeisureFavoritesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLeisureFavoritesInput, Prisma.UserUncheckedUpdateWithoutLeisureFavoritesInput>;
};
export type UserUpdateWithoutLeisureFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLeisureFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutTicketsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
};
export type UserCreateWithoutScannedTicketsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutScannedTicketsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutScannedTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutScannedTicketsInput, Prisma.UserUncheckedCreateWithoutScannedTicketsInput>;
};
export type UserUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTicketsInput, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTicketsInput, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
};
export type UserUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutScannedTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutScannedTicketsInput, Prisma.UserUncheckedUpdateWithoutScannedTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutScannedTicketsInput, Prisma.UserUncheckedCreateWithoutScannedTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutScannedTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutScannedTicketsInput, Prisma.UserUncheckedUpdateWithoutScannedTicketsInput>;
};
export type UserUpdateWithoutScannedTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutScannedTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutAssignedEventsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutAssignedEventsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutAssignedEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedEventsInput, Prisma.UserUncheckedCreateWithoutAssignedEventsInput>;
};
export type UserUpsertWithoutAssignedEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignedEventsInput, Prisma.UserUncheckedUpdateWithoutAssignedEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedEventsInput, Prisma.UserUncheckedCreateWithoutAssignedEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignedEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignedEventsInput, Prisma.UserUncheckedUpdateWithoutAssignedEventsInput>;
};
export type UserUpdateWithoutAssignedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAssignedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutBlogPostsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutBlogPostsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutBlogPostsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlogPostsInput, Prisma.UserUncheckedCreateWithoutBlogPostsInput>;
};
export type UserUpsertWithoutBlogPostsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBlogPostsInput, Prisma.UserUncheckedUpdateWithoutBlogPostsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlogPostsInput, Prisma.UserUncheckedCreateWithoutBlogPostsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBlogPostsInput, Prisma.UserUncheckedUpdateWithoutBlogPostsInput>;
};
export type UserUpdateWithoutBlogPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBlogPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutOrganizerTransactionsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrganizerTransactionsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrganizerTransactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedCreateWithoutOrganizerTransactionsInput>;
};
export type UserCreateWithoutBuyerTransactionsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutBuyerTransactionsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutBuyerTransactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBuyerTransactionsInput, Prisma.UserUncheckedCreateWithoutBuyerTransactionsInput>;
};
export type UserUpsertWithoutOrganizerTransactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedUpdateWithoutOrganizerTransactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedCreateWithoutOrganizerTransactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrganizerTransactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrganizerTransactionsInput, Prisma.UserUncheckedUpdateWithoutOrganizerTransactionsInput>;
};
export type UserUpdateWithoutOrganizerTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrganizerTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutBuyerTransactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBuyerTransactionsInput, Prisma.UserUncheckedUpdateWithoutBuyerTransactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBuyerTransactionsInput, Prisma.UserUncheckedCreateWithoutBuyerTransactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBuyerTransactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBuyerTransactionsInput, Prisma.UserUncheckedUpdateWithoutBuyerTransactionsInput>;
};
export type UserUpdateWithoutBuyerTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBuyerTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutWalletInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutWalletInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutWalletInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
};
export type UserUpsertWithoutWalletInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWalletInput, Prisma.UserUncheckedUpdateWithoutWalletInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWalletInput, Prisma.UserUncheckedUpdateWithoutWalletInput>;
};
export type UserUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutOrganizerPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrganizerPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrganizerPayoutsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedCreateWithoutOrganizerPayoutsInput>;
};
export type UserCreateWithoutApprovedPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutApprovedPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutApprovedPayoutsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovedPayoutsInput, Prisma.UserUncheckedCreateWithoutApprovedPayoutsInput>;
};
export type UserCreateWithoutProcessedPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutProcessedPayoutsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutProcessedPayoutsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProcessedPayoutsInput, Prisma.UserUncheckedCreateWithoutProcessedPayoutsInput>;
};
export type UserUpsertWithoutOrganizerPayoutsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedUpdateWithoutOrganizerPayoutsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedCreateWithoutOrganizerPayoutsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrganizerPayoutsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrganizerPayoutsInput, Prisma.UserUncheckedUpdateWithoutOrganizerPayoutsInput>;
};
export type UserUpdateWithoutOrganizerPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrganizerPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutApprovedPayoutsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutApprovedPayoutsInput, Prisma.UserUncheckedUpdateWithoutApprovedPayoutsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovedPayoutsInput, Prisma.UserUncheckedCreateWithoutApprovedPayoutsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutApprovedPayoutsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutApprovedPayoutsInput, Prisma.UserUncheckedUpdateWithoutApprovedPayoutsInput>;
};
export type UserUpdateWithoutApprovedPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutApprovedPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutProcessedPayoutsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProcessedPayoutsInput, Prisma.UserUncheckedUpdateWithoutProcessedPayoutsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProcessedPayoutsInput, Prisma.UserUncheckedCreateWithoutProcessedPayoutsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProcessedPayoutsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProcessedPayoutsInput, Prisma.UserUncheckedUpdateWithoutProcessedPayoutsInput>;
};
export type UserUpdateWithoutProcessedPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProcessedPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    loyaltyProfile?: Prisma.LoyaltyProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutLoyaltyProfileInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutCreateNestedManyWithoutProcessedByInput;
};
export type UserUncheckedCreateWithoutLoyaltyProfileInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    interests?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
    favorites?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
    deals?: Prisma.DealUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureItems?: Prisma.LeisureItemUncheckedCreateNestedManyWithoutCreatedByInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedCreateNestedManyWithoutUserInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutAuthorInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutOrganizerInput;
    assignedEvents?: Prisma.EventControllerUncheckedCreateNestedManyWithoutControllerInput;
    scannedTickets?: Prisma.TicketUncheckedCreateNestedManyWithoutScannedByInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutOrganizerInput;
    organizerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutOrganizerInput;
    buyerTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutBuyerInput;
    organizerPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutOrganizerInput;
    approvedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutApprovedByInput;
    processedPayouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutProcessedByInput;
};
export type UserCreateOrConnectWithoutLoyaltyProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyaltyProfileInput, Prisma.UserUncheckedCreateWithoutLoyaltyProfileInput>;
};
export type UserUpsertWithoutLoyaltyProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoyaltyProfileInput, Prisma.UserUncheckedUpdateWithoutLoyaltyProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyaltyProfileInput, Prisma.UserUncheckedCreateWithoutLoyaltyProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoyaltyProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoyaltyProfileInput, Prisma.UserUncheckedUpdateWithoutLoyaltyProfileInput>;
};
export type UserUpdateWithoutLoyaltyProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUpdateManyWithoutProcessedByNestedInput;
};
export type UserUncheckedUpdateWithoutLoyaltyProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    interests?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutOrganizerNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: Prisma.UserFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    deals?: Prisma.DealUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureItems?: Prisma.LeisureItemUncheckedUpdateManyWithoutCreatedByNestedInput;
    leisureFavorites?: Prisma.LeisureFavoriteUncheckedUpdateManyWithoutUserNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutAuthorNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutOrganizerNestedInput;
    assignedEvents?: Prisma.EventControllerUncheckedUpdateManyWithoutControllerNestedInput;
    scannedTickets?: Prisma.TicketUncheckedUpdateManyWithoutScannedByNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutOrganizerNestedInput;
    organizerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutOrganizerNestedInput;
    buyerTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutBuyerNestedInput;
    organizerPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutOrganizerNestedInput;
    approvedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutApprovedByNestedInput;
    processedPayouts?: Prisma.PayoutUncheckedUpdateManyWithoutProcessedByNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    events: number;
    tickets: number;
    favorites: number;
    deals: number;
    leisureItems: number;
    leisureFavorites: number;
    blogPosts: number;
    featuredRequests: number;
    assignedEvents: number;
    scannedTickets: number;
    organizerTransactions: number;
    buyerTransactions: number;
    organizerPayouts: number;
    approvedPayouts: number;
    processedPayouts: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs;
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs;
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs;
    deals?: boolean | UserCountOutputTypeCountDealsArgs;
    leisureItems?: boolean | UserCountOutputTypeCountLeisureItemsArgs;
    leisureFavorites?: boolean | UserCountOutputTypeCountLeisureFavoritesArgs;
    blogPosts?: boolean | UserCountOutputTypeCountBlogPostsArgs;
    featuredRequests?: boolean | UserCountOutputTypeCountFeaturedRequestsArgs;
    assignedEvents?: boolean | UserCountOutputTypeCountAssignedEventsArgs;
    scannedTickets?: boolean | UserCountOutputTypeCountScannedTicketsArgs;
    organizerTransactions?: boolean | UserCountOutputTypeCountOrganizerTransactionsArgs;
    buyerTransactions?: boolean | UserCountOutputTypeCountBuyerTransactionsArgs;
    organizerPayouts?: boolean | UserCountOutputTypeCountOrganizerPayoutsArgs;
    approvedPayouts?: boolean | UserCountOutputTypeCountApprovedPayoutsArgs;
    processedPayouts?: boolean | UserCountOutputTypeCountProcessedPayoutsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserFavoriteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountDealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DealWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLeisureItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureItemWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLeisureFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeisureFavoriteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBlogPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFeaturedRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeaturedRequestWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAssignedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventControllerWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountScannedTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrganizerTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBuyerTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrganizerPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountApprovedPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProcessedPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    tickets?: boolean | Prisma.User$ticketsArgs<ExtArgs>;
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    deals?: boolean | Prisma.User$dealsArgs<ExtArgs>;
    leisureItems?: boolean | Prisma.User$leisureItemsArgs<ExtArgs>;
    leisureFavorites?: boolean | Prisma.User$leisureFavoritesArgs<ExtArgs>;
    blogPosts?: boolean | Prisma.User$blogPostsArgs<ExtArgs>;
    featuredRequests?: boolean | Prisma.User$featuredRequestsArgs<ExtArgs>;
    assignedEvents?: boolean | Prisma.User$assignedEventsArgs<ExtArgs>;
    scannedTickets?: boolean | Prisma.User$scannedTicketsArgs<ExtArgs>;
    wallet?: boolean | Prisma.User$walletArgs<ExtArgs>;
    organizerTransactions?: boolean | Prisma.User$organizerTransactionsArgs<ExtArgs>;
    buyerTransactions?: boolean | Prisma.User$buyerTransactionsArgs<ExtArgs>;
    organizerPayouts?: boolean | Prisma.User$organizerPayoutsArgs<ExtArgs>;
    approvedPayouts?: boolean | Prisma.User$approvedPayoutsArgs<ExtArgs>;
    processedPayouts?: boolean | Prisma.User$processedPayoutsArgs<ExtArgs>;
    loyaltyProfile?: boolean | Prisma.User$loyaltyProfileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "role" | "interests" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    tickets?: boolean | Prisma.User$ticketsArgs<ExtArgs>;
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    deals?: boolean | Prisma.User$dealsArgs<ExtArgs>;
    leisureItems?: boolean | Prisma.User$leisureItemsArgs<ExtArgs>;
    leisureFavorites?: boolean | Prisma.User$leisureFavoritesArgs<ExtArgs>;
    blogPosts?: boolean | Prisma.User$blogPostsArgs<ExtArgs>;
    featuredRequests?: boolean | Prisma.User$featuredRequestsArgs<ExtArgs>;
    assignedEvents?: boolean | Prisma.User$assignedEventsArgs<ExtArgs>;
    scannedTickets?: boolean | Prisma.User$scannedTicketsArgs<ExtArgs>;
    wallet?: boolean | Prisma.User$walletArgs<ExtArgs>;
    organizerTransactions?: boolean | Prisma.User$organizerTransactionsArgs<ExtArgs>;
    buyerTransactions?: boolean | Prisma.User$buyerTransactionsArgs<ExtArgs>;
    organizerPayouts?: boolean | Prisma.User$organizerPayoutsArgs<ExtArgs>;
    approvedPayouts?: boolean | Prisma.User$approvedPayoutsArgs<ExtArgs>;
    processedPayouts?: boolean | Prisma.User$processedPayoutsArgs<ExtArgs>;
    loyaltyProfile?: boolean | Prisma.User$loyaltyProfileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        events: Prisma.$EventPayload<ExtArgs>[];
        tickets: Prisma.$TicketPayload<ExtArgs>[];
        favorites: Prisma.$UserFavoritePayload<ExtArgs>[];
        deals: Prisma.$DealPayload<ExtArgs>[];
        leisureItems: Prisma.$LeisureItemPayload<ExtArgs>[];
        leisureFavorites: Prisma.$LeisureFavoritePayload<ExtArgs>[];
        blogPosts: Prisma.$BlogPostPayload<ExtArgs>[];
        featuredRequests: Prisma.$FeaturedRequestPayload<ExtArgs>[];
        assignedEvents: Prisma.$EventControllerPayload<ExtArgs>[];
        scannedTickets: Prisma.$TicketPayload<ExtArgs>[];
        wallet: Prisma.$WalletPayload<ExtArgs> | null;
        organizerTransactions: Prisma.$TransactionPayload<ExtArgs>[];
        buyerTransactions: Prisma.$TransactionPayload<ExtArgs>[];
        organizerPayouts: Prisma.$PayoutPayload<ExtArgs>[];
        approvedPayouts: Prisma.$PayoutPayload<ExtArgs>[];
        processedPayouts: Prisma.$PayoutPayload<ExtArgs>[];
        loyaltyProfile: Prisma.$LoyaltyProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: $Enums.Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.User$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tickets<T extends Prisma.User$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favorites<T extends Prisma.User$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deals<T extends Prisma.User$dealsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    leisureItems<T extends Prisma.User$leisureItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$leisureItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    leisureFavorites<T extends Prisma.User$leisureFavoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$leisureFavoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeisureFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    blogPosts<T extends Prisma.User$blogPostsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    featuredRequests<T extends Prisma.User$featuredRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$featuredRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignedEvents<T extends Prisma.User$assignedEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scannedTickets<T extends Prisma.User$scannedTicketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$scannedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wallet<T extends Prisma.User$walletArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$walletArgs<ExtArgs>>): Prisma.Prisma__WalletClient<runtime.Types.Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    organizerTransactions<T extends Prisma.User$organizerTransactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$organizerTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    buyerTransactions<T extends Prisma.User$buyerTransactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$buyerTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    organizerPayouts<T extends Prisma.User$organizerPayoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$organizerPayoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvedPayouts<T extends Prisma.User$approvedPayoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$approvedPayoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    processedPayouts<T extends Prisma.User$processedPayoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$processedPayoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loyaltyProfile<T extends Prisma.User$loyaltyProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loyaltyProfileArgs<ExtArgs>>): Prisma.Prisma__LoyaltyProfileClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly interests: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.events
 */
export type User$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.tickets
 */
export type User$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: Prisma.TicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ticket
     */
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
/**
 * User.favorites
 */
export type User$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: Prisma.UserFavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: Prisma.UserFavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserFavoriteInclude<ExtArgs> | null;
    where?: Prisma.UserFavoriteWhereInput;
    orderBy?: Prisma.UserFavoriteOrderByWithRelationInput | Prisma.UserFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.UserFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserFavoriteScalarFieldEnum | Prisma.UserFavoriteScalarFieldEnum[];
};
/**
 * User.deals
 */
export type User$dealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.leisureItems
 */
export type User$leisureItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.leisureFavorites
 */
export type User$leisureFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.blogPosts
 */
export type User$blogPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostScalarFieldEnum | Prisma.BlogPostScalarFieldEnum[];
};
/**
 * User.featuredRequests
 */
export type User$featuredRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedRequest
     */
    select?: Prisma.FeaturedRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeaturedRequest
     */
    omit?: Prisma.FeaturedRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeaturedRequestInclude<ExtArgs> | null;
    where?: Prisma.FeaturedRequestWhereInput;
    orderBy?: Prisma.FeaturedRequestOrderByWithRelationInput | Prisma.FeaturedRequestOrderByWithRelationInput[];
    cursor?: Prisma.FeaturedRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeaturedRequestScalarFieldEnum | Prisma.FeaturedRequestScalarFieldEnum[];
};
/**
 * User.assignedEvents
 */
export type User$assignedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EventControllerWhereInput;
    orderBy?: Prisma.EventControllerOrderByWithRelationInput | Prisma.EventControllerOrderByWithRelationInput[];
    cursor?: Prisma.EventControllerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventControllerScalarFieldEnum | Prisma.EventControllerScalarFieldEnum[];
};
/**
 * User.scannedTickets
 */
export type User$scannedTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: Prisma.TicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ticket
     */
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
/**
 * User.wallet
 */
export type User$walletArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: Prisma.WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: Prisma.WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WalletInclude<ExtArgs> | null;
    where?: Prisma.WalletWhereInput;
};
/**
 * User.organizerTransactions
 */
export type User$organizerTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * User.buyerTransactions
 */
export type User$buyerTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * User.organizerPayouts
 */
export type User$organizerPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * User.approvedPayouts
 */
export type User$approvedPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * User.processedPayouts
 */
export type User$processedPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * User.loyaltyProfile
 */
export type User$loyaltyProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyProfile
     */
    select?: Prisma.LoyaltyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyProfile
     */
    omit?: Prisma.LoyaltyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyProfileInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyProfileWhereInput;
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map