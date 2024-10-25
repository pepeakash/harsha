import { expect, test } from "@playwright/test";

test("Download file", async ({ page }, testInfo) => {
  await test.step("Goto the application", async () => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo",
    );
    expect(await page.title()).toContain("Selenium");
  });
  await test.step("Enter test data", async () => {
    await page
      .locator("#textbox")
      .pressSequentially(
        "Lorem ipsum dolor",
      );
    await page.locator("#create").click();
  });
  await test.step("Download file", async () => {
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.click("text='Download'"),
    ]);
    const path = download.suggestedFilename();
    await download.saveAs(path);
    await testInfo.attach("downloaded", { path: path });
  });
});
