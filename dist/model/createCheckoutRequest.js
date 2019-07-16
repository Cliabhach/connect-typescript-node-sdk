"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCheckoutRequest {
    static getAttributeTypeMap() {
        return CreateCheckoutRequest.attributeTypeMap;
    }
}
CreateCheckoutRequest.discriminator = undefined;
CreateCheckoutRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "order",
        "baseName": "order",
        "type": "CreateOrderRequest"
    },
    {
        "name": "askForShippingAddress",
        "baseName": "ask_for_shipping_address",
        "type": "boolean"
    },
    {
        "name": "merchantSupportEmail",
        "baseName": "merchant_support_email",
        "type": "string"
    },
    {
        "name": "prePopulateBuyerEmail",
        "baseName": "pre_populate_buyer_email",
        "type": "string"
    },
    {
        "name": "prePopulateShippingAddress",
        "baseName": "pre_populate_shipping_address",
        "type": "Address"
    },
    {
        "name": "redirectUrl",
        "baseName": "redirect_url",
        "type": "string"
    },
    {
        "name": "additionalRecipients",
        "baseName": "additional_recipients",
        "type": "Array<ChargeRequestAdditionalRecipient>"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    }
];
exports.CreateCheckoutRequest = CreateCheckoutRequest;
//# sourceMappingURL=createCheckoutRequest.js.map