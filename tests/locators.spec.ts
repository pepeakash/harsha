import { test, Locator } from "@playwright/test";

test("locator", async ({ page }) => {
  //1. Id
  const firstNameLocator: Locator = page.locator("id=input-firstname");
  const lastNameLocator: Locator = page.locator("id=input-lastname");
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("networkidle");
  await firstNameLocator.fill("Kubera");
  await lastNameLocator.fill("Patil");

  //2. css locator class Name with dot .
  const logoLocator: Locator = page.locator(".img-responsive");
  const logoLocatorExistBooleanValue = await logoLocator.isEnabled();
  console.log(logoLocatorExistBooleanValue);

  // 3. text

  const headerLocator: Locator = page.locator("text=Register Account");
  const headerLocatorExistsBooleanValue = await headerLocator.isEnabled();
  console.log(headerLocatorExistsBooleanValue);

  const ContinueButtonLocator: Locator = page.locator("text=Continue");
  const ContinueButtonLocatorExistsBooleanValue =
    await ContinueButtonLocator.isEnabled();
  console.log(ContinueButtonLocatorExistsBooleanValue);

  const ForgottenPasswordLinkLocator: Locator = page.locator(
    "text=Forgotten Password",
  );
  const ForgottenPasswordLinkLocatorExistsBooleanValue =
    await ForgottenPasswordLinkLocator.isEnabled();
  console.log(ForgottenPasswordLinkLocatorExistsBooleanValue);

  // 4. CSS

  // const emailLocator: Locator = page.locator('css=input#input-email');
  const emailLocator: Locator = page.locator("input#input-email");

  // const telephoneLocator: Locator = page.locator('css=input#input-telephone');
  // const telephoneLocator: Locator = page.locator('css=input[name="telephone"]');
  const telephoneLocator: Locator = page.locator('input[name="telephone"]');

  // const checkboxLocator: Locator = page.locator('css=input[type="checkbox"]');
  const checkboxLocator: Locator = page.locator('input[type="checkbox"]');

  await emailLocator.fill("pepeakash@gmail.com");
  await telephoneLocator.fill("1234567890");
  await checkboxLocator.click();

  //5. Xpath

  // const passwordLocator: Locator = page.locator('xpath=//input[@id="input-password"]');
  const passwordLocator: Locator = page.locator(
    '//input[@id="input-password"]',
  );
  // const searchLocator: Locator = page.locator('xpath=//input[@name="search"and @type="text"]');
  const searchLocator: Locator = page.locator(
    '//input[@name="search"and @type="text"]',
  );

  await passwordLocator.fill("test@123");
  await searchLocator.fill("macbook");

  await page.waitForTimeout(5000);
});
