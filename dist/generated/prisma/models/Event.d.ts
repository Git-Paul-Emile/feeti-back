import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Event
 *
 */
export type EventModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventAvgAggregateOutputType = {
    price: number | null;
    vipPrice: number | null;
    maxAttendees: number | null;
    attendees: number | null;
};
export type EventSumAggregateOutputType = {
    price: number | null;
    vipPrice: number | null;
    maxAttendees: number | null;
    attendees: number | null;
};
export type EventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    date: string | null;
    time: string | null;
    location: string | null;
    image: string | null;
    price: number | null;
    vipPrice: number | null;
    ticketTypes: string | null;
    currency: string | null;
    category: string | null;
    maxAttendees: number | null;
    attendees: number | null;
    duration: string | null;
    salesBlocked: boolean | null;
    isLive: boolean | null;
    eventType: $Enums.EventType | null;
    isFeatured: boolean | null;
    isFavorite: boolean | null;
    streamUrl: string | null;
    videoUrl: string | null;
    status: string | null;
    countryCode: string | null;
    organizerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    promotionType: string | null;
    promotionStatus: string | null;
    promotionStartDate: Date | null;
    promotionEndDate: Date | null;
};
export type EventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    date: string | null;
    time: string | null;
    location: string | null;
    image: string | null;
    price: number | null;
    vipPrice: number | null;
    ticketTypes: string | null;
    currency: string | null;
    category: string | null;
    maxAttendees: number | null;
    attendees: number | null;
    duration: string | null;
    salesBlocked: boolean | null;
    isLive: boolean | null;
    eventType: $Enums.EventType | null;
    isFeatured: boolean | null;
    isFavorite: boolean | null;
    streamUrl: string | null;
    videoUrl: string | null;
    status: string | null;
    countryCode: string | null;
    organizerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    promotionType: string | null;
    promotionStatus: string | null;
    promotionStartDate: Date | null;
    promotionEndDate: Date | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    date: number;
    time: number;
    location: number;
    image: number;
    price: number;
    vipPrice: number;
    ticketTypes: number;
    currency: number;
    category: number;
    maxAttendees: number;
    attendees: number;
    duration: number;
    salesBlocked: number;
    isLive: number;
    eventType: number;
    isFeatured: number;
    isFavorite: number;
    streamUrl: number;
    videoUrl: number;
    status: number;
    countryCode: number;
    organizerId: number;
    createdAt: number;
    updatedAt: number;
    promotionType: number;
    promotionStatus: number;
    promotionStartDate: number;
    promotionEndDate: number;
    _all: number;
};
export type EventAvgAggregateInputType = {
    price?: true;
    vipPrice?: true;
    maxAttendees?: true;
    attendees?: true;
};
export type EventSumAggregateInputType = {
    price?: true;
    vipPrice?: true;
    maxAttendees?: true;
    attendees?: true;
};
export type EventMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    time?: true;
    location?: true;
    image?: true;
    price?: true;
    vipPrice?: true;
    ticketTypes?: true;
    currency?: true;
    category?: true;
    maxAttendees?: true;
    attendees?: true;
    duration?: true;
    salesBlocked?: true;
    isLive?: true;
    eventType?: true;
    isFeatured?: true;
    isFavorite?: true;
    streamUrl?: true;
    videoUrl?: true;
    status?: true;
    countryCode?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
    promotionType?: true;
    promotionStatus?: true;
    promotionStartDate?: true;
    promotionEndDate?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    time?: true;
    location?: true;
    image?: true;
    price?: true;
    vipPrice?: true;
    ticketTypes?: true;
    currency?: true;
    category?: true;
    maxAttendees?: true;
    attendees?: true;
    duration?: true;
    salesBlocked?: true;
    isLive?: true;
    eventType?: true;
    isFeatured?: true;
    isFavorite?: true;
    streamUrl?: true;
    videoUrl?: true;
    status?: true;
    countryCode?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
    promotionType?: true;
    promotionStatus?: true;
    promotionStartDate?: true;
    promotionEndDate?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    date?: true;
    time?: true;
    location?: true;
    image?: true;
    price?: true;
    vipPrice?: true;
    ticketTypes?: true;
    currency?: true;
    category?: true;
    maxAttendees?: true;
    attendees?: true;
    duration?: true;
    salesBlocked?: true;
    isLive?: true;
    eventType?: true;
    isFeatured?: true;
    isFavorite?: true;
    streamUrl?: true;
    videoUrl?: true;
    status?: true;
    countryCode?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
    promotionType?: true;
    promotionStatus?: true;
    promotionStartDate?: true;
    promotionEndDate?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type EventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithAggregationInput | Prisma.EventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    price: number;
    vipPrice: number | null;
    ticketTypes: string | null;
    currency: string;
    category: string;
    maxAttendees: number;
    attendees: number;
    duration: string | null;
    salesBlocked: boolean;
    isLive: boolean;
    eventType: $Enums.EventType;
    isFeatured: boolean;
    isFavorite: boolean;
    streamUrl: string | null;
    videoUrl: string | null;
    status: string;
    countryCode: string | null;
    organizerId: string;
    createdAt: Date;
    updatedAt: Date;
    promotionType: string | null;
    promotionStatus: string | null;
    promotionStartDate: Date | null;
    promotionEndDate: Date | null;
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type EventWhereInput = {
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    id?: Prisma.StringFilter<"Event"> | string;
    title?: Prisma.StringFilter<"Event"> | string;
    description?: Prisma.StringFilter<"Event"> | string;
    date?: Prisma.StringFilter<"Event"> | string;
    time?: Prisma.StringFilter<"Event"> | string;
    location?: Prisma.StringFilter<"Event"> | string;
    image?: Prisma.StringFilter<"Event"> | string;
    price?: Prisma.FloatFilter<"Event"> | number;
    vipPrice?: Prisma.FloatNullableFilter<"Event"> | number | null;
    ticketTypes?: Prisma.StringNullableFilter<"Event"> | string | null;
    currency?: Prisma.StringFilter<"Event"> | string;
    category?: Prisma.StringFilter<"Event"> | string;
    maxAttendees?: Prisma.IntFilter<"Event"> | number;
    attendees?: Prisma.IntFilter<"Event"> | number;
    duration?: Prisma.StringNullableFilter<"Event"> | string | null;
    salesBlocked?: Prisma.BoolFilter<"Event"> | boolean;
    isLive?: Prisma.BoolFilter<"Event"> | boolean;
    eventType?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    isFeatured?: Prisma.BoolFilter<"Event"> | boolean;
    isFavorite?: Prisma.BoolFilter<"Event"> | boolean;
    streamUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    videoUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    status?: Prisma.StringFilter<"Event"> | string;
    countryCode?: Prisma.StringNullableFilter<"Event"> | string | null;
    organizerId?: Prisma.StringFilter<"Event"> | string;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    promotionType?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStatus?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStartDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    promotionEndDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tickets?: Prisma.TicketListRelationFilter;
    favoritedBy?: Prisma.UserFavoriteListRelationFilter;
    featuredRequests?: Prisma.FeaturedRequestListRelationFilter;
    controllers?: Prisma.EventControllerListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    eventZones?: Prisma.EventZoneListRelationFilter;
    participantCategories?: Prisma.ParticipantCategoryListRelationFilter;
    accessBadges?: Prisma.AccessBadgeListRelationFilter;
};
export type EventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticketTypes?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesBlocked?: Prisma.SortOrder;
    isLive?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isFavorite?: Prisma.SortOrder;
    streamUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    videoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    promotionType?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionStartDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.CountryOrderByWithRelationInput;
    organizer?: Prisma.UserOrderByWithRelationInput;
    tickets?: Prisma.TicketOrderByRelationAggregateInput;
    favoritedBy?: Prisma.UserFavoriteOrderByRelationAggregateInput;
    featuredRequests?: Prisma.FeaturedRequestOrderByRelationAggregateInput;
    controllers?: Prisma.EventControllerOrderByRelationAggregateInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    eventZones?: Prisma.EventZoneOrderByRelationAggregateInput;
    participantCategories?: Prisma.ParticipantCategoryOrderByRelationAggregateInput;
    accessBadges?: Prisma.AccessBadgeOrderByRelationAggregateInput;
};
export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    title?: Prisma.StringFilter<"Event"> | string;
    description?: Prisma.StringFilter<"Event"> | string;
    date?: Prisma.StringFilter<"Event"> | string;
    time?: Prisma.StringFilter<"Event"> | string;
    location?: Prisma.StringFilter<"Event"> | string;
    image?: Prisma.StringFilter<"Event"> | string;
    price?: Prisma.FloatFilter<"Event"> | number;
    vipPrice?: Prisma.FloatNullableFilter<"Event"> | number | null;
    ticketTypes?: Prisma.StringNullableFilter<"Event"> | string | null;
    currency?: Prisma.StringFilter<"Event"> | string;
    category?: Prisma.StringFilter<"Event"> | string;
    maxAttendees?: Prisma.IntFilter<"Event"> | number;
    attendees?: Prisma.IntFilter<"Event"> | number;
    duration?: Prisma.StringNullableFilter<"Event"> | string | null;
    salesBlocked?: Prisma.BoolFilter<"Event"> | boolean;
    isLive?: Prisma.BoolFilter<"Event"> | boolean;
    eventType?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    isFeatured?: Prisma.BoolFilter<"Event"> | boolean;
    isFavorite?: Prisma.BoolFilter<"Event"> | boolean;
    streamUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    videoUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    status?: Prisma.StringFilter<"Event"> | string;
    countryCode?: Prisma.StringNullableFilter<"Event"> | string | null;
    organizerId?: Prisma.StringFilter<"Event"> | string;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    promotionType?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStatus?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStartDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    promotionEndDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tickets?: Prisma.TicketListRelationFilter;
    favoritedBy?: Prisma.UserFavoriteListRelationFilter;
    featuredRequests?: Prisma.FeaturedRequestListRelationFilter;
    controllers?: Prisma.EventControllerListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    eventZones?: Prisma.EventZoneListRelationFilter;
    participantCategories?: Prisma.ParticipantCategoryListRelationFilter;
    accessBadges?: Prisma.AccessBadgeListRelationFilter;
}, "id">;
export type EventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticketTypes?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesBlocked?: Prisma.SortOrder;
    isLive?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isFavorite?: Prisma.SortOrder;
    streamUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    videoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    promotionType?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionStartDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotionEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EventCountOrderByAggregateInput;
    _avg?: Prisma.EventAvgOrderByAggregateInput;
    _max?: Prisma.EventMaxOrderByAggregateInput;
    _min?: Prisma.EventMinOrderByAggregateInput;
    _sum?: Prisma.EventSumOrderByAggregateInput;
};
export type EventScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    date?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    time?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    location?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    image?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Event"> | number;
    vipPrice?: Prisma.FloatNullableWithAggregatesFilter<"Event"> | number | null;
    ticketTypes?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    currency?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    category?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    maxAttendees?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    attendees?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    duration?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    salesBlocked?: Prisma.BoolWithAggregatesFilter<"Event"> | boolean;
    isLive?: Prisma.BoolWithAggregatesFilter<"Event"> | boolean;
    eventType?: Prisma.EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"Event"> | boolean;
    isFavorite?: Prisma.BoolWithAggregatesFilter<"Event"> | boolean;
    streamUrl?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    videoUrl?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    countryCode?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    organizerId?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
    promotionType?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    promotionStatus?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    promotionStartDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null;
    promotionEndDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null;
};
export type EventCreateInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
};
export type EventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventListRelationFilter = {
    every?: Prisma.EventWhereInput;
    some?: Prisma.EventWhereInput;
    none?: Prisma.EventWhereInput;
};
export type EventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventScalarRelationFilter = {
    is?: Prisma.EventWhereInput;
    isNot?: Prisma.EventWhereInput;
};
export type EventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrder;
    ticketTypes?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    salesBlocked?: Prisma.SortOrder;
    isLive?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isFavorite?: Prisma.SortOrder;
    streamUrl?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    promotionType?: Prisma.SortOrder;
    promotionStatus?: Prisma.SortOrder;
    promotionStartDate?: Prisma.SortOrder;
    promotionEndDate?: Prisma.SortOrder;
};
export type EventAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
};
export type EventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrder;
    ticketTypes?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    salesBlocked?: Prisma.SortOrder;
    isLive?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isFavorite?: Prisma.SortOrder;
    streamUrl?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    promotionType?: Prisma.SortOrder;
    promotionStatus?: Prisma.SortOrder;
    promotionStartDate?: Prisma.SortOrder;
    promotionEndDate?: Prisma.SortOrder;
};
export type EventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrder;
    ticketTypes?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    salesBlocked?: Prisma.SortOrder;
    isLive?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isFavorite?: Prisma.SortOrder;
    streamUrl?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    countryCode?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    promotionType?: Prisma.SortOrder;
    promotionStatus?: Prisma.SortOrder;
    promotionStartDate?: Prisma.SortOrder;
    promotionEndDate?: Prisma.SortOrder;
};
export type EventSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    vipPrice?: Prisma.SortOrder;
    maxAttendees?: Prisma.SortOrder;
    attendees?: Prisma.SortOrder;
};
export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput> | Prisma.EventCreateWithoutOrganizerInput[] | Prisma.EventUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizerInput | Prisma.EventCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.EventCreateManyOrganizerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput> | Prisma.EventCreateWithoutOrganizerInput[] | Prisma.EventUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizerInput | Prisma.EventCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.EventCreateManyOrganizerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput> | Prisma.EventCreateWithoutOrganizerInput[] | Prisma.EventUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizerInput | Prisma.EventCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.EventCreateManyOrganizerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutOrganizerInput | Prisma.EventUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput> | Prisma.EventCreateWithoutOrganizerInput[] | Prisma.EventUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizerInput | Prisma.EventCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.EventCreateManyOrganizerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutOrganizerInput | Prisma.EventUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventCreateNestedOneWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutFavoritedByInput, Prisma.EventUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutFavoritedByInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutFavoritedByInput, Prisma.EventUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutFavoritedByInput;
    upsert?: Prisma.EventUpsertWithoutFavoritedByInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutFavoritedByInput, Prisma.EventUpdateWithoutFavoritedByInput>, Prisma.EventUncheckedUpdateWithoutFavoritedByInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EventCreateNestedOneWithoutFeaturedRequestsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutFeaturedRequestsInput, Prisma.EventUncheckedCreateWithoutFeaturedRequestsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutFeaturedRequestsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutFeaturedRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutFeaturedRequestsInput, Prisma.EventUncheckedCreateWithoutFeaturedRequestsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutFeaturedRequestsInput;
    upsert?: Prisma.EventUpsertWithoutFeaturedRequestsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutFeaturedRequestsInput, Prisma.EventUpdateWithoutFeaturedRequestsInput>, Prisma.EventUncheckedUpdateWithoutFeaturedRequestsInput>;
};
export type EventCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput> | Prisma.EventCreateWithoutCountryInput[] | Prisma.EventUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutCountryInput | Prisma.EventCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.EventCreateManyCountryInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput> | Prisma.EventCreateWithoutCountryInput[] | Prisma.EventUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutCountryInput | Prisma.EventCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.EventCreateManyCountryInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput> | Prisma.EventCreateWithoutCountryInput[] | Prisma.EventUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutCountryInput | Prisma.EventCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutCountryInput | Prisma.EventUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.EventCreateManyCountryInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutCountryInput | Prisma.EventUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutCountryInput | Prisma.EventUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput> | Prisma.EventCreateWithoutCountryInput[] | Prisma.EventUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutCountryInput | Prisma.EventCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutCountryInput | Prisma.EventUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.EventCreateManyCountryInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutCountryInput | Prisma.EventUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutCountryInput | Prisma.EventUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTicketsInput, Prisma.EventUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTicketsInput, Prisma.EventUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.EventUpsertWithoutTicketsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutTicketsInput, Prisma.EventUpdateWithoutTicketsInput>, Prisma.EventUncheckedUpdateWithoutTicketsInput>;
};
export type EventCreateNestedOneWithoutControllersInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutControllersInput, Prisma.EventUncheckedCreateWithoutControllersInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutControllersInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutControllersNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutControllersInput, Prisma.EventUncheckedCreateWithoutControllersInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutControllersInput;
    upsert?: Prisma.EventUpsertWithoutControllersInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutControllersInput, Prisma.EventUpdateWithoutControllersInput>, Prisma.EventUncheckedUpdateWithoutControllersInput>;
};
export type EventCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTransactionsInput, Prisma.EventUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTransactionsInput, Prisma.EventUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.EventUpsertWithoutTransactionsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutTransactionsInput, Prisma.EventUpdateWithoutTransactionsInput>, Prisma.EventUncheckedUpdateWithoutTransactionsInput>;
};
export type EventCreateNestedOneWithoutEventZonesInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutEventZonesInput, Prisma.EventUncheckedCreateWithoutEventZonesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutEventZonesInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutEventZonesNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutEventZonesInput, Prisma.EventUncheckedCreateWithoutEventZonesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutEventZonesInput;
    upsert?: Prisma.EventUpsertWithoutEventZonesInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutEventZonesInput, Prisma.EventUpdateWithoutEventZonesInput>, Prisma.EventUncheckedUpdateWithoutEventZonesInput>;
};
export type EventCreateNestedOneWithoutParticipantCategoriesInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutParticipantCategoriesInput, Prisma.EventUncheckedCreateWithoutParticipantCategoriesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutParticipantCategoriesInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutParticipantCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutParticipantCategoriesInput, Prisma.EventUncheckedCreateWithoutParticipantCategoriesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutParticipantCategoriesInput;
    upsert?: Prisma.EventUpsertWithoutParticipantCategoriesInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutParticipantCategoriesInput, Prisma.EventUpdateWithoutParticipantCategoriesInput>, Prisma.EventUncheckedUpdateWithoutParticipantCategoriesInput>;
};
export type EventCreateNestedOneWithoutAccessBadgesInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutAccessBadgesInput, Prisma.EventUncheckedCreateWithoutAccessBadgesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutAccessBadgesInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutAccessBadgesNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutAccessBadgesInput, Prisma.EventUncheckedCreateWithoutAccessBadgesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutAccessBadgesInput;
    upsert?: Prisma.EventUpsertWithoutAccessBadgesInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutAccessBadgesInput, Prisma.EventUpdateWithoutAccessBadgesInput>, Prisma.EventUncheckedUpdateWithoutAccessBadgesInput>;
};
export type EventCreateWithoutOrganizerInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput>;
};
export type EventCreateManyOrganizerInputEnvelope = {
    data: Prisma.EventCreateManyOrganizerInput | Prisma.EventCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutOrganizerInput, Prisma.EventUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutOrganizerInput, Prisma.EventUncheckedCreateWithoutOrganizerInput>;
};
export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutOrganizerInput, Prisma.EventUncheckedUpdateWithoutOrganizerInput>;
};
export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutOrganizerInput>;
};
export type EventScalarWhereInput = {
    AND?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    OR?: Prisma.EventScalarWhereInput[];
    NOT?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    id?: Prisma.StringFilter<"Event"> | string;
    title?: Prisma.StringFilter<"Event"> | string;
    description?: Prisma.StringFilter<"Event"> | string;
    date?: Prisma.StringFilter<"Event"> | string;
    time?: Prisma.StringFilter<"Event"> | string;
    location?: Prisma.StringFilter<"Event"> | string;
    image?: Prisma.StringFilter<"Event"> | string;
    price?: Prisma.FloatFilter<"Event"> | number;
    vipPrice?: Prisma.FloatNullableFilter<"Event"> | number | null;
    ticketTypes?: Prisma.StringNullableFilter<"Event"> | string | null;
    currency?: Prisma.StringFilter<"Event"> | string;
    category?: Prisma.StringFilter<"Event"> | string;
    maxAttendees?: Prisma.IntFilter<"Event"> | number;
    attendees?: Prisma.IntFilter<"Event"> | number;
    duration?: Prisma.StringNullableFilter<"Event"> | string | null;
    salesBlocked?: Prisma.BoolFilter<"Event"> | boolean;
    isLive?: Prisma.BoolFilter<"Event"> | boolean;
    eventType?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    isFeatured?: Prisma.BoolFilter<"Event"> | boolean;
    isFavorite?: Prisma.BoolFilter<"Event"> | boolean;
    streamUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    videoUrl?: Prisma.StringNullableFilter<"Event"> | string | null;
    status?: Prisma.StringFilter<"Event"> | string;
    countryCode?: Prisma.StringNullableFilter<"Event"> | string | null;
    organizerId?: Prisma.StringFilter<"Event"> | string;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    promotionType?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStatus?: Prisma.StringNullableFilter<"Event"> | string | null;
    promotionStartDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    promotionEndDate?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
};
export type EventCreateWithoutFavoritedByInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutFavoritedByInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutFavoritedByInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutFavoritedByInput, Prisma.EventUncheckedCreateWithoutFavoritedByInput>;
};
export type EventUpsertWithoutFavoritedByInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutFavoritedByInput, Prisma.EventUncheckedUpdateWithoutFavoritedByInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutFavoritedByInput, Prisma.EventUncheckedCreateWithoutFavoritedByInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutFavoritedByInput, Prisma.EventUncheckedUpdateWithoutFavoritedByInput>;
};
export type EventUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutFeaturedRequestsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutFeaturedRequestsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutFeaturedRequestsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutFeaturedRequestsInput, Prisma.EventUncheckedCreateWithoutFeaturedRequestsInput>;
};
export type EventUpsertWithoutFeaturedRequestsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutFeaturedRequestsInput, Prisma.EventUncheckedUpdateWithoutFeaturedRequestsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutFeaturedRequestsInput, Prisma.EventUncheckedCreateWithoutFeaturedRequestsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutFeaturedRequestsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutFeaturedRequestsInput, Prisma.EventUncheckedUpdateWithoutFeaturedRequestsInput>;
};
export type EventUpdateWithoutFeaturedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutFeaturedRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutCountryInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutCountryInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutCountryInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput>;
};
export type EventCreateManyCountryInputEnvelope = {
    data: Prisma.EventCreateManyCountryInput | Prisma.EventCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutCountryInput, Prisma.EventUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutCountryInput, Prisma.EventUncheckedCreateWithoutCountryInput>;
};
export type EventUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutCountryInput, Prisma.EventUncheckedUpdateWithoutCountryInput>;
};
export type EventUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutCountryInput>;
};
export type EventCreateWithoutTicketsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutTicketsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutTicketsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutTicketsInput, Prisma.EventUncheckedCreateWithoutTicketsInput>;
};
export type EventUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutTicketsInput, Prisma.EventUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutTicketsInput, Prisma.EventUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutTicketsInput, Prisma.EventUncheckedUpdateWithoutTicketsInput>;
};
export type EventUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutControllersInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutControllersInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutControllersInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutControllersInput, Prisma.EventUncheckedCreateWithoutControllersInput>;
};
export type EventUpsertWithoutControllersInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutControllersInput, Prisma.EventUncheckedUpdateWithoutControllersInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutControllersInput, Prisma.EventUncheckedCreateWithoutControllersInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutControllersInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutControllersInput, Prisma.EventUncheckedUpdateWithoutControllersInput>;
};
export type EventUpdateWithoutControllersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutControllersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutTransactionsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutTransactionsInput, Prisma.EventUncheckedCreateWithoutTransactionsInput>;
};
export type EventUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutTransactionsInput, Prisma.EventUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutTransactionsInput, Prisma.EventUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutTransactionsInput, Prisma.EventUncheckedUpdateWithoutTransactionsInput>;
};
export type EventUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutEventZonesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutEventZonesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutEventZonesInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutEventZonesInput, Prisma.EventUncheckedCreateWithoutEventZonesInput>;
};
export type EventUpsertWithoutEventZonesInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutEventZonesInput, Prisma.EventUncheckedUpdateWithoutEventZonesInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutEventZonesInput, Prisma.EventUncheckedCreateWithoutEventZonesInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutEventZonesInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutEventZonesInput, Prisma.EventUncheckedUpdateWithoutEventZonesInput>;
};
export type EventUpdateWithoutEventZonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutEventZonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutParticipantCategoriesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutParticipantCategoriesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    accessBadges?: Prisma.AccessBadgeUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutParticipantCategoriesInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutParticipantCategoriesInput, Prisma.EventUncheckedCreateWithoutParticipantCategoriesInput>;
};
export type EventUpsertWithoutParticipantCategoriesInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutParticipantCategoriesInput, Prisma.EventUncheckedUpdateWithoutParticipantCategoriesInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutParticipantCategoriesInput, Prisma.EventUncheckedCreateWithoutParticipantCategoriesInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutParticipantCategoriesInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutParticipantCategoriesInput, Prisma.EventUncheckedUpdateWithoutParticipantCategoriesInput>;
};
export type EventUpdateWithoutParticipantCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutParticipantCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutAccessBadgesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutEventsInput;
    organizer: Prisma.UserCreateNestedOneWithoutEventsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutAccessBadgesInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedCreateNestedManyWithoutEventInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedCreateNestedManyWithoutEventInput;
    controllers?: Prisma.EventControllerUncheckedCreateNestedManyWithoutEventInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutEventInput;
    eventZones?: Prisma.EventZoneUncheckedCreateNestedManyWithoutEventInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutAccessBadgesInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutAccessBadgesInput, Prisma.EventUncheckedCreateWithoutAccessBadgesInput>;
};
export type EventUpsertWithoutAccessBadgesInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutAccessBadgesInput, Prisma.EventUncheckedUpdateWithoutAccessBadgesInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutAccessBadgesInput, Prisma.EventUncheckedCreateWithoutAccessBadgesInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutAccessBadgesInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutAccessBadgesInput, Prisma.EventUncheckedUpdateWithoutAccessBadgesInput>;
};
export type EventUpdateWithoutAccessBadgesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutAccessBadgesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyOrganizerInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    countryCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
};
export type EventUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    countryCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventCreateManyCountryInput = {
    id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    price?: number;
    vipPrice?: number | null;
    ticketTypes?: string | null;
    currency?: string;
    category: string;
    maxAttendees: number;
    attendees?: number;
    duration?: string | null;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: $Enums.EventType;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: string | null;
    videoUrl?: string | null;
    status?: string;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    promotionType?: string | null;
    promotionStatus?: string | null;
    promotionStartDate?: Date | string | null;
    promotionEndDate?: Date | string | null;
};
export type EventUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizer?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput;
    favoritedBy?: Prisma.UserFavoriteUncheckedUpdateManyWithoutEventNestedInput;
    featuredRequests?: Prisma.FeaturedRequestUncheckedUpdateManyWithoutEventNestedInput;
    controllers?: Prisma.EventControllerUncheckedUpdateManyWithoutEventNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutEventNestedInput;
    eventZones?: Prisma.EventZoneUncheckedUpdateManyWithoutEventNestedInput;
    participantCategories?: Prisma.ParticipantCategoryUncheckedUpdateManyWithoutEventNestedInput;
    accessBadges?: Prisma.AccessBadgeUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateManyWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    vipPrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ticketTypes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    maxAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    attendees?: Prisma.IntFieldUpdateOperationsInput | number;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesBlocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eventType?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFavorite?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotionType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotionStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotionEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type EventCountOutputType
 */
