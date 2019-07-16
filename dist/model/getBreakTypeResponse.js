"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetBreakTypeResponse {
    static getAttributeTypeMap() {
        return GetBreakTypeResponse.attributeTypeMap;
    }
}
GetBreakTypeResponse.discriminator = undefined;
GetBreakTypeResponse.attributeTypeMap = [
    {
        "name": "breakType",
        "baseName": "break_type",
        "type": "BreakType"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.GetBreakTypeResponse = GetBreakTypeResponse;
//# sourceMappingURL=getBreakTypeResponse.js.map