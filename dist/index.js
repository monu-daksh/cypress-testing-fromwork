"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFramework = exports.FRAMEWORK_NAME = exports.FRAMEWORK_VERSION = void 0;
require("./commands");
__exportStar(require("./commands"), exports);
__exportStar(require("./support"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./page-objects"), exports);
__exportStar(require("./fixtures"), exports);
__exportStar(require("./constants"), exports);
__exportStar(require("./hooks"), exports);
__exportStar(require("./config"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./plugins"), exports);
exports.FRAMEWORK_VERSION = '1.0.0';
exports.FRAMEWORK_NAME = 'Cypress Testing Framework';
const initializeFramework = (config) => {
    const { enableDefaultHooks = true, environment = 'local', customCommands = true, } = config || {};
    cy.log(` ${exports.FRAMEWORK_NAME} v${exports.FRAMEWORK_VERSION} initialized`);
    if (environment) {
        cy.log(` Environment: ${environment}`);
    }
    return {
        version: exports.FRAMEWORK_VERSION,
        name: exports.FRAMEWORK_NAME,
        environment,
    };
};
exports.initializeFramework = initializeFramework;
exports.default = {
    version: exports.FRAMEWORK_VERSION,
    name: exports.FRAMEWORK_NAME,
    initialize: exports.initializeFramework,
};
//# sourceMappingURL=index.js.map