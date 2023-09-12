/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'
import SelectedTourPage from '../PageObjects/SelectedTourPage'


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

    it('navigation elements work', function() {
            //Open Tours_DDL & Select any Tour
              HomePage.Tours_DDL().click()
              HomePage.Tours_select_Option(this.data?.SelectAnyTour)
              SelectedTourPage.SelectedTour_header().should('have.text',this.data?.SelectAnyTour)
    })

    after('LogOut', function() {
        cy.logout()
    })

    
})
