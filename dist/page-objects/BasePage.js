"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
class BasePage {
    visit(options) {
        cy.visit(this.pageUrl, options);
        this.waitForPageLoad();
    }
    verifyUrl() {
        cy.url().should('include', this.pageUrl);
    }
    verifyTitle() {
        if (this.pageTitle) {
            cy.title().should('include', this.pageTitle);
        }
    }
    waitForPageLoad() {
        cy.get('body').should('be.visible');
        cy.get('[data-testid="loading"]', { timeout: 10000 }).should('not.exist');
        cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');
        cy.document().should('have.property', 'readyState').and('eq', 'complete');
    }
    getElement(selector) {
        return cy.get(selector);
    }
    getByTestId(testId) {
        return cy.getByTestId(testId);
    }
    clickElement(selector) {
        this.getElement(selector).should('be.visible').click();
    }
    typeIntoElement(selector, text, options) {
        this.getElement(selector).should('be.visible').clear().type(text, options);
    }
    selectOption(selector, value) {
        this.getElement(selector).select(value);
    }
    checkCheckbox(selector) {
        this.getElement(selector).check();
    }
    uncheckCheckbox(selector) {
        this.getElement(selector).uncheck();
    }
    getElementText(selector) {
        return this.getElement(selector).invoke('text');
    }
    verifyElementVisible(selector) {
        this.getElement(selector).should('be.visible');
    }
    verifyElementNotVisible(selector) {
        this.getElement(selector).should('not.be.visible');
    }
    verifyElementText(selector, text) {
        this.getElement(selector).should('contain', text);
    }
    waitForElement(selector, timeout = 10000) {
        return cy.get(selector, { timeout }).should('exist');
    }
    scrollToElement(selector) {
        this.getElement(selector).scrollIntoView();
    }
    takeScreenshot(name) {
        const screenshotName = name || `${this.constructor.name}-${Date.now()}`;
        cy.screenshot(screenshotName);
    }
    reload() {
        cy.reload();
        this.waitForPageLoad();
    }
}
exports.BasePage = BasePage;
exports.default = BasePage;
//# sourceMappingURL=BasePage.js.map