"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentTax {
    static getAttributeTypeMap() {
        return V1PaymentTax.attributeTypeMap;
    }
}
V1PaymentTax.discriminator = undefined;
V1PaymentTax.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
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
        "name": "inclusionType",
        "baseName": "inclusion_type",
        "type": "string"
    },
    {
        "name": "feeId",
        "baseName": "fee_id",
        "type": "string"
    }
];
exports.V1PaymentTax = V1PaymentTax;
//# sourceMappingURL=v1PaymentTax.js.map