/// <reference types="Cypress" />
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

    it('Website successfully loaded', function() {
            //After login verfiy any elemnt on the page
            HomePage.CurrentUser().should('be.visible')
            HomePage.FindTour_Button().should('have.text','Find Tour')
        })

    after('LogOut', function() {
        cy.logout()
    })

    
})
