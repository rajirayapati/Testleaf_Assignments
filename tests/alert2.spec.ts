import test, { expect } from "@playwright/test";

test("Using page.once",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[1]").click()
await page.waitForTimeout(2000)
await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(2000)
})

test("Handle alert with Page.Once",async({page})=>{

page.once('dialog',alertType=>{
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)

    alertType.accept()

})


})
