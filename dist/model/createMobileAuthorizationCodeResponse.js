"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateMobileAuthorizationCodeResponse {
    static getAttributeTypeMap() {
        return CreateMobileAuthorizationCodeResponse.attributeTypeMap;
    }
}
CreateMobileAuthorizationCodeResponse.discriminator = undefined;
CreateMobileAuthorizationCodeResponse.attributeTypeMap = [
    {
        "name": "authorizationCode",
        "baseName": "authorization_code",
        "type": "string"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "SquareError"
    }
];
exports.CreateMobileAuthorizationCodeResponse = CreateMobileAuthorizationCodeResponse;
//# sourceMappingURL=createMobileAuthorizationCodeResponse.js.map