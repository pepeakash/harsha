import {
  test,
  Browser,
  BrowserContext,
  chromium,
  ElementHandle,
  Page,
} from "@playwright/test";

test.describe("Learn how to handle alert", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: true,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/alert");
  });
  test("Handle dialogs", async () => {
    const ele = await page.$("#prompt");
    page.on("dialog", (dialog) => {
      console.log("Message: " + dialog.message());
      console.log("Default Value: " + dialog.defaultValue());
      console.log("Type: " + dialog.type());
      dialog.accept("hello koushik");
      // dialog.dismiss()
    });
    await ele?.click();
  });

  test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
