"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Order {
    static getAttributeTypeMap() {
        return V1Order.attributeTypeMap;
    }
}
V1Order.discriminator = undefined;
V1Order.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "buyerEmail",
        "baseName": "buyer_email",
        "type": "string"
    },
    {
        "name": "recipientName",
        "baseName": "recipient_name",
        "type": "string"
    },
    {
        "name": "recipientPhoneNumber",
        "baseName": "recipient_phone_number",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shipping_address",
        "type": "Address"
    },
    {
        "name": "subtotalMoney",
        "baseName": "subtotal_money",
        "type": "V1Money"
    },
    {
        "name": "totalShippingMoney",
        "baseName": "total_shipping_money",
        "type": "V1Money"
    },
    {
        "name": "totalTaxMoney",
        "baseName": "total_tax_money",
        "type": "V1Money"
    },
    {
        "name": "totalPriceMoney",
        "baseName": "total_price_money",
        "type": "V1Money"
    },
    {
        "name": "totalDiscountMoney",
        "baseName": "total_discount_money",
        "type": "V1Money"
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
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "string"
    },
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "buyerNote",
        "baseName": "buyer_note",
        "type": "string"
    },
    {
        "name": "completedNote",
        "baseName": "completed_note",
        "type": "string"
    },
    {
        "name": "refundedNote",
        "baseName": "refunded_note",
        "type": "string"
    },
    {
        "name": "canceledNote",
        "baseName": "canceled_note",
        "type": "string"
    },
    {
        "name": "tender",
        "baseName": "tender",
        "type": "V1Tender"
    },
    {
        "name": "orderHistory",
        "baseName": "order_history",
        "type": "Array<V1OrderHistoryEntry>"
    },
    {
        "name": "promoCode",
        "baseName": "promo_code",
        "type": "string"
    },
    {
        "name": "btcReceiveAddress",
        "baseName": "btc_receive_address",
        "type": "string"
    },
    {
        "name": "btcPriceSatoshi",
        "baseName": "btc_price_satoshi",
        "type": "number"
    }
];
exports.V1Order = V1Order;
//# sourceMappingURL=v1Order.js.map