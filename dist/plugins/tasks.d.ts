export declare const tasks: {
    'file:read'(filepath: string): string | null;
    'file:write'({ filepath, content }: {
        filepath: string;
        content: string;
    }): boolean;
    'file:delete'(filepath: string): boolean;
    'data:generate'(type: string): any;
    wait(ms: number): null;
    'log:timestamp'(message: string): null;
};
export default tasks;
//# sourceMappingURL=tasks.d.ts.map