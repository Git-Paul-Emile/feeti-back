import dotenv from "dotenv";
import { createServer } from "http";
import { connectToDatabase } from "./config/database.js";
import app, { allowedOrigins } from "./config/app.js";
import { initSocket } from "./config/socket.js";
dotenv.config();
const DEFAULT_BACKEND_PORT = 8000;
const initializeApp = async () => {
    try {
        await connectToDatabase();
        const configuredPort = Number(process.env.PORT || DEFAULT_BACKEND_PORT);
        const port = Number.isInteger(configuredPort) && configuredPort > 0
            ? configuredPort
            : DEFAULT_BACKEND_PORT;
        const httpServer = createServer(app);
        initSocket(httpServer, allowedOrigins);
        await new Promise((resolve, reject) => {
            httpServer.listen(port, resolve);
            httpServer.once("error", reject);
        });
        process.env.PORT = String(port);
        console.log(`[feeti2-back] port configure: ${port}`);
        console.log(`[feeti2-back] serveur demarre sur http://localhost:${port}`);
    }
    catch (err) {
        console.error("Erreur au demarrage :", err);
        process.exit(1);
    }
};
initializeApp();
//# sourceMappingURL=index.js.map