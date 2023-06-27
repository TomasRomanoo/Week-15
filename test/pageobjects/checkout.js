class FormCheckout{

    get firstName() {
        return $('#first-name');
    }

    get lastName() {
        return $('#last-name');
    }

    get zipCode() {
        return $('#postal-code');
    }

    get cancelBtn() {
        return $('#cancel')
    }

    get continueBtn() {
        return $('#continue')
    }

    async fillForm(firstName, lastName, zipCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.zipCode.setValue(zipCode);
    }

    async cancelBtnClick() {
        await this.cancelBtn.click();
    }
    
    async continueBtnClick() {
        await this.continueBtn.click();
    }
}

class PaymentInfo {
    
    get paymentInformation() {
        return $('#checkout_summary_container > div > div.summary_info > div:nth-child(2)')
    }

    get totalPrice() {
        return $('#checkout_summary_container > div > div.summary_info > div.summary_info_label.summary_total_label')
    }

    get cancelSecondBtn() {
        return $('#cancel')
    }

    get finishBtn() {
        return $('#finish')
    }

    get succesMessage(){
        return $('#checkout_complete_container > h2')
    }
    
    get backHomeBtn() {
        return $('#back-to-products')
    }

    async cancelSecondBtnClick() {
        await this.cancelSecondBtn.click();
    }

    async finishBtnClick() {
        await this.finishBtn.click();
    }

    async backHomeBtnClick(){
        await this.backHomeBtn.click();
    }
}

export const formCheckout = new FormCheckout();
export const paymentInfo = new PaymentInfo();