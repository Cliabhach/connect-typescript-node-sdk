"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    static getAttributeTypeMap() {
        return Location.attributeTypeMap;
    }
}
Location.discriminator = undefined;
Location.attributeTypeMap = [
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
        "name": "address",
        "baseName": "address",
        "type": "Address"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    },
    {
        "name": "capabilities",
        "baseName": "capabilities",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "languageCode",
        "baseName": "language_code",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "businessName",
        "baseName": "business_name",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "websiteUrl",
        "baseName": "website_url",
        "type": "string"
    },
    {
        "name": "businessHours",
        "baseName": "business_hours",
        "type": "BusinessHours"
    },
    {
        "name": "businessEmail",
        "baseName": "business_email",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "twitterUsername",
        "baseName": "twitter_username",
        "type": "string"
    },
    {
        "name": "instagramUsername",
        "baseName": "instagram_username",
        "type": "string"
    },
    {
        "name": "facebookUrl",
        "baseName": "facebook_url",
        "type": "string"
    },
    {
        "name": "coordinates",
        "baseName": "coordinates",
        "type": "Coordinates"
    }
];
exports.Location = Location;
//# sourceMappingURL=location.js.map