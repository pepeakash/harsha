import { test, BrowserContext, Page, chromium } from "@playwright/test";

test("chainingSelectors", async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext("", {
    headless: true,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  page.goto("https://www.orangehrm.com/en/30-day-free-trial/");
  await page.waitForLoadState("networkidle");

  await page
    .locator("form#Form_getForm >> #Form_getForm_Name")
    .fill("pepeakash");
  await page.locator("form#Form_getForm >> text=Get Your Free Trial").click();

  await page.waitForTimeout(10000);
});

test("chaininglocators", async () => {
  // A persistent browser is a web browser that keeps your information, 
  // like login details and preferences, saved even after you close it. 
  // This means when you come back, you don’t have to log in again or reset your settings. 
  // It's like leaving a note for yourself so you can pick up right where you left off.
  const browser: BrowserContext = await chromium.launchPersistentContext("", {
    headless: true,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  page.goto("https://www.orangehrm.com/en/30-day-free-trial/");
  await page.waitForLoadState("networkidle");

  // await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('pepeakash');
  // await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();

  const nameLocator = page.locator("#Form_getForm_Name");
  const formLocator = page.locator("form#Form_getForm");
  const getYourfreeTrailButtonLocator = page.getByRole("button", {
    name: "Get Your Free Trial",
  });

  await formLocator.locator(nameLocator).fill("pepeakash");
  await formLocator.locator(getYourfreeTrailButtonLocator).click();

  await page.waitForTimeout(10000);
});
