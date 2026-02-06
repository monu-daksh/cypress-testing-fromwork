"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index");
const react_1 = require("cypress/react");
Cypress.Commands.add('mount', react_1.mount);
beforeEach(() => {
    cy.log(' Component Test Starting');
});
//# sourceMappingURL=component.js.map