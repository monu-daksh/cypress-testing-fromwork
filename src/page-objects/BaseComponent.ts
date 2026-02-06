/**
 * Base Component class for reusable UI components
 * Use for components like modals, dropdowns, forms, etc.
 * 
 * Future additions:
 * - Component state validation
 * - Event tracking
 * - Animation wait utilities
 */

export abstract class BaseComponent {
  protected abstract rootSelector: string;

  /**
   * Get root element of component
   */
  protected getRoot(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.rootSelector);
  }

  /**
   * Get element within component
   */
  protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getRoot().find(selector);
  }

  /**
   * Verify component is visible
   */
  isVisible(): void {
    this.getRoot().should('be.visible');
  }

  /**
   * Verify component is not visible
   */
  isNotVisible(): void {
    this.getRoot().should('not.be.visible');
  }

  /**
   * Wait for component to appear
   */
  waitForVisible(timeout = 5000): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getRoot().should('be.visible', { timeout });
  }

  /**
   * Wait for component to disappear
   */
  waitForHidden(timeout = 5000): void {
    this.getRoot().should('not.be.visible', { timeout });
  }

  /**
   * Click within component
   */
  protected clickElement(selector: string): void {
    this.getElement(selector).click();
  }

  /**
   * Type into component element
   */
  protected typeIntoElement(selector: string, text: string): void {
    this.getElement(selector).clear().type(text);
  }
}

export default BaseComponent;