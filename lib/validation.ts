const MAX_FILE_SIZE = parseInt(
  process.env.NEXT_PUBLIC_MAX_FILE_SIZE || "8388608"
);
const ALLOWED_TYPES = (
  process.env.NEXT_PUBLIC_ALLOWED_MIME_TYPES ||
  "image/jpeg,image/jpg,image/png"
).split(",");

export interface ValidationError {
  isValid: false;
  error: string;
}

export interface ValidationSuccess {
  isValid: true;
}

export type ValidationResult = ValidationError | ValidationSuccess;

export function validateFile(file: File): ValidationResult {
  if (!file) {
    return {
      isValid: false,
      error: "File is required.",
    };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: `File format not supported. Allowed formats: ${ALLOWED_TYPES.join(", ")}`,
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    const maxSizeMB = (MAX_FILE_SIZE / (1024 * 1024)).toFixed(0);
    return {
      isValid: false,
      error: `File size exceeds maximum limit of ${maxSizeMB}MB.`,
    };
  }

  return { isValid: true };
}

export function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}
