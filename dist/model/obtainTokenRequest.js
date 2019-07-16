"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObtainTokenRequest {
    static getAttributeTypeMap() {
        return ObtainTokenRequest.attributeTypeMap;
    }
}
ObtainTokenRequest.discriminator = undefined;
ObtainTokenRequest.attributeTypeMap = [
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "clientSecret",
        "baseName": "client_secret",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "redirectUri",
        "baseName": "redirect_uri",
        "type": "string"
    },
    {
        "name": "grantType",
        "baseName": "grant_type",
        "type": "string"
    },
    {
        "name": "refreshToken",
        "baseName": "refresh_token",
        "type": "string"
    },
    {
        "name": "migrationToken",
        "baseName": "migration_token",
        "type": "string"
    }
];
exports.ObtainTokenRequest = ObtainTokenRequest;
//# sourceMappingURL=obtainTokenRequest.js.map