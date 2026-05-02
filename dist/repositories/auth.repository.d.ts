import type { Role } from "../generated/prisma/client.js";
export declare const authRepository: {
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: string, data: {
        name?: string;
        email?: string;
        phone?: string | null;
        passwordHash?: string;
        interests?: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createUser(data: {
        name: string;
        email: string;
        phone?: string;
        passwordHash: string;
        role: Role;
        interests?: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        passwordHash: string;
        role: Role;
        interests: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=auth.repository.d.ts.map