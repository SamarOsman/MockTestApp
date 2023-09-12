class BookYourTourPage{

    static Adults_Input(){
        return  cy.get('#adults')
    }

    static Youth_Input(){
        return  cy.get('#youth')
    }

    static NextStep_Button(){
        return  cy.get('[value="Next step"]')
    }

    static Upgrades_options(){
          return  cy.get('input[type="checkbox"]')
    }

    static SpecialMealReq(){
        return  cy.get('#meal')
  }

  

}
export default BookYourTourPage;