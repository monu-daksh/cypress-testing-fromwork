/**
 * Selector utility functions for consistent element selection
 * 
 * Future additions:
 * - Regex-based selectors
 * - Complex attribute selectors
 * - Custom data attribute helpers
 */

export class Selectors {
  /**
   * Get selector for data-testid attribute
   */
  static byTestId(testId: string): string {
    return `[data-testid="${testId}"]`;
  }

  /**
   * Get selector for ARIA role
   */
  static byRole(role: string, name?: string): string {
    if (name) {
      return `[role="${role}"][aria-label*="${name}"]`;
    }
    return `[role="${role}"]`;
  }

  /**
   * Get selector for placeholder text
   */
  static byPlaceholder(text: string): string {
    return `[placeholder*="${text}"]`;
  }

  /**
   * Get selector for text content
   */
  static byText(text: string): string {
    return `:contains("${text}")`;
  }

  /**
   * Get selector for aria-label
   */
  static byAriaLabel(label: string): string {
    return `[aria-label="${label}"]`;
  }

  /**
   * Get selector for input name attribute
   */
  static byName(name: string): string {
    return `[name="${name}"]`;
  }

  /**
   * Get selector for input type
   */
  static byType(type: string): string {
    return `input[type="${type}"]`;
  }

  /**
   * Get selector for CSS class
   */
  static byClass(className: string): string {
    return `.${className}`;
  }

  /**
   * Get selector for ID
   */
  static byId(id: string): string {
    return `#${id}`;
  }

  /**
   * Combine multiple selectors
   */
  static combine(...selectors: string[]): string {
    return selectors.join('');
  }

  /**
   * Get nth child selector
   */
  static nthChild(selector: string, index: number): string {
    return `${selector}:nth-child(${index})`;
  }

  /**
   * Get first child selector
   */
  static firstChild(selector: string): string {
    return `${selector}:first-child`;
  }

  /**
   * Get last child selector
   */
  static lastChild(selector: string): string {
    return `${selector}:last-child`;
  }
}

export default Selectors;