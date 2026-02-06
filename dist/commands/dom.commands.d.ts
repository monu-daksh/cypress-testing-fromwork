declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
            getByRole(role: string, name?: string): Chainable<JQuery<HTMLElement>>;
            typeSlowly(text: string, options?: Partial<Cypress.TypeOptions>): Chainable<JQuery<HTMLElement>>;
            waitForStable(timeout?: number): Chainable<JQuery<HTMLElement>>;
            clickAndWaitForNav(): Chainable<JQuery<HTMLElement>>;
            scrollIntoViewWithOffset(offset?: number): Chainable<JQuery<HTMLElement>>;
            shouldBeInViewport(): Chainable<JQuery<HTMLElement>>;
        }
    }
}
export {};
//# sourceMappingURL=dom.commands.d.ts.map