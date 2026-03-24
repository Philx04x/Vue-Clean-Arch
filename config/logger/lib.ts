import LocalLogger from "./LocalLogger";
import RemoteLogger from "./RemoteLogger";

export interface ILogger {
  log(
    level: "INFO" | "ERROR" | "WARNING" | "DEFAULT",
    logEntry: string,
  ): Promise<void>;
}

class Logger {
  private isLoggerLocal = true;
  private isLoggerRemote = false;

  private loggerLocal = new LocalLogger();
  private loggerRemote = new RemoteLogger();

  constructor(isLoggerLocal?: boolean, isLoggerRemote?: boolean) {
    this.isLoggerLocal = isLoggerLocal ?? true;
    this.isLoggerRemote = isLoggerRemote ?? false;
  }

  setLoggerLocal(isLoggerLocal: boolean): Logger {
    this.isLoggerLocal = isLoggerLocal;

    return this;
  }

  setLoggerRemote(isLoggerRemote: boolean): Logger {
    this.isLoggerRemote = isLoggerRemote;

    return this;
  }

  log(level: "INFO" | "ERROR" | "WARNING" | "DEFAULT", msg: string): void {
    const entry = this.buildLogEntry(level, msg);

    if (this.isLoggerLocal) {
      this.loggerLocal.log(level, entry);
    }

    if (this.isLoggerRemote) {
      this.loggerRemote.log(level, entry);
    }
  }

  private buildLogEntry(
    level: "INFO" | "ERROR" | "WARNING" | "DEFAULT",
    msg: string,
  ): string {
    const date = new Date();

    return JSON.stringify({
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}`,
      level: level,
      msg: msg,
    });
  }
}

export const LOGGER = new Logger().setLoggerLocal(true).setLoggerRemote(false);
