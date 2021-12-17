import { Page } from "@playwright/test";

export default class Home{
    constructor(private page: Page){}

    async getTitle(){
        return await this.page.locator('.navbar__inner .navbar__title').textContent();
    }

    get title(){
        return this.page.locator('.navbar__inner .navbar__title')
    }

    get getStartedButton(){
        return this.page.locator('text=GET STARTED');
    }

    get header(){
        return this.page.locator('h1')
    }

    async clickOnGetStartedButton(){
        await this.page.click('text=GET STARTED')
    }
}