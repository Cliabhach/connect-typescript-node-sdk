"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderRequestModifier {
    static getAttributeTypeMap() {
        return CreateOrderRequestModifier.attributeTypeMap;
    }
}
CreateOrderRequestModifier.discriminator = undefined;
CreateOrderRequestModifier.attributeTypeMap = [
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
    }
];
exports.CreateOrderRequestModifier = CreateOrderRequestModifier;
//# sourceMappingURL=createOrderRequestModifier.js.map