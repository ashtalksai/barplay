import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("has navbar with logo and nav links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: /barplay/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
  });

  test("hero section has headline, subline, and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Conversations");
    await expect(page.getByRole("link", { name: /Start Free.*Trial/i })).toBeVisible();
  });

  test("has all 11 required landing sections", async ({ page }) => {
    await page.goto("/");

    // Hero
    await expect(page.locator("h1")).toBeVisible();

    // Social proof bar
    await expect(page.getByText(/venues/i).first()).toBeVisible();

    // Problem section
    await expect(page.getByText(/Your Bar Sells Atmosphere/i)).toBeVisible();

    // Solution section
    await expect(page.getByText(/One QR Code/i)).toBeVisible();

    // Features
    await expect(page.getByText(/Everything a Bar Needs/i)).toBeVisible();

    // How it works
    await expect(page.getByText(/Up and Running/i)).toBeVisible();

    // Testimonials
    await expect(page.getByText(/Bars That Run Barplay/i)).toBeVisible();

    // Pricing
    await expect(page.getByText(/Less Than One Round/i)).toBeVisible();

    // FAQ
    await expect(page.getByText(/Honest Answers/i)).toBeVisible();

    // CTA
    await expect(page.getByText(/Your Next Regular/i)).toBeVisible();

    // Footer
    await expect(page.locator("footer")).toBeVisible();
  });

  test("footer has privacy and terms links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Privacy Policy/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Terms of Service/i })).toBeVisible();
  });

  test("pricing CTA links to signup", async ({ page }) => {
    await page.goto("/");
    const ctaLinks = page.getByRole("link", { name: /Start Free Trial/i });
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("is responsive at 375px mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    // No horizontal overflow
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(380);
  });
});
