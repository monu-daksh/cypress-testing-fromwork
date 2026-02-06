"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index");
beforeEach(() => {
    const preserveAuth = Cypress.env('preserveAuth');
    if (preserveAuth) {
        cy.window().then((win) => {
            const token = win.localStorage.getItem('authToken');
            if (token) {
                Cypress.env('authToken', token);
            }
        });
    }
    else {
        cy.clearCookies();
        cy.clearLocalStorage();
    }
});
afterEach(function () {
    const test = this.currentTest;
    if (test?.state === 'failed') {
        const screenshotName = `${test.titlePath().join(' - ')}-FAILED`;
        cy.screenshot(screenshotName);
    }
});
//# sourceMappingURL=e2e.js.map