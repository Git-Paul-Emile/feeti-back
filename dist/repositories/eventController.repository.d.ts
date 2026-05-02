export declare const eventControllerRepository: {
    /** Assigner un contrôleur à un événement */
    assign(eventId: string, controllerId: string): Promise<{
        controller: {
            id: string;
            email: string;
            name: string;
            phone: string | null;
        };
    } & {
        id: string;
        eventId: string;
        assignedAt: Date;
        controllerId: string;
    }>;
    /** Retirer un contrôleur d'un événement */
    remove(eventId: string, controllerId: string): Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    /** Lister les contrôleurs d'un événement */
    findByEvent(eventId: string): Promise<({
        controller: {
            id: string;
            email: string;
            name: string;
            phone: string | null;
        };
    } & {
        id: string;
        eventId: string;
        assignedAt: Date;
        controllerId: string;
    })[]>;
    /** Lister les événements d'un contrôleur */
    findByController(controllerId: string): Promise<({
        event: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: string;
            status: string;
            title: string;
            description: string;
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
            eventType: import("../generated/prisma/enums.js").EventType;
            isFeatured: boolean;
            isFavorite: boolean;
            streamUrl: string | null;
            videoUrl: string | null;
            promotionType: string | null;
            promotionStatus: string | null;
            promotionStartDate: Date | null;
            promotionEndDate: Date | null;
            countryCode: string | null;
            organizerId: string;
        };
    } & {
        id: string;
        eventId: string;
        assignedAt: Date;
        controllerId: string;
    })[]>;
    /** Vérifier si un contrôleur est affecté à un événement */
    isAssigned(eventId: string, controllerId: string): Promise<boolean>;
};
//# sourceMappingURL=eventController.repository.d.ts.map