/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'

describe('Test Suite', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data=data
         cy.visit(Cypress.env('url'), {failOnStatusCode: false})
        })
    })

    beforeEach(function() {
        cy.login(this.data.user,this.data.pass)
    })

    it('language can be switched(English & German)', function() {

        //switch language to german and then back to english   
            HomePage.ChangeLanguageTo(this.data.changeLangTo).click()
            HomePage.Current_selected_Lang(this.data.changeLangTo).should('have.text',this.data.changeLangTo);
            HomePage.ChangeLanguageTo(this.data.browserLang).click()
            HomePage.Current_selected_Lang(this.data.browserLang).should('have.text',this.data.browserLang);

    })
     

    after('LogOut', function() {
        cy.logout()
    })
    
})
