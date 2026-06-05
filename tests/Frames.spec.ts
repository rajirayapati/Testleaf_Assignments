import test from '@playwright/test'


test("handle alert",async({page})=>{
    page.once('dialog',alertType=>{
        const type=alertType.type()
        console.log(type);
      
        alertType.accept()
        console.log(type)
    })
})
    
test("Handle frame with index value",async({page})=>{


await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.frameLocator("(//iframe)[1]").locator("//button[@onclick='myFunction()']").click()
})
