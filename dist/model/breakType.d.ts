export declare class BreakType {
    'id'?: string;
    'locationId': string;
    'breakName': string;
    'expectedDuration': string;
    'isPaid': boolean;
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
