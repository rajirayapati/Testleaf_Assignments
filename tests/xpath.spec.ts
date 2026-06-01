import test from "@playwright/test";
test("Test leaf page",async({page})=>{
await page.goto("https://orgfarm-44e803ac72-dev-ed.develop.my.salesforce.com/")
await page.locator("//input[contains(@id,'use')]").fill("rajirayapati_bslvqejyyual@gmail.com")
await page.locator("//input[contains(@id,'password')]").fill("Test@1234")
await page.locator("//input[@id='Login']").click()
await page.waitForEvent

})
