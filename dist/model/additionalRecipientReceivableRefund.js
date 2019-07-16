"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdditionalRecipientReceivableRefund {
    static getAttributeTypeMap() {
        return AdditionalRecipientReceivableRefund.attributeTypeMap;
    }
}
AdditionalRecipientReceivableRefund.discriminator = undefined;
AdditionalRecipientReceivableRefund.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "receivableId",
        "baseName": "receivable_id",
        "type": "string"
    },
    {
        "name": "refundId",
        "baseName": "refund_id",
        "type": "string"
    },
    {
        "name": "transactionLocationId",
        "baseName": "transaction_location_id",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    }
];
exports.AdditionalRecipientReceivableRefund = AdditionalRecipientReceivableRefund;
//# sourceMappingURL=additionalRecipientReceivableRefund.js.map