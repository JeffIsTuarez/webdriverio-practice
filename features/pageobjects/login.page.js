import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input#user-name');
    }

    get inputPassword () {
        return $('input#password');
    }

    get btnSubmit () {
        return $('input#login-button');
    }

    get errorModal () {
        return $('div.error')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open();
    }

    async verifyPage(){
        await expect(this.inputUsername).toBeDisplayed();
        await expect(this.inputPassword).toBeDisplayed();
        await expect(this.btnSubmit).toBeDisplayed();
    }

    async verifyErrorOccured(){
        await expect(this.errorModal).toBeDisplayed();
        await expect(this.errorModal).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }

    
}

export default new LoginPage();
