"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQueryRange {
    static getAttributeTypeMap() {
        return CatalogQueryRange.attributeTypeMap;
    }
}
CatalogQueryRange.discriminator = undefined;
CatalogQueryRange.attributeTypeMap = [
    {
        "name": "attributeName",
        "baseName": "attribute_name",
        "type": "string"
    },
    {
        "name": "attributeMinValue",
        "baseName": "attribute_min_value",
        "type": "number"
    },
    {
        "name": "attributeMaxValue",
        "baseName": "attribute_max_value",
        "type": "number"
    }
];
exports.CatalogQueryRange = CatalogQueryRange;
//# sourceMappingURL=catalogQueryRange.js.map