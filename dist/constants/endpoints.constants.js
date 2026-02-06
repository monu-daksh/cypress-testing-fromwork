"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = void 0;
exports.API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REGISTER: '/auth/register',
        REFRESH: '/auth/refresh',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
    },
    USERS: {
        BASE: '/users',
        BY_ID: (id) => `/users/${id}`,
        ME: '/users/me',
        UPDATE_PROFILE: '/users/profile',
        UPDATE_PASSWORD: '/users/password',
        DELETE: (id) => `/users/${id}`,
    },
    PRODUCTS: {
        BASE: '/products',
        BY_ID: (id) => `/products/${id}`,
        CATEGORIES: '/products/categories',
        SEARCH: '/products/search',
    },
    ORDERS: {
        BASE: '/orders',
        BY_ID: (id) => `/orders/${id}`,
        CREATE: '/orders',
        CANCEL: (id) => `/orders/${id}/cancel`,
    },
    HEALTH: '/health',
    VERSION: '/version',
};
exports.default = exports.API_ENDPOINTS;
//# sourceMappingURL=endpoints.constants.js.map