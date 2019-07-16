"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturnLineItemModifier {
    static getAttributeTypeMap() {
        return OrderReturnLineItemModifier.attributeTypeMap;
    }
}
OrderReturnLineItemModifier.discriminator = undefined;
OrderReturnLineItemModifier.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceModifierUid",
        "baseName": "source_modifier_uid",
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
exports.OrderReturnLineItemModifier = OrderReturnLineItemModifier;
//# sourceMappingURL=orderReturnLineItemModifier.js.map