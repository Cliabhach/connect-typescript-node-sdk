"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryAdjustmentResponse {
    static getAttributeTypeMap() {
        return RetrieveInventoryAdjustmentResponse.attributeTypeMap;
    }
}
RetrieveInventoryAdjustmentResponse.discriminator = undefined;
RetrieveInventoryAdjustmentResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "adjustment",
        "baseName": "adjustment",
        "type": "InventoryAdjustment"
    }
];
exports.RetrieveInventoryAdjustmentResponse = RetrieveInventoryAdjustmentResponse;
//# sourceMappingURL=retrieveInventoryAdjustmentResponse.js.map