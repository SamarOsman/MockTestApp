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


    it('verfiy Login', function() {

          //login
          LoginPage.UserName_Input().type(this.data.user)
          LoginPage.Password_Input().type(this.data.user)
          LoginPage.Login_Button().click()
          
          //After login current user should be visible
          HomePage.CurrentUser().should('be.visible')    
        })

    after('LogOut', function() {
        HomePage.Logout_Button().click() 
    })

    
})
