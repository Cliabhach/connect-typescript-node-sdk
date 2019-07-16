"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Payment {
    static getAttributeTypeMap() {
        return V1Payment.attributeTypeMap;
    }
}
V1Payment.discriminator = undefined;
V1Payment.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "creatorId",
        "baseName": "creator_id",
        "type": "string"
    },
    {
        "name": "device",
        "baseName": "device",
        "type": "Device"
    },
    {
        "name": "paymentUrl",
        "baseName": "payment_url",
        "type": "string"
    },
    {
        "name": "receiptUrl",
        "baseName": "receipt_url",
        "type": "string"
    },
    {
        "name": "inclusiveTaxMoney",
        "baseName": "inclusive_tax_money",
        "type": "V1Money"
    },
    {
        "name": "additiveTaxMoney",
        "baseName": "additive_tax_money",
        "type": "V1Money"
    },
    {
        "name": "taxMoney",
        "baseName": "tax_money",
        "type": "V1Money"
    },
    {
        "name": "tipMoney",
        "baseName": "tip_money",
        "type": "V1Money"
    },
    {
        "name": "discountMoney",
        "baseName": "discount_money",
        "type": "V1Money"
    },
    {
        "name": "totalCollectedMoney",
        "baseName": "total_collected_money",
        "type": "V1Money"
    },
    {
        "name": "processingFeeMoney",
        "baseName": "processing_fee_money",
        "type": "V1Money"
    },
    {
        "name": "netTotalMoney",
        "baseName": "net_total_money",
        "type": "V1Money"
    },
    {
        "name": "refundedMoney",
        "baseName": "refunded_money",
        "type": "V1Money"
    },
    {
        "name": "swedishRoundingMoney",
        "baseName": "swedish_rounding_money",
        "type": "V1Money"
    },
    {
        "name": "grossSalesMoney",
        "baseName": "gross_sales_money",
        "type": "V1Money"
    },
    {
        "name": "netSalesMoney",
        "baseName": "net_sales_money",
        "type": "V1Money"
    },
    {
        "name": "inclusiveTax",
        "baseName": "inclusive_tax",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "additiveTax",
        "baseName": "additive_tax",
        "type": "Array<V1PaymentTax>"
    },
    {
        "name": "tender",
        "baseName": "tender",
        "type": "Array<V1Tender>"
    },
    {
        "name": "refunds",
        "baseName": "refunds",
        "type": "Array<V1Refund>"
    },
    {
        "name": "itemizations",
        "baseName": "itemizations",
        "type": "Array<V1PaymentItemization>"
    },
    {
        "name": "surchargeMoney",
        "baseName": "surcharge_money",
        "type": "V1Money"
    },
    {
        "name": "surcharges",
        "baseName": "surcharges",
        "type": "Array<V1PaymentSurcharge>"
    },
    {
        "name": "isPartial",
        "baseName": "is_partial",
        "type": "boolean"
    }
];
exports.V1Payment = V1Payment;
//# sourceMappingURL=v1Payment.js.map