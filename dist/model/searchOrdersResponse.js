"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersResponse {
    static getAttributeTypeMap() {
        return SearchOrdersResponse.attributeTypeMap;
    }
}
SearchOrdersResponse.discriminator = undefined;
SearchOrdersResponse.attributeTypeMap = [
    {
        "name": "orderEntries",
        "baseName": "order_entries",
        "type": "Array<OrderEntry>"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
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
exports.SearchOrdersResponse = SearchOrdersResponse;
//# sourceMappingURL=searchOrdersResponse.js.map