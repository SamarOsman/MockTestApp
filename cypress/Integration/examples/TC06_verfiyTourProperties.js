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

    it('Verify the tour "ACTIVE" ', function() {
        //open Active Tour
        HomePage.Tours_DDL().click()
        HomePage.Tours_select_Option(this.data?.ActiveTour)

        //select Tour "Hut to Hut tour"
        SelectedTourPage.ViewTour_Button(this.data?.TourName).click()

        //verfiy tour properties: 
        //a.Start city = Zurich, Switzerland 
        SelectedTourPage.StartCity_value().should('have.text',this.data?.StartCity)

        //b.Duration = 7 Days
        SelectedTourPage.Duration_value().should('have.text',this.data?.Duration)
        
        //c.Tour operator = Magnolia Travels
        SelectedTourPage.TourOperator_value().should('have.text',this.data?.TourOperator)
     
    })

    after('LogOut', function() {
        cy.logout()
    })

    
})
