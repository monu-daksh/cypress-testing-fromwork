export declare const apiResponses: {
    loginSuccess: {
        status: number;
        body: {
            token: string;
            user: {
                id: string;
                email: string;
                name: string;
                role: string;
            };
        };
    };
    usersList: {
        status: number;
        body: {
            users: {
                id: string;
                name: string;
                email: string;
            }[];
            total: number;
            page: number;
            pageSize: number;
        };
    };
    userDetail: {
        status: number;
        body: {
            id: string;
            name: string;
            email: string;
            role: string;
            createdAt: string;
            updatedAt: string;
        };
    };
    createSuccess: {
        status: number;
        body: {
            id: string;
            message: string;
        };
    };
    updateSuccess: {
        status: number;
        body: {
            message: string;
        };
    };
    deleteSuccess: {
        status: number;
        body: null;
    };
    unauthorized: {
        status: number;
        body: {
            error: string;
            message: string;
        };
    };
    forbidden: {
        status: number;
        body: {
            error: string;
            message: string;
        };
    };
    notFound: {
        status: number;
        body: {
            error: string;
            message: string;
        };
    };
    validationError: {
        status: number;
        body: {
            error: string;
            message: string;
            errors: {
                field: string;
                message: string;
            }[];
        };
    };
    serverError: {
        status: number;
        body: {
            error: string;
            message: string;
        };
    };
    paginatedList: (page?: number, pageSize?: number) => {
        status: number;
        body: {
            data: {
                id: string;
                name: string;
            }[];
            pagination: {
                page: number;
                pageSize: number;
                total: number;
                totalPages: number;
            };
        };
    };
};
export default apiResponses;
//# sourceMappingURL=api-responses.fixture.d.ts.map