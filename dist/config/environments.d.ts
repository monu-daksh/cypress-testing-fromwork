export interface EnvironmentConfig {
    name: string;
    baseUrl: string;
    apiUrl: string;
    timeout: number;
    retries: number;
    video: boolean;
}
export declare const environments: {
    local: {
        name: string;
        baseUrl: string;
        apiUrl: string;
        timeout: number;
        retries: number;
        video: boolean;
    };
    development: {
        name: string;
        baseUrl: string;
        apiUrl: string;
        timeout: number;
        retries: number;
        video: boolean;
    };
    staging: {
        name: string;
        baseUrl: string;
        apiUrl: string;
        timeout: number;
        retries: number;
        video: boolean;
    };
    production: {
        name: string;
        baseUrl: string;
        apiUrl: string;
        timeout: number;
        retries: number;
        video: boolean;
    };
    ci: {
        name: string;
        baseUrl: string;
        apiUrl: string;
        timeout: number;
        retries: number;
        video: boolean;
    };
};
export declare const getEnvironmentConfig: (envName?: keyof typeof environments) => EnvironmentConfig;
export declare const applyEnvironmentConfig: (envName?: keyof typeof environments) => void;
export default environments;
//# sourceMappingURL=environments.d.ts.map