import { Page, BrowserContext, Locator } from '@playwright/test';
export default class SearchResult {
  productLocator: Locator;

  private Elements = {
    firstResult:
      "text=SONY Bravia 2 163.9 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition with Feature for",
  };
  constructor(public page: Page, public context: BrowserContext) {
    this.productLocator = page.locator("//div[text()='SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition']").nth(0);
  }



  async clickFirstResult() {
    const [newtab] = await Promise.all([
      this.context.waitForEvent('page'),
      this.productLocator.click(),
    ]);
    await newtab.waitForLoadState('domcontentloaded');
    return newtab;
    // await this.page.locator(this.Elements.firstResult).nth(1).waitFor({"state":"visible"});
    // await this.page.locator(this.Elements.firstResult).nth(1).click()
  }
}
