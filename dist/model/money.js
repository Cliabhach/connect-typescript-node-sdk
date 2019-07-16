"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Money {
    static getAttributeTypeMap() {
        return Money.attributeTypeMap;
    }
}
Money.discriminator = undefined;
Money.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    }
];
exports.Money = Money;
//# sourceMappingURL=money.js.map