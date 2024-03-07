/// <reference types="Cypress" />
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage;

Given(/^eu acesse a pagina home da aplicação$/, () => {
	loginPage.accessLoginPage()
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email, password) => {
	console.log(args1,args2);
	loginPage.accessLoginPage()

    loginPage.fillLoginInfo(email, password)


});

When(/^clicar no botão entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	console.log(mesage);
	
});
