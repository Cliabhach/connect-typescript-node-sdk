import { ShiftQuery } from './shiftQuery';
export declare class SearchShiftsRequest {
    'query'?: ShiftQuery;
    'limit'?: number;
    'cursor'?: string;
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
