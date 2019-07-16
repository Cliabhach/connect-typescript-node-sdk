"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchShiftsResponse {
    static getAttributeTypeMap() {
        return SearchShiftsResponse.attributeTypeMap;
    }
}
SearchShiftsResponse.discriminator = undefined;
SearchShiftsResponse.attributeTypeMap = [
    {
        "name": "shifts",
        "baseName": "shifts",
        "type": "Array<Shift>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.SearchShiftsResponse = SearchShiftsResponse;
//# sourceMappingURL=searchShiftsResponse.js.map