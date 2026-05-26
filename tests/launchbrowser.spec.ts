import {test,chromium } from "@playwright/test";

test ('launch browser', async () => {


const browserinstance = await chromium.launch({ headless: false }); // Launch the browser in non-headless mode
const context = await browserinstance.newContext(); // Create a new browser context
const page = await browserinstance.newPage(); // Create a new page

await page.goto('https://facebook.com'); // Navigate to example.com

await browserinstance.close( ); // Close the browser


}) ;
