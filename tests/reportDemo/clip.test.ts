// import { test, expect } from "@playwright/test";
// import clipboard from "clipboardy";
// let url: any;
// test("clipboard js", async ({ page }) => {


//   await test.step("Goto the https://clipboardjs.com/", async () => {
//     await page.goto("https://clipboardjs.com/");
//   });
//   await test.step("click to copy", async () => {
//     await page.click("//button[@data-clipboard-action='copy']", {
//       force: true,
//     });
//   });
//   await test.step("access the clipboard", async () => {
//     const text = await clipboard.read();
//     console.log("From clipboard: " + text);
//     await page.click("button[data-clipboard-target='#foo']");
//     url = await clipboard.read();
//     console.log("From clipboard URL: " + url);
//     const newPage = await page.context().newPage();
//     await newPage.goto(url);
//     console.log("Title from new tab: " + (await newPage.title()));
  
//     // const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
//     // console.log(clipboardText);
  
  
  
//   });
//   test("Open url from clipboard", async ({ page }) => {
//     await page.goto(url);
//     console.log(await page.title());
//   });
// });







// // await test.step("Goto the https://clipboardjs.com/", async () => {
// //   await page.goto("https://clipboardjs.com/");
// // });
// // await test.step("click to copy", async () => {
// //   await page.click("//button[@data-clipboard-action='copy']", {
// //     force: true,
// //   });
// // });
// // await test.step("access the clipboard", async () => {
// //   const text = await clipboard.read();
// //   console.log("From clipboard: " + text);
// //   await page.click("button[data-clipboard-target='#foo']");
// //   url = await clipboard.read();
// //   console.log("From clipboard URL: " + url);
// //   const newPage = await page.context().newPage();
// //   await newPage.goto(url);
// //   console.log("Title from new tab: " + (await newPage.title()));

//   // const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
//   // console.log(clipboardText);



