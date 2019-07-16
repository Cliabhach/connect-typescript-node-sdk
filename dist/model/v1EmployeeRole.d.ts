export declare class V1EmployeeRole {
    'id'?: string;
    'name': string;
    'permissions': Array<string>;
    'isOwner'?: boolean;
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
