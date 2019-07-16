import { ShiftWorkday } from './shiftWorkday';
import { TimeRange } from './timeRange';
export declare class ShiftFilter {
    'locationId'?: Array<string>;
    'employeeId'?: Array<string>;
    'status'?: string;
    'start'?: TimeRange;
    'end'?: TimeRange;
    'workday'?: ShiftWorkday;
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
