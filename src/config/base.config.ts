/**
 * Base Cypress configuration
 * Projects can extend this configuration
 * 
 * Future additions:
 * - Multiple config profiles (dev, staging, prod)
 * - Feature flags
 * - Browser-specific configs
 */

import { defineConfig } from 'cypress';

export const baseConfig = defineConfig({
  e2e: {
    // Base URL - override in project
    baseUrl: 'http://localhost:3000',
    
    // Viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Video and screenshots
    video: false,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
    
    // Test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    
    // Retries
    retries: {
      runMode: 2,
      openMode: 0,
    },
    
    // Browser
    chromeWebSecurity: false,
    
    // Experiment features
    experimentalStudio: false,
    experimentalWebKitSupport: false,
    
    // Node events
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // This is where you can add plugins
      
      // Example: code coverage
      // require('@cypress/code-coverage/task')(on, config);
      
      return config;
    },
  },
  
  component: {
    devServer: {
      framework: 'react', // or 'vue', 'angular'
      bundler: 'vite', // or 'webpack'
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
});

export default baseConfig;