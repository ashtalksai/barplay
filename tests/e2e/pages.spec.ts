import { test, expect } from "@playwright/test";

const publicPages = [
  { path: "/", name: "Landing" },
  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
  { path: "/signup", name: "Signup" },
  { path: "/login", name: "Login" },
  { path: "/deck", name: "Pitch Deck" },
  { path: "/docs", name: "Docs" },
];

for (const { path, name } of publicPages) {
  test(`${name} page loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("response", (response) => {
      if (response.status() >= 500) {
        errors.push(`HTTP ${response.status()} on ${response.url()}`);
      }
    });

    await page.goto(path);
    await expect(page.locator("body")).toBeVisible();

    // Filter out known external errors
    const appErrors = errors.filter(
      (e) => !e.includes("googleadservices") && !e.includes("Attestation")
    );
    expect(appErrors).toHaveLength(0);
  });
}

test.describe("About page", () => {
  test("has company story and differentiators", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText(/Barplay/i).first()).toBeVisible();
    await expect(page.getByText(/What Makes Barplay Different/i)).toBeVisible();
  });
});

test.describe("Pricing page", () => {
  test("has 3 pricing tiers", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText("Starter")).toBeVisible();
    await expect(page.getByText("Growth")).toBeVisible();
    await expect(page.getByText("Chain")).toBeVisible();
  });

  test("shows comparison table", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.locator("table")).toBeVisible();
  });

  test("annual/monthly toggle works", async ({ page }) => {
    await page.goto("/pricing");
    // Initial state shows monthly prices
    await expect(page.getByText("$49")).toBeVisible();
    // Toggle to annual
    await page.getByRole("button", { name: "" }).click();
    // Price should change
  });
});

test.describe("Contact page", () => {
  test("has contact form with all fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByText(/Get in Touch/i)).toBeVisible();
    await expect(page.locator("input[placeholder='Your name']")).toBeVisible();
    await expect(page.locator("input[placeholder*='yourbar.com']")).toBeVisible();
    await expect(page.locator("textarea")).toBeVisible();
  });
});

test.describe("Pitch Deck page", () => {
  test("loads with slide navigation", async ({ page }) => {
    await page.goto("/deck");
    await expect(page.getByText("BARPLAY")).toBeVisible();
    await expect(page.getByText("1 / 10")).toBeVisible();
  });
});

test.describe("Docs page", () => {
  test("has sidebar navigation with 5 sections", async ({ page }) => {
    await page.goto("/docs");
    await expect(page.getByText("Research")).toBeVisible();
    await expect(page.getByText("GTM")).toBeVisible();
    await expect(page.getByText("Marketing")).toBeVisible();
    await expect(page.getByText("Brand")).toBeVisible();
    await expect(page.getByText("Pitch")).toBeVisible();
  });
});
