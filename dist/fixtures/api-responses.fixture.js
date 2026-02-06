"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponses = void 0;
exports.apiResponses = {
    loginSuccess: {
        status: 200,
        body: {
            token: 'mock-jwt-token-12345',
            user: {
                id: '1',
                email: 'user@test.com',
                name: 'Test User',
                role: 'user',
            },
        },
    },
    usersList: {
        status: 200,
        body: {
            users: [
                { id: '1', name: 'User 1', email: 'user1@test.com' },
                { id: '2', name: 'User 2', email: 'user2@test.com' },
                { id: '3', name: 'User 3', email: 'user3@test.com' },
            ],
            total: 3,
            page: 1,
            pageSize: 10,
        },
    },
    userDetail: {
        status: 200,
        body: {
            id: '1',
            name: 'Test User',
            email: 'user@test.com',
            role: 'user',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z',
        },
    },
    createSuccess: {
        status: 201,
        body: {
            id: 'new-id-123',
            message: 'Resource created successfully',
        },
    },
    updateSuccess: {
        status: 200,
        body: {
            message: 'Resource updated successfully',
        },
    },
    deleteSuccess: {
        status: 204,
        body: null,
    },
    unauthorized: {
        status: 401,
        body: {
            error: 'Unauthorized',
            message: 'Invalid credentials',
        },
    },
    forbidden: {
        status: 403,
        body: {
            error: 'Forbidden',
            message: 'You do not have permission to access this resource',
        },
    },
    notFound: {
        status: 404,
        body: {
            error: 'Not Found',
            message: 'Resource not found',
        },
    },
    validationError: {
        status: 422,
        body: {
            error: 'Validation Error',
            message: 'Invalid input data',
            errors: [
                { field: 'email', message: 'Email is required' },
                { field: 'password', message: 'Password must be at least 8 characters' },
            ],
        },
    },
    serverError: {
        status: 500,
        body: {
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
        },
    },
    paginatedList: (page = 1, pageSize = 10) => ({
        status: 200,
        body: {
            data: Array.from({ length: pageSize }, (_, i) => ({
                id: `${(page - 1) * pageSize + i + 1}`,
                name: `Item ${(page - 1) * pageSize + i + 1}`,
            })),
            pagination: {
                page,
                pageSize,
                total: 100,
                totalPages: Math.ceil(100 / pageSize),
            },
        },
    }),
};
exports.default = exports.apiResponses;
//# sourceMappingURL=api-responses.fixture.js.map