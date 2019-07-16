"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateBreakTypeResponse {
    static getAttributeTypeMap() {
        return UpdateBreakTypeResponse.attributeTypeMap;
    }
}
UpdateBreakTypeResponse.discriminator = undefined;
UpdateBreakTypeResponse.attributeTypeMap = [
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
exports.UpdateBreakTypeResponse = UpdateBreakTypeResponse;
//# sourceMappingURL=updateBreakTypeResponse.js.map