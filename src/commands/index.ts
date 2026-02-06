/**
 * Central export for all custom Cypress commands
 * 
 * All commands are automatically registered when imported
 * This file should be imported in cypress/support/e2e.ts or component.ts
 */

// Import all command modules to register them
import './dom.commands';
import './api.commands';
import './auth.commands';
import './navigation.commands';
import './assertions.commands';

// Export for type checking
export {};