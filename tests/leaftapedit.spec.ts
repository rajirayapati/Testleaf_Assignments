import test from "@playwright/test";
test("Test leaf page",async({page})=>{
await page.goto(" https://leaftaps.com/opentaps/control/main")
await page.locator('[id="username"]').fill("democsr2")
await page.locator("[id='password']").fill("crmsfa")
await page.locator("//input[@class='decorativeSubmit']").click()
await page.locator(`text='CRM/SFA'`).click()
await page.locator(`text='Leads'`).click()
await page.locator("//a[@href='/crmsfa/control/createLeadForm']").click()
await page.locator("#createLeadForm_companyName").fill("Testing")
await page.locator("#createLeadForm_firstName").fill("webautomation")
await page.locator("#createLeadForm_lastName").fill("plawright")
await page.locator("#createLeadForm_generalProfTitle").fill("Test")
await page.locator("#createLeadForm_annualRevenue").fill("1000000")
await page.locator("#createLeadForm_departmentName").fill("Automation")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9025323456")
await page.waitForTimeout(2000)
await page.locator("//input[@class='smallSubmit'][1]").click()
await page.locator("//div[@class='frameSectionExtra']/a[text()='Edit']").click();
await page.locator("//tbody/tr/td/input[@name='companyName']").fill("Tes90678")
await page.locator("input.smallSubmit[value='Update']").click()
await page.waitForTimeout(2000)
console.log(await page.title())
await page.waitForTimeout(2000)


})