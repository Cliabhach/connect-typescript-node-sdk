"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdditionalRecipientReceivable {
    static getAttributeTypeMap() {
        return AdditionalRecipientReceivable.attributeTypeMap;
    }
}
AdditionalRecipientReceivable.discriminator = undefined;
AdditionalRecipientReceivable.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "transactionId",
        "baseName": "transaction_id",
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
    },
    {
        "name": "refunds",
        "baseName": "refunds",
        "type": "Array<AdditionalRecipientReceivableRefund>"
    }
];
exports.AdditionalRecipientReceivable = AdditionalRecipientReceivable;
//# sourceMappingURL=additionalRecipientReceivable.js.map