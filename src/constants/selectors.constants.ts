/**
 * Common selector constants
 * Centralize selectors used across multiple tests
 * 
 * Future additions:
 * - Dynamic selectors
 * - Selector builders
 * - Framework-specific selectors
 */

export const COMMON_SELECTORS = {
  // Authentication
  LOGIN_FORM: '[data-testid="login-form"]',
  EMAIL_INPUT: '[data-testid="email-input"]',
  PASSWORD_INPUT: '[data-testid="password-input"]',
  LOGIN_BUTTON: '[data-testid="login-button"]',
  LOGOUT_BUTTON: '[data-testid="logout-button"]',
  
  // Navigation
  NAV_BAR: '[data-testid="nav-bar"]',
  SIDEBAR: '[data-testid="sidebar"]',
  MENU_TOGGLE: '[data-testid="menu-toggle"]',
  
  // Common UI elements
  LOADING_SPINNER: '[data-testid="loading"]',
  ERROR_MESSAGE: '[data-testid="error-message"]',
  SUCCESS_MESSAGE: '[data-testid="success-message"]',
  MODAL: '[data-testid="modal"]',
  MODAL_CLOSE: '[data-testid="modal-close"]',
  CONFIRM_BUTTON: '[data-testid="confirm-button"]',
  CANCEL_BUTTON: '[data-testid="cancel-button"]',
  
  // Forms
  FORM_SUBMIT: '[data-testid="form-submit"]',
  FORM_CANCEL: '[data-testid="form-cancel"]',
  FORM_RESET: '[data-testid="form-reset"]',
  
  // Tables
  TABLE: '[data-testid="table"]',
  TABLE_ROW: '[data-testid="table-row"]',
  TABLE_HEADER: '[data-testid="table-header"]',
  
  // Pagination
  PAGINATION: '[data-testid="pagination"]',
  NEXT_PAGE: '[data-testid="next-page"]',
  PREV_PAGE: '[data-testid="prev-page"]',
  
  // Search
  SEARCH_INPUT: '[data-testid="search-input"]',
  SEARCH_BUTTON: '[data-testid="search-button"]',
  SEARCH_RESULTS: '[data-testid="search-results"]',
};

export const ARIA_SELECTORS = {
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

export const INPUT_TYPES = {
  TEXT: 'input[type="text"]',
  EMAIL: 'input[type="email"]',
  PASSWORD: 'input[type="password"]',
  NUMBER: 'input[type="number"]',
  CHECKBOX: 'input[type="checkbox"]',
  RADIO: 'input[type="radio"]',
  FILE: 'input[type="file"]',
  SUBMIT: 'input[type="submit"]',
};

export default {
  COMMON_SELECTORS,
  ARIA_SELECTORS,
  INPUT_TYPES,
};