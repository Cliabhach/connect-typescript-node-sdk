export declare class BusinessHoursPeriod {
    'dayOfWeek'?: string;
    'startLocalTime'?: string;
    'endLocalTime'?: string;
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
