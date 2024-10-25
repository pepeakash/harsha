import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  test.fail();
  console.log("first test running");
  await page.goto("https://letcode.in");
  expect(await page.title()).toBe("Let Code with");
  console.log("first test completed");
});
test("second test", async ({ page }) => {
  console.log("second test running");
  await page.goto("https://playwright.dev");
  await page.waitForLoadState("networkidle")
  console.log("second test completed");
});
test("third test", async ({ page, browserName }) => {
  console.log("Browser Name: " + browserName);
  if (browserName === "chromium") {
    test.skip();
  }

  console.log("third test running");
  await page.goto("https://letcode.in");
  console.log("third test completed");
});
