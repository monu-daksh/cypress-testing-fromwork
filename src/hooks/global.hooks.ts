/**
 * Global hooks that run once before/after all tests
 * 
 * Future additions:
 * - Database seeding
 * - Environment setup
 * - Global teardown
 */

/**
 * Global before hook
 */
export const globalBefore = (): void => {
  before(() => {
    cy.log(' Starting test suite');
    
    // Set global configurations
    Cypress.config('defaultCommandTimeout', 10000);
    
    // Log environment info
    cy.log(`Environment: ${Cypress.env('environment') || 'test'}`);
    cy.log(`Base URL: ${Cypress.config('baseUrl')}`);
    cy.log(`Viewport: ${Cypress.config('viewportWidth')}x${Cypress.config('viewportHeight')}`);
  });
};

/**
 * Global after hook
 */
export const globalAfter = (): void => {
  after(() => {
    cy.log(' Test suite completed');
    
    // Cleanup global resources
    cy.clearCookies();
    cy.clearLocalStorage();
  });
};

/**
 * Initialize test database
 */
export const initializeDatabase = (): void => {
  before(() => {
    cy.task('db:seed', null, { log: false }).catch(() => {
      cy.log(' Database seeding task not available');
    });
  });
};

/**
 * Cleanup test database
 */
export const cleanupDatabase = (): void => {
  after(() => {
    cy.task('db:cleanup', null, { log: false }).catch(() => {
      cy.log('Database cleanup task not available');
    });
  });
};

/**
 * Check system health
 */
export const checkSystemHealth = (): void => {
  before(() => {
    const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
    
    cy.request({
      url: `${apiUrl}/health`,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200) {
        cy.log(' System health check passed');
      } else {
        cy.log(' System health check failed');
      }
    });
  });
};

export default {
  globalBefore,
  globalAfter,
  initializeDatabase,
  cleanupDatabase,
  checkSystemHealth,
};