/// <reference types="cypress" />
import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login";

const loginElements = new LoginElements;
const homeElements = new HomeElements;

const url = Cypress.config('baseUrl');

class LoginPage{

    acessHomepage() {
        cy.visit(url)
        cy.waitFor(3000)
        cy.get(homeElements.btnHideCookie()).click()
    }

    accessLoginPage() {
        cy.contains(homeElements.selecAccount()).click()
        cy.contains(homeElements.btnLogin()).click()
    }

    fillLoginInfo(email, password) {
        cy.get(loginElements.inputEmail).type(email)
        cy.get(loginElements.inputPassword).type(password)
    }

    submitLogin() {
        cy.get(loginElements.btnLogin).click()
    }

}export default LoginPage