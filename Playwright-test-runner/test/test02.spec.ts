import {expect, test} from '@playwright/test'
import Home from '../pages/home.page';

test.describe('using page objects', async() => {
    let home: Home;
    test.beforeEach(async({page})=> {
        await page.goto('https://playwright.dev/');
        home = new Home(page);
    })
    test('021 - verify title.', async ({page}) => {
        const navTitle = await home.getTitle();
        await expect(navTitle).toBe('Playwright');
    })

    test('022 - verify title.', async ({page}) => {
        const navTitle = home.title;
        await expect(navTitle).toHaveText('Playwright');
    })

    test('023 - verify getting started.', async ({page}) => {
        await home.getStartedButton.click();
        await page.waitForTimeout(2000);
        const header = await home.header.textContent();
        expect(header).toBe('Getting started')
    })
   
})