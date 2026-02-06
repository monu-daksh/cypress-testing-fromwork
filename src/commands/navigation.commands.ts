/// <reference types="cypress" />

/**
 * Navigation-related custom commands
 * 
 * Future additions:
 * - Browser history manipulation
 * - Deep linking
 * - Query parameter utilities
 * - Hash navigation
 */

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Navigate to a route and wait for load
       * @param path - Route path
       * @param options - Visit options
       * @example cy.navigateTo('/dashboard')
       */
      navigateTo(path: string, options?: Partial<Cypress.VisitOptions>): Chainable<void>;

      /**
       * Go back in browser history
       * @example cy.goBack()
       */
      goBack(): Chainable<void>;

      /**
       * Go forward in browser history
       */
      goForward(): Chainable<void>;

      /**
       * Reload the current page
       * @param forceReload - Force reload ignoring cache
       */
      reloadPage(forceReload?: boolean): Chainable<void>;

      /**
       * Verify current URL matches pattern
       * @param pattern - URL pattern or regex
       */
      verifyUrl(pattern: string | RegExp): Chainable<void>;

      /**
       * Wait for page to be fully loaded
       */
      waitForPageLoad(): Chainable<void>;
    }
  }
}

// Navigate to route
Cypress.Commands.add('navigateTo', (path: string, options = {}) => {
  cy.visit(path, options);
  cy.waitForPageLoad();
});

// Go back
Cypress.Commands.add('goBack', () => {
  cy.go('back');
  cy.waitForPageLoad();
});

// Go forward
Cypress.Commands.add('goForward', () => {
  cy.go('forward');
  cy.waitForPageLoad();
});

// Reload page
Cypress.Commands.add('reloadPage', (forceReload = false) => {
  cy.reload(forceReload);
  cy.waitForPageLoad();
});

// Verify URL
Cypress.Commands.add('verifyUrl', (pattern: string | RegExp) => {
  if (typeof pattern === 'string') {
    cy.url().should('include', pattern);
  } else {
    cy.url().should('match', pattern);
  }
});

// Wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  // Wait for body to be visible
  cy.get('body').should('be.visible');
  
  // Wait for any loading indicators to disappear
  cy.get('[data-testid="loading"]', { timeout: 1000 }).should('not.exist');
  cy.get('.loading', { timeout: 1000 }).should('not.exist');
  cy.get('.spinner', { timeout: 1000 }).should('not.exist');
  
  // Wait for document ready state
  cy.document().should((doc) => {
    expect(doc.readyState).to.be.oneOf(['interactive', 'complete']);
  });
});

export {};