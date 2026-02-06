/**
 * API endpoint constants
 * 
 * Future additions:
 * - Versioned endpoints
 * - Environment-specific endpoints
 * - Endpoint builders
 */

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  
  // Users
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
    ME: '/users/me',
    UPDATE_PROFILE: '/users/profile',
    UPDATE_PASSWORD: '/users/password',
    DELETE: (id: string) => `/users/${id}`,
  },
  
  // Products
  PRODUCTS: {
    BASE: '/products',
    BY_ID: (id: string) => `/products/${id}`,
    CATEGORIES: '/products/categories',
    SEARCH: '/products/search',
  },
  
  // Orders
  ORDERS: {
    BASE: '/orders',
    BY_ID: (id: string) => `/orders/${id}`,
    CREATE: '/orders',
    CANCEL: (id: string) => `/orders/${id}/cancel`,
  },
  
  // General
  HEALTH: '/health',
  VERSION: '/version',
};

export default API_ENDPOINTS;