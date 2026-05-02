export interface SyncedLiveEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    image: string;
    category: string;
    isLive: boolean;
    isReplay: boolean;
    isFeatured: boolean;
    streamUrl: string | null;
    videoUrl: string | null;
    isFree: boolean;
    price: number;
    currency: string;
    channelName: string;
    organizerId: string;
    location: string;
    source: "feeti2";
    createdAt: string;
    updatedAt?: string;
}
interface SyncPayload {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    duration?: string;
    image?: string;
    category: string;
    isLive?: boolean;
    isFeatured?: boolean;
    streamUrl?: string;
    videoUrl?: string;
    price?: number;
    currency?: string;
    organizerId: string;
    organizerName: string;
    location: string;
}
export declare const feetiPlaySyncService: {
    upsertLiveEvent(payload: SyncPayload): Promise<SyncedLiveEvent>;
    getLiveEventById(id: string): Promise<SyncedLiveEvent>;
    listOrganizerLiveEvents(organizerId: string): Promise<SyncedLiveEvent[]>;
    deleteLiveEvent(id: string): Promise<void>;
};
export {};
//# sourceMappingURL=feetiPlaySync.service.d.ts.map