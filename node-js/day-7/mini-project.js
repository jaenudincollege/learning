import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = () => {
  console.log(`
  File Management App
  ====================
  1. Create a File
  2. Read a File
  3. Update a File
  4. Delete a File
  5. Exit
  `);
  rl.question("Choose an option: ", (option) => {
    handleOption(option);
  });
};

const handleOption = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter file name: ", (fileName) => {
        rl.question("Enter file content: ", (content) => {
          fs.writeFileSync(fileName, content);
          console.log(`${fileName} created!`);
          menu();
        });
      });
      break;
    case "2":
      rl.question("Enter file name to read: ", (fileName) => {
        try {
          const data = fs.readFileSync(fileName, "utf-8");
          console.log(`\nContents of ${fileName}:\n${data}`);
        } catch (err) {
          console.error("Error reading file:", err.message);
        }
        menu();
      });
      break;
    case "3":
      rl.question("Enter file name to update: ", (fileName) => {
        rl.question("Enter content to append: ", (content) => {
          try {
            fs.appendFileSync(fileName, content);
            console.log(`${fileName} updated!`);
          } catch (err) {
            console.error("Error updating file:", err.message);
          }
          menu();
        });
      });
      break;
    case "4":
      rl.question("Enter file name to delete: ", (fileName) => {
        try {
          fs.unlinkSync(fileName);
          console.log(`${fileName} deleted!`);
        } catch (err) {
          console.error("Error deleting file:", err.message);
        }
        menu();
      });
      break;
    case "5":
      console.log("Exiting File Management App...");
      rl.close();
      break;
    default:
      console.log("Invalid option. Try again.");
      menu();
      break;
  }
};

menu();
