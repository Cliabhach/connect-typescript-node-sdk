"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Merchant {
    static getAttributeTypeMap() {
        return V1Merchant.attributeTypeMap;
    }
}
V1Merchant.discriminator = undefined;
V1Merchant.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "accountType",
        "baseName": "account_type",
        "type": "string"
    },
    {
        "name": "accountCapabilities",
        "baseName": "account_capabilities",
        "type": "Array<string>"
    },
    {
        "name": "countryCode",
        "baseName": "country_code",
        "type": "string"
    },
    {
        "name": "languageCode",
        "baseName": "language_code",
        "type": "string"
    },
    {
        "name": "currencyCode",
        "baseName": "currency_code",
        "type": "string"
    },
    {
        "name": "businessName",
        "baseName": "business_name",
        "type": "string"
    },
    {
        "name": "businessAddress",
        "baseName": "business_address",
        "type": "Address"
    },
    {
        "name": "businessPhone",
        "baseName": "business_phone",
        "type": "V1PhoneNumber"
    },
    {
        "name": "businessType",
        "baseName": "business_type",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shipping_address",
        "type": "Address"
    },
    {
        "name": "locationDetails",
        "baseName": "location_details",
        "type": "V1MerchantLocationDetails"
    },
    {
        "name": "marketUrl",
        "baseName": "market_url",
        "type": "string"
    }
];
exports.V1Merchant = V1Merchant;
//# sourceMappingURL=v1Merchant.js.map