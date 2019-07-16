"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Tender {
    static getAttributeTypeMap() {
        return V1Tender.attributeTypeMap;
    }
}
V1Tender.discriminator = undefined;
V1Tender.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    },
    {
        "name": "receiptUrl",
        "baseName": "receipt_url",
        "type": "string"
    },
    {
        "name": "cardBrand",
        "baseName": "card_brand",
        "type": "string"
    },
    {
        "name": "panSuffix",
        "baseName": "pan_suffix",
        "type": "string"
    },
    {
        "name": "entryMethod",
        "baseName": "entry_method",
        "type": "string"
    },
    {
        "name": "paymentNote",
        "baseName": "payment_note",
        "type": "string"
    },
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "V1Money"
    },
    {
        "name": "tenderedMoney",
        "baseName": "tendered_money",
        "type": "V1Money"
    },
    {
        "name": "tenderedAt",
        "baseName": "tendered_at",
        "type": "string"
    },
    {
        "name": "settledAt",
        "baseName": "settled_at",
        "type": "string"
    },
    {
        "name": "changeBackMoney",
        "baseName": "change_back_money",
        "type": "V1Money"
    },
    {
        "name": "refundedMoney",
        "baseName": "refunded_money",
        "type": "V1Money"
    },
    {
        "name": "isExchange",
        "baseName": "is_exchange",
        "type": "boolean"
    }
];
exports.V1Tender = V1Tender;
//# sourceMappingURL=v1Tender.js.map