import { test } from "@playwright/test";
// import dotenv from "dotenv";
// dotenv.config({
//   path: `./helper/env/.env.staging`,
//   override:true
// });

test.describe("launch Browser", () => {
  test("launch Browser", async ({ page }) => {
    // this method will not work if password contains @ Symbols

    // process.env is used to get the environment variables
    // use bash terminal to set the environment variables
    // Command to run in terminal EVIRONMENT=VALUE npx playwright test

console.log(process.env.BASE_URL)
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
    await page.goto(process.env.BASE_URL!);
    await page.waitForLoadState("networkidle");

    // await page.click('text="Log in"');
    await page.click("text=Log in");

    await page.locator('//input[@name="email"]').fill(process.env.USERNAME!);
    await page.getByPlaceholder("Enter password").fill(process.env.PASSWORD!);

    // await page.getByText("LOGIN").click();
    await page.click('button:text("LOGIN")');

    await page.waitForLoadState("networkidle");
    await page.click('"Sign out"');

    await page.waitForTimeout(5000);
  });
});
