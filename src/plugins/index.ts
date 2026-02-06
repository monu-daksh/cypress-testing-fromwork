/**
 * Custom Cypress plugins
 * 
 * Future additions:
 * - Screenshot comparison plugin
 * - Performance testing plugin
 * - Custom reporter plugin
 */

/**
 * Example: Custom logger plugin
 */
export const customLogger = {
  name: 'custom-logger',
  
  setup(on: Cypress.PluginEvents) {
    on('task', {
      customLog(message: string) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
        return null;
      },
    });
  },
};

/**
 * Example: Test data manager plugin
 */
export const testDataManager = {
  name: 'test-data-manager',
  
  setup(on: Cypress.PluginEvents) {
    const testData: Record<string, any> = {};
    
    on('task', {
      'data:set'({ key, value }: { key: string; value: any }) {
        testData[key] = value;
        return null;
      },
      
      'data:get'(key: string) {
        return testData[key] || null;
      },
      
      'data:clear'() {
        Object.keys(testData).forEach(key => delete testData[key]);
        return null;
      },
    });
  },
};

export default {
  customLogger,
  testDataManager,
};