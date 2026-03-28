import { test, expect } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

const pagesToTest = ["/", "/about", "/pricing", "/contact"];

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    for (const path of pagesToTest) {
      test(`${path} renders at ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(path);
        await expect(page.locator("body")).toBeVisible();

        // No horizontal scroll
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        expect(scrollWidth).toBeLessThanOrEqual(vp.width + 5); // 5px tolerance
      });
    }

    test(`/ landing page has visible content at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await expect(page.locator("h1")).toBeVisible();
    });
  });
}
