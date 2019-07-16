"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateRefundRequest {
    static getAttributeTypeMap() {
        return CreateRefundRequest.attributeTypeMap;
    }
}
CreateRefundRequest.discriminator = undefined;
CreateRefundRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "tenderId",
        "baseName": "tender_id",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    }
];
exports.CreateRefundRequest = CreateRefundRequest;
//# sourceMappingURL=createRefundRequest.js.map