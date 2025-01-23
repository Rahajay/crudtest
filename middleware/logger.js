import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Mendapatkan __filename dan __dirname untuk ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup log stream ke file
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

// Ekspor logger
export const logger = morgan("combined", { stream: logStream });
