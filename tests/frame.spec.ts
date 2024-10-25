import {
  test,
  type Page,
  Browser,
  BrowserContext,
  chromium,
} from "@playwright/test";

test.describe("Learn how to handle Input fileds", async () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  });

  test("Home Page - Frames using page.frame", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const frame = page.frame({ name: "firstFr" });
    //    await frame?.fill("","");
    if (frame != null) {
      await frame.fill('input[name="fname"]', "koushik");
      await frame.fill('input[name="lname"]', "chatterjee");

      // inner Frame or child frames
      const childFrames = frame.childFrames();
      console.log("no. of inner frames or child frames: " + childFrames.length);
      if (childFrames != null)
        await childFrames[1].fill(
          'input[placeholder="Enter email"]',
          "pepeakash@gmail.com",
        );
      else console.log("no such childFrames");

      //1. to move to parent frame
      // await frame.fill('input[name="lname"]', 'patil');

      //2. to move to parent frame
      // const parentFrame = await childFrames[0].parentFrame();

      //3. to move to parent frame
      const parentFrame = await childFrames[1].parentFrame();

      await parentFrame?.fill('input[name="fname"]', "Rakesk");
      await parentFrame?.fill('input[name="lname"]', "junjunwala");

    } else throw new Error("no such frame");
  });

  test("New Frame API  - Frames using page.frameLocator", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const frame = page.frameLocator("#firstFr");
    await frame.locator('input[name="fname"]').fill("koushik");
    await frame.locator('input[name="lname"]').fill("chatterjee");

    const text = await frame.locator("p.title.has-text-info").textContent();
    console.log(text);
  });

  test("New Frame API innerFrame", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const frame = page.frameLocator("#firstFr");

    // to find inner frame or child frame using frameLocator
    const innerFrame = frame.frameLocator("iframe.has-background-white");
    await innerFrame.locator('input[name="email"]').fill("koushik@letcode.in");

    //  back to parent frame
    await frame.locator('input[name="fname"]').fill("koushik");

    await page.click('"Log in"');
  });

  test.afterAll(async () => {
    await page.waitForTimeout(5000);
    await page.close();
    await context.close();
    await browser.close();
  });
});
