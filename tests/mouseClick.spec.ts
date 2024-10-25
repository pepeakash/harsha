import { test } from "@playwright/test";

test("mouseClick", async ({ page }) => {
  page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  await page.waitForLoadState("networkidle");

  // Double Click
  await page.getByText("Double-Click Me To See Alert").dblclick();

  // right Click
  await page.getByText("right click me").click({ button: "right" });

  await page.waitForTimeout(5000);
});

test("Shift Click", async ({ page }) => {
  page.goto("https://the-internet.herokuapp.com/shifting_content");
  await page.waitForLoadState("networkidle");

  // Shift Click - to open in new tab (Shift + Click)
  await page
    .getByText("Example 1: Menu Element")
    .click({ modifiers: ["Shift"] });

  await page.waitForTimeout(5000);
});
