import type { RegisterInput, LoginInput, UpdateProfileInput, ChangePasswordInput } from "../validators/auth.validator.js";
import type { Role } from "../generated/prisma/client.js";
export declare const authService: {
    register(data: RegisterInput): Promise<{
        user: Omit<{
            id: string;
            email: string;
            name: string;
            phone: string | null;
            passwordHash: string;
            role: Role;
            interests: string;
            createdAt: Date;
            updatedAt: Date;
        }, "passwordHash">;
        accessToken: string;
        refreshToken: string;
    }>;
    login(data: LoginInput): Promise<{
        user: Omit<{
            id: string;
            email: string;
            name: string;
            phone: string | null;
            passwordHash: string;
            role: Role;
            interests: string;
            createdAt: Date;
            updatedAt: Date;
        }, "passwordHash">;
        accessToken: string;
        refreshToken: string;
    }>;
    getMe(userId: string): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    updateProfile(userId: string, data: UpdateProfileInput): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    changePassword(userId: string, data: ChangePasswordInput): Promise<void>;
    deleteAccount(userId: string, password: string): Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map