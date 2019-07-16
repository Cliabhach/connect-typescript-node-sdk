"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListBreakTypesResponse {
    static getAttributeTypeMap() {
        return ListBreakTypesResponse.attributeTypeMap;
    }
}
ListBreakTypesResponse.discriminator = undefined;
ListBreakTypesResponse.attributeTypeMap = [
    {
        "name": "breakTypes",
        "baseName": "break_types",
        "type": "Array<BreakType>"
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
exports.ListBreakTypesResponse = ListBreakTypesResponse;
//# sourceMappingURL=listBreakTypesResponse.js.map