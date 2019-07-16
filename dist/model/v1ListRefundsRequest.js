"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListRefundsRequest {
    static getAttributeTypeMap() {
        return V1ListRefundsRequest.attributeTypeMap;
    }
}
V1ListRefundsRequest.discriminator = undefined;
V1ListRefundsRequest.attributeTypeMap = [
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
    }
];
exports.V1ListRefundsRequest = V1ListRefundsRequest;
//# sourceMappingURL=v1ListRefundsRequest.js.map