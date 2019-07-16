import { CatalogObject } from './catalogObject';
import { SquareError } from './squareError';
export declare class BatchRetrieveCatalogObjectsResponse {
    'errors'?: Array<SquareError>;
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
