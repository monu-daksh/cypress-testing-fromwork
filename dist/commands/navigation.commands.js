"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('navigateTo', (path, options = {}) => {
    cy.visit(path, options);
    cy.waitForPageLoad();
});
Cypress.Commands.add('goBack', () => {
    cy.go('back');
    cy.waitForPageLoad();
});
Cypress.Commands.add('goForward', () => {
    cy.go('forward');
    cy.waitForPageLoad();
});
Cypress.Commands.add('reloadPage', (forceReload = false) => {
    cy.reload(forceReload);
    cy.waitForPageLoad();
});
Cypress.Commands.add('verifyUrl', (pattern) => {
    if (typeof pattern === 'string') {
        cy.url().should('include', pattern);
    }
    else {
        cy.url().should('match', pattern);
    }
});
Cypress.Commands.add('waitForPageLoad', () => {
    cy.get('body').should('be.visible');
    cy.get('[data-testid="loading"]', { timeout: 1000 }).should('not.exist');
    cy.get('.loading', { timeout: 1000 }).should('not.exist');
    cy.get('.spinner', { timeout: 1000 }).should('not.exist');
    cy.document().should((doc) => {
        expect(doc.readyState).to.be.oneOf(['interactive', 'complete']);
    });
});
//# sourceMappingURL=navigation.commands.js.map