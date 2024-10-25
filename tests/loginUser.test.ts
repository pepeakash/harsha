import { expect, test } from "@playwright/test";
import {HeaderPageClass} from "../page/Header.page";
import {LoginPageClass} from "../page/LoginPage";
const CryptoJS = require("crypto-js");

import * as data from "../utils/testdata/loginUser.json";

test.describe("Login scenario", async () => {
  test("Invalid login", async ({ page }) => {
    const login = new LoginPageClass(page);

    await test.step("Navigate to login page", async () => {
      await login.goTo();
    });

    await test.step("Enter valid username and invalid password", async () => {
      await login.navigateToLoginPage(data.userName1, data.invalidPassword);
      const msg = login.getErrorMessage();
      await expect(msg).toBeVisible();
      await expect(msg).toHaveText(data.errorMsg);
    });

    await test.step("Enter invalid username and valid password", async () => {
      await login.navigateToLoginPage(data.invalidUserName, data.password1);
      const msg = login.getErrorMessage();
      await expect(msg).toBeVisible();
      await expect(msg).toHaveText(data.errorMsg);
    });

    await test.step("Enter invalid username and invalid password", async () => {
      await login.navigateToLoginPage(data.invalidUserName, data.invalidPassword);
      const msg = login.getErrorMessage();
      await expect(msg).toBeVisible();
      await expect(msg).toHaveText(data.errorMsg);
    });
  });

  test("Valid login & logout", async ({ page }) => {
    const login = new LoginPageClass(page);
    const header = new HeaderPageClass(page);

    await test.step("Navigate to login page", async () => {
      await login.goTo();
    });
    await test.step("login with valid credentials", async () => {
      await login.navigateToLoginPage(
        getDecryptedValue(data.userName),
        getDecryptedValue(data.password),
      );
      await header.verifyLoginSuccess();
    });
    await test.step("Logout user", async () => {
      await header.clickSignOutLink();
    });
  });
});

function getDecryptedValue(data: string) {
  const decrypted = CryptoJS.AES.decrypt(data, process.env.SECRET_KEY);
  return decrypted.toString(CryptoJS.enc.Utf8);
}
