"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetShiftResponse {
    static getAttributeTypeMap() {
        return GetShiftResponse.attributeTypeMap;
    }
}
GetShiftResponse.discriminator = undefined;
GetShiftResponse.attributeTypeMap = [
    {
        "name": "shift",
        "baseName": "shift",
        "type": "Shift"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.GetShiftResponse = GetShiftResponse;
//# sourceMappingURL=getShiftResponse.js.map