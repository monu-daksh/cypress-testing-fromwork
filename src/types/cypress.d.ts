/**
 * Cypress custom type definitions
 * Augment Cypress namespace with custom commands and types
 */

/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      
    // DOM Commands
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    getByRole(role: string, name?: string): Chainable<JQuery<HTMLElement>>;
    typeSlowly(text: string, options?: Partial<TypeOptions>): Chainable<JQuery<HTMLElement>>;
    waitForStable(timeout?: number): Chainable<JQuery<HTMLElement>>;
    clickAndWaitForNav(): Chainable<JQuery<HTMLElement>>;
    scrollIntoViewWithOffset(offset?: number): Chainable<JQuery<HTMLElement>>;
    shouldBeInViewport(): Chainable<JQuery<HTMLElement>>;

    // API Commands
    apiRequest(options: ApiRequestOptions): Chainable<Response<any>>;
    apiGet(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;
    apiPost(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
    apiPut(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
    apiPatch(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
    apiDelete(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;
    verifyResponseSchema(response: any, schema: Record<string, string>): Chainable<any>;

    // Auth Commands
    loginViaApi(credentials: LoginCredentials): Chainable<void>;
    loginViaUI(credentials: LoginCredentials): Chainable<void>;
    registerViaApi(credentials: RegisterCredentials): Chainable<Response<any>>;
    logout(): Chainable<void>;
    isAuthenticated(): Chainable<boolean>;
    setAuthToken(token: string): Chainable<void>;
    getAuthToken(): Chainable<string | null>;

    // Navigation Commands
    navigateTo(path: string, options?: Partial<VisitOptions>): Chainable<void>;
    goBack(): Chainable<void>;
    goForward(): Chainable<void>;
    reloadPage(forceReload?: boolean): Chainable<void>;
    verifyUrl(pattern: string | RegExp): Chainable<void>;
    waitForPageLoad(): Chainable<void>;

    // Assertion Commands
    shouldContainText(text: string): Chainable<JQuery<HTMLElement>>;
    shouldHaveExactText(text: string): Chainable<JQuery<HTMLElement>>;
    shouldBeEnabled(): Chainable<JQuery<HTMLElement>>;
    shouldBeDisabled(): Chainable<JQuery<HTMLElement>>;
    shouldHaveClass(className: string): Chainable<JQuery<HTMLElement>>;
    shouldHaveCount(count: number): Chainable<JQuery<HTMLElement>>;
    shouldHaveStatus(status: number): Chainable<Response<any>>;
    shouldHaveProperty(property: string): Chainable<any>;
  }

  interface ApiRequestOptions extends Partial<RequestOptions> {
    auth?: boolean;
    retries?: number;
  }

  interface LoginCredentials {
    email: string;
    password: string;
  }

  interface RegisterCredentials extends LoginCredentials {
    name?: string;
    confirmPassword?: string;
  }
}
}

export {};