describe('Searching multiple products and adding them to cart and then checking out', () => {

    let userData;
    before(() => {
        // Visit the Blissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
        cy.fixture('test6').then((data) => {
            userData = data
        });
    });

    it('Adding products to cart', () => {
        cy.get('#CardLink-template--20356807295278__featured-collection-8588075794734').click();
        cy.get('#ProductSubmitButton-template--20356807917870__main').click();
        cy.go('back');
        cy.wait(3000);
        cy.get('#CardLink-template--20356807295278__featured-collection-8609543487790').click();
        cy.get('#Quantity-template--20356807917870__main').clear().type(userData.quantity);
        cy.get('#ProductSubmitButton-template--20356807917870__main').click();
        cy.contains('Item added to your cart').should('exist');

        // Click on a button with text 'Check out'
        cy.contains('Check out').click();

        cy.get("#email").type(userData.email);
        cy.get("#TextField0").type(userData.firstName);
        cy.get("#TextField1").type(userData.lastName);
        cy.get("#TextField3").type(userData.address);
        cy.get("#TextField4").type(userData.city);
        cy.get("#TextField5").type(userData.postalCode);
        cy.get("#TextField6").type(userData.number);
        // Check and assert that the checkbox is checked
        cy.get('input[name="save_shipping_information"]').check().should('be.checked');

    });
});