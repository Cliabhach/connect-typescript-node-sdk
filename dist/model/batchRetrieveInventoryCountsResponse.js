"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveInventoryCountsResponse {
    static getAttributeTypeMap() {
        return BatchRetrieveInventoryCountsResponse.attributeTypeMap;
    }
}
BatchRetrieveInventoryCountsResponse.discriminator = undefined;
BatchRetrieveInventoryCountsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "counts",
        "baseName": "counts",
        "type": "Array<InventoryCount>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.BatchRetrieveInventoryCountsResponse = BatchRetrieveInventoryCountsResponse;
//# sourceMappingURL=batchRetrieveInventoryCountsResponse.js.map