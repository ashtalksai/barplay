import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "http://localhost:3002",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    baseURL: "http://localhost:3002",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3002",
    reuseExistingServer: true,
    timeout: 30000,
  },
});
