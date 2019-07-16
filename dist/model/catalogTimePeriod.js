"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogTimePeriod {
    static getAttributeTypeMap() {
        return CatalogTimePeriod.attributeTypeMap;
    }
}
CatalogTimePeriod.discriminator = undefined;
CatalogTimePeriod.attributeTypeMap = [
    {
        "name": "event",
        "baseName": "event",
        "type": "string"
    }
];
exports.CatalogTimePeriod = CatalogTimePeriod;
//# sourceMappingURL=catalogTimePeriod.js.map