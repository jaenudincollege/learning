import http from "http";
import fs from "fs";

// creating html file
fs.writeFileSync("index.html", "<h1>I love Node js</h1>");

// read file
const indexFile = fs.readFileSync("index.html", "utf-8");

// adding style
fs.appendFileSync(
  "index.html",
  `<p style="color:red; text-align: center; font-size: 2rem; font-family: sans-serif;">I love JavaScript</p>`
);
const indexFile2 = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(indexFile2);
});

server.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
