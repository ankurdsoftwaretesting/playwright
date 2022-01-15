import { Browser, BrowserContext, chromium, Page } from "playwright";

describe('Jest runner - without page object', ()=>{
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test('', async() => {
        browser = await chromium.launch({headless: true});
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://playwright.dev/');
        const title = await page.title();
        expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright1');

        browser.close();
    })
})
