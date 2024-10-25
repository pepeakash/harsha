import { test, expect } from "@playwright/test";
import { customTest } from "../utils_ts/test-base";
import { LoginPage } from "../pageobjects_ts/LoginPage";
import { DashboardPage } from "../pageobjects_ts/DashboardPage";
import { OrdersHistoryPage } from "../pageobjects_ts/OrdersHistoryPage";
import { OrdersReviewPage } from "../pageobjects_ts/OrdersReviewPage";
import { CartPage } from "../pageobjects_ts/CartPage";

//Json->string->js object
const dataset = JSON.parse(
  JSON.stringify(require("../utils/placeorderTestData.json")),
);

for (const data of dataset) {
  test(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
    // const poManager = new POManager(page);
    const loginPage = new LoginPage(page);
    //js file- Login js, DashboardPage
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    const cartPage = new CartPage(page);
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = new OrdersReviewPage(page);
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    let orderId: any;
    orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);

    await dashboardPage.navigateToOrders();

    const ordersHistoryPage = new OrdersHistoryPage(page);
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

customTest(`Client App login`, async ({ page, testDataForOrder }) => {
  const loginPage = new LoginPage(page);
  //js file- Login js, DashboardPage
  const products = page.locator(".card-body");
  await loginPage.goTo();
  await loginPage.validLogin(
    testDataForOrder.username,
    testDataForOrder.password,
  );

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = new CartPage(page);
  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
  await cartPage.Checkout();
});
//test files will trigger parallel
//individual tests in the file will run in sequence
