import { test, expect } from "../fixture/myFixture2.spec";

test("fixture demo", async ({ hey }, info) => {
  console.log(hey.toUpperCase());
  const text = hey.toLocaleUpperCase();
  expect(text).toBe("I AM LETCODE");
  console.log("is it passewd?" + info.status);
});
