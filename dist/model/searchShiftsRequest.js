"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchShiftsRequest {
    static getAttributeTypeMap() {
        return SearchShiftsRequest.attributeTypeMap;
    }
}
SearchShiftsRequest.discriminator = undefined;
SearchShiftsRequest.attributeTypeMap = [
    {
        "name": "query",
        "baseName": "query",
        "type": "ShiftQuery"
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
exports.SearchShiftsRequest = SearchShiftsRequest;
//# sourceMappingURL=searchShiftsRequest.js.map