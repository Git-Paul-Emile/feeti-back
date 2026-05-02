/**
 * ═══════════════════════════════════════════════════════════════════════
 *  CONTROLLER PAIEMENT
 *  Orchestre : simulation paiement → achat billet → email confirmation
 * ═══════════════════════════════════════════════════════════════════════
 */
import type { Request, Response } from "express";
export declare const createStripeIntent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const initializeMobileMoney: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getMobileMoneyStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const initializePaystack: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const confirmPaymentAndPurchase: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=payment.controller.d.ts.map