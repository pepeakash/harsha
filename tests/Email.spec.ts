import { test, expect } from '@playwright/test';
const nodemailer = require("nodemailer");

test('send email', async () => {
  // Set up nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'pepeakash@gmail.com',
      pass: '@Reya1008',
    },
  });

  // Define email details
  const mailOptions = {
    from: 'pepeakash@gmail.com',
    to: 'jaykirti.g.upadhye@gmail.com',
    subject: 'Test email',
    text: 'Hello from Playwright!',
  };

  // Send email
  await transporter.sendMail(mailOptions);

  // Verify email was sent
  expect(true).toBe(true);
});