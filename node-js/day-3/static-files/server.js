import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true); // Parse the URL correctly
  const pathName = parseUrl.pathname; // Get the path (e.g., "/")
  const query = parseUrl.query; // Get query parameters (e.g., { name: "Jay" })

  if (pathName === "/") {
    // Dynamic content using query parameters
    const name = query.name || "Guest"; // Default to "Guest" if no name is provided
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Welcome, ${name}!</h1><p>This is the homepage.</p>`);
  } else if (pathName === "/about") {
    // Serve the "about.html" file
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
    // Handle 404 errors
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404</h1><p>Page not found</p>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
