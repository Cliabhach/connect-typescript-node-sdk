import { V1Money } from './v1Money';
export declare class V1PaymentDiscount {
    'name'?: string;
    'appliedMoney'?: V1Money;
    'discountId'?: string;
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
