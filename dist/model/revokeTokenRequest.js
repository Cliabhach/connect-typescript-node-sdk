"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RevokeTokenRequest {
    static getAttributeTypeMap() {
        return RevokeTokenRequest.attributeTypeMap;
    }
}
RevokeTokenRequest.discriminator = undefined;
RevokeTokenRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    }
];
exports.RevokeTokenRequest = RevokeTokenRequest;
//# sourceMappingURL=revokeTokenRequest.js.map