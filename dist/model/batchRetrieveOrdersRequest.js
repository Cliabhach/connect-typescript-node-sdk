"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveOrdersRequest {
    static getAttributeTypeMap() {
        return BatchRetrieveOrdersRequest.attributeTypeMap;
    }
}
BatchRetrieveOrdersRequest.discriminator = undefined;
BatchRetrieveOrdersRequest.attributeTypeMap = [
    {
        "name": "orderIds",
        "baseName": "order_ids",
        "type": "Array<string>"
    }
];
exports.BatchRetrieveOrdersRequest = BatchRetrieveOrdersRequest;
//# sourceMappingURL=batchRetrieveOrdersRequest.js.map