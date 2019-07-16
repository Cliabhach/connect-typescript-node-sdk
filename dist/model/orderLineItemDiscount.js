"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderLineItemDiscount {
    static getAttributeTypeMap() {
        return OrderLineItemDiscount.attributeTypeMap;
    }
}
OrderLineItemDiscount.discriminator = undefined;
OrderLineItemDiscount.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    },
    {
        "name": "appliedMoney",
        "baseName": "applied_money",
        "type": "Money"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    }
];
exports.OrderLineItemDiscount = OrderLineItemDiscount;
//# sourceMappingURL=orderLineItemDiscount.js.map