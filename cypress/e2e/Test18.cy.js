describe('Hover Test to Check Image Change', () => {

    beforeEach(() => {
        // Visit the website or perform any setup steps
        cy.visit('/');
    });

    it('Should trigger a hover event and check for image change', () => {
        // Assuming there's a card element with the class 'card-wrapper'
        cy.get('.card-wrapper.product-card-wrapper')
            .should('exist') // Ensure the card element exists
            .should('not.have.class', 'hovered'); // Ensure the card element does not have a specific class initially

        // Trigger a hover event on the card element using 'mouseenter'
        cy.get('.card-wrapper.product-card-wrapper').eq(1).trigger('mouseenter');

        // Assert that the card element now has a specific class after the hover event
        cy.get('.card-wrapper.product-card-wrapper').eq(1).should('have.class', 'underline-links-hover');
    });
});