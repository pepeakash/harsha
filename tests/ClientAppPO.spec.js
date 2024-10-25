const { test, expect } = require("@playwright/test");
const { customtest } = require("../utils/test-base");
const { LoginPage } = require("../pageobjects/LoginPage");
const { DashboardPage } = require("../pageobjects/DashboardPage");
const { OrdersHistoryPage } = require("../pageobjects/OrdersHistoryPage");
const { OrdersReviewPage } = require("../pageobjects/OrdersReviewPage");
const { CartPage } = require("../pageobjects/CartPage");

//Json->string->js object
const dataset = JSON.parse(
  JSON.stringify(require("../utils/placeorderTestData.json")),
);

for (const data of dataset) {
  test(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
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
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);

    await dashboardPage.navigateToOrders();

    const ordersHistoryPage = new OrdersHistoryPage(page);
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

customtest(`Client App login`, async ({ page, testDataForOrder }) => {
  //js file- Login js, DashboardPage

  const loginPage = new LoginPage(page);
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
