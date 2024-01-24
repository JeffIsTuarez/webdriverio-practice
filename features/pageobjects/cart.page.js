import { $ } from '@wdio/globals'
import Page from './page.js'

class CartPage extends Page {
    get cartItems(){
        return $$('div.cart_item_label');
    }

    get checkout(){
        return $('button#checkout');
    }

    get returnToShopping(){
        return $('button#continue-shopping');
    }

    get removeFromCart(){
        return $$('div.cart_item_label button');
    }

    get firstName(){
        return $('input#first-name');
    }

    get lastName(){
        return $('input#last-name');
    }

    get postalCode(){
        return $('input#postal-code');
    }

    get continue(){
        return $('input#continue');
    }

    get finish(){
        return $('button#finish');
    }

    get ponyExpressConfirmationLogo(){
        return $('img.pony_express');
    }

    get confirmationHeader(){
        return $('h2.complete-header')
    }

    get confirmationText(){
        return $('div.complete-text')
    }

    get backHome(){
        return $('#back-to-products');
    }

    async expressCheckout(){
        await this.checkout.click();
        // fills out the first/last name and postal coade
        await this.firstName.setValue('Test');
        await this.lastName.setValue('Test');
        await this.postalCode.setValue('12345');

        // back to continuing the flow
        await this.continue.click();
        await this.finish.click();
    }

    async verifyOrderConfirmation() {
        await expect(this.ponyExpressConfirmationLogo).toBeDisplayed();
        await expect(this.confirmationHeader).toBeDisplayed();
        await expect(this.confirmationHeader).toHaveText('Thank you for your order!');
        await expect(this.confirmationText).toBeDisplayed();
        await expect(this.confirmationText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(this.backHome).toBeDisplayed();
    }
}
export default new CartPage();