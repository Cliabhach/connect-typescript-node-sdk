"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}
Address.discriminator = undefined;
Address.attributeTypeMap = [
    {
        "name": "addressLine1",
        "baseName": "address_line_1",
        "type": "string"
    },
    {
        "name": "addressLine2",
        "baseName": "address_line_2",
        "type": "string"
    },
    {
        "name": "addressLine3",
        "baseName": "address_line_3",
        "type": "string"
    },
    {
        "name": "locality",
        "baseName": "locality",
        "type": "string"
    },
    {
        "name": "sublocality",
        "baseName": "sublocality",
        "type": "string"
    },
    {
        "name": "sublocality2",
        "baseName": "sublocality_2",
        "type": "string"
    },
    {
        "name": "sublocality3",
        "baseName": "sublocality_3",
        "type": "string"
    },
    {
        "name": "administrativeDistrictLevel1",
        "baseName": "administrative_district_level_1",
        "type": "string"
    },
    {
        "name": "administrativeDistrictLevel2",
        "baseName": "administrative_district_level_2",
        "type": "string"
    },
    {
        "name": "administrativeDistrictLevel3",
        "baseName": "administrative_district_level_3",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "organization",
        "baseName": "organization",
        "type": "string"
    }
];
exports.Address = Address;
//# sourceMappingURL=address.js.map