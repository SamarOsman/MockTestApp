class MealInfoPage{

    static Halal_Option(){
        return  cy.contains('Halal').prev('input')
    }

    static AddMealNotes_Input(){
        return  cy.get('#additionalMealNotes')
    }

    static NextStep_Button(){
        return  cy.get('[value="Next step"]')
    }


}
export default MealInfoPage;