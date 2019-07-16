import { V1Money } from './v1Money';
export declare class V1Discount {
    'id'?: string;
    'name'?: string;
    'rate'?: string;
    'amountMoney'?: V1Money;
    'discountType'?: string;
    'pinRequired'?: boolean;
    'color'?: string;
    'v2Id'?: string;
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
