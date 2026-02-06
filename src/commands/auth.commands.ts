/// <reference types="cypress" />

/**
 * Authentication-related custom commands
 * 
 * Future additions:
 * - OAuth2 flows
 * - SSO integration
 * - Multi-factor authentication
 * - Token refresh logic
 * - Session management
 */

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name?: string;
  confirmPassword?: string;
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Login via API (faster than UI)
       * @param credentials - Login credentials
       * @example cy.loginViaApi({ email: 'user@test.com', password: 'pass123' })
       */
      loginViaApi(credentials: LoginCredentials): Chainable<void>;

      /**
       * Login via UI
       * @param credentials - Login credentials
       * @example cy.loginViaUI({ email: 'user@test.com', password: 'pass123' })
       */
      loginViaUI(credentials: LoginCredentials): Chainable<void>;

      /**
       * Register new user via API
       * @param credentials - Registration credentials
       */
      registerViaApi(credentials: RegisterCredentials): Chainable<Response<any>>;

      /**
       * Logout and clear session
       * @example cy.logout()
       */
      logout(): Chainable<void>;

      /**
       * Check if user is authenticated
       * @example cy.isAuthenticated().then(isAuth => { ... })
       */
      isAuthenticated(): Chainable<boolean>;

      /**
       * Set authentication token directly
       * @param token - JWT or auth token
       * @example cy.setAuthToken('eyJhbGc...')
       */
      setAuthToken(token: string): Chainable<void>;

      /**
       * Get current authentication token
       */
      getAuthToken(): Chainable<string | null>;
    }
  }
}

// Login via API
Cypress.Commands.add('loginViaApi', (credentials: LoginCredentials) => {
  const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
  const loginEndpoint = Cypress.env('loginEndpoint') || '/auth/login';

  cy.request({
    method: 'POST',
    url: `${apiUrl}${loginEndpoint}`,
    body: credentials,
  }).then((response) => {
    expect(response.status).to.eq(200);
    const token = response.body.token || response.body.accessToken;
    
    if (token) {
      window.localStorage.setItem('authToken', token);
      window.localStorage.setItem('user', JSON.stringify(response.body.user || {}));
    }
  });
});

// Login via UI
Cypress.Commands.add('loginViaUI', (credentials: LoginCredentials) => {
  const loginUrl = Cypress.env('loginUrl') || '/login';
  
  cy.visit(loginUrl);
  cy.getByTestId('email-input').type(credentials.email);
  cy.getByTestId('password-input').type(credentials.password);
  cy.getByTestId('login-button').click();
  
  // Wait for redirect or success indicator
  cy.url().should('not.include', loginUrl);
});

// Register via API
Cypress.Commands.add('registerViaApi', (credentials: RegisterCredentials) => {
  const apiUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');
  const registerEndpoint = Cypress.env('registerEndpoint') || '/auth/register';

  return cy.request({
    method: 'POST',
    url: `${apiUrl}${registerEndpoint}`,
    body: credentials,
    failOnStatusCode: false,
  });
});

// Logout
Cypress.Commands.add('logout', () => {
  cy.window().then((win) => {
    win.localStorage.clear();
    win.sessionStorage.clear();
  });
  
  // Clear cookies
  cy.clearCookies();
  
  // Optional: Call logout endpoint
  const logoutEndpoint = Cypress.env('logoutEndpoint');
  if (logoutEndpoint) {
    cy.request({
      method: 'POST',
      url: logoutEndpoint,
      failOnStatusCode: false,
    });
  }
});

// Check authentication status
Cypress.Commands.add('isAuthenticated', () => {
  return cy.window().then((win) => {
    const token = win.localStorage.getItem('authToken');
    return cy.wrap(!!token);
  });
});

// Set auth token
Cypress.Commands.add('setAuthToken', (token: string) => {
  cy.window().then((win) => {
    win.localStorage.setItem('authToken', token);
  });
});

// Get auth token
Cypress.Commands.add('getAuthToken', () => {
  return cy.window().then((win) => {
    return cy.wrap(win.localStorage.getItem('authToken'));
  });
});

export {};