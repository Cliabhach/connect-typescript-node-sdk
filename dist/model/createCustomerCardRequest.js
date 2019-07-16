"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCustomerCardRequest {
    static getAttributeTypeMap() {
        return CreateCustomerCardRequest.attributeTypeMap;
    }
}
CreateCustomerCardRequest.discriminator = undefined;
CreateCustomerCardRequest.attributeTypeMap = [
    {
        "name": "cardNonce",
        "baseName": "card_nonce",
        "type": "string"
    },
    {
        "name": "billingAddress",
        "baseName": "billing_address",
        "type": "Address"
    },
    {
        "name": "cardholderName",
        "baseName": "cardholder_name",
        "type": "string"
    },
    {
        "name": "verificationToken",
        "baseName": "verification_token",
        "type": "string"
    }
];
exports.CreateCustomerCardRequest = CreateCustomerCardRequest;
//# sourceMappingURL=createCustomerCardRequest.js.map