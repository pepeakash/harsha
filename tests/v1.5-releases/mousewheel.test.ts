import { test } from "@playwright/test";

test("Color Scheme", async ({ page }) => {
  await page.goto("https://playwright.dev");
  console.log(await page.title());
  const git = page.locator("text=GitHub");

  // ------------------Method 1 with boundingBox()-------------------
  const box = await git.boundingBox();
  if (box) {
    const y = box.y;
    await page.mouse.wheel(0, y);
  }

  // --------------------Method 2 scrollIntoViewIfNeeded()--------------------------------
  // await git.scrollIntoViewIfNeeded();
  // await page.waitForTimeout(3000);
});
