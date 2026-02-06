"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INPUT_TYPES = exports.ARIA_SELECTORS = exports.COMMON_SELECTORS = void 0;
exports.COMMON_SELECTORS = {
    LOGIN_FORM: '[data-testid="login-form"]',
    EMAIL_INPUT: '[data-testid="email-input"]',
    PASSWORD_INPUT: '[data-testid="password-input"]',
    LOGIN_BUTTON: '[data-testid="login-button"]',
    LOGOUT_BUTTON: '[data-testid="logout-button"]',
    NAV_BAR: '[data-testid="nav-bar"]',
    SIDEBAR: '[data-testid="sidebar"]',
    MENU_TOGGLE: '[data-testid="menu-toggle"]',
    LOADING_SPINNER: '[data-testid="loading"]',
    ERROR_MESSAGE: '[data-testid="error-message"]',
    SUCCESS_MESSAGE: '[data-testid="success-message"]',
    MODAL: '[data-testid="modal"]',
    MODAL_CLOSE: '[data-testid="modal-close"]',
    CONFIRM_BUTTON: '[data-testid="confirm-button"]',
    CANCEL_BUTTON: '[data-testid="cancel-button"]',
    FORM_SUBMIT: '[data-testid="form-submit"]',
    FORM_CANCEL: '[data-testid="form-cancel"]',
    FORM_RESET: '[data-testid="form-reset"]',
    TABLE: '[data-testid="table"]',
    TABLE_ROW: '[data-testid="table-row"]',
    TABLE_HEADER: '[data-testid="table-header"]',
    PAGINATION: '[data-testid="pagination"]',
    NEXT_PAGE: '[data-testid="next-page"]',
    PREV_PAGE: '[data-testid="prev-page"]',
    SEARCH_INPUT: '[data-testid="search-input"]',
    SEARCH_BUTTON: '[data-testid="search-button"]',
    SEARCH_RESULTS: '[data-testid="search-results"]',
};
exports.ARIA_SELECTORS = {
    BUTTON: '[role="button"]',
    LINK: '[role="link"]',
    TEXTBOX: '[role="textbox"]',
    CHECKBOX: '[role="checkbox"]',
    RADIO: '[role="radio"]',
    DIALOG: '[role="dialog"]',
    ALERT: '[role="alert"]',
    MENU: '[role="menu"]',
    MENUITEM: '[role="menuitem"]',
};
exports.INPUT_TYPES = {
    TEXT: 'input[type="text"]',
    EMAIL: 'input[type="email"]',
    PASSWORD: 'input[type="password"]',
    NUMBER: 'input[type="number"]',
    CHECKBOX: 'input[type="checkbox"]',
    RADIO: 'input[type="radio"]',
    FILE: 'input[type="file"]',
    SUBMIT: 'input[type="submit"]',
};
exports.default = {
    COMMON_SELECTORS: exports.COMMON_SELECTORS,
    ARIA_SELECTORS: exports.ARIA_SELECTORS,
    INPUT_TYPES: exports.INPUT_TYPES,
};
//# sourceMappingURL=selectors.constants.js.map