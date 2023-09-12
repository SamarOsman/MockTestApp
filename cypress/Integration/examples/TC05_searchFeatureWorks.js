/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'
import SearchResultsPage from '../PageObjects/SearchResultsPage'
import CareersPage from '../PageObjects/CareersPage'


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

    it('Search feature works', function() {
            //search for the term “Europe” should raise at least 3 hits:
            HomePage.search_input().type('Europe{Enter}')
            SearchResultsPage.AllResultsFound().should('have.length.at.least',3)

            //Open one of the search results and verify that the user is redirected to the expected page.
            SearchResultsPage.Careers_option().click({ force: true })
            CareersPage.Careers_Element().should('be.visible')       
             })    
   

    after('LogOut', function() {
        cy.logout()
    })

    
})
