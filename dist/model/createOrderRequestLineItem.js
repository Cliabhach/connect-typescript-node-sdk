"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderRequestLineItem {
    static getAttributeTypeMap() {
        return CreateOrderRequestLineItem.attributeTypeMap;
    }
}
CreateOrderRequestLineItem.discriminator = undefined;
CreateOrderRequestLineItem.attributeTypeMap = [
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
        "name": "basePriceMoney",
        "baseName": "base_price_money",
        "type": "Money"
    },
    {
        "name": "variationName",
        "baseName": "variation_name",
        "type": "string"
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
        "name": "modifiers",
        "baseName": "modifiers",
        "type": "Array<CreateOrderRequestModifier>"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<CreateOrderRequestTax>"
    },
    {
        "name": "discounts",
        "baseName": "discounts",
        "type": "Array<CreateOrderRequestDiscount>"
    }
];
exports.CreateOrderRequestLineItem = CreateOrderRequestLineItem;
//# sourceMappingURL=createOrderRequestLineItem.js.map