const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Dashboard Test', function () {
    let driver;

    before(async function () {
        console.log('ini di dalam before() hook')
        driver = await new Builder().forBrowser('chrome').build();
    });

    beforeEach(async function () {
        console.log('ini di dalam beforeEach() hook')
        await driver.quit();
    });

    it('View Dashboard with User Already Verify Profile (KYC)', async function () {
        //await loginUser('standard_user', 'secret_sauce')
        
        await driver.get('https://www.saucedemo.com/deposit/ovo?amount=100000');
        const title = await driver.getTitle();
        await driver.sleep(3000);
    })

    it('View Dashboard with User Not Verify Profile (KYC)', async function () {
       // await loginUser('notkyc_user', 'secret_sauce')
        
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        await driver.sleep(3000);
    })

    it('View Dashboard with User Wallet Freeze', async function () {
       // await loginUser('freeze_user', 'secret_sauce')
        
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        await driver.sleep(3000);
    })


});
