# Custom Commands Reference

Complete list of all custom Cypress commands.

## DOM Commands

| Command | Description | Example |
|---------|-------------|---------|
| `getByTestId(testId)` | Get element by test ID | `cy.getByTestId('submit')` |
| `getByRole(role, name?)` | Get element by ARIA role | `cy.getByRole('button', 'Submit')` |
| `typeSlowly(text, options?)` | Type with delay | `cy.get('input').typeSlowly('text')` |
| `waitForStable(timeout?)` | Wait for element stability | `cy.get('.dropdown').waitForStable()` |
| `clickAndWaitForNav()` | Click and wait for navigation | `cy.get('a').clickAndWaitForNav()` |
| `scrollIntoViewWithOffset(offset?)` | Scroll with offset | `cy.get('.section').scrollIntoViewWithOffset(100)` |
| `shouldBeInViewport()` | Assert element in viewport | `cy.get('.hero').shouldBeInViewport()` |

## API Commands

| Command | Description | Example |
|---------|-------------|---------|
| `apiRequest(options)` | Make API request with auth | `cy.apiRequest({ method: 'GET', url: '/api' })` |
| `apiGet(url, options?)` | GET request | `cy.apiGet('/users')` |
| `apiPost(url, body?, options?)` | POST request | `cy.apiPost('/users', { name: 'John' })` |
| `apiPut(url, body?, options?)` | PUT request | `cy.apiPut('/users/1', { name: 'Jane' })` |
| `apiPatch(url, body?, options?)` | PATCH request | `cy.apiPatch('/users/1', { active: true })` |
| `apiDelete(url, options?)` | DELETE request | `cy.apiDelete('/users/1')` |
| `verifyResponseSchema(response, schema)` | Verify response structure | `cy.verifyResponseSchema(res, { id: 'number' })` |

## Authentication Commands

| Command | Description | Example |
|---------|-------------|---------|
| `loginViaApi(credentials)` | Login via API | `cy.loginViaApi({ email, password })` |
| `loginViaUI(credentials)` | Login via UI | `cy.loginViaUI({ email, password })` |
| `registerViaApi(credentials)` | Register user | `cy.registerViaApi({ email, password, name })` |
| `logout()` | Logout | `cy.logout()` |
| `isAuthenticated()` | Check auth status | `cy.isAuthenticated().should('be.true')` |
| `setAuthToken(token)` | Set token | `cy.setAuthToken('token123')` |
| `getAuthToken()` | Get token | `cy.getAuthToken().should('exist')` |

## Navigation Commands

| Command | Description | Example |
|---------|-------------|---------|
| `navigateTo(path, options?)` | Navigate to route | `cy.navigateTo('/dashboard')` |
| `goBack()` | Browser back | `cy.goBack()` |
| `goForward()` | Browser forward | `cy.goForward()` |
| `reloadPage(forceReload?)` | Reload page | `cy.reloadPage(true)` |
| `verifyUrl(pattern)` | Verify URL | `cy.verifyUrl('/dashboard')` |
| `waitForPageLoad()` | Wait for load | `cy.waitForPageLoad()` |

## Assertion Commands

| Command | Description | Example |
|---------|-------------|---------|
| `shouldContainText(text)` | Assert text (case-insensitive) | `cy.get('h1').shouldContainText('welcome')` |
| `shouldHaveExactText(text)` | Assert exact text | `cy.get('h1').shouldHaveExactText('Welcome')` |
| `shouldBeEnabled()` | Assert enabled | `cy.get('button').shouldBeEnabled()` |
| `shouldBeDisabled()` | Assert disabled | `cy.get('button').shouldBeDisabled()` |
| `shouldHaveClass(className)` | Assert has class | `cy.get('div').shouldHaveClass('active')` |
| `shouldHaveCount(count)` | Assert element count | `cy.get('.item').shouldHaveCount(5)` |
| `shouldHaveStatus(status)` | Assert API status | `cy.apiGet('/api').shouldHaveStatus(200)` |
| `shouldHaveProperty(property)` | Assert has property | `cy.wrap(obj).shouldHaveProperty('id')` |