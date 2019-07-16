"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentItemization {
    static getAttributeTypeMap() {
        return V1PaymentItemization.attributeTypeMap;
    }
}
V1PaymentItemization.discriminator = undefined;
V1PaymentItemization.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "itemizationType",
        "baseName": "itemization_type",
        "type": "string"
    },
    {
        "name": "itemDetail",
        "baseName": "item_detail",
        "type": "V1PaymentItemDetail"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string"
    },
    {
        "name": "itemVariationName",
        "baseName": "item_variation_name",
        "type": "string"
    },
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "V1Money"
    },
    {
        "name": "singleQuantityMoney",
        "baseName": "single_quantity_money",
        "type": "V1Money"
    },
    {
        "name": "grossSalesMoney",
        "baseName": "gross_sales_money",
        "type": "V1Money"
    },
    {
        "name": "discountMoney",
        "baseName": "discount_money",
        "type": "V1Money"
    },
    {
        "name": "netSalesMoney",
        "baseName": "net_sales_money",
        "type": "V1Money"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "discounts",
        "baseName": "discounts",
        "type": "Array<V1PaymentDiscount>"
    },
    {
        "name": "modifiers",
        "baseName": "modifiers",
        "type": "Array<V1PaymentModifier>"
    }
];
exports.V1PaymentItemization = V1PaymentItemization;
//# sourceMappingURL=v1PaymentItemization.js.map