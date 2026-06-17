import test, { expect } from "@playwright/test";
test("herokuapp",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")

await page.locator("//div[@id='drag-drop-upload']").click()
await page.locator("//input[@id='file-upload']").setInputFiles('tests\\Testdata\\Playwright- AdvancedXpath (1).pdf')
await page.locator("//input[@value='Upload']").click()
await expect(page.locator('#uploaded-files')).toHaveText('Playwright- AdvancedXpath (1).pdf');
})