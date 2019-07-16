export declare class DeleteCatalogObjectResponse {
    'errors'?: Array<Error>;
    'deletedObjectIds'?: Array<string>;
    'deletedAt'?: string;
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
