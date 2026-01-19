import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll to contact section
    await page.locator("#contact").scrollIntoViewIfNeeded();
  });

  test("should display contact form", async ({ page }) => {
    await expect(page.locator("#contact")).toBeVisible();
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test("should show validation errors for empty form submission", async ({
    page,
  }) => {
    // Click submit without filling form
    await page.getByRole("button", { name: /send/i }).click();

    // Should show validation errors
    await expect(page.getByRole("alert")).toHaveCount(3);
  });

  test("should clear validation errors when user types", async ({ page }) => {
    // Submit empty form
    await page.getByRole("button", { name: /send/i }).click();

    // Verify errors are shown
    await expect(page.getByRole("alert")).toHaveCount(3);

    // Start typing in name field
    await page.getByLabel(/name/i).fill("John Doe");

    // Name error should be cleared
    await expect(page.getByRole("alert")).toHaveCount(2);
  });

  test("should have proper form accessibility", async ({ page }) => {
    // All inputs should have labels
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();

    // Inputs should have proper autocomplete
    await expect(page.getByLabel(/name/i)).toHaveAttribute(
      "autocomplete",
      "name"
    );
    await expect(page.getByLabel(/phone/i)).toHaveAttribute(
      "autocomplete",
      "tel"
    );
  });

  test("should display contact info", async ({ page }) => {
    // Email link should be visible
    await expect(
      page.getByRole("link", { name: /oqiljondadaxanov@gmail.com/i })
    ).toBeVisible();

    // Phone link should be visible
    await expect(
      page.getByRole("link", { name: /\+998 99 109 34 14/i })
    ).toBeVisible();
  });
});
