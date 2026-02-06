"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPlugins = exports.setupBrowserLaunchOptions = exports.setupCustomTasks = exports.setupCodeCoverage = void 0;
const setupCodeCoverage = (on, config) => {
};
exports.setupCodeCoverage = setupCodeCoverage;
const setupCustomTasks = (on) => {
    on('task', {
        log(message) {
            console.log(message);
            return null;
        },
        logTestMetric(metric) {
            console.log('Test Metric:', metric);
            return null;
        },
        'db:seed'() {
            console.log('Seeding database...');
            return null;
        },
        'db:cleanup'() {
            console.log('Cleaning up database...');
            return null;
        },
        'file:read'(filepath) {
            return null;
        },
        'file:write'({ filepath: _filepath, content: _content }) {
            return null;
        }
    });
};
exports.setupCustomTasks = setupCustomTasks;
const setupBrowserLaunchOptions = (on) => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--disable-gpu');
            launchOptions.args.push('--no-sandbox');
        }
        if (browser.family === 'firefox') {
            launchOptions.args.push('-private');
        }
        return launchOptions;
    });
};
exports.setupBrowserLaunchOptions = setupBrowserLaunchOptions;
const setupPlugins = (on, config) => {
    (0, exports.setupCustomTasks)(on);
    (0, exports.setupBrowserLaunchOptions)(on);
    return config;
};
exports.setupPlugins = setupPlugins;
exports.default = exports.setupPlugins;
//# sourceMappingURL=plugins.js.map