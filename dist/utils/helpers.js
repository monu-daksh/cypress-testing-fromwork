"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHelpers = void 0;
class TestHelpers {
    static generateRandomEmail(domain = 'test.com') {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        return `test.${timestamp}.${random}@${domain}`;
    }
    static generateRandomString(length = 10, charset = 'alphanumeric') {
        const charsets = {
            alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
            numeric: '0123456789',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        };
        const chars = charsets[charset] || charsets.alphanumeric;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    static generateRandomNumber(min = 0, max = 100) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static waitForNetworkIdle(timeout = 1000) {
        let requestCount = 0;
        let idleTimer;
        return cy.window().then((win) => {
            return new Cypress.Promise((resolve) => {
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
                const originalOpen = win.XMLHttpRequest.prototype.open;
                win.XMLHttpRequest.prototype.open = function (...args) {
                    requestCount++;
                    clearTimeout(idleTimer);
                    this.addEventListener('loadend', () => {
                        requestCount--;
                        if (requestCount === 0) {
                            idleTimer = setTimeout(resolve, timeout);
                        }
                    });
                    return originalOpen.apply(this, args);
                };
                if (requestCount === 0) {
                    idleTimer = setTimeout(resolve, timeout);
                }
            });
        });
    }
    static formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
        }).format(amount);
    }
    static formatDate(date, format = 'YYYY-MM-DD') {
        const d = typeof date === 'string' ? new Date(date) : date;
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return format
            .replace('YYYY', String(year))
            .replace('MM', month)
            .replace('DD', day);
    }
    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static sleep(ms) {
        return cy.wait(ms);
    }
    static retryUntil(fn, condition, options = {}) {
        const { maxRetries = 10, delay = 1000 } = options;
        let attempts = 0;
        const attempt = () => {
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
exports.TestHelpers = TestHelpers;
exports.default = TestHelpers;
//# sourceMappingURL=helpers.js.map