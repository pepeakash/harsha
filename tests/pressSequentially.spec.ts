import { test } from "@playwright/test";

test("pressSequentially", async ({ page }) => {
  page.goto("https://www.flipkart.com/");
  await page.waitForLoadState("domcontentloaded");

  await page
    .getByPlaceholder("Search for Products, Brands and More")
    .pressSequentially("macbook", { delay: 500 });

  await page.waitForTimeout(5000);
});
