import {expect, test} from '@playwright/test'

test.describe('', async() => {
    test('01 - verify title.', async ({page}) => {
        await page.goto('https://playwright.dev/');
        const title = await page.title();
        const navTitle = page.locator('.navbar__inner .navbar__title');
        await expect(navTitle).toHaveText('Playwright');
        expect(title).toBe("Fast and reliable end-to-end testing for modern web apps | Playwright");
    })
})