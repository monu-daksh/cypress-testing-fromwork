export declare class Selectors {
    static byTestId(testId: string): string;
    static byRole(role: string, name?: string): string;
    static byPlaceholder(text: string): string;
    static byText(text: string): string;
    static byAriaLabel(label: string): string;
    static byName(name: string): string;
    static byType(type: string): string;
    static byClass(className: string): string;
    static byId(id: string): string;
    static combine(...selectors: string[]): string;
    static nthChild(selector: string, index: number): string;
    static firstChild(selector: string): string;
    static lastChild(selector: string): string;
}
export default Selectors;
//# sourceMappingURL=selectors.d.ts.map