import { test, expect, Page, Browser } from "@playwright/test";
import { CommonPageClass } from "../../page/common.page";
import { HeaderPageClass } from "../../page/Header.page";
import { LoginPageClass } from "../../page/LoginPage";
import * as data from "../../data/login.cred.json";
import ReportUtils from "../../utils_ts/reportUtils";

declare const reporter: any;
// let reporter: any;

test.describe("TC001", () => {
  test("Login positive _ JIRA101", async ({ page }) => {
    const header = new HeaderPageClass(page);
    const login = new LoginPageClass(page);
    const common = new CommonPageClass(page);
    const reportUtils = new ReportUtils(page);
    // await reporter.description("Login into LetCode").story("JIRA101");
    // await reporter.startStep("Navigate to letcode");

    await login.goTo();

    expect(page.url()).toBe("https://letcode.in/signin");

    // await reportUtils.screenshot("naviagation");
    // await reporter.endStep();
    // await reporter.startStep("Click login link");

    await header.clickLoginLink();
    // await reporter.endStep();
    expect(page.url()).toBe("https://letcode.in/signin");
    // await reporter.startStep("enter username");

    await login.navigateToLoginPage(data.email, data.pass);
    // await reportUtils.screenshot("username");
    // const screenshotBuffer = await page.screenshot();
    // await reporter.addAttachment("username", screenshotBuffer, "image/png");
    // await reporter.startStep("enter password");
    // await reportUtils.screenshot();
    // await reporter.endStep();

    expect(await common.toasterMessage()).toContain("Welcome");
    // await reporter.startStep("Log out");
    await header.clickSignOutLink();
    // await reportUtils.screenshot("done");
    // await reporter.endStep();
  });
  test("Login again", async ({ page }) => {
    const header = new HeaderPageClass(page);
    const login = new LoginPageClass(page);
    const common = new CommonPageClass(page);
    const reportUtils = new ReportUtils(page);
    await login.goTo();
    await header.clickLoginLink();
    await login.navigateToLoginPage("koushik350@gmail.com", "Pass123$");
    // 
    expect(await page.title()).toContain("LetCode with Koushik");
    // await reportUtils.screenshot("done");
  });

  test("Login positive _ JIRA1011", async ({ page }) => {
    const header = new HeaderPageClass(page);
    const login = new LoginPageClass(page);
    const common = new CommonPageClass(page);
    
    await login.goTo();
    expect(await page.title()).toContain("LetCode with Koushik");

    await header.clickLoginLink();

    expect(page.url()).toBe("https://letcode.in/signin");

    await login.navigateToLoginPage(data.email, data.pass);

    console.log(await common.toasterMessage());
    expect(await common.toasterMessage()).toContain("Welcome");

    await header.clickSignOutLink();
  });
});
