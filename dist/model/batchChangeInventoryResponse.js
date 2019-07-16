"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchChangeInventoryResponse {
    static getAttributeTypeMap() {
        return BatchChangeInventoryResponse.attributeTypeMap;
    }
}
BatchChangeInventoryResponse.discriminator = undefined;
BatchChangeInventoryResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "counts",
        "baseName": "counts",
        "type": "Array<InventoryCount>"
    }
];
exports.BatchChangeInventoryResponse = BatchChangeInventoryResponse;
//# sourceMappingURL=batchChangeInventoryResponse.js.map