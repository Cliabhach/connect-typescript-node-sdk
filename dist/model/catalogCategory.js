"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogCategory {
    static getAttributeTypeMap() {
        return CatalogCategory.attributeTypeMap;
    }
}
CatalogCategory.discriminator = undefined;
CatalogCategory.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.CatalogCategory = CatalogCategory;
//# sourceMappingURL=catalogCategory.js.map