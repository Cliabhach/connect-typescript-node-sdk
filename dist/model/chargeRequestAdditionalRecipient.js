"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChargeRequestAdditionalRecipient {
    static getAttributeTypeMap() {
        return ChargeRequestAdditionalRecipient.attributeTypeMap;
    }
}
ChargeRequestAdditionalRecipient.discriminator = undefined;
ChargeRequestAdditionalRecipient.attributeTypeMap = [
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    }
];
exports.ChargeRequestAdditionalRecipient = ChargeRequestAdditionalRecipient;
//# sourceMappingURL=chargeRequestAdditionalRecipient.js.map