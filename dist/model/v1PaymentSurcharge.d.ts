import { V1Money } from './v1Money';
import { V1PaymentTax } from './v1PaymentTax';
export declare class V1PaymentSurcharge {
    'name'?: string;
    'appliedMoney'?: V1Money;
    'rate'?: string;
    'amountMoney'?: V1Money;
    'type'?: string;
    'taxable'?: boolean;
    'taxes'?: Array<V1PaymentTax>;
    'surchargeId'?: string;
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
