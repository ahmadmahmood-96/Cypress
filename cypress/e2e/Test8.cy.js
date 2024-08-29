describe('Responsive Design Tests', () => {
    beforeEach(() => {
        // Visit the website before each test
        cy.visit('/');
    });

    it('Displays Correctly on Desktop', () => {
        // Set the viewport to a desktop size
        cy.viewport(1200, 800);
        cy.get('#MainContent').should('have.css', 'font-size', '16px');
    });

    it('Displays Correctly on Tablet', () => {
        // Set the viewport to a tablet size
        cy.viewport('ipad-2');
        cy.get('#MainContent').should('have.css', 'font-size', '16px');
    });

    it('Displays Correctly on Mobile', () => {
        // Set the viewport to a mobile size
        cy.viewport('iphone-6');
        cy.get('#MainContent').should('have.css', 'font-size', '15px');
    });
});