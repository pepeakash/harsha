import { test } from "@playwright/test";

test("mouseHover", async ({ page }) => {
  page.goto("https://www.spicejet.com/");
  await page.waitForLoadState("networkidle");

  // await page.locator('//div[text()="Add-ons"]').hover();
  // await page.getByText('Add-ons').nth(0).hover();
  await page.getByText("Add-ons").first().hover();
  await page.getByText("Taxi").first().click();

  await page.waitForTimeout(5000);
});
