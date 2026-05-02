import { z } from "zod";
export declare const createBlogCategorySchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateBlogCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const createBlogPostSchema: z.ZodObject<{
    title: z.ZodString;
    excerpt: z.ZodString;
    content: z.ZodString;
    categorySlug: z.ZodString;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    featuredImage: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    status: z.ZodDefault<z.ZodEnum<{
        published: "published";
        draft: "draft";
    }>>;
    isFeatured: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    readTime: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateBlogPostSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    excerpt: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    categorySlug: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
    featuredImage: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        published: "published";
        draft: "draft";
    }>>>;
    isFeatured: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    readTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type CreateBlogCategoryInput = z.infer<typeof createBlogCategorySchema>;
export type UpdateBlogCategoryInput = z.infer<typeof updateBlogCategorySchema>;
export type CreateBlogPostInput = z.infer<typeof createBlogPostSchema>;
export type UpdateBlogPostInput = z.infer<typeof updateBlogPostSchema>;
//# sourceMappingURL=blog.validator.d.ts.map