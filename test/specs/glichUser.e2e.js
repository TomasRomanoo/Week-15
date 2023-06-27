import landingPage from "../pageobjects/landingPage";
import { cardBtn } from "../pageobjects/cartPage";
import {formCheckout,paymentInfo} from "../pageobjects/checkout";
import {firstItem, secondItem, thirdItem, fourtItem, fifthItem, sixthItem} from "../pageobjects/inventoryPage";
import navBarBtns from "../pageobjects/navBar";

describe('Happy path to buy a product as glitched user', () => {
    beforeAll('Browser openning', () => {
        browser.url('https://www.saucedemo.com');
    })

    it('Login process of standard user'), async () => {
        await expect(landingPage.usernameInput).toBeDisplayed();
        await expect(landingPage.passwordInput).toBeDisplayed();
        await expect(landingPage.loginBtn).toBeDisplayed();

        await landingPage.loginFlow('performance_glitch_user', 'secret_sauce');
        await landingPage.loginBtnClick();
    }

    it('Check if products are displayed'), async () => {
        await expect(firstItem.firstItemTitle).toBeDisplayed();
        await expect(firstItem.firstItemImg).toBeDisplayed();
        await expect(firstItem.firstItemPrice).toBeDisplayed();
        await expect(firstItem.firstAddBtn).toBeDisplayed();
    }

    it('Check if products can be purchased'), async () => {
        await expect (firstItem.firstAddBtn).toBeDisplayed();
        await firstItem.firstAddBtn();

        await expect (navBarBtns.cartBtn).toBeDisplayed();
        await navBarBtns.openCartClick();

        await expect (cardBtn.checkoutBtn).toBeDisplayed();
        await cardBtn.checkoutClick();

        await expect (formCheckout.firstName).toBeDisplayed();
        await expect (formCheckout.lastName).toBeDisplayed();
        await expect (formCheckout.zipCode).toBeDisplayed();
        await expect (formCheckout.continueBtn).toBeDisplayed();
        await formCheckout.fillForm('tomas', 'romano', '2000');
        await formCheckout.continueBtnClick();

        await expect (paymentInfo.paymentInformation).toBeDisplayed();
        await expect (paymentInfo.totalPrice).toBeDisplayed();
        await expect (paymentInfo.finishBtn).toBeDisplayed();
        await paymentInfo.finishBtnClick();

        await expect (paymentInfo.succesMessage).toBeDisplayed();
        await expect (paymentInfo.backHomeBtn).toBeDisplayed();
        await paymentInfo.backHomeBtnClick();
    }

    it('Check LogOut'), async () => {
        await expect (navBarBtns.menuBtn).toBeDisplayed();
        await navBarBtns.openMenuClick();
        await expect (navBarBtns.logOutBtn).toBeDisplayed();
        await navBarBtns.logOutClick();
    }
})