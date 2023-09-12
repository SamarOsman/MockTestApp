class SelectedTourPage{

    static SelectedTour_header(){
        return  cy.get('.category')
    }

    static ViewTour_Button(TourName){
        return cy.get('div').contains(TourName).children('div').contains('View Tour')
    }

    static StartCity_value(){
        return  cy.get('div').contains('start city').siblings()
    }

    static Duration_value(){
        return  cy.get('div').contains('duration').siblings()
    }

    static TourOperator_value(){
        return  cy.get('div').contains('tour operator').siblings()
    }

    static BookTour_Button(){
        return  cy.get('[value="Book Tour"]')
    }

}
export default SelectedTourPage;