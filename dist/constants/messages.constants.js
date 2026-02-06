"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFO_MESSAGES = exports.SUCCESS_MESSAGES = exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'You are not authorized to access this resource',
    SESSION_EXPIRED: 'Your session has expired. Please login again.',
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PASSWORD: 'Password must be at least 8 characters',
    PASSWORD_MISMATCH: 'Passwords do not match',
    INVALID_PHONE: 'Please enter a valid phone number',
    SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
    NOT_FOUND: 'The requested resource was not found',
    SERVER_ERROR: 'Server error. Please try again later.',
};
exports.SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT_SUCCESS: 'Logout successful',
    REGISTER_SUCCESS: 'Registration successful',
    PASSWORD_RESET_SUCCESS: 'Password reset successful',
    CREATE_SUCCESS: 'Created successfully',
    UPDATE_SUCCESS: 'Updated successfully',
    DELETE_SUCCESS: 'Deleted successfully',
    SAVE_SUCCESS: 'Saved successfully',
    OPERATION_SUCCESS: 'Operation completed successfully',
};
exports.INFO_MESSAGES = {
    LOADING: 'Loading...',
    PROCESSING: 'Processing...',
    SAVING: 'Saving...',
    DELETING: 'Deleting...',
    NO_RESULTS: 'No results found',
    EMPTY_STATE: 'No data available',
};
exports.default = {
    ERROR_MESSAGES: exports.ERROR_MESSAGES,
    SUCCESS_MESSAGES: exports.SUCCESS_MESSAGES,
    INFO_MESSAGES: exports.INFO_MESSAGES,
};
//# sourceMappingURL=messages.constants.js.map