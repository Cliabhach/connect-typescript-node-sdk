import { CatalogItemModifierListInfo } from './catalogItemModifierListInfo';
import { CatalogObject } from './catalogObject';
export declare class CatalogItem {
    'name'?: string;
    'description'?: string;
    'abbreviation'?: string;
    'labelColor'?: string;
    'availableOnline'?: boolean;
    'availableForPickup'?: boolean;
    'availableElectronically'?: boolean;
    'categoryId'?: string;
    'taxIds'?: Array<string>;
    'modifierListInfo'?: Array<CatalogItemModifierListInfo>;
    'variations'?: Array<CatalogObject>;
    'productType'?: string;
    'skipModifierScreen'?: boolean;
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
