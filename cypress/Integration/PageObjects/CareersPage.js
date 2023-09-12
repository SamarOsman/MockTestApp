class CareersPage{

    static Careers_Element(){
        return cy.get('li').contains('Careers')
    }
    

}
export default CareersPage;