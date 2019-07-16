"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tender {
    static getAttributeTypeMap() {
        return Tender.attributeTypeMap;
    }
}
Tender.discriminator = undefined;
Tender.attributeTypeMap = [
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
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    },
    {
        "name": "tipMoney",
        "baseName": "tip_money",
        "type": "Money"
    },
    {
        "name": "processingFeeMoney",
        "baseName": "processing_fee_money",
        "type": "Money"
    },
    {
        "name": "customerId",
        "baseName": "customer_id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "cardDetails",
        "baseName": "card_details",
        "type": "TenderCardDetails"
    },
    {
        "name": "cashDetails",
        "baseName": "cash_details",
        "type": "TenderCashDetails"
    },
    {
        "name": "additionalRecipients",
        "baseName": "additional_recipients",
        "type": "Array<AdditionalRecipient>"
    }
];
exports.Tender = Tender;
//# sourceMappingURL=tender.js.map