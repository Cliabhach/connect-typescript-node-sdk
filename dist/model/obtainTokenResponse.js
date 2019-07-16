"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObtainTokenResponse {
    static getAttributeTypeMap() {
        return ObtainTokenResponse.attributeTypeMap;
    }
}
ObtainTokenResponse.discriminator = undefined;
ObtainTokenResponse.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "tokenType",
        "baseName": "token_type",
        "type": "string"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "subscriptionId",
        "baseName": "subscription_id",
        "type": "string"
    },
    {
        "name": "planId",
        "baseName": "plan_id",
        "type": "string"
    },
    {
        "name": "idToken",
        "baseName": "id_token",
        "type": "string"
    },
    {
        "name": "refreshToken",
        "baseName": "refresh_token",
        "type": "string"
    }
];
exports.ObtainTokenResponse = ObtainTokenResponse;
//# sourceMappingURL=obtainTokenResponse.js.map