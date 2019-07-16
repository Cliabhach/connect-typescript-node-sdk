"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1UpdateOrderRequest {
    static getAttributeTypeMap() {
        return V1UpdateOrderRequest.attributeTypeMap;
    }
}
V1UpdateOrderRequest.discriminator = undefined;
V1UpdateOrderRequest.attributeTypeMap = [
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "shippedTrackingNumber",
        "baseName": "shipped_tracking_number",
        "type": "string"
    },
    {
        "name": "completedNote",
        "baseName": "completed_note",
        "type": "string"
    },
    {
        "name": "refundedNote",
        "baseName": "refunded_note",
        "type": "string"
    },
    {
        "name": "canceledNote",
        "baseName": "canceled_note",
        "type": "string"
    }
];
exports.V1UpdateOrderRequest = V1UpdateOrderRequest;
//# sourceMappingURL=v1UpdateOrderRequest.js.map