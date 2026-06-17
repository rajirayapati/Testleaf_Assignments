import test from "@playwright/test";
test("Naukri Registration",async({page})=>{



await page.goto("https://www.naukri.com/registration/createAccount")
await page.locator("//h2[text()=\"I'm experienced\"]").click(),


await page.locator("//input[@type='file']").setInputFiles('tests\\Testdata\\Playwright- AdvancedXpath (1).pdf'),
await page.waitForTimeout(2000)


})




