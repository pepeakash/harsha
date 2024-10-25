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
  let context: BrowserContext;
  let page: Page;
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  });

  test("Select a dropdown based on value ", async () => {
    await page.goto("https://letcode.in/dropdowns");
    const fruits = await page.$("#fruits");
    // await fruits?.selectOption({label:""});
    await fruits?.selectOption("2");
    const msg = await page.$("div.notification.is-success");
    if (msg) {
      expect(await msg.textContent()).toContain("You have selected Orange");
    }
  });

  test("multi Select a dropdown based on value ", async () => {
    await page.goto("https://letcode.in/dropdowns");
    const heros = await page.$("#superheros");
    await heros?.selectOption([
      {
        label: "Aquaman",
      },
      {
        index: 8,
      },
      {
        value: "bt",
      },
    ]);
  });

  test("Select a dropdown based on two$$ ", async () => {
    await page.goto("https://letcode.in/dropdowns");
    const lang = await page.$$("#lang option");
    console.log(lang.length);

    for await (const lan of lang) {
      console.log(await lan.innerText());
    }

    // // using .allInnerTexts 
    // const lang = page.locator("#lang option");
    // console.log(await lang.count());
    // console.log(await lang.allInnerTexts())


  });

  test("get selected text ", async () => {
    await page.goto("https://letcode.in/dropdowns");
    // await page.selectOption("#country", { index: 2 })
    // await page.selectOption("#country", { value: "India" })
    await page.selectOption("#country", "India");

    const text = await page.$eval<string, HTMLSelectElement>(
      "#country",
      (ele) => ele.value,
    );
    console.log(text);

    expect(text).toBe("India");
  });

  test.afterAll(async () => {
    await page.waitForTimeout(5000);
    await page.close();
    await context.close();
    await browser.close();
  });
});

test("Select based Drop Down test", async ({ page }) => {
  await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

  const countryDropDown = "select#Contact_CountryCode";

  // await page.selectOption(countryDropDown, { value: ‘AD’ });
  // await page.selectOption(countryDropDown, { label: ‘Australis’ });
  // await page.selectOption(countryDropDown, { index: 10 });

  //select#Contact_CountryCode > option
  const allOptions = await page.$$(countryDropDown + " > option");
  console.log(allOptions.length);

  for (const e of allOptions) {
    const text = await e.textContent();
    console.log(text);

    if (text === "India") {
      await page.selectOption(countryDropDown, { label: text });
      break;
    }
  }
});
