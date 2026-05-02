import { StatusCodes } from "http-status-codes";
/**
 * AppError : Classe personnalisée pour les erreurs métier
 * Supporte optionnellement des erreurs par champ (pour la validation)
 */
export class AppError extends Error {
    message;
    statusCode;
    errors;
    isOperational;
    constructor(message, statusCode = StatusCodes.INTERNAL_SERVER_ERROR, errors, isOperational = true) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errors = errors;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
//# sourceMappingURL=AppError.js.map