"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateShiftResponse {
    static getAttributeTypeMap() {
        return UpdateShiftResponse.attributeTypeMap;
    }
}
UpdateShiftResponse.discriminator = undefined;
UpdateShiftResponse.attributeTypeMap = [
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
exports.UpdateShiftResponse = UpdateShiftResponse;
//# sourceMappingURL=updateShiftResponse.js.map