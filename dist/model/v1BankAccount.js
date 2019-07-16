"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1BankAccount {
    static getAttributeTypeMap() {
        return V1BankAccount.attributeTypeMap;
    }
}
V1BankAccount.discriminator = undefined;
V1BankAccount.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "bankName",
        "baseName": "bank_name",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "routingNumber",
        "baseName": "routing_number",
        "type": "string"
    },
    {
        "name": "accountNumberSuffix",
        "baseName": "account_number_suffix",
        "type": "string"
    },
    {
        "name": "currencyCode",
        "baseName": "currency_code",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1BankAccount = V1BankAccount;
//# sourceMappingURL=v1BankAccount.js.map