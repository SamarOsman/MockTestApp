class SearchResultsPage{

    static AllResultsFound(){
        return cy.contains('pages found').next('.list-group').find('a.list-group-item')
    }


    static Careers_option(){
        return cy.get('a').contains('Careers')
    }

}
export default SearchResultsPage;