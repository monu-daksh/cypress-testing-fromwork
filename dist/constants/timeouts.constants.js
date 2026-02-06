"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RETRY_ATTEMPTS = exports.TIMEOUTS = void 0;
exports.TIMEOUTS = {
    VERY_SHORT: 1000,
    SHORT: 3000,
    MEDIUM: 5000,
    LONG: 10000,
    VERY_LONG: 30000,
    API_DEFAULT: 10000,
    API_LONG: 30000,
    API_UPLOAD: 60000,
    PAGE_LOAD: 30000,
    NAVIGATION: 10000,
    ANIMATION_SHORT: 500,
    ANIMATION_MEDIUM: 1000,
    ANIMATION_LONG: 2000,
    NETWORK_IDLE: 2000,
    DEBOUNCE: 300,
    RETRY_SHORT: 500,
    RETRY_MEDIUM: 1000,
    RETRY_LONG: 2000,
};
exports.RETRY_ATTEMPTS = {
    DEFAULT: 3,
    API: 5,
    FLAKY_TEST: 10,
};
exports.default = exports.TIMEOUTS;
//# sourceMappingURL=timeouts.constants.js.map