import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { authRepository } from "../repositories/auth.repository.js";
import { generateToken, generateRefreshToken } from "../config/jwt.js";
import type { RegisterInput, LoginInput, UpdateProfileInput, ChangePasswordInput } from "../validators/auth.validator.js";
import type { Role } from "../generated/prisma/client.js";

function omitPassword<T extends { passwordHash: string }>(user: T) {
  const { passwordHash: _, ...rest } = user;
  return rest;
}

export const authService = {
  async register(data: RegisterInput) {
    const existing = await authRepository.findByEmail(data.email);
    if (existing) {
      throw new AppError("Un compte avec cet email existe déjà", StatusCodes.CONFLICT);
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT || "10");
    const passwordHash = await bcrypt.hash(data.password, saltRounds);

    const user = await authRepository.createUser({
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      passwordHash,
      role: (data.role || "user") as Role,
      interests: data.interests ? JSON.stringify(data.interests) : "[]",
    });

    const accessToken = generateToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    return { user: omitPassword(user), accessToken, refreshToken };
  },

  async login(data: LoginInput) {
    const user = await authRepository.findByEmail(data.email);
    if (!user) {
      throw new AppError("Email ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    const passwordMatch = await bcrypt.compare(data.password, user.passwordHash);
    if (!passwordMatch) {
      throw new AppError("Email ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    const accessToken = generateToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    return { user: omitPassword(user), accessToken, refreshToken };
  },

  async getMe(userId: string) {
    const user = await authRepository.findById(userId);
    if (!user) throw new AppError("Utilisateur non trouvé", StatusCodes.NOT_FOUND);
    return omitPassword(user);
  },

  async updateProfile(userId: string, data: UpdateProfileInput) {
    // Si l'email change, vérifier qu'il n'est pas déjà pris
    if (data.email) {
      const existing = await authRepository.findByEmail(data.email);
      if (existing && existing.id !== userId) {
        throw new AppError("Cet email est déjà utilisé par un autre compte", StatusCodes.CONFLICT);
      }
    }
    const updated = await authRepository.updateUser(userId, {
      ...(data.name      !== undefined && { name: data.name }),
      ...(data.email     !== undefined && { email: data.email }),
      ...(data.phone     !== undefined && { phone: data.phone || null }),
      ...(data.interests !== undefined && { interests: JSON.stringify(data.interests) }),
    });
    return omitPassword(updated);
  },

  async changePassword(userId: string, data: ChangePasswordInput) {
    const user = await authRepository.findById(userId);
    if (!user) throw new AppError("Utilisateur non trouvé", StatusCodes.NOT_FOUND);

    const match = await bcrypt.compare(data.currentPassword, user.passwordHash);
    if (!match) {
      throw new AppError("Mot de passe actuel incorrect", StatusCodes.UNAUTHORIZED, {
        currentPassword: "Mot de passe actuel incorrect",
      });
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT || "10");
    const passwordHash = await bcrypt.hash(data.newPassword, saltRounds);
    await authRepository.updateUser(userId, { passwordHash });
  },

  async deleteAccount(userId: string, password: string) {
    const user = await authRepository.findById(userId);
    if (!user) throw new AppError("Utilisateur non trouvé", StatusCodes.NOT_FOUND);

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      throw new AppError("Mot de passe incorrect", StatusCodes.UNAUTHORIZED, {
        password: "Mot de passe incorrect",
      });
    }

    await authRepository.deleteUser(userId);
  },
};
