/**
 * E2E-specific support file
 * 
 * Import this in your project's cypress/support/e2e.ts
 */

// Import main support (commands, hooks, etc.)
import './index';

// E2E specific global hooks
beforeEach(() => {
  // Preserve auth token across tests if needed
  const preserveAuth = Cypress.env('preserveAuth');
  
  if (preserveAuth) {
    cy.window().then((win) => {
      const token = win.localStorage.getItem('authToken');
      if (token) {
        Cypress.env('authToken', token);
      }
    });
  } else {
    // Clear all cookies and storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  }
});

afterEach(() => {
  // Take screenshot on failure
  if (Cypress.currentTest?.state === 'failed') {
    const screenshotName = `${Cypress.currentTest.titlePath.join(' - ')}-FAILED`;
    cy.screenshot(screenshotName);
  }
});

export {};