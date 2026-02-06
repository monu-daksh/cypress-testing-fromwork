/**
 * Viewport presets for different devices
 * 
 * Future additions:
 * - More device presets
 * - Orientation support
 * - Custom viewport builder
 */

export interface ViewportConfig {
  width: number;
  height: number;
  deviceScaleFactor?: number;
}

export const viewports = {
  // Mobile devices
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
  
  // Tablets
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
  
  // Desktop
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
  
  // Specific devices
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

/**
 * Set viewport by preset name
 */
export const setViewport = (preset: keyof typeof viewports): void => {
  const config = viewports[preset];
  cy.viewport(config.width, config.height);
};

/**
 * Test across multiple viewports
 */
export const testAcrossViewports = (
  viewportList: Array<keyof typeof viewports>,
  testFn: () => void
): void => {
  viewportList.forEach((viewport) => {
    context(`Viewport: ${viewport}`, () => {
      beforeEach(() => {
        setViewport(viewport);
      });
      
      testFn();
    });
  });
};

export default viewports;