import { test, chromium, BrowserContext, Page } from '@playwright/test';
import HomePage from "../app.flipkart/pages/homePage";
import ResultPage from "../app.flipkart/pages/resultPage";
import SearchResult from "../app.flipkart/pages/searchResult";

test("Flipkart - search and add a product to the cart", async () => {
  const browser = await chromium.launch({ headless: true });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  const home = new HomePage(page, context);
  const search = new SearchResult(page, context);

  await test.step("Goto app & close the popup", async () => {
    await page.goto("https://www.flipkart.com/");
    // await home.closePopup();
  });

  const newTab = await test.step("search for some product", async () => {
    await home.searchFor(
      "SONY Bravia 2 163.9 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition with Feature for",
    );
    return await search.clickFirstResult();
    // const result = new ResultPage(tab);
  });

  await test.step("add the product to the cart", async () => {
    const result = new ResultPage(newTab);
    await result.addToCart();

  });
});
