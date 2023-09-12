/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'
import SelectedTourPage from '../PageObjects/SelectedTourPage'
import BookYourTourPage from '../PageObjects/BookYourTourPage'
import MealInfoPage from '../PageObjects/MealInfoPage'
import PersonalDetailsPage from '../PageObjects/PersonalDetailsPage'
import ReviewPage from '../PageObjects/ReviewPage'


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


    it('Book the tour', function() {

        //open Active Tour
        HomePage.Tours_DDL().click()
        HomePage.Tours_select_Option(this.data?.ActiveTour)

        //select Tour "Hut to Hut tour" and click Book tour
        SelectedTourPage.ViewTour_Button(this.data?.TourName).click()
        SelectedTourPage.BookTour_Button().click()

        //Fill the data in the Book tour page and go next
        BookYourTourPage.Adults_Input().type(this.data?.Adult)
        BookYourTourPage.Youth_Input().type(this.data?.Youth)
        BookYourTourPage.Upgrades_options().check([this.data?.UpgradeOption])
        BookYourTourPage.SpecialMealReq().select(this.data?.SpecialMealReq)
        BookYourTourPage.NextStep_Button().click()

        //Fill the data in the Meal info. page and go next
        MealInfoPage.Halal_Option().check()
        MealInfoPage.AddMealNotes_Input().type(this.data?.MealNotes)
        MealInfoPage.NextStep_Button().click()

        //Fill the data in the PersonalDetailsPage info. page and go next
        PersonalDetailsPage.Title_Input().type(this.data?.Title)
        PersonalDetailsPage.FirstName_Input().type(this.data?.FirstName)
        PersonalDetailsPage.LasttName_Input().type(this.data?.LastName)
        PersonalDetailsPage.Email_Input().type(this.data?.Email)
        PersonalDetailsPage.Phone_Input().type(this.data?.Phone)
        PersonalDetailsPage.City_Input().type(this.data?.City)
        PersonalDetailsPage.Country_Input().type(this.data?.Country)
        PersonalDetailsPage.Zip_Input().type(this.data?.Zip)
        PersonalDetailsPage.Province_Input().type(this.data?.Province)
        PersonalDetailsPage.NextStep_Button().click()

        //Upload a file in review page and confirm booking
        ReviewPage.ChooseFile_Button().selectFile({
            contents: Cypress.Buffer.from('cypress/fixtures'),
            fileName: this.data?.FileName
          })
        ReviewPage.ConfirmBooking_Button().click()

        // confirm SuccessMSG for the form
        ReviewPage.SuccessMSG().should('have.text', 'Form has been sent')
    })  

    after('LogOut', function() {
        cy.logout()
    })

    
})
