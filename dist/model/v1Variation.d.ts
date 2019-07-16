import { V1Money } from './v1Money';
export declare class V1Variation {
    'id'?: string;
    'name'?: string;
    'itemId'?: string;
    'ordinal'?: number;
    'pricingType'?: string;
    'priceMoney'?: V1Money;
    'sku'?: string;
    'trackInventory'?: boolean;
    'inventoryAlertType'?: string;
    'inventoryAlertThreshold'?: number;
    'userData'?: string;
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
