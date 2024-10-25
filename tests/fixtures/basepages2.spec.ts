// import { test as baseTest } from "@playwright/test";
// import LoginPageClass from "../pageObject2/loginPageObject.spec";
// import FramePageClass from "../pageObject2/framePageObject.spec";
// import WindowsPageClass from "../pageObject2/windowsPageObject.spec";
// import WorkSpacePageClass from "../pageObject2/workSpacePageObject.spec";

// // type pages ={
// //     loginPageClass: LoginPageClass;
// //     headerPageClass: HeaderPageClass
// //     commonPageClass: CommonPageClass
// // }

// const test = baseTest.extend<{
//   loginPageClass: LoginPageClass;
//   framePageClass: FramePageClass;
//   windowsPageClass: WindowsPageClass;
//   workSpacePageClass: WorkSpacePageClass;
// }>({
//   loginPageClass: async ({ page }, use) => {
//     await use(new LoginPageClass(page));
//   },
//   framePageClass: async ({ page }, use) => {
//     await use(new FramePageClass(page));
//   },
//   windowsPageClass: async ({ page }, use) => {
//     await use(new WindowsPageClass(page));
//   },
//   workSpacePageClass: async ({ page }, use) => {
//     await use(new WorkSpacePageClass(page));
//   },
// });

// export default test;
// export const expect = test.expect;
