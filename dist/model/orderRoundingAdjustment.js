"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderRoundingAdjustment {
    static getAttributeTypeMap() {
        return OrderRoundingAdjustment.attributeTypeMap;
    }
}
OrderRoundingAdjustment.discriminator = undefined;
OrderRoundingAdjustment.attributeTypeMap = [
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
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    }
];
exports.OrderRoundingAdjustment = OrderRoundingAdjustment;
//# sourceMappingURL=orderRoundingAdjustment.js.map