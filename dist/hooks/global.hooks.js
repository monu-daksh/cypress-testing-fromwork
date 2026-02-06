"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSystemHealth = exports.cleanupDatabase = exports.initializeDatabase = exports.globalAfter = exports.globalBefore = void 0;
const globalBefore = () => {
    before(() => {
        cy.log(' Starting test suite');
        Cypress.config('defaultCommandTimeout', 10000);
        cy.log(`Environment: ${Cypress.env('environment') || 'test'}`);
        cy.log(`Base URL: ${Cypress.config('baseUrl')}`);
        cy.log(`Viewport: ${Cypress.config('viewportWidth')}x${Cypress.config('viewportHeight')}`);
    });
};
exports.globalBefore = globalBefore;
const globalAfter = () => {
    after(() => {
        cy.log(' Test suite completed');
        cy.clearCookies();
        cy.clearLocalStorage();
    });
};
exports.globalAfter = globalAfter;
const initializeDatabase = () => {
    before(() => {
        cy.task('db:seed', null, { log: false });
    });
};
exports.initializeDatabase = initializeDatabase;
const cleanupDatabase = () => {
    after(() => {
        cy.task('db:cleanup', null, { log: false });
    });
};
exports.cleanupDatabase = cleanupDatabase;
const checkSystemHealth = () => {
    before(() => {
        const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
        cy.request({
            url: `${apiUrl}/health`,
            failOnStatusCode: false,
        }).then((response) => {
            if (response.status === 200) {
                cy.log(' System health check passed');
            }
            else {
                cy.log(' System health check failed');
            }
        });
    });
};
exports.checkSystemHealth = checkSystemHealth;
exports.default = {
    globalBefore: exports.globalBefore,
    globalAfter: exports.globalAfter,
    initializeDatabase: exports.initializeDatabase,
    cleanupDatabase: exports.cleanupDatabase,
    checkSystemHealth: exports.checkSystemHealth,
};
//# sourceMappingURL=global.hooks.js.map