import type { Request, Response } from "express";
export declare const createEvent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getMyEvents: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getAllEvents: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getEventById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const deleteEvent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const toggleSalesBlocked: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const toggleFavorite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const checkFavorite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getMyFavorites: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const updateEvent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=event.controller.d.ts.map