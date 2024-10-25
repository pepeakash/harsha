import {
  test,
  BrowserContext,
  Page,
  chromium,
  firefox,
} from "@playwright/test";

test("without incognito - launchPersistentContext - const page:Page = await browser.newPage();", async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext("./session", {
    headless: true,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");

 
});

test("without incognito -  launchPersistentContext - const pages = browser.pages();", async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext("./session", {
    headless: true,
    channel: "chrome",
  });
  const pages = browser.pages();
  const page: Page = pages[0];
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");

});

test("without incognito - launchPersistentContext - firefox", async () => {
  const browser: BrowserContext = await firefox.launchPersistentContext("./session", {
    headless: true,
  });
  const pages = browser.pages();
  const page: Page = pages[0];
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");

 
});

test("without incognito - launchPersistentContext - storing Session in local directory", async () => {
  const browser: BrowserContext = await firefox.launchPersistentContext(
    "./session",
    { headless: true },
  );
  const pages = browser.pages();
  const page: Page = pages[0];
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");


});
