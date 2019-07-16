import { SearchOrdersFilter } from './searchOrdersFilter';
import { SearchOrdersSort } from './searchOrdersSort';
export declare class SearchOrdersQuery {
    'filter'?: SearchOrdersFilter;
    'sort'?: SearchOrdersSort;
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
