import type { Request, Response } from "express";
export declare const reportingController: {
    dashboardOrganisateur(req: Request, res: Response): Promise<void>;
    dashboardAdmin(req: Request, res: Response): Promise<void>;
    rapportTVA(req: Request, res: Response): Promise<void>;
    tendances(req: Request, res: Response): Promise<void>;
    remboursements(req: Request, res: Response): Promise<void>;
    journalAudit(req: Request, res: Response): Promise<void>;
    auditRessource(req: Request, res: Response): Promise<void>;
    integritéAudit(req: Request, res: Response): Promise<void>;
    exportCSV(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=reporting.controller.d.ts.map