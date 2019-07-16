"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChargeRequest {
    static getAttributeTypeMap() {
        return ChargeRequest.attributeTypeMap;
    }
}
ChargeRequest.discriminator = undefined;
ChargeRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    },
    {
        "name": "cardNonce",
        "baseName": "card_nonce",
        "type": "string"
    },
    {
        "name": "customerCardId",
        "baseName": "customer_card_id",
        "type": "string"
    },
    {
        "name": "delayCapture",
        "baseName": "delay_capture",
        "type": "boolean"
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
        "name": "customerId",
        "baseName": "customer_id",
        "type": "string"
    },
    {
        "name": "billingAddress",
        "baseName": "billing_address",
        "type": "Address"
    },
    {
        "name": "shippingAddress",
        "baseName": "shipping_address",
        "type": "Address"
    },
    {
        "name": "buyerEmailAddress",
        "baseName": "buyer_email_address",
        "type": "string"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "additionalRecipients",
        "baseName": "additional_recipients",
        "type": "Array<AdditionalRecipient>"
    },
    {
        "name": "verificationToken",
        "baseName": "verification_token",
        "type": "string"
    }
];
exports.ChargeRequest = ChargeRequest;
//# sourceMappingURL=chargeRequest.js.map