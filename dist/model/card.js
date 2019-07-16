"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}
Card.discriminator = undefined;
Card.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "cardBrand",
        "baseName": "card_brand",
        "type": "string"
    },
    {
        "name": "last4",
        "baseName": "last_4",
        "type": "string"
    },
    {
        "name": "expMonth",
        "baseName": "exp_month",
        "type": "number"
    },
    {
        "name": "expYear",
        "baseName": "exp_year",
        "type": "number"
    },
    {
        "name": "cardholderName",
        "baseName": "cardholder_name",
        "type": "string"
    },
    {
        "name": "billingAddress",
        "baseName": "billing_address",
        "type": "Address"
    },
    {
        "name": "fingerprint",
        "baseName": "fingerprint",
        "type": "string"
    }
];
exports.Card = Card;
//# sourceMappingURL=card.js.map