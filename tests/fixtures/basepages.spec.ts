import { test as baseTest } from "@playwright/test";
import { LoginPageClass } from "../../page/LoginPage";
import { HeaderPageClass } from "../../page/Header.page";
import { CommonPageClass } from "../../page/common.page";

// type pages ={
//     loginPageClass: LoginPageClass;
//     headerPageClass: HeaderPageClass
//     commonPageClass: CommonPageClass
// }

export const myTest = baseTest.extend<{
  loginPageClass: LoginPageClass;
  headerPageClass: HeaderPageClass;
  commonPageClass: CommonPageClass;
}>({
  loginPageClass: async ({ page }, use) => {
    await use(new LoginPageClass(page));
  },
  headerPageClass: async ({ page }, use) => {
    await use(new HeaderPageClass(page));
  },
  commonPageClass: async ({ page }, use) => {
    await use(new CommonPageClass(page));
  },
});


export const expect = myTest.expect;
