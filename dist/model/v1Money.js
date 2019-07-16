"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Money {
    static getAttributeTypeMap() {
        return V1Money.attributeTypeMap;
    }
}
V1Money.discriminator = undefined;
V1Money.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "currencyCode",
        "baseName": "currency_code",
        "type": "string"
    }
];
exports.V1Money = V1Money;
//# sourceMappingURL=v1Money.js.map