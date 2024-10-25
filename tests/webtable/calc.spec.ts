import { expect, test } from "@playwright/test";

test("Calculation", async ({ page }) => {
  await page.goto("https://letcode.in/table");

  const table = page.locator("#shopping");
  const tbody = table.locator("tbody");
  const tfoot = table.locator("tfoot");

  const rowsCount = await tbody.locator("tr").count();
  expect(rowsCount).toBe(4);

  let total = 0;

  for (let i = 0; i < rowsCount; i++) {
    const row = tbody.locator("tr").nth(i);
    const price = await row.locator("td").last().textContent();
    total += Number(price);
  }

  const actualValue = await tfoot.locator("td").last().textContent();
  expect(Number(actualValue)).toBe(total);

  console.log(actualValue, total);
});

test("Calculation 2", async ({ page }) => {
  await page.goto("https://letcode.in/table");
  const table = page.locator("#shopping");
  const tfoot = table.locator("tfoot");

  const allRows = table.locator("tbody tr");

  const allRowsCount = await allRows.count();
  expect(allRowsCount).toBe(4);

  let total = 0;

  for (let i = 0; i < allRowsCount; i++) {
    const individualRow = allRows.nth(i);
    const price = await individualRow.locator("td").last().textContent();
    total += Number(price);
  }

  const actualValue = await tfoot.locator("td").last().textContent();
  expect(Number(actualValue)).toBe(total);

  console.log(actualValue, total);
});

test("Calculation 3", async ({ page }) => {
  await page.goto("https://letcode.in/table");
  const tds = page.locator("#shopping").locator("td");
  const count = await tds.count();
  let result = 0;
  for (let i = 1; i < count - 2; i = i + 2) {
    const total = await tds.nth(i).textContent();
    console.log(total);
    result += Number(total);
  }
  console.log(result);
  const actualValue = Number(await tds.last().textContent());
  expect(result).toBe(actualValue);

  console.log(result, actualValue);
});
