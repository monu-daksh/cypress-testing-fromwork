"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
class BaseComponent {
    getRoot() {
        return cy.get(this.rootSelector);
    }
    getElement(selector) {
        return this.getRoot().find(selector);
    }
    isVisible() {
        this.getRoot().should('be.visible');
    }
    isNotVisible() {
        this.getRoot().should('not.be.visible');
    }
    waitForVisible(timeout = 5000) {
        return this.getRoot().should('be.visible', { timeout });
    }
    waitForHidden(timeout = 5000) {
        this.getRoot().should('not.be.visible', { timeout });
    }
    clickElement(selector) {
        this.getElement(selector).click();
    }
    typeIntoElement(selector, text) {
        this.getElement(selector).clear().type(text);
    }
}
exports.BaseComponent = BaseComponent;
exports.default = BaseComponent;
//# sourceMappingURL=BaseComponent.js.map