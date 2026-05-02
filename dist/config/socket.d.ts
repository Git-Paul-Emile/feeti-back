import { Server as SocketIOServer } from "socket.io";
import type { Server as HTTPServer } from "http";
export declare function initSocket(httpServer: HTTPServer, allowedOrigins: string[]): SocketIOServer;
export declare function getIO(): SocketIOServer;
//# sourceMappingURL=socket.d.ts.map