import { test as baseTest } from "@playwright/test";

type koushik = {
  hey: string;
};

export const test = baseTest.extend<koushik>({
  hey: "I am letcode",
});


export const expect = test.expect;
