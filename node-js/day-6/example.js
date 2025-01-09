import { EventEmitter } from "events";

class Logger extends EventEmitter {
  logInfo(message) {
    this.emit("info", message);
  }

  logWarning(message) {
    this.emit("warning", message);
  }

  logError(message) {
    this.emit("error", message);
  }
}

const logger = new Logger();

logger.on("info", (message) => console.log(`INFO: ${message}`));
logger.on("warning", (message) => console.warn(`WARNING: ${message}`));
logger.on("error", (message) => console.error(`ERROR: ${message}`));

logger.logInfo("This is an informational message.");
logger.logWarning("This is a warning message.");
logger.logError("This is an error message.");
