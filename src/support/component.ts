/**
 * Component testing specific support file
 * 
 * Import this in your project's cypress/support/component.ts
 * 
 * Future additions:
 * - Component mount helpers for different frameworks
 * - Props validation
 * - Event spy utilities
 */

// Import main support
import './index';

// Component testing specific setup
import { mount } from 'cypress/react'; // or cypress/vue, cypress/angular

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

// Component-specific hooks
beforeEach(() => {
  // Reset component state before each test
  cy.log(' Component Test Starting');
});

export {};