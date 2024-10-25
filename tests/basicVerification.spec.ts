

import { test, expect } from "@playwright/test";

test("Basic Verification", async ({ page }) => {
  await page.goto("https://letcode.in/edit");

  // isDisabled?
  // expect(await page.isDisabled("#noEdit")).toBe(true);

  // const textBox = await page.isDisabled("#noEdit");
  // console.log("is Disabled?" + textBox);
  // expect(textBox).toBe(false);

  const textBox = page.locator("#noEdit");
  await expect(textBox).toBeDisabled();

  // isEditable?
  // const edit = await page.isEditable("#dontwrite");
  // console.log("is edit?" + edit);
  // expect(edit).toBe(false);

  const textBox2 = page.locator("#dontwrite");
  await expect(textBox2).toBeEditable();

  //isEnabled
  await page.goto("https://letcode.in/buttons");
  const ele = await page.$("#isDisabled");
  console.log(await ele?.isEnabled());

  //isVisible
  console.log(await ele?.isVisible());

  //checkbox/radio check/uncheck
  //checkbox/radio isChecked?
  await page.goto("https://letcode.in/radio");
  await page.waitForSelector(
    "input:below(:text('Find if the checkbox is selected'))",
  );
  const checkBox = await page.$(
    "input:below(:text('Find if the checkbox is selected'))",
  );
  if (checkBox) {
    expect(await checkBox.isChecked()).toBe(true);
    await checkBox.uncheck();
  } else {
    throw new Error("Element not found");
  }
});

// -----------------------to test web element colour color------------------------

test("color", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  const btn = page.locator("#home");
  const color = await btn.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("background-color");
  });
  console.log(color);
  expect(color).toBe("rgb(250, 124, 145)");
});
