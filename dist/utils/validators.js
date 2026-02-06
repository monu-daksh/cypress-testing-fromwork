"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
class Validators {
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
    static isValidPhoneNumber(phone) {
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        const digitsOnly = phone.replace(/\D/g, '');
        return phoneRegex.test(phone) && digitsOnly.length === 10;
    }
    static isStrongPassword(password) {
        const errors = [];
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain an uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain a lowercase letter');
        }
        if (!/[0-9]/.test(password)) {
            errors.push('Password must contain a number');
        }
        if (!/[!@#$%^&*]/.test(password)) {
            errors.push('Password must contain a special character');
        }
        return {
            isValid: errors.length === 0,
            errors,
        };
    }
    static isValidCreditCard(cardNumber) {
        const digits = cardNumber.replace(/\D/g, '');
        if (digits.length < 13 || digits.length > 19) {
            return false;
        }
        let sum = 0;
        let isEven = false;
        for (let i = digits.length - 1; i >= 0; i--) {
            let digit = digits.charCodeAt(i) - 48;
            if (isEven) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            sum += digit;
            isEven = !isEven;
        }
        return sum % 10 === 0;
    }
    static isValidZipCode(zip) {
        const zipRegex = /^\d{5}(-\d{4})?$/;
        return zipRegex.test(zip);
    }
    static isValidDate(date, format = 'YYYY-MM-DD') {
        const formats = {
            'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
            'MM/DD/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
            'DD/MM/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
        };
        const regex = formats[format];
        if (!regex || !regex.test(date)) {
            return false;
        }
        const parsed = new Date(date);
        return parsed instanceof Date && !isNaN(parsed.getTime());
    }
    static isValidJson(str) {
        try {
            JSON.parse(str);
            return true;
        }
        catch {
            return false;
        }
    }
}
exports.Validators = Validators;
exports.default = Validators;
//# sourceMappingURL=validators.js.map