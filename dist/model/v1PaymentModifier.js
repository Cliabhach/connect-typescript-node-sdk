"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentModifier {
    static getAttributeTypeMap() {
        return V1PaymentModifier.attributeTypeMap;
    }
}
V1PaymentModifier.discriminator = undefined;
V1PaymentModifier.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "appliedMoney",
        "baseName": "applied_money",
        "type": "V1Money"
    },
    {
        "name": "modifierOptionId",
        "baseName": "modifier_option_id",
        "type": "string"
    }
];
exports.V1PaymentModifier = V1PaymentModifier;
//# sourceMappingURL=v1PaymentModifier.js.map