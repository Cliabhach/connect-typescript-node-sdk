import { CatalogObject } from './catalogObject';
import { SquareError } from './squareError';
export declare class ListCatalogResponse {
    'errors'?: Array<SquareError>;
    'cursor'?: string;
    'objects'?: Array<CatalogObject>;
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
