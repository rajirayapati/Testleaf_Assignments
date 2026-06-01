import test from "@playwright/test";
test("Test leaf page",async({page})=>{
await page.goto(" https://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("democsr")
await page.locator("[id='password']").fill("crmsfa")
await page.locator("input[type='submit']").click()
await page.locator(`text='CRM/SFA'`).click()
console.log(await page.title())

})
