"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGenerator = void 0;
class DataGenerator {
    static generateUser(overrides = {}) {
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
    static generateProduct(overrides = {}) {
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
    static generateAddress(overrides = {}) {
        return {
            street: `${Math.floor(Math.random() * 9999)} Main St`,
            city: 'Test City',
            state: 'CA',
            zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
            country: 'USA',
            ...overrides,
        };
    }
    static generateCreditCard() {
        return {
            number: '4111111111111111',
            cvv: '123',
            expiryMonth: '12',
            expiryYear: '2025',
            name: 'Test User',
        };
    }
    static generateArray(generator, count) {
        return Array.from({ length: count }, (_, i) => generator(i));
    }
    static generateId(prefix = '') {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2, 9);
        return `${prefix}${timestamp}${random}`;
    }
    static generateLoremIpsum(sentences = 1) {
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
exports.DataGenerator = DataGenerator;
exports.default = DataGenerator;
//# sourceMappingURL=dataGenerator.js.map