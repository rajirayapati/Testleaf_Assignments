import test from "@playwright/test";
test("Test leaf page",async({page})=>{

await page.goto('https://testleaf.my.salesforce.com/');    
await page.locator("//input[contains(@id,'use')]").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[contains(@id,'password')]").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()

await page.context().storageState({path:"tests/testdat/storage3.json"})


})