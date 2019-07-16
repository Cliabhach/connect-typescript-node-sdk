import { CatalogObject } from './catalogObject';
export declare class BatchRetrieveCatalogObjectsResponse {
    'errors'?: Array<Error>;
    'objects'?: Array<CatalogObject>;
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
