import asyncio
from pyppeteer import launch

async def main():
    # Launch the browser
    browser = await launch()

    # Create a new page
    page = await browser.newPage()

    # Navigate to the webpage
    await page.goto("https://vast.gg/gaming-giveaways/ecv4o-kinggeorge-290-gaming-bundle-vast-campaign-july-15-aug-14th/")

    # Wait for the email field to be visible
    await page.waitForSelector('#em7298042 > div > div.expanded-view.ng-scope > form > fieldset.inputs.ng-scope > div.form-horizontal > div > div > div.input.required.stringish.form-group.error > label > div.form-wrapper > input')
    email_field = await page.waitForXPath('#em7298042 > div > div.expanded-view.ng-scope > form > fieldset.inputs.ng-scope > div.form-horizontal > div > div > div.input.required.stringish.form-group.error > label > div.form-wrapper > input')

    # Wait for the first name field to be visible
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[1]/label/div[2]/input')
    first_name_field = await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[1]/label/div[2]/input')

    # Wait for the last name field to be visible
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[2]/label/div[2]/input')
    last_name_field = await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/div/form/fieldset[2]/div[2]/div/div/div[2]/label/div[2]/input')

    # Fill in the form fields
    await email_field[0].type("lacalculadora06@hotmail.com")
    await first_name_field[0].type("Julio")
    await last_name_field[0].type("Delgado")

    # Submit the form
    submit_button = await page.xpath("//button[contains(text(), 'Save')]")
    await submit_button[0].click()

    # Wait for a while to observe the result or perform other actions
    await asyncio.sleep(10)  # Adjust delay as needed

    # Close the browser
    await browser.close()

# Run the asyncio event loop
asyncio.get_event_loop().run_until_complete(main())
