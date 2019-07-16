export declare class Address {
    'addressLine1'?: string;
    'addressLine2'?: string;
    'addressLine3'?: string;
    'locality'?: string;
    'sublocality'?: string;
    'sublocality2'?: string;
    'sublocality3'?: string;
    'administrativeDistrictLevel1'?: string;
    'administrativeDistrictLevel2'?: string;
    'administrativeDistrictLevel3'?: string;
    'postalCode'?: string;
    'country'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'organization'?: string;
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
