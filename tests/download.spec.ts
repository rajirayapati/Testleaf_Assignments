import test, { expect } from "@playwright/test";
test("herokuapp",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/download")

const downloadPromise = page.waitForEvent('download')
await page.locator("//a[@href='download/Test_Annotations_StorageState_Assignment (1).pdf']").click()
const download = await downloadPromise

expect(download.suggestedFilename()).toBe('Test_Annotations_StorageState_Assignment (1).pdf')

})