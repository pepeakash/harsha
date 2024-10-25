import { test } from "@playwright/test";

test("test", async ({ page }) => {
  const locators = {
    nameInput: "//input[@id='surname' or @id='name']",
  };
//  process.env. ---> refer playwright.config.ts ---->   globalSetup: "src/utils/globalSetup.ts",
  await page.goto(process.env.SIGH_UP_URL!);
  // await page.locator("#name, #surname").fill("koushik")
  await page.locator(locators.nameInput).fill("koushik");
});
