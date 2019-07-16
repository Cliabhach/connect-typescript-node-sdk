import { V1Category } from './v1Category';
import { V1Fee } from './v1Fee';
import { V1ItemImage } from './v1ItemImage';
import { V1ModifierList } from './v1ModifierList';
import { V1Variation } from './v1Variation';
export declare class V1Item {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'type'?: string;
    'color'?: string;
    'abbreviation'?: string;
    'visibility'?: string;
    'availableOnline'?: boolean;
    'masterImage'?: V1ItemImage;
    'category'?: V1Category;
    'variations'?: Array<V1Variation>;
    'modifierLists'?: Array<V1ModifierList>;
    'fees'?: Array<V1Fee>;
    'taxable'?: boolean;
    'categoryId'?: string;
    'availableForPickup'?: boolean;
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
