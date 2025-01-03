import fs from "fs";

// write file
fs.writeFileSync("example.txt", "This file created in this code");
console.log("File created");

// read file
// const content = fs.readFileSync("example.txt", "utf-8");
// console.log(content);

// append text
// fs.appendFileSync(
//   "example.txt",
//   "\nthis is line that we add using appendFileSync"
// );

// delete file
// fs.unlinkSync("example.txt");
// console.log("File deleted");

// try write another text => will remove the text in the file
// fs.writeFileSync("example.txt", "this is another text to testing");
