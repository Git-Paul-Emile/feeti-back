import type { Request, Response } from "express";
export declare const payoutController: {
    lister(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    initier(req: Request, res: Response): Promise<void>;
    approuver(req: Request, res: Response): Promise<void>;
    executer(req: Request, res: Response): Promise<void>;
    confirmer(req: Request, res: Response): Promise<void>;
    annuler(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=payout.controller.d.ts.map