import { test } from "@playwright/test";

test("focus", async ({ page }) => {
  page.goto("https://www.orangehrm.com/en/30-day-free-trial/");
  await page.waitForLoadState("networkidle");

  const fullNameLocator = await page.locator("#Form_getForm_Name");
  fullNameLocator.focus();
  fullNameLocator.fill("pepeakash");
  await page.waitForTimeout(5000);
});
