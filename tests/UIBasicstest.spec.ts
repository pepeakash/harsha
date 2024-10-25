import { test, expect } from "@playwright/test";

test("@Web Browser context playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = await page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator("#username").fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#signInBtn").click();
  // console.log(await page.locator("[style='display: none;']").textContent());
  // console.log(await page.locator("[style='display: block;']").textContent());
  // console.log(await page.locator("[style*='block']").textContent());
  // await expect(page.locator("[style*='block']")).toContainText("Incorrectese");
  console.log(await page.locator("[style='display: block;']").textContent());
  await expect(page.locator("[style*='display: block']")).toContainText(
    "Incorrect",
  );

  await userName.fill("");
  await userName.fill("rahulshettyacademy");

  await signIn.click();

  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());

  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test("Page playwright test", async ({ page }) => {
  await page.goto("https://google.com/");
  // grt title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");

  // css , xpath
});

test("Auth Assignment", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto("https://rahulshettyacademy.com/client");

  const userEmail = page.locator("#userEmail");
  const userPassword = page.locator("#userPassword");
  const login = page.locator("#login");
  const cardTitles = page.locator(".card-body b");

  await userEmail.fill("rahulshetty@gmail.com");
  await userPassword.fill("Iamking@000");
  await login.click();

  // .textContent() has default wait for sometime
  // .allTextContents() dont have default wait, we have to mention it specifically
  //
  // console.log(await cardTitles.nth(1).textContent());

  // network call wait
  // await page.waitForLoadState('networkidle');

  // Dynamic wait page.locator(".card-body b").waitFor()
  await cardTitles.last().waitFor();
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test("Handling stactic select dropdown options with playwright", async ({
  page,
}) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const password = page.locator("#password");
  const dropdown = page.locator("select.form-control");
  const signIn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");

  await username.fill("rahulshettyacademy");
  await password.fill("learning");

  await dropdown.selectOption("consult");
  // await page.pause();

  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();

  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await page.locator("#terms").check();
  expect(await page.locator("#terms").isChecked()).toBeTruthy();

  //blinking text
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  // await signIn.click();
});

test("Handling child window & tabs by using switch browser context", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const password = page.locator("#password");
  const dropdown = page.locator("select.form-control");
  const signIn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");

  await username.fill("rahulshettyacademy");
  await password.fill("learning");

  await dropdown.selectOption("consult");
  // await page.pause();

  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();

  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await page.locator("#terms").check();
  expect(await page.locator("#terms").isChecked()).toBeTruthy();

  //blinking text
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  //Handling child window & tabs by using switch browser context
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await documentLink.click(),
  ]);

  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);

  // await signIn.click();
  await username.fill(domain);
  // await page.pause();
  console.log(await username.textContent());
});

test("e2e cart Order", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/client");
  const email = "pepeakash@gmail.com";
  const userEmail = page.locator("#userEmail");
  const userPassword = page.locator("#userPassword");
  const login = page.locator("#login");
  const products = page.locator(".card-body");
  const productName = "ZARA COAT 3";

  await userEmail.fill("pepeakash@gmail.com");
  await userPassword.fill("@Reya1008");
  await login.click();

  await page.waitForLoadState("domcontentloaded");

  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

  const count = await products.count();
  for (let i = 0; i < count; i++) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      // add product to cart
      await products.nth(i).locator("text= Add To Cart").click();

      // once locator is found and action is performed... then we can skip further FOR Loop iteration using break command
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();

  //wait till products are displayed in cart
  await page.locator("div li").first().waitFor();

  const booleanValueZaraCoat4 = page
    .locator("h3:has-text('Zara Coat 4')")
    .isVisible();
  expect(booleanValueZaraCoat4).toBeTruthy();

  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("Ind");

  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  await expect(page.locator(".user__name [type='text']").first()).toHaveText(
    email,
  );
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. ",
  );
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderId);
});

test("Playwright Special locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("abc123");
  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .getByText("Success! The Form has been submitted successfully!.")
    .isVisible();
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button")
    .click();

  //locator(css)
});

test("@Web UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
   await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

test("@Child windows hadl", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"), //listen for any new page pending,rejected,fulfilled
    documentLink.click(),
  ]); //new page is opened

  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  console.log(await page.locator("#username").textContent());
});
