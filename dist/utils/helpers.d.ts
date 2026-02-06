export declare class TestHelpers {
    static generateRandomEmail(domain?: string): string;
    static generateRandomString(length?: number, charset?: string): string;
    static generateRandomNumber(min?: number, max?: number): number;
    static waitForNetworkIdle(timeout?: number): Cypress.Chainable<void>;
    static formatCurrency(amount: number, currency?: string): string;
    static formatDate(date: Date | string, format?: string): string;
    static deepClone<T>(obj: T): T;
    static sleep(ms: number): Cypress.Chainable<undefined>;
    static retryUntil<T>(fn: () => Cypress.Chainable<T>, condition: (value: T) => boolean, options?: {
        maxRetries?: number;
        delay?: number;
    }): Cypress.Chainable<T>;
}
export default TestHelpers;
//# sourceMappingURL=helpers.d.ts.map