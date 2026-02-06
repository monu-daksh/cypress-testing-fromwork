/// <reference types="cypress" />

/**
 * DOM-related custom commands for enhanced element interaction
 * 
 * Future additions:
 * - Multi-select operations
 * - Drag and drop utilities
 * - Shadow DOM support
 * - iFrame handling
 * - Canvas/SVG interactions
 */

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get element by data-testid attribute
       * @param testId - The test ID value
       * @example cy.getByTestId('submit-button')
       */
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Get element by role and optional name
       * @param role - ARIA role
       * @param name - Optional accessible name
       * @example cy.getByRole('button', 'Submit')
       */
      getByRole(role: string, name?: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Type with configurable delay for better stability
       * @param text - Text to type
       * @param options - Typing options
       * @example cy.get('input').typeSlowly('Hello World')
       */
      typeSlowly(text: string, options?: Partial<Cypress.TypeOptions>): Chainable<JQuery<HTMLElement>>;

      /**
       * Wait for element to be stable (no position changes)
       * @param timeout - Maximum wait time in ms
       * @example cy.get('.dropdown').waitForStable()
       */
      waitForStable(timeout?: number): Chainable<JQuery<HTMLElement>>;

      /**
       * Click and wait for navigation to complete
       * @example cy.get('a').clickAndWaitForNav()
       */
      clickAndWaitForNav(): Chainable<JQuery<HTMLElement>>;

      /**
       * Scroll element into view with offset
       * @param offset - Offset from top
       * @example cy.get('.section').scrollIntoViewWithOffset(100)
       */
      scrollIntoViewWithOffset(offset?: number): Chainable<JQuery<HTMLElement>>;

      /**
       * Check if element is in viewport
       * @example cy.get('.hero').shouldBeInViewport()
       */
      shouldBeInViewport(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// Get by data-testid
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

// Get by role
Cypress.Commands.add('getByRole', (role: string, name?: string) => {
  if (name) {
    return cy.get(`[role="${role}"]`).contains(name);
  }
  return cy.get(`[role="${role}"]`);
});

// Type slowly for stability
Cypress.Commands.add(
  'typeSlowly',
  { prevSubject: true },
  (subject, text: string, options: Partial<Cypress.TypeOptions> = {}) => {
    return cy.wrap(subject).type(text, { delay: 100, ...options });
  }
);

// Wait for element stability
Cypress.Commands.add(
  'waitForStable',
  { prevSubject: true },
  (subject, timeout = 1000) => {
    let lastPosition: DOMRect | null = null;
    let stableCount = 0;
    const requiredStableChecks = 3;

    const checkStability = (): boolean => {
      const element = subject[0];
      const rect = element.getBoundingClientRect();

      if (lastPosition) {
        const isStable =
          lastPosition.top === rect.top &&
          lastPosition.left === rect.left &&
          lastPosition.width === rect.width &&
          lastPosition.height === rect.height;

        if (isStable) {
          stableCount++;
        } else {
          stableCount = 0;
        }
      }

      lastPosition = rect;
      return stableCount >= requiredStableChecks;
    };

    cy.wrap(subject, { timeout }).should(() => {
      cy.wait(50); // Small delay between checks
      expect(checkStability()).to.be.true;
    });

    return cy.wrap(subject);
  }
);

// Click and wait for navigation
Cypress.Commands.add(
  'clickAndWaitForNav',
  { prevSubject: true },
  (subject) => {
    const initialUrl = cy.url();
    cy.wrap(subject).click();
    cy.url().should('not.eq', initialUrl);
    return cy.wrap(subject);
  }
);

// Scroll into view with offset
Cypress.Commands.add(
  'scrollIntoViewWithOffset',
  { prevSubject: true },
  (subject, offset = 0) => {
    return cy.wrap(subject).scrollIntoView().then(($el) => {
      const elementTop = $el[0].getBoundingClientRect().top;
      const offsetPosition = elementTop + window.pageYOffset - offset;

      cy.window().then((win) => {
        win.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      });

      return cy.wrap($el);
    });
  }
);

// Check if element is in viewport
Cypress.Commands.add(
  'shouldBeInViewport',
  { prevSubject: true },
  (subject) => {
    cy.wrap(subject).should(($el) => {
      const rect = $el[0].getBoundingClientRect();
      const windowHeight = Cypress.config('viewportHeight');
      const windowWidth = Cypress.config('viewportWidth');

      expect(rect.top).to.be.at.least(0);
      expect(rect.left).to.be.at.least(0);
      expect(rect.bottom).to.be.at.most(windowHeight);
      expect(rect.right).to.be.at.most(windowWidth);
    });

    return cy.wrap(subject);
  }
);

export {};