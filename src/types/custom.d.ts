/**
 * Custom type definitions for the testing framework
 */

/**
 * Test configuration options
 */
export interface TestConfig {
  retries?: number;
  timeout?: number;
  viewport?: {
    width: number;
    height: number;
  };
  baseUrl?: string;
  apiUrl?: string;
}

/**
 * Page object interface
 */
export interface IPage {
  visit(options?: Partial<Cypress.VisitOptions>): void;
  verifyUrl(): void;
  waitForPageLoad(): void;
}

/**
 * Component interface
 */
export interface IComponent {
  isVisible(): void;
  isNotVisible(): void;
  waitForVisible(timeout?: number): Cypress.Chainable<JQuery<HTMLElement>>;
  waitForHidden(timeout?: number): void;
}

/**
 * API response structure
 */
export interface ApiResponse<T = any> {
  status: number;
  data: T;
  message?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
  meta?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
}

/**
 * Test user structure
 */
export interface TestUser {
  id?: string;
  email: string;
  password: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  role?: 'admin' | 'user' | 'guest';
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Test data generator options
 */
export interface DataGeneratorOptions {
  count?: number;
  overrides?: Record<string, any>;
}

/**
 * Viewport preset type
 */
export type ViewportPreset = 
  | 'mobile'
  | 'mobileSmall'
  | 'mobileLarge'
  | 'tablet'
  | 'tabletLandscape'
  | 'desktop'
  | 'desktopLarge'
  | 'desktopXL';

/**
 * Environment type
 */
export type Environment = 'local' | 'development' | 'staging' | 'production' | 'ci';

/**
 * Selector type
 */
export type SelectorType = 
  | 'testid'
  | 'role'
  | 'placeholder'
  | 'text'
  | 'label'
  | 'name'
  | 'class'
  | 'id';

/**
 * HTTP method type
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Test status type
 */
export type TestStatus = 'passed' | 'failed' | 'pending' | 'skipped';

/**
 * Screenshot options
 */
export interface ScreenshotOptions {
  name?: string;
  capture?: 'viewport' | 'fullPage' | 'runner';
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

/**
 * Intercept options
 */
export interface InterceptOptions {
  alias?: string;
  delay?: number;
  statusCode?: number;
  times?: number;
}

/**
 * Test context
 */
export interface TestContext {
  user?: TestUser;
  token?: string;
  data?: Record<string, any>;
  currentPage?: string;
}

export {};