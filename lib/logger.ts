type LogLevel = "error" | "warn" | "info" | "debug";

const logLevel: Record<LogLevel, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const currentLevel = (process.env.NEXT_PUBLIC_LOG_LEVEL || "info") as LogLevel;

export const logger = {
  error: (message: string, data?: unknown) => {
    if (logLevel.error <= logLevel[currentLevel]) {
      console.error(`[ERROR] ${message}`, data);
    }
  },
  warn: (message: string, data?: unknown) => {
    if (logLevel.warn <= logLevel[currentLevel]) {
      console.warn(`[WARN] ${message}`, data);
    }
  },
  info: (message: string, data?: unknown) => {
    if (logLevel.info <= logLevel[currentLevel]) {
      console.info(`[INFO] ${message}`, data);
    }
  },
  debug: (message: string, data?: unknown) => {
    if (logLevel.debug <= logLevel[currentLevel]) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  },
};
