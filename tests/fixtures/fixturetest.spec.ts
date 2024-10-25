// import {myTest, expect } from "./basepages.spec";
// // import JSON file which contain test data
// import * as jsonTestData from "../testData/testData.json";
// import EnviromentClass from "../baseUrl/enviroment.spec";

// myTest.beforeEach(async ({ page }) => {
//   //launch Url
//   await page.goto(EnviromentClass.testEnviromentBaseUrl);
// });

// myTest("test 1", async ({
//   headerPageClass,
//   loginPageClass,
//   commonPageClass,
//   page,
// }) => {
//   await headerPageClass.clickLoginLink();
//   expect(page.url()).toBe("https://letcode.in/signin");
//   await loginPageClass.navigateToLoginPage(jsonTestData.email, jsonTestData.password);
//   expect(await commonPageClass.toasterMessage()).toContain("Welcome");
//   await headerPageClass.clickSignOutLink();
// });

// myTest("Wrong test Data", async ({
//   headerPageClass,
//   loginPageClass,
//   commonPageClass,
//   page,
// }) => {
//   await headerPageClass.clickLoginLink();
//   expect(page.url()).toBe("https://letcode.in/signin");
//   await loginPageClass.navigateToLoginPage("abc", jsonTestData.password);
//   expect(await commonPageClass.toasterMessage()).toContain("Welcome");
//   await headerPageClass.clickSignOutLink();
// });
