import { Break } from './break';
import { ShiftWage } from './shiftWage';
export declare class Shift {
    'id'?: string;
    'employeeId': string;
    'locationId'?: string;
    'timezone'?: string;
    'startAt': string;
    'endAt'?: string;
    'wage'?: ShiftWage;
    'breaks'?: Array<Break>;
    'status'?: string;
    'version'?: number;
    'createdAt'?: string;
    'updatedAt'?: string;
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
