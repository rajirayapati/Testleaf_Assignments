import test from "@playwright/test";
test.use({ storageState: "tests/testdat/storage3.json" });

test("Test leaf page",async({page})=>{


await page.goto("https://testleaf.lightning.force.com/one/one.app")
await page.waitForTimeout(3000)
await page.locator("//span[text()='App Launcher']").click()
await page.locator("//button[@aria-label='View All Applications' and text()='View All']").click()
await page.waitForTimeout(3000)

await page.locator("//input[@type='search' and @placeholder='Search apps or items...']").fill("Accounts")

})