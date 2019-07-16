"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListWorkweekConfigsRequest {
    static getAttributeTypeMap() {
        return ListWorkweekConfigsRequest.attributeTypeMap;
    }
}
ListWorkweekConfigsRequest.discriminator = undefined;
ListWorkweekConfigsRequest.attributeTypeMap = [
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListWorkweekConfigsRequest = ListWorkweekConfigsRequest;
//# sourceMappingURL=listWorkweekConfigsRequest.js.map