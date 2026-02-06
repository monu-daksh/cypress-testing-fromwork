export declare const testData: {
    contactForm: {
        valid: {
            name: string;
            email: string;
            phone: string;
            message: string;
            subject: string;
        };
        invalid: {
            name: string;
            email: string;
            phone: string;
            message: string;
            subject: string;
        };
    };
    products: {
        id: string;
        name: string;
        description: string;
        price: number;
        category: string;
        inStock: boolean;
    }[];
    addresses: {
        us: {
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        };
        uk: {
            street: string;
            city: string;
            postCode: string;
            country: string;
        };
    };
    paymentCards: {
        visa: {
            number: string;
            cvv: string;
            expiryMonth: string;
            expiryYear: string;
            name: string;
        };
        mastercard: {
            number: string;
            cvv: string;
            expiryMonth: string;
            expiryYear: string;
            name: string;
        };
    };
    dateRanges: {
        lastWeek: {
            start: Date;
            end: Date;
        };
        lastMonth: {
            start: Date;
            end: Date;
        };
    };
    searchQueries: {
        common: string[];
        special: string[];
        long: string;
    };
};
export default testData;
//# sourceMappingURL=test-data.fixture.d.ts.map