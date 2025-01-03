import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text-plain");
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text-plain");
    res.end("About me: I love JavaScript");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text-plain");
    res.end("404: Page not found");
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
