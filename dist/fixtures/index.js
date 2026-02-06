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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = exports.apiResponses = exports.users = void 0;
__exportStar(require("./users.fixture"), exports);
__exportStar(require("./api-responses.fixture"), exports);
__exportStar(require("./test-data.fixture"), exports);
var users_fixture_1 = require("./users.fixture");
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return __importDefault(users_fixture_1).default; } });
var api_responses_fixture_1 = require("./api-responses.fixture");
Object.defineProperty(exports, "apiResponses", { enumerable: true, get: function () { return __importDefault(api_responses_fixture_1).default; } });
var test_data_fixture_1 = require("./test-data.fixture");
Object.defineProperty(exports, "testData", { enumerable: true, get: function () { return __importDefault(test_data_fixture_1).default; } });
//# sourceMappingURL=index.js.map