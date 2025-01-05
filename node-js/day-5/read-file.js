import fs from "fs";

const readStream = fs.createReadStream("largefile.txt", { encoding: "utf-8" });

readStream.on("data", (chunk) => {
  console.log("Received chunk:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File reading completed.");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
