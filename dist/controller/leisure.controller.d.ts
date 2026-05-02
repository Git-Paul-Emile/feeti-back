import type { Request, Response } from 'express';
export declare const getAllLeisureCategories: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getAllLeisureItems: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getLeisureItemById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getMyLeisureFavorites: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const checkLeisureFavorite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const toggleLeisureFavorite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getAllLeisureAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const createLeisureItem: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const updateLeisureItem: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const deleteLeisureItem: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const createLeisureCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const updateLeisureCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const deleteLeisureCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=leisure.controller.d.ts.map