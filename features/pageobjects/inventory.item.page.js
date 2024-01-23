import { $ } from '@wdio/globals'
import Page from './page.js'

class InventoryItemPage extends Page {

    get addToCart() {
        return $('button=Add To Cart');
    }

    get removeFromCart() {
        return $('button=Remove');
    }
    
    get inventoryTitle() {
        return $('.inventory_details_name');
    }

    get inventoryDescription() {
        return $('.inventory_details_desc');
    }

    get inventoryPrice() {
        return $('.inventory_details_price');
    }

    get inventoryImage() {
        return $('.inventory_details_img');
    }

    get backButton () {
        return $('#back-to-products');
    }

    open() {
        return super.open('inventory');
    }

    async verifyPage(){
        await expect(this.addToCart).toBeDisplayed();
        await expect(this.inventoryTitle).toBeDisplayed();
        await expect(this.inventoryDescription).toBeDisplayed();
        await expect(this.inventoryPrice).toBeDisplayed();
        await expect(this.inventoryImage).toBeDisplayed();
        await expect(this.backButton).toBeDisplayed();
    }

}

export default new InventoryItemPage();