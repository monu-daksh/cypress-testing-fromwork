"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidUsers = exports.users = void 0;
exports.users = {
    admin: {
        email: 'admin@test.com',
        password: 'Admin@123456',
        name: 'Admin User',
        role: 'admin',
        isActive: true,
    },
    standardUser: {
        email: 'user@test.com',
        password: 'User@123456',
        name: 'Standard User',
        role: 'user',
        isActive: true,
    },
    guest: {
        email: 'guest@test.com',
        password: 'Guest@123456',
        name: 'Guest User',
        role: 'guest',
        isActive: true,
    },
    inactiveUser: {
        email: 'inactive@test.com',
        password: 'Inactive@123456',
        name: 'Inactive User',
        role: 'user',
        isActive: false,
    },
};
exports.invalidUsers = {
    invalidEmail: {
        email: 'invalid-email',
        password: 'Test@123456',
        name: 'Invalid Email',
        role: 'user',
    },
    weakPassword: {
        email: 'test@test.com',
        password: '123',
        name: 'Weak Password',
        role: 'user',
    },
    missingFields: {
        email: '',
        password: '',
        name: '',
        role: 'user',
    },
};
exports.default = exports.users;
//# sourceMappingURL=users.fixture.js.map