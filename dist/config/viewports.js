"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAcrossViewports = exports.setViewport = exports.viewports = void 0;
exports.viewports = {
    mobile: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
    },
    mobileSmall: {
        width: 320,
        height: 568,
        deviceScaleFactor: 2,
    },
    mobileLarge: {
        width: 414,
        height: 896,
        deviceScaleFactor: 3,
    },
    tablet: {
        width: 768,
        height: 1024,
        deviceScaleFactor: 2,
    },
    tabletLandscape: {
        width: 1024,
        height: 768,
        deviceScaleFactor: 2,
    },
    desktop: {
        width: 1280,
        height: 720,
        deviceScaleFactor: 1,
    },
    desktopLarge: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    },
    desktopXL: {
        width: 2560,
        height: 1440,
        deviceScaleFactor: 1,
    },
    iPhoneSE: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
    },
    iPhone12: {
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
    },
    iPhone14Pro: {
        width: 393,
        height: 852,
        deviceScaleFactor: 3,
    },
    iPadMini: {
        width: 768,
        height: 1024,
        deviceScaleFactor: 2,
    },
    iPadPro: {
        width: 1024,
        height: 1366,
        deviceScaleFactor: 2,
    },
    macBookPro: {
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
    },
};
const setViewport = (preset) => {
    const config = exports.viewports[preset];
    cy.viewport(config.width, config.height);
};
exports.setViewport = setViewport;
const testAcrossViewports = (viewportList, testFn) => {
    viewportList.forEach((viewport) => {
        context(`Viewport: ${viewport}`, () => {
            beforeEach(() => {
                (0, exports.setViewport)(viewport);
            });
            testFn();
        });
    });
};
exports.testAcrossViewports = testAcrossViewports;
exports.default = exports.viewports;
//# sourceMappingURL=viewports.js.map