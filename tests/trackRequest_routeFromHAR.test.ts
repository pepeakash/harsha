import { test } from "@playwright/test";

test("Track all Request", async ({ page }) => {
  await page.routeFromHAR("har/booksapi.har", {
    // update: true, // Capture HAR file from the browser
    update: false, // Run the scripts without internet
  });

  await page.goto("https://bookcart.azurewebsites.net/", {
    waitUntil: "domcontentloaded",
  });
  await page.fill("input[type='search']", "HP7");
  await page.click(
    `//img[@src="/Upload/9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"]`,
  );
  await page.waitForTimeout(5000);
});
