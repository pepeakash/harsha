import { Locator, Page } from "playwright";

export class CommonPageClass {
  page: Page;
  toaster: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toaster = page.locator("div[role='alertdialog']");
  }

  public async toasterMessage() {
    await this.toaster.waitFor();
    return await this.toaster.textContent();
  }
}
