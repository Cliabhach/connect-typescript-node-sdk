"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogV1Id {
    static getAttributeTypeMap() {
        return CatalogV1Id.attributeTypeMap;
    }
}
CatalogV1Id.discriminator = undefined;
CatalogV1Id.attributeTypeMap = [
    {
        "name": "catalogV1Id",
        "baseName": "catalog_v1_id",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    }
];
exports.CatalogV1Id = CatalogV1Id;
//# sourceMappingURL=catalogV1Id.js.map