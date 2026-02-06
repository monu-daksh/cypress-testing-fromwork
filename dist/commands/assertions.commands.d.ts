declare global {
    namespace Cypress {
        interface Chainable {
            shouldContainText(text: string): Chainable<JQuery<HTMLElement>>;
            shouldHaveExactText(text: string): Chainable<JQuery<HTMLElement>>;
            shouldBeEnabled(): Chainable<JQuery<HTMLElement>>;
            shouldBeDisabled(): Chainable<JQuery<HTMLElement>>;
            shouldHaveClass(className: string): Chainable<JQuery<HTMLElement>>;
            shouldHaveCount(count: number): Chainable<JQuery<HTMLElement>>;
            shouldHaveStatus(status: number): Chainable<Response<any>>;
            shouldHaveProperty(property: string): Chainable<any>;
        }
    }
}
export {};
//# sourceMappingURL=assertions.commands.d.ts.map