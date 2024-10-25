import { test, expect } from "@playwright/test";

test("clipboard", async ({ page }) => {
  await page.goto('https://clipboardjs.com/');

  // Simulate setting clipboard content using a hidden input element
  const simulatedText = "Simulated clipboard text";
  await page.evaluate(async (text) => {
    const input = document.createElement('input');
    input.setAttribute('style', 'position: absolute; left: -9999px;');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }, simulatedText);

  // Evaluate the clipboard content using a hidden input element
  const copiedText = await page.evaluate(async () => {
    const input = document.createElement('input');
    input.setAttribute('style', 'position: absolute; left: -9999px;');
    document.body.appendChild(input);
    input.select();
    document.execCommand('paste');
    const value = input.value;
    document.body.removeChild(input);
    return value;
  });

  console.log("Copied text from clipboard:", copiedText);

  // Assert the copied text is as expected

});