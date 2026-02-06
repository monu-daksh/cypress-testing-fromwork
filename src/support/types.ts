/**
 * TypeScript type definitions for the testing framework
 * 
 * Export all custom types used across the framework
 */

// Re-export types from commands


// Test data types
export interface TestUser {
  id?: string;
  email: string;
  password: string;
  name?: string;
  role?: 'admin' | 'user' | 'guest';
}

export interface ApiResponse<T = any> {
  status: number;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PageLoadOptions {
  waitForSelectors?: string[];
  timeout?: number;
  skipLoadingIndicators?: boolean;
}

export interface InterceptOptions {
  alias?: string;
  delay?: number;
  statusCode?: number;
  times?: number;
}

// Environment configuration types
export interface CypressEnv {
  apiUrl?: string;
  baseUrl?: string;
  loginUrl?: string;
  loginEndpoint?: string;
  registerEndpoint?: string;
  logoutEndpoint?: string;
  authToken?: string;
  ignoreUncaughtExceptions?: boolean;
}

// Viewport presets
export type ViewportPreset = 'mobile' | 'tablet' | 'desktop' | 'desktopLarge' | 'desktopXL';

// Test execution context
export interface TestContext {
  user?: TestUser;
  token?: string;
  data?: Record<string, any>;
}

export {};