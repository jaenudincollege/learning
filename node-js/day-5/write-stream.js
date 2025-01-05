import fs from "fs";

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("First line of text\n");
writeStream.write("Second line of text\n");
writeStream.end();

writeStream.on("finish", () => {
  console.log("File writing completed");
});
