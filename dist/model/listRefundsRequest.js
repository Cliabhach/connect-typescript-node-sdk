"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListRefundsRequest {
    static getAttributeTypeMap() {
        return ListRefundsRequest.attributeTypeMap;
    }
}
ListRefundsRequest.discriminator = undefined;
ListRefundsRequest.attributeTypeMap = [
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
exports.ListRefundsRequest = ListRefundsRequest;
//# sourceMappingURL=listRefundsRequest.js.map