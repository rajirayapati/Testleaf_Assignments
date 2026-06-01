///#Assignment: 1 Create Lead

import test from "@playwright/test";
test("Test leaf page",async({page})=>{

await page.goto('https://testleaf.my.salesforce.com/');    
//await page.goto("https://orgfarm-44e803ac72-dev-ed.develop.my.salesforce.com/")
await page.locator("//input[contains(@id,'use')]").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[contains(@id,'password')]").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()
//await page.pause();
//await page.locator("//input[@value='Verify' and @type='submit']").click()
//await page.waitForTimeout(3000)
await page.locator("//span[text()='App Launcher']").click()
await page.locator("//button[@aria-label='View All Applications' and text()='View All']").click()
await page.waitForTimeout(3000)

await page.locator("//input[@type='search' and @placeholder='Search apps or items...']").fill("Sales")
//await page.locator("//*[@lwc-45bd2ao4vb7][4]").click()
await page.locator("//p[@title='Manage your sales process with accounts, leads, opportunities, and more']").click()
await page.waitForTimeout(3000)
await page.locator("//a[@title='Leads']/span[text()='Leads']").click()
await page.locator("//div[@title='New' and text()='New']").click()
await page.locator("//button[@name='salutation']").click()
await page.locator("//lightning-base-combobox-item[descendant::span[text()='Mr.']]").click()
await page.locator("//input[@name='lastName']").fill("Raji")
await page.locator("//input[@name='Company' and @type='text']").fill("Agentforce")
await page.locator("//button[@name='SaveAndNew']").click()


/////Assignment: 3 Create Individuals  and Assignment: 4 Edit Individuals
await page.locator("//div[contains(@class,'slds-icon-waffle')]").click()
await page.locator("//button[@aria-label='View All Applications' and text()='View All']").click()
await page.locator("//span[@part='formatted-rich-text']//p[text()='Individuals']").click()
await page.locator("//a[@title='New' and contains(@class, 'forceActionLink')]/div[text()='New']").click()
await page.locator("//input[contains(@class, 'lastName')]").fill("Raji")
await page.locator("//span[contains(@class, 'bBody') and text()='Save']").click()
await page.waitForTimeout(2000)




})
