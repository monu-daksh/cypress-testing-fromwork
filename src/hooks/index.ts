/**
 * Export all hooks and auto-register default ones
 * 
 * Users can selectively import hooks they need
 */

import * as beforeEachHooks from './beforeEach.hooks';
import * as afterEachHooks from './afterEach.hooks';
import * as globalHooks from './global.hooks';

// Export all hooks
export * from './beforeEach.hooks';
export * from './afterEach.hooks';
export * from './global.hooks';

/**
 * Register default hooks
 * These will run automatically when the framework is imported
 */
export const registerDefaultHooks = (): void => {
  // Global hooks
  globalHooks.globalBefore();
  globalHooks.globalAfter();
  
  // Before each test
  beforeEachHooks.clearBrowserState();
  beforeEachHooks.logTestStart();
  
  // After each test
  afterEachHooks.screenshotOnFailure();
  afterEachHooks.logTestCompletion();
};

// Auto-register default hooks
registerDefaultHooks();

export default {
  beforeEachHooks,
  afterEachHooks,
  globalHooks,
  registerDefaultHooks,
};