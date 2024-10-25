import { Page, BrowserContext, Locator } from '@playwright/test';
export default class HomePage {

  productLocator: Locator;
  searchIp: Locator;
  
    constructor(public page: Page, public context: BrowserContext) {
      this.page = page;
      this.context = context;
      this.productLocator = page.locator("//div[text()='SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition']").nth(0);
      this.searchIp = page.getByPlaceholder("Search for Products, Brands and More");
    }

  async searchFor(search: string) {
    await this.searchIp.waitFor();
    await this.searchIp.fill(search);
    await this.page.keyboard.press("Enter");
  }
}
