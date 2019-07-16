"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1CreateRefundRequest {
    static getAttributeTypeMap() {
        return V1CreateRefundRequest.attributeTypeMap;
    }
}
V1CreateRefundRequest.discriminator = undefined;
V1CreateRefundRequest.attributeTypeMap = [
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "refundedMoney",
        "baseName": "refunded_money",
        "type": "V1Money"
    },
    {
        "name": "requestIdempotenceKey",
        "baseName": "request_idempotence_key",
        "type": "string"
    }
];
exports.V1CreateRefundRequest = V1CreateRefundRequest;
//# sourceMappingURL=v1CreateRefundRequest.js.map