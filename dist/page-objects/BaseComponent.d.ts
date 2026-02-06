export declare abstract class BaseComponent {
    protected abstract rootSelector: string;
    protected getRoot(): Cypress.Chainable<JQuery<HTMLElement>>;
    protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>>;
    isVisible(): void;
    isNotVisible(): void;
    waitForVisible(timeout?: number): Cypress.Chainable<JQuery<HTMLElement>>;
    waitForHidden(timeout?: number): void;
    protected clickElement(selector: string): void;
    protected typeIntoElement(selector: string, text: string): void;
}
export default BaseComponent;
//# sourceMappingURL=BaseComponent.d.ts.map