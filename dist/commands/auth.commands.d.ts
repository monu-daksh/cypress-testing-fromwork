declare global {
    namespace Cypress {
        interface Chainable {
            loginViaApi(credentials: LoginCredentials): Chainable<void>;
            loginViaUI(credentials: LoginCredentials): Chainable<void>;
            registerViaApi(credentials: RegisterCredentials): Chainable<Response<any>>;
            logout(): Chainable<void>;
            isAuthenticated(): Chainable<boolean>;
            setAuthToken(token: string): Chainable<void>;
            getAuthToken(): Chainable<string | null>;
        }
    }
}
export {};
//# sourceMappingURL=auth.commands.d.ts.map