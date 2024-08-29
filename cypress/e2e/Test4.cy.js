describe('Searching a product through the search bar', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Searching a product', () => {
        cy.get(`.header__icon--search`).children().eq(0).click({
            force: true
        });
        cy.get(`#Search-In-Modal-1`).type('Oil{enter}');
    });
});