import { CatalogCategory } from './catalogCategory';
import { CatalogDiscount } from './catalogDiscount';
import { CatalogImage } from './catalogImage';
import { CatalogItem } from './catalogItem';
import { CatalogItemVariation } from './catalogItemVariation';
import { CatalogMeasurementUnit } from './catalogMeasurementUnit';
import { CatalogModifier } from './catalogModifier';
import { CatalogModifierList } from './catalogModifierList';
import { CatalogPricingRule } from './catalogPricingRule';
import { CatalogProductSet } from './catalogProductSet';
import { CatalogTax } from './catalogTax';
import { CatalogTimePeriod } from './catalogTimePeriod';
import { CatalogV1Id } from './catalogV1Id';
export declare class CatalogObject {
    'type': string;
    'id': string;
    'updatedAt'?: string;
    'version'?: number;
    'isDeleted'?: boolean;
    'catalogV1Ids'?: Array<CatalogV1Id>;
    'presentAtAllLocations'?: boolean;
    'presentAtLocationIds'?: Array<string>;
    'absentAtLocationIds'?: Array<string>;
    'imageId'?: string;
    'itemData'?: CatalogItem;
    'categoryData'?: CatalogCategory;
    'itemVariationData'?: CatalogItemVariation;
    'taxData'?: CatalogTax;
    'discountData'?: CatalogDiscount;
    'modifierListData'?: CatalogModifierList;
    'modifierData'?: CatalogModifier;
    'timePeriodData'?: CatalogTimePeriod;
    'productSetData'?: CatalogProductSet;
    'pricingRuleData'?: CatalogPricingRule;
    'imageData'?: CatalogImage;
    'measurementUnitData'?: CatalogMeasurementUnit;
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
