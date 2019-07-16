"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateShiftResponse {
    static getAttributeTypeMap() {
        return CreateShiftResponse.attributeTypeMap;
    }
}
CreateShiftResponse.discriminator = undefined;
CreateShiftResponse.attributeTypeMap = [
    {
        "name": "shift",
        "baseName": "shift",
        "type": "Shift"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.CreateShiftResponse = CreateShiftResponse;
//# sourceMappingURL=createShiftResponse.js.map