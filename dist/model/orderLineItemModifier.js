"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderLineItemModifier {
    static getAttributeTypeMap() {
        return OrderLineItemModifier.attributeTypeMap;
    }
}
OrderLineItemModifier.discriminator = undefined;
OrderLineItemModifier.attributeTypeMap = [
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
        "name": "basePriceMoney",
        "baseName": "base_price_money",
        "type": "Money"
    },
    {
        "name": "totalPriceMoney",
        "baseName": "total_price_money",
        "type": "Money"
    }
];
exports.OrderLineItemModifier = OrderLineItemModifier;
//# sourceMappingURL=orderLineItemModifier.js.map