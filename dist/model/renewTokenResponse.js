"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RenewTokenResponse {
    static getAttributeTypeMap() {
        return RenewTokenResponse.attributeTypeMap;
    }
}
RenewTokenResponse.discriminator = undefined;
RenewTokenResponse.attributeTypeMap = [
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
    }
];
exports.RenewTokenResponse = RenewTokenResponse;
//# sourceMappingURL=renewTokenResponse.js.map