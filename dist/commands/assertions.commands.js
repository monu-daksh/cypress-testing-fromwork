"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('shouldContainText', { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).should(($el) => {
        const elementText = $el.text().toLowerCase();
        expect(elementText).to.include(text.toLowerCase());
    });
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldHaveExactText', { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).should('have.text', text);
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldBeEnabled', { prevSubject: true }, (subject) => {
    cy.wrap(subject).should('not.be.disabled');
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldBeDisabled', { prevSubject: true }, (subject) => {
    cy.wrap(subject).should('be.disabled');
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldHaveClass', { prevSubject: true }, (subject, className) => {
    cy.wrap(subject).should('have.class', className);
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldHaveCount', { prevSubject: true }, (subject, count) => {
    cy.wrap(subject).should('have.length', count);
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldHaveStatus', { prevSubject: true }, (subject, status) => {
    expect(subject.status).to.eq(status);
    return cy.wrap(subject);
});
Cypress.Commands.add('shouldHaveProperty', { prevSubject: true }, (subject, property) => {
    expect(subject).to.have.property(property);
    return cy.wrap(subject);
});
//# sourceMappingURL=assertions.commands.js.map