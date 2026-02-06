/**
 * Base Page Object Model class
 * All page objects should extend this class
 * 
 * Future additions:
 * - Screenshot capture methods
 * - Performance monitoring
 * - Accessibility checks
 * - Visual regression
 */

export abstract class BasePage {
  protected abstract pageUrl: string;
  protected abstract pageTitle?: string;

  /**
   * Visit the page
   */
  visit(options?: Partial<Cypress.VisitOptions>): void {
    cy.visit(this.pageUrl, options);
    this.waitForPageLoad();
  }

  /**
   * Verify current URL matches page URL
   */
  verifyUrl(): void {
    cy.url().should('include', this.pageUrl);
  }

  /**
   * Verify page title
   */
  verifyTitle(): void {
    if (this.pageTitle) {
      cy.title().should('include', this.pageTitle);
    }
  }

  /**
   * Wait for page to fully load
   */
  waitForPageLoad(): void {
    cy.get('body').should('be.visible');
    
    // Wait for common loading indicators to disappear
    cy.get('[data-testid="loading"]', { timeout: 10000 }).should('not.exist');
    cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');
    
    // Verify document ready state
    cy.document().should('have.property', 'readyState').and('eq', 'complete');
  }

  /**
   * Get element by selector
   */
  protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  /**
   * Get element by test ID
   */
  protected getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId(testId);
  }

  /**
   * Click element
   */
  protected clickElement(selector: string): void {
    this.getElement(selector).should('be.visible').click();
  }

  /**
   * Type into element
   */
  protected typeIntoElement(selector: string, text: string, options?: Partial<Cypress.TypeOptions>): void {
    this.getElement(selector).should('be.visible').clear().type(text, options);
  }

  /**
   * Select dropdown option
   */
  protected selectOption(selector: string, value: string): void {
    this.getElement(selector).select(value);
  }

  /**
   * Check checkbox
   */
  protected checkCheckbox(selector: string): void {
    this.getElement(selector).check();
  }

  /**
   * Uncheck checkbox
   */
  protected uncheckCheckbox(selector: string): void {
    this.getElement(selector).uncheck();
  }

  /**
   * Get element text
   */
  protected getElementText(selector: string): Cypress.Chainable<string> {
    return this.getElement(selector).invoke('text');
  }

  /**
   * Verify element is visible
   */
  protected verifyElementVisible(selector: string): void {
    this.getElement(selector).should('be.visible');
  }

  /**
   * Verify element is not visible
   */
  protected verifyElementNotVisible(selector: string): void {
    this.getElement(selector).should('not.be.visible');
  }

  /**
   * Verify element contains text
   */
  protected verifyElementText(selector: string, text: string): void {
    this.getElement(selector).should('contain', text);
  }

  /**
   * Wait for element to appear
   */
  protected waitForElement(selector: string, timeout = 10000): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector, { timeout }).should('exist');
  }

  /**
   * Scroll to element
   */
  protected scrollToElement(selector: string): void {
    this.getElement(selector).scrollIntoView();
  }

  /**
   * Take screenshot of page
   */
  takeScreenshot(name?: string): void {
    const screenshotName = name || `${this.constructor.name}-${Date.now()}`;
    cy.screenshot(screenshotName);
  }

  /**
   * Reload page
   */
  reload(): void {
    cy.reload();
    this.waitForPageLoad();
  }
}

export default BasePage;