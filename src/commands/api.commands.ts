/// <reference types="cypress" />

/**
 * API-related custom commands for HTTP requests
 * 
 * Future additions:
 * - GraphQL support
 * - WebSocket testing
 * - File upload/download
 * - Request retry logic
 * - Response caching
 * - API mocking helpers
 */

interface ApiRequestOptions extends Partial<Cypress.RequestOptions> {
  auth?: boolean;
  retries?: number;
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Make API request with automatic token injection
       * @param options - Request options
       * @example cy.apiRequest({ method: 'GET', url: '/users' })
       */
      apiRequest(options: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Make API GET request
       * @param url - Endpoint URL
       * @param options - Additional options
       * @example cy.apiGet('/users/1')
       */
      apiGet(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Make API POST request
       * @param url - Endpoint URL
       * @param body - Request body
       * @param options - Additional options
       * @example cy.apiPost('/users', { name: 'John' })
       */
      apiPost(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Make API PUT request
       */
      apiPut(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Make API PATCH request
       */
      apiPatch(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Make API DELETE request
       */
      apiDelete(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;

      /**
       * Verify API response structure
       * @param response - Response object
       * @param schema - Expected schema
       * @example cy.verifyResponseSchema(response, { id: 'number', name: 'string' })
       */
      verifyResponseSchema(response: any, schema: Record<string, string>): Chainable<any>;
    }
  }
}

// Base API request with auth
Cypress.Commands.add('apiRequest', (options: ApiRequestOptions) => {
  const { auth = true, retries = 0, ...requestOptions } = options;
  
  const token = auth ? window.localStorage.getItem('authToken') || Cypress.env('authToken') : null;
  const baseUrl = Cypress.env('apiUrl') || Cypress.config('baseUrl');

  const makeRequest = (attempt = 0): Cypress.Chainable<Response<any>> => {
    return cy.request({
      ...requestOptions,
      url: `${baseUrl}${requestOptions.url}`,
      headers: {
        'Content-Type': 'application/json',
        ...requestOptions.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      failOnStatusCode: false,
    }).then((response) => {
      // Retry logic for 5xx errors
      if (response.status >= 500 && attempt < retries) {
        cy.wait(1000 * (attempt + 1)); // Exponential backoff
        return makeRequest(attempt + 1);
      }
      return cy.wrap(response);
    });
  };

  return makeRequest();
});

// HTTP method shortcuts
Cypress.Commands.add('apiGet', (url: string, options: ApiRequestOptions = {}) => {
  return cy.apiRequest({ method: 'GET', url, ...options });
});

Cypress.Commands.add('apiPost', (url: string, body?: any, options: ApiRequestOptions = {}) => {
  return cy.apiRequest({ method: 'POST', url, body, ...options });
});

Cypress.Commands.add('apiPut', (url: string, body?: any, options: ApiRequestOptions = {}) => {
  return cy.apiRequest({ method: 'PUT', url, body, ...options });
});

Cypress.Commands.add('apiPatch', (url: string, body?: any, options: ApiRequestOptions = {}) => {
  return cy.apiRequest({ method: 'PATCH', url, body, ...options });
});

Cypress.Commands.add('apiDelete', (url: string, options: ApiRequestOptions = {}) => {
  return cy.apiRequest({ method: 'DELETE', url, ...options });
});

// Verify response schema
Cypress.Commands.add('verifyResponseSchema', (response: any, schema: Record<string, string>) => {
  Object.keys(schema).forEach((key) => {
    const expectedType = schema[key];
    const actualType = typeof response[key];
    
    expect(response).to.have.property(key);
    expect(actualType).to.equal(expectedType);
  });
  
  return cy.wrap(response);
});

export {};