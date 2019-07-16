"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveInventoryChangesRequest {
    static getAttributeTypeMap() {
        return BatchRetrieveInventoryChangesRequest.attributeTypeMap;
    }
}
BatchRetrieveInventoryChangesRequest.discriminator = undefined;
BatchRetrieveInventoryChangesRequest.attributeTypeMap = [
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
        "name": "types",
        "baseName": "types",
        "type": "Array<string>"
    },
    {
        "name": "states",
        "baseName": "states",
        "type": "Array<string>"
    },
    {
        "name": "updatedAfter",
        "baseName": "updated_after",
        "type": "string"
    },
    {
        "name": "updatedBefore",
        "baseName": "updated_before",
        "type": "string"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.BatchRetrieveInventoryChangesRequest = BatchRetrieveInventoryChangesRequest;
//# sourceMappingURL=batchRetrieveInventoryChangesRequest.js.map