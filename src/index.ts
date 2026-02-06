/**
 * Main entry point for Cypress Testing Framework
 * 
 * This is the central hub that exports everything from the framework
 * Users import this package and get access to all features
 * 
 * Usage:
 * import { TestHelpers, Selectors, BasePage } from '@your-org/cypress-testing-framework';
 */

// Commands (auto-registered when imported)
import './commands';
export * from './commands';

// Support files
export * from './support';

// Utilities
export * from './utils';

// Page Objects
export * from './page-objects';

// Fixtures
export * from './fixtures';

// Constants
export * from './constants';

// Hooks
export * from './hooks';

// Configuration
export * from './config';

// Types
export * from './types';

// Plugins
export * from './plugins';

// Framework metadata
export const FRAMEWORK_VERSION = '1.0.0';
export const FRAMEWORK_NAME = 'Cypress Testing Framework';

/**
 * Initialize the framework with custom configuration
 */
export const initializeFramework = (config?: {
  enableDefaultHooks?: boolean;
  environment?: string;
  customCommands?: boolean;
}) => {
  const {
    enableDefaultHooks = true,
    environment = 'local',
    customCommands = true,
  } = config || {};

  // Log initialization
  cy.log(` ${FRAMEWORK_NAME} v${FRAMEWORK_VERSION} initialized`);
  
  if (environment) {
    cy.log(` Environment: ${environment}`);
  }

  return {
    version: FRAMEWORK_VERSION,
    name: FRAMEWORK_NAME,
    environment,
  };
};

// Default export
export default {
  version: FRAMEWORK_VERSION,
  name: FRAMEWORK_NAME,
  initialize: initializeFramework,
};