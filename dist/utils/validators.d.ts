export declare class Validators {
    static isValidEmail(email: string): boolean;
    static isValidUrl(url: string): boolean;
    static isValidPhoneNumber(phone: string): boolean;
    static isStrongPassword(password: string): {
        isValid: boolean;
        errors: string[];
    };
    static isValidCreditCard(cardNumber: string): boolean;
    static isValidZipCode(zip: string): boolean;
    static isValidDate(date: string, format?: string): boolean;
    static isValidJson(str: string): boolean;
}
export default Validators;
//# sourceMappingURL=validators.d.ts.map