import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });

  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error");
      return;
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
