# Cypress Testing Framework

A comprehensive, framework-agnostic Cypress testing library for modern JavaScript applications (React, Vue, Angular, etc.).

## 🚀 Features

- ✅ **Framework Agnostic** - Works with React, Vue, Angular, and any JavaScript framework
- 🎯 **Custom Commands** - Rich set of pre-built Cypress commands
- 📦 **Page Object Model** - Built-in support for POM pattern
- 🛠️ **Utilities** - Helper functions, validators, data generators
- 🎨 **TypeScript** - Full TypeScript support with type definitions
- 🔧 **Configurable** - Flexible configuration for different environments
- 📊 **Test Data Management** - Fixtures and data generators
- 🎭 **API Mocking** - Easy API interception and mocking
- 🔐 **Authentication** - Pre-built auth commands

## 📦 Installation
```bash
npm install --save-dev @axway/cypress-testing-framework cypress
```

or
```bash
yarn add --dev @axway/cypress-testing-framework cypress
```

## 🔧 Setup

### 1. Create Cypress Configuration

**cypress.config.ts:**
```typescript
import { defineConfig } from 'cypress';
import { baseConfig } from '@axway/cypress-testing-framework';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'http://localhost:3000',
  },
});
```

### 2. Import in Support File

**cypress/support/e2e.ts:**
```typescript
import '@axway/cypress-testing-framework';

// Your custom setup here
```

### 3. Start Writing Tests!

**cypress/e2e/example.cy.ts:**
```typescript
import { TestHelpers, Selectors } from '@your-org/cypress-testing-framework';

describe('Example Test', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    
    const email = TestHelpers.generateRandomEmail();
    
    cy.getByTestId('email-input').type(email);
    cy.getByTestId('password-input').type('password123');
    cy.getByTestId('login-button').click();
    
    cy.url().should('include', '/dashboard');
  });
});
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Custom Commands](./docs/COMMANDS.md)
- [Usage Guide](./docs/USAGE.md)
- [Examples](./examples/)

## 🎯 Custom Commands

### DOM Commands
- `cy.getByTestId(testId)` - Get element by test ID
- `cy.getByRole(role, name?)` - Get element by ARIA role
- `cy.typeSlowly(text)` - Type with delay for stability
- `cy.waitForStable()` - Wait for element position to stabilize

### API Commands
- `cy.apiGet(url)` - GET request with auth
- `cy.apiPost(url, body)` - POST request with auth
- `cy.apiPut(url, body)` - PUT request with auth
- `cy.apiDelete(url)` - DELETE request with auth

### Auth Commands
- `cy.loginViaApi(credentials)` - Login via API
- `cy.loginViaUI(credentials)` - Login via UI
- `cy.logout()` - Logout and clear session
- `cy.setAuthToken(token)` - Set auth token

[See full command list](./docs/COMMANDS.md)

## 🛠️ Utilities
```typescript
import { 
  TestHelpers, 
  Selectors, 
  Validators, 
  DataGenerator,
  ApiInterceptors 
} from '@your-org/cypress-testing-framework';

// Generate test data
const email = TestHelpers.generateRandomEmail();
const user = DataGenerator.generateUser();

// Validate data
Validators.isValidEmail(email);

// Mock API
ApiInterceptors.mockGet('/api/users', { users: [] });
```

## 📖 Page Object Model
```typescript
import { BasePage } from '@your-org/cypress-testing-framework';

export class LoginPage extends BasePage {
  protected pageUrl = '/login';
  
  login(email: string, password: string) {
    this.typeIntoElement('[data-testid="email"]', email);
    this.typeIntoElement('[data-testid="password"]', password);
    this.clickElement('[data-testid="submit"]');
  }
}
```

## 🔄 Integration Examples

### React
```typescript
// cypress.config.ts
import { defineConfig } from 'cypress';
import { baseConfig } from '@your-org/cypress-testing-framework';

export default defineConfig({
  ...baseConfig,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
```

### Vue
```typescript
export default defineConfig({
  ...baseConfig,
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

MIT © [Your Organization]

## 🐛 Issues

Report issues at [GitHub Issues](https://github.com/your-org/cypress-testing-framework/issues)

## 📞 Support

- 📧 Email: support@your-org.com
- 💬 Discord: [Join our community](https://discord.gg/your-invite)
- 📖 Documentation: [https://docs.your-org.com](https://docs.your-org.com)