import { Locator, Page, test } from "@playwright/test";

// -----------------------To check checkbox depending on Name-------------
test("Simple web table", async ({ page }) => {
  await page.goto("https://letcode.in/table");
  const table = page.locator("#simpletable");
  const allHeaders = table.locator("thead");
  console.log(await allHeaders.allTextContents());

  const allRows = table.locator("tbody tr");
  console.log("Rows count: " + (await allRows.count()));
  const allColsInRow = allRows.first().locator("td");
  console.log("Cols count: " + (await allColsInRow.count()));

  await checkInput("Raj");
  // await checkInput(rows, page, "Chatterjee");

  // for (let i = 0; i < (await allRows.count()); i++) {
  //   const individualRow = allRows.nth(i);
  //   const allColumnsInIndividualRow = individualRow.locator("td");
  //   for (let j = 0; j < (await allColumnsInIndividualRow.count()); j++) {
  //     if ((await allColumnsInIndividualRow.nth(j).textContent()) == "Raj") {
  //       console.log(await allColumnsInIndividualRow.nth(2).textContent());
  //       await allColumnsInIndividualRow.last().locator("input").check();
  //     }
  //   }
  // }

  async function checkInput(name: string) {
    const nameMatchSingleRow = allRows.filter({
      hasText: name,
    });
    console.log(nameMatchSingleRow.innerText());
    await nameMatchSingleRow.locator("input").check();
    console.log(await nameMatchSingleRow.locator("td").nth(2).textContent());
  }
});
