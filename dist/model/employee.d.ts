export declare class Employee {
    'id'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'locationIds'?: Array<string>;
    'status'?: string;
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
