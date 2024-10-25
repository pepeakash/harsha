import { test } from "@playwright/test";

test("authenticationPopUp passing username and password in URL", async ({
  page,
}) => {
  // this method will not work if password contains @ Symbols
  page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState("networkidle");
});

test("authenticationPopUp passing username and password in URL 1", async ({
  browser,
}) => {
  // this method will not work if password contains @ Symbols
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState("networkidle");

  //validations
  const header = await page.$("h3");

  if (header) {
    console.log(await header.textContent());
    expect(await header.textContent()).toBe("Basic Auth");
  }
});

test("authenticationPopUp with Basic Auth token", async ({ page }) => {
  const usernameInput = "admin";
  const passwordInput = "admin";
  // Basic Space BToA Method
  const authHeaderInput = "Basic " + btoa(usernameInput + ":" + passwordInput);
  page.setExtraHTTPHeaders({ Authorization: authHeaderInput });
  page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState("networkidle");
});

test("authenticationPopUp with Basic Auth token passing from FUNCTION", async ({
  page,
}) => {
  const usernameInput = "admin";
  const passwordInput = "admin";

  // const authHeaderInput = 'Basic ' + btoa(usernameInput + ':' + passwordInput);
  page.setExtraHTTPHeaders({
    Authorization: createAuthHeaderFunction(usernameInput, passwordInput),
  });
  page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState("networkidle");
});

function createAuthHeaderFunction(
  usernameParameter: any,
  passwordParameter: any,
) {
  // Basic Space BToA Method
  return "Basic " + btoa(usernameParameter + ":" + passwordParameter);
}
