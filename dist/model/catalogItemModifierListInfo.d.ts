import { CatalogModifierOverride } from './catalogModifierOverride';
export declare class CatalogItemModifierListInfo {
    'modifierListId': string;
    'modifierOverrides'?: Array<CatalogModifierOverride>;
    'minSelectedModifiers'?: number;
    'maxSelectedModifiers'?: number;
    'enabled'?: boolean;
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
