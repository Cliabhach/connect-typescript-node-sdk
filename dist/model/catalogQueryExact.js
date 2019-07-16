"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQueryExact {
    static getAttributeTypeMap() {
        return CatalogQueryExact.attributeTypeMap;
    }
}
CatalogQueryExact.discriminator = undefined;
CatalogQueryExact.attributeTypeMap = [
    {
        "name": "attributeName",
        "baseName": "attribute_name",
        "type": "string"
    },
    {
        "name": "attributeValue",
        "baseName": "attribute_value",
        "type": "string"
    }
];
exports.CatalogQueryExact = CatalogQueryExact;
//# sourceMappingURL=catalogQueryExact.js.map