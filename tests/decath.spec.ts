import test, { expect } from "@playwright/test";
test("Test leaf page",async({page})=>{
//Launch the browser
//Navigate to https://www.decathlon.in/
await page.goto('https://www.decathlon.in/'); 
//Verify the user is navigated to the Decathlon home page

const title = await page.title()
console.log(title)
expect(title).toBe("Buy Sporting Goods, Sportswear and Equipments | Download App") 
console.log("After Assertion")
//Click on the Search icon on the home page
//Verify the search input field is enabled

await page.locator("//input[@type='search']").click()

const searchFieldEnabled = page.locator("//input[@type='search']")
await expect(searchFieldEnabled).toBeEnabled()
//Enter the product name as **"shoes"** in the search field.
await searchFieldEnabled.fill("shoes")
// Press Enter to search the product
await searchFieldEnabled.press('Enter')
//Capture and print the page title in the console.
const shoesTitle = await page.title()
console.log(shoesTitle)   
//Verify the page title is displayed as **"Search | shoes"**.
expect(shoesTitle).toBe("Search | shoes")    
console.log("shoesTitle After Assertion")
await page.waitForTimeout(2000)
await page.locator("//button[@type='button']//span[text()='Sport']").click()
// Click on the **"Running"** category filter.
await page.locator("//div[@id='sport_pratice_en']//span[text()='Running']//preceding-sibling::label//input[@type='checkbox']").click()
//Click on the **"Men"** gender filter.

          
await page.locator("//button[@type='button']//span[text()='Gender']").click()
await page.locator("//span[text()='Men']//preceding-sibling::label//input[@type='checkbox']").click()
//Click on the shoe size filter **"UK 10.5"**
await page.locator("//span[text()='Size']").click()
await page.waitForTimeout(2000)
await page.locator("//span[text()='Uk 10.5 - eu 45']//preceding-sibling::label//input[@type='checkbox']").click()
await page.waitForTimeout(2000)
//Click on the **Sort** option.
await page.locator("//span[text()='Most relevant']").click()
//Select the sorting option **"Price: High to Low"**.
await page.locator("//span[text()='Price (high → low) ']").click()
await page.waitForTimeout(2000)
//Click on the first product from the displayed product list.
await page.locator("(//div[@data-test-id='product-card:product-card:title'])[1]").click()
await page.waitForTimeout(2000)    

    //Select the shoe size **"UK 10.5 - EU 45"** on the product detail page.
 if(page.locator("//div[text()='Size Unavailable? Explore more styles']").getByText("Size Unavailable? Explore more styles")) {
        await page.locator("//div[@aria-label='Close']").click()
    }
await page.waitForTimeout(2000)

    //Click on the available stock in the list
await page.locator("(//li[@role='listitem']//button[@data-test-id='pdp-color-selector-desktop:option-button'])[1]").click()

await page.locator("//li[@role='listitem']//button//span[text()='10.5']").click()

    //Click on the **"Add to Cart"** button.
await page.locator("//span[text()='Add to cart']").click()

    // Click on the **Cart** option.
await page.locator("//span[text()='Cart']").click()

    // Fetch the total cart value.
    // const totalCartVal = await page.locator("(//div[@data-test-id='price-section-container']//div)[1]").getByText("2,499")   
     //Print the total cart amount in the console. 
const totalAmount = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']//p").textContent();
console.log("totalAmount:",totalAmount);

  
    
   
      
})