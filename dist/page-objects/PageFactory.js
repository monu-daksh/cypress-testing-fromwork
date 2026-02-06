"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFactory = void 0;
class PageFactory {
    static getPage(PageClass) {
        const className = PageClass.name;
        if (!this.instances.has(className)) {
            this.instances.set(className, new PageClass());
        }
        return this.instances.get(className);
    }
    static clearCache() {
        this.instances.clear();
    }
    static clearPage(PageClass) {
        this.instances.delete(PageClass.name);
    }
}
exports.PageFactory = PageFactory;
PageFactory.instances = new Map();
exports.default = PageFactory;
//# sourceMappingURL=PageFactory.js.map