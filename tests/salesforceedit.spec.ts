
 ////4 Edit Individuals
import test from "@playwright/test";
test("Test leaf page",async({page})=>{

await page.goto('https://testleaf.my.salesforce.com/');    
await page.locator("//input[contains(@id,'use')]").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[contains(@id,'password')]").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()

await page.locator("//a[@title='Leads']/span[text()='Leads']").click()
await page.locator("//a[@title='Raji']").first().click();

//await page.locator("//span[contains(@class,'slds-checkbox_faux')][2]").click()
//await page.locator("//span[contains(text(),'Raji')][1]").click()

await page.locator("//button[normalize-space()='Edit']").click();

await page.locator("//button[@name='salutation']").click();
await page.locator("//lightning-base-combobox-item[@data-value='Ms.']").click();

await page.locator("//input[contains(@class,'slds-input') and @placeholder='First Name']").fill("Raaaaji")
await page.locator("//button[@name='SaveEdit' and normalize-space()='Save']").click()

await page.waitForTimeout(2000)
})
