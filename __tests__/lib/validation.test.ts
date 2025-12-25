import { validateFile, sanitizeFileName } from "@/lib/validation";

describe("Validation Utils", () => {
  describe("validateFile", () => {
    it("should accept valid JPEG files", () => {
      const file = new File(["content"], "test.jpg", { type: "image/jpeg" });
      const result = validateFile(file);
      expect(result.isValid).toBe(true);
    });

    it("should accept valid PNG files", () => {
      const file = new File(["content"], "test.png", { type: "image/png" });
      const result = validateFile(file);
      expect(result.isValid).toBe(true);
    });

    it("should reject invalid file types", () => {
      const file = new File(["content"], "test.txt", { type: "text/plain" });
      const result = validateFile(file);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.error).toContain("not supported");
      }
    });

    it("should reject files exceeding size limit", () => {
      const largeContent = new Uint8Array(9 * 1024 * 1024); // 9MB
      const file = new File([largeContent], "test.jpg", { type: "image/jpeg" });
      const result = validateFile(file);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.error).toContain("exceeds");
      }
    });
  });

  describe("sanitizeFileName", () => {
    it("should remove special characters", () => {
      const result = sanitizeFileName("file@#$%.jpg");
      expect(result).toBe("file____.jpg");
    });

    it("should preserve valid characters", () => {
      const result = sanitizeFileName("my-file_123.jpg");
      expect(result).toBe("my-file_123.jpg");
    });
  });
});
