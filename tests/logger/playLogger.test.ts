import { chromium, test } from "@playwright/test";

test("Logger", async ({ page }) => {
  //----------------Method 1-----------------------
  // const browser = await chromium.launch({
  //     logger: {
  //         isEnabled: (name, severity) => true,
  //         log: (name, severity, message, args) => console.log(`name = ${name} \n msg = ${message} \n severity = ${severity} \n args = ${args}`)
  //     }
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();

  //----------------Method 2-----------------------
  const consoleLogs = []; //to capture the multiple console logs
  page.on("console", (msg) => {
    if (msg.type() == "error") { //to capture only error logs
      console.log(msg.text()); //to print the logs in the console
      consoleLogs.push(msg.text()); //to push the logs to the array
    } 
  }); 

  await page.goto("https://letcode.in/elements"); 
  const btn = page.locator("#search");  
  await btn.click(); 
  await page.goto("https://www.amazon.in/asas"); 

  // write the logs to the winston logger
});
