/**
 * Timeout constants for consistent wait times
 * 
 * Future additions:
 * - Environment-specific timeouts
 * - Adaptive timeouts based on network
 */

export const TIMEOUTS = {
  // Element waits
  VERY_SHORT: 1000,    // 1 second
  SHORT: 3000,         // 3 seconds
  MEDIUM: 5000,        // 5 seconds (default)
  LONG: 10000,         // 10 seconds
  VERY_LONG: 30000,    // 30 seconds
  
  // API waits
  API_DEFAULT: 10000,
  API_LONG: 30000,
  API_UPLOAD: 60000,
  
  // Page loads
  PAGE_LOAD: 30000,
  NAVIGATION: 10000,
  
  // Animations
  ANIMATION_SHORT: 500,
  ANIMATION_MEDIUM: 1000,
  ANIMATION_LONG: 2000,
  
  // Network
  NETWORK_IDLE: 2000,
  DEBOUNCE: 300,
  
  // Retry delays
  RETRY_SHORT: 500,
  RETRY_MEDIUM: 1000,
  RETRY_LONG: 2000,
};

export const RETRY_ATTEMPTS = {
  DEFAULT: 3,
  API: 5,
  FLAKY_TEST: 10,
};

export default TIMEOUTS;