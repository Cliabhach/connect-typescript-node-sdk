import { V1Money } from './v1Money';
export declare class V1ModifierOption {
    'id'?: string;
    'name'?: string;
    'priceMoney'?: V1Money;
    'onByDefault'?: boolean;
    'ordinal'?: number;
    'modifierListId'?: string;
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
