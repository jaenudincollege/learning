import fs from "fs";

const readStream = fs.createReadStream("input.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("output.txt");

readStream.on("end", () => {
  console.log("Data copied successfully!");
});
