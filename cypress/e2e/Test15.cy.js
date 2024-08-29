describe('HTTP Requests', () => {

    let userData;
    before(() => {
        cy.fixture('test15').then((data) => {
            userData = data
        });
    });

    it('GET Method - Wrong URL', () => {
        cy.request({
            method: 'GET',
            url: '/p',
            failOnStatusCode: false, // allows the test to continue even if status code is not 404
        }).then((response) => {
            cy.log(response.status);
            expect(response.status).to.equal(404);
        });
    });

    it('GET Method - Right URL', () => {
        cy.request({
            method: 'GET',
            url: '/',
            failOnStatusCode: false,
        }).then((response) => {
            cy.log(response.status);
            expect(response.status).to.equal(200);
        });
    });

    it('POST Method', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: userData.title,
                body: userData.body,
                userId: userData.userId
            }
        }).then((response) => {
            cy.log(response.status);
            expect(response.status).to.equal(201);
        });
    });

    it('PUT Method', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: userData.title,
                body: userData.updatedBody,
                userId: userData.userId,
                id: userData.id
            }
        }).then((response) => {
            cy.log(response.status);
            expect(response.status).to.equal(200);
        });
    });

    it('DELETE Method', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        }).then((response) => {
            cy.log(response.status);
            expect(response.status).to.equal(200);
        });
    });
});