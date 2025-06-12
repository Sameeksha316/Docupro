const puppeteer = require("puppeteer");

async function generateScreenshot(url,outputPath){

    try{

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(url);

        await page.screenshot({path : outputPath});

        await browser.close();
        console.log("Screenshot generated succesfully");
    }catch(err){
        console.log("unable to generate screenshots");
    }

}
const url = "https://docupro.in";
const outputPath="docupro-screenshot.png";

generateScreenshot(url,outputPath);