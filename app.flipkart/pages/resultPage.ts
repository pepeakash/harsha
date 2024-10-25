import { Page } from "@playwright/test";

export default class ResultPage {
  constructor(private page: Page) {}

  private Elements = {
    addToCartBtn: "//button[text()='Add to cart']",
  };

  async addToCart() {
    await this.page.click(this.Elements.addToCartBtn);
    await this.page.waitForTimeout(10000);
  }
}
