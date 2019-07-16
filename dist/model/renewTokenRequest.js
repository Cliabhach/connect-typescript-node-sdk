"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RenewTokenRequest {
    static getAttributeTypeMap() {
        return RenewTokenRequest.attributeTypeMap;
    }
}
RenewTokenRequest.discriminator = undefined;
RenewTokenRequest.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    }
];
exports.RenewTokenRequest = RenewTokenRequest;
//# sourceMappingURL=renewTokenRequest.js.map