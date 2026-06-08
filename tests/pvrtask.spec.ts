import test from "@playwright/test";
test("Test leaf page",async({page})=>{

await page.goto('https://www.pvrcinemas.com/');   
await page.locator("//h6[text()='Bengaluru']").click()
await page.locator("//span[text()='Cinema']").click()

await page.locator("//span[text()='Select Cinema']").click();
await page.locator("//li[@role='option']//span[text()='INOX Nexus Whitefield Bengaluru']").click();
//
//await page.locator("//div[@class='p-dropdown-trigger' and @aria-label='Select Date']").click();
await page.locator("//span[text()='Tomorrow']").click();
//await page.locator("//div[contains(@class,'p-dropdown-trigger')]").click();
await page.locator("(//li[contains(@class,'p-dropdown-item')])[7]").click();
//await page.locator("//span[text()='Select Timing']").click();
await page.locator("//li[contains(.,'08:35 AM') and contains(.,'ATMOS') and contains(.,'Telugu')]").click();


await page.locator("//button[@aria-label='Submit']/child::span[text()='Book']").click();


await page.waitForTimeout(2000)

await page.locator("//button[.='Accept']").click()

await page.locator("//div[@class='summary-movies-content']").click();
console.log("Movie name: "+await page.locator("//div[@class='summary-movies-content']").textContent());

await page.waitForTimeout(2000)
await page.locator("//span[@id='CR.CLASSIC ROWS|J:9']").click();
await page.locator("//div[contains(@class,'seat-number')]//p").textContent().then(async (text)=>{
    console.log("Selected seat number: "+text)
await page.locator("//div[@class='grand-prices']//h6").textContent().then((text)=>{
    console.log(text)

})

    
})
})
