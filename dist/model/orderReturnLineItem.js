"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturnLineItem {
    static getAttributeTypeMap() {
        return OrderReturnLineItem.attributeTypeMap;
    }
}
OrderReturnLineItem.discriminator = undefined;
OrderReturnLineItem.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceLineItemUid",
        "baseName": "source_line_item_uid",
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
        "name": "returnModifiers",
        "baseName": "return_modifiers",
        "type": "Array<OrderReturnLineItemModifier>"
    },
    {
        "name": "returnTaxes",
        "baseName": "return_taxes",
        "type": "Array<OrderReturnTax>"
    },
    {
        "name": "returnDiscounts",
        "baseName": "return_discounts",
        "type": "Array<OrderReturnDiscount>"
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
        "name": "grossReturnMoney",
        "baseName": "gross_return_money",
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
exports.OrderReturnLineItem = OrderReturnLineItem;
//# sourceMappingURL=orderReturnLineItem.js.map