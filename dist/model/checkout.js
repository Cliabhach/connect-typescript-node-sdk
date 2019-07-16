"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Checkout {
    static getAttributeTypeMap() {
        return Checkout.attributeTypeMap;
    }
}
Checkout.discriminator = undefined;
Checkout.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "checkoutPageUrl",
        "baseName": "checkout_page_url",
        "type": "string"
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
        "name": "order",
        "baseName": "order",
        "type": "Order"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "additionalRecipients",
        "baseName": "additional_recipients",
        "type": "Array<AdditionalRecipient>"
    }
];
exports.Checkout = Checkout;
//# sourceMappingURL=checkout.js.map