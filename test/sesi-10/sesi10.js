require('dotenv').config();
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');

const environment = process.env.environment;

describe('Google Search Test', function () {
    let driver;

    it('Headless Chrome - Visit SauceDemo dan cek page title', async function () {
        if (environment == 'server') {
            options = new chrome.Options();
            options.addArguments("--headless");

            driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        } else if (environment == 'local') {
            driver = await new Builder().forBrowser('chrome').build();
        } else {
            throw new Error('Environment not supported');
        }

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.quit()
    })

    it('Headless Firefox - Visit SauceDemo dan cek page title', async function () {
        options = new firefox.Options()
        options.addArguments("--headless");

        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.quit()
    })
});
