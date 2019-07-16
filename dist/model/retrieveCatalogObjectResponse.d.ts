import { CatalogObject } from './catalogObject';
import { SquareError } from './squareError';
export declare class RetrieveCatalogObjectResponse {
    'errors'?: Array<SquareError>;
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
