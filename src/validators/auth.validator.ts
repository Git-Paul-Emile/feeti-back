import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{8,15}$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
  role: z.enum(["user", "organizer"]).optional(),
  interests: z.array(z.string()).optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .optional(),
  email: z.string().email("Adresse email invalide").optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9]{8,15}$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal(""))
    .nullable(),
  interests: z.array(z.string()).optional(),
}).refine((d) => Object.keys(d).length > 0, {
  message: "Au moins un champ doit être fourni",
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Le mot de passe actuel est requis"),
  newPassword: z
    .string()
    .min(8, "Le nouveau mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le nouveau mot de passe doit contenir au moins une majuscule")
    .regex(/[0-9]/, "Le nouveau mot de passe doit contenir au moins un chiffre"),
  confirmPassword: z.string().min(1, "La confirmation est requise"),
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
