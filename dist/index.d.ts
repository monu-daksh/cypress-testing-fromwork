import './commands';
export * from './commands';
export * from './support';
export * from './utils';
export * from './page-objects';
export * from './fixtures';
export * from './constants';
export * from './hooks';
export * from './config';
export * from './types';
export * from './plugins';
export declare const FRAMEWORK_VERSION = "1.0.0";
export declare const FRAMEWORK_NAME = "Cypress Testing Framework";
export declare const initializeFramework: (config?: {
    enableDefaultHooks?: boolean;
    environment?: string;
    customCommands?: boolean;
}) => {
    version: string;
    name: string;
    environment: string;
};
declare const _default: {
    version: string;
    name: string;
    initialize: (config?: {
        enableDefaultHooks?: boolean;
        environment?: string;
        customCommands?: boolean;
    }) => {
        version: string;
        name: string;
        environment: string;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map