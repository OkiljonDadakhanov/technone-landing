import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", true && "included", false && "excluded")).toBe(
      "base included"
    );
  });

  it("should handle undefined and null", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });

  it("should merge tailwind classes correctly", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should handle objects with conditional classes", () => {
    expect(
      cn({
        base: true,
        active: true,
        disabled: false,
      })
    ).toBe("base active");
  });

  it("should handle empty inputs", () => {
    expect(cn()).toBe("");
    expect(cn("")).toBe("");
  });
});
