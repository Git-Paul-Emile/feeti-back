import type { Request, Response } from "express";
/** Créer un compte contrôleur et l'affecter à un événement */
export declare const createAndAssignController: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Affecter un contrôleur existant (par email) à un événement */
export declare const assignExistingController: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Lister les contrôleurs d'un événement */
export declare const listEventControllers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Retirer un contrôleur d'un événement */
export declare const removeController: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Événements assignés au contrôleur connecté */
export declare const getMyAssignedEvents: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Historique des scans du contrôleur connecté */
export declare const getMyScanHistory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/** Vérifier un billet (contrôleur) — uniquement pour ses événements assignés */
export declare const verifyTicketAsController: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=controllerHandler.controller.d.ts.map