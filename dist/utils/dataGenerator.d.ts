export declare class DataGenerator {
    static generateUser(overrides?: Partial<any>): any;
    static generateProduct(overrides?: Partial<any>): any;
    static generateAddress(overrides?: Partial<any>): any;
    static generateCreditCard(): any;
    static generateArray<T>(generator: (index: number) => T, count: number): T[];
    static generateId(prefix?: string): string;
    static generateLoremIpsum(sentences?: number): string;
}
export default DataGenerator;
//# sourceMappingURL=dataGenerator.d.ts.map