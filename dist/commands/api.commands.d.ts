interface ApiRequestOptions extends Partial<Cypress.RequestOptions> {
    auth?: boolean;
    retries?: number;
}
declare global {
    namespace Cypress {
        interface Chainable {
            apiRequest(options: ApiRequestOptions): Chainable<Response<any>>;
            apiGet(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;
            apiPost(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
            apiPut(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
            apiPatch(url: string, body?: any, options?: ApiRequestOptions): Chainable<Response<any>>;
            apiDelete(url: string, options?: ApiRequestOptions): Chainable<Response<any>>;
            verifyResponseSchema(response: any, schema: Record<string, string>): Chainable<any>;
        }
    }
}
export {};
//# sourceMappingURL=api.commands.d.ts.map