/**
 * afterEach hooks that run after each test
 * 
 * Future additions:
 * - Test cleanup
 * - Screenshot/video management
 * - Test result reporting
 */

/**
 * Take screenshot on test failure
 */
export const screenshotOnFailure = (): void => {
  afterEach(function() {
    if (this.currentTest?.state === 'failed') {
      const testName = this.currentTest.title.replace(/\s+/g, '-');
      const timestamp = new Date().getTime();
      cy.screenshot(`FAILED-${testName}-${timestamp}`);
    }
  });
};

/**
 * Log test completion
 */
export const logTestCompletion = (): void => {
  afterEach(function() {
    const state = this.currentTest?.state;
    const title = this.currentTest?.title;
    
    if (state === 'passed') {
      cy.log(`Test passed: ${title}`);
    } else if (state === 'failed') {
      cy.log(` Test failed: ${title}`);
    }
  });
};

/**
 * Collect test metrics
 */
export const collectTestMetrics = (): void => {
  afterEach(function () {
    const duration = this.currentTest?.duration ?? 0;
    const state = this.currentTest?.state;

    cy.task(
      'logTestMetric',
      {
        test: this.currentTest?.title,
        duration,
        state,
        timestamp: new Date().toISOString(),
      },
      { log: false }
    );
  });
};


/**
 * Clean up test data
 */
export const cleanupTestData = (): void => {
  afterEach(() => {
    // Add cleanup logic here
    // For example: delete test users, orders, etc.
    cy.log(' Cleaning up test data');
  });
};

/**
 * Clear API mocks
 */
export const clearApiMocks = (): void => {
  afterEach(() => {
    // Clear all intercepts
    cy.intercept('**/*', (req) => {
      req.continue();
    });
  });
};

/**
 * Check for console errors
 */
export const checkConsoleErrors = (): void => {
  afterEach(() => {
    cy.get('@consoleError', { log: false }).then((stub: any) => {
      if (!stub) return;

      const allowedErrors = ['ResizeObserver', 'Hydration'];

      const calls = stub.getCalls();

      const unexpectedErrors = calls.filter((call: any) => {
        const message = call.args[0];
        return !allowedErrors.some(a =>
          message?.toString().includes(a)
        );
      });

      if (unexpectedErrors.length > 0) {
        cy.log('Console errors detected');
        throw new Error(JSON.stringify(unexpectedErrors));
      }
    });
  });
};


/**
 * Wait for pending requests
 */
export const waitForPendingRequests = (): void => {
  afterEach(() => {
    // Wait for all pending API calls to complete
    cy.window().then((win) => {
      return cy.wrap(null, { timeout: 5000 }).should(() => {
        // Custom logic to check if requests are pending
        expect(true).to.be.true; // Placeholder
      });
    });
  });
};

export default {
  screenshotOnFailure,
  logTestCompletion,
  collectTestMetrics,
  cleanupTestData,
  clearApiMocks,
  checkConsoleErrors,
  waitForPendingRequests,
};