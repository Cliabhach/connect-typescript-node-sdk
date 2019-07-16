import { Money } from './money';
export declare class CreateOrderRequestModifier {
    'catalogObjectId'?: string;
    'name'?: string;
    'basePriceMoney'?: Money;
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
