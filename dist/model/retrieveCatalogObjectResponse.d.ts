import { CatalogObject } from './catalogObject';
export declare class RetrieveCatalogObjectResponse {
    'errors'?: Array<Error>;
    'object'?: CatalogObject;
    'relatedObjects'?: Array<CatalogObject>;
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
