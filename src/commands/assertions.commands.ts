/// <reference types="cypress" />

/**
 * Custom assertion commands
 * 
 * Future additions:
 * - Visual regression assertions
 * - Accessibility assertions
 * - Performance assertions
 * - Data attribute assertions
 */

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Assert element contains text (case-insensitive)
       * @param text - Expected text
       */
      shouldContainText(text: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert element has exact text
       * @param text - Expected exact text
       */
      shouldHaveExactText(text: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert element is enabled
       */
      shouldBeEnabled(): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert element is disabled
       */
      shouldBeDisabled(): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert element has CSS class
       * @param className - CSS class name
       */
      shouldHaveClass(className: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert element count
       * @param count - Expected count
       */
      shouldHaveCount(count: number): Chainable<JQuery<HTMLElement>>;

      /**
       * Assert API response has status
       * @param status - Expected status code
       */
      shouldHaveStatus(status: number): Chainable<Response<any>>;

      /**
       * Assert response body contains property
       * @param property - Property name
       */
      shouldHaveProperty(property: string): Chainable<any>;
    }
  }
}

// Text assertions
Cypress.Commands.add(
  'shouldContainText',
  { prevSubject: true },
  (subject, text: string) => {
    cy.wrap(subject).should(($el) => {
      const elementText = $el.text().toLowerCase();
      expect(elementText).to.include(text.toLowerCase());
    });
    return cy.wrap(subject);
  }
);

Cypress.Commands.add(
  'shouldHaveExactText',
  { prevSubject: true },
  (subject, text: string) => {
    cy.wrap(subject).should('have.text', text);
    return cy.wrap(subject);
  }
);

// State assertions
Cypress.Commands.add(
  'shouldBeEnabled',
  { prevSubject: true },
  (subject) => {
    cy.wrap(subject).should('not.be.disabled');
    return cy.wrap(subject);
  }
);

Cypress.Commands.add(
  'shouldBeDisabled',
  { prevSubject: true },
  (subject) => {
    cy.wrap(subject).should('be.disabled');
    return cy.wrap(subject);
  }
);

// Class assertion
Cypress.Commands.add(
  'shouldHaveClass',
  { prevSubject: true },
  (subject, className: string) => {
    cy.wrap(subject).should('have.class', className);
    return cy.wrap(subject);
  }
);

// Count assertion
Cypress.Commands.add(
  'shouldHaveCount',
  { prevSubject: true },
  (subject, count: number) => {
    cy.wrap(subject).should('have.length', count);
    return cy.wrap(subject);
  }
);

// API response assertions
Cypress.Commands.add(
  'shouldHaveStatus',
  { prevSubject: true },
  (subject, status: number) => {
    expect(subject.status).to.eq(status);
    return cy.wrap(subject);
  }
);

Cypress.Commands.add(
  'shouldHaveProperty',
  { prevSubject: true },
  (subject, property: string) => {
    expect(subject).to.have.property(property);
    return cy.wrap(subject);
  }
);

export {};