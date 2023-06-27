class NavBar {

    get menuBtn() {
        return $('#react-burger-menu-btn');
    }

    get closeMenuBtn() {
        return $('#react-burger-cross-btn');
    }

    get allItemBtn() {
        return $('#inventory_sidebar_link');
    }

    get logOutBtn() {
        return $('#logout_sidebar_link');
    }

    get cartBtn() {
        return $('#shopping_cart_container > a');
    }

    async openMenuClick() {
        await this.menuBtn.click();
    }

    async closeMenuClick() {
        await this.closeMenuBtn.click();
    }
    
    async showItemsClick() {
        await this.allItemBtn.click();
    }

    async logOutClick() {
        await this.logOutBtn.click();
    }

    async openCartClick() {
        await this.cartBtn.click();
    }
}
export const navBarBtns = new NavBar();