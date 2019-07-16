"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentDiscount {
    static getAttributeTypeMap() {
        return V1PaymentDiscount.attributeTypeMap;
    }
}
V1PaymentDiscount.discriminator = undefined;
V1PaymentDiscount.attributeTypeMap = [
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
        "name": "discountId",
        "baseName": "discount_id",
        "type": "string"
    }
];
exports.V1PaymentDiscount = V1PaymentDiscount;
//# sourceMappingURL=v1PaymentDiscount.js.map