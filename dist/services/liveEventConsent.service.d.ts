export type LiveEventType = "STREAMING_LIVE" | "MIXTE";
export declare const liveEventConsentService: {
    /**
     * Envoie les formulaires PDF requis pour un événement en live ou mixte.
     * Les PDFs ne sont pas encore conçus — ce service retourne un message de succès/échec.
     */
    requestLiveForms(data: {
        organizerEmail: string;
        eventName: string;
        eventType: LiveEventType;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Enregistre le consentement de l'organisateur pour la diffusion en live/mixte.
     */
    recordConsent(data: {
        organizerEmail: string;
        eventName: string;
        eventType: LiveEventType;
        consentGiven: boolean;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
};
//# sourceMappingURL=liveEventConsent.service.d.ts.map