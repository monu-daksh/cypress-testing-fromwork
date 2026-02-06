import type { Interception } from 'cypress/types/net-stubbing';

declare global {
  namespace Cypress {
    type Interception = Interception;
  }
}

export {};
