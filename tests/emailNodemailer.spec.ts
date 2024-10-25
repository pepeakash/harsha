import { test, expect } from "@playwright/test";

const nodemailer = require("nodemailer");

test("Email nodemailer", async ({ page }) => {
  await page.goto(
    "https://www.amazon.in/dp/B09N3ZNHTY/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B09N3ZNHTY&pd_rd_w=48Ojy&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=AZZ056SVBCXHAWG0QEEQ&pd_rd_wg=PgVav&pd_rd_r=3dbc280d-b81b-4ae4-b847-e12a6bb23040&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
  );

  const currentPrice = await page
    .locator('//div[@id="corePrice_feature_div"]//span[@class="a-price-whole"]')
    .textContent();
  console.log(currentPrice?.split(".")[0]);

  if (Number(currentPrice) < 1000) {
    sendEmailNotification(currentPrice);
  }
});

function sendEmailNotification(currentPrice: string | null) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pepeakash@gmail.com",
      pass: "9902071008",
    },
  });
  transporter.sendMail({
    from: "pepeakash@gmail.com",
    to: "jaykirti.g.upadhye@gmail.com",
    subject: "Amazon Price Drop Notification",
    text: "Price Drop",
  });
}
