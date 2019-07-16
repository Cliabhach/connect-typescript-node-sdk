"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchUpsertCatalogObjectsResponse {
    static getAttributeTypeMap() {
        return BatchUpsertCatalogObjectsResponse.attributeTypeMap;
    }
}
BatchUpsertCatalogObjectsResponse.discriminator = undefined;
BatchUpsertCatalogObjectsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "objects",
        "baseName": "objects",
        "type": "Array<CatalogObject>"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    },
    {
        "name": "idMappings",
        "baseName": "id_mappings",
        "type": "Array<CatalogIdMapping>"
    }
];
exports.BatchUpsertCatalogObjectsResponse = BatchUpsertCatalogObjectsResponse;
//# sourceMappingURL=batchUpsertCatalogObjectsResponse.js.map