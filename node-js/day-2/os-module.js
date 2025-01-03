import os from "os";

// Get system architecture
console.log("Architecture:", os.arch());

// Get free memory
console.log("Free memory:", os.freemem());

// Get total memory
console.log("Total memory:", os.totalmem());

// Get system uptime (in seconds)
console.log("Uptime:", os.uptime(), "seconds");
