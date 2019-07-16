"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderRequestDiscount {
    static getAttributeTypeMap() {
        return CreateOrderRequestDiscount.attributeTypeMap;
    }
}
CreateOrderRequestDiscount.discriminator = undefined;
CreateOrderRequestDiscount.attributeTypeMap = [
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
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    }
];
exports.CreateOrderRequestDiscount = CreateOrderRequestDiscount;
//# sourceMappingURL=createOrderRequestDiscount.js.map