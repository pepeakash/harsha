import { test } from "@playwright/test";

test("Slider Demo", async ({ page }) => {
  await test.step("Goto demo site", async () => {
    await page.goto("https://groww.in/calculators/sip-calculator");
  });
  await test.step("handle slider", async () => {
    await page.waitForSelector("(//div[@role='slider'])[1]");
    const s = await page.$("(//div[@role='slider'])[1]");
    const ele = page.locator("#MONTHLY_INVESTMENT");
    const text = await ele.inputValue();
    console.log("Initial text: " + text);
    const targetAmount = "82500";
    let isCompleted = false;
    if (s) {
      while (!isCompleted) {
        const srcBound = await s.boundingBox();
        if (srcBound) {
          await page.mouse.move(
            srcBound.x + srcBound.width / 2,
            srcBound.y + srcBound.height / 2,
          );
          await page.mouse.down();
          await page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2,
          );
          await page.mouse.up();
          const text = await ele.inputValue();
          if (text == targetAmount) {
            isCompleted = true;
          }
        }
      }
    }

    await page.waitForTimeout(5000);
  });
});
