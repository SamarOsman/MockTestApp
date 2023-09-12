class LoginPage{

    static UserName_Input(){
        return cy.get('#username')
    }  

    static Password_Input(){
        return cy.get('#password')       
    }

    static Login_Button(){
        return cy.contains('Login')
   }

}
export default LoginPage;