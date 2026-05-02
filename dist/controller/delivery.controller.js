import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { jsonResponse } from "../utils/response.js";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
// ── Public ──────────────────────────────────────────────────────────────────
// GET /api/delivery/zones?countryCode=GA
export const getZonesByCountry = controllerWrapper(async (req, res) => {
    const { countryCode } = req.query;
    const zones = await prisma.deliveryZone.findMany({
        where: {
            isActive: true,
            ...(countryCode ? { countryCode } : {}),
        },
        include: { country: { select: { name: true, flag: true } } },
        orderBy: { name: "asc" },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Zones récupérées", data: zones }));
});
// GET /api/delivery/cities?countryCode=GA
export const getCitiesByCountry = controllerWrapper(async (req, res) => {
    const { countryCode, zoneId } = req.query;
    const cities = await prisma.city.findMany({
        where: {
            isActive: true,
            ...(countryCode ? { countryCode } : {}),
            ...(zoneId ? { zoneId } : {}),
        },
        include: { zone: { select: { name: true, fee: true, currency: true } } },
        orderBy: { name: "asc" },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Villes récupérées", data: cities }));
});
// ── Admin CRUD — Zones ───────────────────────────────────────────────────────
// GET /api/admin/delivery-zones
export const getAllZones = controllerWrapper(async (_req, res) => {
    const zones = await prisma.deliveryZone.findMany({
        include: {
            country: { select: { name: true, flag: true, code: true } },
            _count: { select: { cities: true } },
        },
        orderBy: [{ countryCode: "asc" }, { name: "asc" }],
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Zones récupérées", data: zones }));
});
// POST /api/admin/delivery-zones
export const createZone = controllerWrapper(async (req, res) => {
    const { name, countryCode, fee, currency, description } = req.body;
    if (!name || !countryCode || fee == null)
        throw new AppError("Champs obligatoires manquants", StatusCodes.BAD_REQUEST);
    const country = await prisma.country.findUnique({ where: { code: countryCode } });
    if (!country)
        throw new AppError("Pays introuvable", StatusCodes.NOT_FOUND);
    const zone = await prisma.deliveryZone.create({
        data: { name, countryCode, fee: Number(fee), currency: currency || "FCFA", description },
        include: { country: { select: { name: true, flag: true, code: true } } },
    });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Zone créée", data: zone }));
});
// PUT /api/admin/delivery-zones/:id
export const updateZone = controllerWrapper(async (req, res) => {
    const id = String(req.params.id);
    const { name, fee, currency, description, isActive } = req.body;
    const zone = await prisma.deliveryZone.findUnique({ where: { id } });
    if (!zone)
        throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
    const updated = await prisma.deliveryZone.update({
        where: { id },
        data: {
            ...(name !== undefined && { name }),
            ...(fee !== undefined && { fee: Number(fee) }),
            ...(currency !== undefined && { currency }),
            ...(description !== undefined && { description }),
            ...(isActive !== undefined && { isActive }),
        },
        include: { country: { select: { name: true, flag: true, code: true } } },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Zone mise à jour", data: updated }));
});
// DELETE /api/admin/delivery-zones/:id
export const deleteZone = controllerWrapper(async (req, res) => {
    const id = String(req.params.id);
    const zone = await prisma.deliveryZone.findUnique({ where: { id }, include: { _count: { select: { cities: true } } } });
    if (!zone)
        throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
    if (zone._count.cities > 0)
        throw new AppError("Impossible de supprimer : des villes sont liées à cette zone", StatusCodes.CONFLICT);
    await prisma.deliveryZone.delete({ where: { id } });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Zone supprimée", data: null }));
});
// ── Admin CRUD — Cities ──────────────────────────────────────────────────────
// GET /api/admin/delivery-cities
export const getAllCities = controllerWrapper(async (_req, res) => {
    const cities = await prisma.city.findMany({
        include: {
            country: { select: { name: true, flag: true, code: true } },
            zone: { select: { name: true, fee: true, currency: true } },
        },
        orderBy: [{ countryCode: "asc" }, { name: "asc" }],
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Villes récupérées", data: cities }));
});
// POST /api/admin/delivery-cities
export const createCity = controllerWrapper(async (req, res) => {
    const { name, countryCode, zoneId } = req.body;
    if (!name || !countryCode || !zoneId)
        throw new AppError("Champs obligatoires manquants", StatusCodes.BAD_REQUEST);
    const zone = await prisma.deliveryZone.findUnique({ where: { id: zoneId } });
    if (!zone)
        throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
    if (zone.countryCode !== countryCode)
        throw new AppError("La zone n'appartient pas à ce pays", StatusCodes.BAD_REQUEST);
    const city = await prisma.city.create({
        data: { name, countryCode, zoneId },
        include: {
            country: { select: { name: true, flag: true, code: true } },
            zone: { select: { name: true, fee: true, currency: true } },
        },
    });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Ville créée", data: city }));
});
// PUT /api/admin/delivery-cities/:id
export const updateCity = controllerWrapper(async (req, res) => {
    const id = String(req.params.id);
    const { name, zoneId, isActive } = req.body;
    const city = await prisma.city.findUnique({ where: { id } });
    if (!city)
        throw new AppError("Ville introuvable", StatusCodes.NOT_FOUND);
    if (zoneId) {
        const zone = await prisma.deliveryZone.findUnique({ where: { id: zoneId } });
        if (!zone)
            throw new AppError("Zone introuvable", StatusCodes.NOT_FOUND);
        if (zone.countryCode !== city.countryCode)
            throw new AppError("La zone n'appartient pas à ce pays", StatusCodes.BAD_REQUEST);
    }
    const updated = await prisma.city.update({
        where: { id },
        data: {
            ...(name !== undefined && { name }),
            ...(zoneId !== undefined && { zoneId }),
            ...(isActive !== undefined && { isActive }),
        },
        include: {
            country: { select: { name: true, flag: true, code: true } },
            zone: { select: { name: true, fee: true, currency: true } },
        },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Ville mise à jour", data: updated }));
});
// DELETE /api/admin/delivery-cities/:id
export const deleteCity = controllerWrapper(async (req, res) => {
    const id = String(req.params.id);
    const city = await prisma.city.findUnique({ where: { id } });
    if (!city)
        throw new AppError("Ville introuvable", StatusCodes.NOT_FOUND);
    await prisma.city.delete({ where: { id } });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Ville supprimée", data: null }));
});
//# sourceMappingURL=delivery.controller.js.map