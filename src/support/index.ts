/**
 * Main support file - imports all commands and sets up global hooks
 * 
 * This file is the entry point for Cypress support
 * Import this in your cypress/support/e2e.ts or component.ts
 * 
 * Future additions:
 * - Custom reporters integration
 * - Screenshot/video customization
 * - Test analytics tracking
 * - Custom error handling
 */

// Import all commands (auto-registers them)
import '../commands';

// Import global hooks
import '../hooks';

// Add global configuration
before(() => {
  // Global setup before all tests
  cy.log(' Cypress Testing Framework Initialized');
  
  // Set default viewport if not specified
  if (!Cypress.config('viewportWidth')) {
    cy.viewport(1280, 720);
  }
});

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false prevents Cypress from failing the test
  // You can customize this based on error types
  
  // Don't fail on React hydration errors
  if (err.message.includes('Hydration')) {
    return false;
  }
  
  // Don't fail on ResizeObserver errors
  if (err.message.includes('ResizeObserver')) {
    return false;
  }
  
  // Log the error but don't fail
  cy.log('Uncaught exception:', err.message);
  
  // Return true to fail the test, false to continue
  return !Cypress.env('ignoreUncaughtExceptions');
});

// Add custom logging
Cypress.on('test:before:run', (test) => {
  cy.log(`Starting: ${test.title}`);
});

Cypress.on('test:after:run', (test) => {
  if (test.state === 'passed') {
    cy.log(` Passed: ${test.title}`);
  } else if (test.state === 'failed') {
    cy.log(` Failed: ${test.title}`);
  }
});

export {};