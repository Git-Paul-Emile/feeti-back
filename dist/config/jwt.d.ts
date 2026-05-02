import jwt from "jsonwebtoken";
export declare const generateToken: (payload: object) => string;
export declare const verifyToken: (token: string) => string | jwt.JwtPayload;
export declare const generateRefreshToken: (payload: object) => string;
export declare const verifyRefreshToken: (token: string) => string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map