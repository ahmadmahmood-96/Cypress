describe('Testing Homepage of the website', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Checks that Blissful Beauty HomePage is opened', () => {
        // Check if the homepage is loaded
        cy.title().then(title => {
            assert.include(title, 'Blissful');
        });
    });
});