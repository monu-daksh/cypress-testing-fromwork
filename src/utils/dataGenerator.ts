/**
 * Test data generation utilities
 * 
 * Future additions:
 * - Faker.js integration
 * - Realistic data generation (names, addresses, etc.)
 * - File generation (CSV, JSON, XML)
 * - Image generation
 */

export class DataGenerator {
  /**
   * Generate test user data
   */
  static generateUser(overrides: Partial<any> = {}): any {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);

    return {
      email: `test.${timestamp}.${random}@test.com`,
      password: 'Test@123456',
      name: `Test User ${timestamp}`,
      firstName: `Test`,
      lastName: `User${timestamp}`,
      ...overrides,
    };
  }

  /**
   * Generate product data
   */
  static generateProduct(overrides: Partial<any> = {}): any {
    const id = Math.random().toString(36).substring(7);
    
    return {
      id,
      name: `Product ${id}`,
      description: `Description for product ${id}`,
      price: Math.floor(Math.random() * 1000) + 1,
      quantity: Math.floor(Math.random() * 100) + 1,
      category: 'Electronics',
      ...overrides,
    };
  }

  /**
   * Generate address data
   */
  static generateAddress(overrides: Partial<any> = {}): any {
    return {
      street: `${Math.floor(Math.random() * 9999)} Main St`,
      city: 'Test City',
      state: 'CA',
      zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
      country: 'USA',
      ...overrides,
    };
  }

  /**
   * Generate credit card data (test only)
   */
  static generateCreditCard(): any {
    return {
      number: '4111111111111111', // Valid test Visa number
      cvv: '123',
      expiryMonth: '12',
      expiryYear: '2025',
      name: 'Test User',
    };
  }

  /**
   * Generate array of items
   */
  static generateArray<T>(
    generator: (index: number) => T,
    count: number
  ): T[] {
    return Array.from({ length: count }, (_, i) => generator(i));
  }

  /**
   * Generate unique ID
   */
  static generateId(prefix = ''): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9);
    return `${prefix}${timestamp}${random}`;
  }

  /**
   * Generate lorem ipsum text
   */
  static generateLoremIpsum(sentences = 1): string {
    const lorem = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Excepteur sint occaecat cupidatat non proident sunt in culpa.',
    ];

    return Array.from({ length: sentences }, (_, i) => lorem[i % lorem.length]).join(' ');
  }
}

export default DataGenerator;