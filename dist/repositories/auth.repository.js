import { prisma } from "../config/database.js";
export const authRepository = {
    async findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    },
    async findById(id) {
        return prisma.user.findUnique({ where: { id } });
    },
    async updateUser(id, data) {
        return prisma.user.update({ where: { id }, data });
    },
    async deleteUser(id) {
        return prisma.user.delete({ where: { id } });
    },
    async createUser(data) {
        return prisma.user.create({ data });
    },
};
//# sourceMappingURL=auth.repository.js.map