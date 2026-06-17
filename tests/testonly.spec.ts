import test from "@playwright/test";
test.use({ storageState: "tests/testdat/storage3.json" });
test.skip("Test leaf page slow",async({page})=>{


await page.goto("https://login.salesforce.com/")


await page.locator("//a[text()='View Opportunities']").click()

await page.locator("//div[@title='New']").click()

})


