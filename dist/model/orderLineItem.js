"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderLineItem {
    static getAttributeTypeMap() {
        return OrderLineItem.attributeTypeMap;
    }
}
OrderLineItem.discriminator = undefined;
OrderLineItem.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "string"
    },
    {
        "name": "quantityUnit",
        "baseName": "quantity_unit",
        "type": "OrderQuantityUnit"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    },
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "variationName",
        "baseName": "variation_name",
        "type": "string"
    },
    {
        "name": "modifiers",
        "baseName": "modifiers",
        "type": "Array<OrderLineItemModifier>"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<OrderLineItemTax>"
    },
    {
        "name": "discounts",
        "baseName": "discounts",
        "type": "Array<OrderLineItemDiscount>"
    },
    {
        "name": "basePriceMoney",
        "baseName": "base_price_money",
        "type": "Money"
    },
    {
        "name": "variationTotalPriceMoney",
        "baseName": "variation_total_price_money",
        "type": "Money"
    },
    {
        "name": "grossSalesMoney",
        "baseName": "gross_sales_money",
        "type": "Money"
    },
    {
        "name": "totalTaxMoney",
        "baseName": "total_tax_money",
        "type": "Money"
    },
    {
        "name": "totalDiscountMoney",
        "baseName": "total_discount_money",
        "type": "Money"
    },
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "Money"
    }
];
exports.OrderLineItem = OrderLineItem;
//# sourceMappingURL=orderLineItem.js.map