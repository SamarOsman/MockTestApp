class ReviewPage{

    static ChooseFile_Button(){
        return  cy.get('#photograph')
    }

    static ConfirmBooking_Button(){
        return  cy.get('[value="Confirm Booking"]')
    }

    static SuccessMSG(){
        return  cy.get('h1').contains('Review').siblings('div').find('li')
    }

    

}
export default ReviewPage;