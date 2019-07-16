"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Discount {
    static getAttributeTypeMap() {
        return V1Discount.attributeTypeMap;
    }
}
V1Discount.discriminator = undefined;
V1Discount.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
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
        "name": "discountType",
        "baseName": "discount_type",
        "type": "string"
    },
    {
        "name": "pinRequired",
        "baseName": "pin_required",
        "type": "boolean"
    },
    {
        "name": "color",
        "baseName": "color",
        "type": "string"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1Discount = V1Discount;
//# sourceMappingURL=v1Discount.js.map