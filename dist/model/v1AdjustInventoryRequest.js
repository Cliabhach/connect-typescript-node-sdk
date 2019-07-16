"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1AdjustInventoryRequest {
    static getAttributeTypeMap() {
        return V1AdjustInventoryRequest.attributeTypeMap;
    }
}
V1AdjustInventoryRequest.discriminator = undefined;
V1AdjustInventoryRequest.attributeTypeMap = [
    {
        "name": "quantityDelta",
        "baseName": "quantity_delta",
        "type": "number"
    },
    {
        "name": "adjustmentType",
        "baseName": "adjustment_type",
        "type": "string"
    },
    {
        "name": "memo",
        "baseName": "memo",
        "type": "string"
    }
];
exports.V1AdjustInventoryRequest = V1AdjustInventoryRequest;
//# sourceMappingURL=v1AdjustInventoryRequest.js.map