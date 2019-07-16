export declare class V1Timecard {
    'id'?: string;
    'employeeId': string;
    'deleted'?: boolean;
    'clockinTime'?: string;
    'clockoutTime'?: string;
    'clockinLocationId'?: string;
    'clockoutLocationId'?: string;
    'createdAt'?: string;
    'updatedAt'?: string;
    'regularSecondsWorked'?: number;
    'overtimeSecondsWorked'?: number;
    'doubletimeSecondsWorked'?: number;
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
