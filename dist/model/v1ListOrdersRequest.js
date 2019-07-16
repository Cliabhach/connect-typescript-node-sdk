"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListOrdersRequest {
    static getAttributeTypeMap() {
        return V1ListOrdersRequest.attributeTypeMap;
    }
}
V1ListOrdersRequest.discriminator = undefined;
V1ListOrdersRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListOrdersRequest = V1ListOrdersRequest;
//# sourceMappingURL=v1ListOrdersRequest.js.map