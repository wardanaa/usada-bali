import { logger } from "@/lib/logger";

describe("Logger", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "info").mockImplementation(() => {});
    jest.spyOn(console, "debug").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should log error messages", () => {
    logger.error("Test error");
    expect(console.error).toHaveBeenCalledWith(
      "[ERROR] Test error",
      undefined
    );
  });

  it("should log warning messages", () => {
    logger.warn("Test warning");
    expect(console.warn).toHaveBeenCalledWith("[WARN] Test warning", undefined);
  });

  it("should log info messages", () => {
    logger.info("Test info");
    expect(console.info).toHaveBeenCalledWith("[INFO] Test info", undefined);
  });

  it("should log with additional data", () => {
    const data = { key: "value" };
    logger.error("Test error", data);
    expect(console.error).toHaveBeenCalledWith("[ERROR] Test error", data);
  });
});
