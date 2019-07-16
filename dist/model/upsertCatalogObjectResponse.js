"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpsertCatalogObjectResponse {
    static getAttributeTypeMap() {
        return UpsertCatalogObjectResponse.attributeTypeMap;
    }
}
UpsertCatalogObjectResponse.discriminator = undefined;
UpsertCatalogObjectResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "catalogObject",
        "baseName": "catalog_object",
        "type": "CatalogObject"
    },
    {
        "name": "idMappings",
        "baseName": "id_mappings",
        "type": "Array<CatalogIdMapping>"
    }
];
exports.UpsertCatalogObjectResponse = UpsertCatalogObjectResponse;
//# sourceMappingURL=upsertCatalogObjectResponse.js.map