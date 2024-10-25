import { test } from "@playwright/test";

test("dragAndDrop single command", async ({ page }) => {
  page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
  await page.waitForLoadState("networkidle");
  await page.locator("#draggable").dragTo(page.locator("#droppable"));
  await page.waitForTimeout(5000);
});

test("dragAndDrop multiple commands", async ({ page }) => {
  page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
  await page.waitForLoadState("networkidle");

  await page.locator("#draggable").hover();
  await page.mouse.down();
  await page.locator("#droppable").hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
});

test("my test", async ({ page }) => {
  await page.goto("https://letcode.in/dropable");
  const src = await page.$("#draggable");
  const dst = await page.$("#droppable");
  if (src && dst) {
    const srcBound = await src.boundingBox();
    const dstBound = await dst.boundingBox();
    if (srcBound && dstBound) {
      await page.mouse.move(
        srcBound.x + srcBound.width / 2,
        srcBound.y + srcBound.height / 2,
      );
      await page.mouse.down();
      await page.mouse.move(
        dstBound.x + dstBound.width / 2,
        dstBound.y + dstBound.height / 2,
      );
      await page.mouse.up();
    } else {
      throw new Error("No Element");
    }
  }
  await page.waitForTimeout(3000);
});

test("my test 1", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  // switch to frame
  const frame = page.frame({
    url: "https://jqueryui.com/resources/demos/droppable/default.html",
  });
  if (frame) {
    const src = await frame.$("#draggable");
    const dst = await frame.$("#droppable");
    if (src && dst) {
      const srcBound = await src.boundingBox();
      const dstBound = await dst.boundingBox();
      if (srcBound && dstBound) {
        await page.mouse.move(
          srcBound.x + srcBound.width / 2,
          srcBound.y + srcBound.height / 2,
        );
        await page.mouse.down();
        await page.mouse.move(
          dstBound.x + dstBound.width / 2,
          dstBound.y + dstBound.height / 2,
        );
        await page.mouse.up();
      } else {
        throw new Error("No Element");
      }
    }
  }
  await page.waitForTimeout(3000);
});
