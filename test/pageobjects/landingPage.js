class LandingPage{

    get usernameInput(){
        return $('#user-name');
    }

    get passwordInput(){
        return$('#password');
    }

    get loginBtn(){
        return $('#login-button');
    }

    async loginBtnClick(){
        await this.loginBtn.click();
    }

    async loginFlow(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
}
export default new LandingPage();