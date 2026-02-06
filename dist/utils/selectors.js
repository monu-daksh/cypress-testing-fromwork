"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selectors = void 0;
class Selectors {
    static byTestId(testId) {
        return `[data-testid="${testId}"]`;
    }
    static byRole(role, name) {
        if (name) {
            return `[role="${role}"][aria-label*="${name}"]`;
        }
        return `[role="${role}"]`;
    }
    static byPlaceholder(text) {
        return `[placeholder*="${text}"]`;
    }
    static byText(text) {
        return `:contains("${text}")`;
    }
    static byAriaLabel(label) {
        return `[aria-label="${label}"]`;
    }
    static byName(name) {
        return `[name="${name}"]`;
    }
    static byType(type) {
        return `input[type="${type}"]`;
    }
    static byClass(className) {
        return `.${className}`;
    }
    static byId(id) {
        return `#${id}`;
    }
    static combine(...selectors) {
        return selectors.join('');
    }
    static nthChild(selector, index) {
        return `${selector}:nth-child(${index})`;
    }
    static firstChild(selector) {
        return `${selector}:first-child`;
    }
    static lastChild(selector) {
        return `${selector}:last-child`;
    }
}
exports.Selectors = Selectors;
exports.default = Selectors;
//# sourceMappingURL=selectors.js.map