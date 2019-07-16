"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListPaymentsRequest {
    static getAttributeTypeMap() {
        return V1ListPaymentsRequest.attributeTypeMap;
    }
}
V1ListPaymentsRequest.discriminator = undefined;
V1ListPaymentsRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
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
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    },
    {
        "name": "includePartial",
        "baseName": "include_partial",
        "type": "boolean"
    }
];
exports.V1ListPaymentsRequest = V1ListPaymentsRequest;
//# sourceMappingURL=v1ListPaymentsRequest.js.map