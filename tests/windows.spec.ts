import {
  test,
  expect,
  type Page,
  Browser,
  BrowserContext,
  chromium,
} from "@playwright/test";

test.describe("Learn how to handle Input fileds", async () => {
  let browser: Browser;
  let browserContext: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
  });

  test("Home Page", async ({ page }) => {
    await page.goto("https://letcode.in/windows");
    console.log(await page.title());
    expect(await page.title()).toBe("Window handling - LetCode");
  });
  test("Single page Handling", async () => {
    await page.goto("https://letcode.in/windows");
    // console.log(page.url());
    const [newPage] = await Promise.all([
      browserContext.waitForEvent("page"),
      await page.click("#home"),
    ]);

    await newPage.waitForLoadState("networkidle");
    expect(newPage.url()).toContain("test");

    await newPage.click('"Log in"');
    await newPage.waitForLoadState("networkidle");
    expect(newPage.url()).toContain("signin");

    // await newPage.close();
    await page.bringToFront();
    await page.click('"Work-Space"');
  });

  test("Multi page Handling", async () => {
    await page.goto("https://letcode.in/windows");
    // console.log(page.url());
    const [multiPage] = await Promise.all([
      browserContext.waitForEvent("page"),
      await page.click("#multi"),
    ]);

    await multiPage.waitForLoadState("networkidle");
    const allPages = multiPage.context().pages();
    console.log("no .of windows: " + allPages.length);

    allPages.forEach((page) => {
      console.log(page.url());
    });

    await allPages[1].bringToFront();
    allPages[1].on("dialog", (dialog) => {
      console.log("message: " + dialog.message());
      dialog.accept();
    });
    await allPages[1].locator("id=accept").click();
  });
  test.afterAll(async () => {
    await page.waitForTimeout(5000);
    await page.close();
    await browserContext.close();
    await browser.close();
  });
});
