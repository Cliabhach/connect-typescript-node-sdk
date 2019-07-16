"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Refund {
    static getAttributeTypeMap() {
        return Refund.attributeTypeMap;
    }
}
Refund.discriminator = undefined;
Refund.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "transactionId",
        "baseName": "transaction_id",
        "type": "string"
    },
    {
        "name": "tenderId",
        "baseName": "tender_id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
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
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "processingFeeMoney",
        "baseName": "processing_fee_money",
        "type": "Money"
    },
    {
        "name": "additionalRecipients",
        "baseName": "additional_recipients",
        "type": "Array<AdditionalRecipient>"
    }
];
exports.Refund = Refund;
//# sourceMappingURL=refund.js.map