describe('Applying Filters on a product', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Applying Filters', () => {
        // Check if the navbar option is opening
        cy.get('#HeaderMenu-shop-all').click();
        cy.get('#SortBy').select('Price, high to low');
        cy.get('select[name="sort_by"]').should('have.value', 'price-descending');
    });
});