import type { Request, Response } from "express";
export declare const walletController: {
    monWallet(req: Request, res: Response): Promise<void>;
    getByOrganizer(req: Request, res: Response): Promise<void>;
    monLedger(req: Request, res: Response): Promise<void>;
    ledgerByOrganizer(req: Request, res: Response): Promise<void>;
    verifierIntegrite(req: Request, res: Response): Promise<void>;
    ajustement(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=wallet.controller.d.ts.map