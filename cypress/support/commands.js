// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('login', (user,pass) => {
    cy.get("body").then($body => {
    if($body.find('#username').is(':visible')) {
    cy.get('#username').type(user)
    cy.get('#password').type(pass)   
    cy.contains('Login').click() 
    }
  })
})


Cypress.Commands.add('logout', () => {
    cy.get("body").then($body => {
    if($body.find('[href$="Logout=true"]').is(':visible')) { 
        cy.contains('Log out').click()
    }
})
})



Cypress.Commands.add('selectAnyTour', (selectTour) => { 
    cy.get('a').contains('Tours').siblings('ul').find('li').each(($el, index, $list) => {

        if ($el.text() === (selectTour)) {
            cy.wrap($el).click()
          }
    })  
 }) 
 



//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })