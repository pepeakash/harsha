import { test as baseTest } from "@playwright/test";

// type koushik = {
//     age: number,
//     email: string
// }

export const test = baseTest.extend<{
  age: number;
  email: string;
}>({
  age: 27,
  email: "koushik350@gmail.com",
});

