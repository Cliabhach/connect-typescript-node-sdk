"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchUpsertCatalogObjectsRequest {
    static getAttributeTypeMap() {
        return BatchUpsertCatalogObjectsRequest.attributeTypeMap;
    }
}
BatchUpsertCatalogObjectsRequest.discriminator = undefined;
BatchUpsertCatalogObjectsRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "batches",
        "baseName": "batches",
        "type": "Array<CatalogObjectBatch>"
    }
];
exports.BatchUpsertCatalogObjectsRequest = BatchUpsertCatalogObjectsRequest;
//# sourceMappingURL=batchUpsertCatalogObjectsRequest.js.map