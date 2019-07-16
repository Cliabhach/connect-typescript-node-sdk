import { CatalogObject } from './catalogObject';
export declare class SearchCatalogObjectsResponse {
    'errors'?: Array<Error>;
    'cursor'?: string;
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
