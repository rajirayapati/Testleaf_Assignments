import { test } from '@playwright/test';

test('Edge launch test', async ({ page }) => {
 

  await page.goto('https://www.redbus.in/');

  const title = await page.title();
    console.log(URL); 
  console.log(title);
});