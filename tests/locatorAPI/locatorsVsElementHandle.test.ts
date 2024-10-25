import { test } from "@playwright/test";

test("Strict - Element handle", async ({ page }) => {
  await page.goto("https://www.freelancer.in/login");

  // page.$: Error: strict mode violation: locator('button') resolved to 10 elements:
  // clicks on 1st element, from list of 10 elements
  // const btn = await page.$("button");


  const btn = await page.$("button", {strict: true});
  await btn?.hover();
  await btn?.click();
});

test("Locator API", async ({ page }) => {
  await page.goto("https://letcode.in/elements");
  const ele = page.locator("input[name='username']");
  await ele?.fill("ortonikc");
  await ele?.press("Enter");
  await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 });
  const repos = page.locator("app-gitrepos ol li");
  console.log(await repos.count());
  // console.log(await repos.allInnerTexts());
  const c = await repos.count();
  for (let i = 0; i < c; i++) {
    const text = await repos.nth(i).textContent();
    console.log(text);
  }
});
