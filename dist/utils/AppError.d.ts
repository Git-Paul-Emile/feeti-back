/**
 * AppError : Classe personnalisée pour les erreurs métier
 * Supporte optionnellement des erreurs par champ (pour la validation)
 */
export declare class AppError extends Error {
    message: string;
    statusCode: number;
    errors?: Record<string, string> | undefined;
    isOperational: boolean;
    constructor(message: string, statusCode?: number, errors?: Record<string, string> | undefined, isOperational?: boolean);
}
//# sourceMappingURL=AppError.d.ts.map