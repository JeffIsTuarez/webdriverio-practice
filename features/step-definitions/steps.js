import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

const pages = {
    login: LoginPage,
    inventory: InventoryPage,
    cart: CartPage
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
});

Then(/^I should see an image problem on the (\w+) page$/, async(page) => {
    await pages[page].verifyProblemPage();
});

When('I order one item from the inventory', async() => {
    await InventoryPage.orderOneInventoryToCart();
});

When('I order all items from the inventory', async() => {
    await InventoryPage.orderAllInventoriesToCart();
});

When('I click on the cart', async() => {
    // this functionality for now, locator should be moved on to the Page superclass
    await InventoryPage.shoppingCart.click();
});

When('I checkout from the cart page', async() => {
    await CartPage.expressCheckout();
});

Then('I should have ordered an item', async() => {
    await CartPage.verifyOrderConfirmation();
});


