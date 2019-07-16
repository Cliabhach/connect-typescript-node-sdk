import { CatalogQueryExact } from './catalogQueryExact';
import { CatalogQueryItemsForModifierList } from './catalogQueryItemsForModifierList';
import { CatalogQueryItemsForTax } from './catalogQueryItemsForTax';
import { CatalogQueryPrefix } from './catalogQueryPrefix';
import { CatalogQueryRange } from './catalogQueryRange';
import { CatalogQuerySortedAttribute } from './catalogQuerySortedAttribute';
import { CatalogQueryText } from './catalogQueryText';
export declare class CatalogQuery {
    'sortedAttributeQuery'?: CatalogQuerySortedAttribute;
    'exactQuery'?: CatalogQueryExact;
    'prefixQuery'?: CatalogQueryPrefix;
    'rangeQuery'?: CatalogQueryRange;
    'textQuery'?: CatalogQueryText;
    'itemsForTaxQuery'?: CatalogQueryItemsForTax;
    'itemsForModifierListQuery'?: CatalogQueryItemsForModifierList;
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
