"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveTransactionResponse {
    static getAttributeTypeMap() {
        return RetrieveTransactionResponse.attributeTypeMap;
    }
}
RetrieveTransactionResponse.discriminator = undefined;
RetrieveTransactionResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    }
];
exports.RetrieveTransactionResponse = RetrieveTransactionResponse;
//# sourceMappingURL=retrieveTransactionResponse.js.map