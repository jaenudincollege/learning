import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

eventEmitter.on("hi", (name) => {
  console.log(`Hi ${name}`);
});

eventEmitter.on("greet", (name) => {
  console.log(`How are you ${name}\n`);
});

eventEmitter.emit("greet", "Jay");
eventEmitter.emit("hi", "Rachel");
eventEmitter.emit("greet", "Rachel");
