import { z } from "zod";
export declare const createZoneSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    maxCapacity: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateZoneSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    maxCapacity: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const setAccessRightsSchema: z.ZodObject<{
    rights: z.ZodArray<z.ZodObject<{
        categoryId: z.ZodString;
        zoneId: z.ZodString;
        accessLevel: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const generateBadgeSchema: z.ZodObject<{
    categoryId: z.ZodString;
    holderName: z.ZodString;
    holderEmail: z.ZodString;
    ticketId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const scanSchema: z.ZodObject<{
    qrCode: z.ZodString;
    zoneId: z.ZodString;
}, z.core.$strip>;
export declare const syncOfflineSchema: z.ZodObject<{
    scans: z.ZodArray<z.ZodObject<{
        qrCode: z.ZodString;
        zoneId: z.ZodString;
        scannedAt: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const reportSuspectSchema: z.ZodObject<{
    reason: z.ZodString;
}, z.core.$strip>;
export type CreateZoneInput = z.infer<typeof createZoneSchema>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type SetAccessRightsInput = z.infer<typeof setAccessRightsSchema>;
export type GenerateBadgeInput = z.infer<typeof generateBadgeSchema>;
export type ScanInput = z.infer<typeof scanSchema>;
export type SyncOfflineInput = z.infer<typeof syncOfflineSchema>;
//# sourceMappingURL=access.validator.d.ts.map