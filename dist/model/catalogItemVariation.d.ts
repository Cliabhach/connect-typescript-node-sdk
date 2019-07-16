import { ItemVariationLocationOverrides } from './itemVariationLocationOverrides';
import { Money } from './money';
export declare class CatalogItemVariation {
    'itemId'?: string;
    'name'?: string;
    'sku'?: string;
    'upc'?: string;
    'ordinal'?: number;
    'pricingType'?: string;
    'priceMoney'?: Money;
    'locationOverrides'?: Array<ItemVariationLocationOverrides>;
    'trackInventory'?: boolean;
    'inventoryAlertType'?: string;
    'inventoryAlertThreshold'?: number;
    'userData'?: string;
    'serviceDuration'?: number;
    'measurementUnitId'?: string;
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
