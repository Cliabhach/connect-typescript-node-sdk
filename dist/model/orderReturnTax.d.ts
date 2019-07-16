import { Money } from './money';
export declare class OrderReturnTax {
    'uid'?: string;
    'sourceTaxUid'?: string;
    'catalogObjectId'?: string;
    'name'?: string;
    'type'?: string;
    'percentage'?: string;
    'appliedMoney'?: Money;
    'scope'?: string;
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
