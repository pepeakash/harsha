import { CommonPageClass } from "../../page/common.page";
import { HeaderPageClass } from "../../page/Header.page";
import { LoginPageClass } from "../../page/LoginPage";
import {Env} from "../../utils_ts/environment";
import * as data from "../../data/login.cred.json";
import { test, expect, Page, Browser } from "@playwright/test";
import ReportUtils from "../../utils_ts/reportUtils";

declare const page: Page;
declare const reporter: any;

test.describe("TC002", () => {
  // my pages
  let header: HeaderPageClass;
  let login: LoginPageClass;
  let common: CommonPageClass;

  test.beforeEach(async ({page}) => {
    await page.goto(Env.test);
    header = new HeaderPageClass(page);
    login = new LoginPageClass(page);
    common = new CommonPageClass(page);
  });

  test.afterEach(async ({page}) => {
    await page.close();
  });

  test("TC002 Login 1", async ({page}) => {
    // await reporter.description("Login into LetCode").story("JIRA101");
    // await reporter.startStep("Navigate to letcode");
    expect(page.url()).toBe("https://letcode.in/signin");
    // await ReportUtils.screenshot("naviagation");
    // await reporter.endStep();
    // await reporter.startStep("Click login link");
    await header.clickLoginLink();
    // await reporter.endStep();
    expect(page.url()).toBe("https://letcode.in/signin");
    // await reporter.startStep("enter username");
    await login.enterUserName(data.email);
    // await ReportUtils.screenshot("username");
    const screenshotBuffer = await page.screenshot();
    // await reporter.addAttachment("username", screenshotBuffer, "image/png");
    // await reporter.endStep();
    // await reporter.startStep("enter password");
    await login.enterUserPassword(data.pass);
    // await ReportUtils.screenshot();
    // await reporter.endStep();
    await login.clickLoginBtn();
    const toaster = await common.toaster();
    expect(await toaster?.textContent()).toContain("Welcome");
    // await reporter.startStep("Log out");
    await header.clickSignOutLink();
    // await ReportUtils.screenshot("done");
    // await reporter.endStep();
  });
  
  test("TC002 Login 2", async ({page}) => {
      await page.goto(Env.test, {
          waitUntil: "domcontentloaded"
      });

      await login.navigateToLoginPage("koushik350@gmail.com", "Pass123$");

      expect(page.url()).toBe("https://letcode.in/signin");
      // await ReportUtils.screenshot("done")
  })
});
