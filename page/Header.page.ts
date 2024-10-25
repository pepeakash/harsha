import { Locator, Page } from "playwright";

export class HeaderPageClass {
  page: Page;
  loginBtn: Locator;
  signoutEle: Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator("text=Log in");
    this.signoutEle = page.locator("text=Sign out");
  }

  public async clickLoginLink() {
    await this.loginBtn.click();
  }
  public async clickSignOutLink() {
    await this.signoutEle.click();
  }

  
  async verifyLoginSuccess() {
    await expect(this.page.locator(this.headerPageElements.userMenu))
        .toBeVisible();
}
}
