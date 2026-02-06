"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../commands");
require("../hooks");
before(() => {
    cy.log(' Cypress Testing Framework Initialized');
    if (!Cypress.config('viewportWidth')) {
        cy.viewport(1280, 720);
    }
});
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Hydration')) {
        return false;
    }
    if (err.message.includes('ResizeObserver')) {
        return false;
    }
    cy.log('Uncaught exception:', err.message);
    return !Cypress.env('ignoreUncaughtExceptions');
});
Cypress.on('test:before:run', (test) => {
    cy.log(`Starting: ${test.title}`);
});
Cypress.on('test:after:run', (test) => {
    if (test.state === 'passed') {
        cy.log(` Passed: ${test.title}`);
    }
    else if (test.state === 'failed') {
        cy.log(` Failed: ${test.title}`);
    }
});
//# sourceMappingURL=index.js.map