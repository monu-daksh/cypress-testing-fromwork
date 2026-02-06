/**
 * User test data fixtures
 * 
 * Future additions:
 * - Different user roles/permissions
 * - User groups
 * - Multi-tenant users
 */

export interface UserFixture {
  id?: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  isActive?: boolean;
}

export const users = {
  admin: {
    email: 'admin@test.com',
    password: 'Admin@123456',
    name: 'Admin User',
    role: 'admin' as const,
    isActive: true,
  },
  standardUser: {
    email: 'user@test.com',
    password: 'User@123456',
    name: 'Standard User',
    role: 'user' as const,
    isActive: true,
  },
  guest: {
    email: 'guest@test.com',
    password: 'Guest@123456',
    name: 'Guest User',
    role: 'guest' as const,
    isActive: true,
  },
  inactiveUser: {
    email: 'inactive@test.com',
    password: 'Inactive@123456',
    name: 'Inactive User',
    role: 'user' as const,
    isActive: false,
  },
};

export const invalidUsers = {
  invalidEmail: {
    email: 'invalid-email',
    password: 'Test@123456',
    name: 'Invalid Email',
    role: 'user' as const,
  },
  weakPassword: {
    email: 'test@test.com',
    password: '123',
    name: 'Weak Password',
    role: 'user' as const,
  },
  missingFields: {
    email: '',
    password: '',
    name: '',
    role: 'user' as const,
  },
};

export default users;