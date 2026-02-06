export interface UserFixture {
    id?: string;
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user' | 'guest';
    isActive?: boolean;
}
export declare const users: {
    admin: {
        email: string;
        password: string;
        name: string;
        role: "admin";
        isActive: boolean;
    };
    standardUser: {
        email: string;
        password: string;
        name: string;
        role: "user";
        isActive: boolean;
    };
    guest: {
        email: string;
        password: string;
        name: string;
        role: "guest";
        isActive: boolean;
    };
    inactiveUser: {
        email: string;
        password: string;
        name: string;
        role: "user";
        isActive: boolean;
    };
};
export declare const invalidUsers: {
    invalidEmail: {
        email: string;
        password: string;
        name: string;
        role: "user";
    };
    weakPassword: {
        email: string;
        password: string;
        name: string;
        role: "user";
    };
    missingFields: {
        email: string;
        password: string;
        name: string;
        role: "user";
    };
};
export default users;
//# sourceMappingURL=users.fixture.d.ts.map