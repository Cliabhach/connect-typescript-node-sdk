"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PhoneNumber {
    static getAttributeTypeMap() {
        return V1PhoneNumber.attributeTypeMap;
    }
}
V1PhoneNumber.discriminator = undefined;
V1PhoneNumber.attributeTypeMap = [
    {
        "name": "callingCode",
        "baseName": "calling_code",
        "type": "string"
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string"
    }
];
exports.V1PhoneNumber = V1PhoneNumber;
//# sourceMappingURL=v1PhoneNumber.js.map