"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('apiRequest', (options) => {
    const { auth = true, retries = 0, ...requestOptions } = options;
    const token = auth ? window.localStorage.getItem('authToken') || Cypress.env('authToken') : null;
    const baseUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
    const makeRequest = (attempt = 0) => {
        return cy.request({
            ...requestOptions,
            url: `${baseUrl}${requestOptions.url}`,
            headers: {
                'Content-Type': 'application/json',
                ...requestOptions.headers,
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            failOnStatusCode: false,
        }).then((response) => {
            if (response.status >= 500 && attempt < retries) {
                cy.wait(1000 * (attempt + 1));
                return makeRequest(attempt + 1);
            }
            return cy.wrap(response);
        });
    };
    return makeRequest();
});
Cypress.Commands.add('apiGet', (url, options = {}) => {
    return cy.apiRequest({ method: 'GET', url, ...options });
});
Cypress.Commands.add('apiPost', (url, body, options = {}) => {
    return cy.apiRequest({ method: 'POST', url, body, ...options });
});
Cypress.Commands.add('apiPut', (url, body, options = {}) => {
    return cy.apiRequest({ method: 'PUT', url, body, ...options });
});
Cypress.Commands.add('apiPatch', (url, body, options = {}) => {
    return cy.apiRequest({ method: 'PATCH', url, body, ...options });
});
Cypress.Commands.add('apiDelete', (url, options = {}) => {
    return cy.apiRequest({ method: 'DELETE', url, ...options });
});
Cypress.Commands.add('verifyResponseSchema', (response, schema) => {
    Object.keys(schema).forEach((key) => {
        const expectedType = schema[key];
        const actualType = typeof response[key];
        expect(response).to.have.property(key);
        expect(actualType).to.equal(expectedType);
    });
    return cy.wrap(response);
});
//# sourceMappingURL=api.commands.js.map