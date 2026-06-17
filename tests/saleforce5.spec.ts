import test from '@playwright/test'
import inputValue from '../../Testleaf_Assignments_Rajeswari.R/tests/Testdata/userdata.json'




const getValue=inputValue[1]

test(`Login With Different Set of Data ${getValue.Tc_No}`  ,async({page})=>{


await page.goto("https://testleaf.my.salesforce.com/")
await page.locator("//input[@id='username']").fill(getValue.Username)
await page.locator("//input[@id='password']").fill(getValue.Password)
await page.locator("//input[@id='Login']").click()


})