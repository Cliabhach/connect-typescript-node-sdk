"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentSurcharge {
    static getAttributeTypeMap() {
        return V1PaymentSurcharge.attributeTypeMap;
    }
}
V1PaymentSurcharge.discriminator = undefined;
V1PaymentSurcharge.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "appliedMoney",
        "baseName": "applied_money",
        "type": "V1Money"
    },
    {
        "name": "rate",
        "baseName": "rate",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "V1Money"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "taxable",
        "baseName": "taxable",
        "type": "boolean"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "surchargeId",
        "baseName": "surcharge_id",
        "type": "string"
    }
];
exports.V1PaymentSurcharge = V1PaymentSurcharge;
//# sourceMappingURL=v1PaymentSurcharge.js.map