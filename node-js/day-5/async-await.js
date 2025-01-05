import fs from "fs/promises";

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf-8");
    console.log("File content: ", data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
