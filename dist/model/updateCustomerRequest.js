"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCustomerRequest {
    static getAttributeTypeMap() {
        return UpdateCustomerRequest.attributeTypeMap;
    }
}
UpdateCustomerRequest.discriminator = undefined;
UpdateCustomerRequest.attributeTypeMap = [
    {
        "name": "givenName",
        "baseName": "given_name",
        "type": "string"
    },
    {
        "name": "familyName",
        "baseName": "family_name",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "company_name",
        "type": "string"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "email_address",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "Address"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    },
    {
        "name": "birthday",
        "baseName": "birthday",
        "type": "string"
    }
];
exports.UpdateCustomerRequest = UpdateCustomerRequest;
//# sourceMappingURL=updateCustomerRequest.js.map