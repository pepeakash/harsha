import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://letcode.in",
});

test("baseURL 1", async ({ page }) => {
  await page.goto("/signin");
  expect(page.url()).toBe("https://letcode.in/signin");
});

test("baseURL 2", async ({ page }) => {
  await page.goto("/signup");
  expect(page.url()).toBe("https://letcode.in/signup");
});

test("baseURL 3", async ({ page }) => {
  await page.goto("/test");
  expect(page.url()).toBe("https://letcode.in/test");
});
