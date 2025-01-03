import fs from "fs";

fs.writeFileSync("notes.txt", "Initial text");
console.log("File created");

fs.appendFileSync("notes.txt", "\nAppending a text to notes.txt");
console.log("Appending text success");

import simpleSum from "./mathModule.js";

const result = simpleSum(10, 20);
console.log(result)
