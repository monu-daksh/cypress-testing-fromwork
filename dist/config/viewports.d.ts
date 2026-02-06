export interface ViewportConfig {
    width: number;
    height: number;
    deviceScaleFactor?: number;
}
export declare const viewports: {
    mobile: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    mobileSmall: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    mobileLarge: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    tablet: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    tabletLandscape: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    desktop: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    desktopLarge: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    desktopXL: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    iPhoneSE: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    iPhone12: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    iPhone14Pro: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    iPadMini: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    iPadPro: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
    macBookPro: {
        width: number;
        height: number;
        deviceScaleFactor: number;
    };
};
export declare const setViewport: (preset: keyof typeof viewports) => void;
export declare const testAcrossViewports: (viewportList: Array<keyof typeof viewports>, testFn: () => void) => void;
export default viewports;
//# sourceMappingURL=viewports.d.ts.map