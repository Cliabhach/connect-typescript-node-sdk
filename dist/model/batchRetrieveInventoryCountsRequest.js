"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveInventoryCountsRequest {
    static getAttributeTypeMap() {
        return BatchRetrieveInventoryCountsRequest.attributeTypeMap;
    }
}
BatchRetrieveInventoryCountsRequest.discriminator = undefined;
BatchRetrieveInventoryCountsRequest.attributeTypeMap = [
    {
        "name": "catalogObjectIds",
        "baseName": "catalog_object_ids",
        "type": "Array<string>"
    },
    {
        "name": "locationIds",
        "baseName": "location_ids",
        "type": "Array<string>"
    },
    {
        "name": "updatedAfter",
        "baseName": "updated_after",
        "type": "string"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.BatchRetrieveInventoryCountsRequest = BatchRetrieveInventoryCountsRequest;
//# sourceMappingURL=batchRetrieveInventoryCountsRequest.js.map