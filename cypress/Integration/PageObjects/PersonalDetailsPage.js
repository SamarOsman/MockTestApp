class PersonalDetailsPage{

    static Title_Input(){
        return  cy.get('#title')
    }

    static FirstName_Input(){
        return  cy.get('#firstName')
    }

    static LasttName_Input(){
        return  cy.get('#lastName')
    }

    static Email_Input(){
        return  cy.get('#email')
    }

    static Phone_Input(){
        return  cy.get('#phone')
    }

    static City_Input(){
        return  cy.get('#city')
    }

    static Zip_Input(){
        return  cy.get('#postalOrZip')
    }

    static Country_Input(){
        return  cy.get('#country')
    }

    static Province_Input(){
        return  cy.get('#province')
    }

    static NextStep_Button(){
        return  cy.get('[value="Next step"]')
    }

}
export default PersonalDetailsPage;