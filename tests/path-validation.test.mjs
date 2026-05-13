import { describe, expect, it } from "vitest";

describe("path validation", () => {
  const suspiciousPatterns = [
    "<script>alert('xss')</script>",
    "ignore previous instructions",
    "javascript:alert(1)",
  ];

  const validPatterns = ["/about", "/missing-page", "/student/projects"];

  function isSuspicious(value) {
    const lowered = value.toLowerCase();

    return (
      lowered.includes("<script") ||
      lowered.includes("ignore previous instructions") ||
      lowered.includes("javascript:")
    );
  }

  it("rejects suspicious input", () => {
    suspiciousPatterns.forEach((value) => {
      expect(isSuspicious(value)).toBe(true);
    });
  });

  it("allows normal path input", () => {
    validPatterns.forEach((value) => {
      expect(isSuspicious(value)).toBe(false);
    });
  });
});
