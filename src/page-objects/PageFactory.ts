/**
 * Factory pattern for creating page objects
 * Ensures only one instance per page exists (singleton)
 * 
 * Future additions:
 * - Lazy loading of pages
 * - Page cache management
 * - Dependency injection
 */

type Constructor<T> = new (...args: any[]) => T;

export class PageFactory {
  private static instances: Map<string, any> = new Map();

  /**
   * Get or create page object instance
   */
  static getPage<T>(PageClass: Constructor<T>): T {
    const className = PageClass.name;
    
    if (!this.instances.has(className)) {
      this.instances.set(className, new PageClass());
    }
    
    return this.instances.get(className);
  }

  /**
   * Clear all cached page instances
   */
  static clearCache(): void {
    this.instances.clear();
  }

  /**
   * Clear specific page instance
   */
  static clearPage<T>(PageClass: Constructor<T>): void {
    this.instances.delete(PageClass.name);
  }
}

export default PageFactory;