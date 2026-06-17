import test from "@playwright/test";
test("Test leaf page",async({page})=>{


await page.goto(" https://leaftaps.com/opentaps/control/main")
await page.locator('[id="username"]').fill("DemoSalesManager")
await page.locator("[id='password']").fill("crmsfa")
await page.locator("//input[@class='decorativeSubmit']").click()

await page.context().storageState({path:"tests/testdat/storage2.json"})

})