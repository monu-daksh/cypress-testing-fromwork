export type { LoginCredentials } from '../types/cypress';
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
export type ViewportPreset = 'mobile' | 'tablet' | 'desktop' | 'desktopLarge' | 'desktopXL';
export interface TestContext {
    user?: TestUser;
    token?: string;
    data?: Record<string, any>;
}
export {};
//# sourceMappingURL=types.d.ts.map