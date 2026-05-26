import { test, expect } from '@playwright/test';

// The { page } object is automatically provided by Playwright
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});