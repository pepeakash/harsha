import { test } from "@playwright/test";
test("New Frame API - frame using page.frameLocator", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("koushik");
  const lname = frame.locator("input[name='lname']");
  await lname.fill("chatterjee");
  const text = await frame.locator("p.title.has-text-info").textContent();
  console.log(text);
});
test("Inner frame or chlid frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const frame = page.frameLocator("#firstFr");
  const innerFrame = frame.frameLocator("iframe.has-background-white");
  await innerFrame.locator("input[name='email']").fill("koushik@letcode.in");
  await frame.locator("input[name='fname']").fill("koushik");
  await page.click("'Log in'");
});
