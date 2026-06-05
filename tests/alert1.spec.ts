import test, { expect } from "@playwright/test";

test("Auto Dismiss alert",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")

await page.locator("(//span[text()='Show'])[2]").click()

})

test("Handle alert with Page.Once",async({page})=>{

page.once('dialog',alertType=>{
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)

    alertType.dismiss()

})
})
