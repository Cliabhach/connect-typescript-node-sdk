"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchDeleteCatalogObjectsResponse {
    static getAttributeTypeMap() {
        return BatchDeleteCatalogObjectsResponse.attributeTypeMap;
    }
}
BatchDeleteCatalogObjectsResponse.discriminator = undefined;
BatchDeleteCatalogObjectsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "deletedObjectIds",
        "baseName": "deleted_object_ids",
        "type": "Array<string>"
    },
    {
        "name": "deletedAt",
        "baseName": "deleted_at",
        "type": "string"
    }
];
exports.BatchDeleteCatalogObjectsResponse = BatchDeleteCatalogObjectsResponse;
//# sourceMappingURL=batchDeleteCatalogObjectsResponse.js.map