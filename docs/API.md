# API Documentation

Complete API reference for Cypress Testing Framework.

## Table of Contents

- [Custom Commands](#custom-commands)
- [Utilities](#utilities)
- [Page Objects](#page-objects)
- [Configuration](#configuration)

## Custom Commands

### DOM Commands

#### `cy.getByTestId(testId: string)`

Get element by data-testid attribute.

**Parameters:**
- `testId` (string) - The test ID value

**Returns:** `Chainable<JQuery<HTMLElement>>`

**Example:**
```typescript
cy.getByTestId('submit-button').click();
```

#### `cy.getByRole(role: string, name?: string)`

Get element by ARIA role and optional name.

**Parameters:**
- `role` (string) - ARIA role
- `name` (string, optional) - Accessible name

**Returns:** `Chainable<JQuery<HTMLElement>>`

**Example:**
```typescript
cy.getByRole('button', 'Submit').click();
```

#### `cy.typeSlowly(text: string, options?: TypeOptions)`

Type with delay for better stability.

**Parameters:**
- `text` (string) - Text to type
- `options` (TypeOptions, optional) - Typing options

**Returns:** `Chainable<JQuery<HTMLElement>>`

**Example:**
```typescript
cy.get('input').typeSlowly('Hello World');
```

### API Commands

#### `cy.apiGet(url: string, options?: ApiRequestOptions)`

Make authenticated GET request.

**Parameters:**
- `url` (string) - Endpoint URL
- `options` (ApiRequestOptions, optional) - Request options

**Returns:** `Chainable<Response<any>>`

**Example:**
```typescript
cy.apiGet('/users/1')
  .shouldHaveStatus(200)
  .then(response => {
    expect(response.body).to.have.property('id');
  });
```

#### `cy.apiPost(url: string, body?: any, options?: ApiRequestOptions)`

Make authenticated POST request.

**Parameters:**
- `url` (string) - Endpoint URL
- `body` (any, optional) - Request body
- `options` (ApiRequestOptions, optional) - Request options

**Returns:** `Chainable<Response<any>>`

**Example:**
```typescript
cy.apiPost('/users', { name: 'John', email: 'john@test.com' })
  .shouldHaveStatus(201);
```

### Auth Commands

#### `cy.loginViaApi(credentials: LoginCredentials)`

Login via API (faster than UI).

**Parameters:**
- `credentials` (LoginCredentials) - Login credentials
  - `email` (string)
  - `password` (string)

**Returns:** `Chainable<void>`

**Example:**
```typescript
cy.loginViaApi({ email: 'user@test.com', password: 'password123' });
```

#### `cy.logout()`

Logout and clear all session data.

**Returns:** `Chainable<void>`

**Example:**
```typescript
cy.logout();
```

## Utilities

### TestHelpers

#### `TestHelpers.generateRandomEmail(domain?: string): string`

Generate random email address.

**Parameters:**
- `domain` (string, optional) - Email domain (default: 'test.com')

**Returns:** `string`

**Example:**
```typescript
const email = TestHelpers.generateRandomEmail();
// test.1234567890.abc123@test.com
```

#### `TestHelpers.generateRandomString(length?: number, charset?: string): string`

Generate random string.

**Parameters:**
- `length` (number, optional) - String length (default: 10)
- `charset` ('alphanumeric' | 'alphabetic' | 'numeric', optional)

**Returns:** `string`

**Example:**
```typescript
const str = TestHelpers.generateRandomString(15, 'alphanumeric');
```

### Selectors

#### `Selectors.byTestId(testId: string): string`

Get selector for test ID.

**Parameters:**
- `testId` (string) - Test ID value

**Returns:** `string`

**Example:**
```typescript
const selector = Selectors.byTestId('submit-button');
// '[data-testid="submit-button"]'
```

### Validators

#### `Validators.isValidEmail(email: string): boolean`

Validate email format.

**Parameters:**
- `email` (string) - Email to validate

**Returns:** `boolean`

**Example:**
```typescript
const isValid = Validators.isValidEmail('test@example.com'); // true
```

### DataGenerator

#### `DataGenerator.generateUser(overrides?: Partial<any>): any`

Generate test user data.

**Parameters:**
- `overrides` (object, optional) - Override default values

**Returns:** `object`

**Example:**
```typescript
const user = DataGenerator.generateUser({ role: 'admin' });
```

### ApiInterceptors

#### `ApiInterceptors.mockGet(url: string, response: any, options?: InterceptOptions): void`

Mock GET request.

**Parameters:**
- `url` (string) - URL to intercept
- `response` (any) - Mock response
- `options` (InterceptOptions, optional)
  - `alias` (string) - Intercept alias
  - `delay` (number) - Response delay
  - `statusCode` (number) - Status code

**Example:**
```typescript
ApiInterceptors.mockGet('/api/users', { users: [] }, { alias: 'getUsers' });
cy.wait('@getUsers');
```

## Page Objects

### BasePage

Base class for page objects.

**Abstract Properties:**
- `pageUrl` (string) - Page URL path

**Methods:**

#### `visit(options?: VisitOptions): void`

Visit the page.

#### `verifyUrl(): void`

Verify current URL matches page URL.

#### `waitForPageLoad(): void`

Wait for page to fully load.

**Example:**
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

// Usage
const loginPage = new LoginPage();
loginPage.visit();
loginPage.login('user@test.com', 'password123');
```

## Configuration

### baseConfig

Base Cypress configuration object.

**Example:**
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

### viewports

Viewport presets for different devices.

**Available Presets:**
- `mobile` - 375x667
- `tablet` - 768x1024
- `desktop` - 1280x720
- `desktopLarge` - 1920x1080

**Example:**
```typescript
import { viewports } from '@your-org/cypress-testing-framework';

cy.viewport(viewports.mobile.width, viewports.mobile.height);
```