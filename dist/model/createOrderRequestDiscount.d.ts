import { Money } from './money';
export declare class CreateOrderRequestDiscount {
    'catalogObjectId'?: string;
    'name'?: string;
    'percentage'?: string;
    'amountMoney'?: Money;
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
