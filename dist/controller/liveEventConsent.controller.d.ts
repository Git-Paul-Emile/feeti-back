import type { Request, Response, NextFunction } from "express";
/**
 * POST /api/live-event-consent/request-forms
 * Demande l'envoi des formulaires PDF pour un événement live/mixte.
 */
export declare function requestLiveForms(req: Request, res: Response, next: NextFunction): Promise<void>;
/**
 * POST /api/live-event-consent/consent
 * Enregistre le consentement de l'organisateur pour la diffusion live/mixte.
 */
export declare function recordConsent(req: Request, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=liveEventConsent.controller.d.ts.map