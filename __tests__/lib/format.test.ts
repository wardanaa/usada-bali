import { formatFileSize, formatConfidence, formatDate } from "@/lib/format";

describe("Format Utils", () => {
  describe("formatFileSize", () => {
    it("should format bytes correctly", () => {
      expect(formatFileSize(0)).toBe("0 Bytes");
      expect(formatFileSize(1024)).toBe("1 KB");
      expect(formatFileSize(1024 * 1024)).toBe("1 MB");
      expect(formatFileSize(1536)).toBe("1.5 KB");
    });
  });

  describe("formatConfidence", () => {
    it("should format confidence score as percentage", () => {
      expect(formatConfidence(92.5)).toBe("93%");
      expect(formatConfidence(100)).toBe("100%");
      expect(formatConfidence(85.3)).toBe("85%");
    });
  });

  describe("formatDate", () => {
    it("should format date in Indonesian locale", () => {
      const date = new Date("2025-12-25");
      const formatted = formatDate(date);
      expect(formatted).toContain("25");
    });
  });
});
