/// <reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../PageObjects/HomePage'
import SelectedTourPage from '../PageObjects/SelectedTourPage'
import SearchResultsPage from '../PageObjects/SearchResultsPage'
import CareersPage from '../PageObjects/CareersPage'
import BookYourTourPage from '../PageObjects/BookYourTourPage'
import MealInfoPage from '../PageObjects/MealInfoPage'
import PersonalDetailsPage from '../PageObjects/PersonalDetailsPage'
import ReviewPage from '../PageObjects/ReviewPage'



describe('Test Suite', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data=data

         cy.visit(Cypress.env('url'), {failOnStatusCode: false})
        //cy.visit({url: data.url, failOnStatusCode: false})
        })
          
    })

    beforeEach(function() {

        cy.fixture('example').then(function(data) {
            this.data=data})
        
          })


    it('verfiy Login', function() {      
          LoginPage.UserName_Input().type(this.data.user)
          LoginPage.Password_Input().type(this.data.user)
          LoginPage.Login_Button().click()    
    })
        

    it('Website successfully loaded', function() {
        HomePage.FindTour_Button().should('have.text','Find Tour')
    })

    it('navigation elements work', function() {
        HomePage.Tours_DDL().click()
        HomePage.Tours_select_Option(this.data?.SelectAnyTour)
        SelectedTourPage.SelectedTour_header().should('have.text',this.data?.SelectAnyTour)
    })

    it('language can be switched(English & German)', function() {

        HomePage.ChangeLanguageTo(this.data.changeLangTo).click()
        HomePage.Current_selected_Lang(this.data.changeLangTo).should('have.text',this.data.changeLangTo);
        HomePage.ChangeLanguageTo(this.data.browserLang).click()
        HomePage.Current_selected_Lang(this.data.browserLang).should('have.text',this.data.browserLang);    
    })


    it('Search feature works', function() {
        HomePage.search_input().type('Europe{Enter}')
        SearchResultsPage.AllResultsFound().should('have.length.at.least',3)//hna mtl3 4  
        SearchResultsPage.Careers_option().click({ force: true })
        CareersPage.Careers_Element().should('be.visible')       
     })
    
     it('Verify the tour "ACTIVE" ', function() {

        HomePage.Tours_DDL().click()
        //cy.selectAnyTour(selectTour)// to select tour from command
        HomePage.Tours_select_Option(this.data?.ActiveTour)       
        SelectedTourPage.ViewTour_Button(this.data?.TourName).click()
        SelectedTourPage.StartCity_value().should('have.text',this.data?.StartCity)
        SelectedTourPage.Duration_value().should('have.text',this.data?.Duration)
        SelectedTourPage.TourOperator_value().should('have.text',this.data?.TourOperator)
     
    })

    it('Book the tour', function() {
        //Cypress.config('defaultCommandTimeout', 7000)
       // const FileName = 'test.png'
        
        SelectedTourPage.BookTour_Button().click()

        BookYourTourPage.Adults_Input().type(this.data?.Adult)
        BookYourTourPage.Youth_Input().type(this.data?.Youth)
        BookYourTourPage.Upgrades_options().check([this.data?.UpgradeOption])
        BookYourTourPage.SpecialMealReq().select(this.data?.SpecialMealReq)
        BookYourTourPage.NextStep_Button().click()

        MealInfoPage.Halal_Option().check()
        MealInfoPage.AddMealNotes_Input().type('NA')
        MealInfoPage.NextStep_Button().click()

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

        ReviewPage.ChooseFile_Button().selectFile({
            contents: Cypress.Buffer.from('cypress/fixtures'),
            fileName: this.data?.FileName
          })

        ReviewPage.ConfirmBooking_Button().click()
        ReviewPage.SuccessMSG().should('have.text', 'Form has been sent')
    })  

    after('LogOut', function() {
        HomePage.Logout_Button().click()
        cy.wait(2000)
        //cy.clearCookies()   
    })
  
})