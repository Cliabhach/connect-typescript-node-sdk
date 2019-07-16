"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateBreakTypeResponse {
    static getAttributeTypeMap() {
        return CreateBreakTypeResponse.attributeTypeMap;
    }
}
CreateBreakTypeResponse.discriminator = undefined;
CreateBreakTypeResponse.attributeTypeMap = [
    {
        "name": "breakType",
        "baseName": "break_type",
        "type": "BreakType"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.CreateBreakTypeResponse = CreateBreakTypeResponse;
//# sourceMappingURL=createBreakTypeResponse.js.map