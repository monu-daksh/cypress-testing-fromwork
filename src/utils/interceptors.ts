/**
 * API interception and mocking utilities
 * 
 * Future additions:
 * - GraphQL interception
 * - WebSocket mocking
 * - Network condition simulation (slow 3G, offline, etc.)
 * - Request recording/playback
 */

import type { InterceptOptions } from '../support/types';

export class ApiInterceptors {
  /**
   * Mock API GET request
   */
  static mockGet(
    url: string,
    response: any,
    options: InterceptOptions = {}
  ): void {
    const { alias = 'getRequest', delay = 0, statusCode = 200, times = -1 } = options;

    cy.intercept('GET', url, (req) => {
      if (delay > 0) {
        req.reply((res) => {
          res.delay = delay;
          res.send({ statusCode, body: response });
        });
      } else {
        req.reply({ statusCode, body: response });
      }
    }).as(alias);
  }

  /**
   * Mock API POST request
   */
  static mockPost(
    url: string,
    response: any,
    options: InterceptOptions = {}
  ): void {
    const { alias = 'postRequest', delay = 0, statusCode = 201 } = options;

    cy.intercept('POST', url, (req) => {
      if (delay > 0) {
        req.reply((res) => {
          res.delay = delay;
          res.send({ statusCode, body: response });
        });
      } else {
        req.reply({ statusCode, body: response });
      }
    }).as(alias);
  }

  /**
   * Mock API failure
   */
  static mockFailure(
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    statusCode = 500,
    options: InterceptOptions = {}
  ): void {
    const { alias = 'failedRequest', delay = 0 } = options;

    cy.intercept(method, url, (req) => {
      req.reply({
        statusCode,
        body: { error: 'Server error', message: 'An error occurred' },
        delay,
      });
    }).as(alias);
  }

  /**
   * Intercept and wait for API call
   */
  static interceptAndWait(
    method: string,
    url: string,
    alias = 'apiCall'
  ): Cypress.Chainable<Cypress.Interception> {
    cy.intercept(method, url).as(alias);
    return cy.wait(`@${alias}`);
  }

  /**
   * Mock multiple API endpoints
   */
  static mockMultiple(
    mocks: Array<{
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
      url: string;
      response: any;
      statusCode?: number;
      alias?: string;
    }>
  ): void {
    mocks.forEach(({ method, url, response, statusCode = 200, alias }) => {
      cy.intercept(method, url, {
        statusCode,
        body: response,
      }).as(alias || `${method.toLowerCase()}Request`);
    });
  }

  /**
   * Simulate slow network
   */
  static simulateSlowNetwork(url: string, delay = 3000): void {
    cy.intercept(url, (req) => {
      req.reply((res) => {
        res.delay = delay;
        res.send();
      });
    });
  }

  /**
   * Simulate network error
   */
  static simulateNetworkError(url: string): void {
    cy.intercept(url, { forceNetworkError: true });
  }

  /**
   * Mock with dynamic response based on request
   */
  static mockDynamic(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    handler: (req: any) => any,
    alias = 'dynamicRequest'
  ): void {
    cy.intercept(method, url, (req) => {
      const response = handler(req);
      req.reply(response);
    }).as(alias);
  }

  /**
   * Spy on API call without modifying it
   */
  static spy(method: string, url: string, alias = 'spyRequest'): void {
    cy.intercept(method, url).as(alias);
  }

  /**
   * Wait for multiple API calls
   */
  static waitForMultiple(
    aliases: string[]
  ): Cypress.Chainable<Cypress.Interception[]> {
    const waits = aliases.map((alias) => `@${alias}`);
    return cy.wait(waits);
  }
}

export default ApiInterceptors;