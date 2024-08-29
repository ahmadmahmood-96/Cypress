describe('Checking if it is navigating to correct URL', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Checking navigation', () => {
        // Check if the navbar option is opening
        cy.get('#Details-HeaderMenu-3').click();
        // Opening the navbar option
        cy.get('#HeaderMenu-shop-by-skin-concern').click();
        // Checking if the Serums option is clicked
        cy.get('#HeaderMenu-shop-by-skin-concern-dehydration-dryness').click();
        // Click on the link to open the third item's product page
        cy.get('#product-grid li').eq(2).click();

        // Assert that the product page has opened
        cy.url().should('include', '/products/multi-peptide-centella-serum');
    });
});