import { Money } from './money';
export declare class OrderLineItemDiscount {
    'uid'?: string;
    'catalogObjectId'?: string;
    'name'?: string;
    'type'?: string;
    'percentage'?: string;
    'amountMoney'?: Money;
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
