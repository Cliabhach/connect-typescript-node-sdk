"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTransactionsResponse {
    static getAttributeTypeMap() {
        return ListTransactionsResponse.attributeTypeMap;
    }
}
ListTransactionsResponse.discriminator = undefined;
ListTransactionsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListTransactionsResponse = ListTransactionsResponse;
//# sourceMappingURL=listTransactionsResponse.js.map