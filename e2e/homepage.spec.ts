import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/TechnOne/);
  });

  test("should display the header", async ({ page }) => {
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByText("TechnOne")).toBeVisible();
  });

  test("should display the hero section", async ({ page }) => {
    await expect(page.locator("main")).toBeVisible();
  });

  test("should navigate to sections on nav click", async ({ page }) => {
    // Click on Services nav item
    await page.getByRole("button", { name: /services/i }).first().click();

    // Section should be visible
    await expect(page.locator("#services")).toBeInViewport();
  });

  test("should display footer", async ({ page }) => {
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("should toggle language", async ({ page }) => {
    // Open language switcher
    const languageSwitcher = page.getByRole("button", {
      name: /current language/i,
    });
    await languageSwitcher.click();

    // Select Russian
    await page.getByText("Русский").click();

    // URL should include /ru
    await expect(page).toHaveURL(/\/ru/);
  });

  test("should have proper accessibility", async ({ page }) => {
    // Skip link should be available
    const skipLink = page.getByRole("link", { name: /skip to main/i });
    await expect(skipLink).toBeAttached();

    // Main content should have proper role
    await expect(page.getByRole("main")).toBeVisible();

    // Navigation should be present
    await expect(
      page.getByRole("navigation", { name: /main navigation/i })
    ).toBeVisible();
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should open mobile menu", async ({ page }) => {
    await page.goto("/");

    // Menu should initially be collapsed
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toHaveAttribute("aria-hidden", "true");

    // Click hamburger menu
    await page.getByRole("button", { name: /open menu/i }).click();

    // Menu should be expanded
    await expect(mobileMenu).toHaveAttribute("aria-hidden", "false");
  });

  test("should close mobile menu on escape", async ({ page }) => {
    await page.goto("/");

    // Open menu
    await page.getByRole("button", { name: /open menu/i }).click();

    // Press escape
    await page.keyboard.press("Escape");

    // Menu should be collapsed
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toHaveAttribute("aria-hidden", "true");
  });
});
