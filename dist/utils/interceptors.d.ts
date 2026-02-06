import type { InterceptOptions } from '../support/types';
export declare class ApiInterceptors {
    static mockGet(url: string, response: any, options?: InterceptOptions): void;
    static mockPost(url: string, response: any, options?: InterceptOptions): void;
    static mockFailure(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, statusCode?: number, options?: InterceptOptions): void;
    static interceptAndWait(method: string, url: string, alias?: string): Cypress.Chainable<Cypress.Interception>;
    static mockMultiple(mocks: Array<{
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        url: string;
        response: any;
        statusCode?: number;
        alias?: string;
    }>): void;
    static simulateSlowNetwork(url: string, delay?: number): void;
    static simulateNetworkError(url: string): void;
    static mockDynamic(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, handler: (req: any) => any, alias?: string): void;
    static spy(method: string, url: string, alias?: string): void;
    static waitForMultiple(aliases: string[]): Cypress.Chainable<Cypress.Interception[]>;
}
export default ApiInterceptors;
//# sourceMappingURL=interceptors.d.ts.map