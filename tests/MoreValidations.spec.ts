import { test, expect } from "@playwright/test";

// command to run in parallel mode
//test.describe.configure({mode:'parallel'});

// command to run in serial mode
//test.describe.configure({mode:'serial'});

test("@Web Popup validations", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // await page.goto("http://google.com");
  // await page.goBack();
  // await page.goForward();
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  // await page.pause();

  //    pop-up dialog - accecpt - 2 line command - pop-up(dialog) action has to be written in first line(before)
  page.on("dialog", (dialog) => dialog.accept());
  await page.locator("#confirmbtn").click();

  //    pop-up dialog - dismiss - 2 line command - pop-up(dialog) action has to be written in first line(before)
  // page.on('dialog',dialog => dialog.dismiss());
  // await page.locator("#confirmbtn").click();

  // mousehover
  await page.locator("#mousehover").hover();

  // frames
  const framesPage = page.frameLocator("#courses-iframe");

  //visible(:visible) and hidden locator
  await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  const textCheck = await framesPage.locator(".text h2").textContent();
  console.log(textCheck.split(" ")[1]);
});

test("Screenshot & Visual comparision", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page.locator("#displayed-text")).toBeVisible();

  // single Locator screenshot
  await page
    .locator("#displayed-text")
    .screenshot({ path: "partialScreenshot.png" });
  await page.locator("#hide-textbox").click();

  // Page Screenshot
  await page.screenshot({ path: "screenshot.png" });

  await expect(page.locator("#displayed-text")).toBeHidden();
});

//screenshot -store -> screenshot ->
test("visual compare", async ({ page }) => {
  //make payment -when you 0 balance
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  expect(await page.screenshot()).toMatchSnapshot("landing.png");
});
