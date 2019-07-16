export declare class V1Employee {
    'id'?: string;
    'firstName': string;
    'lastName': string;
    'roleIds'?: Array<string>;
    'authorizedLocationIds'?: Array<string>;
    'email'?: string;
    'status'?: string;
    'externalId'?: string;
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
