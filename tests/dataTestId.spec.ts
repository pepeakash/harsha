import { test } from "@playwright/test";


test("Data-Test-ID", async ({ page }) => {
  await page.goto(
    "https://applyapp.anz.com/?producttype=aa&sourcecode_1=QMV&schema=sola",
  );

await page.waitForLoadState("networkidle");
await page.getByTestId("appType_Single_button").scrollIntoViewIfNeeded();
  await page.getByTestId("appType_Single_button").click();
  await page.getByTestId("customerType_No_button").click();
  await page.getByTestId("healthCarePensioner_No_button").click();
  await page.getByTestId("next-submit_button").click();

  await page.getByTestId("onlineSaver_Notnow_button").click();
  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForTimeout(5000);
});

test("all links", async ({ page }) => {
  await page.goto(
    "https://applyapp.anz.com/?producttype=aa&sourcecode_1=QMV&schema=sola",
  );
  await page.waitForTimeout(10000);

  // for (const li of await page.getByRole('link').all())
  //         await li.click();

  for (const li of await page.locator("a").all()) await li.click();

  await page.waitForTimeout(99000);
});
