const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch(); // Launch Puppeteer
    const page = await browser.newPage(); // Create a new page

    // Navigate to the webpage
    await page.goto("https://vast.gg/gaming-giveaways/ecv4o-kinggeorge-290-gaming-bundle-vast-campaign-july-15-aug-14th/");

    // Wait for the email field to be visible
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[3]/label/div[2]/input');
    const emailField = await page.$x('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[3]/label/div[2]/input');

    // Wait for the first name field to be visible
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[1]/label/div[2]/input');
    const firstNameField = await page.$x('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[1]/label/div[2]/input');

    // Wait for the last name field to be visible
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[2]/label/div[2]/input');
    const lastNameField = await page.$x('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[2]/label/div[2]/input');

    // Fill in the form fields
    await emailField[0].type("lacalculadora06@hotmail.com");
    await firstNameField[0].type("Julio");
    await lastNameField[0].type("Delgado");

    // Submit the form
    const submitButton = await page.$x("//button[contains(text(), 'Save')]");
    await submitButton[0].click();

    // Wait for a while to observe the result or perform other actions
    await page.waitForTimeout(10000); // Adjust delay as needed

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
