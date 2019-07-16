import { BusinessHoursPeriod } from './businessHoursPeriod';
export declare class BusinessHours {
    'periods'?: Array<BusinessHoursPeriod>;
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
