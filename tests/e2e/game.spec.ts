import { test, expect } from "@playwright/test";

test.describe("Guest Game — /play/[venueId]/[tableId]", () => {
  test("loads with trivia question and 4 options", async ({ page }) => {
    await page.goto("/play/test-venue/table-4");
    await expect(page.locator("h2")).toBeVisible(); // Question heading
    const buttons = page.getByRole("button");
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(4); // 4 answer options
  });

  test("clicking an answer advances to next question", async ({ page }) => {
    await page.goto("/play/test-venue/table-4");
    await expect(page.getByText("Q1")).toBeVisible();
    // Click first answer
    await page.getByRole("button").first().click();
    // Should advance to Q2 or show connection
    await page.waitForTimeout(1000);
    const hasQ2 = await page.getByText("Q2").isVisible().catch(() => false);
    const hasConnection = await page.getByText(/matched|connected|say hi/i).isVisible().catch(() => false);
    expect(hasQ2 || hasConnection).toBeTruthy();
  });

  test("shows venue and table identifier in header", async ({ page }) => {
    await page.goto("/play/my-venue/table-7");
    await expect(page.getByText(/table/i, { exact: false })).toBeVisible();
    await expect(page.getByText(/BARPLAY/i)).toBeVisible();
  });

  test("game works without login — guest access", async ({ page }) => {
    // Guest game should NOT redirect to login
    await page.goto("/play/test-venue/table-1");
    expect(page.url()).not.toContain("/login");
    await expect(page.locator("h2")).toBeVisible();
  });
});
