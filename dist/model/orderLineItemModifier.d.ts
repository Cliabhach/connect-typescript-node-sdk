import { Money } from './money';
export declare class OrderLineItemModifier {
    'uid'?: string;
    'catalogObjectId'?: string;
    'name'?: string;
    'basePriceMoney'?: Money;
    'totalPriceMoney'?: Money;
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
