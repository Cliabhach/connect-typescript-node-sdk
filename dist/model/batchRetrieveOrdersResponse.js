"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveOrdersResponse {
    static getAttributeTypeMap() {
        return BatchRetrieveOrdersResponse.attributeTypeMap;
    }
}
BatchRetrieveOrdersResponse.discriminator = undefined;
BatchRetrieveOrdersResponse.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order>"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "unconvertibleTransactionIds",
        "baseName": "unconvertible_transaction_ids",
        "type": "Array<string>"
    }
];
exports.BatchRetrieveOrdersResponse = BatchRetrieveOrdersResponse;
//# sourceMappingURL=batchRetrieveOrdersResponse.js.map