"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyEnvironmentConfig = exports.getEnvironmentConfig = exports.environments = void 0;
exports.environments = {
    local: {
        name: 'local',
        baseUrl: 'http://localhost:3000',
        apiUrl: 'http://localhost:4000',
        timeout: 10000,
        retries: 0,
        video: false,
    },
    development: {
        name: 'development',
        baseUrl: 'https://dev.example.com',
        apiUrl: 'https://api-dev.example.com',
        timeout: 15000,
        retries: 1,
        video: true,
    },
    staging: {
        name: 'staging',
        baseUrl: 'https://staging.example.com',
        apiUrl: 'https://api-staging.example.com',
        timeout: 15000,
        retries: 2,
        video: true,
    },
    production: {
        name: 'production',
        baseUrl: 'https://example.com',
        apiUrl: 'https://api.example.com',
        timeout: 20000,
        retries: 3,
        video: true,
    },
    ci: {
        name: 'ci',
        baseUrl: 'http://localhost:3000',
        apiUrl: 'http://localhost:4000',
        timeout: 30000,
        retries: 3,
        video: true,
    },
};
const getEnvironmentConfig = (envName = 'local') => {
    return exports.environments[envName];
};
exports.getEnvironmentConfig = getEnvironmentConfig;
const applyEnvironmentConfig = (envName = 'local') => {
    const config = (0, exports.getEnvironmentConfig)(envName);
    Cypress.config('baseUrl', config.baseUrl);
    Cypress.config('defaultCommandTimeout', config.timeout);
    Cypress.env('apiUrl', config.apiUrl);
    Cypress.env('environment', config.name);
};
exports.applyEnvironmentConfig = applyEnvironmentConfig;
exports.default = exports.environments;
//# sourceMappingURL=environments.js.map