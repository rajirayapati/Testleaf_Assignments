import test, { expect } from "@playwright/test";

test("Using page.on",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[1]").click()
await page.waitForTimeout(2000)
await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(2000)
})

test("Handle alert with Page.on",async({page})=>{

page.on('dialog',alertType=>{
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)
    if (type==="simple"){
        alertType.accept()
    }  
    if (type==="confirm"){
        alertType.dismiss()
    }   
    else if (type==="prompt"){
        alertType.accept("playwright")  
        
    }   

})


})