import { Money } from './money';
export declare class OrderReturnLineItemModifier {
    'uid'?: string;
    'sourceModifierUid'?: string;
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
