describe('Click Test', () => {

    beforeEach(() => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
    });

    it('should not navigate to a specified location', () => {
        // Get the element you want to click
        cy.get('#shopify-section-sections--20356808737070__footer > footer > div.footer__content-top.page-width > div.footer-block--newsletter.scroll-trigger.animate--slide-in > ul > li:nth-child(1) > a').click();

        // Use should to assert that the URL has not changed
        cy.url().should('not.include', 'https://www.facebook.com/blissfulbeautypakistan/');
    });
});