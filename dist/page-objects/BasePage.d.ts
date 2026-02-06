export declare abstract class BasePage {
    protected abstract pageUrl: string;
    protected abstract pageTitle?: string;
    visit(options?: Partial<Cypress.VisitOptions>): void;
    verifyUrl(): void;
    verifyTitle(): void;
    waitForPageLoad(): void;
    protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>>;
    protected getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>>;
    protected clickElement(selector: string): void;
    protected typeIntoElement(selector: string, text: string, options?: Partial<Cypress.TypeOptions>): void;
    protected selectOption(selector: string, value: string): void;
    protected checkCheckbox(selector: string): void;
    protected uncheckCheckbox(selector: string): void;
    protected getElementText(selector: string): Cypress.Chainable<string>;
    protected verifyElementVisible(selector: string): void;
    protected verifyElementNotVisible(selector: string): void;
    protected verifyElementText(selector: string, text: string): void;
    protected waitForElement(selector: string, timeout?: number): Cypress.Chainable<JQuery<HTMLElement>>;
    protected scrollToElement(selector: string): void;
    takeScreenshot(name?: string): void;
    reload(): void;
}
export default BasePage;
//# sourceMappingURL=BasePage.d.ts.map