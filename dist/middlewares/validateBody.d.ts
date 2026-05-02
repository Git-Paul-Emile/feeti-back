import type { Request, Response, NextFunction } from "express";
type Schema = {
    safeParse: (data: unknown) => {
        success: boolean;
        data?: any;
        error?: any;
    };
};
export declare const validateBody: (schema: Schema) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validateBody.d.ts.map