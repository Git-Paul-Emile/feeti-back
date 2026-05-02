import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { jsonResponse } from "../utils/response.js";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import { AppError } from "../utils/AppError.js";
const ALLOWED_KEYS = ["platformName", "commissionRate", "tvaRate", "defaultCurrency", "maintenanceMode"];
const DEFAULTS = {
    platformName: "Feeti",
    commissionRate: "10",
    tvaRate: "18",
    defaultCurrency: "fcfa",
    maintenanceMode: "false",
};
// GET /api/admin/settings
export const getSettings = controllerWrapper(async (_req, res) => {
    const rows = await prisma.platformSetting.findMany();
    const map = { ...DEFAULTS };
    for (const row of rows)
        map[row.key] = row.value;
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Paramètres récupérés", data: map }));
});
// PUT /api/admin/settings
export const updateSettings = controllerWrapper(async (req, res) => {
    const body = req.body;
    const actorId = req.user.userId;
    const upserts = [];
    for (const key of ALLOWED_KEYS) {
        if (key in body) {
            const val = String(body[key]);
            if (key === "commissionRate") {
                const n = parseFloat(val);
                if (isNaN(n) || n < 0 || n > 100)
                    throw new AppError("La commission doit être entre 0 et 100", StatusCodes.BAD_REQUEST);
            }
            if (key === "tvaRate") {
                const n = parseFloat(val);
                if (isNaN(n) || n < 0 || n > 100)
                    throw new AppError("Le taux de TVA doit être entre 0 et 100", StatusCodes.BAD_REQUEST);
            }
            upserts.push(prisma.platformSetting.upsert({
                where: { key },
                create: { key, value: val, updatedBy: actorId },
                update: { value: val, updatedBy: actorId },
            }));
        }
    }
    if (upserts.length === 0)
        throw new AppError("Aucun paramètre valide fourni", StatusCodes.BAD_REQUEST);
    await Promise.all(upserts);
    const rows = await prisma.platformSetting.findMany();
    const map = { ...DEFAULTS };
    for (const row of rows)
        map[row.key] = row.value;
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Paramètres mis à jour", data: map }));
});
//# sourceMappingURL=settings.controller.js.map