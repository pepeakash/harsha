import { test, expect } from "@playwright/test";

test("Signin into Git", async ({ page }) => {
  //make payment -when you 0 balance
  await page.goto("https://github.com/login");
  await page.fill(
    "input:below(:text('Username or email address'))",
    "ortoniKC",
  );
await page.waitForLoadState("networkidle");
  await page.fill("#password:above(:text('Sign in'))", "password");

  await page.click("a:near(:text('Password'))");
  expect(page.url()).toBe("https://github.com/password_reset");

  await page.waitForTimeout(3000);
});

test("In Depth", async ({ page }) => {
  //make payment -when you 0 balance
  await page.goto("https://opengiro.ing.de/pub/girokonto-einzelkonto");
});
