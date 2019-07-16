"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveInventoryChangesResponse {
    static getAttributeTypeMap() {
        return BatchRetrieveInventoryChangesResponse.attributeTypeMap;
    }
}
BatchRetrieveInventoryChangesResponse.discriminator = undefined;
BatchRetrieveInventoryChangesResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "changes",
        "baseName": "changes",
        "type": "Array<InventoryChange>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.BatchRetrieveInventoryChangesResponse = BatchRetrieveInventoryChangesResponse;
//# sourceMappingURL=batchRetrieveInventoryChangesResponse.js.map