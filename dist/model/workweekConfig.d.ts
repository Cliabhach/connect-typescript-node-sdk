export declare class WorkweekConfig {
    'id'?: string;
    'startOfWeek': string;
    'startOfDayLocalTime': string;
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
