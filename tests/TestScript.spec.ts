import { test, chromium, BrowserContext, Page } from '@playwright/test';
import { MainPage } from './newWindow/mainPage';
import { NewWindowPage } from './newWindow/NewWindowPage';


test("Flipkart - search and add a product to the cart", async () => {
    const browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
  
    const mainPage = new MainPage(page, context);
    await page.goto('https://www.flipkart.com/');

    // await mainPage.searchFor(
    //   "SONY Bravia 2 163.9 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition with Feature for",
    // );

    await mainPage.searchFor("SONY Bravia 2 163.9 cm (65 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition with Feature for");
  
    const newPage = await mainPage.clickButtonToOpenNewWindow();
    const newWindowPage = new NewWindowPage(newPage);
  
    await newWindowPage.interactWithElement();
  
  
  })
  