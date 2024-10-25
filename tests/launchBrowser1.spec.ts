import { chromium, test } from "@playwright/test";

test.describe("Launch Browser", () => {
  test("Open letcode", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://letcode.in/");
    await browser.close();
  });
});