export type EventCountOutputType = {
    tickets: number;
    favoritedBy: number;
    featuredRequests: number;
    controllers: number;
    transactions: number;
    eventZones: number;
    participantCategories: number;
    accessBadges: number;
};
export type EventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs;
    favoritedBy?: boolean | EventCountOutputTypeCountFavoritedByArgs;
    featuredRequests?: boolean | EventCountOutputTypeCountFeaturedRequestsArgs;
    controllers?: boolean | EventCountOutputTypeCountControllersArgs;
    transactions?: boolean | EventCountOutputTypeCountTransactionsArgs;
    eventZones?: boolean | EventCountOutputTypeCountEventZonesArgs;
    participantCategories?: boolean | EventCountOutputTypeCountParticipantCategoriesArgs;
    accessBadges?: boolean | EventCountOutputTypeCountAccessBadgesArgs;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: Prisma.EventCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountFavoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserFavoriteWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountFeaturedRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeaturedRequestWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountControllersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventControllerWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountEventZonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventZoneWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountParticipantCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantCategoryWhereInput;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountAccessBadgesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessBadgeWhereInput;
};
export type EventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    date?: boolean;
    time?: boolean;
    location?: boolean;
    image?: boolean;
    price?: boolean;
    vipPrice?: boolean;
    ticketTypes?: boolean;
    currency?: boolean;
    category?: boolean;
    maxAttendees?: boolean;
    attendees?: boolean;
    duration?: boolean;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: boolean;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: boolean;
    videoUrl?: boolean;
    status?: boolean;
    countryCode?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    promotionType?: boolean;
    promotionStatus?: boolean;
    promotionStartDate?: boolean;
    promotionEndDate?: boolean;
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tickets?: boolean | Prisma.Event$ticketsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Event$favoritedByArgs<ExtArgs>;
    featuredRequests?: boolean | Prisma.Event$featuredRequestsArgs<ExtArgs>;
    controllers?: boolean | Prisma.Event$controllersArgs<ExtArgs>;
    transactions?: boolean | Prisma.Event$transactionsArgs<ExtArgs>;
    eventZones?: boolean | Prisma.Event$eventZonesArgs<ExtArgs>;
    participantCategories?: boolean | Prisma.Event$participantCategoriesArgs<ExtArgs>;
    accessBadges?: boolean | Prisma.Event$accessBadgesArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    date?: boolean;
    time?: boolean;
    location?: boolean;
    image?: boolean;
    price?: boolean;
    vipPrice?: boolean;
    ticketTypes?: boolean;
    currency?: boolean;
    category?: boolean;
    maxAttendees?: boolean;
    attendees?: boolean;
    duration?: boolean;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: boolean;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: boolean;
    videoUrl?: boolean;
    status?: boolean;
    countryCode?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    promotionType?: boolean;
    promotionStatus?: boolean;
    promotionStartDate?: boolean;
    promotionEndDate?: boolean;
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    date?: boolean;
    time?: boolean;
    location?: boolean;
    image?: boolean;
    price?: boolean;
    vipPrice?: boolean;
    ticketTypes?: boolean;
    currency?: boolean;
    category?: boolean;
    maxAttendees?: boolean;
    attendees?: boolean;
    duration?: boolean;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: boolean;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: boolean;
    videoUrl?: boolean;
    status?: boolean;
    countryCode?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    promotionType?: boolean;
    promotionStatus?: boolean;
    promotionStartDate?: boolean;
    promotionEndDate?: boolean;
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    date?: boolean;
    time?: boolean;
    location?: boolean;
    image?: boolean;
    price?: boolean;
    vipPrice?: boolean;
    ticketTypes?: boolean;
    currency?: boolean;
    category?: boolean;
    maxAttendees?: boolean;
    attendees?: boolean;
    duration?: boolean;
    salesBlocked?: boolean;
    isLive?: boolean;
    eventType?: boolean;
    isFeatured?: boolean;
    isFavorite?: boolean;
    streamUrl?: boolean;
    videoUrl?: boolean;
    status?: boolean;
    countryCode?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    promotionType?: boolean;
    promotionStatus?: boolean;
    promotionStartDate?: boolean;
    promotionEndDate?: boolean;
};
export type EventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "date" | "time" | "location" | "image" | "price" | "vipPrice" | "ticketTypes" | "currency" | "category" | "maxAttendees" | "attendees" | "duration" | "salesBlocked" | "isLive" | "eventType" | "isFeatured" | "isFavorite" | "streamUrl" | "videoUrl" | "status" | "countryCode" | "organizerId" | "createdAt" | "updatedAt" | "promotionType" | "promotionStatus" | "promotionStartDate" | "promotionEndDate", ExtArgs["result"]["event"]>;
export type EventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tickets?: boolean | Prisma.Event$ticketsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Event$favoritedByArgs<ExtArgs>;
    featuredRequests?: boolean | Prisma.Event$featuredRequestsArgs<ExtArgs>;
    controllers?: boolean | Prisma.Event$controllersArgs<ExtArgs>;
    transactions?: boolean | Prisma.Event$transactionsArgs<ExtArgs>;
    eventZones?: boolean | Prisma.Event$eventZonesArgs<ExtArgs>;
    participantCategories?: boolean | Prisma.Event$participantCategoriesArgs<ExtArgs>;
    accessBadges?: boolean | Prisma.Event$accessBadgesArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    country?: boolean | Prisma.Event$countryArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Event";
    objects: {
        country: Prisma.$CountryPayload<ExtArgs> | null;
        organizer: Prisma.$UserPayload<ExtArgs>;
        tickets: Prisma.$TicketPayload<ExtArgs>[];
        favoritedBy: Prisma.$UserFavoritePayload<ExtArgs>[];
        featuredRequests: Prisma.$FeaturedRequestPayload<ExtArgs>[];
        controllers: Prisma.$EventControllerPayload<ExtArgs>[];
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        eventZones: Prisma.$EventZonePayload<ExtArgs>[];
        participantCategories: Prisma.$ParticipantCategoryPayload<ExtArgs>[];
        accessBadges: Prisma.$AccessBadgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        date: string;
        time: string;
        location: string;
        image: string;
        price: number;
        vipPrice: number | null;
        ticketTypes: string | null;
        currency: string;
        category: string;
        maxAttendees: number;
        attendees: number;
        duration: string | null;
        salesBlocked: boolean;
        isLive: boolean;
        eventType: $Enums.EventType;
        isFeatured: boolean;
        isFavorite: boolean;
        streamUrl: string | null;
        videoUrl: string | null;
        status: string;
        countryCode: string | null;
        organizerId: string;
        createdAt: Date;
        updatedAt: Date;
        promotionType: string | null;
        promotionStatus: string | null;
        promotionStartDate: Date | null;
        promotionEndDate: Date | null;
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPayload, S>;
export type EventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
};
export interface EventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Event'];
        meta: {
            name: 'Event';
        };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFindManyArgs>(args?: Prisma.SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     */
    create<T extends EventCreateArgs>(args: Prisma.SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     */
    delete<T extends EventDeleteArgs>(args: Prisma.SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventUpdateArgs>(args: Prisma.SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventUpdateManyArgs>(args: Prisma.SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: Prisma.SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(args?: Prisma.Subset<T, EventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventGroupByArgs['orderBy'];
    } : {
        orderBy?: EventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Event.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    country<T extends Prisma.Event$countryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$countryArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    organizer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tickets<T extends Prisma.Event$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favoritedBy<T extends Prisma.Event$favoritedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    featuredRequests<T extends Prisma.Event$featuredRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$featuredRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturedRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    controllers<T extends Prisma.Event$controllersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$controllersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventControllerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.Event$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    eventZones<T extends Prisma.Event$eventZonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$eventZonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    participantCategories<T extends Prisma.Event$participantCategoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$participantCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accessBadges<T extends Prisma.Event$accessBadgesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$accessBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Event model
 */
export interface EventFieldRefs {
    readonly id: Prisma.FieldRef<"Event", 'String'>;
    readonly title: Prisma.FieldRef<"Event", 'String'>;
    readonly description: Prisma.FieldRef<"Event", 'String'>;
    readonly date: Prisma.FieldRef<"Event", 'String'>;
    readonly time: Prisma.FieldRef<"Event", 'String'>;
    readonly location: Prisma.FieldRef<"Event", 'String'>;
    readonly image: Prisma.FieldRef<"Event", 'String'>;
    readonly price: Prisma.FieldRef<"Event", 'Float'>;
    readonly vipPrice: Prisma.FieldRef<"Event", 'Float'>;
    readonly ticketTypes: Prisma.FieldRef<"Event", 'String'>;
    readonly currency: Prisma.FieldRef<"Event", 'String'>;
    readonly category: Prisma.FieldRef<"Event", 'String'>;
    readonly maxAttendees: Prisma.FieldRef<"Event", 'Int'>;
    readonly attendees: Prisma.FieldRef<"Event", 'Int'>;
    readonly duration: Prisma.FieldRef<"Event", 'String'>;
    readonly salesBlocked: Prisma.FieldRef<"Event", 'Boolean'>;
    readonly isLive: Prisma.FieldRef<"Event", 'Boolean'>;
    readonly eventType: Prisma.FieldRef<"Event", 'EventType'>;
    readonly isFeatured: Prisma.FieldRef<"Event", 'Boolean'>;
    readonly isFavorite: Prisma.FieldRef<"Event", 'Boolean'>;
    readonly streamUrl: Prisma.FieldRef<"Event", 'String'>;
    readonly videoUrl: Prisma.FieldRef<"Event", 'String'>;
    readonly status: Prisma.FieldRef<"Event", 'String'>;
    readonly countryCode: Prisma.FieldRef<"Event", 'String'>;
    readonly organizerId: Prisma.FieldRef<"Event", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly promotionType: Prisma.FieldRef<"Event", 'String'>;
    readonly promotionStatus: Prisma.FieldRef<"Event", 'String'>;
    readonly promotionStartDate: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly promotionEndDate: Prisma.FieldRef<"Event", 'DateTime'>;
}
/**
 * Event findUnique
 */
export type EventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where: Prisma.EventWhereUniqueInput;
};
/**
 * Event findUniqueOrThrow
 */
export type EventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where: Prisma.EventWhereUniqueInput;
};
/**
 * Event findFirst
 */
export type EventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * Event findFirstOrThrow
 */
export type EventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * Event findMany
 */
export type EventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Events to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * Event create
 */
export type EventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Event.
     */
    data: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
};
/**
 * Event createMany
 */
export type EventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Event createManyAndReturn
 */
export type EventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Event update
 */
export type EventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Event.
     */
    data: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: Prisma.EventWhereUniqueInput;
};
/**
 * Event updateMany
 */
export type EventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
};
/**
 * Event updateManyAndReturn
 */
export type EventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * The data used to update Events.
     */
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Event upsert
 */
export type EventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: Prisma.EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
};
/**
 * Event delete
 */
