import test from "@playwright/test";
 test.use({ storageState: "tests/testdat/storage.json" })

test("Test leaf page",async({page})=>{
   
await page.goto(" https://leaftaps.com/opentaps/control/main")
await page.locator(`text='CRM/SFA'`).click()
await page.locator(`text='Leads'`).click()
await page.locator("//a[text()='Accounts']").click()


})