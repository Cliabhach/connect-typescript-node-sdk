"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}
Customer.discriminator = undefined;
Customer.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    },
    {
        "name": "cards",
        "baseName": "cards",
        "type": "Array<Card>"
    },
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
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "company_name",
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
        "name": "birthday",
        "baseName": "birthday",
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
        "name": "preferences",
        "baseName": "preferences",
        "type": "CustomerPreferences"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<CustomerGroupInfo>"
    },
    {
        "name": "creationSource",
        "baseName": "creation_source",
        "type": "string"
    }
];
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map