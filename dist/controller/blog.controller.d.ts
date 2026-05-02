import type { Request, Response } from "express";
export declare const getAllBlogCategories: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const createBlogCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const updateBlogCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const deleteBlogCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getAllBlogPosts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getAllBlogPostsAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getBlogPostById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getRelatedBlogPosts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const createBlogPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const updateBlogPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const deleteBlogPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const getBlogStats: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=blog.controller.d.ts.map