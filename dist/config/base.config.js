"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseConfig = void 0;
const cypress_1 = require("cypress");
exports.baseConfig = (0, cypress_1.defineConfig)({
    e2e: {
        baseUrl: 'http://localhost:3000',
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        responseTimeout: 10000,
        pageLoadTimeout: 30000,
        video: false,
        videoCompression: 32,
        videosFolder: 'cypress/videos',
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        trashAssetsBeforeRuns: true,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.ts',
        fixturesFolder: 'cypress/fixtures',
        retries: {
            runMode: 2,
            openMode: 0,
        },
        chromeWebSecurity: false,
        experimentalStudio: false,
        experimentalWebKitSupport: false,
        setupNodeEvents(on, config) {
            return config;
        },
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component.ts',
    },
});
exports.default = exports.baseConfig;
//# sourceMappingURL=base.config.js.map