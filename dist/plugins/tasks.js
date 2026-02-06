"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
exports.tasks = {
    'file:read'(filepath) {
        try {
            return fs.readFileSync(filepath, 'utf-8');
        }
        catch (error) {
            console.error('Error reading file:', error);
            return null;
        }
    },
    'file:write'({ filepath, content }) {
        try {
            const dir = path.dirname(filepath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(filepath, content, 'utf-8');
            return true;
        }
        catch (error) {
            console.error('Error writing file:', error);
            return false;
        }
    },
    'file:delete'(filepath) {
        try {
            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
            }
            return true;
        }
        catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    },
    'data:generate'(type) {
        const generators = {
            uuid: () => {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    const r = Math.random() * 16 | 0;
                    const v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
            email: () => `test.${Date.now()}@example.com`,
            timestamp: () => Date.now(),
        };
        return generators[type] ? generators[type]() : null;
    },
    'wait'(ms) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(null), ms);
        });
    },
    'log:timestamp'(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
        return null;
    },
};
exports.default = exports.tasks;
//# sourceMappingURL=tasks.js.map