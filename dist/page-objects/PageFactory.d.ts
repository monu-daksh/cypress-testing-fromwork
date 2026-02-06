type Constructor<T> = new (...args: any[]) => T;
export declare class PageFactory {
    private static instances;
    static getPage<T>(PageClass: Constructor<T>): T;
    static clearCache(): void;
    static clearPage<T>(PageClass: Constructor<T>): void;
}
export default PageFactory;
//# sourceMappingURL=PageFactory.d.ts.map