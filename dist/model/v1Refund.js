"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Refund {
    static getAttributeTypeMap() {
        return V1Refund.attributeTypeMap;
    }
}
V1Refund.discriminator = undefined;
V1Refund.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "refundedMoney",
        "baseName": "refunded_money",
        "type": "V1Money"
    },
    {
        "name": "refundedProcessingFeeMoney",
        "baseName": "refunded_processing_fee_money",
        "type": "V1Money"
    },
    {
        "name": "refundedTaxMoney",
        "baseName": "refunded_tax_money",
        "type": "V1Money"
    },
    {
        "name": "refundedAdditiveTaxMoney",
        "baseName": "refunded_additive_tax_money",
        "type": "V1Money"
    },
    {
        "name": "refundedAdditiveTax",
        "baseName": "refunded_additive_tax",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "refundedInclusiveTaxMoney",
        "baseName": "refunded_inclusive_tax_money",
        "type": "V1Money"
    },
    {
        "name": "refundedInclusiveTax",
        "baseName": "refunded_inclusive_tax",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "refundedTipMoney",
        "baseName": "refunded_tip_money",
        "type": "V1Money"
    },
    {
        "name": "refundedDiscountMoney",
        "baseName": "refunded_discount_money",
        "type": "V1Money"
    },
    {
        "name": "refundedSurchargeMoney",
        "baseName": "refunded_surcharge_money",
        "type": "V1Money"
    },
    {
        "name": "refundedSurcharges",
        "baseName": "refunded_surcharges",
        "type": "Array<V1PaymentSurcharge>"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "processedAt",
        "baseName": "processed_at",
        "type": "string"
    },
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "isExchange",
        "baseName": "is_exchange",
        "type": "boolean"
    }
];
exports.V1Refund = V1Refund;
//# sourceMappingURL=v1Refund.js.map