import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
const logRequest = (req) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
};

const server = http.createServer((req, res) => {
  logRequest(req);

  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  if (pathname.startsWith("/public/")) {
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath);
    const mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript",
    };

    const contentType = mimeTypes[ext] || "text/plain";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404: File not found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  } else if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      `<h1>Welcome!</h1><p><a href="/public/index.html">Go to Homepage</a></p>`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404</h1><p>Page not found</p>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
