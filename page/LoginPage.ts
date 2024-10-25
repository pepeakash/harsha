import { Locator, Page } from "@playwright/test";
import { Env } from "../utils_ts/environment";

export class LoginPageClass {
  eleEmailTextField: Locator;
  elePassTextField: Locator;
  clickLoginBtn: Locator;

  constructor(public page: Page) {
    this.eleEmailTextField = page.locator("input[name='email']");
    this.elePassTextField = page.locator("input[name='password']");
    this.clickLoginBtn = page.locator("//button[text()='LOGIN']");
  }

  async goTo() {
    await this.page.goto(Env.test, { waitUntil: "domcontentloaded" });
  }

  getErrorMessage() {
    return this.page.getByRole("alert");
}

  async navigateToLoginPage(username: string, pass: string) {
    await this.eleEmailTextField.fill(username);
    await this.elePassTextField.fill(pass);
    await this.clickLoginBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
