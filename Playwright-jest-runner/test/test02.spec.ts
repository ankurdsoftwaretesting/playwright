import { Browser, BrowserContext, chromium, Page } from "playwright";
import Home from '../pages/home.page'

describe('Jest runner - with page object', ()=>{
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let home: Home;
    beforeAll(async() => {
        browser = await chromium.launch({headless: true});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://playwright.dev/');
        home = new Home(page);
    })
    afterAll(async()=>{
        browser.close();
    })
    test('021 - page object - verify title.', async() => {
        const title = await home.title.textContent();
        expect(title).toBe('Playwright');
    })
    test('022 - page object - verify getting started header.', async()=>{
        await home.getStartedButton.click();
        await page.waitForTimeout(2000);
        const header = await home.header.textContent();
        expect(header).toBe('Getting started')
    })
})
