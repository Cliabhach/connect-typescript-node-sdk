"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogIdMapping {
    static getAttributeTypeMap() {
        return CatalogIdMapping.attributeTypeMap;
    }
}
CatalogIdMapping.discriminator = undefined;
CatalogIdMapping.attributeTypeMap = [
    {
        "name": "clientObjectId",
        "baseName": "client_object_id",
        "type": "string"
    },
    {
        "name": "objectId",
        "baseName": "object_id",
        "type": "string"
    }
];
exports.CatalogIdMapping = CatalogIdMapping;
//# sourceMappingURL=catalogIdMapping.js.map