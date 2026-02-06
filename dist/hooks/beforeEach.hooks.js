"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failOnConsoleError = exports.setupMockUser = exports.seedTestData = exports.logTestStart = exports.setDefaultViewport = exports.setupApiInterceptors = exports.preserveAuthState = exports.clearBrowserState = void 0;
const clearBrowserState = () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
            win.sessionStorage.clear();
        });
    });
};
exports.clearBrowserState = clearBrowserState;
const preserveAuthState = () => {
    beforeEach(() => {
        const preserveAuth = Cypress.env('preserveAuth');
        if (preserveAuth) {
            const token = Cypress.env('authToken');
            if (token) {
                cy.window().then((win) => {
                    win.localStorage.setItem('authToken', token);
                });
            }
        }
    });
};
exports.preserveAuthState = preserveAuthState;
const setupApiInterceptors = () => {
    beforeEach(() => {
        cy.intercept('**/*api*/**').as('apiCall');
    });
};
exports.setupApiInterceptors = setupApiInterceptors;
const setDefaultViewport = (width = 1280, height = 720) => {
    beforeEach(() => {
        cy.viewport(width, height);
    });
};
exports.setDefaultViewport = setDefaultViewport;
const logTestStart = () => {
    beforeEach(function () {
        cy.log(` Starting test: ${this.currentTest?.title}`);
    });
};
exports.logTestStart = logTestStart;
const seedTestData = (seedFunction) => {
    beforeEach(() => {
        seedFunction();
    });
};
exports.seedTestData = seedTestData;
const setupMockUser = () => {
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
exports.setupMockUser = setupMockUser;
const failOnConsoleError = () => {
    beforeEach(() => {
        cy.window().then((win) => {
            cy.stub(win.console, 'error').as('consoleError');
        });
    });
};
exports.failOnConsoleError = failOnConsoleError;
exports.default = {
    clearBrowserState: exports.clearBrowserState,
    preserveAuthState: exports.preserveAuthState,
    setupApiInterceptors: exports.setupApiInterceptors,
    setDefaultViewport: exports.setDefaultViewport,
    logTestStart: exports.logTestStart,
    seedTestData: exports.seedTestData,
    setupMockUser: exports.setupMockUser,
    failOnConsoleError: exports.failOnConsoleError,
};
//# sourceMappingURL=beforeEach.hooks.js.map