export type EventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Event to delete.
     */
    where: Prisma.EventWhereUniqueInput;
};
/**
 * Event deleteMany
 */
export type EventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to delete.
     */
    limit?: number;
};
/**
 * Event.country
 */
export type Event$countryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.tickets
 */
export type Event$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.favoritedBy
 */
export type Event$favoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.featuredRequests
 */
export type Event$featuredRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.controllers
 */
export type Event$controllersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.transactions
 */
export type Event$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.eventZones
 */
export type Event$eventZonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EventZoneWhereInput;
    orderBy?: Prisma.EventZoneOrderByWithRelationInput | Prisma.EventZoneOrderByWithRelationInput[];
    cursor?: Prisma.EventZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventZoneScalarFieldEnum | Prisma.EventZoneScalarFieldEnum[];
};
/**
 * Event.participantCategories
 */
export type Event$participantCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCategory
     */
    select?: Prisma.ParticipantCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParticipantCategory
     */
    omit?: Prisma.ParticipantCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantCategoryInclude<ExtArgs> | null;
    where?: Prisma.ParticipantCategoryWhereInput;
    orderBy?: Prisma.ParticipantCategoryOrderByWithRelationInput | Prisma.ParticipantCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ParticipantCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParticipantCategoryScalarFieldEnum | Prisma.ParticipantCategoryScalarFieldEnum[];
};
/**
 * Event.accessBadges
 */
export type Event$accessBadgesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessBadge
     */
    select?: Prisma.AccessBadgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AccessBadge
     */
    omit?: Prisma.AccessBadgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccessBadgeInclude<ExtArgs> | null;
    where?: Prisma.AccessBadgeWhereInput;
    orderBy?: Prisma.AccessBadgeOrderByWithRelationInput | Prisma.AccessBadgeOrderByWithRelationInput[];
    cursor?: Prisma.AccessBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessBadgeScalarFieldEnum | Prisma.AccessBadgeScalarFieldEnum[];
};
/**
 * Event without action
 */
export type EventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Event.d.ts.map