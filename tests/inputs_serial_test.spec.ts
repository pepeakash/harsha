import {
  test,
  type Page,
  Browser,
  BrowserContext,
  chromium,
} from "@playwright/test";

// test.describe.serial.only("Run only one describe.serial", async () => {})

test.describe.serial("Learn how to handle Input fileds", async () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/edit");
  });

  test("Login test demo", async () => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover(
      "//a[@data-toggle='dropdown']//span[contains(.,'My account')]",
    );
    // await page.click("text=Login")
    await page.click("'Login'");
    await page.fill("input[name='email']", "koushik350@gmail.com");
    await page.fill("input[name='password']", "Pass123$");
    await page.click("input[value='Login']");


    // await page.waitForTimeout(5000);

    // const newContext = await browser.newContext()

    // const newPage = await newContext.newPage();
    // await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    // await newPage.waitForTimeout(5000);
  });

  test("Enter your full Name", async () => {
    // await page.fill("id=fullName", "koushik chatterjee");

    const name = await page.$("#fullName");

    // if (name != null) {
    //   name.fill(" ")
    // }

    await name?.fill("koushik chatterjee");
  });

  test("Append a text and press keyboard tab", async () => {
    await page.goto("https://letcode.in/edit");
    const join = page.locator("#join");
    await join?.focus();
    const previous_text = await join.getAttribute("value");
    console.log(previous_text);
    const new_text = previous_text + " Human";

    // page.keyboard methods are used to interact with the keyboard
    await page.keyboard.press("End");
    await join?.fill(new_text);
    await page.waitForTimeout(5000);
  });

  test("What is inside the text box", async () => {
    const text = await page.getAttribute("id=getMe ", "value");
    console.log(text);
  });
  test("Clear the text", async () => {
    await page.fill("//input [@vaLue= 'Koushik Chatterjee']", "");
  });
  test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
