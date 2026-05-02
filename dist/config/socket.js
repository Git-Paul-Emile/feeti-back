import { Server as SocketIOServer } from "socket.io";
let io = null;
export function initSocket(httpServer, allowedOrigins) {
    io = new SocketIOServer(httpServer, {
        cors: { origin: allowedOrigins, credentials: true },
        path: "/socket.io",
        transports: ["websocket", "polling"],
    });
    io.on("connection", (socket) => {
        const eventId = socket.handshake.query.eventId;
        if (eventId)
            socket.join(`event:${eventId}`);
        socket.on("join-event", (id) => {
            if (typeof id === "string")
                socket.join(`event:${id}`);
        });
    });
    return io;
}
export function getIO() {
    if (!io)
        throw new Error("Socket.io not initialized");
    return io;
}
//# sourceMappingURL=socket.js.map