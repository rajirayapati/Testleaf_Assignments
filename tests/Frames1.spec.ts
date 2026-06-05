import test from '@playwright/test'


test("Handle frame with index value",async({page})=>{


await page.goto("https://www.leafground.com/frame.xhtml")


const frameValue= page.frames()
console.log("Total frames in the page: "+frameValue.length)
await frameValue[1].locator("#Click").click()
const text = await frameValue[1].locator('//button[@id="Click"]').textContent()
console.log(text);


await frameValue[4].locator('#Click').click()

console.log(text);


})

