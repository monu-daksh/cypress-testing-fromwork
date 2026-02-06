"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('getByTestId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`);
});
Cypress.Commands.add('getByRole', (role, name) => {
    if (name) {
        return cy.get(`[role="${role}"]`).contains(name);
    }
    return cy.get(`[role="${role}"]`);
});
Cypress.Commands.add('typeSlowly', { prevSubject: true }, (subject, text, options = {}) => {
    return cy.wrap(subject).type(text, { delay: 100, ...options });
});
Cypress.Commands.add('waitForStable', { prevSubject: true }, (subject, timeout = 1000) => {
    let lastPosition = null;
    let stableCount = 0;
    const requiredStableChecks = 3;
    const checkStability = () => {
        const element = subject[0];
        const rect = element.getBoundingClientRect();
        if (lastPosition) {
            const isStable = lastPosition.top === rect.top &&
                lastPosition.left === rect.left &&
                lastPosition.width === rect.width &&
                lastPosition.height === rect.height;
            if (isStable) {
                stableCount++;
            }
            else {
                stableCount = 0;
            }
        }
        lastPosition = rect;
        return stableCount >= requiredStableChecks;
    };
    cy.wrap(subject, { timeout }).should(() => {
        cy.wait(50);
        expect(checkStability()).to.be.true;
    });
    return cy.wrap(subject);
});
Cypress.Commands.add('clickAndWaitForNav', { prevSubject: true }, (subject) => {
    const initialUrl = cy.url();
    cy.wrap(subject).click();
    cy.url().should('not.eq', initialUrl);
    return cy.wrap(subject);
});
Cypress.Commands.add('scrollIntoViewWithOffset', { prevSubject: true }, (subject, offset = 0) => {
    return cy.wrap(subject).scrollIntoView().then(($el) => {
        const elementTop = $el[0].getBoundingClientRect().top;
        const offsetPosition = elementTop + window.pageYOffset - offset;
        cy.window().then((win) => {
            win.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        });
        return cy.wrap($el);
    });
});
Cypress.Commands.add('shouldBeInViewport', { prevSubject: true }, (subject) => {
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
});
//# sourceMappingURL=dom.commands.js.map