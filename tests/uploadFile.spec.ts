import { chromium, test } from "@playwright/test";
import path from "path";

test.describe("Upload file", () => {
  const filePath0 = "./tests/demo1.js";
  const filePath1 = "./tests/demo1.ts";
  test("upload single file using set input files", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

    // upload single file
    await page.setInputFiles('input[name="upfile"]', filePath0);

    await page.waitForTimeout(3000);
  });

  // upload multiple file

  test("upload multiple file using set input files", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // upload multiple file
    await page.setInputFiles('input[name="filesToUpload"]', [
      filePath0,
      filePath1,
    ]);

    await page.waitForTimeout(3000);
  });

  test("Upload using on function", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/upload");
    page.on("filechooser", async (filechooser) => {
      //  filechooser.isMultiple();
      await filechooser.setFiles([filePath0, filePath1]);
    });
    await page.click(".example + div#drag-drop-upload", { force: true });
    await page.waitForTimeout(100);
  });

  const filePath = "./demo.js";

  test("single UpLoad using setInputFiles", async ({ page }) => {
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
    await page.waitForLoadState("networkidle");
    // await page.locator('input[name="upfile"]').setInputFiles('..');

    await page.locator('input[name="upfile"]').setInputFiles(filePath0);

    await page.waitForTimeout(5000);

    await page.locator('input[name="upfile"]').setInputFiles([]);

    await page.waitForTimeout(5000);

    // upload from buffer memory
    await page.locator('input[name="upfile"]').setInputFiles({
      name: "jay_resume.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("this is jay resume"),
    });

    await page.waitForTimeout(5000);
  });

  test("Multiple file UpLoad using path.join", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForLoadState("networkidle");
    // await page.locator('input[name="upfile"]').setInputFiles('..');

    await page
      .locator("#filesToUpload")
      .setInputFiles([
        path.join(filePath0),
        path.join(filePath1),
      ]);

    await page.waitForTimeout(5000);
    // Deselect a file
    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(5000);
  });

  test("Multiple file UpLoad using square brackets[][][][]", async ({
    page,
  }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForLoadState("networkidle");
    // await page.locator('input[name="upfile"]').setInputFiles('..');

    await page
      .locator("#filesToUpload")
      .setInputFiles([
        filePath0,
        filePath1,
      ]);

    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(5000);
  });

  test("upload file with listners", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForLoadState("networkidle");
    // await page.locator('input[name="upfile"]').setInputFiles('..');

    page.on("filechooser", async (filechooser) => {
      await filechooser.setFiles([
        filePath0,
        filePath1,
      ]);
    });
    await page.locator("#filesToUpload").click({ force: true });

    await page.waitForTimeout(5000);
  });
});
