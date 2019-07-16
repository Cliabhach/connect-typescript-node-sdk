"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListBreakTypesRequest {
    static getAttributeTypeMap() {
        return ListBreakTypesRequest.attributeTypeMap;
    }
}
ListBreakTypesRequest.discriminator = undefined;
ListBreakTypesRequest.attributeTypeMap = [
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
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
exports.ListBreakTypesRequest = ListBreakTypesRequest;
//# sourceMappingURL=listBreakTypesRequest.js.map