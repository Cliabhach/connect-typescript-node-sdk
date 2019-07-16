export declare class Break {
    'id'?: string;
    'startAt': string;
    'endAt'?: string;
    'breakTypeId': string;
    'name': string;
    'expectedDuration': string;
    'isPaid': boolean;
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
