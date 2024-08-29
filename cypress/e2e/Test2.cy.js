describe('Checking Navbar links', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Opens Shop By Category Navbar ', () => {
        // Check if the navbar option is opening
        cy.get('#Details-HeaderMenu-3').click();
        // Opening the navbar option
        cy.get('#HeaderMenu-shop-by-category-serums').click();
        // Checking if the Serums option is clicked
        cy.contains('Serums').should('exist');
    });
});