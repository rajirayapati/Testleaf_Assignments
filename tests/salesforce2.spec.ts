import test, { expect } from "@playwright/test";

test("Test leaf page",async({page})=>{
await page.goto('https://testleaf.my.salesforce.com/');    
//await page.goto("https://orgfarm-44e803ac72-dev-ed.develop.my.salesforce.com/")
await page.locator("//input[contains(@id,'use')]").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[contains(@id,'password')]").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")

await page.waitForTimeout(2000)
await page.locator("//span[text()='App Launcher']").click()
await page.locator("//button[@aria-label='View All Applications' and text()='View All']").click()
await page.waitForTimeout(3000)

await page.locator("//input[@type='search' and @placeholder='Search apps or items...']").fill("Accounts")
await page.waitForTimeout(3000)
//await page.locator("//span[@class='slds-truncate' and text()='Accounts']").click()

await page.locator("//div[contains(text(),'New')]").click()
await page.locator("//input[@name='Name']").fill("Agentforce3")

await page.getByRole('combobox', { name: 'Type' }).click();
await page.getByRole('option', { name: 'Prospect' }).click();
//const typeDropdown = page.getByRole('combobox', { name: 'Type' }).selectOption('Prospect')
//await page.locator("//button[@role='combobox' and @aria-label='Industry']").selectOption('Banking')
await page.locator("//button[@aria-label='Industry']").click();
await page.locator("//span[text()='Banking']").click();
await page.locator("//button[@name='SaveEdit']").click();

//await page.locator("//span[text()='Accounts']").click()
await page.locator("//th[@data-label='Account Name']//a.first()").click();

await page.locator("//span[normalize-space()='Upload Files']").setInputFiles('tests\\Testdata\\Playwright- AdvancedXpath (1).pdf')
await page.waitForTimeout(2000)
await page.locator("//span[text()='Done']").click()

await expect(page.locator("//span[text()='Playwright- AdvancedXpath (1)'][2]")).toContainText('Playwright- AdvancedXpath (1).pdf');
await page.waitForTimeout(2000)


})



function AdvancedXpath(arg0: number) {
    throw new Error("Function not implemented.");
}

