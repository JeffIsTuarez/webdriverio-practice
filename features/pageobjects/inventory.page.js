import { $ } from '@wdio/globals'
import Page from './page.js'

class InventoryPage extends Page {

    get header() {
        return $('div.app_logo');
    }
    
    get shoppingCart() {
        return $('a.shopping_cart_link');
    }

    get itemSort() {
        return $('select.product_sort_container');
    }

    get inventoryItems() {
        return $$('div.inventory_item');
    }

    open() {
        return super.open('inventory');
    }

    async verifyPage(){
        await expect(this.header).toBeDisplayed();
        await expect(this.shoppingCart).toBeDisplayed();
        await expect(this.itemSort).toBeDisplayed();
        await expect(this.inventoryItems).toBeDisplayed();
    }

    async verifyProblemPage(){
        await this.inventoryItems.forEach(element => {
            expect(element).toHaveAttribute('src', '/static/media/sl-404.168b1cce.jpg');
        });
    }
}

export default new InventoryPage();