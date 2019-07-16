import { DateRange } from './dateRange';
export declare class ShiftWorkday {
    'dateRange'?: DateRange;
    'matchShiftsBy'?: string;
    'defaultTimezone'?: string;
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
