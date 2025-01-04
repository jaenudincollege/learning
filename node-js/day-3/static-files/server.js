import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
