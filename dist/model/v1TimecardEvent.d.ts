export declare class V1TimecardEvent {
    'id'?: string;
    'eventType'?: string;
    'clockinTime'?: string;
    'clockoutTime'?: string;
    'createdAt'?: string;
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
