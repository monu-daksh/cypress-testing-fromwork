export declare const API_ENDPOINTS: {
    AUTH: {
        LOGIN: string;
        LOGOUT: string;
        REGISTER: string;
        REFRESH: string;
        FORGOT_PASSWORD: string;
        RESET_PASSWORD: string;
        VERIFY_EMAIL: string;
    };
    USERS: {
        BASE: string;
        BY_ID: (id: string) => string;
        ME: string;
        UPDATE_PROFILE: string;
        UPDATE_PASSWORD: string;
        DELETE: (id: string) => string;
    };
    PRODUCTS: {
        BASE: string;
        BY_ID: (id: string) => string;
        CATEGORIES: string;
        SEARCH: string;
    };
    ORDERS: {
        BASE: string;
        BY_ID: (id: string) => string;
        CREATE: string;
        CANCEL: (id: string) => string;
    };
    HEALTH: string;
    VERSION: string;
};
export default API_ENDPOINTS;
//# sourceMappingURL=endpoints.constants.d.ts.map