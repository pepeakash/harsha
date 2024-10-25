import { test } from "@playwright/test";

test("Strict - ELement Handle ", async ({ page }) => {
  await page.goto("https://www.freelancer.in/login");
  const btn = await page.$("button", { strict: true });
  await btn?.hover();
  await btn.click();
});
