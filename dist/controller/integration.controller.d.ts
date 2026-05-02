import type { Request, Response } from "express";
/**
 * GET /api/integration/streaming-events
 * Expose les événements feeti2 avec streamUrl ou isLive=true
 * Consommé par feetiPlay pour synchroniser le catalogue.
 */
export declare const getStreamingEvents: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=integration.controller.d.ts.map