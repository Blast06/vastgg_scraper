const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch(); // Launch Playwright with Chromium
    const page = await browser.newPage(); // Create a new page

    // Navigate to the webpage
    await page.goto("https://vast.gg/giveaways/audeze-gaming-bundle-vast-campaign-sept-7th-oct-10th/");

    // Wait for the email field to be visible
    await page.waitForSelector('input[name="email"]',  { timeout: 30000 });
    const emailField = await page.$('input[name="email"]');

    // Wait for the first name field to be visible
    await page.waitForSelector('input[name="firstName"]');
    const firstNameField = await page.$('input[name="firstName"]');

    // Wait for the last name field to be visible
    await page.waitForSelector('input[name="lastName"]');
    const lastNameField = await page.$('input[name="lastName"]');

    // Fill in the form fields
    await emailField.type("lacalculadora06@hotmail.com");
    await firstNameField.type("Julio");
    await lastNameField.type("Delgado");

    // Submit the form
    const submitButton = await page.$('button[type="submit"]');
    await submitButton.click();

    // Wait for a while to observe the result or perform other actions
    await page.waitForTimeout(10000); // Adjust delay as needed

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
