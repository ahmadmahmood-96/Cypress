describe('Adding products to cart and then removing them from the cart', () => {

    before(() => {
        // Visit the Blissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Removing products from cart', () => {
        cy.get('#CardLink-template--20356807295278__featured-collection-8588075794734').click();
        cy.get('#ProductSubmitButton-template--20356807917870__main').click();
        cy.contains('Item added to your cart').should('exist');
        cy.get('#cart-notification-button').click()
        cy.get('#Remove-1').click()
    });
});