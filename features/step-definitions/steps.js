import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

const pages = {
    login: LoginPage,
    inventory: InventoryPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should be on the (\w+) page$/, async(page) => {
    await pages[page].verifyPage();
});
Then('I should recieve an error', async() => {
    await LoginPage.verifyErrorOccured();
})

Then(/^I should see an image problem on the (\w+) page$/, async(page) => {
    await pages[page].verifyProblemPage();
})
