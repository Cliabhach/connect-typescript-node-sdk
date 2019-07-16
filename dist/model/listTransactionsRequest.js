"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTransactionsRequest {
    static getAttributeTypeMap() {
        return ListTransactionsRequest.attributeTypeMap;
    }
}
ListTransactionsRequest.discriminator = undefined;
ListTransactionsRequest.attributeTypeMap = [
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "string"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "string"
    },
    {
        "name": "sortOrder",
        "baseName": "sort_order",
        "type": "string"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListTransactionsRequest = ListTransactionsRequest;
//# sourceMappingURL=listTransactionsRequest.js.map