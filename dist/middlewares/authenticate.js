import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError("Non authentifié - token manquant", StatusCodes.UNAUTHORIZED);
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = verifyToken(token);
        req.user = payload;
        next();
    }
    catch {
        throw new AppError("Token invalide ou expiré", StatusCodes.UNAUTHORIZED);
    }
};
export const requireRole = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
        throw new AppError("Accès refusé - permissions insuffisantes", StatusCodes.FORBIDDEN);
    }
    next();
};
// Authentification optionnelle : peuple req.user si le token est valide, sinon continue
export const optionalAuthenticate = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const payload = verifyToken(token);
            req.user = payload;
        }
        catch {
            // token invalide ou expiré : on continue sans utilisateur
        }
    }
    next();
};
//# sourceMappingURL=authenticate.js.map