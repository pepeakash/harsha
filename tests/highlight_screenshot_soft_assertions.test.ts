import { expect, test } from "@playwright/test";

test("Highlight elements", async ({ page }, testInfo) => {
  await page.goto("https://letcode.in/edit");
  const signup = page.locator("text='Sign up'");
  const login = page.locator("text='Log in'");

  // ------------------screenshot with masking elements----------------
  const sc = await page.screenshot({
    path: "./img.png",
    mask: [signup, login],
  });
  await testInfo.attach("highlighted screenshot", {
    body: sc,
    contentType: "image/png",
  });

  // -----------------------Hard and soft Assertions---------------------
  const ele = page.locator("#fullName");
  expect.soft(await ele.getAttribute("placeholder")).toBe("Enter first & last");
  // expect.soft(await ele.getAttribute("placeholder")).toBe("Enter first & last name");
  console.log(await page.title());
});
