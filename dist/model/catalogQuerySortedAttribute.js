"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQuerySortedAttribute {
    static getAttributeTypeMap() {
        return CatalogQuerySortedAttribute.attributeTypeMap;
    }
}
CatalogQuerySortedAttribute.discriminator = undefined;
CatalogQuerySortedAttribute.attributeTypeMap = [
    {
        "name": "attributeName",
        "baseName": "attribute_name",
        "type": "string"
    },
    {
        "name": "initialAttributeValue",
        "baseName": "initial_attribute_value",
        "type": "string"
    },
    {
        "name": "sortOrder",
        "baseName": "sort_order",
        "type": "string"
    }
];
exports.CatalogQuerySortedAttribute = CatalogQuerySortedAttribute;
//# sourceMappingURL=catalogQuerySortedAttribute.js.map