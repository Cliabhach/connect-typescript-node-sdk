"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1SettlementEntry {
    static getAttributeTypeMap() {
        return V1SettlementEntry.attributeTypeMap;
    }
}
V1SettlementEntry.discriminator = undefined;
V1SettlementEntry.attributeTypeMap = [
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "V1Money"
    },
    {
        "name": "feeMoney",
        "baseName": "fee_money",
        "type": "V1Money"
    }
];
exports.V1SettlementEntry = V1SettlementEntry;
//# sourceMappingURL=v1SettlementEntry.js.map