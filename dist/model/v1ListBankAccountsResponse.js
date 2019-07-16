"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListBankAccountsResponse {
    static getAttributeTypeMap() {
        return V1ListBankAccountsResponse.attributeTypeMap;
    }
}
V1ListBankAccountsResponse.discriminator = undefined;
V1ListBankAccountsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1BankAccount>"
    }
];
exports.V1ListBankAccountsResponse = V1ListBankAccountsResponse;
//# sourceMappingURL=v1ListBankAccountsResponse.js.map