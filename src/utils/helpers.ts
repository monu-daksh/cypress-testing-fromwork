/**
 * General helper utility functions
 * 
 * Future additions:
 * - Date/time helpers
 * - String manipulation
 * - Array/object utilities
 * - Crypto utilities
 */

export class TestHelpers {
  /**
   * Generate random email address
   */
  static generateRandomEmail(domain = 'test.com'): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `test.${timestamp}.${random}@${domain}`;
  }

  /**
   * Generate random string
   */
  static generateRandomString(length = 10, charset = 'alphanumeric'): string {
    const charsets = {
      alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      numeric: '0123456789',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    };

    const chars = charsets[charset as keyof typeof charsets] || charsets.alphanumeric;
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  /**
   * Generate random number within range
   */
  static generateRandomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Wait for network idle (no active requests)
   */
  static waitForNetworkIdle(timeout = 1000): Cypress.Chainable<void> {
    let requestCount = 0;
    let idleTimer: NodeJS.Timeout;

    return cy.window().then((win) => {
      return new Cypress.Promise<void>((resolve) => {
        // Track fetch requests
        const originalFetch = win.fetch;
        win.fetch = function (...args) {
          requestCount++;
          clearTimeout(idleTimer);

          return originalFetch.apply(this, args).finally(() => {
            requestCount--;
            if (requestCount === 0) {
              idleTimer = setTimeout(resolve, timeout);
            }
          });
        };

        // Track XHR requests
        const originalOpen = win.XMLHttpRequest.prototype.open;

        win.XMLHttpRequest.prototype.open = function (...args: any[]) {
          requestCount++;
          clearTimeout(idleTimer);

          this.addEventListener('loadend', () => {
            requestCount--;
            if (requestCount === 0) {
              idleTimer = setTimeout(resolve, timeout);
            }
          });

          return originalOpen.apply(this, args as any);
        };


        // Initial check
        if (requestCount === 0) {
          idleTimer = setTimeout(resolve, timeout);
        }
      });
    });
  }

  /**
   * Format currency
   */
  static formatCurrency(amount: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  }

  /**
   * Format date
   */
  static formatDate(date: Date | string, format = 'YYYY-MM-DD'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  }

  /**
   * Deep clone object
   */
  static deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Sleep/wait utility
   */
  static sleep(ms: number): Cypress.Chainable<undefined> {
    return cy.wait(ms);
  }

  /**
   * Retry function until condition is met
   */
  static retryUntil<T>(
    fn: () => Cypress.Chainable<T>,
    condition: (value: T) => boolean,
    options: { maxRetries?: number; delay?: number } = {}
  ): Cypress.Chainable<T> {
    const { maxRetries = 10, delay = 1000 } = options;
    let attempts = 0;

    const attempt = (): Cypress.Chainable<T> => {
      return fn().then((value) => {
        if (condition(value)) {
          return cy.wrap(value);
        }

        attempts++;
        if (attempts >= maxRetries) {
          throw new Error(`Retry limit reached after ${maxRetries} attempts`);
        }

        return cy.wait(delay).then(() => attempt());
      });
    };

    return attempt();
  }
}

export default TestHelpers;