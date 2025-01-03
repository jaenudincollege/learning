import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
        <h1>Welcome to the Homepage!</h1>
        <p>This is HTML Content</p>
        `);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
        <h1>About me</h1>
        <p>I am learning node js</p>
        `);
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`<h1>404</h1><p>Page not found</p>`);
  }
});

server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
