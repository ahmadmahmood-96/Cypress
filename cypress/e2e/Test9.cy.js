describe('Cookies and Local Storage Tests', () => {
    beforeEach(() => {
        // Visit the website before each test
        cy.visit('/');
    });

    it('Get All Cookies', () => {
        // Get all cookies
        cy.getCookies().should('have.length.gt', 0).then(cookies => {
            // Log all cookies
            cy.log('All Cookies:', cookies);
        });
    });

    it('Clear Cookies', () => {
        // Clear all cookies
        cy.clearCookies();

        // Verify cookies are cleared
        cy.getCookies().should('have.length', 0);
    });

    it('Get All Items in Local Storage', () => {
        // Access local storage and log all items
        cy.window().its('localStorage').then(localStorage => {
            cy.log('Local Storage Items:', localStorage);
        });
    });
});