import test, { expect } from "@playwright/test";
import { verify } from "crypto";
test("Test leaf page",async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/main');
await page.locator('[id="username"]').fill("democsr")
await page.locator("[id='password']").fill("crmsfa")
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', { name: 'CRM/SFA' }).click();
await page.getByRole('link', { name: 'Leads' }).click();
await page.getByRole('link', { name: 'Create Lead' }).click();


await page.locator("#createLeadForm_companyName").fill("Testng1")
await page.locator("#createLeadForm_firstName").fill("Raj")
await page.locator("#createLeadForm_lastName").fill("Raya")
await page.locator("#createLeadForm_generalProfTitle").fill("Tester")
await page.locator("#createLeadForm_annualRevenue").fill("50000")
await page.locator("#createLeadForm_departmentName").fill("Automation")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9022223456")
await page.locator("//input[@class='smallSubmit'][1]").click()
await page.waitForTimeout(2000)
await page.locator(`text='Leads'`).click()


})

// Company Name
