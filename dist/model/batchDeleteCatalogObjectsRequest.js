"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchDeleteCatalogObjectsRequest {
    static getAttributeTypeMap() {
        return BatchDeleteCatalogObjectsRequest.attributeTypeMap;
    }
}
BatchDeleteCatalogObjectsRequest.discriminator = undefined;
BatchDeleteCatalogObjectsRequest.attributeTypeMap = [
    {
        "name": "objectIds",
        "baseName": "object_ids",
        "type": "Array<string>"
    }
];
exports.BatchDeleteCatalogObjectsRequest = BatchDeleteCatalogObjectsRequest;
//# sourceMappingURL=batchDeleteCatalogObjectsRequest.js.map