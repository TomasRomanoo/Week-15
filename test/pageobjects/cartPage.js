class CardBtns{
    
    get backBtn(){
        return $('#continue-shopping');
    }

    get checkoutBtn(){
        return $('#checkout')
    }

    async backClick(){
        await this.backBtn.click();
    }

    async checkoutClick(){
        await this.checkoutBtn.click();
    }
}
export const cardBtn = new CardBtns(); 