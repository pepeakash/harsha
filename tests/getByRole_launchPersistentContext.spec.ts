import { test, expect, BrowserContext, chromium, Page } from "@playwright/test";

test("getByRole", async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext("./session", {
    headless: false,
    channel: "chrome",
  });
  // const page:Page = await browser.newPage();
  const pages = browser.pages();
  const page: Page = pages[0];
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");

  expect(page.getByRole("heading", { name: "Register Account" })).toBeVisible();
  expect(page.getByRole("link", { name: "Forgotten Password" })).toBeVisible();

  expect(page.getByRole("radio", { name: "Yes" })).toBeVisible();
  page.getByRole("radio", { name: "Yes" }).click();

  expect(page.getByRole("checkbox")).toBeVisible();
  page.getByRole("checkbox").click();

  expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  page.getByRole("button", { name: "Continue" }).click();

  await page.waitForTimeout(5000);
});
