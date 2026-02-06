"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInterceptors = void 0;
class ApiInterceptors {
    static mockGet(url, response, options = {}) {
        const { alias = 'getRequest', delay = 0, statusCode = 200, times = -1 } = options;
        cy.intercept('GET', url, (req) => {
            if (delay > 0) {
                req.reply((res) => {
                    res.delay = delay;
                    res.send({ statusCode, body: response });
                });
            }
            else {
                req.reply({ statusCode, body: response });
            }
        }).as(alias);
    }
    static mockPost(url, response, options = {}) {
        const { alias = 'postRequest', delay = 0, statusCode = 201 } = options;
        cy.intercept('POST', url, (req) => {
            if (delay > 0) {
                req.reply((res) => {
                    res.delay = delay;
                    res.send({ statusCode, body: response });
                });
            }
            else {
                req.reply({ statusCode, body: response });
            }
        }).as(alias);
    }
    static mockFailure(method, url, statusCode = 500, options = {}) {
        const { alias = 'failedRequest', delay = 0 } = options;
        cy.intercept(method, url, (req) => {
            req.reply({
                statusCode,
                body: { error: 'Server error', message: 'An error occurred' },
                delay,
            });
        }).as(alias);
    }
    static interceptAndWait(method, url, alias = 'apiCall') {
        cy.intercept(method, url).as(alias);
        return cy.wait(`@${alias}`);
    }
    static mockMultiple(mocks) {
        mocks.forEach(({ method, url, response, statusCode = 200, alias }) => {
            cy.intercept(method, url, {
                statusCode,
                body: response,
            }).as(alias || `${method.toLowerCase()}Request`);
        });
    }
    static simulateSlowNetwork(url, delay = 3000) {
        cy.intercept(url, (req) => {
            req.reply((res) => {
                res.delay = delay;
                res.send();
            });
        });
    }
    static simulateNetworkError(url) {
        cy.intercept(url, { forceNetworkError: true });
    }
    static mockDynamic(method, url, handler, alias = 'dynamicRequest') {
        cy.intercept(method, url, (req) => {
            const response = handler(req);
            req.reply(response);
        }).as(alias);
    }
    static spy(method, url, alias = 'spyRequest') {
        cy.intercept(method, url).as(alias);
    }
    static waitForMultiple(aliases) {
        const waits = aliases.map((alias) => `@${alias}`);
        return cy.wait(waits);
    }
}
exports.ApiInterceptors = ApiInterceptors;
exports.default = ApiInterceptors;
//# sourceMappingURL=interceptors.js.map