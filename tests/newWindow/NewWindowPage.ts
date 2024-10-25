import { Page } from '@playwright/test';

export class NewWindowPage {
  private page: Page;
  private Elements = {
    someElement: '//button[text()="Add to cart"]'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async interactWithElement() {
    await this.page.click(this.Elements.someElement);
  }
}