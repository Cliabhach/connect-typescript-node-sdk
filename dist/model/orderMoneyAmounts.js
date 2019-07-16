"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderMoneyAmounts {
    static getAttributeTypeMap() {
        return OrderMoneyAmounts.attributeTypeMap;
    }
}
OrderMoneyAmounts.discriminator = undefined;
OrderMoneyAmounts.attributeTypeMap = [
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "Money"
    },
    {
        "name": "taxMoney",
        "baseName": "tax_money",
        "type": "Money"
    },
    {
        "name": "discountMoney",
        "baseName": "discount_money",
        "type": "Money"
    },
    {
        "name": "tipMoney",
        "baseName": "tip_money",
        "type": "Money"
    },
    {
        "name": "serviceChargeMoney",
        "baseName": "service_charge_money",
        "type": "Money"
    }
];
exports.OrderMoneyAmounts = OrderMoneyAmounts;
//# sourceMappingURL=orderMoneyAmounts.js.map