describe('Mocking data from json file and filling contact form', () => {

    let userData;
    before('Fetching data from json file', () => {
        // Visit the BLissful Beauty homepage
        cy.viewport('macbook-15');
        cy.visit('/');
        cy.fixture('test3').then((data) => {
            userData = data
        });
        // Accessing the Footer children and then opening Contact us Page
        cy.contains('Contact Us').click({
            force: true
        });
    });

    it('Filling the Contact us Page Form', () => {
        cy.get(`#ContactForm-name`).type(userData.name)
        cy.get(`#ContactForm-email`).type(userData.email)
        cy.get(`#ContactForm-phone`).type(userData.number)
        cy.get(`#ContactForm-body`).type(userData.body)
    });
});