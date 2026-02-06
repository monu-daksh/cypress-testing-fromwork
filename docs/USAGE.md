# Usage Guide

Comprehensive guide for using the Cypress Testing Framework.

## Quick Start

### 1. Installation
```bash
npm install --save-dev @your-org/cypress-testing-framework cypress
```

### 2. Configuration

Create `cypress.config.ts`:
```typescript
import { defineConfig } from 'cypress';
import { baseConfig } from '@your-org/cypress-testing-framework';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'http://localhost:3000',
  },
});
```

### 3. Import in Support File

Create `cypress/support/e2e.ts`:
```typescript
import '@your-org/cypress-testing-framework';
```

### 4. Write Your First Test

Create `cypress/e2e/first-test.cy.ts`:
```typescript
describe('My First Test', () => {
  it('visits the app', () => {
    cy.visit('/');
    cy.getByTestId('title').should('be.visible');
  });
});
```

## Common Patterns

### Authentication
```typescript
import { users } from '@your-org/cypress-testing-framework';

describe('Auth Flow', () => {
  it('should login via API (fast)', () => {
    cy.loginViaApi(users.admin);
    cy.visit('/dashboard');
  });

  it('should login via UI (full flow)', () => {
    cy.loginViaUI(users.standardUser);
    cy.url().should('include', '/dashboard');
  });
});
```

### API Testing
```typescript
describe('API Tests', () => {
  beforeEach(() => {
    cy.loginViaApi(users.admin);
  });

  it('should fetch users', () => {
    cy.apiGet('/users')
      .shouldHaveStatus(200)
      .then(response => {
        expect(response.body.users).to.be.an('array');
      });
  });

  it('should create user', () => {
    cy.apiPost('/users', {
      name: 'New User',
      email: 'new@test.com',
    }).shouldHaveStatus(201);
  });
});
```

### Page Object Model
```typescript
import { BasePage } from '@your-org/cypress-testing-framework';

class DashboardPage extends BasePage {
  protected pageUrl = '/dashboard';

  getWelcomeMessage() {
    return this.getByTestId('welcome-message');
  }

  clickProfile() {
    this.clickElement('[data-testid="profile-button"]');
  }
}

// Usage
const dashboard = new DashboardPage();
dashboard.visit();
dashboard.getWelcomeMessage().should('be.visible');
```

### API Mocking
```typescript
import { ApiInterceptors, apiResponses } from '@your-org/cypress-testing-framework';

it('should handle slow API', () => {
  ApiInterceptors.mockGet('/api/users', apiResponses.usersList.body, {
    delay: 3000,
    alias: 'getUsers',
  });

  cy.visit('/users');
  cy.get('[data-testid="loading"]').should('be.visible');
  cy.wait('@getUsers');
  cy.get('[data-testid="loading"]').should('not.exist');
});
```

### Responsive Testing
```typescript
import { viewports } from '@your-org/cypress-testing-framework';

['mobile', 'tablet', 'desktop'].forEach(viewport => {
  it(`should work on ${viewport}`, () => {
    const config = viewports[viewport];
    cy.viewport(config.width, config.height);
    cy.visit('/');
    cy.getByTestId('header').shouldBeInViewport();
  });
});
```

## Best Practices

### 1. Use Test IDs
```typescript
// ✅ Good
cy.getByTestId('submit-button').click();

// ❌ Avoid
cy.get('.btn.btn-primary.submit').click();
```

### 2. Login via API
```typescript
// ✅ Good - Fast
beforeEach(() => {
  cy.loginViaApi(users.admin);
  cy.visit('/dashboard');
});

// ❌ Slow - UI login every test
beforeEach(() => {
  cy.visit('/login');
  cy.get('[name="email"]').type(users.admin.email);
  cy.get('[name="password"]').type(users.admin.password);
  cy.get('button[type="submit"]').click();
});
```

### 3. Use Page Objects
```typescript
// ✅ Good - Reusable
const loginPage = new LoginPage();
loginPage.visit();
loginPage.login(email, password);

// ❌ Avoid - Repetitive
cy.visit('/login');
cy.get('[name="email"]').type(email);
cy.get('[name="password"]').type(password);
cy.get('button').click();
```

### 4. Generate Test Data
```typescript
// ✅ Good - Unique data
const user = DataGenerator.generateUser();
cy.registerViaApi(user);

// ❌ Avoid - Hardcoded data
cy.registerViaApi({
  email: 'test@test.com',
  password: 'password123',
});
```

## Advanced Usage

### Custom Commands

Add project-specific commands:
```typescript
// cypress/support/commands.ts
Cypress.Commands.add('selectProduct', (productId: string) => {
  cy.getByTestId(`product-${productId}`).click();
  cy.getByTestId('add-to-cart').click();
});

// Usage
cy.selectProduct('123');
```

### Environment Configuration
```typescript
// cypress.config.ts
export default defineConfig({
  e2e: {
    ...baseConfig.e2e,
    env: {
      apiUrl: process.env.API_URL || 'http://localhost:4000',
      environment: process.env.ENV || 'local',
    },
  },
});

// Usage in tests
cy.apiGet(`${Cypress.env('apiUrl')}/users`);
```

### Custom Hooks
```typescript
// cypress/support/e2e.ts
import '@your-org/cypress-testing-framework';

beforeEach(() => {
  // Project-specific setup
  cy.clearLocalStorage();
  cy.task('db:seed');
});

afterEach(() => {
  // Project-specific cleanup
  cy.task('db:cleanup');
});
```

## Troubleshooting

### Tests timing out

Increase timeouts:
```typescript
cy.get('[data-testid="slow-element"]', { timeout: 30000 })
  .should('be.visible');
```

### Flaky tests

Use `waitForStable()`:
```typescript
cy.get('.dropdown')
  .waitForStable()
  .click();
```

### API errors

Mock API responses:
```typescript
ApiInterceptors.mockFailure('GET', '/api/users', 500);
cy.visit('/users');
cy.getByTestId('error-message').should('be.visible');
```