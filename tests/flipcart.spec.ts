import { test } from '@playwright/test';

test('Webkit launch test', async ({ page }) => {
 

  await page.goto('https://www.flipkart.com/');

  const title = page.title();
  const url = page.url();
  console.log(url); 
  console.log(title);
});