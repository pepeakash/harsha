import { Page } from "@playwright/test";


declare const reporter: any;
export default class ReportUtils {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async screenshot(description?: string) {
    const screenshotBuffer = await this.page.screenshot();
    description = description != undefined ? description : "screenshot";
    await reporter.addAttachment(description, screenshotBuffer, "image/png");
  }
}
