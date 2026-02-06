"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('loginViaApi', (credentials) => {
    const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
    const loginEndpoint = Cypress.env('loginEndpoint') || '/auth/login';
    cy.request({
        method: 'POST',
        url: `${apiUrl}${loginEndpoint}`,
        body: credentials,
    }).then((response) => {
        expect(response.status).to.eq(200);
        const token = response.body.token || response.body.accessToken;
        if (token) {
            window.localStorage.setItem('authToken', token);
            window.localStorage.setItem('user', JSON.stringify(response.body.user || {}));
        }
    });
});
Cypress.Commands.add('loginViaUI', (credentials) => {
    const loginUrl = Cypress.env('loginUrl') || '/login';
    cy.visit(loginUrl);
    cy.getByTestId('email-input').type(credentials.email);
    cy.getByTestId('password-input').type(credentials.password);
    cy.getByTestId('login-button').click();
    cy.url().should('not.include', loginUrl);
});
Cypress.Commands.add('registerViaApi', (credentials) => {
    const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
    const registerEndpoint = Cypress.env('registerEndpoint') || '/auth/register';
    return cy.request({
        method: 'POST',
        url: `${apiUrl}${registerEndpoint}`,
        body: credentials,
        failOnStatusCode: false,
    });
});
Cypress.Commands.add('logout', () => {
    cy.window().then((win) => {
        win.localStorage.clear();
        win.sessionStorage.clear();
    });
    cy.clearCookies();
    const logoutEndpoint = Cypress.env('logoutEndpoint');
    if (logoutEndpoint) {
        cy.request({
            method: 'POST',
            url: logoutEndpoint,
            failOnStatusCode: false,
        });
    }
});
Cypress.Commands.add('isAuthenticated', () => {
    return cy.window().then((win) => {
        const token = win.localStorage.getItem('authToken');
        return cy.wrap(!!token);
    });
});
Cypress.Commands.add('setAuthToken', (token) => {
    cy.window().then((win) => {
        win.localStorage.setItem('authToken', token);
    });
});
Cypress.Commands.add('getAuthToken', () => {
    return cy.window().then((win) => {
        return cy.wrap(win.localStorage.getItem('authToken'));
    });
});
//# sourceMappingURL=auth.commands.js.map