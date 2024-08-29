describe('Adding item to cart and updating its quantity', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Adding a product to cart', () => {
        cy.get('#CardLink-template--20356807295278__featured-collection-8609543487790').click();
        cy.get('#Quantity-template--20356807917870__main').clear().type('2');
        cy.get('#ProductSubmitButton-template--20356807917870__main').click();
        cy.contains('Item added to your cart').should('exist');
    });
});