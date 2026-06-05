import test, { expect } from "@playwright/test";
test("Test leaf page",async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/main');
await page.locator('[id="username"]').fill("democsr")
await page.locator("[id='password']").fill("crmsfa")
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', { name: 'CRM/SFA' }).click();
await page.getByRole('link', { name: 'Leads' }).click();
await page.locator("//a[text()='Find Leads']").click();
await page.locator("//input[@name='id']").fill('13903');
await page.locator("//button[text()='Find Leads']").click();

await page.waitForTimeout(2000)
await page.locator("//a[text()='Raji']").click();
await page.locator("//div[@class='frameSectionExtra']/a[text()='Edit']").click();
await page.locator("//tbody/tr/td/input[@name='companyName']").fill("Tes90678")
await page.locator("input.smallSubmit[value='Update']").click()
await page.waitForTimeout(2000)
console.log(await page.title())
await page.waitForTimeout(2000)

})
//