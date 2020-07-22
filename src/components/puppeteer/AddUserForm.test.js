const puppeteer = require('puppeteer');
const { validate, addUser } = require('./AddUserForm');

test('testing validate', () => {
    expect(validate(null)).toBe(false);

    expect(validate(undefined)).toBe(false);
});

test('adding user', () => {
    expect(addUser('Mike', 30)).toBe(true);

    expect(addUser(undefined, 29)).toBe(false);
});

test('puppeteer adding user', async () => {
    // headless false means it will show a browser popup
    // slowMo is to slow down the automation so we can see whats going on
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
}, 10000);