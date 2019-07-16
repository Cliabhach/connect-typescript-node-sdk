"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdditionalRecipient {
    static getAttributeTypeMap() {
        return AdditionalRecipient.attributeTypeMap;
    }
}
AdditionalRecipient.discriminator = undefined;
AdditionalRecipient.attributeTypeMap = [
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
    },
    {
        "name": "receivableId",
        "baseName": "receivable_id",
        "type": "string"
    }
];
exports.AdditionalRecipient = AdditionalRecipient;
//# sourceMappingURL=additionalRecipient.js.map