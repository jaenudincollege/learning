import fs from "fs/promises";

fs.readFile("example.txt", "utf-8")
  .then((data) => {
    console.log("File content: ", data);
  })
  .catch((err) => console.error(err));
