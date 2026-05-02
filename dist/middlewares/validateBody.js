import { StatusCodes } from "http-status-codes";
export const validateBody = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        const errors = {};
        result.error.issues.forEach((issue) => {
            const field = issue.path[0];
            if (field && !errors[field]) {
                errors[field] = issue.message;
            }
        });
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            status: "fail",
            message: "Données invalides",
            errors,
        });
        return;
    }
    req.body = result.data;
    next();
};
//# sourceMappingURL=validateBody.js.map