import { V1Money } from './v1Money';
import { V1PaymentDiscount } from './v1PaymentDiscount';
import { V1PaymentItemDetail } from './v1PaymentItemDetail';
import { V1PaymentModifier } from './v1PaymentModifier';
import { V1PaymentTax } from './v1PaymentTax';
export declare class V1PaymentItemization {
    'name'?: string;
    'quantity'?: number;
    'itemizationType'?: string;
    'itemDetail'?: V1PaymentItemDetail;
    'notes'?: string;
    'itemVariationName'?: string;
    'totalMoney'?: V1Money;
    'singleQuantityMoney'?: V1Money;
    'grossSalesMoney'?: V1Money;
    'discountMoney'?: V1Money;
    'netSalesMoney'?: V1Money;
    'taxes'?: Array<V1PaymentTax>;
    'discounts'?: Array<V1PaymentDiscount>;
    'modifiers'?: Array<V1PaymentModifier>;
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
