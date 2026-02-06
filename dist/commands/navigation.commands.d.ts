declare global {
    namespace Cypress {
        interface Chainable {
            navigateTo(path: string, options?: Partial<Cypress.VisitOptions>): Chainable<void>;
            goBack(): Chainable<void>;
            goForward(): Chainable<void>;
            reloadPage(forceReload?: boolean): Chainable<void>;
            verifyUrl(pattern: string | RegExp): Chainable<void>;
            waitForPageLoad(): Chainable<void>;
        }
    }
}
export {};
//# sourceMappingURL=navigation.commands.d.ts.map