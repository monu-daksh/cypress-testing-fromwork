"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = void 0;
exports.testData = {
    contactForm: {
        valid: {
            name: 'John Doe',
            email: 'john.doe@test.com',
            phone: '555-123-4567',
            message: 'This is a test message',
            subject: 'Test Subject',
        },
        invalid: {
            name: '',
            email: 'invalid-email',
            phone: '123',
            message: '',
            subject: '',
        },
    },
    products: [
        {
            id: 'prod-1',
            name: 'Product 1',
            description: 'Description for product 1',
            price: 99.99,
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 'prod-2',
            name: 'Product 2',
            description: 'Description for product 2',
            price: 149.99,
            category: 'Clothing',
            inStock: false,
        },
    ],
    addresses: {
        us: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'USA',
        },
        uk: {
            street: '456 High Street',
            city: 'London',
            postCode: 'SW1A 1AA',
            country: 'UK',
        },
    },
    paymentCards: {
        visa: {
            number: '4111111111111111',
            cvv: '123',
            expiryMonth: '12',
            expiryYear: '2025',
            name: 'Test User',
        },
        mastercard: {
            number: '5500000000000004',
            cvv: '456',
            expiryMonth: '11',
            expiryYear: '2026',
            name: 'Test User',
        },
    },
    dateRanges: {
        lastWeek: {
            start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            end: new Date(),
        },
        lastMonth: {
            start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            end: new Date(),
        },
    },
    searchQueries: {
        common: ['test', 'product', 'user', 'admin'],
        special: ['@#$%', '"><script>', 'null', 'undefined'],
        long: 'a'.repeat(500),
    },
};
exports.default = exports.testData;
//# sourceMappingURL=test-data.fixture.js.map