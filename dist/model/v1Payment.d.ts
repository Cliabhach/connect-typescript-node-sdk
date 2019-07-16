import { Device } from './device';
import { V1Money } from './v1Money';
import { V1PaymentItemization } from './v1PaymentItemization';
import { V1PaymentSurcharge } from './v1PaymentSurcharge';
import { V1PaymentTax } from './v1PaymentTax';
import { V1Refund } from './v1Refund';
import { V1Tender } from './v1Tender';
export declare class V1Payment {
    'id'?: string;
    'merchantId'?: string;
    'createdAt'?: string;
    'creatorId'?: string;
    'device'?: Device;
    'paymentUrl'?: string;
    'receiptUrl'?: string;
    'inclusiveTaxMoney'?: V1Money;
    'additiveTaxMoney'?: V1Money;
    'taxMoney'?: V1Money;
    'tipMoney'?: V1Money;
    'discountMoney'?: V1Money;
    'totalCollectedMoney'?: V1Money;
    'processingFeeMoney'?: V1Money;
    'netTotalMoney'?: V1Money;
    'refundedMoney'?: V1Money;
    'swedishRoundingMoney'?: V1Money;
    'grossSalesMoney'?: V1Money;
    'netSalesMoney'?: V1Money;
    'inclusiveTax'?: Array<V1PaymentTax>;
    'additiveTax'?: Array<V1PaymentTax>;
    'tender'?: Array<V1Tender>;
    'refunds'?: Array<V1Refund>;
    'itemizations'?: Array<V1PaymentItemization>;
    'surchargeMoney'?: V1Money;
    'surcharges'?: Array<V1PaymentSurcharge>;
    'isPartial'?: boolean;
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
