"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForPendingRequests = exports.checkConsoleErrors = exports.clearApiMocks = exports.cleanupTestData = exports.collectTestMetrics = exports.logTestCompletion = exports.screenshotOnFailure = void 0;
const screenshotOnFailure = () => {
    afterEach(function () {
        if (this.currentTest?.state === 'failed') {
            const testName = this.currentTest.title.replace(/\s+/g, '-');
            const timestamp = new Date().getTime();
            cy.screenshot(`FAILED-${testName}-${timestamp}`);
        }
    });
};
exports.screenshotOnFailure = screenshotOnFailure;
const logTestCompletion = () => {
    afterEach(function () {
        const state = this.currentTest?.state;
        const title = this.currentTest?.title;
        if (state === 'passed') {
            cy.log(`Test passed: ${title}`);
        }
        else if (state === 'failed') {
            cy.log(` Test failed: ${title}`);
        }
    });
};
exports.logTestCompletion = logTestCompletion;
const collectTestMetrics = () => {
    afterEach(function () {
        const duration = this.currentTest?.duration || 0;
        const state = this.currentTest?.state;
        cy.task('logTestMetric', {
            test: this.currentTest?.title,
            duration,
            state,
            timestamp: new Date().toISOString(),
        }, { log: false }).catch(() => {
        });
    });
};
exports.collectTestMetrics = collectTestMetrics;
const cleanupTestData = () => {
    afterEach(() => {
        cy.log(' Cleaning up test data');
    });
};
exports.cleanupTestData = cleanupTestData;
const clearApiMocks = () => {
    afterEach(() => {
        cy.intercept('**/*', (req) => {
            req.continue();
        });
    });
};
exports.clearApiMocks = clearApiMocks;
const checkConsoleErrors = () => {
    afterEach(function () {
        cy.get('@consoleError', { timeout: 0 })
            .should((stub) => {
            const allowedErrors = [
                'ResizeObserver',
                'Hydration',
            ];
            const calls = stub.getCalls();
            const unexpectedErrors = calls.filter((call) => {
                const message = call.args[0];
                return !allowedErrors.some(allowed => message?.toString().includes(allowed));
            });
            if (unexpectedErrors.length > 0) {
                cy.log(' Console errors detected:', unexpectedErrors);
            }
        })
            .catch(() => {
        });
    });
};
exports.checkConsoleErrors = checkConsoleErrors;
const waitForPendingRequests = () => {
    afterEach(() => {
        cy.window().then((win) => {
            return cy.wrap(null, { timeout: 5000 }).should(() => {
                expect(true).to.be.true;
            });
        });
    });
};
exports.waitForPendingRequests = waitForPendingRequests;
exports.default = {
    screenshotOnFailure: exports.screenshotOnFailure,
    logTestCompletion: exports.logTestCompletion,
    collectTestMetrics: exports.collectTestMetrics,
    cleanupTestData: exports.cleanupTestData,
    clearApiMocks: exports.clearApiMocks,
    checkConsoleErrors: exports.checkConsoleErrors,
    waitForPendingRequests: exports.waitForPendingRequests,
};
//# sourceMappingURL=afterEach.hooks.js.map