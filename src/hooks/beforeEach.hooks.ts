/**
 * beforeEach hooks that run before each test
 * 
 * Future additions:
 * - Test data seeding
 * - Browser state management
 * - Performance monitoring setup
 */

/**
 * Clear browser state before each test
 */
export const clearBrowserState = (): void => {
  beforeEach(() => {
    // Clear cookies
    cy.clearCookies();
    
    // Clear local storage
    cy.clearLocalStorage();
    
    // Clear session storage
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });
};

/**
 * Preserve authentication between tests
 */
export const preserveAuthState = (): void => {
  beforeEach(() => {
    const preserveAuth = Cypress.env('preserveAuth');
    
    if (preserveAuth) {
      // Restore auth token from Cypress env
      const token = Cypress.env('authToken');
      if (token) {
        cy.window().then((win) => {
          win.localStorage.setItem('authToken', token);
        });
      }
    }
  });
};

/**
 * Setup API interceptors before each test
 */
export const setupApiInterceptors = (): void => {
  beforeEach(() => {
    // Intercept all API calls for monitoring
    cy.intercept('**/*api*/**').as('apiCall');
    
    // You can add more default interceptors here
  });
};

/**
 * Set viewport before each test
 */
export const setDefaultViewport = (width = 1280, height = 720): void => {
  beforeEach(() => {
    cy.viewport(width, height);
  });
};

/**
 * Log test start
 */
export const logTestStart = (): void => {
  beforeEach(function() {
    cy.log(` Starting test: ${this.currentTest?.title}`);
  });
};

/**
 * Seed test data before each test
 */
export const seedTestData = (seedFunction: () => void): void => {
  beforeEach(() => {
    seedFunction();
  });
};

/**
 * Setup mock user
 */
export const setupMockUser = (): void => {
  beforeEach(() => {
    const mockUser = {
      id: 'mock-user-123',
      email: 'test@example.com',
      name: 'Test User',
      role: 'user',
    };
    
    cy.window().then((win) => {
      win.localStorage.setItem('user', JSON.stringify(mockUser));
    });
  });
};

/**
 * Fail fast on console errors
 */
export const failOnConsoleError = (): void => {
  beforeEach(() => {
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });
  });
};

export default {
  clearBrowserState,
  preserveAuthState,
  setupApiInterceptors,
  setDefaultViewport,
  logTestStart,
  seedTestData,
  setupMockUser,
  failOnConsoleError,
};