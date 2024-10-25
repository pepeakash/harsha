import { test, chromium, BrowserContext, Page } from '@playwright/test';


test("Flipkart - search and add a product to the cart", async () => {
    const browser = await chromium.launch({ headless: true });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.flipkart.com/');

    const searchIp = await page.getByPlaceholder("Search for Products, Brands and More");
    await searchIp.waitFor();
    await searchIp.fill("SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition");
    await page.keyboard.press("Enter");


    await page.locator("//div[text()='SONY Bravia 2 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition']").nth(1).click();



  })
  