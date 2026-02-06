"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDataManager = exports.customLogger = void 0;
exports.customLogger = {
    name: 'custom-logger',
    setup(on) {
        on('task', {
            customLog(message) {
                const timestamp = new Date().toISOString();
                console.log(`[${timestamp}] ${message}`);
                return null;
            },
        });
    },
};
exports.testDataManager = {
    name: 'test-data-manager',
    setup(on) {
        const testData = {};
        on('task', {
            'data:set'({ key, value }) {
                testData[key] = value;
                return null;
            },
            'data:get'(key) {
                return testData[key] || null;
            },
            'data:clear'() {
                Object.keys(testData).forEach(key => delete testData[key]);
                return null;
            },
        });
    },
};
exports.default = {
    customLogger: exports.customLogger,
    testDataManager: exports.testDataManager,
};
//# sourceMappingURL=index.js.map