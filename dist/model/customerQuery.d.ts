import { CustomerFilter } from './customerFilter';
import { CustomerSort } from './customerSort';
export declare class CustomerQuery {
    'filter'?: CustomerFilter;
    'sort'?: CustomerSort;
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
