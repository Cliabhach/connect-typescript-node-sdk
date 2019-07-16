"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchChangeInventoryRequest {
    static getAttributeTypeMap() {
        return BatchChangeInventoryRequest.attributeTypeMap;
    }
}
BatchChangeInventoryRequest.discriminator = undefined;
BatchChangeInventoryRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "changes",
        "baseName": "changes",
        "type": "Array<InventoryChange>"
    },
    {
        "name": "ignoreUnchangedCounts",
        "baseName": "ignore_unchanged_counts",
        "type": "boolean"
    }
];
exports.BatchChangeInventoryRequest = BatchChangeInventoryRequest;
//# sourceMappingURL=batchChangeInventoryRequest.js.map