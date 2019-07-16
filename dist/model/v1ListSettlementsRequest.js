"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListSettlementsRequest {
    static getAttributeTypeMap() {
        return V1ListSettlementsRequest.attributeTypeMap;
    }
}
V1ListSettlementsRequest.discriminator = undefined;
V1ListSettlementsRequest.attributeTypeMap = [
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
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListSettlementsRequest = V1ListSettlementsRequest;
//# sourceMappingURL=v1ListSettlementsRequest.js.map