import { V1Money } from './v1Money';
import { V1PaymentSurcharge } from './v1PaymentSurcharge';
import { V1PaymentTax } from './v1PaymentTax';
export declare class V1Refund {
    'type'?: string;
    'reason'?: string;
    'refundedMoney'?: V1Money;
    'refundedProcessingFeeMoney'?: V1Money;
    'refundedTaxMoney'?: V1Money;
    'refundedAdditiveTaxMoney'?: V1Money;
    'refundedAdditiveTax'?: Array<V1PaymentTax>;
    'refundedInclusiveTaxMoney'?: V1Money;
    'refundedInclusiveTax'?: Array<V1PaymentTax>;
    'refundedTipMoney'?: V1Money;
    'refundedDiscountMoney'?: V1Money;
    'refundedSurchargeMoney'?: V1Money;
    'refundedSurcharges'?: Array<V1PaymentSurcharge>;
    'createdAt'?: string;
    'processedAt'?: string;
    'paymentId'?: string;
    'merchantId'?: string;
    'isExchange'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
