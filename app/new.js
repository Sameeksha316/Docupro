const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the URL you want to screenshot
    console.log("Navigating to the webpage...");
    await page.goto('https://docupro.i');
    console.log("Page loaded successfully.");

    // Take a screenshot and save it as 'example.png' in the current directory
    console.log("Taking screenshot...");
    await page.screenshot({ path: 'example.png' });
    console.log("Screenshot saved as 'example.png'.");

    await browser.close();
})();