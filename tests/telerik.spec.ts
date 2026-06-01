import test from "@playwright/test";
test("Test leaf page",async({page})=>{
await page.goto("https://www.telerik.com/contact")

await page.selectOption('#Dropdown-1', { label: 'Product questions' });
await page.waitForTimeout(2000)
await page.selectOption("#Dropdown-2",{index:2})
await page.waitForTimeout(2000)
await page.selectOption(".js-country-field",{value:'Australia'})
await page.waitForTimeout(2000)


})



