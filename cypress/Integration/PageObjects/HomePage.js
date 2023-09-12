class HomePage{

    static CurrentUser(){
        return cy.get('[href$="profile-update.html"]')
    }

    static ChangeLanguageTo(changeLangTo){
        return cy.contains(changeLangTo) 
    }  

     static Current_selected_Lang(currentLang){
        return cy.get('span').contains(currentLang).get('li.active')
    }

    static Logout_Button(){
        return cy.contains('Log out')
   }

    static search_input(){
        return cy.get('#nav-search')
    }

    static FindTour_Button(){
       return cy.get('[type="submit"]')    
    }  

    static Tours_DDL(){
         return cy.get('a').contains('Tours')   
    }

    static Tours_DDL_Option(){
        return cy.get('a').contains('Tours').siblings('ul').find('li')
   }
   
   static Tours_select_Option(selectTour){
    cy.get('a').contains('Tours').siblings('ul').find('li').each(($el, index, $list) => {

        if ($el.text() === (selectTour)) {
            cy.wrap($el).click()
          }
    })   
}

}
export default HomePage;