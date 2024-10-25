import { test, expect } from "@playwright/test";

test("visual comparision 1", async ({ page }) => {
  //make payment -when you 0 balance
  await page.goto("https://letcode.in");
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    "letcode.png",
  );
});

test("visual comparision 2", async ({ page }) => {
  //make payment -when you 0 balance
  await page.goto("https://playwright.dev");
  expect(await page.screenshot()).toMatchSnapshot("snapshot-name.png");
});
