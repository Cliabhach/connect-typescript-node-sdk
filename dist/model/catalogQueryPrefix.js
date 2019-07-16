"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQueryPrefix {
    static getAttributeTypeMap() {
        return CatalogQueryPrefix.attributeTypeMap;
    }
}
CatalogQueryPrefix.discriminator = undefined;
CatalogQueryPrefix.attributeTypeMap = [
    {
        "name": "attributeName",
        "baseName": "attribute_name",
        "type": "string"
    },
    {
        "name": "attributePrefix",
        "baseName": "attribute_prefix",
        "type": "string"
    }
];
exports.CatalogQueryPrefix = CatalogQueryPrefix;
//# sourceMappingURL=catalogQueryPrefix.js.map