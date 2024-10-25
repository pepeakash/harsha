import {
  test,
  Browser,
  BrowserContext,
  Page,
  chromium,
} from "@playwright/test";

test.describe("Search Git Repo", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: true,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/elements");
  });

  test("Enter Git username", async () => {

    // taking screenshot element level
    const header = await page.$("nav[role='navigation']");
    header?.screenshot({ path: "header.png" });

    const ele = await page.$("input[name='username']");
    await ele?.fill("ortonikc");
    await ele?.press("Enter");
  });
  test("Print all the repos", async () => {
    await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 });
    const repos = await page.$$("app-gitrepos ol li");
    console.log(repos.length);

    // for await - concept - method 1
    for await (const repo of repos) {
      console.log(await repo.innerText());
    }

    // map - concept - method 2
    // const allUrls = await Promise.all(repos.map(async (repo, i) => {
    //     return await repo.innerText()
    // }))
    // console.log(allUrls);

    // await page.screenshot({ path: "fs.png", fullPage: true })
  });

  test("Print all the repos using .all()", async () => {
    await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 });
    const repos = await page.locator("app-gitrepos ol li").all();
    console.log(repos.length);

    for (const repo of repos) {
      console.log(await repo.innerText());
    }

    await page.screenshot({ path: "fs.png", fullPage: true });
  });

  test("Print all the repos using .allinnertext", async () => {
    const ele = await page.$("input[name='username']");
    await ele?.fill("ortonikc");
    await ele?.press("Enter");

    //using allinnertext
    await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 });
    const repos = page.locator("app-gitrepos ol li");
    console.log(await repos.count());
    console.log(await repos.allInnerTexts());

    //using for loop
    const count = await repos.count();
    for (let i = 0; i < count; i++) {
      const text = await repos.nth(i).textContent();
      console.log(text);
    }
  });

  test("Print all the repos using .allinnertext and for loop", async () => {
    const ele = await page.$("input[name='username']");
    await ele?.fill("ortonikc");
    await ele?.press("Enter");

    //using allinnertext
    await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 });
    const repos = page.locator("app-gitrepos ol li");
    console.log(await repos.count());
    console.log(await repos.allInnerTexts());

    //using for loop
    const count = await repos.count();
    for (let i = 0; i < count; i++) {
      const text = await repos.nth(i).textContent();
      console.log(text);
    }

    

  });

  test.afterEach(async () => {
    await page.screenshot({ path: "screenshot1.png" });
  });
  test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
