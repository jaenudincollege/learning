import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Directory name:", __dirname);

// Join paths
const filePath = path.join(__dirname, "example.txt");
console.log("File path:", filePath);

// Get the file extension
console.log("File extension:", path.extname(filePath));
