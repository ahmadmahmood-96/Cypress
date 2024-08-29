describe('Applying Multiple Filters', () => {

    before(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('Inserting low and high pricee values for product', () => {
        cy.get(`.header__icon--search`).children().eq(0).click({
            force: true
        });
        cy.get(`#Search-In-Modal-1`).type('Oil{enter}');
        cy.get(`#Details-2-template--20356808016174__main`).click();
        cy.get(`#Filter-Price-GTE`).type(1500);
        cy.get(`#Filter-Price-LTE`).type(2800);
        cy.get('ul.grid.product-grid li').eq(1).click();
    });
});