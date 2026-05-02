import type { Request, Response } from "express";
export declare const transactionController: {
    lister(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    creer(req: Request, res: Response): Promise<void>;
    changerStatut(req: Request, res: Response): Promise<void>;
    completer(req: Request, res: Response): Promise<void>;
    rembourser(req: Request, res: Response): Promise<void>;
    simuler(req: Request, res: Response): Promise<void>;
    exportCSV(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=transaction.controller.d.ts.map