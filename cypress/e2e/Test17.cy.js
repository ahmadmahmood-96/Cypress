describe('Cypress Studio test', () => {

    it('Writing a sample test in cypress studio', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://shopblissfulbeauty.com/');
        cy.get('#HeaderMenu-shop-by-category').click();
        cy.get('#HeaderMenu-shop-by-category-moisturisers').click();
        cy.get('#CardLink-template--20356807131438__main-collection-product-grid-8588076581166').click();
        cy.get('[name="plus"]').click();
        cy.get('#ProductSubmitButton-template--20356807917870__main').click();
        cy.get('#cart-notification-button').click();
        cy.get('#checkout').click();
        cy.get('#email').clear();
        cy.get('#email').type('0333-1585816');
        cy.get('.pxSEU > :nth-child(1)').click();
        cy.get('#TextField0').clear();
        cy.get('#TextField0').type('Ahmad');
        cy.get('#TextField1').clear('M');
        cy.get('#TextField1').type('Mahmood');
        cy.get('#TextField3').clear('House No. 100, Street No. 100, Sector I-8/4');
        cy.get('#TextField3').type('House No. 100, Street No. 100, Sector I-8/4');
        cy.get('#TextField4').clear('Islamabad');
        cy.get('#TextField4').type('Islamabad');
        cy.get('#TextField5').clear('44000');
        cy.get('#TextField5').type('44000');
        cy.get('#TextField6').clear('0');
        cy.get('#TextField6').type('0333 1585816');
        cy.get(':nth-child(8) > ._1fragemfe > ._1mmswk9h').click();
        cy.get('#save_shipping_information').check();
        cy.get(':nth-child(1) > ._1fragemfe > ._1mmswk9h').click();
        cy.get('#sms_marketing_opt_in').check();
        cy.get(':nth-child(2) > .yL8c2 > .hEGyz > .f5aCe > div').click();
        cy.get('#basic-paymentOnDelivery').check();
        /* ==== End Cypress Studio ==== */
    });
});