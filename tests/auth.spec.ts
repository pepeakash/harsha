import { test, expect } from "@playwright/test";

test("auth login", async ({ browser }) => {
  //make payment -when you 0 balance

  const context = await browser.newContext({ storageState: "./auth.json" });
  const page = await context.newPage();
  await page.goto("https://instagram.com/");

  await page.waitForTimeout(3000);
});
