import { ShiftFilter } from './shiftFilter';
import { ShiftSort } from './shiftSort';
export declare class ShiftQuery {
    'filter'?: ShiftFilter;
    'sort'?: ShiftSort;
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
