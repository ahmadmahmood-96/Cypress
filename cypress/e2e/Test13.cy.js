describe('Website Navigation Test', () => {
    it('Should navigate through home page, category pages, and product pages', () => {
        // Visit the home page
        cy.visit('/');

        // Assert that the home page is loaded
        cy.contains('Welcome to Blissful Skincare').should('be.visible');

        // Test navigation links on the home page
        cy.get('#HeaderMenu-shop-all').click();

        // Assert that the category page is loaded
        cy.contains('Products').should('be.visible');

        // Test navigation links on the category page
        cy.get('ul.grid.product-grid li').eq(1).click();

        // Test back button behavior
        cy.go('back');

        // Assert that the category page is loaded
        cy.contains('Products').should('be.visible');

        // Test back button behavior
        cy.go('back');

        // Assert that the home page is loaded
        cy.contains('Welcome to Blissful Skincare').should('be.visible');
    });
});