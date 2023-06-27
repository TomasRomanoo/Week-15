class FirstItem {

    get firstItemTitle() {
        return $('#item_4_title_link > div');
    }

    get firstItemImg() {
        return $('#item_4_img_link > img');
    }

    get firstItemPrice() {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div');
    }

    get firstAddBtn() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get firstRemoveBtn() {
        return $('#remove-sauce-labs-backpack');
    }

    async firstAddBtn() {
        await this.firstAddBtn.click();
    }

    async firstRemoveBtn() {
        await this.firstRemoveBtn.click();
    }
}

class SecondItem {

    get secondItemTitle() {
        return $('#item_0_title_link > div');
    }
    
    get secondItemImg() {
        return $('#item_0_img_link > img');
    }

    get secondItemPrice() {
        return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div');
    }

    get secondAddBtn() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get secondRemoveBtn() {
        return $('#remove-sauce-labs-bike-light');
    }

    async secondAddBtn() {
        await this.secondAddBtn.click();
    }

    async secondRemoveBtn() {
        await this.secondRemoveBtn.click();
    }
}

class ThirdItem {

    get thirdItemTitle() {
        return $('#item_1_title_link > div');
    }
    
    get thirdItemImg() {
        return $('#item_1_img_link > img');
    }

    get thirdItemPrice() {
        return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div');
    }

    get thirdAddBtn() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get thirdRemoveBtn() {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }

    async thirdAddBtn() {
        await this.thirdAddBtn.click();
    }

    async thirdRemoveBtn() {
        await this.thirdRemoveBtn.click();
    }
}

class FourtItem {

    get fourthItemTitle() {
        return $('#item_5_title_link > div');
    }
    
    get fourthItemImg() {
        return $('#item_5_img_link > img');
    }

    get fourthItemPrice() {
        return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div');
    }
    
    get fourthAddBtn() {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get fourthRemoveBtn() {
        return $('#remove-sauce-labs-fleece-jacket');
    }

    async fourthAddBtn() {
        await this.fourthAddBtn.click();
    }

    async fourthRemoveBtn() {
        await this.fourthRemoveBtn.click();
    }
}

class FifthItem {

    get fifthItemTitle() {
        return $('#item_2_title_link > div');
    }
    
    get fifthItemImg() {
        return $('#item_2_img_link > img');
    }

    get fifthItemPrice() {
        return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div');
    }
    
    get fifthAddBtn() {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get fifthRemoveBtn() {
        return $('#remove-sauce-labs-onesie');
    }

    async fifthAddBtn() {
        await this.fifthAddBtn.click();
    }

    async fifthRemoveBtn() {
        await this.fifthRemoveBtn.click();
    }
}

class SixthItem {

    get sixthItemTitle() {
        return $('#item_3_title_link > div');
    }
    
    get sixthItemImg() {
        return $('#item_3_img_link > img');
    }

    get sixthItemPrice() {
        return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div');
    }
    
    get sixthAddBtn() {
        return $('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
    }

    get sixthRemoveBtn() {
        return $('#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
    }

    async sixthAddBtn() {
        await this.sixthAddBtn.click();
    }

    async sixthRemoveBtn() {
        await this.sixthRemoveBtn.click();
    }
}

export const firstItem = new FirstItem();
export const secondItem = new SecondItem();
export const thirdItem = new ThirdItem();
export const fourtItem = new FourtItem();
export const fifthItem = new FifthItem();
export const sixthItem = new SixthItem();